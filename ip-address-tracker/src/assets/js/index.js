const addressInput = document.querySelector('.address-input');
const submitBtn = document.querySelector('.search-btn');
const errorMess = document.querySelector('.error');
const ipAddress = document.querySelector('.ip-address');
const loc = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');

// Setting up the map
const api_key = IPIFY_API_KEY;
const access_token = MAPBOX_TOKEN;
let marker;
const tileUrl = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${access_token}`;
const attribution = '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.mapbox.com/">Mapbox</a>';

const streets = L.tileLayer(tileUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, maxZoom: 18, attribution: attribution }),
  light = L.tileLayer(tileUrl, { id: 'mapbox/light-v10', tileSize: 512, zoomOffset: -1, maxZoom: 18, attribution: attribution }),
  satellite = L.tileLayer(tileUrl, { id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, maxZoom: 18, attribution: attribution });
const baseMaps = {
  Streets: streets,
  Light: light,
  Satellite: satellite,
};
const mymap = L.map('map', { zoomControl: false, center: [16.075239, 108.224136], zoom: 13, layers: [streets] });
L.control.layers(baseMaps, '', { position: 'bottomright' }).addTo(mymap);
L.control.zoom({ position: 'bottomleft' }).addTo(mymap);

function getMarker(info) {
  const pos = [info.location.lat, info.location.lng];
  const svgMarker = L.icon({
    iconUrl: '../../../src/images/icon-location.svg',
    iconAnchor: [23, 56],
  });
  if (marker) {
    marker.remove();
  }
  marker = L.marker(pos, { icon: svgMarker });
  marker.addTo(mymap);
  mymap.setView(pos, 16);
}

async function getDeviceAddress() {
  let response = await fetch(`https://api.ipify.org?format=json`);
  if (!response) {
    throw new Error(`HTTP error! status: ${response.statusText}`);
  }
  let result = await response.json();
  return result;
}
getDeviceAddress()
  .then(result => {
    let data = result.ip;
    ipTracker(data);
  })
  .catch(error => {
    console.log(error.message);
  });

async function ipTracker(value, typeRequest = 'ip') {
  try {
    let requestQuery = 'ipAddress=' + value;
    // console.log(`Search by ${typeRequest}`);
    if (typeRequest === 'domain') {
      requestQuery = requestQuery.replace('ipAddress', 'domain');
    }
    let response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&${requestQuery}`);
    if (!response.ok) {
      throw new Error(`Cannot fetch the data (${response.statusText})`);
    }
    let data = await response.json();
    ipAddress.innerHTML = data.ip;
    loc.innerHTML = data.location.city + ', ' + data.location.region + ' ' + data.location.postalCode;
    timezone.innerHTML = 'UTC ' + data.location.timezone;
    isp.innerHTML = data.isp;
    getMarker(data);
    return data;
  } catch (error) {
    errorMess.innerText = 'Bad Request!';
    errorMess.classList.add('visible');
    console.log(error.message);
  }
}

function searchTracker() {
  let inputValue = addressInput.value.trim();
  if (checkValidDomain(inputValue)) {
    if (errorMess.classList.contains('visible')) {
      errorMess.classList.remove('visible');
    }
    ipTracker(inputValue, 'domain');
  } else if (checkValidIpv4(inputValue) || checkValidIpv6(inputValue)) {
    if (errorMess.classList.contains('visible')) {
      errorMess.classList.remove('visible');
    }
    ipTracker(inputValue);
  } else {
    errorMess.innerText = 'Please enter a valid IP';
    errorMess.classList.add('visible');
  }
}

submitBtn.addEventListener('click', searchTracker);

// Trigger button click on Enter key
addressInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    submitBtn.click();
  }
});

function checkValidIpv4(value) {
  const pattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  return pattern.test(value);
}
function checkValidIpv6(value) {
  const pattern =
    /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
  return pattern.test(value);
}
function checkValidDomain(value) {
  const pattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;
  return pattern.test(value);
}
