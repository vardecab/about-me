// get coords from IP address 
$.getJSON('https://json.geoiplookup.io/', function (geo) {
    // debug: check API data
    console.log(geo);
    // get coords
    var lat = geo.latitude;
    var lng = geo.longitude;
    // debug: show coords
    console.log("lat: " + lat);
    console.log("lng: " + lng);

    // get sunrise & sunset times
    $.getJSON('https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + "&formatted=0", function (sun) {
        // debug: check API data
        console.log(sun);
        // sunrise
        var timeSunrise = new Date(sun.results.sunrise);
        console.log("sunrise local: " + timeSunrise); // debug
        // sunset
        // console.log("sunset time from API (UTC): " + sun.results.sunset); // debug
        var timeSunset = new Date(sun.results.sunset);
        console.log("sunset local: " + timeSunset); // debug
        // time on the user's machine
        var timeMachine = new Date();
        console.log("local time on the user's machine: " + timeMachine);
        // compare
        if (timeMachine >= timeSunset || timeMachine < timeSunrise) {
            // debug
            console.log("Looks like a night. Let's turn on dark mode! 🌒");
            // body
            document.body.style.backgroundColor = "var(--dark-background)";
            // font
            document.body.style.color = "var(--dark-background-font)";
            // highlight
            stylesheet = document.styleSheets[0]
            stylesheet.insertRule(".highlight {color: var(--dark-background-highlight);}", 0);
        } else {
            // debug
            console.log("Looks like a day. Light mode it is 🔆");
            //body
            document.body.style.backgroundColor = "var(--light-background)";
            // font
            document.body.style.color = "var(--light-background-font)";
        }
    })
})