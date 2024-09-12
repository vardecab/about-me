# My personal website 

![Actively Maintained](https://img.shields.io/badge/Maintenance%20Level-Actively%20Maintained-green.svg)

## Status 

![](https://img.shields.io/uptimerobot/status/m790573379-e33750f4cf235edff869bb94)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fe8c385b-e7d3-4ee2-84f3-be892eedf5db/deploy-status)](https://app.netlify.com/sites/wizardly-yonath-9f0c6a/deploys)

![](https://img.shields.io/uptimerobot/ratio/m790573379-e33750f4cf235edff869bb94)

<!-- ## PageSpeed Insights

![PageSpeed Insights](https://pagespeed-insights.herokuapp.com/?url=https://kuba.rdzak.com) -->

## Release History

- 2.27.1: Disabled theme color.
- 2.27: Updated for 2024 (text, numbers, jobs, books); redirect removed.
- 2.26: Hiding content and redirecting to [Bento](https://bento.me/kubardzak).
- 2.25: Updated links.
- 2.24: New job, new photo.
- 2.23.1: Fixed typo.
- 2.23: Updated numbers and text.
- 2.22: Changes to social links; improved padding for icon in the nav bar; improved position of title in nav bar.
- 2.21: Text updates.
- 2.20: Text updates.
- 2.19: Text updates.
- 2.18: Text updates.
- 2.17: Text updates.
- 2.16.1: Compressed a photo to improve mobile's PageSpeed score.
- 2.16: Text updates; fixed highlighted selection colors.
- 2.15.1: Regression fixes to conflicted branches, wrong filenames, missing files.
- 2.15: Added PayPal link; changed icons.
- 2.14: Added email link.
- 2.13.2: Updated Stripe link.
- 2.13.1: Added missing logo to the header on `photos.html`; fixed `og:image` on `photos.html`.
- 2.13: Added logo to the header; updated `og:image`.
- 2.12: Changed favicons.
- 2.11: Lots of tiny fixes, mainly to the layout.
- 2.10.4: Regression bug fix: unable to filter photos in `photos.html`.
- 2.10.3: Disabled unused JS and CSS files in `photos.html`.
- 2.10.2: Tiny text tweak.
- 2.10.1: Optimised photos.
- 2.10: Changed texts; changed photo and favicons; added new photos; moved photos to a separate page to save bandwidth and improve loading speed.
- 2.9.2: Tiny text tweaks.
- 2.9.1: Fixes to Photos section because filters didn't work — updated `Isotope`, changed files' order, `min`ified and enabled `defer` in all remaining files; tweaked animations' speed; fixed menu button on mobile.
- 2.9: Added new skills; added new icons; changed skills' icons' color.
- 2.8: Added links to CXL badges so they lead to certificates @ Accredible; fixed spacing between sections in Experience; fixed spacing in Resume; added links to Minidegree certificates in Certificates section; added a few more sentences to dynamic headline.
- 2.7: Added `robots.txt`; converted one last photo `.jpg` → `.WebP`; enabled `script defer` again...
- 2.6.8-11: Looks like the culprit (and why there were so many patches) was the order of files in `<head>` (－‸ლ)
- 2.6.7: Tweaks to dynamic headline; moved scripts to `<head>` so they load before photos => improved UX.
- 2.6.5: Added some more `title`s to links and photos.
- 2.6.4: Updated `sitemap.xml`.
- 2.6.3: Disabled lazy loading via Lozad.
- 2.6.2: Resized images to reduce their size, again.
- 2.6.1: Resized images to reduce their size.
- 2.6: Trying new lazy loading method [Lozad](https://apoorv.pro/lozad.js/); categorized certificates + some styling fixes.
- 2.5: Added new verification tag for Google Search Console; disabled lazy loading because it doesn't work for Photos in current implementation.

<details>

<summary>
Click to see all updates < 2.5.0
</summary>

<br>
v2

- 2.4.1: Fixed photo zoom icon not showing up.
- 2.4: Moved from GitHub Pages to Netlify; removed lorem ipsum texts; updated URLs.
- 2.3: Disabled border in Resume section; changed numbers in counters; tweaked texts; added certificates; re-enabled automatic certificates counting; added badges.
- 2.2.1: Updated location of Open Graph image.
- 2.2: Changed all icons to Font Awesome to improve PageSpeed; cleaned code a bit; changed tags for Photos; changed numbers in counters; switched another 2 files to minimized versions; disabled some redundant scripts to lower # of loaded resources; `defer` enabled for scripts.
- 2.1.1: Fixed messed up CSS; lazy-loading enabled for additional photos.
- 2.1: Removed Instagram links; changed photo name; added dynamic headline; cleaned up code; removed smiley logo; further PageSpeed improvements: deferring files & lazy-loading images; added easter egg.
- 2.0.5: Changed a tag for 1 photo; removed 1 duplicated photo.
- 2.0.4: Changed a tag for 1 photo.
- 2.0.3: Increased `line-height`; text tweak; logo position tweaks; PageSpeed improvements: compressed images.
- 2.0.2: Added text on hover (with `title`) to social media links.
- 2.0.1: Small tweak to how highlighted words look like.
- 2.0.0: Changed template but aimed to achieve similar look with additional functionality; added new sections & elements; updated texts & links; removed (temporarily?) `autoRating`.

v1

- 0.42: Switched to centered layout.
- 0.41: Added new workplace; increase `wrapper` width; changed numbers from GrowthMentor; changed unordered list style.
- 0.40: Hid the footer due to bugs; moved certificates to separate subpage; fixed `margin-left` for lists.
- 0.39.1: Added 'Hello'. 
- 0.39: Re-wrote `autoRating` after GrowthMentor published new version of Mentor pages.
- 0.38: Simplified homepage; changed main font; played around with `word-spacing`; text changes; changed Stripe URL; added sticky footer.
- 0.37.4: Added a new certificate.
- 0.37.3: Added new certificates; text changes.
- 0.37.2: Added new certificates.
- 0.37.1: Added new certificates.
- 0.37: Fixed `soup.select`'s to scrape #s properly in `autoRating` due to a change in GrowthMentor's page DOM.   
- 0.36.2: Text changes.
- 0.36.1: Updated preso URL.
- 0.36: Added `meta name="apple-mobile-web-app-status-bar-style"` for Safari @ iOS 15; text changes; added new certificates.
- 0.35.2: Added a new certificate.
- 0.35.1: Added new certificates; increased `line-height`; text changes; improved `alt` text for cover photo.
- 0.35: Added new certificate; automatically counting number of certificates.
- 0.34.2: Added new certificates; text changes.
- 0.34.1: Updated the headline; added a total number of certificates.
- 0.34: Restyled certificate issuers' badges (added colors); reordered certificates; moved Certificates section higher in the hierarchy; changed Umbrella's URL to GitHub and removed its tooltip.
- 0.33.1: Added a new review.
- 0.33: Small text tweak; changed meta description; changed headline; different selection color for highlighted words.
- 0.32: Updated a lot of text.
- 0.31.1: Added a new review.
- 0.31: Added # of reviews to the nav; improved the look of nav on devices with width < 680 px; executing JavaScript only after `DOMContentLoaded`; deferred load of `bits.js`.
- 0.30.4: Added Stripe URL. 
- 0.30.3: Removed URL to Instagram from main page.
- 0.30.2: Text tweaks.
- 0.30.1: Small tweaks to background pattern.
- 0.30: Added `noscript` fallback for audio file when JavaScript is turned off / blocked; tweaked Recommendations page to hide "automagically updated (...)" text when JavaScript is off; simplified & changed colors in the palette; added indentation in Toolstack section so it's easier to read; improved scrollbar's look in dark mode.
- 0.29: Added background pattern. 
- 0.28: Added `bits.js` file to control scripts from one place; changing color of console message depending on light/dark mode; code looks a bit cleaner.
- 0.27.1: Tiny fixes to Open Graph meta tags.
- 0.27: Added pronunciation w/ audio file of my name. 
- 0.26: Added cover image; changed path to `og:image`.
- 0.25.13: Text changes.
- 0.25.12: Added new certificate.
- 0.25.11: Added new certificate.
- 0.25.10: Added text.
- 0.25.9: Added new certificates.
- 0.25.7: Added new certificates.
- 0.25.6: Re-added fudge recipe.
- 0.25.5: Added a new review.
- 0.25.4: Added some more text.
- 0.25.3: Added some more text to GrowthMentor.
- 0.25.2: Added a link to an article; removed fudge recipe.
- 0.25.1: Attempt at fixing `og:image` not showing on messaging apps; added a couple easter eggs.
- 0.25: Added fallbacks and `noscript` fallback to `autoRating` logic; changed icon; added a new review.
- 0.24: Modified CSS; changed navbar look on mobile; added blinking icon to indicate that `autoRating` is active.
- 0.23.3: Updated `og:image`. 
- 0.23.2: Updates to Open Graph meta tags.
- 0.23.1: Updated `og:image`. 
- 0.23: Recommendations tab: automatically get number of reviews; added icon for reviews; changed URL for reviews; added info about updating the numbers; updated headline & meta tags.
- 0.22.2: Improved handling of `rating` value.
- 0.22.1: Added macOS & Windows 10 notifications to notify when autoRating update is complete. 
- 0.22: Automatically get rating & number of sessions from GrowthMentor profile. 
- 0.21.2: Added Revolut URL.
- 0.21.1: Fixed icons not displaying.
- 0.21: 'No tracking' notice.
- 0.20.1: Avoid showing invisible text while custom fonts load. 
- 0.20: Optimized loading of icons.
- 0.19.2: Added a new review; fixed typo.
- 0.19.1: Added a couple of things to Hobbies.
- 0.19: Added Recommendations tab; added Telegram; changed dividers; removed some tools 
- 0.18.6: Removed some books, added a few and added a piece about being a Wikipedian.
- 0.18.5: Removed a book.
- 0.18.4: Added a note about being a Goodreads Librarian.
- 0.18.3: Updated Ladder URLs.
- 0.18.2: Updated GrowthMentor URLs to include affiliate piece. 
- 0.18.1: Re-named and re-styled a few things.
- 0.18: Added GrowthMentor.
- 0.17.3: Edited text.
- 0.17.2: Added a quote; narrowed the `#wrapper`.
- 0.17.1: Re-styled tooltips; tweaked text in two places; switched to minified versions of CSS files.
- 0.17: Re-added dark mode based on user's OS settings.
- 0.16: Added a smooth "scroll-to-top" functionality by clicking the yellow divider at the bottom of a page.
- 0.15: Unhid "intro" in `nav` on mobile; edits to "Education" page; removed border for books' URLs; added `ongoing` badge.  
- 0.14.5: Added a new certificate. 
- 0.14.4: Added a new certificate. 
- 0.14.3: Added a new certificate. 
- 0.14.2: A wild workaround to fix padding issue for smiley logo on a MacBook.
- 0.14.1: RWD fix.
- 0.14: Added "Everything else" section to Hobbies tab; improved logo placement for HDPI; edited some text.
- 0.13.1: Added `og:` tags to all subpages; added font source; changed case in page titles; added some more tools to Toolstack section.
- 0.13: Added new font for header/logo, changed `og:image`. 
- 0.12: Added `og:image`.
- 0.11: Added another section to the Experience tab.
- 0.10.1: Tiny text edit. Added an easter egg 👀
- 0.10: Added categories to Toolstack section; edited text.
- 0.9: Edited text; removed unnecessary files.
- 0.8.1: Fix for dark highlights.
- 0.8 Removed `learn-more` page; edited some text; reorganized sections.
- 0.7.1: Added `theme-color` for Chromium-based browsers.
- 0.7: Turned off dark mode & highlight; edited some text.
- 0.6.4: Added some text here and there.
- 0.6.3: Small text changes.
- 0.6.2: Added external link icon. Changed headline.
- 0.6.1: Updated descriptions. 
- 0.6: Dark Mode 2.0 - based on sunset in user's location.
- 0.5.2: SEO fixes.
- 0.5.1: Added quick links to relevant sections.
- 0.5: Custom scrollbar, changed text, added certificates, dark mode between 21:00 & 6:00.
- 0.4.2: Some text changes.
- 0.4.1: Changed Instagram URL.
- 0.4: Improved readability + prep for dark mode.
- 0.3: Changed main icon, favicon, added shape divider, ran code through validator (W3C standards), changed text here and there.
- 0.2.2: Tiny fix to URL underlining.
- 0.2.1: Added Google Search Console tag.
- 0.2: Added some content, fixed `hobbies` layout.
- 0.1.1: Added missing URLs.
- 0.1: Initial release.

</details>

<br>

## Acknowledgements

### Core

- Template used: [Personal](https://bootstrapmade.com/personal-free-resume-bootstrap-template/)
- Sitemap for Google Search Console created with: [XML-Sitemaps](https://www.xml-sitemaps.com/)
- Icons used: [Font Awesome](https://fontawesome.com/)
- Icon font generator: [IcoMoon](https://icomoon.io/)
- Fonts used: [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Sweeney](https://pixlr.com/stock/details/100400577-sweeney-font-family/)
- Compressed images with: [TinyPNG](https://tinypng.com/), [Compressor.io](https://compressor.io/), [WEBP Compressor](https://compress-online.com/compress-webp), [Bulk Resize Photos](https://bulkresizephotos.com/) & [Squoosh](https://squoosh.app)
- Converted to WebP using: [AnyWebP](https://anywebp.com/convert-to-webp.html)
- Minified JS with [this](https://www.digitalocean.com/community/tools/minify)
- [Hosted on Netlify](https://www.netlify.com)

### Libs

- Counters: [PureCounter](https://github.com/srexi/purecounterjs)  
- Photos gallery: [Isotope](https://github.com/metafizzy/isotope)
- Section with recommendations: [Swiper](https://swiperjs.com)
- [jQuery](https://jquery.com)
- Framework: [Bootstrap](https://getbootstrap.com)
- Photo viewer: [GLightbox](https://github.com/biati-digital/glightbox)
<!-- - Image lazy loading: [Lozad](https://apoorv.pro/lozad.js/) -->

### Miscs

- Background pattern from: [Hero Patterns](http://www.heropatterns.com/)
- [Dynamic headline effect](https://usefulangle.com/post/75/typing-effect-animation-javascript-css)
- [ASCII text](http://www.patorjk.com/software/taag)
- [Favicon Generator](https://realfavicongenerator.net)
- [
readme-pagespeed-insights](https://github.com/ankurparihar/readme-pagespeed-insights)
