// wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    // a wild workaround to fix padding issue for smiley logo on a MacBook
    if (window.navigator.platform == "MacIntel") {
        document.getElementById("logo").style.paddingBottom = "0.2em";
    }

    // console message
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
        // black - #ffdf3b
        console.log('%c Hello! 🤓', 'color: #ffdf3b', );
        console.log('%c Wanna discuss how this website was built? Send me a message on Messenger/Telegram/LinkedIn.', 'color: #ffdf3b', );
    } else {
        // light mode
        // yellow - #252525
        console.log('%c Hello! 🤓', 'color: #252525', );
        console.log('%c Wanna discuss how this website was built? Send me a message on Messenger/Telegram/LinkedIn.', 'color: #252525', );
    }

    // show # of reviews in the nav
    fetch("autoRating/reviews.txt")
        .then(response => response.text())
        .then(reviews => {
            reviews = parseInt(reviews)
            if (isNaN(reviews) == false) {
                document.getElementById("reviewsNumber").textContent += reviews;
            }
        });
});