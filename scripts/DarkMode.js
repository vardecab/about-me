window.onload = function time_to_sleep() {
    var today = new Date();
    if (today.getHours() >= 21 || today.getHours() < 6) {
        console.log("Looks like a night."); // debug

        // body
        document.body.style.backgroundColor = "var(--dark-background)"; 
        // font
        document.body.style.color = "var(--dark-background-font)"; 
        // highlight
        stylesheet = document.styleSheets[0]
        stylesheet.insertRule(".highlight { color: var(--dark-background-highlight);}", 0);
    } else {
        console.log("Looks like a day."); // debug
        
        //body
        document.body.style.backgroundColor = "var(--light-background)";
        // font
        document.body.style.color = "var(--light-background-font)";
    }
}