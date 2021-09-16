const addressInput=document.querySelector(".address-input"),submitBtn=document.querySelector(".search-btn"),errorMess=document.querySelector(".error"),ipAddress=document.querySelector(".ip-address"),loc=document.querySelector(".location"),timezone=document.querySelector(".timezone"),isp=document.querySelector(".isp"),api_key="at_NV6KNutm5C29wr5oS76HFrgdWcSkH";function searchTracker(){let e=addressInput.value.trim();checkValidDomain(e)?(errorMess.classList.contains("visible")&&errorMess.classList.remove("visible"),ipTracker(e,"domain")):checkValidIpv4(e)||checkValidIpv6(e)?(errorMess.classList.contains("visible")&&errorMess.classList.remove("visible"),ipTracker(e)):(errorMess.innerText="Please enter a valid IP",errorMess.classList.add("visible"))}async function getDeviceAddress(){let e=await fetch("https://api.ipify.org?format=json");if(!e)throw new Error(`HTTP error! status: ${e.statusText}`);return await e.json()}async function ipTracker(e,t="ip"){try{let a="ipAddress="+e;"domain"===t&&(a=a.replace("ipAddress","domain"));let r=await fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&${a}`);if(!r.ok)throw new Error(`Cannot fetch the data (${r.statusText})`);let s=await r.json();return ipAddress.innerHTML=s.ip,loc.innerHTML=s.location.city+", "+s.location.region+" "+s.location.postalCode,timezone.innerHTML="UTC "+s.location.timezone,isp.innerHTML=s.isp,getMarker(s),s}catch(e){errorMess.innerText="Bad Request!",errorMess.classList.add("visible"),console.log(e.message)}}let map,marker;function initMap(){map=new google.maps.Map(document.getElementById("map"),{zoom:15,center:{lat:16.075239,lng:108.224136},disableDefaultUI:!0,styles:mapstyles})}function getMarker(e){const t={lat:e.location.lat,lng:e.location.lng},a={path:"M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z",fillOpacity:1,strokeWeight:0,rotation:0,scale:.8,anchor:new google.maps.Point(21,46)};marker=new google.maps.Marker({position:t,map:map,icon:a}),map.setCenter(t)}function checkValidIpv4(e){return/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(e)}function checkValidIpv6(e){return/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(e)}function checkValidDomain(e){return/^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/.test(e)}submitBtn.addEventListener("click",searchTracker),addressInput.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),submitBtn.click())})),getDeviceAddress().then((e=>{ipTracker(e.ip)})).catch((e=>{console.log(e.message)}));const mapstyles=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}];
//# sourceMappingURL=script.js.map