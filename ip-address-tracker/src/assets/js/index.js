const addressInput = document.querySelector('.address-input');
const submitBtn = document.querySelector('.search-btn');
const errorMess = document.querySelector('.error');
const ipAddress = document.querySelector('.ip-address');
const loc = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');
const api_key = IPIFY_API_KEY;

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

// Create Map with Google Maps API

let map, marker;

function initMap() {
  const pos = {
    lat: 16.075239,
    lng: 108.224136,
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: pos,
    disableDefaultUI: true,
    styles: mapstyles,
  });
}

function getMarker(info) {
  const pos = {
    lat: info.location.lat,
    lng: info.location.lng,
  };
  const svgMarker = {
    path: 'M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z',
    // fillColor: 'black',
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 0.8,
    anchor: new google.maps.Point(21, 46),
  };
  marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: svgMarker,
    // icon: '../../../src/images/icon-location.svg',
  });
  map.setCenter(pos);
}

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
