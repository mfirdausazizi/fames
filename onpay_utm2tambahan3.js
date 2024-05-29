// Function to get a cookie value by name
function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Function to get a value from a cookie or local storage
function getValueFromCookieOrStorage(name) {
    var value = getCookie(name);
    if (!value) {
        value = localStorage.getItem(name);
    }
    return value;
}

// Get utm parameters from the URL
var utmParams = new URLSearchParams(window.location.search);

// Get utm parameters from the URL, cookies, or local storage
var utmCampaign = utmParams.get("utm_campaign") || getValueFromCookieOrStorage("muCampaign") || "";
var utmTerm = utmParams.get("utm_term") || getValueFromCookieOrStorage("muTerm") || "";
var utmRef = utmParams.get("ref") || "";
var utmAudience = utmParams.get("audience") || "";
var utmID = utmParams.get("utm_id") || getValueFromCookieOrStorage("muID") || "";
var utmContent = utmParams.get("utm_content") || getValueFromCookieOrStorage("muContent") || "";

// Check if extra_field_3 exists
var extraField3 = document.getElementById("extra_field_3");
var extraField3Label = document.querySelector("label[for=extra_field_3]");
if (extraField3 && extraField3Label) {
    var combinedValue = utmCampaign + " / " + utmTerm;

    // Check if audience is "new_customer" or "existing_customer"
    if (utmAudience === "new_customer" || utmAudience === "existing_customer") {
        combinedValue += " / " + utmAudience;
    }

    // Include utm_id and utm_content in the combined value
    if (utmID) {
        combinedValue += " / " + utmID;
    }
    if (utmContent) {
        combinedValue += " / " + utmContent;
    }

    // If utm_campaign is null or undefined, use utm_ref instead
    if (!utmCampaign && utmRef) {
        combinedValue = utmRef;
    }

    // Set the value of extra_field_3 and hide the field
    extraField3.value = combinedValue;
    extraField3.style.display = "none";
    extraField3Label.style.display = "none";
}

// Cookie storage management
var separate = window.location.hostname.split('.');
separate.shift();
var domainName = separate.join('.');

const d = new Date();
let exdays = 360;
d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
let expires = "expires=" + d.toUTCString();

var localutmSource = utmParams.get("utm_source");
var utmSource = encodeURIComponent(localutmSource);

var localutmMedium = utmParams.get("utm_medium");
var utmMedium = encodeURIComponent(localutmMedium);

var localutmCampaign = utmParams.get("utm_campaign");
var utmCampaign = encodeURIComponent(localutmCampaign);

var localutmContent = utmParams.get("utm_content");
var utmContent = encodeURIComponent(localutmContent);

var localutmTerm = utmParams.get("utm_term");
var utmTerm = encodeURIComponent(localutmTerm);

var localutmID = utmParams.get("utm_id");
var utmID = encodeURIComponent(localutmID);

if (utmSource !== null || utmMedium !== null || utmCampaign !== null || utmContent !== null || utmTerm !== null || utmID !== null) {
    document.cookie = "muSource=" + utmSource + ";" + expires + ";path=/; secure; domain=." + domainName;
    document.cookie = "muMedium=" + utmMedium + ";" + expires + ";path=/; secure; domain=." + domainName;
    document.cookie = "muCampaign=" + utmCampaign + ";" + expires + ";path=/; secure; domain=." + domainName;
    document.cookie = "muContent=" + utmContent + ";" + expires + ";path=/; secure; domain=." + domainName;
    document.cookie = "muTerm=" + utmTerm + ";" + expires + ";path=/; secure; domain=." + domainName;
    document.cookie = "muID=" + utmID + ";" + expires + ";path=/; secure; domain=." + domainName;

    localStorage.setItem('muSource', localutmSource);
    localStorage.setItem('muMedium', localutmMedium);
    localStorage.setItem('muCampaign', localutmCampaign);
    localStorage.setItem('muContent', localutmContent);
    localStorage.setItem('muTerm', localutmTerm);
    localStorage.setItem('muID', localutmID);
}

var localfbc = getCookie("_fbc");
localStorage.setItem('_fbc', localfbc);

var localfbp = getCookie("_fbp");
localStorage.setItem('_fbp', localfbp);
