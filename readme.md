//Code for google translator.

<div id="google_translate_element"></div>

  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }
  </script>

  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

  // Remove Header
.goog-te-banner-frame{visibility:hidden !important;}
body{top:0px !important;}