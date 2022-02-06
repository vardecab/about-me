// wait until page's DOM is fully loaded
//* NOTE: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

document.addEventListener('DOMContentLoaded', (event) => {

    /* ---------- padding issue --------- */
    // a wild workaround to fix padding issue for smiley logo on a MacBook
    // if (window.navigator.platform == "MacIntel") {
    //     document.getElementById("logo").style.paddingBottom = "0.2em";
    // }

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
    // fetch("autoRating/reviews.txt")
    //     .then(response => response.text())
    //     .then(reviews => {
    //         reviews = parseInt(reviews)
    //         if (isNaN(reviews) == false) {
    //             document.getElementById("reviewsNumber").textContent += reviews;
    //         }
    //     });

    /* ------- count certificates ------- */
    // marketing
    var listMarketingCertificates = document.getElementById('MarketingCertificates');
    var itemsMarketingCertificates = listMarketingCertificates.getElementsByTagName('li');
    var countMarketingCertificates = itemsMarketingCertificates.length; 
    // // console.log('%cMarketing certificates:' + " " + countMarketingCertificates, 'color: #009a00');
    document.getElementById("totalMarketingCertificates").textContent += "(" + countMarketingCertificates + ")";

    // management
    var listManagementCertificates = document.getElementById('ManagementCertificates');
    var itemsManagementCertificates = listManagementCertificates.getElementsByTagName('li');
    var countManagementCertificates = itemsManagementCertificates.length; 
    // // console.log('%cManagement certificates:' + " " + countManagementCertificates, 'color: #009a00');
    document.getElementById("totalManagementCertificates").textContent += "(" + countManagementCertificates + ")";

    // other
    var listOtherCertificates = document.getElementById('OtherCertificates');
    var itemsOtherCertificates = listOtherCertificates.getElementsByTagName('li');
    var countOtherCertificates = itemsOtherCertificates.length; 
    // // console.log('%cOther certificates:' + " " + countOtherCertificates, 'color: #009a00');
    document.getElementById("totalOtherCertificates").textContent += "(" + countOtherCertificates + ")";

    // Σ
    var totalCertificates = countMarketingCertificates + countManagementCertificates + countOtherCertificates;
    // // console.log('%cTotal # of certificates:' + " " + totalCertificates, 'color: #006700'); 
    document.getElementById("totalCertificates").textContent += "(" + totalCertificates + ")";

    /* -------- dynamic headline -------- */

    //Replace Text function		 
    // $(function () {
    //     count = 0;
    //     wordsArray = ["cool", "amazing", "super"];
    //     setInterval(function () {
    //         count++;
    //         $("#dynamic_headline").fadeOut(500, function () {
    //             $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
    //         });
    //     }, 2000);   
    // });
    //End Replace Text function

    // v2

    // List of sentences
    var _CONTENT = [
        "data-driven Growth Marketer.",
        "5-star Growth Mentor.",
        "efficient Media Buyer.",
        "certified Team Manager."
    ];

    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.querySelector("#dynamic_headline");

    // Cursor element 
    var _CURSOR = document.querySelector("#dynamic_cursor");

    // Implements typing effect
    function Type() {
        // Get substring with 1 characater added
        var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;

        // If full sentence has been displayed then start to delete the sentence after some time
        if (text === _CONTENT[_PART]) {
            // Hide the cursor
            _CURSOR.style.display = 'none';

            clearInterval(_INTERVAL_VAL);
            setTimeout(function () {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }

    // Implements deleting effect
    function Delete() {
        // Get substring with 1 characater deleted
        var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;

        // If sentence has been deleted then start to display the next sentence
        if (text === '') {
            clearInterval(_INTERVAL_VAL);

            // If current sentence was last then display the first one, else move to the next
            if (_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;

            _PART_INDEX = 0;

            // Start to display the next sentence after some time
            setTimeout(function () {
                _CURSOR.style.display = 'inline-block';
                _INTERVAL_VAL = setInterval(Type, 100);
            }, 200);
        }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 50);

});