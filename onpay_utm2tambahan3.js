// Constants for repeated strings
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id"];

// Helper to get a cookie value by name
function getCookie(name) {
    return document.cookie.split(";").map(cookie => cookie.split("=")).find(pair => pair[0].trim() === name)?.[1] || null;
}

// Helper to set data in cookie and local storage
function setData(name, value, domainName) {
    const encodedValue = encodeURIComponent(value);
    const d = new Date();
    d.setTime(d.getTime() + (360 * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${encodedValue};${expires};path=/;secure;domain=.${domainName}`;
    localStorage.setItem(name, value);
}

// Function to get a value from a cookie or local storage
function getValue(name) {
    return getCookie(name) || localStorage.getItem(name);
}

// Collect UTM data from URL or storage
function collectUTMData(utmParams) {
    return UTM_PARAMS.reduce((acc, param) => {
        const value = utmParams.get(param) || getValue(`mu${param.charAt(0).toUpperCase() + param.slice(1)}`);
        if (value) acc[param] = value;
        return acc;
    }, {});
}

// Set hidden field value
function setHiddenFieldValue(data) {
    const extraField3 = document.getElementById("extra_field_3");
    const extraField3Label = document.querySelector("label[for=extra_field_3]");
    if (extraField3 && extraField3Label) {
        extraField3.value = Object.values(data).join(" / ");
        extraField3.style.display = "none";
        extraField3Label.style.display = "none";
    }
}

// Main function to execute UTM handling
function handleUTMTags() {
    const utmParams = new URLSearchParams(window.location.search);
    const utmData = collectUTMData(utmParams);
    
    setHiddenFieldValue(utmData);
    
    const domainName = window.location.hostname.split('.').slice(1).join('.');
    UTM_PARAMS.forEach(param => {
        const value = utmParams.get(param);
        if (value !== null) setData(`mu${param.charAt(0).toUpperCase() + param.slice(1)}`, value, domainName);
    });
}

handleUTMTags();
