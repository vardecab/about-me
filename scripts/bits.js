// wait until page's DOM is fully loaded
//* NOTE: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

document.addEventListener('DOMContentLoaded', (event) => {

    /* ---------- padding issue --------- */
    // a wild workaround to fix padding issue for smiley logo on a MacBook
    if (window.navigator.platform == "MacIntel") {
        document.getElementById("logo").style.paddingBottom = "0.2em";
    }

    /* --------- console message -------- */
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
        // black - #ffdf3b
        console.log('%c Hello! 🤓', 'color: #ffdf3b');
        // console.log('%c Wanna discuss how this website was built? Send me a message on Telegram/LinkedIn.', 'color: #ffdf3b');
    } else {
        // light mode
        // yellow - #252525
        console.log('%cHello! 🤓', 'color: #252525');
        // console.log('%cWanna discuss how this website was built? Send me a message on Telegram/LinkedIn.', 'color: #252525');
    }

    /* -- show # of reviews in the nav -- */
    fetch("autoRating/reviews.txt")
        .then(response => response.text())
        .then(reviews => {
            reviews = parseInt(reviews)
            if (isNaN(reviews) == false) {
                document.getElementById("reviewsNumber").textContent += reviews;
            }
        });

    /* ------- count certificates ------- */
    // marketing
    var listMarketingCertificates = document.getElementById('MarketingCertificates');
    var itemsMarketingCertificates = listMarketingCertificates.getElementsByTagName('li');
    var countMarketingCertificates = itemsMarketingCertificates.length; 
    // console.log('%cMarketing certificates:' + " " + countMarketingCertificates, 'color: #009a00');
    document.getElementById("totalMarketingCertificates").textContent += "(" + countMarketingCertificates + ")";

    // management
    var listManagementCertificates = document.getElementById('ManagementCertificates');
    var itemsManagementCertificates = listManagementCertificates.getElementsByTagName('li');
    var countManagementCertificates = itemsManagementCertificates.length; 
    // console.log('%cManagement certificates:' + " " + countManagementCertificates, 'color: #009a00');
    document.getElementById("totalManagementCertificates").textContent += "(" + countManagementCertificates + ")";

    // other
    var listOtherCertificates = document.getElementById('OtherCertificates');
    var itemsOtherCertificates = listOtherCertificates.getElementsByTagName('li');
    var countOtherCertificates = itemsOtherCertificates.length; 
    // console.log('%cOther certificates:' + " " + countOtherCertificates, 'color: #009a00');
    document.getElementById("totalOtherCertificates").textContent += "(" + countOtherCertificates + ")";

    // Σ
    var totalCertificates = countMarketingCertificates + countManagementCertificates + countOtherCertificates;
    // console.log('%cTotal # of certificates:' + " " + totalCertificates, 'color: #006700'); 
    document.getElementById("totalCertificates").textContent += "(" + totalCertificates + ")";

});