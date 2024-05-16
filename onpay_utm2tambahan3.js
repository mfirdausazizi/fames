document.documentElement.style.scrollBehavior = "smooth";
var separate = window.location.hostname.split('.'); separate.shift();
var domainName = separate.join('.');
var utmparams = new URLSearchParams(window.location.search);

let checkef2 = document.querySelector("label[for=extra_field_2]") !== null;
if (checkef2) { var textef2 = document.querySelector("label[for=extra_field_2]").textContent;
}

let checkef3 = document.querySelector("label[for=extra_field_3]") !== null;
if (checkef3) { var textef3 = document.querySelector("label[for=extra_field_3]").textContent;
}

let utm_campaign = utmparams.get("utm_campaign")
let utm_source = utmparams.get("utm_source")
let utm_term = utmparams.get("utm_term")
let utm_ref = utmparams.get("ref")
let audience = utmparams.get("audience")

let namaAnda = utmparams.get("nama")
let telefonAnda = utmparams.get("telefon")
let emelAnda = utmparams.get("emel")

let localutmSource = utmparams.get("utm_source")
let utmSource = encodeURIComponent(localutmSource);

let localutmMedium = utmparams.get("utm_medium")
let utmMedium = encodeURIComponent(localutmMedium);

let localutmCampaign = utmparams.get("utm_campaign")
let utmCampaign = encodeURIComponent(localutmCampaign);

let localutmFirstCampaign = utmparams.get("utm_campaign")
let utmFirstCampaign = encodeURIComponent(localutmFirstCampaign);

let localutmContent = utmparams.get("utm_content")
let utmContent = encodeURIComponent(localutmContent);

let localutmTerm = utmparams.get("utm_term")
let utmTerm = encodeURIComponent(localutmTerm);

let localutmID = utmparams.get("utm_id")
let utmID = encodeURIComponent(localutmID);

let localutmRef = utmparams.get("ref")
let utmRef = encodeURIComponent(localutmRef);

let localutmPlacement = utmparams.get("utm_placement")
let utmPlacement = encodeURIComponent(localutmPlacement);

let localutmCID = utmparams.get("utm_cid")
let utmCID = encodeURIComponent(localutmCID);

let localutmaudience = utmparams.get("audience")
let utmaudience = encodeURIComponent(localutmaudience);

if (utmparams.get("utm_campaign")){
sessionStorage.setItem('utm_campaign', utmparams.get("utm_campaign")) };

if (utmparams.get("utm_source")){
sessionStorage.setItem('utm_source', utmparams.get("utm_source")) };

if (utmparams.get("utm_term")){
sessionStorage.setItem('utm_term', utmparams.get("utm_term")) };

if (utmparams.get("ref")){
sessionStorage.setItem('utm_ref', utmparams.get("ref")) };

if (utmparams.get("audience")){
sessionStorage.setItem('audience', utmparams.get("audience")) };

utm_campaign = sessionStorage.utm_campaign
utm_source = sessionStorage.utm_source
utm_term = sessionStorage.utm_term
utm_ref = sessionStorage.utm_ref
audience = sessionStorage.audience

let checkClientFullname = document.querySelector("label[for=client_fullname]") !== null;
if (checkClientFullname) {
let fieldFullname = document.getElementById("client_fullname")
fieldFullname.value = namaAnda
}

let checkClientEmail = document.querySelector("label[for=client_email]") !== null;
if (checkClientEmail) {
let fieldEmail = document.getElementById("client_email")
fieldEmail.value = emelAnda
}

let checkClientPhoneNumber = document.querySelector("label[for=client_phone_number]") !== null;
if (checkClientPhoneNumber) {
let fieldPhoneNumber = document.getElementById("client_phone_number")
fieldPhoneNumber.value = telefonAnda
}

combine_campaign_term = utm_campaign + " / " + utm_term;
combine_campaign_term_audience = utm_campaign + " / " + utm_term + " / " + audience;

if (textef2 == "Source") {
document.querySelector("label[for=extra_field_2]").style.display = "none";
document.querySelector("input[id=extra_field_2]").style.display = "none";
let field2 = document.getElementById("extra_field_2")
field2.value = utm_source
}


if (textef3 == "Campaign" || textef3 == "Ref" || textef3 == "Rujukan") {

document.querySelector("label[for=extra_field_3]").style.display = "none";
document.querySelector("input[id=extra_field_3]").style.display = "none";
let field3 = document.getElementById("extra_field_3")
// field3.value = utm_campaign
field3.value = combine_campaign_term

if (audience == "new_customer" || audience == "existing_customer") {
field3.value = combine_campaign_term_audience }

if (utm_campaign == null || utm_campaign == "undefined" && utm_ref !== null) {
field3.value = utm_ref }

}

const d = new Date();
let exdays = 360;
d.setTime(d.getTime() + (exdays*24*60*60*1000));
let expires = "expires="+ d.toUTCString();

if (utmSource !== null || utmMedium !== null || utmCampaign !== null || utmContent !== null || utmTerm !== null || utmID !== null) {

document.cookie = "muSource=" + utmSource + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muMedium=" + utmMedium + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muCampaign=" + utmCampaign + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muContent=" + utmContent + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muTerm=" + utmTerm + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muID=" + utmID + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muRef=" + utmRef + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muPlacement=" + utmPlacement + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muCID=" + utmCID + ";" + expires + ";path=/; secure; domain=." + domainName;
document.cookie = "muAudience=" + utmaudience + ";" + expires + ";path=/; secure; domain=." + domainName;

localStorage.setItem('muSource', localutmSource);
localStorage.setItem('muMedium', localutmMedium);
localStorage.setItem('muCampaign', localutmCampaign);
localStorage.setItem('muContent', localutmContent);
localStorage.setItem('muTerm', localutmTerm);
localStorage.setItem('muID', localutmID);
localStorage.setItem('muRef', localutmRef);
localStorage.setItem('muPlacement', localutmPlacement);
localStorage.setItem('muCID', localutmCID);
localStorage.setItem('muAudience', localutmaudience);

}

if (utmFirstCampaign !== null) {
  
let cFirstCampaign = ('; '+document.cookie).split(`; muFirstCampaign=`).pop().split(';')[0];

      if (cFirstCampaign == "" || cFirstCampaign == null || cFirstCampaign == "null") {
          localStorage.setItem('muFirstCampaign', localutmFirstCampaign);
          document.cookie = "muFirstCampaign=" + utmFirstCampaign + ";" + expires + ";path=/; secure; domain=." + domainName;
          }
          
}

	    function getCookie(name) {
    		var cookieArr = document.cookie.split(";");
    		for(var i = 0; i < cookieArr.length; i++) {
        		var cookiePair = cookieArr[i].split("=");
        		if(name == cookiePair[0].trim()) {
            	return decodeURIComponent(cookiePair[1]); } } 
		    return null;
	    	}

var localfbc = getCookie("_fbc");
localStorage.setItem('_fbc', localfbc);

var localfbp = getCookie("_fbp");
localStorage.setItem('_fbp', localfbp);

var localttp = getCookie("_ttp");
localStorage.setItem('_ttp', localttp);


sessionStorage.setItem("hasRunAxios", "0");
localStorage.setItem("hasRunAxios", "0");

function text(url) { return fetch(url).then(res => res.text()); }

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
let ipRegex = /([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(\d{1,3}\.){3}\d{1,3}/
let myipaddress = data.match(ipRegex)[0];
let currenturl = window.location.protocol + "//" + window.location.host

if (myipaddress == "183.171.27.151" || myipaddress == "183.171.16.18" || myipaddress == "183.171.29.155" || myipaddress == "183.171.29.217") {
alert('Sorry, contact admin to enter');
window.location = currenturl; }
});

let checkbuttonclassname = document.getElementsByClassName("buttonscroll") !== null;
if (checkbuttonclassname) {
	let buttonClassName = document.getElementsByClassName("buttonscroll");
	for(var index=0; index < buttonClassName.length; index++){
		let hrefbuttonscroll = buttonClassName[index].hash;
		buttonClassName[index].href = window.location.href.split("#")[0] + hrefbuttonscroll;
	}
}

let checkbuttonscroll = document.getElementById("buttonscroll") !== null;
if (checkbuttonscroll) {
let hrefscroll = document.getElementById("buttonscroll").hash;
document.getElementById("buttonscroll").href = window.location.href.split("#")[0] + hrefscroll;
}


let checktarikh = document.getElementById("tarikh") !== null;
if (checktarikh) {
const now = new Date();
let days = new Array('Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu');
let months = new Array('Januari','Februari','Mac','April','Mei','Jun','Julai','Ogos','September','Oktober','November','Disember');
let date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
return (number < 1000) ? number + 1900 : number; }
today = days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + " " + (fourdigits(now.getYear())) ;
document.getElementById("tarikh").innerHTML = today;
}


let lejen = document.querySelector('script[src*="utm"]')

let sasaran = lejen.getAttribute("sasaran")
let checklejen = sasaran !== null;

if (checklejen) {
var customDonationCurrentValue = Number(PageData.salesStats.total_amount_all);
var customDonationTargetValue = parseFloat(sasaran);
var customDonationPercentage = (customDonationCurrentValue / customDonationTargetValue) * 100;
$("#custom-donation-current-value").html(customDonationCurrentValue.toLocaleString(undefined, { minimumFractionDigits: 2 }));
$("#custom-donation-target-value").html(customDonationTargetValue.toLocaleString(undefined, { minimumFractionDigits: 2 }));
$("#custom-donation-progress-bar").find(".progress-bar").css("width", (customDonationPercentage > 100 ? 100 : customDonationPercentage).toFixed(2) + "%").html(customDonationPercentage.toFixed(2) + "%"); }


let checkFormUrl = document.getElementById("borang") !== null;

if (checkFormUrl) {

let currentUrl = new URL(window.location.href);
let formElement = document.getElementById("borang");
let anchorElements = document.querySelectorAll('a[href="' + formElement.getAttribute('href') + '"]');

anchorElements.forEach((anchor) => {
  anchor.setAttribute('href', currentUrl.href + '#form');
});

}


let domain = lejen.getAttribute("domain")
let checkdomain = domain !== null;

if (checkdomain) {
    window.addEventListener("message", receiveMessage, false);

    function requestCookiesFromParent() {
        window.parent.postMessage("requestCookies", "https://" + domain);  // Replace with your main domain
    }

    function receiveMessage(event) {
        var allowedOrigin = "https://" + domain;  // Replace with your main domain

        if (event.origin !== allowedOrigin) {
            console.log("Origin not allowed");
            return;
        }

        var cookies = event.data.cookies;
        for (var key in cookies) {
            if (cookies[key] !== null) {
                localStorage.setItem(key, cookies[key]);
            }
        }
    }

    requestCookiesFromParent();
}

let checkuuid = PageData.uuid !== null;
if (checkuuid) {
zaraz.set("uuid", PageData.uuid)
}
