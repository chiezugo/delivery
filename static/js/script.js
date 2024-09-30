/*  DML Courier Servce */


/************ TABLE OF CONTENTS ***************

1. Reset
2. Global Settings
3. Typography Style
4. All Elements Design
5. PreloaderPreloader
6. Page Header
7. Main Navigations
8. Page Conents
9.services Section
10.Projects Section
11.404 page
12.Back To Top
13.Comments Style
14.Sidebar Widgets
15.Sidebar Services
16.sidebar project
17.Contact location
18.Footer
19.Carousel
20.Shortcodes
21.service-box
22.contact-box
23.Projects
24.Counter
25.Testimonials
26.Pricing
27.Services
28.Team
29.Custom Quote



**********************************************/


/*** 

====================================================================
	Reset
====================================================================

 ***/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}


/*** 

====================================================================
	Global Settings
====================================================================

 ***/

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button, html input[type=button], input[type=reset], input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input {
  line-height: normal;
}
input[type=checkbox], input[type=radio] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
  height: auto;
}
input[type=search] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
input[type=text], input[type=email], input[type=url], input[type=password], input[type=search], input[type=number], input[type=tel], input[type=range], input[type=date], input[type=month], input[type=week], input[type=time], input[type=datetime], input[type=datetime-local], input[type=color], textarea {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  border-color: #eaeaea;
  width: 100%;
}
input[type=text]:focus, input[type=email]:focus, input[type=url]:focus, input[type=password]:focus, input[type=search]:focus, input[type=number]:focus, input[type=tel]:focus, input[type=range]:focus, input[type=date]:focus, input[type=month]:focus, input[type=week]:focus, input[type=time]:focus, input[type=datetime]:focus, input[type=datetime-local]:focus, input[type=color]:focus, textarea:focus {
  border-color: #222;
}
/*--------------------------------------------------------------
   Typography
--------------------------------------------------------------*/
body {
  color: #555555;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  background: #fff;
  word-wrap: break-word;
  overflow-x: hidden;
  font-weight: 400;
}
a {
  -webkit-transition: 0.5s;
          transition: 0.5s;
  color: #222;
  text-decoration: none;
}
a:hover,
a:focus {
  text-decoration: none;
  color: #222;
}
a img {
  border: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  color: #222;
}
h1 {
  font-size: 41px;
}
h2 {
  font-size: 34px;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 16px;
}
h6 {
  font-size: 14px;
}




/*--------------------------------------------------------------
   Elements
--------------------------------------------------------------*/

img {
  max-width: 100%;
  height: auto;
}
input[type=text],
textarea {
  border: 1px solid #555;
  background: #fff;
}
blockquote {
  font-size: 16px;
  font-style: italic;
  border-left: 3px solid #ff0000;
  padding: 15px 0 15px 20px;
  margin: 35px 0 35px 40px;
  line-height: 2;
  font-weight: 500;
}
table {
  text-align: left;
}
table tr {
  border: 1px solid #f4f4f4;
  border-bottom-width: 0;
  padding: 5px;
}
table tr td,
table tr th {
  padding: 5px;
  border-bottom: 1px solid #f4f4f4;
  border-left: 1px solid #f4f4f4;
}
.clearfix {
  zoom: 1;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}

.secpadd{padding:70px 0px;}
.secpadd2{padding:70px 0 40px;}
.secpaddbig{padding:100px 0 70px;}
.secpaddlf{padding-top:80px;padding-bottom:80px;}


@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.tabs .tabs-nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
}
.tabs .tabs-nav li {
  float: left;
}
.tabs .tabs-nav a {
  display: block;
}
.tabs .tabs-panel {
  clear: both;
  display: none;
}
.tabs .tabs-panel.active {
  -webkit-animation: fadeIn 1 1s ease;
          animation: fadeIn 1 1s ease;
  display: block;
}
.socials a {
  display: inline-block;
  padding: 0 15px;
  font-size: 18px;
  color: #848484;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.socials a:last-child {
  padding-right: 0;
}
.socials a:first-child {
  padding-left: 0;
}
.socials a:hover {
  color: #ff0000;
}
.main-color {
  color: #ff0000;
}
.main-background-color {
  background-color: #ff0000;
}
.sub-color {
  color: #0c1239;
}
.sub-background-color {
  background-color: #0c1239;
}
.owl-carousel div.owl-item img {
  max-width: 100%;
  width: inherit;
}
.ch_button,
.tp-caption.ch_button {
  -webkit-transition: 0.3s !important;
          transition: 0.3s !important;
  -webkit-border-radius: 0 !important;
          border-radius: 0 !important;
  padding: 17px 35px !important;
  text-align: center !important;
  min-width: 175px !important;
}
.ch_button:hover,
.tp-caption.ch_button:hover {
  border-color: #ff0000 !important;
  background-color: #ff0000 !important;
}
.fh-form p:before,
.fh-form p:after {
  content: '';
  display: table;
}
.fh-form p:after {
  clear: both;
}
.fh-form .single-field {
  clear: both;
}
.fh-form .field {
  margin-bottom: 20px;
}
.fh-form .field.submit {
  margin-bottom: 0;
}
.fh-form input[type=submit] {
  text-transform: capitalize;
  font-size: 15px;
  font-weight: 400;
}
.fh-form input[type=submit]:focus {
  outline: none;
}
.fh-form textarea, .fh-form input[type=text], .fh-form input[type=email], .fh-form select {
  width: 100%;
  border: 1px solid #ececec;
  padding-left: 15px;
  padding-right: 15px;
  color: #848484;
  background-color: #fff;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-form textarea:focus, .fh-form input[type=text]:focus, .fh-form input[type=email]:focus, .fh-form select:focus {
  outline: none;
  border-color: #a8a8a8;
}
.fh-form textarea {
  height: 175px;
  padding: 10px 15px;
}
.fh-form input[type=text], .fh-form input[type=email], .fh-form select {
  font-size: 16px;
  height: 45px;
  line-height: 45px;
}
.fh-form .first-row,
.fh-form .last-row {
  width: 50%;
  padding: 0 15px;
}
.fh-form .first-row {
  float: left;
  padding-left: 0;
  clear: both;
}
.fh-form .last-row {
  float: right;
  padding-right: 0;
}
.fh-form ::-webkit-input-placeholder {
  color: #a8a8a8;
}
.fh-form ::-moz-placeholder {
  color: #a8a8a8;
}
.fh-form :-ms-input-placeholder {
  color: #a8a8a8;
}
.fh-form :-moz-placeholder {
  color: #a8a8a8;
}
.fh-form select {
  color: #a8a8a8;
}
.fh-form .note {
  padding-top: 10px;
}
.fh-form label {
  font-size: 18px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #222;
  margin: 0;
}
.fh-form span.require {
  color: #ff0000;
}
.fh-form-1 .fh-form-row {
  margin-left: -10px;
  margin-right: -10px;
}
.fh-form-1 div[class*="col-"] {
  padding-left: 10px;
  padding-right: 10px;
}
.fh-form-3 textarea {
  height: 210px;
}
.fh-form-3 p.field {
  margin-bottom: 30px;
}
.fh-form-3 input[type=text], .fh-form-3 input[type=email], .fh-form-3 select {
  height: 50px;
  line-height: 50px;
}
.fh-form-3 .submit {
  text-align: center;
}
.fh-form-2 textarea {
  height: 145px;
}
.fh-form-2 input[type=text], .fh-form-2 input[type=email], .fh-form-2 select {
  height: 48px;
  line-height: 48px;
}
.fh-form-2 p.field {
  margin-bottom: 30px;
}
.fh-form-2 .field.submit {
  margin-top: -5px;
}
.request-form .form-label {
  color: #222;
  font-weight: 400;
  margin-bottom: 35px;
}
.request-form .field {
  margin-bottom: 25px;
}
.request-form .field.check-box {
  margin-bottom: 33px;
}
.request-form label {
  color: #222;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 3px;
}
.request-form textarea {
  height: 113px;
}
.request-form input[type=submit] {
  width: 100%;
}
.request-form .checkbox-box {
  display: block;
  border: 1px solid #ececec;
  padding: 25px 20px;
}
.contact-form-message {
	clear: both;
	margin-top: 20px;
	display: block;
}
.request-form .checkbox-box .wpcf7-list-item {
  display: block;
  margin-left: 0;
  margin-bottom: 8px;
}
.request-form .checkbox-box .wpcf7-list-item.last {
  margin-bottom: 0;
}
.request-form .checkbox-box .wpcf7-list-item label {
  width: 100%;
  color: #848484;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
}
.request-form .checkbox-box .wpcf7-list-item-label {
  margin-left: 10px;
}
.track-form > div {
  zoom: 1;
}
.track-form > div:before,
.track-form > div:after {
  content: "";
  display: table;
}
.track-form > div:after {
  clear: both;
}
.track-form > div:before,
.track-form > div:after {
  content: "";
  display: table;
}
.track-form > div:after {
  clear: both;
}
.track-form label {
  width: 25%;
  float: left;
  font-size: 16px;
  font-weight: 500;
  padding-top: 13px;
}
.track-form .date-range {
  font-size: 16px;
  font-weight: 500;
  color: #222;
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  padding-left: 10px;
}
.track-form .field {
  width: 75%;
  float: right;
  margin-bottom: 30px;
}
.track-form p.submit {
  margin-top: 15px;
  margin-bottom: 30px;
}
.track-form input[type=text], .track-form input[type=email], .track-form select {
  height: 50px;
  line-height: 50px;
}
.track-form span.start,
.track-form span.end {
  width: 45%;
  display: inline-block;
  position: relative;
}
.track-form span.start:after,
.track-form span.end:after {
  content: '\f073';
  font-family: FontAweSome;
  color: #ff0000;
  font-size: 14px;
  position: absolute;
  right: 15px;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.track-form span.start input,
.track-form span.end input {
  padding-right: 40px;
}
.track-form span.end {
  float: right;
}
.track-form span.wpcf7-list-item {
  margin-left: 0;
  margin-right: 30px;
}
.track-form .fh-radio {
  display: block;
  margin-top: 13px;
}
.track-form .fh-radio .wpcf7-list-item label {
  width: 100%;
  color: #848484;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  padding-top: 0;
}
.track-form .text-form {
  font-weight: 400;
}
.track-form .text-form a {
  text-decoration: underline;
}

.alignnone {
  margin: 0;
}
.aligncenter,
div.aligncenter,
.aligncenter img {
  display: block;
  margin: 1em auto;
}
.alignright {
  float: right;
  margin: 5px 0 20px 20px;
}
.alignleft {
  float: left;
  margin: 5px 20px 20px 0;
}
.wp-caption {
  background: #fff;
  border: 1px solid #555;
  padding: 5px;
  max-width: 100%;
  text-align: center;
}
.wp-caption img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
}
.wp-caption-text {
  font-size: small;
  margin: 0;
  padding: 5px 0 0;
}
.gallery-caption {
  display: block;
}
.bypostauthor {
  display: block;
}
.sticky {
  display: block;
}
.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.screen-reader-text:focus {
  background-color: #f1f1f1;
  -webkit-border-radius: 3px;
          border-radius: 3px;
  -webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  color: #21759b;
  display: block;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: bold;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
  /* Above WP toolbar. */
}
.gallery {
  margin-bottom: 1.5em;
}
.gallery-item {
  display: inline-block;
  text-align: center;
  vertical-align: top;
  width: 100%;
}
.gallery-columns-2 .gallery-item {
  max-width: 50%;
}
.gallery-columns-3 .gallery-item {
  max-width: 33.33%;
}
.gallery-columns-4 .gallery-item {
  max-width: 25%;
}
.gallery-columns-5 .gallery-item {
  max-width: 20%;
}
.gallery-columns-6 .gallery-item {
  max-width: 16.66%;
}
.gallery-columns-7 .gallery-item {
  max-width: 14.28%;
}
.gallery-columns-8 .gallery-item {
  max-width: 12.5%;
}
.gallery-columns-9 .gallery-item {
  max-width: 11.11%;
}
.gallery-caption {
  display: block;
}
/*** 

====================================================================
	preloader
====================================================================

 ***/

.preloader {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background-color: #ffffff;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../images/icon/preloader.png);
}

/*--------------------------------------------------------------
   Header
--------------------------------------------------------------*/
.site-header {
  background-color: #fff;
  position: relative;
  padding: 26px 0;
}
.site-logo h1,
.site-logo h2,
.site-logo p {
  margin: 0;
  line-height: 0;
  text-indent: -9999px;
}
.site-logo .hide-logo {
  display: none;
}
.site-logo .show-logo {
  display: inline-block;
}
.topbar {
  background-color: #0c1239;
  position: relative;
  z-index: 1000;
  line-height: 60px;
}
.topbar .topbar-left {
  float: left;
}
.topbar .topbar-left .topbar-search .search-form {
  left: 0;
  right: auto;
}
.topbar .topbar-right {
  float: right;
}
.topbar .widget {
  font-size: 15px;
  margin-bottom: 0;
  display: inline-block;
  color: #dde2fc;
  padding: 0 20px;
}
.topbar .widget:first-child {
  padding-left: 0;
}
.topbar .widget:last-child {
  padding-right: 0;
}
.topbar .widget p {
  margin-bottom: 0;
}
.topbar .widget .topbar-contact i {
  color: #ff0000;
  padding-right: 6px;
  font-size: 18px;
}
.topbar .widget .topbar-contact i:before {
  font-size: 18px;
}
.topbar .cargo-search-widget {
  padding-left: 15px;
}
.topbar .topbar-search {
  position: relative;
}
.topbar .topbar-search .toggle-search {
  font-size: 15px;
  color: #dde2fc;
  position: relative;
}
.topbar .topbar-search .toggle-search:before {
  content: '\f00d';
  font-family: FontAweSome;
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 15px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 0;
}
.topbar .topbar-search .search-form {
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  border: none;
}
.topbar .topbar-search .search-form i {
  color: #999999;
}
.topbar .topbar-search .search-form ::-webkit-input-placeholder {
  color: #999999;
}
.topbar .topbar-search .search-form :-moz-placeholder {
  color: #999999;
}
.topbar .topbar-search .search-form ::-moz-placeholder {
  color: #999999;
}
.topbar .topbar-search .search-form :-ms-input-placeholder {
  color: #999999;
}
.topbar .topbar-search .search-form:after,
.topbar .topbar-search .search-form:before {
  display: none;
}
.topbar .topbar-search .search-form .search-field {
  height: 40px;
  line-height: 40px;
  padding-right: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #9e9e9e;
}
.topbar .topbar-search .search-form .search-submit {
  right: 0;
  width: 45px;
  height: 45px;
}
.topbar .topbar-search.topbar-search-1 .search-form {
  position: absolute;
  top: 120%;
  right: 0;
  width: 250px;
  line-height: 45px;
  background-color: #fff;
  -webkit-transition: top 0.3s ease 0s;
          transition: top 0.3s ease 0s;
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
}
.topbar .topbar-search.topbar-search-1 .search-form i {
  color: #222;
}
.topbar .topbar-search.topbar-search-1 .search-form ::-webkit-input-placeholder {
  color: #757575;
}
.topbar .topbar-search.topbar-search-1 .search-form :-moz-placeholder {
  color: #757575;
}
.topbar .topbar-search.topbar-search-1 .search-form ::-moz-placeholder {
  color: #757575;
}
.topbar .topbar-search.topbar-search-1 .search-form :-ms-input-placeholder {
  color: #757575;
}
.topbar .topbar-search.topbar-search-1 .search-form .search-field {
  background-color: transparent;
}
.topbar .topbar-search.display-search .toggle-search i {
  opacity: 0;
}
.topbar .topbar-search.display-search .toggle-search:before {
  opacity: 1;
}
.topbar .topbar-search.display-search .search-form {
  top: 102%;
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
}
.topbar .topbar-socials {
  display: inline-block;
  padding: 0;
  margin: 0;
}
.topbar .topbar-socials li {
  display: inline-block;
  padding: 0 10px;
}
.topbar .topbar-socials li a {
  color: #dde2fc;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.topbar .topbar-socials li:hover a {
  color: #ff0000;
}
.topbar .cargohub-social-links-widget a {
  color: #dde2fc;
  font-size: 15px;
}
.topbar .cargohub-social-links-widget a:hover {
  color: #ff0000;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel {
  padding: 15px 20px 15px 0;
  position: relative;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel:after {
  content: '\f107';
  font-family: FontAwesome;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  color: #fff;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel a {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel a img {
  margin-right: 10px;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel a:hover {
  color: #fff;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel ul {
  position: absolute;
  background-color: #f4f4f4;
  width: 100%;
  text-align: left;
  padding-left: 20px;
  opacity: 0;
  top: 53px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  z-index: -9999;
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel ul a {
  color: #272727;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel ul a:hover {
  color: #272727;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel ul:before {
  content: '';
  width: 100%;
  height: 5px;
  background-color: transparent;
  top: -4px;
  left: 0;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel ul li {
  padding: 10px 10px 10px 0;
}
.topbar .widget_icl_lang_sel_widget ul.lang_sel:hover ul {
  opacity: 1;
  z-index: 9999;
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
}
.topbar .widget_nav_menu ul li {
  display: inline-block;
  padding: 0 15px;
}
.topbar .widget_nav_menu ul li:last-child {
  padding-right: 0;
}
.topbar .widget_nav_menu ul li:first-child {
  padding-left: 0;
}
.topbar .widget_nav_menu ul li a {
  padding-left: 0;
}
.topbar .widget_nav_menu ul li a:before {
  display: none;
}
.page-header {
  margin: 0;
  padding-bottom: 0;
  border: none;
  background-color: #161616;
}
.page-header h1 {
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  margin: 0;
  font-size: 44px;
  line-height: 1.2;
  position: relative;
  z-index: 99;
}
.page-header .header-title {
  padding-top: 120px;
  padding-bottom: 120px;
  text-align: center;
  background-attachment: fixed;
  position: relative;
	background:url(../images/bg/page-header-bg.jpg) center center no-repeat fixed;background-size:cover;
}
.page-header .breadcrumb-area {
  background-color: #fff;
  padding: 22px 0;
  border-bottom: 1px solid #ececec;
  font-size: 16px;
}
.page-header .breadcrumb-area nav {
  background-color: transparent;
  text-align: left;
  padding: 0;
  margin: 0;
  color: #848484;
  line-height: 20px;
}
.page-header .breadcrumb-area nav a span[itemprop=title] {
  color: #848484;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.page-header .breadcrumb-area nav i {
  padding: 0 5px;
  font-size: 14px;
  color: #848484;
}
.page-header .breadcrumb-area nav span[itemprop=title] {
  color: #848484;
}
.page-header .site-social-share {
  text-align: right;
  position: relative;
  color: #222;
}
.page-header .site-social-share .socials-share {
  position: absolute;
  width: 100%;
  top: 50%;
  right: 100px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.page-header .site-social-share:hover .socials-share {
  opacity: 1;
}
.header-sticky.header-v1 .site-header.minimized,
.header-sticky.header-v2 .site-header.minimized {
  top: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
      -ms-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
  width: 100%;
  position: fixed;
  z-index: 9999;
  background-color: #fff;
}
.header-sticky.admin-bar.header-v1 .site-header.minimized,
.header-sticky.admin-bar.header-v2 .site-header.minimized {
  top: 32px;
}
.header-sticky.admin-bar.header-v3 .site-header.minimized .site-menu,
.header-sticky.admin-bar.header-v4 .site-header.minimized .site-menu {
  top: 32px;
}
.header-sticky.header-transparent .site-header.minimized {
  top: 0 !important;
}
.header-sticky.header-transparent .site-header.minimized .site-logo img.logo-dark {
  display: inline-block;
}
.header-sticky.header-transparent .site-header.minimized .site-logo img.logo-light {
  display: none;
}
.header-sticky.header-transparent.admin-bar .site-header.minimized {
  top: 32px !important;
}
.header-sticky.header-v3 .site-header.minimized .site-menu,
.header-sticky.header-v4 .site-header.minimized .site-menu {
  position: fixed;
  top: 0;
  z-index: 9999;
  width: inherit;
}
.header-sticky.header-v3 .site-header.minimized .site-menu {
  width: 100%;
}
.header-transparent .topbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(12, 18, 57, 0.9);
}
.header-transparent.admin-bar .topbar {
  top: 32px;
}
.header-transparent .site-header {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid rgba(35, 41, 81, 0.1);
}
.header-transparent .page-header .header-title {
  padding-top: 275px;
}
.header-v3 .site-header,
.header-v4 .site-header {
  padding: 0;
}
.header-v3 .site-logo,
.header-v4 .site-logo {
  float: left;
}
.header-v3 .site-header-widget,
.header-v4 .site-header-widget {
  float: right;
}
.header-v3 .site-header-widget .widget,
.header-v4 .site-header-widget .widget {
  float: right;
  text-align: left;
  padding: 0 15px;
  margin-bottom: 0;
}
.header-v3 .site-header-widget .widget:first-child,
.header-v4 .site-header-widget .widget:first-child {
  padding-right: 0;
}
.header-v3 .site-header-widget .widget:last-child,
.header-v4 .site-header-widget .widget:last-child {
  padding-left: 0;
}
.header-v3 .site-header-widget .widget p,
.header-v4 .site-header-widget .widget p {
  margin-bottom: 0;
  font-size: 16px;
  font-style: italic;
}
.header-v3 .site-header-widget .widget i,
.header-v4 .site-header-widget .widget i {
  color: #202020;
}
.header-v3 .site-header-widget .widget h4,
.header-v4 .site-header-widget .widget h4 {
  color: #ff0000;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 5px;
}
.header-v3 .site-header {
  background-color: transparent;
}
.header-v3 .site-contact {
  padding-top: 38px;
  padding-bottom: 28px;
}
.header-v3 .site-header-widget span {
  float: left;
  margin-top: -5px;
}
.header-v3 .site-header-widget i {
  font-size: 33px;
}
.header-v3 .site-header-widget i:before {
  font-size: 33px;
}
.header-v3 .site-header-widget h4,
.header-v3 .site-header-widget p {
  margin-left: 50px;
}
.header-v4 .topbar {
  border-bottom: 1px solid #f1f1f1;
}
.header-v4 .ch-empty-space {
  height: 85px;
}
.header-v4 .page-header .header-title {
  padding-top: 200px;
}
.header-v4 .site-header {
  background-color: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999;
}
.header-v4 .site-contact {
  padding: 29px 30px;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  background-color: #fff;
}
.header-v4 .site-header-widget span {
  float: left;
  width: 50px;
  height: 50px;
  line-height: 46px;
  text-align: center;
  border: 2px solid #f1f1f1;
}
.header-v4 .site-header-widget i {
  font-size: 22px;
}
.header-v4 .site-header-widget i:before {
  font-size: 22px;
}
.header-v4 .site-header-widget h4,
.header-v4 .site-header-widget p {
  margin-left: 70px;
}
.fh-header-minimized {
  display: none;
}
.header-v2 .fh-header-minimized.minimized,
.header-v3 .fh-header-minimized.minimized {
  display: block;
}
.off-canvas-layer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  cursor: pointer;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
}
.display-mobile-menu .off-canvas-layer {
  display: block;
}
/*--------------------------------------------------------------
   Navigations
--------------------------------------------------------------*/
.nav {
  line-height: 40px;
}
.nav a {
  font-weight: 600;
  font-size: 14px;
  color: #222;
  display: block;
  font-family: 'Montserrat', sans-serif;
}
.nav ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}
.nav ul ul {
  -webkit-transition: top 0.3s ease 0s, opacity 0.3s;
          transition: top 0.3s ease 0s, opacity 0.3s;
  position: absolute;
  top: 110%;
  left: 8px;
  width: 270px;
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
  background-color: #fff;
  margin-top: 31px;
  padding: 15px 0;
  z-index: 9999;
}
.nav ul ul:before {
  content: '';
  width: 100%;
  height: 40px;
  position: absolute;
  background-color: transparent;
  left: 0;
  top: -40px;
}
.nav ul ul ul {
  -webkit-transition: left 0.3s ease 0s, opacity 0.3s;
          transition: left 0.3s ease 0s, opacity 0.3s;
  left: 115%;
  top: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  margin-top: 0;
  z-index: 9999;
}
.nav ul ul ul:before {
  content: '';
  width: 10px;
  height: 100%;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: -10px;
}
.nav li {
  display: inline-block;
  position: relative;
}
.nav li:hover > ul {
  opacity: 1;
  top: 92%;
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
}
.nav li li {
  padding: 12px 30px;
  display: block;
  line-height: 1.2;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
  position: relative;
}
.nav li li:last-child {
  border-bottom: 0;
}
.nav li li:hover {
  background-color: #0c1239;
}
.nav li li:hover > a {
  color: #fff;
}
.nav li li:hover > ul {
  top: 0;
  left: -webkit-calc(100% + 10px);
  left: calc(100% + 10px);
}
.nav ul.menu {
  zoom: 1;
}
.nav ul.menu:before,
.nav ul.menu:after {
  content: "";
  display: table;
}
.nav ul.menu:after {
  clear: both;
}
.nav ul.menu:before,
.nav ul.menu:after {
  content: "";
  display: table;
}
.nav ul.menu:after {
  clear: both;
}
.nav ul.menu > li {
	display: block;
	float: left;
	position: relative;
	padding-top: 9px;
	padding-right: 20px;
	padding-bottom: 9px;
	padding-left: 14px;
}
.nav ul.menu > li > a {
  text-transform: uppercase;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  z-index: 99;

}
.nav ul.menu > li:first-child > ul {
  left: 0;
}
.nav ul.menu > li:last-child {
  border: none;
}
.nav ul.menu > li.has-children > a:before, .nav ul.menu > li.active > a:before {
  content: '\f107';
  font-family: FontAweSome;
  position: absolute;
  top: 50%;
  right: -13px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.nav ul.menu > li:hover > a,
.nav ul.menu > li.current-menu-item > a,
.nav ul.menu > li.active > a,
.nav ul.menu > li.current_page_item > a,
.nav ul.menu > li.active > a
 {
  color: #ff0000;
}
.nav div.menu > ul {
  zoom: 1;
}
.nav div.menu > ul:before,
.nav div.menu > ul:after {
  content: "";
  display: table;
}
.nav div.menu > ul:after {
  clear: both;
}
.nav div.menu > ul:before,
.nav div.menu > ul:after {
  content: "";
  display: table;
}
.nav div.menu > ul:after {
  clear: both;
}
.nav div.menu > ul > li {
  display: block;
  float: left;
  position: relative;
  padding: 9px 19px;
}
.nav div.menu > ul > li > a {
  text-transform: uppercase;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  z-index: 99;
}
.nav div.menu > ul > li:first-child > ul {
  left: 0;
}
.nav div.menu > ul > li.page_item_has_children > a:before {
  content: '\f107';
  font-family: FontAweSome;
  position: absolute;
  top: 50%;
  right: -13px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.nav div.menu > ul > li.current-menu-item > a,
.nav div.menu > ul > li.active > a,
.nav div.menu > ul > li.current_page_item > a,
.nav div.menu > ul > li.current_page_parent > a,
.nav div.menu > ul > li:hover > a {
  color: #ff0000;
}
.nav .menu li.extra-menu-item {
  float: right;
}
.nav .menu li.extra-menu-item.menu-item-button-link {
  padding: 0;
}
.nav .menu li.extra-menu-item.menu-item-button-link a {
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  margin-top: 4px;
  text-transform: inherit;
}
.nav .menu li.extra-menu-item.menu-item-button-link a:hover {
  color: #fff;
}
.nav .menu li.extra-menu-item.menu-item-search {
  position: relative;
  text-align: right;
  padding-right: 0;
}
.nav .menu li.extra-menu-item.menu-item-search .toggle-search {
  color: #ff0000;
}
.nav .menu li.extra-menu-item.menu-item-search .toggle-search:before {
  content: '\f00d';
  font-family: FontAweSome;
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 14px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 0;
}
.nav .menu li.extra-menu-item.menu-item-search .toggle-search:after {
  content: '';
  position: absolute;
  top: 50%;
  left: -25px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.1);
  width: 1px;
  height: 22px;
}
.nav .menu li.extra-menu-item.menu-item-search .search-form {
  position: absolute;
  top: 130%;
  right: 0;
  width: 250px;
  border: 1px solid #f4f4f4;
  background-color: transparent;
  -webkit-transition: top 0.3s ease 0s;
          transition: top 0.3s ease 0s;
  z-index: 99;
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
}
.nav .menu li.extra-menu-item.menu-item-search .search-form i {
  position: absolute;
  top: 50%;
  right: 16px;
  color: #222;
  font-size: 14px;
  z-index: 99;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.nav .menu li.extra-menu-item.menu-item-search .search-form .search-submit {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 9999;
}
.nav .menu li.extra-menu-item.menu-item-search .search-form input[type=search] {
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 40px 0 15px;
  background-color: #fff;
  border: none;
}
.nav .menu li.extra-menu-item.menu-item-search .search-form input[type=search]:focus {
  outline: none;
  border: none;
}
.nav .menu li.extra-menu-item.menu-item-search.display-search .toggle-search i {
  opacity: 0;
}
.nav .menu li.extra-menu-item.menu-item-search.display-search .toggle-search:before {
  opacity: 1;
}
.nav .menu li.extra-menu-item.menu-item-search.display-search .search-form {
  top: 110%;
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
}
.header-v1 .nav ul ul ul {
  left: 110%;
  top: 0;
}
.header-v1 .nav li:hover > ul {
  top: 92%;
}
.header-v1 .nav li li:hover > ul {
  top: 0;
  left: -webkit-calc(100% + 10px);
  left: calc(100% + 10px);
}
.header-v1 .nav a {
  color: #fff;
}
.header-v1 .nav li li > a {
  color: #222;
}
.header-v1 .nav li li:hover > a {
  color: #fff;
}
.header-v1 .nav .menu li.extra-menu-item.menu-item-search .search-form {
  top: 180%;
}
.header-v1 .nav .menu li.extra-menu-item.menu-item-search.display-search .search-form {
  top: 160%;
}
.header-v2 .nav .menu li.extra-menu-item.menu-item-search .search-form {
  top: 180%;
}
.header-v2 .nav .menu li.extra-menu-item.menu-item-search.display-search .search-form {
  top: 160%;
}
.header-v3 .site-menu {
  background-color: #0c1239;
}
.header-v3 .nav ul ul {
  top: 85%;
}
.header-v3 .nav ul ul:before {
  height: 5px;
  top: -5px;
}
.header-v3 .nav ul ul ul:before {
  height: 100%;
  left: -10px;
}
.header-v3 .nav li:hover > ul {
  top: 55%;
}
.header-v3 .nav li li:hover > ul {
  top: 0;
  left: -webkit-calc(100% + 10px);
  left: calc(100% + 10px);
}
.header-v3 .nav a {
  color: #fff;
}
.header-v3 .nav li li > a {
  color: #222;
}
.header-v3 .nav li li:hover > a {
  color: #fff;
}
.header-v3 .nav ul.menu > li {
  padding: 15px 27px;
}
.header-v3 .nav ul.menu > li:last-child {
  padding-right: 0;
}
.header-v3 .nav ul.menu > li:first-child {
  padding-left: 0;
}
.header-v3 .nav ul.menu .menu-item-button-link {
  padding: 6px 0;
}
.header-v3 .site-menu {
	background-color: #0c1239;
}
.header-v3  .sub-background-color,
.header-v3  .topbar,
.header-v3  .nav li li:hover,
.header-v3 .site-menu,
.header-v3  .site-menu,
.header-v3  .fh-service-box-2.box-style-2 .box-header .fh-icon,
.header-v3  .fh-price-table .table-header,
.header-v3  .project-wrapper .project-thumbnail .pro-link,
.header-v3  .single-post .entry-thumbnail::before,
.header-v3  .blog-wrapper .entry-thumbnail a::before,
.header-v3  .service .service-thumbnail a::before,
.header-v3  .fh-latest-post .item-latest-post .entry-thumbnail a::before,
.header-v3  .fh-service .entry-thumbnail .link,
.header-v3  .fh-team .team-member .team-header::before,
.header-v3  .fh-icon-box.version-light::before,
.header-v3  .fh-btn-2,
.header-v3  .fh-testimonials-carousel .testi-wrapper {
    background-color: #202020;
}


.header-v4 .site-menu {
  background-color: #0c1239;
}
.header-v4 .nav ul ul {
  top: 85%;
}
.header-v4 .nav ul ul:before {
  height: 5px;
  top: -5px;
}
.header-v4 .nav ul ul ul:before {
  height: 100%;
  left: -10px;
}
.header-v4 .nav li:hover > ul {
  top: 55%;
}
.header-v4 .nav li li:hover > ul {
  top: 0;
  left: -webkit-calc(100% + 10px);
  left: calc(100% + 10px);
}
.header-v4 .nav a {
  color: #fff;
}
.header-v4 .nav li li > a {
  color: #222;
}
.header-v4 .nav li li:hover > a {
  color: #fff;
}
.header-v4 .nav ul.menu {
  padding: 0 30px;
}
.header-v4 .nav ul.menu > li {
  padding: 0 7px 0 17px;
}
.header-v4 .nav ul.menu > li:last-child {
  padding-right: 0;
}
.header-v4 .nav ul.menu > li:first-child {
  padding-left: 0;
}
.header-v4 .nav ul.menu > li > a {
  position: relative;
  padding: 13px 20px 13px 10px;
}
.header-v4 .nav ul.menu > li > a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 5px;
  right: 0;
  bottom: 0;
  background-color: #ff0000;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.header-v4 .nav ul.menu > li.current-menu-item > a:after,
.header-v4 .nav ul.menu > li.active > a:after,
.header-v4 .nav ul.menu > li.current_page_item > a:after,
.header-v4 .nav ul.menu > li:hover > a:after {
  right: auto;
  left: 0;
  width: 100%;
}
.header-v4 .nav ul.menu > li.has-children > a:before {
  right: 7px;
}
.header-v4 .nav ul.menu > li.menu-item-button-link {
  padding: 4px 0;
}
.header-v4 .nav ul.menu > li.menu-item-button-link a {
  padding: 0;
}
.header-v4 .nav ul.menu > li.menu-item-search a {
  padding-left: 0;
  padding-right: 0;
}
.header-v4 .nav .menu li.extra-menu-item.menu-item-search .search-form {
  right: -30px;
}
.header-sticky .site-header.minimized .nav .menu > li a {
  color: #222;
}
.header-sticky .site-header.minimized .nav .menu > li.menu-item-button-link a {
  color: #fff;
}
.header-sticky .site-header.minimized .nav .menu > li.menu-item-button-link:hover a {
  color: #fff;
}
.header-sticky .site-header.minimized .nav .menu > li:hover > a,
.header-sticky .site-header.minimized .nav .menu > li.current-menu-item > a,
.header-sticky .site-header.minimized .nav .menu > li.active > a {
  color: #ff0000;
}
.header-sticky .site-header.minimized .nav .menu > li li:hover > a {
  color: #fff;
}
.header-sticky.header-v3 .site-header.minimized .nav .menu > li a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li a {
  color: #fff;
}
.header-sticky.header-v3 .site-header.minimized .nav .menu > li.menu-item-button-link a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li.menu-item-button-link a {
  color: #fff;
}
.header-sticky.header-v3 .site-header.minimized .nav .menu > li.menu-item-button-link:hover a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li.menu-item-button-link:hover a {
  color: #fff;
}
.header-sticky.header-v3 .site-header.minimized .nav .menu > li:hover > a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li:hover > a,
.header-sticky.header-v3 .site-header.minimized .nav .menu > li.current-menu-item > a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li.current-menu-item > a,
.header-sticky.header-v3 .site-header.minimized .nav .menu > li.active > a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li.active > a {
  color: #ff0000;
}
.header-sticky.header-v3 .site-header.minimized .nav .menu > li li a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li li a {
  color: #222;
}
.header-sticky.header-v3 .site-header.minimized .nav .menu > li li:hover > a,
.header-sticky.header-v4 .site-header.minimized .nav .menu > li li:hover > a {
  color: #fff;
}
.post-navigation {
  float: right;
}
.post-navigation .nav-previous,
.post-navigation .nav-next {
  display: inline-block;
  margin: 5px 0;
}
.post-navigation .nav-previous a,
.post-navigation .nav-next a {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
}
.post-navigation .nav-previous .meta-nav,
.post-navigation .nav-next .meta-nav {
  font-size: 14px;
}
.post-navigation .nav-previous {
  padding-right: 10px;
  border-right: 0.5px solid #eee;
}
.post-navigation .nav-previous .meta-nav {
  padding-right: 12px;
}
.post-navigation .nav-next {
  padding-left: 10px;
  border-left: 0.5px solid #eee;
}
.post-navigation .nav-next .meta-nav {
  padding-left: 12px;
}
.post-navigation a:hover {
  color: #ff0000;
}
.blog-grid .numeric-navigation {
  border-top: 1px solid #f4f4f4;
  padding-top: 60px;
}
.numeric-navigation {
  clear: both;
  display: block;
  text-align: center;
  float: none;
  padding-top: 0;
}
.numeric-navigation .page-numbers {
  color: #222;
  font-weight: 600;
  font-size: 18px;
  width: 52px;
  height: 52px;
  line-height: 49px;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  text-align: center;
  border: 2px solid #f4f4f4;
  display: inline-block;
  margin: 0 3px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  position: relative;
}
.numeric-navigation .page-numbers i {
  color: #b8b8b8;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.numeric-navigation .page-numbers:first-child {
  margin-left: 0;
}
.numeric-navigation .page-numbers:last-child {
  margin-right: 0;
}
.numeric-navigation .page-numbers:hover,
.numeric-navigation .page-numbers.current {
  color: #fff;
  background-color: #ff0000;
  border-color: #ff0000;
}
.numeric-navigation .page-numbers:hover i,
.numeric-navigation .page-numbers.current i {
  color: #fff;
}
.portfolio-navigation {
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 20px;
  padding-top: 21px;
  text-align: center;
}
.portfolio-navigation .nav-previous,
.portfolio-navigation .nav-next {
  padding-top: 7px;
}
.portfolio-navigation .nav-previous a,
.portfolio-navigation .nav-next a {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.portfolio-navigation .nav-previous a:hover,
.portfolio-navigation .nav-next a:hover {
  color: #ff0000;
}
.portfolio-navigation .nav-previous .meta-nav.left,
.portfolio-navigation .nav-next .meta-nav.left {
  padding-right: 10px;
}
.portfolio-navigation .nav-previous .meta-nav.right,
.portfolio-navigation .nav-next .meta-nav.right {
  padding-left: 10px;
}
.portfolio-navigation .portfolio-link {
  font-size: 24px;
}
.portfolio-navigation .nav-previous {
  float: left;
}
.portfolio-navigation .nav-next {
  float: right;
}
.all-project .numeric-navigation {
  margin-top: 0;
  padding-top: 20px;
}
.all-service .numeric-navigation {
  margin-top: 0;
  padding-top: 20px;
}
.project-nav-ajax nav.numeric-navigation {
  text-align: center;
}
.project-nav-ajax nav.numeric-navigation .page-numbers {
  display: none;
}
.project-nav-ajax nav.numeric-navigation .page-numbers.next {
  font-size: 16px;
  font-weight: 700;
  color: #ff0000;
  text-align: center;
  display: inline-block;
  position: relative;
  min-width: 160px;
  min-height: 50px;
  line-height: 49px;
  height: inherit;
  -webkit-border-radius: 50px;
          border-radius: 50px;
  padding: 0 20px;
  background-color: #fff;
  text-transform: capitalize;
  border: 2px solid #f7f7f7;
  -webkit-box-shadow: none;
          box-shadow: none;
  font-family: 'Montserrat', sans-serif;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.project-nav-ajax nav.numeric-navigation .page-numbers.next span {
  display: block;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  color: #ff0000;
}
.project-nav-ajax nav.numeric-navigation .page-numbers.next .cargohub-loading {
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
  opacity: 0;
  width: 100%;
}
.project-nav-ajax nav.numeric-navigation .page-numbers.next.loading .cargohub-loading {
  opacity: 1;
}
.project-nav-ajax nav.numeric-navigation .page-numbers.next.loading .load-more {
  opacity: 0;
}
.project-nav-ajax nav.numeric-navigation .page-numbers.next:hover,
.project-nav-ajax nav.numeric-navigation .page-numbers.next:focus {
  color: #fff;
  border-color: #ff0000;
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: none;
  background-color: #ff0000;
}
.project-nav-ajax nav.numeric-navigation .page-numbers.next:hover span,
.project-nav-ajax nav.numeric-navigation .page-numbers.next:focus span {
  color: #fff;
}
.project-nav-ajax nav.numeric-navigation .page-numbers:before {
  display: none;
}
.navbar-toggle {
  padding: 0;
  margin: 0;
  -webkit-border-radius: 0;
          border-radius: 0;
  position: static;
}
.navbar-icon {
  display: inline-block;
  height: 25px;
  width: 27px;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.navbar-icon .navbars-line {
  display: inline-block;
  width: 27px;
  height: 2px;
  background-color: #222;
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;
}
.navbar-icon .navbars-line:before,
.navbar-icon .navbars-line:after {
  position: absolute;
  width: 100%;
  height: 2px;
  content: '';
  background-color: #222;
}
.navbar-icon .navbars-line:before {
  top: -8px;
}
.navbar-icon .navbars-line:after {
  bottom: -8px;
}
.header-transparent .navbar-icon .navbars-line,
.header-transparent .navbar-icon .navbars-line:before,
.header-transparent .navbar-icon .navbars-line:after {
  background-color: #fff;
}
.navbars-icon {
  display: inline-block;
  position: relative;
}
.navbars-icon i {
  color: #222;
  font-size: 26px;
}
.admin-bar .primary-mobile-nav {
  top: 32px;
}
.primary-mobile-nav {
  width: 340px;
  -webkit-transition: 0.4s;
          transition: 0.4s;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: -340px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  color: #848484;
  z-index: 99999;
  border: 1px solid #f4f4f4;
}
.primary-mobile-nav .close-canvas-mobile-panel {
	padding: 20px;
	display: inline-block;
	font-size: 46px;
	line-height: 30px;
	padding-bottom: 0;
}
.primary-mobile-nav ul {
  list-style: none;
  padding-left: 0;
}
.primary-mobile-nav ul.menu {
  padding-bottom: 30px;
}
.primary-mobile-nav ul.menu.over-submenu {
  height: 0;
  overflow: hidden;
  padding-bottom: 0;
}
.primary-mobile-nav ul.menu li {
  padding: 15px 20px;
  position: static;
}
.primary-mobile-nav ul.menu li .toggle-children {
  float: right;
  position: relative;
}
.primary-mobile-nav ul.menu li .toggle-children i {
  position: absolute;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  right: -20px;
  top: -12px;
  font-size: 22px;
}
.primary-mobile-nav ul.menu li > ul {
  position: absolute;
  float: left;
  right: 0;
  top: 0;
  visibility: visible;
  display: inline-block;
  width: 100% !important;
  z-index: 10;
  margin-top: 0;
  -webkit-transform: translateX(100%);
      -ms-transform: translateX(100%);
          transform: translateX(100%);
  -webkit-transition: 0.35s;
          transition: 0.35s;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.primary-mobile-nav ul.menu li > ul .menu-parent-items {
  background-color: #f4f4f4;
  color: #222;
  text-transform: uppercase;
}
.primary-mobile-nav ul.menu li.over-menu > ul {
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
}
.primary-mobile-nav ul.menu li.menu-back {
  padding-left: 40px;
  position: relative;
}
.primary-mobile-nav ul.menu li.menu-back:before {
  content: '\f104';
  font-family: Fontawesome;
  font-size: 22px;
  position: absolute;
  left: 20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.primary-mobile-nav ul.menu li.extra-menu-item {
  margin-top: 40px;
}
.primary-mobile-nav ul.menu li.current-menu-item > a {
  color: #ff0000;
}
.primary-mobile-nav .menu-item-search .toggle-search {
  display: none;
}
.primary-mobile-nav .menu-item-search .search-form {
  position: relative;
  opacity: 1;
  z-index: 9;
  color: #848484;
}
.primary-mobile-nav .menu-item-search .search-form i {
  position: absolute;
  top: 50%;
  right: 16px;
  color: #222;
  font-size: 14px;
  z-index: 99;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.primary-mobile-nav .menu-item-search .search-form .screen-reader-text {
  display: none;
}
.primary-mobile-nav .menu-item-search .search-form ::-webkit-input-placeholder {
  color: #9e9e9e;
}
.primary-mobile-nav .menu-item-search .search-form :-moz-placeholder {
  color: #9e9e9e;
}
.primary-mobile-nav .menu-item-search .search-form ::-moz-placeholder {
  color: #9e9e9e;
}
.primary-mobile-nav .menu-item-search .search-form :-ms-input-placeholder {
  color: #9e9e9e;
}
.primary-mobile-nav .menu-item-search .search-form .search-submit {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 9999;
}
.primary-mobile-nav .menu-item-search .search-form label {
  width: 100%;
  margin-bottom: 0;
}
.primary-mobile-nav .menu-item-search .search-form input[type=search] {
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 55px 0 15px;
  border: 1px solid #ececec;
}
.primary-mobile-nav .menu-item-search .search-form input[type=search]:focus {
  outline: none;
}
.display-mobile-menu .primary-mobile-nav {
  right: 0;
  z-index: 99999;
}
/*--------------------------------------------------------------
   Content
--------------------------------------------------------------*/
.fh-btn {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 150px;
  min-height: 50px;
  line-height: 50px;
  -webkit-border-radius: 0;
          border-radius: 0;
  padding: 0 20px;
  background-color: #ff0000;
  text-transform: capitalize;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  font-family: 'Montserrat', sans-serif;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-btn:hover,
.fh-btn:focus {
  color: #fff;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: none;
  background-color: #ff0000;
}
.fh-btn-2 {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 150px;
  min-height: 50px;
  line-height: 50px;
  -webkit-border-radius: 0;
          border-radius: 0;
  padding: 0 20px;
  background-color: #0c1239;
  text-transform: capitalize;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  font-family: 'Montserrat', sans-serif;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-btn-2:hover,
.fh-btn-2:focus {
  color: #fff;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: none;
  background-color: #0c1239;
}

.site-content {
  padding-top: 80px;
  padding-bottom: 80px;
}
.container {
  padding-left: 0;
  padding-right: 0;
}
.container .container {
  width: 100%;
}
p {
  margin-bottom: 15px;
}
.page-template-template-homepage .site-content,
.page-template-template-fullwidth .site-content,
.single-service .site-content {
  padding-top: 0;
  padding-bottom: 0;
}
.single-post.single-right .site-content,
.blog.single-right .site-content,
.category.single-right .site-content,
.tag.single-right .site-content,
.single-post.single-left .site-content,
.blog.single-left .site-content,
.category.single-left .site-content,
.tag.single-left .site-content {
  padding-top: 0;
  padding-bottom: 0;
}
.single-post.single-right .content-area,
.blog.single-right .content-area,
.category.single-right .content-area,
.tag.single-right .content-area,
.single-post.single-left .content-area,
.blog.single-left .content-area,
.category.single-left .content-area,
.tag.single-left .content-area,
.single-post.single-right .blog-sidebar .cargohub-widget,
.blog.single-right .blog-sidebar .cargohub-widget,
.category.single-right .blog-sidebar .cargohub-widget,
.tag.single-right .blog-sidebar .cargohub-widget,
.single-post.single-left .blog-sidebar .cargohub-widget,
.blog.single-left .blog-sidebar .cargohub-widget,
.category.single-left .blog-sidebar .cargohub-widget,
.tag.single-left .blog-sidebar .cargohub-widget {
  padding-top: 80px;
  padding-bottom: 80px;
}
.single-post.blog-grid .site-main,
.blog.blog-grid .site-main,
.category.blog-grid .site-main,
.tag.blog-grid .site-main {
  margin-left: -15px;
  margin-right: -15px;
  zoom: 1;
}
.single-post.blog-grid .site-main:before,
.blog.blog-grid .site-main:before,
.category.blog-grid .site-main:before,
.tag.blog-grid .site-main:before,
.single-post.blog-grid .site-main:after,
.blog.blog-grid .site-main:after,
.category.blog-grid .site-main:after,
.tag.blog-grid .site-main:after {
  content: "";
  display: table;
}
.single-post.blog-grid .site-main:after,
.blog.blog-grid .site-main:after,
.category.blog-grid .site-main:after,
.tag.blog-grid .site-main:after {
  clear: both;
}
.single-post.blog-grid .site-main:before,
.blog.blog-grid .site-main:before,
.category.blog-grid .site-main:before,
.tag.blog-grid .site-main:before,
.single-post.blog-grid .site-main:after,
.blog.blog-grid .site-main:after,
.category.blog-grid .site-main:after,
.tag.blog-grid .site-main:after {
  content: "";
  display: table;
}
.single-post.blog-grid .site-main:after,
.blog.blog-grid .site-main:after,
.category.blog-grid .site-main:after,
.tag.blog-grid .site-main:after {
  clear: both;
}
.single-left .primary-sidebar {
  float: left;
}
.single-left .content-area {
  float: right;
}
.single-left.single-post .site-main,
.single-left.blog .site-main,
.single-left.category .site-main,
.single-left.tag .site-main {
  padding-left: 10px;
}
.single-right .primary-sidebar {
  float: right;
}
.single-right .content-area {
  float: left;
}
.single-right.single-post .site-main,
.single-right.blog .site-main,
.single-right.category .site-main,
.single-right.tag .site-main {
  padding-right: 10px;
}
.entry-thumbnail {
  margin-bottom: 20px;
  position: relative;
}
.entry-meta {
  padding-bottom: 5px;
}
.entry-meta a {
  color: #848484;
  font-weight: 400;
}
.entry-meta a:hover {
  color: #ff0000;
}
.entry-meta .meta {
  float: left;
  padding: 0 15px;
  position: relative;
}
.entry-meta .meta:after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  width: 1px;
  height: 17px;
  background-color: #949494;
}
.entry-meta .meta:first-child {
  padding-left: 0;
}
.entry-meta .meta:last-child:after {
  display: none;
}
.entry-meta .meta.views {
  cursor: pointer;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  text-transform: capitalize;
}
.entry-meta .meta.views:hover {
  color: #ff0000;
}
.entry-meta .meta.author a {
  text-transform: capitalize;
}
.entry-meta .fa {
  padding-right: 8px;
  color: #ff0000;
}
.entry-title {
  font-size: 26px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.entry-time {
  position: absolute;
  width: 55px;
  height: 55px;
  padding: 8px 0;
  top: 10px;
  left: 10px;
  background-color: #ff0000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
}
.entry-time span {
  display: block;
  line-height: 1.2;
}
.post-author {
  margin-top: 70px;
}
.post-author .box-title {
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 600;
  margin: 0 0 40px;
  padding-bottom: 15px;
  position: relative;
}
.post-author .box-title:after {
  content: '';
  position: absolute;
  height: 1px;
  width: 70px;
  background-color: #ff0000;
  left: 0;
  bottom: 0;
}
.post-author .box-title:before {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: #f6f6f6;
  left: 0;
  bottom: 0;
}
.post-author .post-author-box {
  background-color: #f7f7f7;
  padding: 30px;
}
.post-author .post-author-box .post-author-avatar {
  float: left;
  padding-right: 30px;
}
.post-author .post-author-box .author-name {
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  color: #222;
  text-transform: capitalize;
}
.post-author .post-author-box .post-author-info p {
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 0;
}
.post-password-form input[type=password] {
  border: 1px solid #f4f4f4;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  outline: none;
  padding: 5px 10px;
  height: 40px;
}
.post-password-form input[type=password]:focus {
  border-color: #ececec;
  outline: none;
}
.post-password-form input[type=submit] {
  height: 40px;
  border: none;
  outline: none;
}
.post-password-form input[type=submit]:focus {
  outline: none;
}
.single .entry-content.no-title {
  padding-top: 10px;
}
.single-post .hentry {
  border: 1px solid #eee;
}
.single-post .hentry.no-thumb .entry-header {
  padding-top: 30px;
}
.single-post .entry-thumbnail {
  overflow: hidden;
  position: relative;
}
.single-post .entry-thumbnail img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.single-post .entry-thumbnail:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c1239;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  opacity: 0;
  z-index: 99;
}
.single-post .entry-thumbnail:hover img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.single-post .entry-thumbnail:hover:before {
  opacity: 0.7;
}
.single-post .entry-title,
.single-post .entry-header .entry-meta,
.single-post .entry-content,
.single-post .entry-footer {
  margin-left: 30px;
  margin-right: 30px;
}
.single-post .entry-title {
  display: none;
}
.single-post.no-sidebar .entry-thumbnail {
  text-align: center;
}
.no-thumb .entry-thumbnail {
  margin: 0;
  display: none;
}
.no-thumb .entry-thumbnail i {
  display: none;
}
.entry-content {
  padding-bottom: 0;
}
.entry-footer {
  padding: 20px 0;
  border-top: 1px solid #f6f6f6;
}
.blog-wrapper {
  border: 1px solid #ececec;
  margin-bottom: 60px;
}
.blog-wrapper .entry-thumbnail {
  overflow: hidden;
  margin-bottom: 15px;
}
.blog-wrapper .entry-thumbnail a {
  display: inline-block;
  position: relative;
}
.blog-wrapper .entry-thumbnail a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c1239;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  opacity: 0;
  z-index: 99;
}
.blog-wrapper .entry-thumbnail a img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.blog-wrapper.no-thumb .wrapper {
  padding-top: 30px;
}
.blog-wrapper .entry-footer {
  border: none;
  padding-top: 3px;
  padding-bottom: 23px;
}
.blog-wrapper .entry-footer a {
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #ff0000;
}
.blog-wrapper:hover .entry-thumbnail a:before {
  opacity: 0.7;
}
.blog-wrapper:hover .entry-thumbnail img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.blog-wrapper.sticky .entry-title:before {
  content: '\f02e';
  font-family: FontAweSome;
  padding-right: 5px;
  color: #ff0000;
}
.blog-classic .blog-wrapper .entry-header,
.blog-classic .blog-wrapper .entry-content,
.blog-classic .blog-wrapper .entry-footer {
  margin-left: 30px;
  margin-right: 30px;
}
.blog-grid .blog-wrapper {
  padding-bottom: 0;
  margin-bottom: 55px;
  border: 0;
}
.blog-grid .blog-wrapper.no-thumb .wrapper {
  padding-top: 0;
}
.blog-grid .blog-wrapper .wrapper {
  border: none;
}
.blog-grid .blog-wrapper .entry-title,
.blog-grid .blog-wrapper .entry-content {
  padding-left: 0;
  padding-right: 0;
}
.blog-grid .blog-wrapper .entry-content {
  display: none;
}
.blog-grid .blog-wrapper .entry-title {
  font-size: 22px;
  margin-bottom: 0;
}
.blog-grid .blog-wrapper .entry-footer {
  border: none;
  padding: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.blog-grid .blog-wrapper.col-md-6:nth-child(2n+1),
.blog-grid .blog-wrapper.col-md-4:nth-child(3n+1),
.blog-grid .blog-wrapper.col-md-3:nth-child(4n+1) {
  clear: left;
}
.blog-grid .blog-wrapper.col-3 .entry-title,
.blog-grid .blog-wrapper.col-4 .entry-title {
  font-size: 20px;
}
.socials-share {
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: inline-block;
}
.socials-share li {
  display: inline-block;
  padding: 0 5px;
}
.socials-share li:first-child {
  padding-left: 0;
}
.socials-share li:last-child {
  padding-right: 0;
}
.socials-share a {
  color: #848484;
  font-size: 14px;
  display: inline-block;
  width: 39px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background-color: #f4f4f4;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  position: relative;
}
.socials-share a:hover {
  background-color: #ff0000;
  color: #fff;
}
.tax-service_category .site-content,
.post-type-archive-service .site-content {
  padding-top: 80px;
  padding-bottom: 40px;
}
/*** 

====================================================================
	services Section
====================================================================

 ***/

.service .service-inner {
  margin-bottom: 40px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.service .service-summary {
  margin-bottom: 0;
}
.service .service-summary h2 {
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 5px;
}
.service .service-summary p {
  margin-bottom: 0;
}
.service .service-thumbnail {
  margin-bottom: 27px;
  overflow: hidden;
  display: inline-block;
}
.service .service-thumbnail a {
  position: relative;
  display: block;
}
.service .service-thumbnail a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c1239;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  z-index: 99;
}
.service .service-thumbnail img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.service.col-md-4:nth-child(3n+1) {
  clear: left;
}
.service:hover .service-thumbnail a:before {
  opacity: 0.7;
}
.service:hover .service-thumbnail img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.service:hover .service-inner {
  border-color: #ff0000;
}
.service:hover .service-title a {
  color: #ff0000;
}
.post-type-archive-service .site-content .content-area,
.tax-service_category .site-content .content-area {
  padding-top: 0;
  padding-bottom: 0;
}
.single-service .aligncenter {
  display: none;
}
.single-service blockquote {
  padding: 20px 75px;
  background-color: #f4f4f4;
  border-left: 1px solid #ff0000;
  position: relative;
}
.single-service blockquote:before {
  content: '';
  position: absolute;
  width: 1px;
  height: 92%;
  left: 3px;
  top: 0;
  background-color: #ff0000;
}
.single-service blockquote:after {
  content: '\e914';
  font-family: 'factoryhub';
  position: absolute;
  top: 22px;
  left: 22px;
  color: #e6e6e6;
  font-style: normal;
  font-size: 32px;
}
.single-service cite {
  display: block;
  font-size: 16px;
  font-style: normal;
  padding-top: 10px;
  color: #222;
}
.single-service cite span {
  color: #ff0000;
}
.single-project .single-project {
  padding-bottom: 70px;
}
.single-project .entry-thumbnail {
  margin-bottom: 35px;
  position: relative;
}
.single-project .entry-thumbnail .owl-dots {
  position: absolute;
  left: 0;
  bottom: 30px;
  width: 100%;
  text-align: center;
}
.single-project .entry-thumbnail .owl-dots .owl-dot span {
  width: 12px;
  height: 12px;
  border: 4px solid #fff;
  background-color: transparent;
}
.single-project .entry-thumbnail .owl-dots .owl-dot:hover span,
.single-project .entry-thumbnail .owl-dots .owl-dot.active span {
  border-color: #ff0000;
}
.single-project .entry-content {
  padding-right: 30px;
  border-right: 1px solid #f4f4f4;
}
.single-project .single-project-title {
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 20px;
  margin-bottom: 30px;
  margin-top: 0;
  position: relative;
  text-transform: capitalize;
}
.single-project .single-project-title:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 67px;
  height: 2px;
  background-color: #ff0000;
}
.single-project .project-socials {
  padding-top: 20px;
}
.metas {
  padding-left: 30px;
}
.metas h4 {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1;
  display: inline-block;
  padding-right: 10px;
}
.metas a,
.metas p {
  color: #848484;
  font-size: 16px;
  margin-bottom: 0;
}
.metas .meta {
  padding-bottom: 19px;
}
.metas .meta:last-child {
  padding-bottom: 0;
}
.metas i {
  font-size: 14px;
  color: #ff0000;
}

/*** 

====================================================================
	Projects Section
====================================================================

 ***/

.list-project {
  margin-left: -15px;
  margin-right: -15px;
}
.all-project ul.filter {
  margin-bottom: 43px;
  list-style: none;
  text-align: center;
  display: inline-block;
  position: relative;
  padding-left: 0;
}
.all-project ul.filter li {
  font-size: 16px;
  color: #222;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding: 0 15px;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
}
.all-project ul.filter li a {
  color: #222;
  font-weight: 500;
}
.all-project ul.filter li.active,
.all-project ul.filter li:hover {
  color: #ff0000;
}
.all-project ul.filter li.active a,
.all-project ul.filter li:hover a {
  color: #ff0000;
}
.all-project ul.filter li:first-child {
  padding-left: 0;
}
.all-project ul.filter li:last-child {
  padding-right: 0;
}
.project-wrapper {
  margin-bottom: 30px;
  text-align: center;
}
.project-wrapper .project-thumbnail {
  position: relative;
  overflow: hidden;
}
.project-wrapper .project-thumbnail .pro-link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #0c1239;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  z-index: 99;
}
.project-wrapper .project-thumbnail img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.project-wrapper .project-thumbnail .project-button {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  -webkit-transform: scale(0.6) translateY(-50%);
      -ms-transform: scale(0.6) translateY(-50%);
          transform: scale(0.6) translateY(-50%);
  -webkit-transition: 0.5s;
          transition: 0.5s;
  opacity: 0;
  z-index: 100;
}
.project-wrapper .project-thumbnail .project-button .button-link {
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #fff;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  display: inline-block;
  margin: 0 3px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.project-wrapper .project-thumbnail .project-button .button-link:hover {
  background-color: #ff0000;
  border-color: #ff0000;
}
.project-wrapper:hover .project-thumbnail .pro-link {
  opacity: 0.7;
}
.project-wrapper:hover .project-thumbnail img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.project-wrapper:hover .project-thumbnail .project-button {
  -webkit-transform: scale(1) translateY(-50%);
      -ms-transform: scale(1) translateY(-50%);
          transform: scale(1) translateY(-50%);
  opacity: 1;
}

/*** 

====================================================================
	404 page
====================================================================

 ***/
.search-no-results .no-results .page-header {
  background-color: transparent;
}
.search-no-results .no-results h2 {
  margin-bottom: 30px;
  color: #222;
}
.search-no-results .no-results .search-form {
  font-size: 16px;
  position: relative;
  color: #a8a8a8;
  padding: 0 5px;
  border: 1px solid #f4f4f4;
  margin-top: 20px;
}
.search-no-results .no-results .search-form:before {
  content: '\f002';
  position: absolute;
  top: 50%;
  right: 16px;
  color: #222;
  font-family: FontAwesome;
  font-size: 14px;
  z-index: 99;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.search-no-results .no-results .search-form .screen-reader-text {
  display: none;
}
.search-no-results .no-results .search-form ::-webkit-input-placeholder {
  color: #a8a8a8;
}
.search-no-results .no-results .search-form :-moz-placeholder {
  color: #a8a8a8;
}
.search-no-results .no-results .search-form ::-moz-placeholder {
  color: #a8a8a8;
}
.search-no-results .no-results .search-form :-ms-input-placeholder {
  color: #a8a8a8;
}
.search-no-results .no-results .search-form .search-submit {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 9999;
}
.search-no-results .no-results .search-form label {
  width: 100%;
  margin-bottom: 0;
}
.search-no-results .no-results .search-form label input {
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 35px 0 15px;
  border: 0;
  background-color: transparent;
  font-weight: 400;
}
.search-no-results .no-results .search-form label input:focus {
  outline: none;
}


.error404 .site-content {
  padding-top: 140px;
  padding-bottom: 140px;
}
.error404 .error-404 {
  text-align: left;
  color: #222;
}
.error404 .error-404 .page-header {
  margin-top: 0;
  padding-bottom: 0;
  margin-bottom: 45px;
  border: 0;
  background-color: transparent;
}
.error404 .error-404 .page-header p {
  line-height: 1;
}
.error404 .error-404 .page-header p.line-1 {
  font-size: 20px;
  text-transform: uppercase;
  padding-bottom: 15px;
}
.error404 .error-404 .page-header p.line-2 {
  font-size: 18px;
}
.error404 .error-404 h1 {
  font-size: 150px;
  font-weight: 600;
  color: #222;
  margin: 0;
  line-height: 1;
  padding-bottom: 5px;
}
.error404 .error-404 .search-field {
  background-color: #fff;
  font-weight: 400;
  border: none;
}
.error404 .error-404 .search-form {
  font-size: 16px;
  position: relative;
  color: #848484;
  padding: 0 5px;
  width: 430px;
  border: 1px solid #ececec;
  background-color: #fff;
}
.error404 .error-404 .search-form:before {
  content: '\f002';
  position: absolute;
  top: 50%;
  right: 7px;
  color: #222;
  font-family: FontAwesome;
  font-size: 14px;
  z-index: 99;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.error404 .error-404 .search-form:after {
  content: '';
  position: absolute;
  top: -1px;
  right: -11px;
  width: 50px;
  height: 52px;
  background-color: #fafafa;
  z-index: 9;
  border: 1px solid #ececec;
}
.error404 .error-404 .search-form .screen-reader-text {
  display: none;
}
.error404 .error-404 .search-form ::-webkit-input-placeholder {
  color: #9e9e9e;
}
.error404 .error-404 .search-form :-moz-placeholder {
  color: #9e9e9e;
}
.error404 .error-404 .search-form ::-moz-placeholder {
  color: #9e9e9e;
}
.error404 .error-404 .search-form :-ms-input-placeholder {
  color: #9e9e9e;
}
.error404 .error-404 .search-form .search-submit {
  position: absolute;
  top: 1px;
  right: -10px;
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 9999;
}
.error404 .error-404 .search-form label {
  width: 100%;
  margin-bottom: 0;
}
.error404 .error-404 .search-form label input {
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 0 0 15px;
}
.error404 .error-404 .search-form label input:focus {
  outline: none;
}
.error404 .error-404 .back-home {
  margin-top: 25px;
}
.error404 .error-404 .back-home a {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
}
.error404.error404-no-bg .error-404 div[class*="col-"] {
  width: 100%;
  text-align: center;
}
.error404.error404-no-bg .error-404 .search-form {
  margin: 0 auto;
}
/*** 

====================================================================
	Back To Top
====================================================================

 ***/
.scroll-to-top {
  display: inline-block;
  position: fixed;
  bottom: 60px;
  right: 15px;
  width: 60px;
  height: 60px;
  line-height: 50px;
  text-align: center;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  border: 3px solid #ff0000;
  color: #ff0000;
  font-size: 30px;
  background-color: #160f09;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  z-index: 9999;
  cursor:pointer;
}
.scroll-to-top .fa {
  color: #ff0000;
}
.scroll-to-top:hover {
  color: #ff0000;
}
.scroll-to-top:hover .fa {
  color: #ff0000;
}
.scroll-to-top.show-scroll {
  opacity: 1;
}
.backtotop {
	display: inline-block;
	position: fixed;
	bottom: 60px;
	right: 60px;
	width: 60px;
	height: 60px;
	line-height: 50px;
	text-align: center;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	border: 3px solid #ff0000;
	color: #ff0000;
	font-size: 30px;
	background-color: #160f09;
	opacity: 0;
	-webkit-transition: 0.5s;
	transition: 0.5s;
	z-index: 9999;
}
.backtotop .fa {
	color: #ff0000;
}
.backtotop.show-scroll {
	opacity: 1;
}

/*** 

====================================================================
	Comments Style
====================================================================

 ***/
.bypostauthor {
  display: block;
}
.comments-area {
  clear: both;
  margin-top: 80px;
}
.comments-title,
.comment-reply-title {
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 600;
  margin: 0 0 20px;
  padding-bottom: 10px;
  position: relative;
}
.comments-title:after,
.comment-reply-title:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 67px;
  background-color: #ff0000;
  left: 0;
  bottom: 0;
}
.comment-count {
  display: none;
}
.comment-reply-title {
  margin-bottom: 30px;
}
.comment-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.comment-list .children {
  list-style: none;
  padding: 0 0 0 80px;
}
.comment-list .children:last-child {
  margin-bottom: 0;
}
.comment-list > .comment:first-child article {
  border: none;
}
.comment {
  zoom: 1;
  float: left;
  clear: both;
  width: 100%;
}
.comment:before,
.comment:after {
  content: "";
  display: table;
}
.comment:after {
  clear: both;
}
.comment:before,
.comment:after {
  content: "";
  display: table;
}
.comment:after {
  clear: both;
}
.comment article {
  padding: 40px 0;
  border-top: 1px solid #ececec;
  overflow: hidden;
}
.comment .comment-author {
  float: left;
}
.comment .comment-edit-link {
  float: right;
  margin-right: 20px;
}
.comment .comment-meta {
  margin-left: 130px;
}
.comment .author-name {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: #222;
  font-weight: 400;
  text-transform: capitalize;
  font-style: normal;
  padding-bottom: 10px;
}
.comment .comment-reply-link {
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  position: relative;
  font-family: 'Montserrat', sans-serif;
}
.comment .comment-reply-link:hover {
  color: #ff0000;
}
.comment-respond {
  margin-top: 50px;
}
.comment-respond .comment-notes {
  font-size: 16px;
  font-weight: 400;
  color: #222;
  padding-bottom: 5px;
}
.comment-respond ::-webkit-input-placeholder {
  color: #9f9f9f;
  font-size: 16px;
}
.comment-respond .required {
  display: none;
}
.comment-respond textarea {
  width: 100%;
  padding: 10px 15px;
  border-color: #ececec;
  outline: none;
  color: #222;
  height: 108px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.comment-respond textarea:focus {
  border-color: #848484;
}
.comment-respond .comment-form-comment {
  margin-bottom: 30px;
  margin-top: 20px;
}
.comment-respond .comment-form-email input {
  border: 1px solid #ececec;
}
.comment-respond .comment-form-author,
.comment-respond .comment-form-email,
.comment-respond .comment-form-url,
.comment-respond .comment-form-phone {
  width: 50%;
  float: left;
  padding: 0 15px;
}
.comment-respond .comment-form-author input,
.comment-respond .comment-form-email input,
.comment-respond .comment-form-url input,
.comment-respond .comment-form-phone input {
  width: 100%;
  padding-left: 15px;
  height: 50px;
  border-color: #ececec;
  outline: none;
  color: #222;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.comment-respond .comment-form-author input:focus,
.comment-respond .comment-form-email input:focus,
.comment-respond .comment-form-url input:focus,
.comment-respond .comment-form-phone input:focus {
  border-color: #848484;
}
.comment-respond .comment-form-author,
.comment-respond .comment-form-url {
  padding-left: 0;
}
.comment-respond .comment-form-email,
.comment-respond .comment-form-phone {
  padding-right: 0;
}
.comment-respond .form-submit {
  clear: both;
  margin-top: 35px;
}
.comment-respond .form-submit .submit {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 150px;
  min-height: 50px;
  line-height: 50px;
  -webkit-border-radius: 0;
          border-radius: 0;
  padding: 0 20px;
  background-color: #ff0000;
  text-transform: capitalize;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  font-family: 'Montserrat', sans-serif;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.comment-respond .form-submit .submit:hover,
.comment-respond .form-submit .submit:focus {
  color: #fff;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: none;
  background-color: #ff0000;
}
.comment-content {
  word-break: break-all;
  padding-bottom: 20px;
}
.comment-content a {
  word-wrap: break-word;
}
.comment-awaiting-moderation {
  display: block;
}
/*** 

====================================================================
	Sidebar Widgets
====================================================================

 ***/
.single-right .blog-sidebar .cargohub-widget {
  border-left: 1px solid #f4f4f4;
  padding-left: 40px;
}
.single-left .blog-sidebar .cargohub-widget {
  border-right: 1px solid #f4f4f4;
  padding-right: 40px;
}
.widget {
  margin-bottom: 50px;
}
.widget:last-child {
  margin-bottom: 0;
}
.widget .widget-title {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 40px;
  padding-bottom: 15px;
  position: relative;
}
.widget .widget-title:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 67px;
  left: 0;
  bottom: 0;
  background-color: #ff0000;
}
.widget ul {
  margin: 0;
  padding: 0;
}
.widget ul li {
  list-style: none;
}
.widget table,
.widget select {
  width: 100%;
}
.widget select {
  color: #848484;
  border: 1px solid #eeeeee;
  height: 50px;
  padding-left: 15px;
  background-color: transparent;
  font-weight: 400;
}
.widget select:focus {
  outline: none;
}
.widget select option {
  color: #555;
}
.widget table {
  text-align: left;
  width: 100%;
}
.widget table caption {
  border: 1px solid #eeeeee;
  border-bottom-width: 0;
  text-align: center;
}
.widget table thead {
  color: #222;
}
.widget table tr {
  border: 1px solid #eeeeee;
  border-bottom-width: 0;
  padding: 3px 0;
}
.widget table tr td,
.widget table tr th {
  padding: 5px 10px;
  border-bottom: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
}
.widget_calendar {
  line-height: 26px;
}
.widget_recent_comments li,
.widget_rss li {
  border-bottom: solid 1px #f4f4f4;
  padding: 15px 0;
  position: relative;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
}
.widget_recent_comments li > a,
.widget_rss li > a {
  color: #848484;
  padding-left: 0;
  position: relative;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
}
.widget_recent_comments li:hover > a,
.widget_rss li:hover > a {
  color: #ff0000;
}
.widget_recent_comments li:last-child,
.widget_rss li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.widget_recent_comments li ul,
.widget_rss li ul {
  margin-top: 15px;
  border-top: solid 1px #f4f4f4;
}
.widget_recent_comments .children,
.widget_rss .children {
  border-top: 1px solid #f4f4f4;
  margin-top: 15px;
  margin-left: 15px;
}
.widget_recent_comments .children li:first-child,
.widget_rss .children li:first-child {
  padding-top: 15px;
}
.widget_recent_comments .children li:last-child,
.widget_rss .children li:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.widget_categories .widget-title,
.widget_pages .widget-title,
.widget_archive .widget-title,
.widget_nav_menu .widget-title,
.widget_recent_entries .widget-title,
.widget_meta .widget-title,
ul.service-menu .widget-title {
  margin-bottom: 40px;
}
.widget_categories li,
.widget_pages li,
.widget_archive li,
.widget_nav_menu li,
.widget_recent_entries li,
.widget_meta li,
ul.service-menu li {
  padding: 14px 0;
  position: relative;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
  border-bottom: 1px solid #eee;
}
.widget_categories li:after,
.widget_pages li:after,
.widget_archive li:after,
.widget_nav_menu li:after,
.widget_recent_entries li:after,
.widget_meta li:after,
ul.service-menu li:after {
  color: #848484;
  content: '\f105';
  position: absolute;
  top: 15px;
  right: 0;
  font-size: 16px;
  font-family: FontAweSome;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
}
.widget_categories li > a,
.widget_pages li > a,
.widget_archive li > a,
.widget_nav_menu li > a,
.widget_recent_entries li > a,
.widget_meta li > a,
ul.service-menu li > a {
  color: #848484;
  padding-left: 30px;
  position: relative;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
}
.widget_categories li > a:before,
.widget_pages li > a:before,
.widget_archive li > a:before,
.widget_nav_menu li > a:before,
.widget_recent_entries li > a:before,
.widget_meta li > a:before,
ul.service-menu li > a:before {
  color: #848484;
  content: '\f114';
  position: absolute;
  top: -4px;
  left: 0;
  font-size: 16px;
  font-family: FontAweSome;
  -webkit-transition: all 0.5s;
          transition: all 0.5s;
}
.widget_categories li:hover,
.widget_pages li:hover,
.widget_archive li:hover,
.widget_nav_menu li:hover,
.widget_recent_entries li:hover,
.widget_meta li:hover,
ul.service-menu li:hover {
  color: #ff0000;
}
.widget_categories li:hover:after,
.widget_pages li:hover:after,
.widget_archive li:hover:after,
.widget_nav_menu li:hover:after,
.widget_recent_entries li:hover:after,
.widget_meta li:hover:after,
ul.service-menu li:hover:after {
  color: #ff0000;
}
.widget_categories li:hover > a,
.widget_pages li:hover > a,
.widget_archive li:hover > a,
.widget_nav_menu li:hover > a,
.widget_recent_entries li:hover > a,
.widget_meta li:hover > a,
ul.service-menu li:hover > a {
  color: #ff0000;
}
.widget_categories li:hover > a:before,
.widget_pages li:hover > a:before,
.widget_archive li:hover > a:before,
.widget_nav_menu li:hover > a:before,
.widget_recent_entries li:hover > a:before,
.widget_meta li:hover > a:before,
ul.service-menu li:hover > a:before {
  color: #ff0000;
}
.widget_categories li ul,
.widget_pages li ul,
.widget_archive li ul,
.widget_nav_menu li ul,
.widget_recent_entries li ul,
.widget_meta li ul,
ul.service-menu li ul {
  margin-top: 15px;
  border-top: solid 1px #f4f4f4;
}
.widget_categories li ul li:last-child,
.widget_pages li ul li:last-child,
.widget_archive li ul li:last-child,
.widget_nav_menu li ul li:last-child,
.widget_recent_entries li ul li:last-child,
.widget_meta li ul li:last-child,
ul.service-menu li ul li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.widget_categories .children,
.widget_pages .children,
.widget_archive .children,
.widget_nav_menu .children,
.widget_recent_entries .children,
.widget_meta .children,
ul.service-menu .children {
  border-top: 1px solid #f4f4f4;
  margin-top: 15px;
  margin-left: 15px;
}
.widget_categories .children li:first-child,
.widget_pages .children li:first-child,
.widget_archive .children li:first-child,
.widget_nav_menu .children li:first-child,
.widget_recent_entries .children li:first-child,
.widget_meta .children li:first-child,
ul.service-menu .children li:first-child {
  padding-top: 15px;
}
.widget_categories .children li:last-child,
.widget_pages .children li:last-child,
.widget_archive .children li:last-child,
.widget_nav_menu .children li:last-child,
.widget_recent_entries .children li:last-child,
.widget_meta .children li:last-child,
ul.service-menu .children li:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.widget_tag_cloud a {
  margin-bottom: 10px;
  margin-right: 8px;
  display: inline-block;
  font-size: 16px !important;
  background-color: transparent;
  color: #848484;
  padding: 5px 18px;
  position: relative;
  border: 1px solid #f4f4f4;
}
.widget_tag_cloud a:hover {
  color: #fff;
  text-decoration: none;
  background-color: #ff0000;
}
.popular-posts-widget .popular-post {
  margin-bottom: 40px;
  border: 0;
  padding: 0;
}
.popular-posts-widget .widget-thumb {
  float: left;
}
.popular-posts-widget .mini-widget-title {
  margin-left: 100px;
}
.popular-posts-widget .mini-widget-title h4 {
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-transform: capitalize;
  margin-top: -5px;
  margin-bottom: 8px;
}
.popular-posts-widget i {
  color: #ff0000;
  padding-right: 10px;
}
.widget-about img {
  margin-bottom: 25px;
}
.widget-about a {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-top: 20px;
}
.widget-about a .fa {
  padding-left: 5px;
}
.widget-about a:hover {
  color: #ff0000;
}
.tabs-widget .tabs-nav li {
  width: 33%;
  border-bottom: none;
  padding-bottom: 0;
}
.tabs-widget .tabs-nav li:last-child {
  width: 34%;
}
.tabs-widget .tabs-nav li:before {
  display: none;
}
.tabs-widget .tabs-nav li a {
  background: #555;
  border: 1px solid #ccc;
  color: #646464;
  padding: 8px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}
.tabs-widget .tabs-nav li a.active {
  color: #fff;
  text-decoration: none;
  border-color: transparent;
  background-color: #ff0000;
}
.tabs-widget .tabs-nav li a:hover {
  text-decoration: none;
}
.tabs-widget .tabs-panel {
  margin-top: -1px;
  padding: 15px 0 20px;
}
.tabs-widget .tab-comments .comment {
  border-bottom: solid 1px #ccc;
  padding: 10px 0;
  overflow: hidden;
}
.tabs-widget .tab-comments .comment-summary {
  font-style: italic;
  margin-bottom: 5px;
}
.recent-post {
  margin-bottom: 20px;
}
.recent-post:last-child {
  margin-bottom: 0;
}
.recent-post .widget-thumb {
  display: block;
  float: left;
}
.recent-post .icon {
  color: #ff0000;
  display: none;
}
.recent-post .post-text {
  padding-left: 85px;
}
.recent-post .post-title {
  display: block;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 5px;
}
.recent-post .post-date {
  font-size: 16px;
  font-weight: 300;
}
.recent-post.no-thumbnail .icon {
  display: block;
  float: left;
}
.recent-post.no-thumbnail .icon i,
.recent-post.no-thumbnail .icon i:before {
  font-size: 16px;
}
.recent-post.no-thumbnail .post-text {
  padding-left: 26px;
}
.popular-post {
  border-bottom: 1px solid #f4f4f4;
  padding: 25px 0;
  overflow: hidden;
}
.popular-post:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.popular-post .widget-thumb {
  float: left;
}
.popular-post .post-text {
  margin-left: 95px;
  color: #848484;
  font-size: 16px;
}
.popular-post .post-text .post-title {
  color: #222;
  display: block;
  padding-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
.popular-post .post-text .post-date i {
  font-size: 14px;
  padding-right: 10px;
  color: #ff0000;
}
.popular-post .post-text .post-comments {
  display: block;
}
.popular-post .post-text .read-more {
  line-height: 2;
}
.popular-post.no-thumbnail .post-text {
  margin-left: 0;
  margin-top: 0;
}
.widget-recent-comments li {
  padding: 20px 0;
  color: #ccc;
}
.widget-recent-comments li a,
.widget-recent-comments li p {
  color: #555;
}
.widget_search .search-field,
.topbar-search .search-field {
  background-color: transparent;
  font-weight: 400;
  border-width: 0;
}
.widget_search .search-form,
.topbar-search .search-form {
  font-size: 16px;
  position: relative;
  color: #222;
  border: 1px solid #eee;
}
.widget_search .search-form:before,
.topbar-search .search-form:before {
  content: '\f002';
  font-family: FontAwesome;
}
.widget_search .search-form:after,
.topbar-search .search-form:after {
  content: '';
  position: absolute;
  top: -1px;
  right: -1px;
  width: 50px;
  height: 52px;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  z-index: 9;
}
.widget_search .search-form i,
.topbar-search .search-form i,
.widget_search .search-form:before,
.topbar-search .search-form:before {
  position: absolute;
  top: 50%;
  right: 16px;
  color: #222;
  font-size: 14px;
  z-index: 99;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.widget_search .search-form .screen-reader-text,
.topbar-search .search-form .screen-reader-text {
  display: none;
}
.widget_search .search-form ::-webkit-input-placeholder,
.topbar-search .search-form ::-webkit-input-placeholder {
  color: #ff0000;
}
.widget_search .search-form :-moz-placeholder,
.topbar-search .search-form :-moz-placeholder {
  color: #ff0000;
}
.widget_search .search-form ::-moz-placeholder,
.topbar-search .search-form ::-moz-placeholder {
  color: #ff0000;
}
.widget_search .search-form :-ms-input-placeholder,
.topbar-search .search-form :-ms-input-placeholder {
  color: #ff0000;
}
.widget_search .search-form .search-submit,
.topbar-search .search-form .search-submit {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 9999;
}
.widget_search .search-form label,
.topbar-search .search-form label {
  width: 100%;
  margin-bottom: 0;
}
.widget_search .search-form input[type=search], .topbar-search .search-form input[type=search] {
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 55px 0 15px;
}
.widget_search .search-form input[type=search]:focus, .topbar-search .search-form input[type=search]:focus {
  outline: none;
}
.download .item-download {
  background-color: transparent;
  font-size: 16px;
  position: relative;
  border: 1px solid #f4f4f4;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  padding: 15px 20px;
}
.download .item-download a {
  font-weight: 600;
  display: block;
  color: #222;
}
.download .item-download i {
  color: #222;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  padding-right: 20px;
}
.download .item-download:hover {
  color: #fff;
  border-color: #ff0000;
  background-color: #ff0000;
}
.download .item-download:hover a,
.download .item-download:hover i {
  color: #fff;
}

/*** 

====================================================================
	Sidebar Services
====================================================================

 ***/

.services-menu-widget ul li {
  border: 1px solid #ececec;
  border-bottom-width: 0;
  background-color: #f7f7f7;
  padding: 15px 20px;
  position: relative;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.services-menu-widget ul li:after {
  display: none;
}
.services-menu-widget ul li:last-child {
  border-bottom-width: 1px;
}
.services-menu-widget ul li a {
  display: block;
  color: #848484;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  padding-left: 0;
  font-weight: 400;
  position: relative;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.services-menu-widget ul li a:before {
  display: none;
}
.services-menu-widget ul li:hover,
.services-menu-widget ul li.current-menu-item {
  background-color: #ff0000;
  border-color: #ff0000;
}
.services-menu-widget ul li:hover a,
.services-menu-widget ul li.current-menu-item a {
  color: #fff;
}
.side-contact {
  padding: 25px 20px;
}
.side-contact h3 {
  margin-top: 0;
  margin-bottom: 35px;
  font-size: 24px;
  color: #fff;
  position: relative;
  padding-bottom: 15px;
}
.side-contact h3:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70px;
  height: 1px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
}
.side-contact i {
  color: #ff0000;
  padding-right: 10px;
}
.cargohub-social-links-widget a {
  color: #fff;
  padding: 0 15px;
  font-size: 16px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.cargohub-social-links-widget a:first-child {
  padding-left: 0;
}
.cargohub-social-links-widget a:last-child {
  padding-right: 0;
}
.cargohub-social-links-widget a:hover {
  color: #ff0000;
}
.cargohub-social-links-widget .style-2 a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  width: 38px;
  height: 38px;
  line-height: 34px;
  padding: 0;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  -webkit-border-radius: 50%;
          border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
}
.cargohub-social-links-widget .style-2 a:first-child {
  margin-left: 0;
}
.cargohub-social-links-widget .style-2 a:last-child {
  margin-right: 0;
}
.cargohub-social-links-widget .style-2 a:hover {
  color: #fff;
  background-color: #ff0000;
  border-color: #ff0000;
}

/*** 

====================================================================
	sidebar project
====================================================================

 ***/

.latest-project-widget .latest-project-list {
  margin-left: -5px;
  margin-right: -5px;
}
.latest-project-widget .latest-project {
  width: 33.3333%;
  float: left;
  padding: 0 5px;
  margin-bottom: 10px;
}
.latest-project-widget .widget-thumb {
  display: block;
  position: relative;
}
.latest-project-widget .widget-thumb:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ff0000;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  opacity: 0;
  z-index: 90;
}
.latest-project-widget .widget-thumb:hover:before {
  opacity: 0.8;
}
.latest-project-widget .widget-thumb:hover i {
  opacity: 1;
}
.latest-project-widget i {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  color: #fff;
  font-size: 16px;
  z-index: 99;
}
.latest-project-widget .fp-widget-thumb {
  display: inline-block;
}
/*** 

====================================================================
	Contact location
====================================================================

 ***/
.cargo-office-location-widget {
  line-height: initial;
  -webkit-transform: translateY(10px);
      -ms-transform: translateY(10px);
          transform: translateY(10px);
}
.cargo-office-location-widget .current-office {
  color: #dde2fc;
  padding-right: 17px;
  position: relative;
}
.cargo-office-location-widget .current-office:after {
  content: '\f107';
  font-family: FontAweSome;
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  font-size: 15px;
  color: #ff0000;
  z-index: 99;
}
.cargo-office-location-widget .office-switcher {
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 10px;
  position: relative;
  float: left;
}
.cargo-office-location-widget .office-switcher i {
  font-size: 15px;
  padding-right: 10px;
}
.cargo-office-location-widget .office-switcher i:before {
  font-size: 15px;
}
.cargo-office-location-widget .office-switcher ul {
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transition: top 0.3s ease 0s, opacity 0.3s;
          transition: top 0.3s ease 0s, opacity 0.3s;
  position: absolute;
  background-color: #fff;
  color: #222;
  width: 100%;
  padding: 5px 10px;
  left: 0;
  top: -webkit-calc(100% + 28px);
  top: calc(100% + 28px);
  font-weight: 400;
  -webkit-box-shadow: 0 3px 16.6px 3.4px rgba(0, 0, 0, 0.2);
          box-shadow: 0 3px 16.6px 3.4px rgba(0, 0, 0, 0.2);
}
.cargo-office-location-widget .office-switcher ul li {
  padding: 5px 0;
  cursor: pointer;
}
.cargo-office-location-widget .office-switcher.show-office ul {
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
  top: -webkit-calc(100% + 15px);
  top: calc(100% + 15px);
}
.cargo-office-location-widget .topbar-office {
  float: right;
  display: none;
}
.cargo-office-location-widget .topbar-office.active {
  display: block;
  padding-left: 10px;
}
.cargo-office-location-widget .topbar-office li {
  display: inline-block;
  padding: 0 20px;
}
.cargo-office-location-widget .topbar-office li:last-child {
  padding-right: 0;
}
.cargo-office-location-widget .topbar-office li i {
  color: #ff0000;
  padding-right: 6px;
  font-size: 18px;
}
.cargo-office-location-widget .topbar-office li i:before {
  font-size: 18px;
}
.cargo-contact-widget .detail {
  margin-bottom: 15px;
  padding-bottom: 13px;
  border-bottom: 1px solid #f4f4f4;
}
.cargo-contact-widget .detail:last-child {
  border: 0;
}
.cargo-contact-widget i {
  color: #ff0000;
  font-size: 23px;
  float: left;
}
.cargo-contact-widget i:before {
  font-size: 23px;
}
.cargo-contact-widget h5,
.cargo-contact-widget p {
  padding-left: 40px;
}
.cargo-contact-widget h5 {
  margin-top: 0;
  margin-bottom: 7px;
}
.cargo-contact-widget p {
  margin-bottom: 0;
}
/*** 

====================================================================
	Footer
====================================================================

 ***/
.site-footer {
  padding: 25px 0;
  color: #fff;
}
.site-footer .footer-copyright {
  font-size: 16px;
  color: #fff;
}
.site-footer .footer-copyright a {
  color: #ff0000;
}
.footer-widgets {
  color: #fff;
}
.footer-widgets .widget {
  margin-bottom: 35px;
}
.footer-widgets .widget_mc4wp_form_widget {
  margin-bottom: 0;
}
.footer-widgets .widget-title {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  padding-bottom: 20px;
  text-transform: uppercase;
}
.footer-widgets .widget-title:after {
  display: none;
}
.footer-widgets .widget-title a {
  color: #fff;
}
.footer-widgets .menu {
  margin-top: -10px;
}
.footer-widgets .menu li {
  padding: 5px 0 5px 15px;
  border: 0;
}
.footer-widgets .menu li:before {
  display: none;
}
.footer-widgets .menu li:after {
  top: 4px;
  right: auto;
  left: 0;
}
.footer-widgets .menu li a {
  color: #fff;
  padding-left: 0;
}
.footer-widgets .menu li a:before {
  display: none;
}
.footer-widgets .menu li:hover a {
  color: #ff0000;
}
.footer-widgets .fh-form-field {
  margin-bottom: 15px;
}
.footer-widgets .fh-form-field .subscribe {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 23px;
}
.footer-widgets .fh-form-field .subscribe ::-webkit-input-placeholder {
  color: #ff0000;
}
.footer-widgets .fh-form-field .subscribe ::-moz-placeholder {
  color: #fff;
}
.footer-widgets .fh-form-field .subscribe :-ms-input-placeholder {
  color: #fff;
}
.footer-widgets .fh-form-field .subscribe :-moz-placeholder {
  color: #fff;
}
.footer-widgets .fh-form-field .subscribe input[type=email] {
  width: 100%;
  background-color: transparent;
  color: #fff;
  padding-left: 10px;
  padding-right: 95px;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  height: 50px;
  line-height: 50px;
}
.footer-widgets .fh-form-field .subscribe input[type=email]:focus {
  outline: none;
}
.footer-widgets .fh-form-field .subscribe input[type=submit] {
  position: absolute;
  width: 86px;
  height: 50px;
  right: 0;
  top: 0;
  background-color: #ff0000;
  z-index: 99;
  border: none;
}
.latest-post {
  padding: 22px 0;
  border-bottom: 1px solid #0a253d;
}
.latest-post:first-child {
  padding-top: 0;
}
.latest-post:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.latest-post .post-date {
  display: block;
  color: #ff0000;
}
.latest-post a {
  display: block;
  color: #d8d8d8;
  font-family: 'Montserrat', sans-serif;
}
.latest-project-widget .latest-project-list {
  padding-top: 5px;
}
.footer-menu ul {
  padding: 0;
  margin: 0;
}
.footer-menu ul li {
  display: inline-block;
  padding: 0 15px;
}
.footer-menu ul li:last-child {
  padding-right: 0;
}
.footer-menu ul li:first-child {
  padding-left: 0;
}
.footer-menu ul li a {
  color: #848484;
}
.footer-menu ul li a:hover {
  color: #ff0000;
}
.footer-text a {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
}
.contact-widget {
  border-bottom: 1px solid #232951;
  padding-top: 50px;
  padding-bottom: 40px;
}
.contact-widget .contact h4 {
  color: #fff;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  padding-left: 50px;
}
.contact-widget .contact p {
  font-style: italic;
  margin-bottom: 0;
  padding-left: 50px;
}
.contact-widget .contact i {
  color: #ff0000;
  float: left;
  font-size: 38px;
  margin-top: -5px;
}
.contact-widget .contact i:before {
  font-size: 38px;
}
.footer-contact {
  margin-left: -15px;
  margin-right: -15px;
}
.footer-contact .ft-contact i {
  float: left;
  font-size: 23px;
  color: #ff0000;
  margin-top: -3px;
}
.footer-contact .ft-contact i:before {
  font-size: 23px;
}
.footer-contact .ft-contact p {
  margin-left: 45px;
}
.footer-contact .ft-contact.fax {
  margin-bottom: 30px;
}
.footer-contact .ft-contact.phone {
  margin-bottom: 5px;
}
.footer-contact .ft-contact.phone p {
  margin-bottom: 5px;
}
.footer-sidebars {
  padding-top: 80px;
  padding-bottom: 50px;
}
.opening-hours {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}
.opening-hours li {
  padding: 4px 0;
}
.opening-hours li span {
  float: right;
}

/*** 

====================================================================
	 Carousel
====================================================================

 ***/


.owl-carousel {
  display: none;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  /* position relative and z-index fix webkit rendering fonts issue */
  position: relative;
  z-index: 1;
}
.owl-carousel .owl-stage {
  position: relative;
  -ms-touch-action: pan-Y;
}
.owl-carousel .owl-stage:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
.owl-carousel .owl-stage-outer {
  position: relative;
  overflow: hidden;
  /* fix for flashing background */
  -webkit-transform: translate3d(0px, 0px, 0px);
}
.owl-carousel .owl-item {
  position: relative;
  min-height: 1px;
  float: left;
  -webkit-backface-visibility: hidden;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.owl-carousel .owl-item img {
  -webkit-transform-style: preserve-3d;
}
.owl-carousel .owl-nav.disabled,
.owl-carousel .owl-dots.disabled {
  display: none;
}
.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-dot {
  cursor: pointer;
  cursor: hand;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl-carousel.owl-loaded {
  display: block;
}
.owl-carousel.owl-loading {
  opacity: 0;
  display: block;
}
.owl-carousel.owl-hidden {
  opacity: 0;
}
.owl-carousel.owl-refresh .owl-item {
  visibility: hidden;
}
.owl-carousel.owl-drag .owl-item {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl-carousel.owl-grab {
  cursor: move;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}
.owl-carousel.owl-rtl {
  direction: rtl;
}
.owl-carousel.owl-rtl .owl-item {
  float: right;
}
/* No Js */
.no-js .owl-carousel {
  display: block;
}
/*
 *  Owl Carousel - Animate Plugin
 */
.owl-carousel .animated {
  -webkit-animation-duration: 1000ms;
  animation-duration: 1000ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.owl-carousel .owl-animated-in {
  z-index: 0;
}
.owl-carousel .owl-animated-out {
  z-index: 1;
}
.owl-carousel .fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
/*
 * 	Owl Carousel - Auto Height Plugin
 */
.owl-height {
  -webkit-transition: height 500ms ease-in-out;
          transition: height 500ms ease-in-out;
}
/*
 * 	Owl Carousel - Lazy Load Plugin
 */
.owl-carousel .owl-item .owl-lazy {
  opacity: 0;
  -webkit-transition: opacity 400ms ease;
          transition: opacity 400ms ease;
}
.owl-carousel .owl-item img.owl-lazy {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
/*
 * 	Owl Carousel - Video Plugin
 */
.owl-carousel .owl-video-wrapper {
  position: relative;
  height: 100%;
  background: #000;
}
.owl-carousel .owl-video-play-icon {
  position: absolute;
  height: 80px;
  width: 80px;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -40px;
  background: url("owl.video.play.png") no-repeat;
  cursor: pointer;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -webkit-transition: -webkit-transform 100ms ease;
          transition: -webkit-transform 100ms ease;
  transition: transform 100ms ease;
}
.owl-carousel .owl-video-play-icon:hover {
  -webkit-transform: scale(1.3, 1.3);
  -ms-transform: scale(1.3, 1.3);
  transform: scale(1.3, 1.3);
}
.owl-carousel .owl-video-playing .owl-video-tn,
.owl-carousel .owl-video-playing .owl-video-play-icon {
  display: none;
}
.owl-carousel .owl-video-tn {
  opacity: 0;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: contain;
          background-size: contain;
  -webkit-transition: opacity 400ms ease;
          transition: opacity 400ms ease;
}
.owl-carousel .owl-video-frame {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}
.owl-nav div {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.owl-nav .owl-prev {
  left: 0;
}
.owl-nav .owl-next {
  right: 0;
}
/* Styling Pagination*/
.owl-dots .owl-dot {
  display: inline-block;
  zoom: 1;
  *display: inline;
  /*IE7 life-saver */
}
.owl-dots .owl-dot span {
  display: block;
  width: 8px;
  height: 8px;
  margin: 0 7px;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  background-color: transparent;
  border: 1px solid #fff;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.owl-dots .owl-dot.active span,
.owl-dots .owl-dot:hover span {
  background-color: #fff;
}
/* If PaginationNumbers is true */
.owl-controls .owl-page span.owl-numbers {
  height: auto;
  width: auto;
  color: #FFF;
  padding: 2px 10px;
  font-size: 12px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
}

/*** 

====================================================================
	Shortcodes
====================================================================

 ***/

.site-content .vc_row.vc_row-fluid {
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
}
.site-content .vc_row.parallax {
  background-attachment: fixed;
  background-position: 50% 50%;
}
.site-content .vc_row.overlay-enable {
  position: relative;
}
.site-content .vc_row > .overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
.site-content .vc_row.vc_inner {
  margin-left: -15px;
  margin-right: -15px;
}
.site-content .vc_row > .container-fluid {
  padding-left: 15px;
  padding-right: 15px;
}
.site-content .vc_row .wpb_content_element {
  margin-bottom: 0;
}
.site-content .vc_row.vc_row-flex > .container-fluid {
  width: 100%;
}
.site-content .vc_row.vc_row-flex > .container > .row,
.site-content .vc_row.vc_row-flex > .container-fluid > .row {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.site-content .vc_row.vc_row-flex > .container > .row > .vc_column_container > .vc_column-inner,
.site-content .vc_row.vc_row-flex > .container-fluid > .row > .vc_column_container > .vc_column-inner {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  -moz-box-flex: 1;
       flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
     -moz-box-orient: vertical;
     -moz-box-direction: normal;
          flex-direction: column;
}
.site-content .vc_row.vc_row-o-columns-top > .container > .row,
.site-content .vc_row.vc_row-o-columns-top > .container-fluid > .row {
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
}
.site-content .vc_row.vc_row-o-columns-middle > .container > .row,
.site-content .vc_row.vc_row-o-columns-middle > .container-fluid > .row {
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
}
.site-content .vc_row.vc_row-o-columns-bottom > .container > .row,
.site-content .vc_row.vc_row-o-columns-bottom > .container-fluid > .row {
  -webkit-align-content: flex-end;
  -ms-flex-line-pack: end;
  align-content: flex-end;
}
.site-content .vc_row.vc_row-o-equal-height > .container > .row .vc_column_container,
.site-content .vc_row.vc_row-o-equal-height > .container-fluid > .row .vc_column_container {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  -moz-box-align: stretch;
       align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.site-content .vc_row.vc_row-o-content-top > .container > .row > .vc_column_container > .vc_column-inner,
.site-content .vc_row.vc_row-o-content-top > .container-fluid > .row > .vc_column_container > .vc_column-inner {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  -moz-box-pack: start;
       justify-content: flex-start;
}
.site-content .vc_row.vc_row-o-content-middle > .container > .row > .vc_column_container > .vc_column-inner,
.site-content .vc_row.vc_row-o-content-middle > .container-fluid > .row > .vc_column_container > .vc_column-inner {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -moz-box-pack: center;
       justify-content: center;
}
.site-content .vc_row.vc_row-o-content-bottom > .container > .row > .vc_column_container > .vc_column-inner,
.site-content .vc_row.vc_row-o-content-bottom > .container-fluid > .row > .vc_column_container > .vc_column-inner {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  -moz-box-pack: end;
       justify-content: flex-end;
}
.site-content .vc_column-inner {
  padding-top: 0 !important;
  background-repeat: no-repeat;
}
.fh-button {
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}
.fh-button:hover {
  color: #fff;
}
.fh-button.button-type-bordered {
  min-width: 160px;
  height: 50px;
  line-height: 48px;
  border: 1px solid #fff;
  text-align: center;
}
.fh-button.align-left {
  float: left;
}
.fh-button.align-right {
  float: right;
}
.fh-button.button-color-dark {
  color: #222;
}
.fh-button.button-color-dark.button-type-bordered {
  border-color: #222;
}
.fh-button.button-color-dark:hover {
  color: #222;
}
.fh-button .fh-icon,
.fh-button .img-icon {
  padding-left: 10px;
}
.fh-section-title h2 {
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 20px;
  margin-bottom: 0;
  margin-top: 0;
  position: relative;
  text-transform: uppercase;
}
.fh-section-title h2:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 67px;
  height: 2px;
  background-color: #ff0000;
}
.fh-section-title.text-center h2:before {
  left: 50%;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
}
.fh-section-title.version-light h2 {
  color: #fff;
  padding-bottom: 0;
}
.fh-section-title.version-light h2:before {
  display: none;
}
.fh-icon-box {
  margin-bottom: 30px;
  position: relative;
}
.fh-icon-box h4,
.fh-icon-box h4 a,
.fh-icon-box .fh-icon,
.fh-icon-box .img-icon {
  -webkit-transition: 0.5s;
          transition: 0.5s;
  position: relative;
  z-index: 10;
}
.fh-icon-box:hover h4 a {
  color: #ff0000;
}
.fh-icon-box:hover .overlay {
  opacity: 1;
}
.fh-icon-box h4 {
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 10px;
  padding-top: 15px;
  margin: 0;
}
.fh-icon-box .desc {
  position: relative;
  z-index: 10;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-icon-box .fh-icon {
  font-size: 74px;
  display: block;
  line-height: 1;
  background-color: transparent;
  color: #0c1239;
}
.fh-icon-box .fh-icon i:before {
  font-size: 74px;
}
.fh-icon-box.version-light {
  color: #fff;
}
.fh-icon-box.version-light h4,
.fh-icon-box.version-light h4 a,
.fh-icon-box.version-light .fh-icon {
  color: #fff;
}
.fh-icon-box.version-light:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c1239;
  opacity: 0.7;
  z-index: 9;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-icon-box.version-light:hover h4,
.fh-icon-box.version-light:hover h4 a,
.fh-icon-box.version-light:hover .fh-icon {
  color: #fff;
}
.fh-icon-box.version-light:hover:before {
  background-color: #ff0000;
}
.fh-icon-box.has-line:before {
  content: '';
  position: absolute;
  width: 1px;
  height: -webkit-calc(100% + 35px);
  height: calc(100% + 35px);
  top: 0;
  left: 35px;
  background-color: #efefef;
}
.fh-icon-box.has-line.icon-right:before {
  left: auto;
  right: 35px;
}
.fh-icon-box.has-line .fh-icon {
  background-color: #fff;
}
.fh-icon-box.no-border {
  border: none;
}
.fh-icon-box.show-button .button-box {
  position: absolute;
  left: 50%;
  bottom: 40px;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
  z-index: 10;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-icon-box.show-button:hover .desc {
  opacity: 0;
}
.fh-icon-box.show-button:hover .button-box {
  opacity: 1;
}
.fh-icon-box.style-1 {
  padding: 30px;
  border: 1px solid #efefef;
  text-align: center;
}
.fh-icon-box.style-1.no-border {
  border: none;
}
.fh-icon-box.style-1.version-light {
  -webkit-box-shadow: 0 3px 16.6px 3.4px rgba(0, 0, 0, 0.2);
          box-shadow: 0 3px 16.6px 3.4px rgba(0, 0, 0, 0.2);
}
.fh-icon-box.style-2 {
  margin-bottom: 35px;
}
.fh-icon-box.style-2 .fh-icon {
  font-size: 30px;
  color: #0c1239;
  width: 70px;
  height: 70px;
  line-height: 70px;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  text-align: center;
  border: 1px solid #dbdbdb;
  position: relative;
  z-index: 99;
}
.fh-icon-box.style-2 .fh-icon i:before {
  font-size: 30px;
}
.fh-icon-box.style-2:hover .fh-icon {
  background-color: #ff0000;
  border-color: #ff0000;
  color: #fff;
}
.fh-icon-box.style-2 h4 {
  padding-top: 0;
}
.fh-icon-box.style-2.icon-left h4,
.fh-icon-box.style-2.icon-left .desc {
  padding-left: 100px;
}
.fh-icon-box.style-2.icon-left .fh-icon,
.fh-icon-box.style-2.icon-left .img-icon {
  float: left;
}
.fh-icon-box.style-2.icon-right {
  text-align: right;
}
.fh-icon-box.style-2.icon-right h4,
.fh-icon-box.style-2.icon-right .desc {
  padding-right: 100px;
}
.fh-icon-box.style-2.icon-right .fh-icon,
.fh-icon-box.style-2.icon-right .img-icon {
  float: right;
}
.fh-icon-box.style-2.icon-center {
  text-align: center;
}
.fh-icon-box.style-2.icon-center .fh-icon,
.fh-icon-box.style-2.icon-center .img-icon {
  margin: 0 auto 20px;
}
.fh-icon-box.style-2.service-process .fh-icon {
  width: 110px;
  height: 110px;
  line-height: 110px;
}
.fh-icon-box.style-2.service-process .fh-icon i,
.fh-icon-box.style-2.service-process .fh-icon i:before {
  font-size: 32px;
}
.fh-icon-box.style-3 {
  color: #dde2fc;
}
.fh-icon-box.style-3 .fh-icon,
.fh-icon-box.style-3 .img-icon {
  font-size: 64px;
  color: #ff0000;
  float: left;
  padding-top: 25px;
}
.fh-icon-box.style-3 .fh-icon i:before,
.fh-icon-box.style-3 .img-icon i:before {
  font-size: 64px;
}
.fh-icon-box.style-3 h4,
.fh-icon-box.style-3 .desc {
  padding-left: 110px;
}
.fh-icon-box.style-3 h4,
.fh-icon-box.style-3 h4 a {
  padding-top: 0;
  padding-bottom: 15px;
  color: #fff;
  font-size: 24px;
}
.fh-feature-box {
  position: relative;
  color: #dde2fc;
  margin-bottom: 30px;
}
.fh-feature-box .box-title,
.fh-feature-box .desc {
  padding-left: 70px;
}
.fh-feature-box .chars {
  position: absolute;
  left: 0;
  top: 7px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  color: #ff0000;
  border: 1px solid #232951;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.fh-feature-box .box-title {
  font-size: 20px;
  color: #fff;
  margin: 0;
  padding-bottom: 10px;
  font-weight: 400;
}


/*** 

====================================================================
	service-box
====================================================================

 ***/
.fh-service-box {
  margin-bottom: 30px;
  color: #fff;
  position: relative;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box h4,
.fh-service-box h4 a {
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box h4,
.fh-service-box .desc {
  padding-left: 70px;
}
.fh-service-box h4 {
  margin: 0;
  padding-bottom: 10px;
}
.fh-service-box i {
  font-size: 50px;
  color: #fff;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box i:before {
  font-size: 50px;
}
.fh-service-box .fh-icon,
.fh-service-box .img-icon {
  position: absolute;
  left: 20px;
  top: 0;
  line-height: 1;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box.style-1 {
  padding: 25px 20px;
  border: 1px solid #232951;
}
.fh-service-box.style-1 .fh-icon,
.fh-service-box.style-1 .img-icon {
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.fh-service-box.style-1:hover {
  border-color: #ff0000;
}
.fh-service-box.style-1:hover .fh-icon,
.fh-service-box.style-1:hover .img-icon {
  color: #ff0000;
  top: 30px;
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0);
}
.fh-service-box.style-1:hover i {
  color: #ff0000;
}
.fh-service-box.style-2 {
  color: #555555;
}
.fh-service-box.style-2 .fh-icon,
.fh-service-box.style-2 .img-icon {
  left: 0;
}
.fh-service-box.style-2 h4,
.fh-service-box.style-2 h4 a {
  color: #222;
}
.fh-service-box.style-2 i {
  color: #0c1239;
}
.fh-service-box.style-2:hover h4,
.fh-service-box.style-2:hover h4 a,
.fh-service-box.style-2:hover .fh-icon,
.fh-service-box.style-2:hover i {
  color: #ff0000;
}
.fh-service-box-2 {
  margin-bottom: 30px;
}
.fh-service-box-2 .box-wrapper {
  padding: 30px 30px 30px 30px;
  border: 1px solid #f4f4f4;
  border-top-width: 0;
}
.fh-service-box-2 .box-wrapper .fh-icon,
.fh-service-box-2 .box-wrapper .img-icon {
  float: left;
  margin-top: -10px;
}
.fh-service-box-2 h4,
.fh-service-box-2 h4 a {
  font-weight: 500;
  font-size: 20px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box-2 h4 {
  margin: 0;
  padding-left: 75px;
}
.fh-service-box-2 .sub-title {
  font-size: 14px;
  padding-left: 75px;
  display: block;
}
.fh-service-box-2 .fh-icon {
  color: #ff0000;
}
.fh-service-box-2 .fh-icon i,
.fh-service-box-2 .fh-icon i:before {
  font-size: 48px;
}
.fh-service-box-2 .box-header {
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 15px;
  margin-bottom: 25px;
}
.fh-service-box-2 ul {
  margin: 0;
  padding-left: 20px;
}
.fh-service-box-2 ul li {
  padding-bottom: 10px;
}
.fh-service-box-2 ul li:last-child {
  padding-bottom: 0;
}
.fh-service-box-2.no-thumb .box-wrapper {
  border-top-width: 1px;
}
.fh-service-box-2.box-style-2 .box-thumb {
  position: relative;
}
.fh-service-box-2.box-style-2 .box-thumb   img{width:100%;}
.fh-service-box-2.box-style-2 .box-thumb .fh-icon {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: 0.5s;
          transition: 0.5s;
  opacity: 0;
  z-index: 10;
}

.fh-service-box-2.box-style-2 .box-thumb .fh-icon i,
.fh-service-box-2.box-style-2 .box-thumb .fh-icon i:before {
  font-size: 80px;
}
.fh-service-box-2.box-style-2 .box-thumb:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ff0000;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  opacity: 0;
  z-index: 9;
}
.fh-service-box-2.box-style-2 .box-wrapper {
  padding: 25px 15px;
  background-color: #fff;
  border: 1px solid #eeeeee;
  text-align: center;
  position: relative;
}
.fh-service-box-2.box-style-2 h4,
.fh-service-box-2.box-style-2 .box-content {
  -webkit-transform: translateY(25px);
      -ms-transform: translateY(25px);
          transform: translateY(25px);
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box-2.box-style-2 h4 {
  padding-left: 0;
  font-size: 18px;
}
.fh-service-box-2.box-style-2 .box-header {
  border: none;
  padding-bottom: 0;
  margin-bottom: 15px;
}
.fh-service-box-2.box-style-2 .box-header .fh-icon {
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: #fff;
  background-color: #0c1239;
  float: none;
  display: block;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  position: absolute;
  top: 9px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box-2.box-style-2 .box-header .fh-icon i,
.fh-service-box-2.box-style-2 .box-header .fh-icon i:before {
  font-size: 48px;
}
.fh-service-box-2.box-style-2 .read-more {
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  color: #0c1239;
  font-weight: 500;
  text-decoration: underline;
  display: inline-block;
  margin-top: 7px;
  opacity: 0;
  -webkit-transition: 0.8s;
          transition: 0.8s;
}
.fh-service-box-2.box-style-2:hover .box-thumb .fh-icon {
  opacity: 1;
}
.fh-service-box-2.box-style-2:hover .box-thumb:before {
  opacity: 0.85;
}
.fh-service-box-2.box-style-2:hover h4,
.fh-service-box-2.box-style-2:hover .box-content {
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service-box-2.box-style-2:hover .read-more {
  opacity: 1;
}
.fh-service-box-2.box-style-2:hover .box-header .fh-icon {
  opacity: 0;
}

/*** 

====================================================================
	contact-box
====================================================================

 ***/
.fh-contact-box {
  margin-bottom: 45px;
}
.fh-contact-box h4 {
  margin: 0;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
}
.fh-contact-box i {
  float: left;
  font-size: 26px;
  color: #ff0000;
}
.fh-contact-box i:before {
  font-size: 26px;
}
.fh-contact-box h4,
.fh-contact-box .desc {
  padding-left: 40px;
}
.fh-contact-box ul {
  padding-left: 40px;
  margin: 0;
  list-style: none;
}
.fh-contact-box ul li {
  float: left;
  width: 42px;
  height: 42px;
  line-height: 38px;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  text-align: center;
  border: 2px solid #f4f4f4;
  margin: 0 5px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-contact-box ul li:first-child {
  margin-left: 0;
}
.fh-contact-box ul li:last-child {
  margin-right: 0;
}
.fh-contact-box ul li a {
  color: #848484;
  display: block;
  font-size: 15px;
}
.fh-contact-box ul li a i {
  float: none;
  color: inherit;
  font-size: inherit;
}
.fh-contact-box ul li a i:before {
  font-size: inherit;
}
.fh-contact-box ul li:hover {
  background-color: #ff0000;
}
.fh-contact-box ul li:hover a {
  color: #fff;
}

/*** 

====================================================================
	Projects
====================================================================

 ***/

.fh-project .list-project {
  overflow: hidden;
}
.fh-project .item-project {
  margin-bottom: 30px;
  display: inline-block;
  text-align: center;
}
.fh-project .item-project .project-thumbnail {
  position: relative;
  margin-bottom: 15px;
}
.fh-project .item-project .pro-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  background-color: transparent;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-project .item-project .project-summary h2 {
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0;
}
.fh-project .item-project .project-summary h2 a {
  color: #fff;
}
.fh-project .item-project .project-summary .project-cat {
  color: #ff0000;
}
.fh-project .item-project .project-summary .project-cat a {
  color: #ff0000;
}
.fh-project ul.filter {
  margin-bottom: 70px;
  list-style: none;
  position: relative;
  text-align: right;
  padding-left: 0;
}
.fh-project ul.filter li {
  font-size: 16px;
  display: inline-block;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  background-color: #1d1d1d;
  border: 1px dashed transparent;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-project ul.filter li.active,
.fh-project ul.filter li:hover {
  border-color: rgba(255, 255, 255, 0.15);
}
.fh-project ul.filter li:first-child {
  margin-left: 0;
}
.fh-project ul.filter li:last-child {
  margin-right: 0;
}
.fh-project.style-1 .project-thumbnail {
  overflow: hidden;
  position: relative;
}
.fh-project.style-1 .project-thumbnail .pro-link {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-project.style-1 .project-thumbnail img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-project.style-1 .project-inner:hover .project-thumbnail a {
  opacity: 0.6;
}
.fh-project.style-1 .project-inner:hover .project-thumbnail img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.fh-project.style-2 .project-inner,
.fh-project.style-3 .project-inner {
  position: relative;
}
.fh-project.style-2 .project-inner .project-thumbnail,
.fh-project.style-3 .project-inner .project-thumbnail {
  margin-bottom: 0;
}
.fh-project.style-2 .project-inner .project-summary,
.fh-project.style-3 .project-inner .project-summary {
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  z-index: 999;
  padding: 0 15px;
}
.fh-project.style-2 .project-inner:hover .pro-link,
.fh-project.style-3 .project-inner:hover .pro-link {
  background-color: rgba(0, 0, 0, 0.8);
}
.fh-project.style-2 .project-inner:hover .project-summary,
.fh-project.style-3 .project-inner:hover .project-summary {
  opacity: 1;
}
.fh-project.style-2 .item-project {
  width: 25%;
  padding: 0 15px;
}
.fh-project.style-2 .item-project.project-1 {
  width: 50%;
}
.fh-project.style-2 ul.filter {
  margin-bottom: 70px;
  list-style: none;
  position: relative;
  text-align: right;
  padding-left: 0;
}
.fh-project.style-2 ul.filter li {
  color: #848484;
  font-size: 16px;
  display: inline-block;
  padding: 5px 20px;
  margin: 0;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  border: none;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-project.style-2 ul.filter li:before {
  content: '/';
  color: #848484;
  position: absolute;
  right: -5px;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.fh-project.style-2 ul.filter li.active,
.fh-project.style-2 ul.filter li:hover {
  color: #ff0000;
}
.fh-project.style-2 ul.filter li:first-child {
  padding-left: 0;
}
.fh-project.style-2 ul.filter li:last-child {
  padding-right: 0;
}
.fh-project.style-2 ul.filter li:last-child:before {
  display: none;
}
.fh-project.style-3 .item-project {
  width: 20%;
  padding: 0;
  margin: 0;
}
.fh-project.style-3 ul.filter {
  margin-bottom: 70px;
  list-style: none;
  position: relative;
  text-align: right;
  padding-left: 0;
}
.fh-project.style-3 ul.filter li {
  color: #656565;
  font-size: 16px;
  display: inline-block;
  padding: 5px 20px;
  margin: 0;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  border: none;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-project.style-3 ul.filter li:before {
  content: '/';
  color: #656565;
  position: absolute;
  right: -5px;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.fh-project.style-3 ul.filter li.active,
.fh-project.style-3 ul.filter li:hover {
  color: #ff0000;
}
.fh-project.style-3 ul.filter li:first-child {
  padding-left: 0;
}
.fh-project.style-3 ul.filter li:last-child {
  padding-right: 0;
}
.fh-project.style-3 ul.filter li:last-child:before {
  display: none;
}
.fh-latest-post .item-latest-post {
  margin-bottom: 30px;
  background-color: #fff;
}
.fh-latest-post .item-latest-post.column-4 .entry-title {
  font-size: 20px;
}
.fh-latest-post .item-latest-post .entry-thumbnail {
  margin-bottom: 15px;
  position: relative;
}
.fh-latest-post .item-latest-post .entry-thumbnail a {
  display: block;
  position: relative;
  overflow: hidden;
}
.fh-latest-post .item-latest-post .entry-thumbnail a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #0c1239;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-latest-post .item-latest-post .entry-thumbnail img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-latest-post .item-latest-post .entry-meta {
  padding-bottom: 0;
}
.fh-latest-post .item-latest-post .entry-title {
  line-height: 1.2;
  margin-bottom: 5px;
}
.fh-latest-post .item-latest-post .entry-title a {
  font-size: 20px;
  font-weight: 500;
}
.fh-latest-post .item-latest-post .entry-footer {
  border: 0;
  padding: 0;
  font-weight: 500;
}
.fh-latest-post .item-latest-post .entry-footer a {
  color: #ff0000;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
.fh-latest-post .item-latest-post:hover .entry-thumbnail a:before {
  opacity: 0.7;
}
.fh-latest-post .item-latest-post:hover .entry-thumbnail img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.fh-latest-post.carousel .owl-nav div {
  width: 50px;
  height: 50px;
  line-height: 48px;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  text-align: center;
  border: 1px solid #d8d8d8;
  color: #d8d8d8;
  font-size: 18px;
  top: 0;
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-latest-post.carousel .owl-nav div:hover {
  color: #fff;
  background-color: #ff0000;
  border-color: #ff0000;
}
.fh-latest-post.carousel .owl-nav .owl-next {
  right: 15px;
}
.fh-latest-post.carousel .owl-nav .owl-prev {
  right: 75px;
  left: auto;
}
.fh-latest-post.carousel .owl-dots .owl-dot span {
  width: 9px;
  height: 9px;
  border-color: #ececec;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-latest-post.carousel .owl-dots .owl-dot:hover span,
.fh-latest-post.carousel .owl-dots .owl-dot.active span {
  border-color: #ff0000;
  background-color: #ff0000;
}
.fh-latest-post .post-list {
  margin-left: -15px;
  margin-right: -15px;
  width: auto;
}
.fh-latest-post .owl-item {
  padding: 0 15px;
}
/*** 

====================================================================
	Counter
====================================================================

 ***/

.fh-counter {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
}
.fh-counter .fh-icon {
  display: block;
  padding-bottom: 25px;
}
.fh-counter .fh-icon i,
.fh-counter .fh-icon i:before {
  font-size: 80px;
}
.fh-counter .counter {
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
  font-family: 'Montserrat', sans-serif;
}
.fh-counter h4 {
	color: #fff;
	font-size: 14px;
	font-weight: 300;
	margin: 0;
	background-color: #ff0000;
	margin-top: 10px;
	padding: 5px 10px;
	font-weight: 600;
}
.fh-counter.icon-left {
  text-align: left;
}
.fh-counter.icon-left .fh-icon {
  float: left;
  padding-bottom: 0;
  margin-top: -10px;
}
.fh-counter.icon-left .fh-icon i,
.fh-counter.icon-left .fh-icon i:before {
  font-size: 60px;
}
.fh-counter.icon-left .counter {
  font-size: 48px;
  font-weight: 300;
  padding-right: 0;
  padding-left: 80px;
}
.fh-counter.icon-left h4 {
  font-size: 16px;
  background-color: transparent;
}


/*** 

====================================================================
	Testimonials
====================================================================

 ***/


.fh-testimonials .testi-item {
  position: relative;
  padding: 40px 35px 35px 125px;
}
.fh-testimonials .testi-icon {
  position: absolute;
  top: 35px;
  left: 35px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 3px solid #f4f4f4;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  text-align: center;
  color: #f4f4f4;
}
.fh-testimonials .testi-icon i:before {
  font-size: 28px;
}
.fh-testimonials .testi-star {
  display: inline-block;
  border: 1px solid #f4f4f4;
  text-align: center;
  font-size: 14px;
  padding: 3px 7px;
  -webkit-border-radius: 30px;
          border-radius: 30px;
  margin-bottom: 20px;
}
.fh-testimonials .testi-star i {
  padding: 0 4px;
  color: #ebce09;
}
.fh-testimonials .testi-des {
  font-style: italic;
  font-size: 22px;
  padding-bottom: 10px;
}
.fh-testimonials .testi-name {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #222;
}
.fh-testimonials .testi-job {
  font-size: 16px;
  color: #ff0000;
}
.fh-testimonials-grid .testi-item {
  border: 3px solid #f4f4f4;
  margin-bottom: 50px;
}
.fh-testimonials-carousel {
  overflow: hidden;
  color: #f7f7f7;
  position: relative;
}
.fh-testimonials-carousel .testi-wrapper {
  padding: 115px 0;
  background-color: #0c1239;
}
.fh-testimonials-carousel.column-1 .testi-item {
  width: 50%;
}
.fh-testimonials-carousel.column-2 {
  border: none;
}
.fh-testimonials-carousel.column-2 .owl-dots {
  position: static;
  margin-top: 45px;
}
.fh-testimonials-carousel.column-2 .testi-list {
  margin-left: -15px;
  margin-right: -15px;
  width: auto;
}
.fh-testimonials-carousel.column-2 .owl-item {
  padding: 0 15px;
}
.fh-testimonials-carousel .testi-item {
  border: 3px solid rgba(247, 247, 247, 0.11);
}
.fh-testimonials-carousel .testi-icon {
  border-color: #fff;
  color: #fff;
}
.fh-testimonials-carousel .testi-star {
  border-color: #232951;
}
.fh-testimonials-carousel .testi-info {
  padding-right: 35%;
}
.fh-testimonials-carousel .testi-name {
  color: #f7f7f7;
}
.fh-testimonials-carousel .owl-dots {
  text-align: center;
  position: absolute;
  right: 52%;
  bottom: 150px;
}
.fh-testimonials-carousel .owl-dots .owl-dot span {
  width: 10px;
  height: 10px;
  margin: 0 10px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-testimonials-carousel .owl-dots .owl-dot:hover span,
.fh-testimonials-carousel .owl-dots .owl-dot.active span {
  border-color: #ff0000;
  background-color: #ff0000;
}
.fh-testimonials-carousel .owl-nav div {
  width: 55px;
  height: 55px;
  line-height: 50px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #fff;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  color: #fff;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-testimonials-carousel .owl-nav div:hover {
  border-color: #ff0000;
  color: #ff0000;
}
.fh-testimonials-carousel .owl-nav .owl-prev {
  left: 15px;
}
.fh-testimonials-carousel .owl-nav .owl-next {
  right: 15px;
}

/*** 

====================================================================
	Pricing
====================================================================

 ***/


.fh-price-table {
  text-align: center;
  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.09);
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.09);
  margin-bottom: 40px;
  font-weight:400;
}
.fh-price-table .table-header {
  background-color: #0c1239;
  color: #fff;
  padding-top: 25px;
  padding-bottom: 35px;
  padding-right: 17.5%;
  padding-left: 17.5%;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-price-table .desc {
  color: #a3a3a3;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-price-table .plan-name {
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  padding-bottom: 10px;
}
.fh-price-table .price-box {
  font-size: 100px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  position: relative;
  margin-bottom: 10px;
  display: inline-block;
}
.fh-price-table .price-box .currency {
  font-size: 18px;
  font-weight: 300;
  color: #a3a3a3;
  position: absolute;
  top: 17px;
  left: -12px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-price-table .price-box .unit {
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  position: absolute;
  width: 100%;
  bottom: 10px;
  left: 85%;
  color: #a3a3a3;
  font-family: 'Open Sans', sans-serif;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-price-table .table-content {
  padding-top: 10px;
  padding-bottom: 40px;
  border: 2px solid transparent;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  border-top: 0;
}
.fh-price-table .table-content a {
  margin-top: 40px;
  border: 2px solid #f4f4f4;
  background-color: transparent;
  color: #222;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-price-table ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.fh-price-table ul li {
  padding: 15px 0;
  border-bottom: 1px solid #f4f4f4;
}
.fh-price-table.promoted .table-header,
.fh-price-table:hover .table-header {
  color: #fff;
  background-color: #ff0000;
}
.fh-price-table.promoted .desc,
.fh-price-table:hover .desc {
  color: #fff;
}
.fh-price-table.promoted .price-box .currency,
.fh-price-table:hover .price-box .currency,
.fh-price-table.promoted .price-box .unit,
.fh-price-table:hover .price-box .unit {
  color: #fff;
}
.fh-price-table.promoted .table-content,
.fh-price-table:hover .table-content {
  border-color: #ff0000;
}
.fh-price-table.promoted .table-content a,
.fh-price-table:hover .table-content a {
  border-color: #ff0000;
  background-color: #ff0000;
  color: #fff;
}
.fh-partner .partner-item {
  width: 100%;
  text-align: center;
}
.fh-partner .partner-item .partner-content {
  min-height: 90px;
  line-height: 84px;
}
.fh-partner .partner-item a {
  height: 100%;
  display: block;
}

/*** 

====================================================================
	Services
====================================================================

 ***/


.fh-service .item-service.col-md-4:nth-child(3n+1),
.fh-service .item-service.col-md-3:nth-child(4n+1) {
  clear: left;
}
.fh-service .entry-title {
  font-size: 20px;
  padding-bottom: 0;
  font-weight: 500;
}
.fh-service .entry-thumbnail {
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 0;
}
.fh-service .entry-thumbnail .link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #0c1239;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service .entry-thumbnail .icon {
  color: #fff;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  background-color: #ff0000;
  text-align: center;
  line-height: 70px;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  z-index: 100;
}
.fh-service .entry-thumbnail img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
		  width:100%;
}
.fh-service h2,
.fh-service h2 a {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service .read-more {
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  color: #ff0000;
  font-weight: 500;
}
.fh-service .service-content {
  margin-bottom: 50px;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-service .service-content:hover .entry-thumbnail .link {
  opacity: 0.7;
}
.fh-service .service-content:hover .entry-thumbnail img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.fh-service .service-content:hover .entry-thumbnail .icon {
  opacity: 1;
}
.fh-service .service-content:hover h2,
.fh-service .service-content:hover h2 a {
  color: #ff0000;
}
.fh-service.style-bordered .summary {
  padding: 25px 30px;
  border: 1px solid #f4f4f4;
  border-top-width: 0;
  font-weight: 400;
}
.fh-service.style-bordered .item-service.no-thumb .summary {
  border-top-width: 1px;
}
.fh-service.style-bordered .service-content:hover {
  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
}
.fh-service.style-flat {
  text-align: center;
}
.fh-service.style-flat .entry-thumbnail {
  margin-bottom: 22px;
}
.fh-service.style-flat .summary {
  padding: 0 25px;
}
.fh-service.style-flat .entry-title {
  position: relative;
  padding-bottom: 17px;
  margin-bottom: 15px;
}
.fh-service.style-flat .entry-title:after {
  content: '';
  width: 67px;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
  background-color: #ff0000;
}



.fh-accordion.vc_tta-accordion .vc_tta-panel-heading {
  -webkit-border-radius: 0 !important;
          border-radius: 0 !important;
}
.fh-accordion.vc_tta-accordion .vc_tta-panel-title {
  font-weight: 500;
  font-size: 18px;
}
.fh-accordion.vc_tta-accordion .vc_tta-panel-title a {
  color: #222 !important;
  padding: 20px !important;
  background-color: #f7f7f7 !important;
  cursor: pointer;
  -webkit-transition: 0.5s !important;
          transition: 0.5s !important;
}
.fh-accordion.vc_tta-accordion .vc_tta-panel-title a i {
  font-size: 18px !important;
  position: absolute;
  right: 15px;
  margin-left: 0;
  top: 27px;
  color: #848484;
}
.fh-accordion.vc_tta-accordion .vc_tta-panel-title a span {
  margin-left: 0 !important;
}
.fh-accordion.vc_tta-accordion .vc_tta-panel-body {
  background-color: #fff !important;
  padding: 25px 20px !important;
  -webkit-border-radius: 0 !important;
          border-radius: 0 !important;
}
.fh-accordion.style-2.vc_tta-accordion .vc_tta-panel-title a {
  color: #222 !important;
  padding: 18px 20px !important;
  background-color: #fff !important;
}
.fh-accordion.style-2.vc_tta-accordion .vc_tta-panel-title a i {
  font-size: 18px !important;
  position: absolute;
  right: 15px;
  margin-left: 0;
  top: 27px;
  color: #848484;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-accordion.style-2.vc_tta-accordion .vc_tta-panel-title a:hover {
  color: #ff0000 !important;
}
.fh-accordion.style-2.vc_tta-accordion .vc_tta-panel-title a:hover i {
  color: #ff0000 !important;
}
.fh-accordion.style-2.vc_tta-accordion .vc_tta-panel-body {
  background-color: #fff !important;
  padding: 5px 20px 10px 20px !important;
  border-top: 0 !important;
}
.fh-accordion.style-2.vc_tta-accordion .vc_tta-panel.vc_active .vc_tta-panel-title a {
  color: #ff0000 !important;
}
.fh-accordion.style-2.vc_tta-accordion .vc_tta-panel.vc_active .vc_tta-panel-title a i {
  color: #ff0000 !important;
}
.vc_opening-hours {
  border: 2px solid #ececec;
  padding: 20px 30px;
}
.vc_opening-hours h3 {
  margin: 0;
  font-size: 24px;
  padding-bottom: 15px;
}
.vc_opening-hours ul {
  padding: 0;
  list-style: none;
  margin-left: 0;
}
.vc_opening-hours ul li {
	padding: 10px 0;
	border-bottom: 1px solid #f4f4f4;
	font-size: 14px;
}
.vc_opening-hours ul li:last-child {
  border-bottom: none;
}
.vc_opening-hours ul li span {
  float: right;
}
.service-tabs .vc_tta-tabs-container {
  margin: 0 !important;
}
.service-tabs .vc_tta-tabs-list {
  background-color: #04192b;
}
.service-tabs .vc_tta-tabs-list li,
.service-tabs .vc_tta-tabs-list li a {
  background-color: transparent !important;
  -webkit-border-radius: 0 !important;
          border-radius: 0 !important;
  border: 0 !important;
}
.service-tabs .vc_tta-tabs-list li {
  padding: 15px 0 !important;
}
.service-tabs .vc_tta-tabs-list li a {
  color: #fff !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  border-right: 1px solid rgba(255, 255, 255, 0.25) !important;
}
.service-tabs .vc_tta-tabs-list li:hover a,
.service-tabs .vc_tta-tabs-list li.vc_active a {
  color: #ff0000 !important;
  border-color: #ff0000;
}
.service-tabs .vc_tta-tabs-list li:last-child a {
  border: 0 !important;
}





/*** 

====================================================================
	Team
====================================================================

 ***/

.fh-team .team-list {
  padding-top: 105px;
  position: relative;
  margin-left: -15px;
  margin-right: -15px;
  width: auto;
}
.fh-team .team-list .owl-item {
  padding-left: 15px;
  padding-right: 15px;
}
.fh-team .team-member {
  margin-bottom: 30px;
  text-align: center;
}
.fh-team .team-member .team-header {
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-bottom: 15px;
}
.fh-team .team-member .team-header:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c1239;
  opacity: 0;
  -webkit-transition: 0.5s;
          transition: 0.5s;
  z-index: 9;
}
.fh-team .team-member .team-header img {
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-team .team-member ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: -45px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  z-index: 11;
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-team .team-member ul li {
  width: 45px;
  height: 45px;
  line-height: 45px;
  margin: 1px 0;
  background-color: #ff0000;
}
.fh-team .team-member ul li a {
  color: #fff;
  display: block;
}
.fh-team .team-member:hover .team-header:before {
  opacity: 0.7;
}
.fh-team .team-member:hover .team-header img {
  -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
          transform: scale(1.06);
}
.fh-team .team-member:hover ul {
  left: 0;
}
.fh-team .team-member h4 {
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 500;
}
.fh-team .team-member .job {
  color: #ff0000;
  font-size: 16px;
  display: block;
  font-weight: 400;
}
.fh-team .owl-nav div {
  font-size: 18px;
  color: #d8d8d8;
  top: 0;
  width: 50px;
  height: 50px;
  line-height: 47px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #efefef;
  -webkit-border-radius: 50%;
          border-radius: 50%;
  -webkit-transform: translate(0);
      -ms-transform: translate(0);
          transform: translate(0);
  -webkit-transition: 0.5s;
          transition: 0.5s;
}
.fh-team .owl-nav div:hover {
  color: #fff;
  background-color: #ff0000;
}
.fh-team .owl-nav .owl-next {
  right: 15px;
}
.fh-team .owl-nav .owl-prev {
  right: 75px;
  left: auto;
}
.fh-team .owl-dots {
  text-align: center;
}
.fh-team .owl-dots .owl-dot span {
  border-color: #efefef;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.fh-team .owl-dots .owl-dot:hover span,
.fh-team .owl-dots .owl-dot.active span {
  border-color: #ff0000;
  background-color: #ff0000;
}

/*** 

====================================================================
	Custom Quote
====================================================================

 ***/

.custom-quote blockquote {
  margin-left: 0;
  margin-top: 25px;
  padding: 30px 10px 10px 50px;
  border-left: 2px solid #f4f4f4;
  position: relative;
}
.custom-quote blockquote:before {
  content: '\e914';
  font-family: 'factoryplus';
  font-size: 20px;
  color: #ff0000;
  position: absolute;
  left: 20px;
  top: 0;
  font-style: initial;
}
.custom-quote blockquote a {
  display: block;
  color: #ff0000;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-style: initial;
}
.custom-quote.quote-project blockquote {
  background-color: #fafafa;
  border-left: 1px solid #ff0000;
  padding: 20px 10px 20px 75px;
}
.custom-quote.quote-project blockquote:before {
  font-size: 32px;
  color: #ececec;
  top: 10px;
  left: 25px;
}
.custom-quote.quote-project blockquote:after {
  content: '';
  position: absolute;
  height: 90%;
  width: 1px;
  background-color: #ff0000;
  left: 3px;
  top: 0;
}
.custom-quote.quote-project blockquote h3 {
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  margin: 0;
}


#myRegPop_up { 
    background:#000;;
    border-radius:15px;
    color:#fff;
    display:none; 
    padding:60px;
    width:400px;
    height:400px;
	text-align:center;
	margin-left:20px;
}

#thanksCantact { 
    background:#4C756C;
    border-radius:15px;
    color:#FFF;
    display:none; 
    padding:40px 20px 20px 20px;
    width:500px;
    height:100px;
	text-align:center;
	font-size:14px;
	
}

#myNewRegPop_up { 
    background:none;
    border-radius:15px;
    color:#ccc;
    display:none; 
    padding:60px;
    width:200px;
    height:100px;
	margin-right:200px;
}

#portalLogin { 
    background:#CEDDE1;
    color:#000;
    display:none; 
    padding:10px;
	text-align:left;
	margin-left:20px;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	-webkit-box-shadow: 5px 5px 20px #000;
	-moz-box-shadow: 5px 5px 20px #000;
	box-shadow: 5px 5px 20px #000; 
}


#justMyPopUp { 
    background:#B9E3E1 url(../img/bg1.jpg);
    color:#000;
    display:none; 
    padding:10px;
    min-width:200px;
    min-height:50px;
	border:1px solid #C5DBF2;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
}


#justMyPopUpAlert { 
    background:#B9E3E1 url(../img/bg1.jpg);
    color:#000;
    display:none; 
    padding:5px;
    width:550px;
    min-height:50px;
	border:1px solid #C5DBF2;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
}

#loadingPop { 
    background:none;
    border-radius:15px;
    color:#ccc;
    display:none; 
    padding:60px;
	text-align:center
}




#popUpLoader { 
    background:none;
    border-radius:15px;
    color:#ccc;
    display:none; 
    padding:60px;
	text-align:center
}


#viewLargePix { 
    background:#B9E3E1 url(../img/bg1.jpg);
    color:#000;
    display:none; 
    padding:2px;
    min-width:200px;
    min-height:50px;
	border:1px solid #C5DBF2;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
}





#prvDivContent { 
    background:#fff;
    color:#000;
    display:none; 
    padding:2px;
    min-width:200px;
    min-height:200px;
	border:4px solid #B9E3E1;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
	padding:10px;
}


#prvDivContentNew { 
    background:#fff;
    color:#000;
    display:none; 
    padding:2px;
    min-width:200px;
    min-height:200px;
	border:4px solid #B9E3E1;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
	padding:10px;
}



#articleAsHmBanner { 
    background:#fff;
    color:#000;
    display:none; 
    padding:2px;
    width:400px;
   height:200px;
	border:4px solid #B9E3E1;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
	padding:10px;
}


#manageVideoFiles { 
    background:#fff;
    color:#666;
    display:none; 
    padding:2px;
    min-width:600px;
    min-height:100px;
	border:4px solid #B9E3E1;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
	padding:20px 10px;
}



#assignPrvDiv { 
    background:#fff;
    color:#666;
    display:none; 
    padding:2px;
    min-width:700px;
    min-height:100px;
	border:4px solid #B9E3E1;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
	padding:20px 10px;
}


#assignPrvDivMember { 
    background:#fff;
    color:#666;
    display:none; 
    padding:2px;
    width:1000px;
    min-height:100px;
	border:4px solid #B9E3E1;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
	padding:3px;
}

#changeLogo { 
    background:#fff;
    color:#666;
    display:none; 
    padding:2px 10px;
	border:4px solid #B9E3E1;
	-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
    border-radius: 4px;
	box-shadow: 0px 1px 4px #ccc;
	-webkit-box-shadow: 0px 1px 4px #ccc;
	-moz-box-shadow: 0px 1px 4px #ccc;
	-ms-box-shadow: 0px 1px 4px #ccc;
	-o-box-shadow: 0px 1px 4px #ccc;
}





.topline
{
	width: 716px;
	border:3px solid #666666;	
	clear: both;
	}	
.headbar
{
	width: 141px;
	background-color: #666666; 
	border: 1px solid #666666; 
	border-bottom: none;
	color: #fff; 
	float: left;
	font-family:Arial,sans-serif;
	font-size:12px;
	font-weight:bold;
	font-size-adjust:none;
	list-style-type: none;
	list-style-image: none;
	margin: 0 2px 0 0;
	padding:2px 2px 2px 6px;
	text-decoration:none;
	clear: both;
	}	
.textline
{
	font-family: arial, sans-serif;
	font-size: 14px;
	font-weight:normal;
	padding-top:5px;
	padding-left:5px;
	padding-bottom:5px;
	color:#000;
	

}
.dateline
{
	font-family: arial, sans-serif;
	font-size: 11px;
	font-weight:normal;
	padding-top:5px;
	padding-left:10px;
}
.datelineunder
{
	width:auto;
	border:1px solid #BBBBBB;	
	clear: both;
	}	
	
#containerx
{
	border: 1px solid #666666;
	clear: both;
	background: #FFFFFF;
}
#contentarea
{
	border: 1px solid #BBBBBB;
	margin: 15px 15px 15px 20px;
	clear: both;
	background: #FFFFFF;
	height:auto;
	padding-bottom:30px;
}
.line
{
	border:1px solid #666666;	
	clear: both;
	margin-bottom:20px;
}

.rowtab{background:#D1D7E7;height:25px;}
			 .rowtab2{background:#DEEDE6;height:25px;}
			 .rowtabPad{padding-left:10px; font-weight:bold; color:#000;}
			 .rowtabPad2{padding:0px 4px 0 4px; color:#000;}
			 .rowtabPad3{padding-left:10px; font-weight:bold;}
			 .newbgC{
	background:#E9EDEF;
}
.normal { background-color:#1692AB; height:25px; color:#FFF; }	

.statusline
{
	padding-top:5px;
	padding-right:180px;
	padding-bottom:5px;
}
.delivered
{
	padding-top:5px;
	padding-left:20px;
	padding-bottom:5px;
	font-family: arial;
	font-size: 20px;
	color: #00CC00;
	font-weight: bold;	
}						

.othline
{
	font-family: arial, sans-serif;
	font-size: 14px;
	font-weight:normal;
	padding-top:10px;
	padding-left:5px;
	padding-bottom:5px;
}						
.fields
{
	font-family: arial, sans-serif;
	font-size: 12px;
	color: black;
}
.fieldx
{
	font-family: arial, sans-serif;
	font-size: 12px;
	color: black;
	margin-left:5px;
}
.signature
{
	color: #660099;
	display: inline;
	font-family: arial, sans-serif;
	font-size: 12px;
	margin-left:130px;
	margin-top:10px;
	font-weight:bold;
}
.freightcontent
{
	font-family: arial, sans-serif;
	font-size: 11px;
	color: #000000;
	padding-left:5px;
	padding-bottom:5px;
}
.freightline
{
	width: 100%;
	border:1px solid #666666;	
	clear: both;
	margin-bottom:10px;
}	
.facts
{
	padding-left:0px;
	padding-bottom:5px;
	font-family: arial;	
}
.factline
{
	font-family: arial, sans-serif;
	font-size: 12px;
	color: #000000;
	padding-left:0px;
	padding-bottom:10px;
	height:auto;
}
.barcode
{
	width: 100%;
	border:1px solid #666666;	
	clear: both;
	margin-bottom:10px;
	margin-left:30px;
}

.clearFloat {
clear:both;
}

.compact ul li a{
display:inline; list-style:none;
color:#fff;
}
