"use strict";
var _a;
var _ = require("lodash");
var axios$1 = require("axios");
var vue = require("vue");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
var progress = require("@inertiajs/progress");
var serverRenderer = require("vue/server-renderer");
var outline = require("@heroicons/vue/outline");
var flatPickr = require("vue-flatpickr-component");
var moment = require("moment");
var Multiselect = require("@suadelabs/vue3-multiselect");
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
}
function _interopNamespace(e2) {
  if (e2 && e2.__esModule)
    return e2;
  var n2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e2) {
    Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default") {
        var d2 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  }
  n2["default"] = e2;
  return Object.freeze(n2);
}
var ___default = /* @__PURE__ */ _interopDefaultLegacy(_);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios$1);
var flatPickr__default = /* @__PURE__ */ _interopDefaultLegacy(flatPickr);
var moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment);
var Multiselect__default = /* @__PURE__ */ _interopDefaultLegacy(Multiselect);
window._ = ___default["default"];
window.axios = axios__default["default"];
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: DM Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

* {
  scrollbar-color: initial;
  scrollbar-width: initial;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.prose {
  color: var(--tw-prose-body);
  max-width: 65ch;
}
.prose :where([class~="lead"]):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-lead);
  font-size: 1.25em;
  line-height: 1.6;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
}
.prose :where(a):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-links);
  text-decoration: underline;
  font-weight: 500;
}
.prose :where(strong):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-bold);
  font-weight: 600;
}
.prose :where(ol):not(:where([class~="not-prose"] *)) {
  list-style-type: decimal;
  padding-left: 1.625em;
}
.prose :where(ol[type="A"]):not(:where([class~="not-prose"] *)) {
  list-style-type: upper-alpha;
}
.prose :where(ol[type="a"]):not(:where([class~="not-prose"] *)) {
  list-style-type: lower-alpha;
}
.prose :where(ol[type="A" s]):not(:where([class~="not-prose"] *)) {
  list-style-type: upper-alpha;
}
.prose :where(ol[type="a" s]):not(:where([class~="not-prose"] *)) {
  list-style-type: lower-alpha;
}
.prose :where(ol[type="I"]):not(:where([class~="not-prose"] *)) {
  list-style-type: upper-roman;
}
.prose :where(ol[type="i"]):not(:where([class~="not-prose"] *)) {
  list-style-type: lower-roman;
}
.prose :where(ol[type="I" s]):not(:where([class~="not-prose"] *)) {
  list-style-type: upper-roman;
}
.prose :where(ol[type="i" s]):not(:where([class~="not-prose"] *)) {
  list-style-type: lower-roman;
}
.prose :where(ol[type="1"]):not(:where([class~="not-prose"] *)) {
  list-style-type: decimal;
}
.prose :where(ul):not(:where([class~="not-prose"] *)) {
  list-style-type: disc;
  padding-left: 1.625em;
}
.prose :where(ol > li):not(:where([class~="not-prose"] *))::marker {
  font-weight: 400;
  color: var(--tw-prose-counters);
}
.prose :where(ul > li):not(:where([class~="not-prose"] *))::marker {
  color: var(--tw-prose-bullets);
}
.prose :where(hr):not(:where([class~="not-prose"] *)) {
  border-color: var(--tw-prose-hr);
  border-top-width: 1px;
  margin-top: 3em;
  margin-bottom: 3em;
}
.prose :where(blockquote):not(:where([class~="not-prose"] *)) {
  font-weight: 500;
  font-style: italic;
  color: var(--tw-prose-quotes);
  border-left-width: 0.25rem;
  border-left-color: var(--tw-prose-quote-borders);
  quotes: "\\201C""\\201D""\\2018""\\2019";
  margin-top: 1.6em;
  margin-bottom: 1.6em;
  padding-left: 1em;
}
.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before {
  content: open-quote;
}
.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after {
  content: close-quote;
}
.prose :where(h1):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 800;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0.8888889em;
  line-height: 1.1111111;
}
.prose :where(h1 strong):not(:where([class~="not-prose"] *)) {
  font-weight: 900;
}
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
}
.prose :where(h2 strong):not(:where([class~="not-prose"] *)) {
  font-weight: 800;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  line-height: 1.6;
}
.prose :where(h3 strong):not(:where([class~="not-prose"] *)) {
  font-weight: 700;
}
.prose :where(h4):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  line-height: 1.5;
}
.prose :where(h4 strong):not(:where([class~="not-prose"] *)) {
  font-weight: 700;
}
.prose :where(figure > *):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
.prose :where(figcaption):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-captions);
  font-size: 0.875em;
  line-height: 1.4285714;
  margin-top: 0.8571429em;
}
.prose :where(code):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-code);
  font-weight: 600;
  font-size: 0.875em;
}
.prose :where(code):not(:where([class~="not-prose"] *))::before {
  content: "\`";
}
.prose :where(code):not(:where([class~="not-prose"] *))::after {
  content: "\`";
}
.prose :where(a code):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-links);
}
.prose :where(pre):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-pre-code);
  background-color: var(--tw-prose-pre-bg);
  overflow-x: auto;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.7142857;
  margin-top: 1.7142857em;
  margin-bottom: 1.7142857em;
  border-radius: 0.375rem;
  padding-top: 0.8571429em;
  padding-right: 1.1428571em;
  padding-bottom: 0.8571429em;
  padding-left: 1.1428571em;
}
.prose :where(pre code):not(:where([class~="not-prose"] *)) {
  background-color: transparent;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
.prose :where(pre code):not(:where([class~="not-prose"] *))::before {
  content: none;
}
.prose :where(pre code):not(:where([class~="not-prose"] *))::after {
  content: none;
}
.prose :where(table):not(:where([class~="not-prose"] *)) {
  width: 100%;
  table-layout: auto;
  text-align: left;
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 0.875em;
  line-height: 1.7142857;
}
.prose :where(thead):not(:where([class~="not-prose"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-th-borders);
}
.prose :where(thead th):not(:where([class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  vertical-align: bottom;
  padding-right: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-left: 0.5714286em;
}
.prose :where(tbody tr):not(:where([class~="not-prose"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-td-borders);
}
.prose :where(tbody tr:last-child):not(:where([class~="not-prose"] *)) {
  border-bottom-width: 0;
}
.prose :where(tbody td):not(:where([class~="not-prose"] *)) {
  vertical-align: baseline;
  padding-top: 0.5714286em;
  padding-right: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-left: 0.5714286em;
}
.prose {
  --tw-prose-body: #374151;
  --tw-prose-headings: #111827;
  --tw-prose-lead: #4b5563;
  --tw-prose-links: #111827;
  --tw-prose-bold: #111827;
  --tw-prose-counters: #6b7280;
  --tw-prose-bullets: #d1d5db;
  --tw-prose-hr: #e5e7eb;
  --tw-prose-quotes: #111827;
  --tw-prose-quote-borders: #e5e7eb;
  --tw-prose-captions: #6b7280;
  --tw-prose-code: #111827;
  --tw-prose-pre-code: #e5e7eb;
  --tw-prose-pre-bg: #1f2937;
  --tw-prose-th-borders: #d1d5db;
  --tw-prose-td-borders: #e5e7eb;
  --tw-prose-invert-body: #d1d5db;
  --tw-prose-invert-headings: #fff;
  --tw-prose-invert-lead: #9ca3af;
  --tw-prose-invert-links: #fff;
  --tw-prose-invert-bold: #fff;
  --tw-prose-invert-counters: #9ca3af;
  --tw-prose-invert-bullets: #4b5563;
  --tw-prose-invert-hr: #374151;
  --tw-prose-invert-quotes: #f3f4f6;
  --tw-prose-invert-quote-borders: #374151;
  --tw-prose-invert-captions: #9ca3af;
  --tw-prose-invert-code: #fff;
  --tw-prose-invert-pre-code: #d1d5db;
  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
  --tw-prose-invert-th-borders: #4b5563;
  --tw-prose-invert-td-borders: #374151;
  font-size: 1rem;
  line-height: 1.75;
}
.prose :where(p):not(:where([class~="not-prose"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.prose :where(img):not(:where([class~="not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.prose :where(video):not(:where([class~="not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.prose :where(figure):not(:where([class~="not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.prose :where(h2 code):not(:where([class~="not-prose"] *)) {
  font-size: 0.875em;
}
.prose :where(h3 code):not(:where([class~="not-prose"] *)) {
  font-size: 0.9em;
}
.prose :where(li):not(:where([class~="not-prose"] *)) {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.prose :where(ol > li):not(:where([class~="not-prose"] *)) {
  padding-left: 0.375em;
}
.prose :where(ul > li):not(:where([class~="not-prose"] *)) {
  padding-left: 0.375em;
}
.prose > :where(ul > li p):not(:where([class~="not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.prose > :where(ul > li > *:first-child):not(:where([class~="not-prose"] *)) {
  margin-top: 1.25em;
}
.prose > :where(ul > li > *:last-child):not(:where([class~="not-prose"] *)) {
  margin-bottom: 1.25em;
}
.prose > :where(ol > li > *:first-child):not(:where([class~="not-prose"] *)) {
  margin-top: 1.25em;
}
.prose > :where(ol > li > *:last-child):not(:where([class~="not-prose"] *)) {
  margin-bottom: 1.25em;
}
.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.prose :where(hr + *):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
}
.prose :where(h2 + *):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
}
.prose :where(h3 + *):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
}
.prose :where(h4 + *):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
}
.prose :where(thead th:first-child):not(:where([class~="not-prose"] *)) {
  padding-left: 0;
}
.prose :where(thead th:last-child):not(:where([class~="not-prose"] *)) {
  padding-right: 0;
}
.prose :where(tbody td:first-child):not(:where([class~="not-prose"] *)) {
  padding-left: 0;
}
.prose :where(tbody td:last-child):not(:where([class~="not-prose"] *)) {
  padding-right: 0;
}
.prose > :where(:first-child):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
}
.prose > :where(:last-child):not(:where([class~="not-prose"] *)) {
  margin-bottom: 0;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.left-0 {
  left: 0px;
}
.right-0 {
  right: 0px;
}
.top-0 {
  top: 0px;
}
.top-full {
  top: 100%;
}
.top-3 {
  top: 0.75rem;
}
.right-3 {
  right: 0.75rem;
}
.z-0 {
  z-index: 0;
}
.z-50 {
  z-index: 50;
}
.z-40 {
  z-index: 40;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.col-span-6 {
  grid-column: span 6 / span 6;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.col-span-4 {
  grid-column: span 4 / span 4;
}
.col-span-1 {
  grid-column: span 1 / span 1;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.-my-3 {
  margin-top: -0.75rem;
  margin-bottom: -0.75rem;
}
.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.-ml-px {
  margin-left: -1px;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.-mr-1 {
  margin-right: -0.25rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mt-8 {
  margin-top: 2rem;
}
.ml-4 {
  margin-left: 1rem;
}
.ml-12 {
  margin-left: 3rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.-mr-0\\.5 {
  margin-right: -0.125rem;
}
.-mr-0 {
  margin-right: -0px;
}
.-mr-2 {
  margin-right: -0.5rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.ml-6 {
  margin-left: 1.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.-mt-px {
  margin-top: -1px;
}
.mb-8 {
  margin-bottom: 2rem;
}
.mr-4 {
  margin-right: 1rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mr-1 {
  margin-right: 0.25rem;
}
.-ml-1 {
  margin-left: -0.25rem;
}
.-ml-2 {
  margin-left: -0.5rem;
}
.mr-5 {
  margin-right: 1.25rem;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.h-5 {
  height: 1.25rem;
}
.h-16 {
  height: 4rem;
}
.h-12 {
  height: 3rem;
}
.h-6 {
  height: 1.5rem;
}
.h-8 {
  height: 2rem;
}
.h-4 {
  height: 1rem;
}
.h-9 {
  height: 2.25rem;
}
.h-10 {
  height: 2.5rem;
}
.h-20 {
  height: 5rem;
}
.h-screen {
  height: 100vh;
}
.h-24 {
  height: 6rem;
}
.h-full {
  height: 100%;
}
.h-3 {
  height: 0.75rem;
}
.h-14 {
  height: 3.5rem;
}
.h-40 {
  height: 10rem;
}
.h-\\[4\\.4rem\\] {
  height: 4.4rem;
}
.min-h-screen {
  min-height: 100vh;
}
.w-5 {
  width: 1.25rem;
}
.w-16 {
  width: 4rem;
}
.w-full {
  width: 100%;
}
.w-0 {
  width: 0px;
}
.w-12 {
  width: 3rem;
}
.w-6 {
  width: 1.5rem;
}
.w-3\\/4 {
  width: 75%;
}
.w-48 {
  width: 12rem;
}
.w-auto {
  width: auto;
}
.w-8 {
  width: 2rem;
}
.w-4 {
  width: 1rem;
}
.w-60 {
  width: 15rem;
}
.w-10 {
  width: 2.5rem;
}
.w-1\\/2 {
  width: 50%;
}
.w-20 {
  width: 5rem;
}
.w-screen {
  width: 100vw;
}
.w-24 {
  width: 6rem;
}
.w-3 {
  width: 0.75rem;
}
.w-9 {
  width: 2.25rem;
}
.w-80 {
  width: 20rem;
}
.w-1 {
  width: 0.25rem;
}
.w-56 {
  width: 14rem;
}
.w-64 {
  width: 16rem;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[2rem\\] {
  min-width: 2rem;
}
.max-w-screen-xl {
  max-width: 1280px;
}
.max-w-7xl {
  max-width: 80rem;
}
.max-w-xl {
  max-width: 36rem;
}
.max-w-6xl {
  max-width: 72rem;
}
.max-w-sm {
  max-width: 24rem;
}
.max-w-xs {
  max-width: 20rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.shrink-0 {
  flex-shrink: 0;
}
.table-auto {
  table-layout: auto;
}
.origin-top-left {
  transform-origin: top left;
}
.origin-top {
  transform-origin: top;
}
.origin-top-right {
  transform-origin: top right;
}
.translate-y-4 {
  --tw-translate-y: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-20 {
  --tw-translate-x: -5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.list-inside {
  list-style-position: inside;
}
.list-disc {
  list-style-type: disc;
}
.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-items-center {
  justify-items: center;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}
.divide-gray-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-divide-opacity));
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-normal {
  white-space: normal;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.rounded-r-md {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
.rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}
.rounded-br-lg {
  border-bottom-right-radius: 0.5rem;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.border-l-4 {
  border-left-width: 4px;
}
.border-t {
  border-top-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-r-0 {
  border-right-width: 0px;
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.border-indigo-400 {
  --tw-border-opacity: 1;
  border-color: rgb(129 140 248 / var(--tw-border-opacity));
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}
.border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}
.border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(147 51 234 / var(--tw-border-opacity));
}
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity));
}
.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity));
}
.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(238 242 255 / var(--tw-bg-opacity));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-danger-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 29 72 / var(--tw-bg-opacity));
}
.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity));
}
.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 237 213 / var(--tw-bg-opacity));
}
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
}
.bg-teal-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(204 251 241 / var(--tw-bg-opacity));
}
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(13 148 136 / var(--tw-bg-opacity));
}
.bg-primary-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.bg-primary-500\\/10 {
  background-color: rgb(59 130 246 / 0.1);
}
.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.bg-danger-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 63 94 / var(--tw-bg-opacity));
}
.bg-main {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-primary-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-opacity-25 {
  --tw-bg-opacity: 0.25;
}
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
.bg-no-repeat {
  background-repeat: no-repeat;
}
.fill-current {
  fill: currentColor;
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.p-2 {
  padding: 0.5rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-4 {
  padding: 1rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-1 {
  padding: 0.25rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.px-1\\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.pt-6 {
  padding-top: 1.5rem;
}
.pt-5 {
  padding-top: 1.25rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pt-8 {
  padding-top: 2rem;
}
.pl-9 {
  padding-left: 2.25rem;
}
.pl-12 {
  padding-left: 3rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pr-12 {
  padding-right: 3rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.align-middle {
  vertical-align: middle;
}
.font-sans {
  font-family: DM Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-main {
  font-family: Almarai, sans-serif;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.font-normal {
  font-weight: 400;
}
.font-bold {
  font-weight: 700;
}
.uppercase {
  text-transform: uppercase;
}
.leading-5 {
  line-height: 1.25rem;
}
.leading-7 {
  line-height: 1.75rem;
}
.leading-tight {
  line-height: 1.25;
}
.leading-4 {
  line-height: 1rem;
}
.leading-none {
  line-height: 1;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(67 56 202 / var(--tw-text-opacity));
}
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(99 102 241 / var(--tw-text-opacity));
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.text-danger-500 {
  --tw-text-opacity: 1;
  color: rgb(244 63 94 / var(--tw-text-opacity));
}
.text-purple-100 {
  --tw-text-opacity: 1;
  color: rgb(243 232 255 / var(--tw-text-opacity));
}
.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.text-teal-500 {
  --tw-text-opacity: 1;
  color: rgb(20 184 166 / var(--tw-text-opacity));
}
.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
}
.text-orange-700 {
  --tw-text-opacity: 1;
  color: rgb(194 65 12 / var(--tw-text-opacity));
}
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}
.text-primary-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.text-danger-600 {
  --tw-text-opacity: 1;
  color: rgb(225 29 72 / var(--tw-text-opacity));
}
.text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.text-main {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}
.text-primary-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}
.text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(202 138 4 / var(--tw-text-opacity));
}
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}
.placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-75 {
  opacity: 0.75;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-25 {
  opacity: 0.25;
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-inner {
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}
.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}
.ring-primary-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}
.ring-opacity-5 {
  --tw-ring-opacity: 0.05;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-150 {
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-75 {
  transition-duration: 75ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-1000 {
  transition-duration: 1000ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.scrollbar.overflow-y-hidden {
  overflow-y: hidden;
}
.scrollbar-thin {
  --scrollbar-track: initial;
  --scrollbar-thumb: initial;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  overflow: overlay;
}
.scrollbar-thin.overflow-x-hidden {
  overflow-x: hidden;
}
.scrollbar-thin.overflow-y-hidden {
  overflow-y: hidden;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track);
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
}
.scrollbar-thin {
  scrollbar-width: thin;
}
.scrollbar-thin::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.scrollbar-track-white {
  --scrollbar-track: #fff !important;
}
.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}
.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.hover\\:bg-red-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.hover\\:bg-danger-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(244 63 94 / var(--tw-bg-opacity));
}
.hover\\:bg-primary-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-500\\/5:hover {
  background-color: rgb(107 114 128 / 0.05);
}
.hover\\:bg-gray-300\\/5:hover {
  background-color: rgb(209 213 219 / 0.05);
}
.hover\\:bg-primary-500\\/5:hover {
  background-color: rgb(59 130 246 / 0.05);
}
.hover\\:bg-danger-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 29 72 / var(--tw-bg-opacity));
}
.hover\\:bg-main:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.hover\\:text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.hover\\:text-gray-400:hover {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.hover\\:text-gray-800:hover {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.hover\\:text-danger-500:hover {
  --tw-text-opacity: 1;
  color: rgb(244 63 94 / var(--tw-text-opacity));
}
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}
.hover\\:scrollbar-thumb-primary-700:hover {
  --scrollbar-thumb: #1d4ed8 !important;
}
.focus\\:z-10:focus {
  z-index: 10;
}
.focus\\:border-blue-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(147 197 253 / var(--tw-border-opacity));
}
.focus\\:border-gray-900:focus {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}
.focus\\:border-indigo-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(165 180 252 / var(--tw-border-opacity));
}
.focus\\:border-red-700:focus {
  --tw-border-opacity: 1;
  border-color: rgb(185 28 28 / var(--tw-border-opacity));
}
.focus\\:border-indigo-700:focus {
  --tw-border-opacity: 1;
  border-color: rgb(67 56 202 / var(--tw-border-opacity));
}
.focus\\:border-gray-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.focus\\:border-primary-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
}
.focus\\:border-main:focus {
  --tw-border-opacity: 1;
  border-color: rgb(29 78 216 / var(--tw-border-opacity));
}
.focus\\:bg-indigo-600:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}
.focus\\:bg-red-600:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.focus\\:bg-gray-100:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.focus\\:bg-indigo-100:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity));
}
.focus\\:bg-gray-50:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.focus\\:bg-danger-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(190 18 60 / var(--tw-bg-opacity));
}
.focus\\:bg-primary-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}
.focus\\:bg-primary-500\\/10:focus {
  background-color: rgb(59 130 246 / 0.1);
}
.focus\\:bg-gray-500\\/10:focus {
  background-color: rgb(107 114 128 / 0.1);
}
.focus\\:bg-gray-500\\/5:focus {
  background-color: rgb(107 114 128 / 0.05);
}
.focus\\:text-gray-700:focus {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.focus\\:text-indigo-800:focus {
  --tw-text-opacity: 1;
  color: rgb(55 48 163 / var(--tw-text-opacity));
}
.focus\\:text-gray-800:focus {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.focus\\:text-gray-500:focus {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.focus\\:text-primary-600:focus {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.focus\\:underline:focus {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-inset:focus {
  --tw-ring-inset: inset;
}
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}
.focus\\:ring-indigo-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity));
}
.focus\\:ring-red-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 202 202 / var(--tw-ring-opacity));
}
.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));
}
.focus\\:ring-white:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}
.focus\\:ring-primary-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));
}
.focus\\:ring-primary-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}
.focus\\:ring-primary-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));
}
.focus\\:ring-opacity-50:focus {
  --tw-ring-opacity: 0.5;
}
.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
.focus\\:ring-offset-danger-700:focus {
  --tw-ring-offset-color: #be123c;
}
.focus\\:ring-offset-primary-700:focus {
  --tw-ring-offset-color: #1d4ed8;
}
.active\\:bg-gray-100:active {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.active\\:bg-gray-900:active {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.active\\:bg-red-600:active {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.active\\:bg-gray-50:active {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.active\\:text-gray-700:active {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.active\\:text-gray-500:active {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.active\\:text-gray-800:active {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.disabled\\:opacity-25:disabled {
  opacity: 0.25;
}
.group:focus-within .group-focus-within\\:text-primary-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.group:focus .group-focus\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
[dir="rtl"] .rtl\\:right-auto {
  right: auto;
}
[dir="rtl"] .rtl\\:left-0 {
  left: 0px;
}
[dir="rtl"] .rtl\\:left-3 {
  left: 0.75rem;
}
[dir="rtl"] .rtl\\:left-auto {
  left: auto;
}
[dir="rtl"] .rtl\\:right-0 {
  right: 0px;
}
[dir="rtl"] .rtl\\:ml-2 {
  margin-left: 0.5rem;
}
[dir="rtl"] .rtl\\:-mr-1 {
  margin-right: -0.25rem;
}
[dir="rtl"] .rtl\\:ml-1 {
  margin-left: 0.25rem;
}
[dir="rtl"] .rtl\\:-mr-2 {
  margin-right: -0.5rem;
}
[dir="rtl"] .rtl\\:mr-1 {
  margin-right: 0.25rem;
}
[dir="rtl"] .rtl\\:ml-4 {
  margin-left: 1rem;
}
[dir="rtl"] .rtl\\:translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
[dir="rtl"] .rtl\\:scale-x-\\[-1\\] {
  --tw-scale-x: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
[dir="rtl"] .rtl\\:space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}
[dir="rtl"] .rtl\\:pl-0 {
  padding-left: 0px;
}
[dir="rtl"] .rtl\\:pr-12 {
  padding-right: 3rem;
}
[dir="rtl"] .rtl\\:text-right {
  text-align: right;
}
.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}
.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}
.dark .dark\\:border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}
.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}
.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-teal-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(20 184 166 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-orange-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 88 12 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.dark .dark\\:bg-gray-900\\/70 {
  background-color: rgb(17 24 39 / 0.7);
}
.dark .dark\\:bg-main {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}
.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
.dark .dark\\:text-orange-100 {
  --tw-text-opacity: 1;
  color: rgb(255 237 213 / var(--tw-text-opacity));
}
.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.dark .dark\\:text-green-100 {
  --tw-text-opacity: 1;
  color: rgb(220 252 231 / var(--tw-text-opacity));
}
.dark .dark\\:text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(219 234 254 / var(--tw-text-opacity));
}
.dark .dark\\:text-teal-100 {
  --tw-text-opacity: 1;
  color: rgb(204 251 241 / var(--tw-text-opacity));
}
.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.dark .dark\\:text-red-100 {
  --tw-text-opacity: 1;
  color: rgb(254 226 226 / var(--tw-text-opacity));
}
.dark .dark\\:text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}
.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.dark .dark\\:text-danger-500 {
  --tw-text-opacity: 1;
  color: rgb(244 63 94 / var(--tw-text-opacity));
}
.dark .dark\\:text-primary-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.dark .dark\\:text-primary-300 {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}
.dark .dark\\:hover\\:bg-gray-400\\/5:hover {
  background-color: rgb(156 163 175 / 0.05);
}
.dark .dark\\:hover\\:bg-primary-500\\/5:hover {
  background-color: rgb(59 130 246 / 0.05);
}
.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.dark .dark\\:hover\\:text-danger-400:hover {
  --tw-text-opacity: 1;
  color: rgb(251 113 133 / var(--tw-text-opacity));
}
.dark .dark\\:hover\\:text-gray-200:hover {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
.dark .dark\\:focus\\:ring-offset-0:focus {
  --tw-ring-offset-width: 0px;
}
@media (min-width: 640px) {

  .sm\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .sm\\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:-my-px {
    margin-top: -1px;
    margin-bottom: -1px;
  }

  .sm\\:ml-3 {
    margin-left: 0.75rem;
  }

  .sm\\:-mr-2 {
    margin-right: -0.5rem;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:ml-4 {
    margin-left: 1rem;
  }

  .sm\\:ml-10 {
    margin-left: 2.5rem;
  }

  .sm\\:ml-6 {
    margin-left: 1.5rem;
  }

  .sm\\:mt-auto {
    margin-top: auto;
  }

  .sm\\:ml-0 {
    margin-left: 0px;
  }

  .sm\\:block {
    display: block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-20 {
    height: 5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:w-full {
    width: 100%;
  }

  .sm\\:max-w-md {
    max-width: 28rem;
  }

  .sm\\:max-w-sm {
    max-width: 24rem;
  }

  .sm\\:max-w-lg {
    max-width: 32rem;
  }

  .sm\\:max-w-xl {
    max-width: 36rem;
  }

  .sm\\:max-w-2xl {
    max-width: 42rem;
  }

  .sm\\:flex-1 {
    flex: 1 1 0%;
  }

  .sm\\:translate-y-0 {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:scale-95 {
    --tw-scale-x: .95;
    --tw-scale-y: .95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  .sm\\:items-start {
    align-items: flex-start;
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-start {
    justify-content: flex-start;
  }

  .sm\\:justify-end {
    justify-content: flex-end;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:rounded-md {
    border-radius: 0.375rem;
  }

  .sm\\:rounded-tl-md {
    border-top-left-radius: 0.375rem;
  }

  .sm\\:rounded-tr-md {
    border-top-right-radius: 0.375rem;
  }

  .sm\\:rounded-bl-md {
    border-bottom-left-radius: 0.375rem;
  }

  .sm\\:rounded-br-md {
    border-bottom-right-radius: 0.375rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .sm\\:px-20 {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .sm\\:pt-0 {
    padding-top: 0px;
  }

  .sm\\:pb-4 {
    padding-bottom: 1rem;
  }

  .sm\\:text-left {
    text-align: left;
  }

  .sm\\:text-right {
    text-align: right;
  }
}
@media (min-width: 768px) {

  .md\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .md\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mr-2 {
    margin-right: 0.5rem;
  }

  .md\\:block {
    display: block;
  }

  .md\\:grid {
    display: grid;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:max-w-md {
    max-width: 28rem;
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .md\\:gap-6 {
    gap: 1.5rem;
  }

  .md\\:border-t-0 {
    border-top-width: 0px;
  }

  .md\\:border-l {
    border-left-width: 1px;
  }
}
@media (min-width: 1024px) {

  .lg\\:z-0 {
    z-index: 0;
  }

  .lg\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .lg\\:mr-32 {
    margin-right: 8rem;
  }

  .lg\\:translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .lg\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .lg\\:border-r {
    border-right-width: 1px;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:pl-80 {
    padding-left: 20rem;
  }

  [dir="rtl"] .rtl\\:lg\\:-translate-x-0 {
    --tw-translate-x: -0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  [dir="rtl"] .rtl\\:lg\\:pl-0 {
    padding-left: 0px;
  }

  [dir="rtl"] .rtl\\:lg\\:pr-80 {
    padding-right: 20rem;
  }
}
@media (min-width: 1280px) {

  .xl\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  [dir="rtl"] .xl\\:rtl\\:text-right {
    text-align: right;
  }
}
`)();
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, e2.key, e2);
  }
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign || function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o$1(t4, r2) {
  return o$1 = Object.setPrototypeOf || function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o$1(t4, r2);
}
function i() {
  if (typeof Reflect == "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o$1(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f$1(t4) {
  var r2 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return f$1 = function(t5) {
    if (t5 === null || Function.toString.call(t5).indexOf("[native code]") === -1)
      return t5;
    if (typeof t5 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (r2 !== void 0) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o$1(n2, t5);
  }, f$1(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s$1 = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    t4[e2] !== void 0 && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      typeof c2 == "object" && c2 !== null && n2.indexOf(c2) === -1 && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          n3[o3] !== void 0 && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if (n2 === "iso-8859-1")
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (t4.length === 0)
    return t4;
  var i2 = t4;
  if (typeof t4 == "symbol" ? i2 = Symbol.prototype.toString.call(t4) : typeof t4 != "string" && (i2 = String(t4)), n2 === "iso-8859-1")
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    a2 === 45 || a2 === 46 || a2 === 95 || a2 === 126 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (a2 === 40 || a2 === 41) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || typeof t4 != "object" || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return Object.prototype.toString.call(t4) === "[object RegExp]";
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if (typeof n2 != "object") {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || typeof r2 != "object")
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s$1.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || typeof r2 != "object")
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s$1.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && typeof i2 == "object" && n3 && typeof n3 == "object" ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s$1.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b$1 = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if (typeof f2 == "function" ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : e2 === "comma" && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), h2 === null) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if (typeof (b2 = h2) == "string" || typeof b2 == "number" || typeof b2 == "boolean" || typeof b2 == "symbol" || typeof b2 == "bigint" || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if (e2 === "comma" && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (S2 === 0 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (h2 === void 0)
    return x2;
  if (e2 === "comma" && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var T2 = k2[N2], F2 = typeof T2 == "object" && T2.value !== void 0 ? T2.value : h2[T2];
    if (!i2 || F2 !== null) {
      var D2 = m(h2) ? typeof e2 == "function" ? e2(n2, T2) : n2 : n2 + (c2 ? "." + T2 : "[" + T2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, T = function(t4, r2) {
  return t4 && typeof t4 == "string" && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && (u2 = i2.exec(o2)) !== null && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : T(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if (f3 === "[]" && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = f3.charAt(0) === "[" && f3.charAt(f3.length - 1) === "]" ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || a3 !== "" ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : a3 !== "__proto__" && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (t5.decoder != null && typeof t5.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (t5.charset !== void 0 && t5.charset !== "utf-8" && t5.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: t5.allowDots === void 0 ? C.allowDots : !!t5.allowDots, allowPrototypes: typeof t5.allowPrototypes == "boolean" ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: typeof t5.arrayLimit == "number" ? t5.arrayLimit : C.arrayLimit, charset: t5.charset === void 0 ? C.charset : t5.charset, charsetSentinel: typeof t5.charsetSentinel == "boolean" ? t5.charsetSentinel : C.charsetSentinel, comma: typeof t5.comma == "boolean" ? t5.comma : C.comma, decoder: typeof t5.decoder == "function" ? t5.decoder : C.decoder, delimiter: typeof t5.delimiter == "string" || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: typeof t5.depth == "number" || t5.depth === false ? +t5.depth : C.depth, ignoreQueryPrefix: t5.ignoreQueryPrefix === true, interpretNumericEntities: typeof t5.interpretNumericEntities == "boolean" ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: typeof t5.parameterLimit == "number" ? t5.parameterLimit : C.parameterLimit, parseArrays: t5.parseArrays !== false, plainObjects: typeof t5.plainObjects == "boolean" ? t5.plainObjects : C.plainObjects, strictNullHandling: typeof t5.strictNullHandling == "boolean" ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if (t4 === "" || t4 == null)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = typeof t4 == "string" ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, r3.parameterLimit === Infinity ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        o3[n3].indexOf("utf8=") === 0 && (o3[n3] === "utf8=%E2%9C%93" ? u3 = "utf-8" : o3[n3] === "utf8=%26%2310003%3B" && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = l2 === -1 ? c2.indexOf("=") : l2 + 1;
        s2 === -1 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(T(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && u3 === "iso-8859-1" && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, typeof t4 == "string");
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, $ = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = (e2 = r2.bindings) != null ? e2 : {}, this.wheres = (o2 = r2.wheres) != null ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + (((i3 = r2.wheres[e3]) == null ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    return !!u2 && { params: u2.groups, query: D(i2) };
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && r2.wheres[o2] === ".*")
        return encodeURIComponent((a2 = t5[o2]) != null ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test((u2 = t5[o2]) != null ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent((f2 = t5[o2]) != null ? f2 : "");
    }).replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return (t5 = (r2 = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) != null ? t5 : [];
  } }]), t4;
}(), A = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (o2 === void 0 && (o2 = true), (u3 = t4.call(this) || this).t = i3 != null ? i3 : typeof Ziggy != "undefined" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new $(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o$1(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return t6 !== "_query";
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (t7.encoder != null && typeof t7.encoder != "function")
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (t7.charset !== void 0 && t7.charset !== "utf-8" && t7.charset !== "iso-8859-1")
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (t7.format !== void 0) {
          if (!b$1.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return (typeof t7.filter == "function" || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: typeof t7.addQueryPrefix == "boolean" ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: t7.allowDots === void 0 ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: typeof t7.charsetSentinel == "boolean" ? t7.charsetSentinel : R.charsetSentinel, delimiter: t7.delimiter === void 0 ? R.delimiter : t7.delimiter, encode: typeof t7.encode == "boolean" ? t7.encode : R.encode, encoder: typeof t7.encoder == "function" ? t7.encoder : R.encoder, encodeValuesOnly: typeof t7.encodeValuesOnly == "boolean" ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: typeof t7.serializeDate == "function" ? t7.serializeDate : R.serializeDate, skipNulls: typeof t7.skipNulls == "boolean" ? t7.skipNulls : R.skipNulls, sort: typeof t7.sort == "function" ? t7.sort : null, strictNullHandling: typeof t7.strictNullHandling == "boolean" ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      typeof o2.filter == "function" ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if (typeof e3 != "object" || e3 === null)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && e3[a2] === null || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = o2.addQueryPrefix === true ? "?" : "";
      return o2.charsetSentinel && (s2 += o2.charset === "iso-8859-1" ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return typeof t6 == "boolean" ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new $(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new $(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return t6 !== void 0;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = typeof window != "undefined" ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: (t5 = (r2 = this.t.location) == null ? void 0 : r2.host) != null ? t5 : f3 === void 0 ? "" : f3, pathname: (n2 = (e3 = this.t.location) == null ? void 0 : e3.pathname) != null ? n2 : a2 === void 0 ? "" : a2, search: (o2 = (i3 = this.t.location) == null ? void 0 : i3.search) != null ? o2 : c2 === void 0 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    t5 === void 0 && (t5 = {}), r2 === void 0 && (r2 = this.i), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : typeof r3 == "object" ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (o2.length === 1 && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || typeof a2 != "object" || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f$1(String)), I = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return o2 === void 0 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new A(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
const removeElement = (el) => {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else {
    el.parentNode.removeChild(el);
  }
};
class Timer {
  constructor(callback, delay) {
    this.startedAt = Date.now();
    this.callback = callback;
    this.delay = delay;
    this.timer = setTimeout(callback, delay);
  }
  pause() {
    this.stop();
    this.delay -= Date.now() - this.startedAt;
  }
  resume() {
    this.stop();
    this.startedAt = Date.now();
    this.timer = setTimeout(this.callback, this.delay);
  }
  stop() {
    clearTimeout(this.timer);
  }
}
const POSITIONS = {
  TOP_RIGHT: "top-right",
  TOP: "top",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM: "bottom",
  BOTTOM_LEFT: "bottom-left"
};
var Positions = Object.freeze(POSITIONS);
function definePosition(position, top, bottom) {
  let result = null;
  switch (position) {
    case POSITIONS.TOP:
    case POSITIONS.TOP_RIGHT:
    case POSITIONS.TOP_LEFT:
      result = top;
      break;
    case POSITIONS.BOTTOM:
    case POSITIONS.BOTTOM_RIGHT:
    case POSITIONS.BOTTOM_LEFT:
      result = bottom;
      break;
  }
  return result;
}
class Event {
  constructor() {
    this.queue = {};
  }
  $on(name, callback) {
    this.queue[name] = this.queue[name] || [];
    this.queue[name].push(callback);
  }
  $off(name, callback) {
    if (this.queue[name]) {
      for (var i2 = 0; i2 < this.queue[name].length; i2++) {
        if (this.queue[name][i2] === callback) {
          this.queue[name].splice(i2, 1);
          break;
        }
      }
    }
  }
  $emit(name, data) {
    if (this.queue[name]) {
      this.queue[name].forEach(function(callback) {
        callback(data);
      });
    }
  }
}
var eventBus = new Event();
var Toaster_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n}\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n.fade-enter-active {\n  transition: opacity 300ms ease-in;\n}\n.fade-leave-active {\n  transition: opacity 150ms ease-out;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n@-webkit-keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fadeInDown {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, -100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n@keyframes fadeInDown {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, -100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n@-webkit-keyframes fadeInUp {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n@keyframes fadeInUp {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n.c-toast-container {\n  position: fixed;\n  display: flex;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2em;\n  overflow: hidden;\n  z-index: 9999;\n  pointer-events: none;\n}\n.c-toast-container--top {\n  flex-direction: column;\n}\n.c-toast-container--bottom {\n  flex-direction: column-reverse;\n}\n@media screen and (max-width: 768px) {\n.c-toast-container {\n    padding: 0;\n    position: fixed !important;\n}\n}\n.c-toast--top,\n.c-toast--bottom {\n  align-self: center;\n}\n.c-toast--top-right,\n.c-toast--bottom-right {\n  align-self: flex-end;\n}\n.c-toast--top-left,\n.c-toast--bottom-left {\n  align-self: flex-start;\n}\n.v--default-css .c-toast--success {\n  background-color: #28a745;\n}\n.v--default-css .c-toast--info {\n  background-color: #17a2b8;\n}\n.v--default-css .c-toast--warning {\n  background-color: #ffc107;\n}\n.v--default-css .c-toast--error {\n  background-color: #dc3545;\n}\n.v--default-css .c-toast--default {\n  background-color: #343a40;\n}\n.v--default-css .c-toast {\n  display: grid;\n  align-items: center;\n  -webkit-animation-duration: 150ms;\n          animation-duration: 150ms;\n  margin: 0.5em 0;\n  border-radius: 0.5em;\n  pointer-events: auto;\n  color: #fff;\n  min-height: 3em;\n  cursor: pointer;\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  padding: 0.5em 2em;\n  word-break: break-word;\n}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$18 = {
  name: "toast",
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "default"
    },
    position: {
      type: String,
      default: Positions.BOTTOM_RIGHT,
      validator(value) {
        return Object.values(Positions).includes(value);
      }
    },
    maxToasts: {
      type: [Number, Boolean],
      default: false
    },
    duration: {
      type: [Number, Boolean],
      default: 4e3
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    queue: {
      type: Boolean,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    useDefaultCss: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function,
      default: () => {
      }
    },
    onClick: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      isActive: false,
      parentTop: null,
      parentBottom: null,
      isHovered: false,
      timer: null
    };
  },
  beforeMount() {
    this.createParents();
    this.setDefaultCss();
    this.setupContainer();
  },
  mounted() {
    this.showNotice();
    eventBus.$on("toast-clear", this.close);
  },
  methods: {
    createParents() {
      this.parentTop = document.querySelector(".c-toast-container--top");
      this.parentBottom = document.querySelector(".c-toast-container--bottom");
      if (this.parentTop && this.parentBottom)
        return;
      if (!this.parentTop) {
        this.parentTop = document.createElement("div");
        this.parentTop.className = "c-toast-container c-toast-container--top";
      }
      if (!this.parentBottom) {
        this.parentBottom = document.createElement("div");
        this.parentBottom.className = "c-toast-container c-toast-container--bottom";
      }
    },
    setDefaultCss() {
      const type = this.useDefaultCss ? "add" : "remove";
      this.parentTop.classList[type]("v--default-css");
      this.parentBottom.classList[type]("v--default-css");
    },
    setupContainer() {
      const container = document.body;
      container.appendChild(this.parentTop);
      container.appendChild(this.parentBottom);
    },
    shouldQueue() {
      if (!this.queue && this.maxToasts === false) {
        return false;
      }
      if (this.maxToasts !== false) {
        return this.maxToasts <= this.parentTop.childElementCount + this.parentBottom.childElementCount;
      }
      return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
    },
    showNotice() {
      if (this.shouldQueue()) {
        this.queueTimer = setTimeout(this.showNotice, 250);
        return;
      }
      this.correctParent.insertAdjacentElement("afterbegin", this.$el);
      this.isActive = true;
      this.timer = this.duration !== false ? new Timer(this.close, this.duration) : null;
    },
    click() {
      this.onClick.apply(null, arguments);
      if (this.dismissible) {
        this.close();
      }
    },
    toggleTimer(newVal) {
      if (this.timer && this.pauseOnHover) {
        newVal ? this.timer.pause() : this.timer.resume();
      }
    },
    stopTimer() {
      this.timer && this.timer.stop();
      clearTimeout(this.queueTimer);
    },
    close() {
      this.stopTimer();
      this.isActive = false;
      setTimeout(() => {
        this.onClose.apply(null, arguments);
        removeElement(this.$el);
      }, 150);
    }
  },
  computed: {
    correctParent() {
      return definePosition(this.position, this.parentTop, this.parentBottom);
    },
    transition() {
      return definePosition(this.position, {
        enter: "fadeInDown",
        leave: "fadeOut"
      }, {
        enter: "fadeInUp",
        leave: "fadeOut"
      });
    }
  },
  beforeUnmount() {
    eventBus.$off("toast-clear", this.close);
  }
};
function _sfc_ssrRender$18(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    style: $data.isActive ? null : { display: "none" },
    class: ["c-toast", `c-toast--${$props.type}`, `c-toast--${$props.position}`],
    role: "alert"
  }, _attrs))}>${$props.message}</div>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@meforma/vue-toaster/src/Toaster.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var Toaster = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$18]]);
const createElement = () => typeof document !== "undefined" && document.createElement("div");
const mount = (component, { props, children, element, app: app2 } = {}) => {
  let el = element ? element : createElement();
  let vNode = vue.h(component, props, children);
  if (app2 && app2._context) {
    vNode.appContext = app2._context;
  }
  vue.render(vNode, el);
  const destroy = () => {
    if (el) {
      vue.render(null, el);
    }
    el = null;
    vNode = null;
  };
  return { vNode, destroy, el };
};
const Api = (globalOptions = {}) => {
  return {
    show(message, options = {}) {
      let localOptions = { message, ...options };
      const c2 = mount(Toaster, {
        props: { ...globalOptions, ...localOptions }
      });
      return c2;
    },
    clear() {
      eventBus.$emit("toast-clear");
    },
    success(message, options = {}) {
      options.type = "success";
      return this.show(message, options);
    },
    error(message, options = {}) {
      options.type = "error";
      return this.show(message, options);
    },
    info(message, options = {}) {
      options.type = "info";
      return this.show(message, options);
    },
    warning(message, options = {}) {
      options.type = "warning";
      return this.show(message, options);
    }
  };
};
const Plugin = (app2, options = {}) => {
  let methods = Api(options);
  app2.$toast = methods;
  app2.config.globalProperties.$toast = methods;
};
Toaster.install = Plugin;
var boxicons_min = /* @__PURE__ */ (() => `@font-face{font-family:boxicons;font-weight:400;font-style:normal;src:url(/build/assets/boxicons.6c646524.eot);src:url(/build/assets/boxicons.6c646524.eot) format('embedded-opentype'),url(/build/assets/boxicons.dab4eb1c.woff2) format('woff2'),url(/build/assets/boxicons.048f19b0.woff) format('woff'),url(/build/assets/boxicons.344e5f5b.ttf) format('truetype'),url(/build/assets/boxicons.f0e29b19.svg?#boxicons) format('svg')}.bx{font-family:boxicons!important;font-weight:400;font-style:normal;font-variant:normal;line-height:1;text-rendering:auto;display:inline-block;text-transform:none;speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bx-ul{margin-left:2em;padding-left:0;list-style:none}.bx-ul>li{position:relative}.bx-ul .bx{font-size:inherit;line-height:inherit;position:absolute;left:-2em;width:2em;text-align:center}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(359deg)}}@-webkit-keyframes burst{0%{transform:scale(1);opacity:1}90%{transform:scale(1.5);opacity:0}}@keyframes burst{0%{transform:scale(1);opacity:1}90%{transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{transform:translateX(0);opacity:1}75%{transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{transform:translateX(0);opacity:1}75%{transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{transform:translateX(0);opacity:1}75%{transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{transform:translateX(0);opacity:1}75%{transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{transform:translateY(0);opacity:1}75%{transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{transform:translateY(0);opacity:1}75%{transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{transform:translateY(0);opacity:1}75%{transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{transform:translateY(0);opacity:1}75%{transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(.95,.95,.95) rotate3d(0,0,1,-10deg)}30%,50%,70%,90%{transform:scale3d(1,1,1) rotate3d(0,0,1,10deg)}40%,60%,80%{transform:scale3d(1,1,1) rotate3d(0,0,1,-10deg)}to{transform:scale3d(1,1,1)}}@keyframes tada{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(.95,.95,.95) rotate3d(0,0,1,-10deg)}30%,50%,70%,90%{transform:scale3d(1,1,1) rotate3d(0,0,1,10deg)}40%,60%,80%{transform:rotate3d(0,0,1,-10deg)}to{transform:scale3d(1,1,1)}}.bx-spin{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}.bx-xs{font-size:1rem!important}.bx-sm{font-size:1.55rem!important}.bx-md{font-size:2.25rem!important}.bx-lg{font-size:3rem!important}.bx-fw{font-size:1.2857142857em;line-height:.8em;width:1.2857142857em;height:.8em;margin-top:-.2em!important;vertical-align:middle}.bx-pull-left{float:left;margin-right:.3em!important}.bx-pull-right{float:right;margin-left:.3em!important}.bx-rotate-90{transform:rotate(90deg)}.bx-rotate-180{transform:rotate(180deg)}.bx-rotate-270{transform:rotate(270deg)}.bx-flip-horizontal{transform:scaleX(-1)}.bx-flip-vertical{transform:scaleY(-1)}.bx-border{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:.25em}.bx-border-circle{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:50%}.bxs-color:before{content:"\\ef39"}.bx-reflect-horizontal:before{content:"\\ef3a"}.bx-reflect-vertical:before{content:"\\ef3b"}.bx-color:before{content:"\\ef3c"}.bxl-mongodb:before{content:"\\ef3d"}.bxl-postgresql:before{content:"\\ef3e"}.bxl-deezer:before{content:"\\ef3f"}.bxs-hard-hat:before{content:"\\ef2a"}.bxs-home-alt-2:before{content:"\\ef2b"}.bxs-cheese:before{content:"\\ef2c"}.bx-home-alt-2:before{content:"\\ef2d"}.bx-hard-hat:before{content:"\\ef2e"}.bx-cheese:before{content:"\\ef2f"}.bx-cart-add:before{content:"\\ef30"}.bx-cart-download:before{content:"\\ef31"}.bx-no-signal:before{content:"\\ef32"}.bx-signal-1:before{content:"\\ef33"}.bx-signal-2:before{content:"\\ef34"}.bx-signal-3:before{content:"\\ef35"}.bx-signal-4:before{content:"\\ef36"}.bx-signal-5:before{content:"\\ef37"}.bxl-xing:before{content:"\\ef38"}.bxl-meta:before{content:"\\ef27"}.bx-lemon:before{content:"\\ef28"}.bxs-lemon:before{content:"\\ef29"}.bx-cricket-ball:before{content:"\\ef0c"}.bx-baguette:before{content:"\\ef0d"}.bx-bowl-hot:before{content:"\\ef0e"}.bx-bowl-rice:before{content:"\\ef0f"}.bx-cable-car:before{content:"\\ef10"}.bx-candles:before{content:"\\ef11"}.bx-circle-half:before{content:"\\ef12"}.bx-circle-quarter:before{content:"\\ef13"}.bx-circle-three-quarter:before{content:"\\ef14"}.bx-cross:before{content:"\\ef15"}.bx-fork:before{content:"\\ef16"}.bx-knife:before{content:"\\ef17"}.bx-money-withdraw:before{content:"\\ef18"}.bx-popsicle:before{content:"\\ef19"}.bx-scatter-chart:before{content:"\\ef1a"}.bxs-baguette:before{content:"\\ef1b"}.bxs-bowl-hot:before{content:"\\ef1c"}.bxs-bowl-rice:before{content:"\\ef1d"}.bxs-cable-car:before{content:"\\ef1e"}.bxs-circle-half:before{content:"\\ef1f"}.bxs-circle-quarter:before{content:"\\ef20"}.bxs-circle-three-quarter:before{content:"\\ef21"}.bxs-cricket-ball:before{content:"\\ef22"}.bxs-invader:before{content:"\\ef23"}.bx-male-female:before{content:"\\ef24"}.bxs-popsicle:before{content:"\\ef25"}.bxs-tree-alt:before{content:"\\ef26"}.bxl-venmo:before{content:"\\e900"}.bxl-upwork:before{content:"\\e901"}.bxl-netlify:before{content:"\\e902"}.bxl-java:before{content:"\\e903"}.bxl-heroku:before{content:"\\e904"}.bxl-go-lang:before{content:"\\e905"}.bxl-gmail:before{content:"\\e906"}.bxl-flask:before{content:"\\e907"}.bxl-99designs:before{content:"\\e908"}.bxl-500px:before{content:"\\e909"}.bxl-adobe:before{content:"\\e90a"}.bxl-airbnb:before{content:"\\e90b"}.bxl-algolia:before{content:"\\e90c"}.bxl-amazon:before{content:"\\e90d"}.bxl-android:before{content:"\\e90e"}.bxl-angular:before{content:"\\e90f"}.bxl-apple:before{content:"\\e910"}.bxl-audible:before{content:"\\e911"}.bxl-aws:before{content:"\\e912"}.bxl-baidu:before{content:"\\e913"}.bxl-behance:before{content:"\\e914"}.bxl-bing:before{content:"\\e915"}.bxl-bitcoin:before{content:"\\e916"}.bxl-blender:before{content:"\\e917"}.bxl-blogger:before{content:"\\e918"}.bxl-bootstrap:before{content:"\\e919"}.bxl-chrome:before{content:"\\e91a"}.bxl-codepen:before{content:"\\e91b"}.bxl-c-plus-plus:before{content:"\\e91c"}.bxl-creative-commons:before{content:"\\e91d"}.bxl-css3:before{content:"\\e91e"}.bxl-dailymotion:before{content:"\\e91f"}.bxl-deviantart:before{content:"\\e920"}.bxl-dev-to:before{content:"\\e921"}.bxl-digg:before{content:"\\e922"}.bxl-digitalocean:before{content:"\\e923"}.bxl-discord:before{content:"\\e924"}.bxl-discord-alt:before{content:"\\e925"}.bxl-discourse:before{content:"\\e926"}.bxl-django:before{content:"\\e927"}.bxl-docker:before{content:"\\e928"}.bxl-dribbble:before{content:"\\e929"}.bxl-dropbox:before{content:"\\e92a"}.bxl-drupal:before{content:"\\e92b"}.bxl-ebay:before{content:"\\e92c"}.bxl-edge:before{content:"\\e92d"}.bxl-etsy:before{content:"\\e92e"}.bxl-facebook:before{content:"\\e92f"}.bxl-facebook-circle:before{content:"\\e930"}.bxl-facebook-square:before{content:"\\e931"}.bxl-figma:before{content:"\\e932"}.bxl-firebase:before{content:"\\e933"}.bxl-firefox:before{content:"\\e934"}.bxl-flickr:before{content:"\\e935"}.bxl-flickr-square:before{content:"\\e936"}.bxl-flutter:before{content:"\\e937"}.bxl-foursquare:before{content:"\\e938"}.bxl-git:before{content:"\\e939"}.bxl-github:before{content:"\\e93a"}.bxl-gitlab:before{content:"\\e93b"}.bxl-google:before{content:"\\e93c"}.bxl-google-cloud:before{content:"\\e93d"}.bxl-google-plus:before{content:"\\e93e"}.bxl-google-plus-circle:before{content:"\\e93f"}.bxl-html5:before{content:"\\e940"}.bxl-imdb:before{content:"\\e941"}.bxl-instagram:before{content:"\\e942"}.bxl-instagram-alt:before{content:"\\e943"}.bxl-internet-explorer:before{content:"\\e944"}.bxl-invision:before{content:"\\e945"}.bxl-javascript:before{content:"\\e946"}.bxl-joomla:before{content:"\\e947"}.bxl-jquery:before{content:"\\e948"}.bxl-jsfiddle:before{content:"\\e949"}.bxl-kickstarter:before{content:"\\e94a"}.bxl-kubernetes:before{content:"\\e94b"}.bxl-less:before{content:"\\e94c"}.bxl-linkedin:before{content:"\\e94d"}.bxl-linkedin-square:before{content:"\\e94e"}.bxl-magento:before{content:"\\e94f"}.bxl-mailchimp:before{content:"\\e950"}.bxl-markdown:before{content:"\\e951"}.bxl-mastercard:before{content:"\\e952"}.bxl-mastodon:before{content:"\\e953"}.bxl-medium:before{content:"\\e954"}.bxl-medium-old:before{content:"\\e955"}.bxl-medium-square:before{content:"\\e956"}.bxl-messenger:before{content:"\\e957"}.bxl-microsoft:before{content:"\\e958"}.bxl-microsoft-teams:before{content:"\\e959"}.bxl-nodejs:before{content:"\\e95a"}.bxl-ok-ru:before{content:"\\e95b"}.bxl-opera:before{content:"\\e95c"}.bxl-patreon:before{content:"\\e95d"}.bxl-paypal:before{content:"\\e95e"}.bxl-periscope:before{content:"\\e95f"}.bxl-php:before{content:"\\e960"}.bxl-pinterest:before{content:"\\e961"}.bxl-pinterest-alt:before{content:"\\e962"}.bxl-play-store:before{content:"\\e963"}.bxl-pocket:before{content:"\\e964"}.bxl-product-hunt:before{content:"\\e965"}.bxl-python:before{content:"\\e966"}.bxl-quora:before{content:"\\e967"}.bxl-react:before{content:"\\e968"}.bxl-redbubble:before{content:"\\e969"}.bxl-reddit:before{content:"\\e96a"}.bxl-redux:before{content:"\\e96b"}.bxl-sass:before{content:"\\e96c"}.bxl-shopify:before{content:"\\e96d"}.bxl-sketch:before{content:"\\e96e"}.bxl-skype:before{content:"\\e96f"}.bxl-slack:before{content:"\\e970"}.bxl-slack-old:before{content:"\\e971"}.bxl-snapchat:before{content:"\\e972"}.bxl-soundcloud:before{content:"\\e973"}.bxl-spotify:before{content:"\\e974"}.bxl-spring-boot:before{content:"\\e975"}.bxl-squarespace:before{content:"\\e976"}.bxl-stack-overflow:before{content:"\\e977"}.bxl-steam:before{content:"\\e978"}.bxl-stripe:before{content:"\\e979"}.bxl-tailwind-css:before{content:"\\e97a"}.bxl-telegram:before{content:"\\e97b"}.bxl-tiktok:before{content:"\\e97c"}.bxl-trello:before{content:"\\e97d"}.bxl-trip-advisor:before{content:"\\e97e"}.bxl-tumblr:before{content:"\\e97f"}.bxl-tux:before{content:"\\e980"}.bxl-twitch:before{content:"\\e981"}.bxl-twitter:before{content:"\\e982"}.bxl-unity:before{content:"\\e983"}.bxl-unsplash:before{content:"\\e984"}.bxl-vimeo:before{content:"\\e985"}.bxl-visa:before{content:"\\e986"}.bxl-visual-studio:before{content:"\\e987"}.bxl-vk:before{content:"\\e988"}.bxl-vuejs:before{content:"\\e989"}.bxl-whatsapp:before{content:"\\e98a"}.bxl-whatsapp-square:before{content:"\\e98b"}.bxl-wikipedia:before{content:"\\e98c"}.bxl-windows:before{content:"\\e98d"}.bxl-wix:before{content:"\\e98e"}.bxl-wordpress:before{content:"\\e98f"}.bxl-yahoo:before{content:"\\e990"}.bxl-yelp:before{content:"\\e991"}.bxl-youtube:before{content:"\\e992"}.bxl-zoom:before{content:"\\e993"}.bx-collapse-alt:before{content:"\\e994"}.bx-collapse-horizontal:before{content:"\\e995"}.bx-collapse-vertical:before{content:"\\e996"}.bx-expand-horizontal:before{content:"\\e997"}.bx-expand-vertical:before{content:"\\e998"}.bx-injection:before{content:"\\e999"}.bx-leaf:before{content:"\\e99a"}.bx-math:before{content:"\\e99b"}.bx-party:before{content:"\\e99c"}.bx-abacus:before{content:"\\e99d"}.bx-accessibility:before{content:"\\e99e"}.bx-add-to-queue:before{content:"\\e99f"}.bx-adjust:before{content:"\\e9a0"}.bx-alarm:before{content:"\\e9a1"}.bx-alarm-add:before{content:"\\e9a2"}.bx-alarm-exclamation:before{content:"\\e9a3"}.bx-alarm-off:before{content:"\\e9a4"}.bx-alarm-snooze:before{content:"\\e9a5"}.bx-album:before{content:"\\e9a6"}.bx-align-justify:before{content:"\\e9a7"}.bx-align-left:before{content:"\\e9a8"}.bx-align-middle:before{content:"\\e9a9"}.bx-align-right:before{content:"\\e9aa"}.bx-analyse:before{content:"\\e9ab"}.bx-anchor:before{content:"\\e9ac"}.bx-angry:before{content:"\\e9ad"}.bx-aperture:before{content:"\\e9ae"}.bx-arch:before{content:"\\e9af"}.bx-archive:before{content:"\\e9b0"}.bx-archive-in:before{content:"\\e9b1"}.bx-archive-out:before{content:"\\e9b2"}.bx-area:before{content:"\\e9b3"}.bx-arrow-back:before{content:"\\e9b4"}.bx-arrow-from-bottom:before{content:"\\e9b5"}.bx-arrow-from-left:before{content:"\\e9b6"}.bx-arrow-from-right:before{content:"\\e9b7"}.bx-arrow-from-top:before{content:"\\e9b8"}.bx-arrow-to-bottom:before{content:"\\e9b9"}.bx-arrow-to-left:before{content:"\\e9ba"}.bx-arrow-to-right:before{content:"\\e9bb"}.bx-arrow-to-top:before{content:"\\e9bc"}.bx-at:before{content:"\\e9bd"}.bx-atom:before{content:"\\e9be"}.bx-award:before{content:"\\e9bf"}.bx-badge:before{content:"\\e9c0"}.bx-badge-check:before{content:"\\e9c1"}.bx-ball:before{content:"\\e9c2"}.bx-band-aid:before{content:"\\e9c3"}.bx-bar-chart:before{content:"\\e9c4"}.bx-bar-chart-alt:before{content:"\\e9c5"}.bx-bar-chart-alt-2:before{content:"\\e9c6"}.bx-bar-chart-square:before{content:"\\e9c7"}.bx-barcode:before{content:"\\e9c8"}.bx-barcode-reader:before{content:"\\e9c9"}.bx-baseball:before{content:"\\e9ca"}.bx-basket:before{content:"\\e9cb"}.bx-basketball:before{content:"\\e9cc"}.bx-bath:before{content:"\\e9cd"}.bx-battery:before{content:"\\e9ce"}.bx-bed:before{content:"\\e9cf"}.bx-been-here:before{content:"\\e9d0"}.bx-beer:before{content:"\\e9d1"}.bx-bell:before{content:"\\e9d2"}.bx-bell-minus:before{content:"\\e9d3"}.bx-bell-off:before{content:"\\e9d4"}.bx-bell-plus:before{content:"\\e9d5"}.bx-bible:before{content:"\\e9d6"}.bx-bitcoin:before{content:"\\e9d7"}.bx-blanket:before{content:"\\e9d8"}.bx-block:before{content:"\\e9d9"}.bx-bluetooth:before{content:"\\e9da"}.bx-body:before{content:"\\e9db"}.bx-bold:before{content:"\\e9dc"}.bx-bolt-circle:before{content:"\\e9dd"}.bx-bomb:before{content:"\\e9de"}.bx-bone:before{content:"\\e9df"}.bx-bong:before{content:"\\e9e0"}.bx-book:before{content:"\\e9e1"}.bx-book-add:before{content:"\\e9e2"}.bx-book-alt:before{content:"\\e9e3"}.bx-book-bookmark:before{content:"\\e9e4"}.bx-book-content:before{content:"\\e9e5"}.bx-book-heart:before{content:"\\e9e6"}.bx-bookmark:before{content:"\\e9e7"}.bx-bookmark-alt:before{content:"\\e9e8"}.bx-bookmark-alt-minus:before{content:"\\e9e9"}.bx-bookmark-alt-plus:before{content:"\\e9ea"}.bx-bookmark-heart:before{content:"\\e9eb"}.bx-bookmark-minus:before{content:"\\e9ec"}.bx-bookmark-plus:before{content:"\\e9ed"}.bx-bookmarks:before{content:"\\e9ee"}.bx-book-open:before{content:"\\e9ef"}.bx-book-reader:before{content:"\\e9f0"}.bx-border-all:before{content:"\\e9f1"}.bx-border-bottom:before{content:"\\e9f2"}.bx-border-inner:before{content:"\\e9f3"}.bx-border-left:before{content:"\\e9f4"}.bx-border-none:before{content:"\\e9f5"}.bx-border-outer:before{content:"\\e9f6"}.bx-border-radius:before{content:"\\e9f7"}.bx-border-right:before{content:"\\e9f8"}.bx-border-top:before{content:"\\e9f9"}.bx-bot:before{content:"\\e9fa"}.bx-bowling-ball:before{content:"\\e9fb"}.bx-box:before{content:"\\e9fc"}.bx-bracket:before{content:"\\e9fd"}.bx-braille:before{content:"\\e9fe"}.bx-brain:before{content:"\\e9ff"}.bx-briefcase:before{content:"\\ea00"}.bx-briefcase-alt:before{content:"\\ea01"}.bx-briefcase-alt-2:before{content:"\\ea02"}.bx-brightness:before{content:"\\ea03"}.bx-brightness-half:before{content:"\\ea04"}.bx-broadcast:before{content:"\\ea05"}.bx-brush:before{content:"\\ea06"}.bx-brush-alt:before{content:"\\ea07"}.bx-bug:before{content:"\\ea08"}.bx-bug-alt:before{content:"\\ea09"}.bx-building:before{content:"\\ea0a"}.bx-building-house:before{content:"\\ea0b"}.bx-buildings:before{content:"\\ea0c"}.bx-bulb:before{content:"\\ea0d"}.bx-bullseye:before{content:"\\ea0e"}.bx-buoy:before{content:"\\ea0f"}.bx-bus:before{content:"\\ea10"}.bx-bus-school:before{content:"\\ea11"}.bx-cabinet:before{content:"\\ea12"}.bx-cake:before{content:"\\ea13"}.bx-calculator:before{content:"\\ea14"}.bx-calendar:before{content:"\\ea15"}.bx-calendar-alt:before{content:"\\ea16"}.bx-calendar-check:before{content:"\\ea17"}.bx-calendar-edit:before{content:"\\ea18"}.bx-calendar-event:before{content:"\\ea19"}.bx-calendar-exclamation:before{content:"\\ea1a"}.bx-calendar-heart:before{content:"\\ea1b"}.bx-calendar-minus:before{content:"\\ea1c"}.bx-calendar-plus:before{content:"\\ea1d"}.bx-calendar-star:before{content:"\\ea1e"}.bx-calendar-week:before{content:"\\ea1f"}.bx-calendar-x:before{content:"\\ea20"}.bx-camera:before{content:"\\ea21"}.bx-camera-home:before{content:"\\ea22"}.bx-camera-movie:before{content:"\\ea23"}.bx-camera-off:before{content:"\\ea24"}.bx-capsule:before{content:"\\ea25"}.bx-captions:before{content:"\\ea26"}.bx-car:before{content:"\\ea27"}.bx-card:before{content:"\\ea28"}.bx-caret-down:before{content:"\\ea29"}.bx-caret-down-circle:before{content:"\\ea2a"}.bx-caret-down-square:before{content:"\\ea2b"}.bx-caret-left:before{content:"\\ea2c"}.bx-caret-left-circle:before{content:"\\ea2d"}.bx-caret-left-square:before{content:"\\ea2e"}.bx-caret-right:before{content:"\\ea2f"}.bx-caret-right-circle:before{content:"\\ea30"}.bx-caret-right-square:before{content:"\\ea31"}.bx-caret-up:before{content:"\\ea32"}.bx-caret-up-circle:before{content:"\\ea33"}.bx-caret-up-square:before{content:"\\ea34"}.bx-carousel:before{content:"\\ea35"}.bx-cart:before{content:"\\ea36"}.bx-cart-alt:before{content:"\\ea37"}.bx-cast:before{content:"\\ea38"}.bx-category:before{content:"\\ea39"}.bx-category-alt:before{content:"\\ea3a"}.bx-cctv:before{content:"\\ea3b"}.bx-certification:before{content:"\\ea3c"}.bx-chair:before{content:"\\ea3d"}.bx-chalkboard:before{content:"\\ea3e"}.bx-chart:before{content:"\\ea3f"}.bx-chat:before{content:"\\ea40"}.bx-check:before{content:"\\ea41"}.bx-checkbox:before{content:"\\ea42"}.bx-checkbox-checked:before{content:"\\ea43"}.bx-checkbox-minus:before{content:"\\ea44"}.bx-checkbox-square:before{content:"\\ea45"}.bx-check-circle:before{content:"\\ea46"}.bx-check-double:before{content:"\\ea47"}.bx-check-shield:before{content:"\\ea48"}.bx-check-square:before{content:"\\ea49"}.bx-chevron-down:before{content:"\\ea4a"}.bx-chevron-down-circle:before{content:"\\ea4b"}.bx-chevron-down-square:before{content:"\\ea4c"}.bx-chevron-left:before{content:"\\ea4d"}.bx-chevron-left-circle:before{content:"\\ea4e"}.bx-chevron-left-square:before{content:"\\ea4f"}.bx-chevron-right:before{content:"\\ea50"}.bx-chevron-right-circle:before{content:"\\ea51"}.bx-chevron-right-square:before{content:"\\ea52"}.bx-chevrons-down:before{content:"\\ea53"}.bx-chevrons-left:before{content:"\\ea54"}.bx-chevrons-right:before{content:"\\ea55"}.bx-chevrons-up:before{content:"\\ea56"}.bx-chevron-up:before{content:"\\ea57"}.bx-chevron-up-circle:before{content:"\\ea58"}.bx-chevron-up-square:before{content:"\\ea59"}.bx-chip:before{content:"\\ea5a"}.bx-church:before{content:"\\ea5b"}.bx-circle:before{content:"\\ea5c"}.bx-clinic:before{content:"\\ea5d"}.bx-clipboard:before{content:"\\ea5e"}.bx-closet:before{content:"\\ea5f"}.bx-cloud:before{content:"\\ea60"}.bx-cloud-download:before{content:"\\ea61"}.bx-cloud-drizzle:before{content:"\\ea62"}.bx-cloud-lightning:before{content:"\\ea63"}.bx-cloud-light-rain:before{content:"\\ea64"}.bx-cloud-rain:before{content:"\\ea65"}.bx-cloud-snow:before{content:"\\ea66"}.bx-cloud-upload:before{content:"\\ea67"}.bx-code:before{content:"\\ea68"}.bx-code-alt:before{content:"\\ea69"}.bx-code-block:before{content:"\\ea6a"}.bx-code-curly:before{content:"\\ea6b"}.bx-coffee:before{content:"\\ea6c"}.bx-coffee-togo:before{content:"\\ea6d"}.bx-cog:before{content:"\\ea6e"}.bx-coin:before{content:"\\ea6f"}.bx-coin-stack:before{content:"\\ea70"}.bx-collapse:before{content:"\\ea71"}.bx-collection:before{content:"\\ea72"}.bx-color-fill:before{content:"\\ea73"}.bx-columns:before{content:"\\ea74"}.bx-command:before{content:"\\ea75"}.bx-comment:before{content:"\\ea76"}.bx-comment-add:before{content:"\\ea77"}.bx-comment-check:before{content:"\\ea78"}.bx-comment-detail:before{content:"\\ea79"}.bx-comment-dots:before{content:"\\ea7a"}.bx-comment-edit:before{content:"\\ea7b"}.bx-comment-error:before{content:"\\ea7c"}.bx-comment-minus:before{content:"\\ea7d"}.bx-comment-x:before{content:"\\ea7e"}.bx-compass:before{content:"\\ea7f"}.bx-confused:before{content:"\\ea80"}.bx-conversation:before{content:"\\ea81"}.bx-cookie:before{content:"\\ea82"}.bx-cool:before{content:"\\ea83"}.bx-copy:before{content:"\\ea84"}.bx-copy-alt:before{content:"\\ea85"}.bx-copyright:before{content:"\\ea86"}.bx-credit-card:before{content:"\\ea87"}.bx-credit-card-alt:before{content:"\\ea88"}.bx-credit-card-front:before{content:"\\ea89"}.bx-crop:before{content:"\\ea8a"}.bx-crosshair:before{content:"\\ea8b"}.bx-crown:before{content:"\\ea8c"}.bx-cube:before{content:"\\ea8d"}.bx-cube-alt:before{content:"\\ea8e"}.bx-cuboid:before{content:"\\ea8f"}.bx-current-location:before{content:"\\ea90"}.bx-customize:before{content:"\\ea91"}.bx-cut:before{content:"\\ea92"}.bx-cycling:before{content:"\\ea93"}.bx-cylinder:before{content:"\\ea94"}.bx-data:before{content:"\\ea95"}.bx-desktop:before{content:"\\ea96"}.bx-detail:before{content:"\\ea97"}.bx-devices:before{content:"\\ea98"}.bx-dialpad:before{content:"\\ea99"}.bx-dialpad-alt:before{content:"\\ea9a"}.bx-diamond:before{content:"\\ea9b"}.bx-dice-1:before{content:"\\ea9c"}.bx-dice-2:before{content:"\\ea9d"}.bx-dice-3:before{content:"\\ea9e"}.bx-dice-4:before{content:"\\ea9f"}.bx-dice-5:before{content:"\\eaa0"}.bx-dice-6:before{content:"\\eaa1"}.bx-directions:before{content:"\\eaa2"}.bx-disc:before{content:"\\eaa3"}.bx-dish:before{content:"\\eaa4"}.bx-dislike:before{content:"\\eaa5"}.bx-dizzy:before{content:"\\eaa6"}.bx-dna:before{content:"\\eaa7"}.bx-dock-bottom:before{content:"\\eaa8"}.bx-dock-left:before{content:"\\eaa9"}.bx-dock-right:before{content:"\\eaaa"}.bx-dock-top:before{content:"\\eaab"}.bx-dollar:before{content:"\\eaac"}.bx-dollar-circle:before{content:"\\eaad"}.bx-donate-blood:before{content:"\\eaae"}.bx-donate-heart:before{content:"\\eaaf"}.bx-door-open:before{content:"\\eab0"}.bx-dots-horizontal:before{content:"\\eab1"}.bx-dots-horizontal-rounded:before{content:"\\eab2"}.bx-dots-vertical:before{content:"\\eab3"}.bx-dots-vertical-rounded:before{content:"\\eab4"}.bx-doughnut-chart:before{content:"\\eab5"}.bx-down-arrow:before{content:"\\eab6"}.bx-down-arrow-alt:before{content:"\\eab7"}.bx-down-arrow-circle:before{content:"\\eab8"}.bx-download:before{content:"\\eab9"}.bx-downvote:before{content:"\\eaba"}.bx-drink:before{content:"\\eabb"}.bx-droplet:before{content:"\\eabc"}.bx-dumbbell:before{content:"\\eabd"}.bx-duplicate:before{content:"\\eabe"}.bx-edit:before{content:"\\eabf"}.bx-edit-alt:before{content:"\\eac0"}.bx-envelope:before{content:"\\eac1"}.bx-envelope-open:before{content:"\\eac2"}.bx-equalizer:before{content:"\\eac3"}.bx-eraser:before{content:"\\eac4"}.bx-error:before{content:"\\eac5"}.bx-error-alt:before{content:"\\eac6"}.bx-error-circle:before{content:"\\eac7"}.bx-euro:before{content:"\\eac8"}.bx-exclude:before{content:"\\eac9"}.bx-exit:before{content:"\\eaca"}.bx-exit-fullscreen:before{content:"\\eacb"}.bx-expand:before{content:"\\eacc"}.bx-expand-alt:before{content:"\\eacd"}.bx-export:before{content:"\\eace"}.bx-extension:before{content:"\\eacf"}.bx-face:before{content:"\\ead0"}.bx-fast-forward:before{content:"\\ead1"}.bx-fast-forward-circle:before{content:"\\ead2"}.bx-female:before{content:"\\ead3"}.bx-female-sign:before{content:"\\ead4"}.bx-file:before{content:"\\ead5"}.bx-file-blank:before{content:"\\ead6"}.bx-file-find:before{content:"\\ead7"}.bx-film:before{content:"\\ead8"}.bx-filter:before{content:"\\ead9"}.bx-filter-alt:before{content:"\\eada"}.bx-fingerprint:before{content:"\\eadb"}.bx-first-aid:before{content:"\\eadc"}.bx-first-page:before{content:"\\eadd"}.bx-flag:before{content:"\\eade"}.bx-folder:before{content:"\\eadf"}.bx-folder-minus:before{content:"\\eae0"}.bx-folder-open:before{content:"\\eae1"}.bx-folder-plus:before{content:"\\eae2"}.bx-font:before{content:"\\eae3"}.bx-font-color:before{content:"\\eae4"}.bx-font-family:before{content:"\\eae5"}.bx-font-size:before{content:"\\eae6"}.bx-food-menu:before{content:"\\eae7"}.bx-food-tag:before{content:"\\eae8"}.bx-football:before{content:"\\eae9"}.bx-fridge:before{content:"\\eaea"}.bx-fullscreen:before{content:"\\eaeb"}.bx-game:before{content:"\\eaec"}.bx-gas-pump:before{content:"\\eaed"}.bx-ghost:before{content:"\\eaee"}.bx-gift:before{content:"\\eaef"}.bx-git-branch:before{content:"\\eaf0"}.bx-git-commit:before{content:"\\eaf1"}.bx-git-compare:before{content:"\\eaf2"}.bx-git-merge:before{content:"\\eaf3"}.bx-git-pull-request:before{content:"\\eaf4"}.bx-git-repo-forked:before{content:"\\eaf5"}.bx-glasses:before{content:"\\eaf6"}.bx-glasses-alt:before{content:"\\eaf7"}.bx-globe:before{content:"\\eaf8"}.bx-globe-alt:before{content:"\\eaf9"}.bx-grid:before{content:"\\eafa"}.bx-grid-alt:before{content:"\\eafb"}.bx-grid-horizontal:before{content:"\\eafc"}.bx-grid-small:before{content:"\\eafd"}.bx-grid-vertical:before{content:"\\eafe"}.bx-group:before{content:"\\eaff"}.bx-handicap:before{content:"\\eb00"}.bx-happy:before{content:"\\eb01"}.bx-happy-alt:before{content:"\\eb02"}.bx-happy-beaming:before{content:"\\eb03"}.bx-happy-heart-eyes:before{content:"\\eb04"}.bx-hash:before{content:"\\eb05"}.bx-hdd:before{content:"\\eb06"}.bx-heading:before{content:"\\eb07"}.bx-headphone:before{content:"\\eb08"}.bx-health:before{content:"\\eb09"}.bx-heart:before{content:"\\eb0a"}.bx-heart-circle:before{content:"\\eb0b"}.bx-heart-square:before{content:"\\eb0c"}.bx-help-circle:before{content:"\\eb0d"}.bx-hide:before{content:"\\eb0e"}.bx-highlight:before{content:"\\eb0f"}.bx-history:before{content:"\\eb10"}.bx-hive:before{content:"\\eb11"}.bx-home:before{content:"\\eb12"}.bx-home-alt:before{content:"\\eb13"}.bx-home-circle:before{content:"\\eb14"}.bx-home-heart:before{content:"\\eb15"}.bx-home-smile:before{content:"\\eb16"}.bx-horizontal-center:before{content:"\\eb17"}.bx-hotel:before{content:"\\eb18"}.bx-hourglass:before{content:"\\eb19"}.bx-id-card:before{content:"\\eb1a"}.bx-image:before{content:"\\eb1b"}.bx-image-add:before{content:"\\eb1c"}.bx-image-alt:before{content:"\\eb1d"}.bx-images:before{content:"\\eb1e"}.bx-import:before{content:"\\eb1f"}.bx-infinite:before{content:"\\eb20"}.bx-info-circle:before{content:"\\eb21"}.bx-info-square:before{content:"\\eb22"}.bx-intersect:before{content:"\\eb23"}.bx-italic:before{content:"\\eb24"}.bx-joystick:before{content:"\\eb25"}.bx-joystick-alt:before{content:"\\eb26"}.bx-joystick-button:before{content:"\\eb27"}.bx-key:before{content:"\\eb28"}.bx-label:before{content:"\\eb29"}.bx-landscape:before{content:"\\eb2a"}.bx-laptop:before{content:"\\eb2b"}.bx-last-page:before{content:"\\eb2c"}.bx-laugh:before{content:"\\eb2d"}.bx-layer:before{content:"\\eb2e"}.bx-layer-minus:before{content:"\\eb2f"}.bx-layer-plus:before{content:"\\eb30"}.bx-layout:before{content:"\\eb31"}.bx-left-arrow:before{content:"\\eb32"}.bx-left-arrow-alt:before{content:"\\eb33"}.bx-left-arrow-circle:before{content:"\\eb34"}.bx-left-down-arrow-circle:before{content:"\\eb35"}.bx-left-indent:before{content:"\\eb36"}.bx-left-top-arrow-circle:before{content:"\\eb37"}.bx-library:before{content:"\\eb38"}.bx-like:before{content:"\\eb39"}.bx-line-chart:before{content:"\\eb3a"}.bx-line-chart-down:before{content:"\\eb3b"}.bx-link:before{content:"\\eb3c"}.bx-link-alt:before{content:"\\eb3d"}.bx-link-external:before{content:"\\eb3e"}.bx-lira:before{content:"\\eb3f"}.bx-list-check:before{content:"\\eb40"}.bx-list-minus:before{content:"\\eb41"}.bx-list-ol:before{content:"\\eb42"}.bx-list-plus:before{content:"\\eb43"}.bx-list-ul:before{content:"\\eb44"}.bx-loader:before{content:"\\eb45"}.bx-loader-alt:before{content:"\\eb46"}.bx-loader-circle:before{content:"\\eb47"}.bx-location-plus:before{content:"\\eb48"}.bx-lock:before{content:"\\eb49"}.bx-lock-alt:before{content:"\\eb4a"}.bx-lock-open:before{content:"\\eb4b"}.bx-lock-open-alt:before{content:"\\eb4c"}.bx-log-in:before{content:"\\eb4d"}.bx-log-in-circle:before{content:"\\eb4e"}.bx-log-out:before{content:"\\eb4f"}.bx-log-out-circle:before{content:"\\eb50"}.bx-low-vision:before{content:"\\eb51"}.bx-magnet:before{content:"\\eb52"}.bx-mail-send:before{content:"\\eb53"}.bx-male:before{content:"\\eb54"}.bx-male-sign:before{content:"\\eb55"}.bx-map:before{content:"\\eb56"}.bx-map-alt:before{content:"\\eb57"}.bx-map-pin:before{content:"\\eb58"}.bx-mask:before{content:"\\eb59"}.bx-medal:before{content:"\\eb5a"}.bx-meh:before{content:"\\eb5b"}.bx-meh-alt:before{content:"\\eb5c"}.bx-meh-blank:before{content:"\\eb5d"}.bx-memory-card:before{content:"\\eb5e"}.bx-menu:before{content:"\\eb5f"}.bx-menu-alt-left:before{content:"\\eb60"}.bx-menu-alt-right:before{content:"\\eb61"}.bx-merge:before{content:"\\eb62"}.bx-message:before{content:"\\eb63"}.bx-message-add:before{content:"\\eb64"}.bx-message-alt:before{content:"\\eb65"}.bx-message-alt-add:before{content:"\\eb66"}.bx-message-alt-check:before{content:"\\eb67"}.bx-message-alt-detail:before{content:"\\eb68"}.bx-message-alt-dots:before{content:"\\eb69"}.bx-message-alt-edit:before{content:"\\eb6a"}.bx-message-alt-error:before{content:"\\eb6b"}.bx-message-alt-minus:before{content:"\\eb6c"}.bx-message-alt-x:before{content:"\\eb6d"}.bx-message-check:before{content:"\\eb6e"}.bx-message-detail:before{content:"\\eb6f"}.bx-message-dots:before{content:"\\eb70"}.bx-message-edit:before{content:"\\eb71"}.bx-message-error:before{content:"\\eb72"}.bx-message-minus:before{content:"\\eb73"}.bx-message-rounded:before{content:"\\eb74"}.bx-message-rounded-add:before{content:"\\eb75"}.bx-message-rounded-check:before{content:"\\eb76"}.bx-message-rounded-detail:before{content:"\\eb77"}.bx-message-rounded-dots:before{content:"\\eb78"}.bx-message-rounded-edit:before{content:"\\eb79"}.bx-message-rounded-error:before{content:"\\eb7a"}.bx-message-rounded-minus:before{content:"\\eb7b"}.bx-message-rounded-x:before{content:"\\eb7c"}.bx-message-square:before{content:"\\eb7d"}.bx-message-square-add:before{content:"\\eb7e"}.bx-message-square-check:before{content:"\\eb7f"}.bx-message-square-detail:before{content:"\\eb80"}.bx-message-square-dots:before{content:"\\eb81"}.bx-message-square-edit:before{content:"\\eb82"}.bx-message-square-error:before{content:"\\eb83"}.bx-message-square-minus:before{content:"\\eb84"}.bx-message-square-x:before{content:"\\eb85"}.bx-message-x:before{content:"\\eb86"}.bx-meteor:before{content:"\\eb87"}.bx-microchip:before{content:"\\eb88"}.bx-microphone:before{content:"\\eb89"}.bx-microphone-off:before{content:"\\eb8a"}.bx-minus:before{content:"\\eb8b"}.bx-minus-back:before{content:"\\eb8c"}.bx-minus-circle:before{content:"\\eb8d"}.bx-minus-front:before{content:"\\eb8e"}.bx-mobile:before{content:"\\eb8f"}.bx-mobile-alt:before{content:"\\eb90"}.bx-mobile-landscape:before{content:"\\eb91"}.bx-mobile-vibration:before{content:"\\eb92"}.bx-money:before{content:"\\eb93"}.bx-moon:before{content:"\\eb94"}.bx-mouse:before{content:"\\eb95"}.bx-mouse-alt:before{content:"\\eb96"}.bx-move:before{content:"\\eb97"}.bx-move-horizontal:before{content:"\\eb98"}.bx-move-vertical:before{content:"\\eb99"}.bx-movie:before{content:"\\eb9a"}.bx-movie-play:before{content:"\\eb9b"}.bx-music:before{content:"\\eb9c"}.bx-navigation:before{content:"\\eb9d"}.bx-network-chart:before{content:"\\eb9e"}.bx-news:before{content:"\\eb9f"}.bx-no-entry:before{content:"\\eba0"}.bx-note:before{content:"\\eba1"}.bx-notepad:before{content:"\\eba2"}.bx-notification:before{content:"\\eba3"}.bx-notification-off:before{content:"\\eba4"}.bx-outline:before{content:"\\eba5"}.bx-package:before{content:"\\eba6"}.bx-paint:before{content:"\\eba7"}.bx-paint-roll:before{content:"\\eba8"}.bx-palette:before{content:"\\eba9"}.bx-paperclip:before{content:"\\ebaa"}.bx-paper-plane:before{content:"\\ebab"}.bx-paragraph:before{content:"\\ebac"}.bx-paste:before{content:"\\ebad"}.bx-pause:before{content:"\\ebae"}.bx-pause-circle:before{content:"\\ebaf"}.bx-pen:before{content:"\\ebb0"}.bx-pencil:before{content:"\\ebb1"}.bx-phone:before{content:"\\ebb2"}.bx-phone-call:before{content:"\\ebb3"}.bx-phone-incoming:before{content:"\\ebb4"}.bx-phone-off:before{content:"\\ebb5"}.bx-phone-outgoing:before{content:"\\ebb6"}.bx-photo-album:before{content:"\\ebb7"}.bx-pie-chart:before{content:"\\ebb8"}.bx-pie-chart-alt:before{content:"\\ebb9"}.bx-pie-chart-alt-2:before{content:"\\ebba"}.bx-pin:before{content:"\\ebbb"}.bx-planet:before{content:"\\ebbc"}.bx-play:before{content:"\\ebbd"}.bx-play-circle:before{content:"\\ebbe"}.bx-plug:before{content:"\\ebbf"}.bx-plus:before{content:"\\ebc0"}.bx-plus-circle:before{content:"\\ebc1"}.bx-plus-medical:before{content:"\\ebc2"}.bx-podcast:before{content:"\\ebc3"}.bx-pointer:before{content:"\\ebc4"}.bx-poll:before{content:"\\ebc5"}.bx-polygon:before{content:"\\ebc6"}.bx-pound:before{content:"\\ebc7"}.bx-power-off:before{content:"\\ebc8"}.bx-printer:before{content:"\\ebc9"}.bx-pulse:before{content:"\\ebca"}.bx-purchase-tag:before{content:"\\ebcb"}.bx-purchase-tag-alt:before{content:"\\ebcc"}.bx-pyramid:before{content:"\\ebcd"}.bx-qr:before{content:"\\ebce"}.bx-qr-scan:before{content:"\\ebcf"}.bx-question-mark:before{content:"\\ebd0"}.bx-radar:before{content:"\\ebd1"}.bx-radio:before{content:"\\ebd2"}.bx-radio-circle:before{content:"\\ebd3"}.bx-radio-circle-marked:before{content:"\\ebd4"}.bx-receipt:before{content:"\\ebd5"}.bx-rectangle:before{content:"\\ebd6"}.bx-recycle:before{content:"\\ebd7"}.bx-redo:before{content:"\\ebd8"}.bx-refresh:before{content:"\\ebd9"}.bx-registered:before{content:"\\ebda"}.bx-rename:before{content:"\\ebdb"}.bx-repeat:before{content:"\\ebdc"}.bx-reply:before{content:"\\ebdd"}.bx-reply-all:before{content:"\\ebde"}.bx-repost:before{content:"\\ebdf"}.bx-reset:before{content:"\\ebe0"}.bx-restaurant:before{content:"\\ebe1"}.bx-revision:before{content:"\\ebe2"}.bx-rewind:before{content:"\\ebe3"}.bx-rewind-circle:before{content:"\\ebe4"}.bx-right-arrow:before{content:"\\ebe5"}.bx-right-arrow-alt:before{content:"\\ebe6"}.bx-right-arrow-circle:before{content:"\\ebe7"}.bx-right-down-arrow-circle:before{content:"\\ebe8"}.bx-right-indent:before{content:"\\ebe9"}.bx-right-top-arrow-circle:before{content:"\\ebea"}.bx-rocket:before{content:"\\ebeb"}.bx-rotate-left:before{content:"\\ebec"}.bx-rotate-right:before{content:"\\ebed"}.bx-rss:before{content:"\\ebee"}.bx-ruble:before{content:"\\ebef"}.bx-ruler:before{content:"\\ebf0"}.bx-run:before{content:"\\ebf1"}.bx-rupee:before{content:"\\ebf2"}.bx-sad:before{content:"\\ebf3"}.bx-save:before{content:"\\ebf4"}.bx-scan:before{content:"\\ebf5"}.bx-screenshot:before{content:"\\ebf6"}.bx-search:before{content:"\\ebf7"}.bx-search-alt:before{content:"\\ebf8"}.bx-search-alt-2:before{content:"\\ebf9"}.bx-selection:before{content:"\\ebfa"}.bx-select-multiple:before{content:"\\ebfb"}.bx-send:before{content:"\\ebfc"}.bx-server:before{content:"\\ebfd"}.bx-shape-circle:before{content:"\\ebfe"}.bx-shape-polygon:before{content:"\\ebff"}.bx-shape-square:before{content:"\\ec00"}.bx-shape-triangle:before{content:"\\ec01"}.bx-share:before{content:"\\ec02"}.bx-share-alt:before{content:"\\ec03"}.bx-shekel:before{content:"\\ec04"}.bx-shield:before{content:"\\ec05"}.bx-shield-alt:before{content:"\\ec06"}.bx-shield-alt-2:before{content:"\\ec07"}.bx-shield-quarter:before{content:"\\ec08"}.bx-shield-x:before{content:"\\ec09"}.bx-shocked:before{content:"\\ec0a"}.bx-shopping-bag:before{content:"\\ec0b"}.bx-show:before{content:"\\ec0c"}.bx-show-alt:before{content:"\\ec0d"}.bx-shuffle:before{content:"\\ec0e"}.bx-sidebar:before{content:"\\ec0f"}.bx-sitemap:before{content:"\\ec10"}.bx-skip-next:before{content:"\\ec11"}.bx-skip-next-circle:before{content:"\\ec12"}.bx-skip-previous:before{content:"\\ec13"}.bx-skip-previous-circle:before{content:"\\ec14"}.bx-sleepy:before{content:"\\ec15"}.bx-slider:before{content:"\\ec16"}.bx-slider-alt:before{content:"\\ec17"}.bx-slideshow:before{content:"\\ec18"}.bx-smile:before{content:"\\ec19"}.bx-sort:before{content:"\\ec1a"}.bx-sort-alt-2:before{content:"\\ec1b"}.bx-sort-a-z:before{content:"\\ec1c"}.bx-sort-down:before{content:"\\ec1d"}.bx-sort-up:before{content:"\\ec1e"}.bx-sort-z-a:before{content:"\\ec1f"}.bx-spa:before{content:"\\ec20"}.bx-space-bar:before{content:"\\ec21"}.bx-speaker:before{content:"\\ec22"}.bx-spray-can:before{content:"\\ec23"}.bx-spreadsheet:before{content:"\\ec24"}.bx-square:before{content:"\\ec25"}.bx-square-rounded:before{content:"\\ec26"}.bx-star:before{content:"\\ec27"}.bx-station:before{content:"\\ec28"}.bx-stats:before{content:"\\ec29"}.bx-sticker:before{content:"\\ec2a"}.bx-stop:before{content:"\\ec2b"}.bx-stop-circle:before{content:"\\ec2c"}.bx-stopwatch:before{content:"\\ec2d"}.bx-store:before{content:"\\ec2e"}.bx-store-alt:before{content:"\\ec2f"}.bx-street-view:before{content:"\\ec30"}.bx-strikethrough:before{content:"\\ec31"}.bx-subdirectory-left:before{content:"\\ec32"}.bx-subdirectory-right:before{content:"\\ec33"}.bx-sun:before{content:"\\ec34"}.bx-support:before{content:"\\ec35"}.bx-swim:before{content:"\\ec36"}.bx-sync:before{content:"\\ec37"}.bx-tab:before{content:"\\ec38"}.bx-table:before{content:"\\ec39"}.bx-tachometer:before{content:"\\ec3a"}.bx-tag:before{content:"\\ec3b"}.bx-tag-alt:before{content:"\\ec3c"}.bx-target-lock:before{content:"\\ec3d"}.bx-task:before{content:"\\ec3e"}.bx-task-x:before{content:"\\ec3f"}.bx-taxi:before{content:"\\ec40"}.bx-tennis-ball:before{content:"\\ec41"}.bx-terminal:before{content:"\\ec42"}.bx-test-tube:before{content:"\\ec43"}.bx-text:before{content:"\\ec44"}.bx-time:before{content:"\\ec45"}.bx-time-five:before{content:"\\ec46"}.bx-timer:before{content:"\\ec47"}.bx-tired:before{content:"\\ec48"}.bx-toggle-left:before{content:"\\ec49"}.bx-toggle-right:before{content:"\\ec4a"}.bx-tone:before{content:"\\ec4b"}.bx-traffic-cone:before{content:"\\ec4c"}.bx-train:before{content:"\\ec4d"}.bx-transfer:before{content:"\\ec4e"}.bx-transfer-alt:before{content:"\\ec4f"}.bx-trash:before{content:"\\ec50"}.bx-trash-alt:before{content:"\\ec51"}.bx-trending-down:before{content:"\\ec52"}.bx-trending-up:before{content:"\\ec53"}.bx-trim:before{content:"\\ec54"}.bx-trip:before{content:"\\ec55"}.bx-trophy:before{content:"\\ec56"}.bx-tv:before{content:"\\ec57"}.bx-underline:before{content:"\\ec58"}.bx-undo:before{content:"\\ec59"}.bx-unite:before{content:"\\ec5a"}.bx-unlink:before{content:"\\ec5b"}.bx-up-arrow:before{content:"\\ec5c"}.bx-up-arrow-alt:before{content:"\\ec5d"}.bx-up-arrow-circle:before{content:"\\ec5e"}.bx-upload:before{content:"\\ec5f"}.bx-upside-down:before{content:"\\ec60"}.bx-upvote:before{content:"\\ec61"}.bx-usb:before{content:"\\ec62"}.bx-user:before{content:"\\ec63"}.bx-user-check:before{content:"\\ec64"}.bx-user-circle:before{content:"\\ec65"}.bx-user-minus:before{content:"\\ec66"}.bx-user-pin:before{content:"\\ec67"}.bx-user-plus:before{content:"\\ec68"}.bx-user-voice:before{content:"\\ec69"}.bx-user-x:before{content:"\\ec6a"}.bx-vector:before{content:"\\ec6b"}.bx-vertical-center:before{content:"\\ec6c"}.bx-vial:before{content:"\\ec6d"}.bx-video:before{content:"\\ec6e"}.bx-video-off:before{content:"\\ec6f"}.bx-video-plus:before{content:"\\ec70"}.bx-video-recording:before{content:"\\ec71"}.bx-voicemail:before{content:"\\ec72"}.bx-volume:before{content:"\\ec73"}.bx-volume-full:before{content:"\\ec74"}.bx-volume-low:before{content:"\\ec75"}.bx-volume-mute:before{content:"\\ec76"}.bx-walk:before{content:"\\ec77"}.bx-wallet:before{content:"\\ec78"}.bx-wallet-alt:before{content:"\\ec79"}.bx-water:before{content:"\\ec7a"}.bx-webcam:before{content:"\\ec7b"}.bx-wifi:before{content:"\\ec7c"}.bx-wifi-0:before{content:"\\ec7d"}.bx-wifi-1:before{content:"\\ec7e"}.bx-wifi-2:before{content:"\\ec7f"}.bx-wifi-off:before{content:"\\ec80"}.bx-wind:before{content:"\\ec81"}.bx-window:before{content:"\\ec82"}.bx-window-alt:before{content:"\\ec83"}.bx-window-close:before{content:"\\ec84"}.bx-window-open:before{content:"\\ec85"}.bx-windows:before{content:"\\ec86"}.bx-wine:before{content:"\\ec87"}.bx-wink-smile:before{content:"\\ec88"}.bx-wink-tongue:before{content:"\\ec89"}.bx-won:before{content:"\\ec8a"}.bx-world:before{content:"\\ec8b"}.bx-wrench:before{content:"\\ec8c"}.bx-x:before{content:"\\ec8d"}.bx-x-circle:before{content:"\\ec8e"}.bx-yen:before{content:"\\ec8f"}.bx-zoom-in:before{content:"\\ec90"}.bx-zoom-out:before{content:"\\ec91"}.bxs-party:before{content:"\\ec92"}.bxs-hot:before{content:"\\ec93"}.bxs-droplet:before{content:"\\ec94"}.bxs-cat:before{content:"\\ec95"}.bxs-dog:before{content:"\\ec96"}.bxs-injection:before{content:"\\ec97"}.bxs-leaf:before{content:"\\ec98"}.bxs-add-to-queue:before{content:"\\ec99"}.bxs-adjust:before{content:"\\ec9a"}.bxs-adjust-alt:before{content:"\\ec9b"}.bxs-alarm:before{content:"\\ec9c"}.bxs-alarm-add:before{content:"\\ec9d"}.bxs-alarm-exclamation:before{content:"\\ec9e"}.bxs-alarm-off:before{content:"\\ec9f"}.bxs-alarm-snooze:before{content:"\\eca0"}.bxs-album:before{content:"\\eca1"}.bxs-ambulance:before{content:"\\eca2"}.bxs-analyse:before{content:"\\eca3"}.bxs-angry:before{content:"\\eca4"}.bxs-arch:before{content:"\\eca5"}.bxs-archive:before{content:"\\eca6"}.bxs-archive-in:before{content:"\\eca7"}.bxs-archive-out:before{content:"\\eca8"}.bxs-area:before{content:"\\eca9"}.bxs-arrow-from-bottom:before{content:"\\ecaa"}.bxs-arrow-from-left:before{content:"\\ecab"}.bxs-arrow-from-right:before{content:"\\ecac"}.bxs-arrow-from-top:before{content:"\\ecad"}.bxs-arrow-to-bottom:before{content:"\\ecae"}.bxs-arrow-to-left:before{content:"\\ecaf"}.bxs-arrow-to-right:before{content:"\\ecb0"}.bxs-arrow-to-top:before{content:"\\ecb1"}.bxs-award:before{content:"\\ecb2"}.bxs-baby-carriage:before{content:"\\ecb3"}.bxs-backpack:before{content:"\\ecb4"}.bxs-badge:before{content:"\\ecb5"}.bxs-badge-check:before{content:"\\ecb6"}.bxs-badge-dollar:before{content:"\\ecb7"}.bxs-ball:before{content:"\\ecb8"}.bxs-band-aid:before{content:"\\ecb9"}.bxs-bank:before{content:"\\ecba"}.bxs-bar-chart-alt-2:before{content:"\\ecbb"}.bxs-bar-chart-square:before{content:"\\ecbc"}.bxs-barcode:before{content:"\\ecbd"}.bxs-baseball:before{content:"\\ecbe"}.bxs-basket:before{content:"\\ecbf"}.bxs-basketball:before{content:"\\ecc0"}.bxs-bath:before{content:"\\ecc1"}.bxs-battery:before{content:"\\ecc2"}.bxs-battery-charging:before{content:"\\ecc3"}.bxs-battery-full:before{content:"\\ecc4"}.bxs-battery-low:before{content:"\\ecc5"}.bxs-bed:before{content:"\\ecc6"}.bxs-been-here:before{content:"\\ecc7"}.bxs-beer:before{content:"\\ecc8"}.bxs-bell:before{content:"\\ecc9"}.bxs-bell-minus:before{content:"\\ecca"}.bxs-bell-off:before{content:"\\eccb"}.bxs-bell-plus:before{content:"\\eccc"}.bxs-bell-ring:before{content:"\\eccd"}.bxs-bible:before{content:"\\ecce"}.bxs-binoculars:before{content:"\\eccf"}.bxs-blanket:before{content:"\\ecd0"}.bxs-bolt:before{content:"\\ecd1"}.bxs-bolt-circle:before{content:"\\ecd2"}.bxs-bomb:before{content:"\\ecd3"}.bxs-bone:before{content:"\\ecd4"}.bxs-bong:before{content:"\\ecd5"}.bxs-book:before{content:"\\ecd6"}.bxs-book-add:before{content:"\\ecd7"}.bxs-book-alt:before{content:"\\ecd8"}.bxs-book-bookmark:before{content:"\\ecd9"}.bxs-book-content:before{content:"\\ecda"}.bxs-book-heart:before{content:"\\ecdb"}.bxs-bookmark:before{content:"\\ecdc"}.bxs-bookmark-alt:before{content:"\\ecdd"}.bxs-bookmark-alt-minus:before{content:"\\ecde"}.bxs-bookmark-alt-plus:before{content:"\\ecdf"}.bxs-bookmark-heart:before{content:"\\ece0"}.bxs-bookmark-minus:before{content:"\\ece1"}.bxs-bookmark-plus:before{content:"\\ece2"}.bxs-bookmarks:before{content:"\\ece3"}.bxs-bookmark-star:before{content:"\\ece4"}.bxs-book-open:before{content:"\\ece5"}.bxs-book-reader:before{content:"\\ece6"}.bxs-bot:before{content:"\\ece7"}.bxs-bowling-ball:before{content:"\\ece8"}.bxs-box:before{content:"\\ece9"}.bxs-brain:before{content:"\\ecea"}.bxs-briefcase:before{content:"\\eceb"}.bxs-briefcase-alt:before{content:"\\ecec"}.bxs-briefcase-alt-2:before{content:"\\eced"}.bxs-brightness:before{content:"\\ecee"}.bxs-brightness-half:before{content:"\\ecef"}.bxs-brush:before{content:"\\ecf0"}.bxs-brush-alt:before{content:"\\ecf1"}.bxs-bug:before{content:"\\ecf2"}.bxs-bug-alt:before{content:"\\ecf3"}.bxs-building:before{content:"\\ecf4"}.bxs-building-house:before{content:"\\ecf5"}.bxs-buildings:before{content:"\\ecf6"}.bxs-bulb:before{content:"\\ecf7"}.bxs-bullseye:before{content:"\\ecf8"}.bxs-buoy:before{content:"\\ecf9"}.bxs-bus:before{content:"\\ecfa"}.bxs-business:before{content:"\\ecfb"}.bxs-bus-school:before{content:"\\ecfc"}.bxs-cabinet:before{content:"\\ecfd"}.bxs-cake:before{content:"\\ecfe"}.bxs-calculator:before{content:"\\ecff"}.bxs-calendar:before{content:"\\ed00"}.bxs-calendar-alt:before{content:"\\ed01"}.bxs-calendar-check:before{content:"\\ed02"}.bxs-calendar-edit:before{content:"\\ed03"}.bxs-calendar-event:before{content:"\\ed04"}.bxs-calendar-exclamation:before{content:"\\ed05"}.bxs-calendar-heart:before{content:"\\ed06"}.bxs-calendar-minus:before{content:"\\ed07"}.bxs-calendar-plus:before{content:"\\ed08"}.bxs-calendar-star:before{content:"\\ed09"}.bxs-calendar-week:before{content:"\\ed0a"}.bxs-calendar-x:before{content:"\\ed0b"}.bxs-camera:before{content:"\\ed0c"}.bxs-camera-home:before{content:"\\ed0d"}.bxs-camera-movie:before{content:"\\ed0e"}.bxs-camera-off:before{content:"\\ed0f"}.bxs-camera-plus:before{content:"\\ed10"}.bxs-capsule:before{content:"\\ed11"}.bxs-captions:before{content:"\\ed12"}.bxs-car:before{content:"\\ed13"}.bxs-car-battery:before{content:"\\ed14"}.bxs-car-crash:before{content:"\\ed15"}.bxs-card:before{content:"\\ed16"}.bxs-caret-down-circle:before{content:"\\ed17"}.bxs-caret-down-square:before{content:"\\ed18"}.bxs-caret-left-circle:before{content:"\\ed19"}.bxs-caret-left-square:before{content:"\\ed1a"}.bxs-caret-right-circle:before{content:"\\ed1b"}.bxs-caret-right-square:before{content:"\\ed1c"}.bxs-caret-up-circle:before{content:"\\ed1d"}.bxs-caret-up-square:before{content:"\\ed1e"}.bxs-car-garage:before{content:"\\ed1f"}.bxs-car-mechanic:before{content:"\\ed20"}.bxs-carousel:before{content:"\\ed21"}.bxs-cart:before{content:"\\ed22"}.bxs-cart-add:before{content:"\\ed23"}.bxs-cart-alt:before{content:"\\ed24"}.bxs-cart-download:before{content:"\\ed25"}.bxs-car-wash:before{content:"\\ed26"}.bxs-category:before{content:"\\ed27"}.bxs-category-alt:before{content:"\\ed28"}.bxs-cctv:before{content:"\\ed29"}.bxs-certification:before{content:"\\ed2a"}.bxs-chalkboard:before{content:"\\ed2b"}.bxs-chart:before{content:"\\ed2c"}.bxs-chat:before{content:"\\ed2d"}.bxs-checkbox:before{content:"\\ed2e"}.bxs-checkbox-checked:before{content:"\\ed2f"}.bxs-checkbox-minus:before{content:"\\ed30"}.bxs-check-circle:before{content:"\\ed31"}.bxs-check-shield:before{content:"\\ed32"}.bxs-check-square:before{content:"\\ed33"}.bxs-chess:before{content:"\\ed34"}.bxs-chevron-down:before{content:"\\ed35"}.bxs-chevron-down-circle:before{content:"\\ed36"}.bxs-chevron-down-square:before{content:"\\ed37"}.bxs-chevron-left:before{content:"\\ed38"}.bxs-chevron-left-circle:before{content:"\\ed39"}.bxs-chevron-left-square:before{content:"\\ed3a"}.bxs-chevron-right:before{content:"\\ed3b"}.bxs-chevron-right-circle:before{content:"\\ed3c"}.bxs-chevron-right-square:before{content:"\\ed3d"}.bxs-chevrons-down:before{content:"\\ed3e"}.bxs-chevrons-left:before{content:"\\ed3f"}.bxs-chevrons-right:before{content:"\\ed40"}.bxs-chevrons-up:before{content:"\\ed41"}.bxs-chevron-up:before{content:"\\ed42"}.bxs-chevron-up-circle:before{content:"\\ed43"}.bxs-chevron-up-square:before{content:"\\ed44"}.bxs-chip:before{content:"\\ed45"}.bxs-church:before{content:"\\ed46"}.bxs-circle:before{content:"\\ed47"}.bxs-city:before{content:"\\ed48"}.bxs-clinic:before{content:"\\ed49"}.bxs-cloud:before{content:"\\ed4a"}.bxs-cloud-download:before{content:"\\ed4b"}.bxs-cloud-lightning:before{content:"\\ed4c"}.bxs-cloud-rain:before{content:"\\ed4d"}.bxs-cloud-upload:before{content:"\\ed4e"}.bxs-coffee:before{content:"\\ed4f"}.bxs-coffee-alt:before{content:"\\ed50"}.bxs-coffee-togo:before{content:"\\ed51"}.bxs-cog:before{content:"\\ed52"}.bxs-coin:before{content:"\\ed53"}.bxs-coin-stack:before{content:"\\ed54"}.bxs-collection:before{content:"\\ed55"}.bxs-color-fill:before{content:"\\ed56"}.bxs-comment:before{content:"\\ed57"}.bxs-comment-add:before{content:"\\ed58"}.bxs-comment-check:before{content:"\\ed59"}.bxs-comment-detail:before{content:"\\ed5a"}.bxs-comment-dots:before{content:"\\ed5b"}.bxs-comment-edit:before{content:"\\ed5c"}.bxs-comment-error:before{content:"\\ed5d"}.bxs-comment-minus:before{content:"\\ed5e"}.bxs-comment-x:before{content:"\\ed5f"}.bxs-compass:before{content:"\\ed60"}.bxs-component:before{content:"\\ed61"}.bxs-confused:before{content:"\\ed62"}.bxs-contact:before{content:"\\ed63"}.bxs-conversation:before{content:"\\ed64"}.bxs-cookie:before{content:"\\ed65"}.bxs-cool:before{content:"\\ed66"}.bxs-copy:before{content:"\\ed67"}.bxs-copy-alt:before{content:"\\ed68"}.bxs-copyright:before{content:"\\ed69"}.bxs-coupon:before{content:"\\ed6a"}.bxs-credit-card:before{content:"\\ed6b"}.bxs-credit-card-alt:before{content:"\\ed6c"}.bxs-credit-card-front:before{content:"\\ed6d"}.bxs-crop:before{content:"\\ed6e"}.bxs-crown:before{content:"\\ed6f"}.bxs-cube:before{content:"\\ed70"}.bxs-cube-alt:before{content:"\\ed71"}.bxs-cuboid:before{content:"\\ed72"}.bxs-customize:before{content:"\\ed73"}.bxs-cylinder:before{content:"\\ed74"}.bxs-dashboard:before{content:"\\ed75"}.bxs-data:before{content:"\\ed76"}.bxs-detail:before{content:"\\ed77"}.bxs-devices:before{content:"\\ed78"}.bxs-diamond:before{content:"\\ed79"}.bxs-dice-1:before{content:"\\ed7a"}.bxs-dice-2:before{content:"\\ed7b"}.bxs-dice-3:before{content:"\\ed7c"}.bxs-dice-4:before{content:"\\ed7d"}.bxs-dice-5:before{content:"\\ed7e"}.bxs-dice-6:before{content:"\\ed7f"}.bxs-direction-left:before{content:"\\ed80"}.bxs-direction-right:before{content:"\\ed81"}.bxs-directions:before{content:"\\ed82"}.bxs-disc:before{content:"\\ed83"}.bxs-discount:before{content:"\\ed84"}.bxs-dish:before{content:"\\ed85"}.bxs-dislike:before{content:"\\ed86"}.bxs-dizzy:before{content:"\\ed87"}.bxs-dock-bottom:before{content:"\\ed88"}.bxs-dock-left:before{content:"\\ed89"}.bxs-dock-right:before{content:"\\ed8a"}.bxs-dock-top:before{content:"\\ed8b"}.bxs-dollar-circle:before{content:"\\ed8c"}.bxs-donate-blood:before{content:"\\ed8d"}.bxs-donate-heart:before{content:"\\ed8e"}.bxs-door-open:before{content:"\\ed8f"}.bxs-doughnut-chart:before{content:"\\ed90"}.bxs-down-arrow:before{content:"\\ed91"}.bxs-down-arrow-alt:before{content:"\\ed92"}.bxs-down-arrow-circle:before{content:"\\ed93"}.bxs-down-arrow-square:before{content:"\\ed94"}.bxs-download:before{content:"\\ed95"}.bxs-downvote:before{content:"\\ed96"}.bxs-drink:before{content:"\\ed97"}.bxs-droplet-half:before{content:"\\ed98"}.bxs-dryer:before{content:"\\ed99"}.bxs-duplicate:before{content:"\\ed9a"}.bxs-edit:before{content:"\\ed9b"}.bxs-edit-alt:before{content:"\\ed9c"}.bxs-edit-location:before{content:"\\ed9d"}.bxs-eject:before{content:"\\ed9e"}.bxs-envelope:before{content:"\\ed9f"}.bxs-envelope-open:before{content:"\\eda0"}.bxs-eraser:before{content:"\\eda1"}.bxs-error:before{content:"\\eda2"}.bxs-error-alt:before{content:"\\eda3"}.bxs-error-circle:before{content:"\\eda4"}.bxs-ev-station:before{content:"\\eda5"}.bxs-exit:before{content:"\\eda6"}.bxs-extension:before{content:"\\eda7"}.bxs-eyedropper:before{content:"\\eda8"}.bxs-face:before{content:"\\eda9"}.bxs-face-mask:before{content:"\\edaa"}.bxs-factory:before{content:"\\edab"}.bxs-fast-forward-circle:before{content:"\\edac"}.bxs-file:before{content:"\\edad"}.bxs-file-archive:before{content:"\\edae"}.bxs-file-blank:before{content:"\\edaf"}.bxs-file-css:before{content:"\\edb0"}.bxs-file-doc:before{content:"\\edb1"}.bxs-file-export:before{content:"\\edb2"}.bxs-file-find:before{content:"\\edb3"}.bxs-file-gif:before{content:"\\edb4"}.bxs-file-html:before{content:"\\edb5"}.bxs-file-image:before{content:"\\edb6"}.bxs-file-import:before{content:"\\edb7"}.bxs-file-jpg:before{content:"\\edb8"}.bxs-file-js:before{content:"\\edb9"}.bxs-file-json:before{content:"\\edba"}.bxs-file-md:before{content:"\\edbb"}.bxs-file-pdf:before{content:"\\edbc"}.bxs-file-plus:before{content:"\\edbd"}.bxs-file-png:before{content:"\\edbe"}.bxs-file-txt:before{content:"\\edbf"}.bxs-film:before{content:"\\edc0"}.bxs-filter-alt:before{content:"\\edc1"}.bxs-first-aid:before{content:"\\edc2"}.bxs-flag:before{content:"\\edc3"}.bxs-flag-alt:before{content:"\\edc4"}.bxs-flag-checkered:before{content:"\\edc5"}.bxs-flame:before{content:"\\edc6"}.bxs-flask:before{content:"\\edc7"}.bxs-florist:before{content:"\\edc8"}.bxs-folder:before{content:"\\edc9"}.bxs-folder-minus:before{content:"\\edca"}.bxs-folder-open:before{content:"\\edcb"}.bxs-folder-plus:before{content:"\\edcc"}.bxs-food-menu:before{content:"\\edcd"}.bxs-fridge:before{content:"\\edce"}.bxs-game:before{content:"\\edcf"}.bxs-gas-pump:before{content:"\\edd0"}.bxs-ghost:before{content:"\\edd1"}.bxs-gift:before{content:"\\edd2"}.bxs-graduation:before{content:"\\edd3"}.bxs-grid:before{content:"\\edd4"}.bxs-grid-alt:before{content:"\\edd5"}.bxs-group:before{content:"\\edd6"}.bxs-guitar-amp:before{content:"\\edd7"}.bxs-hand:before{content:"\\edd8"}.bxs-hand-down:before{content:"\\edd9"}.bxs-hand-left:before{content:"\\edda"}.bxs-hand-right:before{content:"\\eddb"}.bxs-hand-up:before{content:"\\eddc"}.bxs-happy:before{content:"\\eddd"}.bxs-happy-alt:before{content:"\\edde"}.bxs-happy-beaming:before{content:"\\eddf"}.bxs-happy-heart-eyes:before{content:"\\ede0"}.bxs-hdd:before{content:"\\ede1"}.bxs-heart:before{content:"\\ede2"}.bxs-heart-circle:before{content:"\\ede3"}.bxs-heart-square:before{content:"\\ede4"}.bxs-help-circle:before{content:"\\ede5"}.bxs-hide:before{content:"\\ede6"}.bxs-home:before{content:"\\ede7"}.bxs-home-circle:before{content:"\\ede8"}.bxs-home-heart:before{content:"\\ede9"}.bxs-home-smile:before{content:"\\edea"}.bxs-hotel:before{content:"\\edeb"}.bxs-hourglass:before{content:"\\edec"}.bxs-hourglass-bottom:before{content:"\\eded"}.bxs-hourglass-top:before{content:"\\edee"}.bxs-id-card:before{content:"\\edef"}.bxs-image:before{content:"\\edf0"}.bxs-image-add:before{content:"\\edf1"}.bxs-image-alt:before{content:"\\edf2"}.bxs-inbox:before{content:"\\edf3"}.bxs-info-circle:before{content:"\\edf4"}.bxs-info-square:before{content:"\\edf5"}.bxs-institution:before{content:"\\edf6"}.bxs-joystick:before{content:"\\edf7"}.bxs-joystick-alt:before{content:"\\edf8"}.bxs-joystick-button:before{content:"\\edf9"}.bxs-key:before{content:"\\edfa"}.bxs-keyboard:before{content:"\\edfb"}.bxs-label:before{content:"\\edfc"}.bxs-landmark:before{content:"\\edfd"}.bxs-landscape:before{content:"\\edfe"}.bxs-laugh:before{content:"\\edff"}.bxs-layer:before{content:"\\ee00"}.bxs-layer-minus:before{content:"\\ee01"}.bxs-layer-plus:before{content:"\\ee02"}.bxs-layout:before{content:"\\ee03"}.bxs-left-arrow:before{content:"\\ee04"}.bxs-left-arrow-alt:before{content:"\\ee05"}.bxs-left-arrow-circle:before{content:"\\ee06"}.bxs-left-arrow-square:before{content:"\\ee07"}.bxs-left-down-arrow-circle:before{content:"\\ee08"}.bxs-left-top-arrow-circle:before{content:"\\ee09"}.bxs-like:before{content:"\\ee0a"}.bxs-location-plus:before{content:"\\ee0b"}.bxs-lock:before{content:"\\ee0c"}.bxs-lock-alt:before{content:"\\ee0d"}.bxs-lock-open:before{content:"\\ee0e"}.bxs-lock-open-alt:before{content:"\\ee0f"}.bxs-log-in:before{content:"\\ee10"}.bxs-log-in-circle:before{content:"\\ee11"}.bxs-log-out:before{content:"\\ee12"}.bxs-log-out-circle:before{content:"\\ee13"}.bxs-low-vision:before{content:"\\ee14"}.bxs-magic-wand:before{content:"\\ee15"}.bxs-magnet:before{content:"\\ee16"}.bxs-map:before{content:"\\ee17"}.bxs-map-alt:before{content:"\\ee18"}.bxs-map-pin:before{content:"\\ee19"}.bxs-mask:before{content:"\\ee1a"}.bxs-medal:before{content:"\\ee1b"}.bxs-megaphone:before{content:"\\ee1c"}.bxs-meh:before{content:"\\ee1d"}.bxs-meh-alt:before{content:"\\ee1e"}.bxs-meh-blank:before{content:"\\ee1f"}.bxs-memory-card:before{content:"\\ee20"}.bxs-message:before{content:"\\ee21"}.bxs-message-add:before{content:"\\ee22"}.bxs-message-alt:before{content:"\\ee23"}.bxs-message-alt-add:before{content:"\\ee24"}.bxs-message-alt-check:before{content:"\\ee25"}.bxs-message-alt-detail:before{content:"\\ee26"}.bxs-message-alt-dots:before{content:"\\ee27"}.bxs-message-alt-edit:before{content:"\\ee28"}.bxs-message-alt-error:before{content:"\\ee29"}.bxs-message-alt-minus:before{content:"\\ee2a"}.bxs-message-alt-x:before{content:"\\ee2b"}.bxs-message-check:before{content:"\\ee2c"}.bxs-message-detail:before{content:"\\ee2d"}.bxs-message-dots:before{content:"\\ee2e"}.bxs-message-edit:before{content:"\\ee2f"}.bxs-message-error:before{content:"\\ee30"}.bxs-message-minus:before{content:"\\ee31"}.bxs-message-rounded:before{content:"\\ee32"}.bxs-message-rounded-add:before{content:"\\ee33"}.bxs-message-rounded-check:before{content:"\\ee34"}.bxs-message-rounded-detail:before{content:"\\ee35"}.bxs-message-rounded-dots:before{content:"\\ee36"}.bxs-message-rounded-edit:before{content:"\\ee37"}.bxs-message-rounded-error:before{content:"\\ee38"}.bxs-message-rounded-minus:before{content:"\\ee39"}.bxs-message-rounded-x:before{content:"\\ee3a"}.bxs-message-square:before{content:"\\ee3b"}.bxs-message-square-add:before{content:"\\ee3c"}.bxs-message-square-check:before{content:"\\ee3d"}.bxs-message-square-detail:before{content:"\\ee3e"}.bxs-message-square-dots:before{content:"\\ee3f"}.bxs-message-square-edit:before{content:"\\ee40"}.bxs-message-square-error:before{content:"\\ee41"}.bxs-message-square-minus:before{content:"\\ee42"}.bxs-message-square-x:before{content:"\\ee43"}.bxs-message-x:before{content:"\\ee44"}.bxs-meteor:before{content:"\\ee45"}.bxs-microchip:before{content:"\\ee46"}.bxs-microphone:before{content:"\\ee47"}.bxs-microphone-alt:before{content:"\\ee48"}.bxs-microphone-off:before{content:"\\ee49"}.bxs-minus-circle:before{content:"\\ee4a"}.bxs-minus-square:before{content:"\\ee4b"}.bxs-mobile:before{content:"\\ee4c"}.bxs-mobile-vibration:before{content:"\\ee4d"}.bxs-moon:before{content:"\\ee4e"}.bxs-mouse:before{content:"\\ee4f"}.bxs-mouse-alt:before{content:"\\ee50"}.bxs-movie:before{content:"\\ee51"}.bxs-movie-play:before{content:"\\ee52"}.bxs-music:before{content:"\\ee53"}.bxs-navigation:before{content:"\\ee54"}.bxs-network-chart:before{content:"\\ee55"}.bxs-news:before{content:"\\ee56"}.bxs-no-entry:before{content:"\\ee57"}.bxs-note:before{content:"\\ee58"}.bxs-notepad:before{content:"\\ee59"}.bxs-notification:before{content:"\\ee5a"}.bxs-notification-off:before{content:"\\ee5b"}.bxs-offer:before{content:"\\ee5c"}.bxs-package:before{content:"\\ee5d"}.bxs-paint:before{content:"\\ee5e"}.bxs-paint-roll:before{content:"\\ee5f"}.bxs-palette:before{content:"\\ee60"}.bxs-paper-plane:before{content:"\\ee61"}.bxs-parking:before{content:"\\ee62"}.bxs-paste:before{content:"\\ee63"}.bxs-pen:before{content:"\\ee64"}.bxs-pencil:before{content:"\\ee65"}.bxs-phone:before{content:"\\ee66"}.bxs-phone-call:before{content:"\\ee67"}.bxs-phone-incoming:before{content:"\\ee68"}.bxs-phone-off:before{content:"\\ee69"}.bxs-phone-outgoing:before{content:"\\ee6a"}.bxs-photo-album:before{content:"\\ee6b"}.bxs-piano:before{content:"\\ee6c"}.bxs-pie-chart:before{content:"\\ee6d"}.bxs-pie-chart-alt:before{content:"\\ee6e"}.bxs-pie-chart-alt-2:before{content:"\\ee6f"}.bxs-pin:before{content:"\\ee70"}.bxs-pizza:before{content:"\\ee71"}.bxs-plane:before{content:"\\ee72"}.bxs-plane-alt:before{content:"\\ee73"}.bxs-plane-land:before{content:"\\ee74"}.bxs-planet:before{content:"\\ee75"}.bxs-plane-take-off:before{content:"\\ee76"}.bxs-playlist:before{content:"\\ee77"}.bxs-plug:before{content:"\\ee78"}.bxs-plus-circle:before{content:"\\ee79"}.bxs-plus-square:before{content:"\\ee7a"}.bxs-pointer:before{content:"\\ee7b"}.bxs-polygon:before{content:"\\ee7c"}.bxs-printer:before{content:"\\ee7d"}.bxs-purchase-tag:before{content:"\\ee7e"}.bxs-purchase-tag-alt:before{content:"\\ee7f"}.bxs-pyramid:before{content:"\\ee80"}.bxs-quote-alt-left:before{content:"\\ee81"}.bxs-quote-alt-right:before{content:"\\ee82"}.bxs-quote-left:before{content:"\\ee83"}.bxs-quote-right:before{content:"\\ee84"}.bxs-quote-single-left:before{content:"\\ee85"}.bxs-quote-single-right:before{content:"\\ee86"}.bxs-radiation:before{content:"\\ee87"}.bxs-radio:before{content:"\\ee88"}.bxs-receipt:before{content:"\\ee89"}.bxs-rectangle:before{content:"\\ee8a"}.bxs-registered:before{content:"\\ee8b"}.bxs-rename:before{content:"\\ee8c"}.bxs-report:before{content:"\\ee8d"}.bxs-rewind-circle:before{content:"\\ee8e"}.bxs-right-arrow:before{content:"\\ee8f"}.bxs-right-arrow-alt:before{content:"\\ee90"}.bxs-right-arrow-circle:before{content:"\\ee91"}.bxs-right-arrow-square:before{content:"\\ee92"}.bxs-right-down-arrow-circle:before{content:"\\ee93"}.bxs-right-top-arrow-circle:before{content:"\\ee94"}.bxs-rocket:before{content:"\\ee95"}.bxs-ruler:before{content:"\\ee96"}.bxs-sad:before{content:"\\ee97"}.bxs-save:before{content:"\\ee98"}.bxs-school:before{content:"\\ee99"}.bxs-search:before{content:"\\ee9a"}.bxs-search-alt-2:before{content:"\\ee9b"}.bxs-select-multiple:before{content:"\\ee9c"}.bxs-send:before{content:"\\ee9d"}.bxs-server:before{content:"\\ee9e"}.bxs-shapes:before{content:"\\ee9f"}.bxs-share:before{content:"\\eea0"}.bxs-share-alt:before{content:"\\eea1"}.bxs-shield:before{content:"\\eea2"}.bxs-shield-alt-2:before{content:"\\eea3"}.bxs-shield-x:before{content:"\\eea4"}.bxs-ship:before{content:"\\eea5"}.bxs-shocked:before{content:"\\eea6"}.bxs-shopping-bag:before{content:"\\eea7"}.bxs-shopping-bag-alt:before{content:"\\eea8"}.bxs-shopping-bags:before{content:"\\eea9"}.bxs-show:before{content:"\\eeaa"}.bxs-skip-next-circle:before{content:"\\eeab"}.bxs-skip-previous-circle:before{content:"\\eeac"}.bxs-skull:before{content:"\\eead"}.bxs-sleepy:before{content:"\\eeae"}.bxs-slideshow:before{content:"\\eeaf"}.bxs-smile:before{content:"\\eeb0"}.bxs-sort-alt:before{content:"\\eeb1"}.bxs-spa:before{content:"\\eeb2"}.bxs-speaker:before{content:"\\eeb3"}.bxs-spray-can:before{content:"\\eeb4"}.bxs-spreadsheet:before{content:"\\eeb5"}.bxs-square:before{content:"\\eeb6"}.bxs-square-rounded:before{content:"\\eeb7"}.bxs-star:before{content:"\\eeb8"}.bxs-star-half:before{content:"\\eeb9"}.bxs-sticker:before{content:"\\eeba"}.bxs-stopwatch:before{content:"\\eebb"}.bxs-store:before{content:"\\eebc"}.bxs-store-alt:before{content:"\\eebd"}.bxs-sun:before{content:"\\eebe"}.bxs-tachometer:before{content:"\\eebf"}.bxs-tag:before{content:"\\eec0"}.bxs-tag-alt:before{content:"\\eec1"}.bxs-tag-x:before{content:"\\eec2"}.bxs-taxi:before{content:"\\eec3"}.bxs-tennis-ball:before{content:"\\eec4"}.bxs-terminal:before{content:"\\eec5"}.bxs-thermometer:before{content:"\\eec6"}.bxs-time:before{content:"\\eec7"}.bxs-time-five:before{content:"\\eec8"}.bxs-timer:before{content:"\\eec9"}.bxs-tired:before{content:"\\eeca"}.bxs-toggle-left:before{content:"\\eecb"}.bxs-toggle-right:before{content:"\\eecc"}.bxs-tone:before{content:"\\eecd"}.bxs-torch:before{content:"\\eece"}.bxs-to-top:before{content:"\\eecf"}.bxs-traffic:before{content:"\\eed0"}.bxs-traffic-barrier:before{content:"\\eed1"}.bxs-traffic-cone:before{content:"\\eed2"}.bxs-train:before{content:"\\eed3"}.bxs-trash:before{content:"\\eed4"}.bxs-trash-alt:before{content:"\\eed5"}.bxs-tree:before{content:"\\eed6"}.bxs-trophy:before{content:"\\eed7"}.bxs-truck:before{content:"\\eed8"}.bxs-t-shirt:before{content:"\\eed9"}.bxs-tv:before{content:"\\eeda"}.bxs-up-arrow:before{content:"\\eedb"}.bxs-up-arrow-alt:before{content:"\\eedc"}.bxs-up-arrow-circle:before{content:"\\eedd"}.bxs-up-arrow-square:before{content:"\\eede"}.bxs-upside-down:before{content:"\\eedf"}.bxs-upvote:before{content:"\\eee0"}.bxs-user:before{content:"\\eee1"}.bxs-user-account:before{content:"\\eee2"}.bxs-user-badge:before{content:"\\eee3"}.bxs-user-check:before{content:"\\eee4"}.bxs-user-circle:before{content:"\\eee5"}.bxs-user-detail:before{content:"\\eee6"}.bxs-user-minus:before{content:"\\eee7"}.bxs-user-pin:before{content:"\\eee8"}.bxs-user-plus:before{content:"\\eee9"}.bxs-user-rectangle:before{content:"\\eeea"}.bxs-user-voice:before{content:"\\eeeb"}.bxs-user-x:before{content:"\\eeec"}.bxs-vector:before{content:"\\eeed"}.bxs-vial:before{content:"\\eeee"}.bxs-video:before{content:"\\eeef"}.bxs-video-off:before{content:"\\eef0"}.bxs-video-plus:before{content:"\\eef1"}.bxs-video-recording:before{content:"\\eef2"}.bxs-videos:before{content:"\\eef3"}.bxs-virus:before{content:"\\eef4"}.bxs-virus-block:before{content:"\\eef5"}.bxs-volume:before{content:"\\eef6"}.bxs-volume-full:before{content:"\\eef7"}.bxs-volume-low:before{content:"\\eef8"}.bxs-volume-mute:before{content:"\\eef9"}.bxs-wallet:before{content:"\\eefa"}.bxs-wallet-alt:before{content:"\\eefb"}.bxs-washer:before{content:"\\eefc"}.bxs-watch:before{content:"\\eefd"}.bxs-watch-alt:before{content:"\\eefe"}.bxs-webcam:before{content:"\\eeff"}.bxs-widget:before{content:"\\ef00"}.bxs-window-alt:before{content:"\\ef01"}.bxs-wine:before{content:"\\ef02"}.bxs-wink-smile:before{content:"\\ef03"}.bxs-wink-tongue:before{content:"\\ef04"}.bxs-wrench:before{content:"\\ef05"}.bxs-x-circle:before{content:"\\ef06"}.bxs-x-square:before{content:"\\ef07"}.bxs-yin-yang:before{content:"\\ef08"}.bxs-zap:before{content:"\\ef09"}.bxs-zoom-in:before{content:"\\ef0a"}.bxs-zoom-out:before{content:"\\ef0b"}`)();
var flatpickr = /* @__PURE__ */ (() => `.flatpickr-calendar {
  background: transparent;
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  -webkit-animation: none;
          animation: none;
  direction: ltr;
  border: 0;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;
  position: absolute;
  width: 307.875px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  background: #fff;
  -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);
          box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);
}
.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}
.flatpickr-calendar.open {
  display: inline-block;
  z-index: 99999;
}
.flatpickr-calendar.animate.open {
  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}
.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}
.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
}
.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}
.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid #e6e6e6;
}
.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}
.flatpickr-calendar:before,
.flatpickr-calendar:after {
  position: absolute;
  display: block;
  pointer-events: none;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  left: 22px;
}
.flatpickr-calendar.rightMost:before,
.flatpickr-calendar.arrowRight:before,
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.arrowRight:after {
  left: auto;
  right: 22px;
}
.flatpickr-calendar.arrowCenter:before,
.flatpickr-calendar.arrowCenter:after {
  left: 50%;
  right: 50%;
}
.flatpickr-calendar:before {
  border-width: 5px;
  margin: 0 -5px;
}
.flatpickr-calendar:after {
  border-width: 4px;
  margin: 0 -4px;
}
.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  bottom: 100%;
}
.flatpickr-calendar.arrowTop:before {
  border-bottom-color: #e6e6e6;
}
.flatpickr-calendar.arrowTop:after {
  border-bottom-color: #fff;
}
.flatpickr-calendar.arrowBottom:before,
.flatpickr-calendar.arrowBottom:after {
  top: 100%;
}
.flatpickr-calendar.arrowBottom:before {
  border-top-color: #e6e6e6;
}
.flatpickr-calendar.arrowBottom:after {
  border-top-color: #fff;
}
.flatpickr-calendar:focus {
  outline: 0;
}
.flatpickr-wrapper {
  position: relative;
  display: inline-block;
}
.flatpickr-months {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-months .flatpickr-month {
  background: transparent;
  color: rgba(0,0,0,0.9);
  fill: rgba(0,0,0,0.9);
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  overflow: hidden;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 3;
  color: rgba(0,0,0,0.9);
  fill: rgba(0,0,0,0.9);
}
.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}
.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}
.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  left: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  right: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: #959ea9;
}
.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: #f64747;
}
.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
}
.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  -webkit-transition: fill 0.1s;
  transition: fill 0.1s;
  fill: inherit;
}
.numInputWrapper {
  position: relative;
  height: auto;
}
.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}
.numInputWrapper input {
  width: 100%;
}
.numInputWrapper input::-ms-clear {
  display: none;
}
.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid rgba(57,57,57,0.15);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.numInputWrapper span:hover {
  background: rgba(0,0,0,0.1);
}
.numInputWrapper span:active {
  background: rgba(0,0,0,0.2);
}
.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}
.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}
.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid rgba(57,57,57,0.6);
  top: 26%;
}
.numInputWrapper span.arrowDown {
  top: 50%;
}
.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgba(57,57,57,0.6);
  top: 40%;
}
.numInputWrapper span svg {
  width: inherit;
  height: auto;
}
.numInputWrapper span svg path {
  fill: rgba(0,0,0,0.5);
}
.numInputWrapper:hover {
  background: rgba(0,0,0,0.05);
}
.numInputWrapper:hover span {
  opacity: 1;
}
.flatpickr-current-month {
  font-size: 135%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
}
.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}
.flatpickr-current-month span.cur-month:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0;
  display: inline-block;
}
.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: rgba(0,0,0,0.9);
}
.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: rgba(0,0,0,0.9);
}
.flatpickr-current-month input.cur-year {
  background: transparent;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}
.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: rgba(0,0,0,0.5);
  background: transparent;
  pointer-events: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: transparent;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: transparent;
  outline: none;
  padding: 0;
}
.flatpickr-weekdays {
  background: transparent;
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  height: 28px;
}
.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  background: transparent;
  color: rgba(0,0,0,0.54);
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-weight: bolder;
}
.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}
.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 307.875px;
}
.flatpickr-days:focus {
  outline: 0;
}
.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 307.875px;
  min-width: 307.875px;
  max-width: 307.875px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: inline-block;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-around;
          justify-content: space-around;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}
.dayContainer + .dayContainer {
  -webkit-box-shadow: -1px 0 0 #e6e6e6;
          box-shadow: -1px 0 0 #e6e6e6;
}
.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #393939;
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  -webkit-flex-basis: 14.2857143%;
      -ms-flex-preferred-size: 14.2857143%;
          flex-basis: 14.2857143%;
  max-width: 39px;
  height: 39px;
  line-height: 39px;
  margin: 0;
  display: inline-block;
  position: relative;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
}
.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: #e6e6e6;
  border-color: #e6e6e6;
}
.flatpickr-day.today {
  border-color: #959ea9;
}
.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: #959ea9;
  background: #959ea9;
  color: #fff;
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: #569ff7;
  -webkit-box-shadow: none;
          box-shadow: none;
  color: #fff;
  border-color: #569ff7;
}
.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}
.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}
.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  -webkit-box-shadow: -10px 0 0 #569ff7;
          box-shadow: -10px 0 0 #569ff7;
}
.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}
.flatpickr-day.inRange {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
          box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: rgba(57,57,57,0.3);
  background: transparent;
  border-color: transparent;
  cursor: default;
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: rgba(57,57,57,0.1);
}
.flatpickr-day.week.selected {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
          box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
}
.flatpickr-day.hidden {
  visibility: hidden;
}
.rangeMode .flatpickr-day {
  margin-top: 1px;
}
.flatpickr-weekwrapper {
  float: left;
}
.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
  -webkit-box-shadow: 1px 0 0 #e6e6e6;
          box-shadow: 1px 0 0 #e6e6e6;
}
.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}
.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: rgba(57,57,57,0.3);
  background: transparent;
  cursor: default;
  border: none;
}
.flatpickr-innerContainer {
  display: block;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
}
.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}
.flatpickr-time .numInputWrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}
.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: #393939;
}
.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: #393939;
}
.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}
.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}
.flatpickr-time input {
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  color: #393939;
  font-size: 14px;
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}
.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}
.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}
.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  color: #393939;
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
}
.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}
.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: #eee;
}
.flatpickr-input[readonly] {
  cursor: pointer;
}
@-webkit-keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
@keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
`)();
var _default = /* @__PURE__ */ (() => ".toggle-container{display:inline-block}.toggle-container:focus{outline:none;box-shadow:0 0 0 var(--toggle-ring-width,3px) var(--toggle-ring-color,rgba(16,185,129,.18823529411764706))}.toggle{display:flex;width:var(--toggle-width,3rem);height:var(--toggle-height,1.25rem);border-radius:999px;position:relative;cursor:pointer;transition:all .3s;align-items:center;box-sizing:content-box;border:var(--toggle-border,.125rem) solid;font-size:var(--toggle-font-size,.75rem);line-height:1}.toggle-on{background:var(--toggle-bg-on,#10b981);border-color:var(--toggle-border-on,#10b981);justify-content:flex-start;color:var(--toggle-text-on,#fff)}.toggle-off{background:var(--toggle-bg-off,#e5e7eb);border-color:var(--toggle-border-off,#e5e7eb);justify-content:flex-end;color:var(--toggle-text-off,#374151)}.toggle-on-disabled{background:var(--toggle-bg-on-disabled,#d1d5db);border-color:var(--toggle-border-on-disabled,#d1d5db);justify-content:flex-start;color:var(--toggle-text-on-disabled,#9ca3af);cursor:not-allowed}.toggle-off-disabled{background:var(--toggle-bg-off-disabled,#e5e7eb);border-color:var(--toggle-border-off-disabled,#e5e7eb);justify-content:flex-end;color:var(--toggle-text-off-disabled,#9ca3af);cursor:not-allowed}.toggle-handle{display:inline-block;background:var(--toggle-handle-enabled,#fff);width:var(--toggle-height,1.25rem);height:var(--toggle-height,1.25rem);top:0;border-radius:50%;position:absolute;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:var(--toggle-duration,.15s)}.toggle-handle-on{left:100%;transform:translateX(-100%)}.toggle-handle-off{left:0}.toggle-handle-on-disabled{left:100%;transform:translateX(-100%);background:var(--toggle-handle-disabled,#f3f4f6)}.toggle-handle-off-disabled{left:0;background:var(--toggle-handle-disabled,#f3f4f6)}.toggle-label{text-align:center;width:calc(var(--toggle-width, 3.25rem) - var(--toggle-height, 1.25rem));box-sizing:border-box;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}")();
var vue3Multiselect = /* @__PURE__ */ (() => '\n\n  fieldset[disabled] .multiselect {\n    pointer-events: none;\n  }\n\n  .multiselect__spinner {\n    position: absolute;\n    right: 1px;\n    top: 1px;\n    width: 48px;\n    height: 35px;\n    background: #fff;\n    display: block;\n  }\n\n  .multiselect__spinner::before,\n  .multiselect__spinner::after {\n    position: absolute;\n    content: "";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border-color: #41b883 transparent transparent;\n    border-style: solid;\n    border-width: 2px;\n    box-shadow: 0 0 0 1px transparent;\n  }\n\n  .multiselect__spinner::before {\n    -webkit-animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n            animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n\n  .multiselect__spinner::after {\n    -webkit-animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n            animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n\n  .multiselect__loading-enter-active,\n  .multiselect__loading-leave-active {\n    transition: opacity 0.4s ease-in-out;\n    opacity: 1;\n  }\n\n  .multiselect__loading-enter,\n  .multiselect__loading-leave-active {\n    opacity: 0;\n  }\n\n  .multiselect,\n  .multiselect__input,\n  .multiselect__single {\n    font-family: inherit;\n    font-size: 16px;\n    touch-action: manipulation;\n  }\n\n  .multiselect {\n    box-sizing: content-box;\n    display: block;\n    position: relative;\n    width: 100%;\n    min-height: 40px;\n    text-align: left;\n    color: #35495e;\n  }\n\n  .multiselect * {\n    box-sizing: border-box;\n  }\n\n  .multiselect:focus {\n    outline: none;\n  }\n\n  .multiselect--disabled {\n    background: #ededed;\n    pointer-events: none;\n    opacity: 0.6;\n  }\n\n  .multiselect--active {\n    z-index: 50;\n  }\n\n  .multiselect--active:not(.multiselect--above) .multiselect__current,\n  .multiselect--active:not(.multiselect--above) .multiselect__input,\n  .multiselect--active:not(.multiselect--above) .multiselect__tags {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  .multiselect--active .multiselect__select {\n    transform: rotateZ(180deg);\n  }\n\n  .multiselect--above.multiselect--active .multiselect__current,\n  .multiselect--above.multiselect--active .multiselect__input,\n  .multiselect--above.multiselect--active .multiselect__tags {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  .multiselect__input,\n  .multiselect__single {\n    position: relative;\n    display: inline-block;\n    min-height: 20px;\n    line-height: 20px;\n    border: none;\n    border-radius: 5px;\n    background: #fff;\n    padding: 0 0 0 5px;\n    width: calc(100%);\n    transition: border 0.1s ease;\n    box-sizing: border-box;\n    margin-bottom: 8px;\n    vertical-align: top;\n  }\n\n  .multiselect__input::-moz-placeholder {\n    color: #35495e;\n  }\n\n  .multiselect__input::placeholder {\n    color: #35495e;\n  }\n\n  .multiselect__tag ~ .multiselect__input,\n  .multiselect__tag ~ .multiselect__single {\n    width: auto;\n  }\n\n  .multiselect__input:hover,\n  .multiselect__single:hover {\n    border-color: #cfcfcf;\n  }\n\n  .multiselect__input:focus,\n  .multiselect__single:focus {\n    border-color: #a8a8a8;\n    outline: none;\n  }\n\n  .multiselect__single {\n    padding-left: 5px;\n    margin-bottom: 8px;\n  }\n\n  .multiselect__tags-wrap {\n    display: inline;\n  }\n\n  .multiselect__tags {\n    min-height: 40px;\n    display: block;\n    padding: 8px 40px 0 8px;\n    border-radius: 5px;\n    border: 1px solid #e8e8e8;\n    background: #fff;\n    font-size: 14px;\n  }\n\n  .multiselect__tag {\n    position: relative;\n    display: inline-block;\n    padding: 4px 26px 4px 10px;\n    border-radius: 5px;\n    margin-right: 10px;\n    color: #fff;\n    line-height: 1;\n    background: #41b883;\n    margin-bottom: 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 100%;\n    text-overflow: ellipsis;\n  }\n\n  .multiselect__tag-icon {\n    cursor: pointer;\n    margin-left: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-weight: 700;\n    font-style: initial;\n    width: 22px;\n    text-align: center;\n    line-height: 22px;\n    transition: all 0.2s ease;\n    border-radius: 5px;\n  }\n\n  .multiselect__tag-icon::after {\n    content: "\xD7";\n    color: #266d4d;\n    font-size: 14px;\n  }\n\n  .multiselect__tag-icon:focus::after,\n  .multiselect__tag-icon:hover::after {\n    color: white;\n  }\n\n  .multiselect__current {\n    line-height: 16px;\n    min-height: 40px;\n    box-sizing: border-box;\n    display: block;\n    overflow: hidden;\n    padding: 8px 12px 0;\n    padding-right: 30px;\n    white-space: nowrap;\n    margin: 0;\n    text-decoration: none;\n    border-radius: 5px;\n    border: 1px solid #e8e8e8;\n    cursor: pointer;\n  }\n\n  .multiselect__select {\n    line-height: 16px;\n    display: block;\n    position: absolute;\n    box-sizing: border-box;\n    width: 40px;\n    height: 38px;\n    right: 1px;\n    top: 1px;\n    padding: 4px 8px;\n    margin: 0;\n    text-decoration: none;\n    text-align: center;\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n\n  .multiselect__select::before {\n    position: relative;\n    right: 0;\n    top: 65%;\n    color: #999;\n    margin-top: 4px;\n    border-style: solid;\n    border-width: 5px 5px 0 5px;\n    border-color: #999 transparent transparent transparent;\n    content: "";\n  }\n\n  .multiselect__placeholder {\n    color: #adadad;\n    display: inline-block;\n    margin-bottom: 10px;\n    padding-top: 2px;\n  }\n\n  .multiselect--active .multiselect__placeholder {\n    display: none;\n  }\n\n  .multiselect__content-wrapper {\n    position: absolute;\n    display: block;\n    background: #fff;\n    width: 100%;\n    max-height: 240px;\n    overflow: auto;\n    border: 1px solid #e8e8e8;\n    border-top: none;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 50;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .multiselect__content {\n    list-style: none;\n    display: inline-block;\n    padding: 0;\n    margin: 0;\n    min-width: 100%;\n    vertical-align: top;\n  }\n\n  .multiselect--above .multiselect__content-wrapper {\n    bottom: 100%;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    border-top: 1px solid #e8e8e8;\n  }\n\n  .multiselect__content::-webkit-scrollbar {\n    display: none;\n  }\n\n  .multiselect__element {\n    display: block;\n  }\n\n  .multiselect__option {\n    display: block;\n    padding: 12px;\n    min-height: 40px;\n    line-height: 16px;\n    text-decoration: none;\n    text-transform: none;\n    vertical-align: middle;\n    position: relative;\n    cursor: pointer;\n    white-space: nowrap;\n  }\n\n  .multiselect__option::after {\n    top: 0;\n    right: 0;\n    position: absolute;\n    line-height: 40px;\n    padding-right: 12px;\n    padding-left: 20px;\n    font-size: 13px;\n  }\n\n  .multiselect__option--highlight {\n    background: #41b883;\n    outline: none;\n    color: white;\n  }\n\n  .multiselect__option--highlight::after {\n    content: attr(data-select);\n    background: #41b883;\n    color: white;\n  }\n\n  .multiselect__option--selected {\n    background: #f3f3f3;\n    color: #35495e;\n    font-weight: bold;\n  }\n\n  .multiselect__option--selected::after {\n    content: attr(data-selected);\n    color: silver;\n  }\n\n  .multiselect__option--selected.multiselect__option--highlight {\n    background: #ff6a6a;\n    color: #fff;\n  }\n\n  .multiselect__option--selected.multiselect__option--highlight::after {\n    background: #ff6a6a;\n    content: attr(data-deselect);\n    color: #fff;\n  }\n\n  .multiselect--disabled .multiselect__current,\n  .multiselect--disabled .multiselect__select {\n    background: #ededed;\n    color: #a6a6a6;\n  }\n\n  .multiselect__option--disabled {\n    background: #ededed !important;\n    color: #a6a6a6 !important;\n    cursor: text;\n    pointer-events: none;\n  }\n\n  .multiselect__option--group {\n    background: #ededed;\n    color: #35495e;\n  }\n\n  .multiselect__option--group.multiselect__option--highlight {\n    background: #35495e;\n    color: #fff;\n  }\n\n  .multiselect__option--group.multiselect__option--highlight::after {\n    background: #35495e;\n  }\n\n  .multiselect__option--disabled.multiselect__option--highlight {\n    background: #dedede;\n  }\n\n  .multiselect__option--group-selected.multiselect__option--highlight {\n    background: #ff6a6a;\n    color: #fff;\n  }\n\n  .multiselect__option--group-selected.multiselect__option--highlight::after {\n    background: #ff6a6a;\n    content: attr(data-deselect);\n    color: #fff;\n  }\n\n  .multiselect-enter-active,\n  .multiselect-leave-active {\n    transition: all 0.15s ease;\n  }\n\n  .multiselect-enter,\n  .multiselect-leave-active {\n    opacity: 0;\n  }\n\n  .multiselect__strong {\n    margin-bottom: 8px;\n    line-height: 20px;\n    display: inline-block;\n    vertical-align: top;\n  }\n\n  *[dir="rtl"] .multiselect {\n    text-align: right;\n  }\n\n  *[dir="rtl"] .multiselect__select {\n    right: auto;\n    left: 1px;\n  }\n\n  *[dir="rtl"] .multiselect__tags {\n    padding: 8px 8px 0 40px;\n  }\n\n  *[dir="rtl"] .multiselect__content {\n    text-align: right;\n  }\n\n  *[dir="rtl"] .multiselect__option::after {\n    right: auto;\n    left: 0;\n  }\n\n  *[dir="rtl"] .multiselect__clear {\n    right: auto;\n    left: 12px;\n  }\n\n  *[dir="rtl"] .multiselect__spinner {\n    right: auto;\n    left: 1px;\n  }\n\n  @-webkit-keyframes spinning {\n    from {\n      transform: rotate(0);\n    }\n\n    to {\n      transform: rotate(2turn);\n    }\n  }\n\n  @keyframes spinning {\n    from {\n      transform: rotate(0);\n    }\n\n    to {\n      transform: rotate(2turn);\n    }\n  }\n')();
const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "Laravel";
inertiaVue3.createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    if (name.includes("Modules")) {
      return function(t4) {
        return Promise.resolve().then(function() {
          return /* @__PURE__ */ _interopNamespace(require(t4));
        });
      }(`${name}.vue`);
    } else {
      return resolvePageComponent(`./Pages/${name}.vue`, { "./Pages/403.vue": () => Promise.resolve().then(function() {
        return _403$1;
      }), "./Pages/Dashboard.vue": () => Promise.resolve().then(function() {
        return Dashboard$1;
      }), "./Pages/PrivacyPolicy.vue": () => Promise.resolve().then(function() {
        return PrivacyPolicy$1;
      }), "./Pages/Resource.vue": () => Promise.resolve().then(function() {
        return Resource$1;
      }), "./Pages/TermsOfService.vue": () => Promise.resolve().then(function() {
        return TermsOfService$1;
      }), "./Pages/Welcome.vue": () => Promise.resolve().then(function() {
        return Welcome$1;
      }), "./Pages/API/Index.vue": () => Promise.resolve().then(function() {
        return Index$1;
      }), "./Pages/Auth/ConfirmPassword.vue": () => Promise.resolve().then(function() {
        return ConfirmPassword$1;
      }), "./Pages/Auth/ForgotPassword.vue": () => Promise.resolve().then(function() {
        return ForgotPassword$1;
      }), "./Pages/Auth/Login.vue": () => Promise.resolve().then(function() {
        return Login$1;
      }), "./Pages/Auth/Register.vue": () => Promise.resolve().then(function() {
        return Register$1;
      }), "./Pages/Auth/ResetPassword.vue": () => Promise.resolve().then(function() {
        return ResetPassword$1;
      }), "./Pages/Auth/TwoFactorChallenge.vue": () => Promise.resolve().then(function() {
        return TwoFactorChallenge$1;
      }), "./Pages/Auth/VerifyEmail.vue": () => Promise.resolve().then(function() {
        return VerifyEmail$1;
      }), "./Pages/Profile/Show.vue": () => Promise.resolve().then(function() {
        return Show$3;
      }), "./Pages/Teams/Create.vue": () => Promise.resolve().then(function() {
        return Create$1;
      }), "./Pages/Teams/Show.vue": () => Promise.resolve().then(function() {
        return Show$1;
      }), "./Pages/UserNotification/List.vue": () => Promise.resolve().then(function() {
        return List$1;
      }), "./Pages/API/Partials/ApiTokenManager.vue": () => Promise.resolve().then(function() {
        return ApiTokenManager$1;
      }), "./Pages/Profile/Partials/DeleteUserForm.vue": () => Promise.resolve().then(function() {
        return DeleteUserForm$1;
      }), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": () => Promise.resolve().then(function() {
        return LogoutOtherBrowserSessionsForm$1;
      }), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": () => Promise.resolve().then(function() {
        return TwoFactorAuthenticationForm$1;
      }), "./Pages/Profile/Partials/UpdatePasswordForm.vue": () => Promise.resolve().then(function() {
        return UpdatePasswordForm$1;
      }), "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": () => Promise.resolve().then(function() {
        return UpdateProfileInformationForm$1;
      }), "./Pages/Teams/Partials/CreateTeamForm.vue": () => Promise.resolve().then(function() {
        return CreateTeamForm$1;
      }), "./Pages/Teams/Partials/DeleteTeamForm.vue": () => Promise.resolve().then(function() {
        return DeleteTeamForm$1;
      }), "./Pages/Teams/Partials/TeamMemberManager.vue": () => Promise.resolve().then(function() {
        return TeamMemberManager$1;
      }), "./Pages/Teams/Partials/UpdateTeamNameForm.vue": () => Promise.resolve().then(function() {
        return UpdateTeamNameForm$1;
      }) });
    }
  },
  setup({ el, app: app2, props, plugin }) {
    return vue.createApp({ render: () => vue.h(app2, props) }).use(plugin).use(Toaster).use(I, Ziggy).mount(el);
  }
});
progress.InertiaProgress.init({ color: "#7e3af2" });
const _sfc_main$17 = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  }
});
function _sfc_ssrRender$17(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative flex justify-center min-h-screen bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0" }, _attrs))}><div class="max-w-xl mx-auto sm:px-6 lg:px-8"><div class="flex justify-center py-4"><svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-danger-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg></div><div class="flex items-center pt-8 sm:justify-start sm:pt-0"><div class="px-4 text-lg tracking-wider text-gray-500 border-r border-gray-400"> 403 </div><div class="ml-4 text-lg tracking-wider text-gray-500 uppercase"> This Action Not Authorized </div></div><div class="flex justify-center py-4">`);
  _push(serverRenderer.ssrRenderComponent(_component_Link, {
    class: "inline-flex items-center justify-center px-4 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-danger-600 hover:bg-danger-500 focus:bg-danger-700 focus:ring-offset-danger-700 filament-page-button-action",
    href: _ctx.route("login")
  }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Back To Home `);
      } else {
        return [
          vue.createTextVNode(" Back To Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/403.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var _403 = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$17]]);
var _403$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _403
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$16 = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link,
    HomeIcon: outline.HomeIcon,
    UserIcon: outline.UserIcon
  },
  props: {
    user: Object
  },
  data() {
    return {
      isPagesMenuOpen: false
    };
  },
  computed: {
    langs() {
      return this.$page.props.data.trans;
    }
  },
  methods: {
    trans(key) {
      return this.langs[key];
    },
    togglePagesMenu() {
      if (this.isPagesMenuOpen) {
        this.isPagesMenuOpen = false;
      } else {
        this.isPagesMenuOpen = true;
      }
    }
  }
});
function _sfc_ssrRender$16(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");
  _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "fixed inset-y-0 left-0 z-20 flex flex-col h-screen overflow-y-scroll transition-transform -translate-x-full shadow-2xl rtl:left-auto rtl:right-0 filament-sidebar lg:border-r w-80 lg:z-0 lg:translate-x-0 dark:bg-main dark:border-white rtl:lg:-translate-x-0 rtl:translate-x-full scrollbar-thin scrollbar-thumb-greenColor2 scrollbar-track-white hover:scrollbar-thumb-primary-700" }, _attrs))}><div class="text-gray-500 dark:text-gray-400"><header class="border-b h-[4.4rem] shrink-0 px-6 flex items-center filament-sidebar-header dark:border-gray-700">`);
  _push(serverRenderer.ssrRenderComponent(_component_Link, {
    href: _ctx.route("dashboard")
  }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-xl font-bold tracking-tight filament-brand dark:text-white"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.data.appName)}</div>`);
      } else {
        return [
          vue.createVNode("div", { class: "text-xl font-bold tracking-tight filament-brand dark:text-white" }, vue.toDisplayString(_ctx.$page.props.data.appName), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header><div class="py-4"><img${serverRenderer.ssrRenderAttr("src", _ctx.user.profile_photo_url)} class="w-16 mx-auto rounded-full"><h1 class="text-2xl text-center">${serverRenderer.ssrInterpolate(_ctx.user.name)}</h1><h1 class="text-sm text-center">${serverRenderer.ssrInterpolate(_ctx.user.email)}</h1></div><div class="mb-6 border-b dark:border-gray-700"></div><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.$page.props.data.menu, (item, key) => {
    _push(`<ul>`);
    if (item.name !== 0) {
      _push(`<button class="flex items-center justify-between w-full px-4 py-4"><p class="text-xs font-bold tracking-wider uppercase text-main dark:text-gray-300">${serverRenderer.ssrInterpolate(item.name)}</p></button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    serverRenderer.ssrRenderList(item.menu, (menu, index) => {
      _push(`<li class="relative px-4">`);
      if (menu.type === "route") {
        _push(serverRenderer.ssrRenderComponent(_component_Link, {
          class: ["flex justify-start gap-1 px-3 py-2 mt-2 font-normal transition rounded-lg hover:bg-main hover:text-white dark:text-gray-300 dark:hover:bg-gray-700", { "flex justify-start gap-1 px-3 py-2 rounded-lg font-normal transition bg-main text-white": _ctx.route().current(menu.route) }],
          href: _ctx.route(menu.route)
        }, {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (menu.icon) {
                _push2(`<i class="${serverRenderer.ssrRenderClass(menu.icon + " bx-xs mt-1")}"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              if (!menu.lang) {
                _push2(`<span class="ml-1 rtl:mr-1"${_scopeId}>${serverRenderer.ssrInterpolate(menu.title)}</span>`);
              } else {
                _push2(`<span class="ml-1 rtl:mr-1"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.trans(menu.lang))}</span>`);
              }
            } else {
              return [
                menu.icon ? (vue.openBlock(), vue.createBlock("i", {
                  key: 0,
                  class: menu.icon + " bx-xs mt-1"
                }, null, 2)) : vue.createCommentVNode("", true),
                !menu.lang ? (vue.openBlock(), vue.createBlock("span", {
                  key: 1,
                  class: "ml-1 rtl:mr-1"
                }, vue.toDisplayString(menu.title), 1)) : (vue.openBlock(), vue.createBlock("span", {
                  key: 2,
                  class: "ml-1 rtl:mr-1"
                }, vue.toDisplayString(_ctx.trans(menu.lang)), 1))
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttr("href", menu.url)} target="_blank" class="flex justify-start gap-1 px-3 py-2 mt-2 font-normal transition rounded-lg hover:bg-main hover:text-white dark:text-gray-300 dark:hover:bg-gray-700"><i class="${serverRenderer.ssrRenderClass(menu.icon + " bx-xs mt-1")}"></i>`);
        if (!menu.lang) {
          _push(`<span class="ml-1 rtl:mr-1">${serverRenderer.ssrInterpolate(menu.title)}</span>`);
        } else {
          _push(`<span class="ml-1 rtl:mr-1">${serverRenderer.ssrInterpolate(_ctx.trans(menu.lang))}</span>`);
        }
        _push(`</a>`);
      }
      _push(`</li>`);
    });
    _push(`<!--]-->`);
    if (key !== _ctx.$page.props.data.menu.length - 1) {
      _push(`<div class="mt-6 border-b dark:border-gray-700"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</ul>`);
  });
  _push(`<!--]--></div></aside>`);
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Themes/Main/Aside.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var Aside = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$16]]);
const _sfc_main$15 = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  },
  props: ["href", "active", "open"],
  data() {
    return {
      isPagesMenuOpen: false
    };
  },
  methods: {
    togglePagesMenu() {
      if (this.isPagesMenuOpen) {
        this.isPagesMenuOpen = false;
      } else {
        this.isPagesMenuOpen = true;
      }
    },
    closeSideMenu() {
      this.$emit("close");
    }
  }
});
function _sfc_ssrRender$15(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div style="${serverRenderer.ssrRenderStyle(_ctx.open ? null : { display: "none" })}" class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div><aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 overflow-y-auto bg-white dark:bg-gray-800 md:hidden" style="${serverRenderer.ssrRenderStyle(_ctx.open ? null : { display: "none" })}"><div class="py-4 text-gray-500 dark:text-gray-400"><a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">${serverRenderer.ssrInterpolate(_ctx.$page.props.data.appName)}</a><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.$page.props.data.menu, (item, key) => {
    _push(`<ul class="px-6"><li class="mt-4">`);
    if (item.name !== 0) {
      _push(`<button class="flex items-center justify-between w-full"><p class="text-xs font-bold tracking-wider text-gray-600 uppercase dark:text-gray-300">${serverRenderer.ssrInterpolate(item.name)}</p><svg class="w-3 h-3 text-gray-600 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" style="${serverRenderer.ssrRenderStyle({ "display": "none" })}"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<ul class="mt-2 space-y-1 text-sm"><!--[-->`);
    serverRenderer.ssrRenderList(item.menu, (menu, index) => {
      _push(`<li class="filament-sidebar-item">`);
      if (menu.type === "route") {
        _push(serverRenderer.ssrRenderComponent(_component_Link, {
          class: ["flex justify-start gap-1 px-3 py-2 mt-2 font-normal transition rounded-lg hover:bg-gray-500 focus:bg-gray-500/5 dark:text-gray-300 dark:hover:bg-gray-700", { "flex  justify-start gap-1 px-3 py-2 rounded-lg font-normal transition bg-primary-500 text-white": _ctx.route().current(menu.route) }],
          href: _ctx.route(menu.route),
          active: _ctx.route().current(menu.route)
        }, {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${serverRenderer.ssrRenderClass("bx " + menu.icon + " bx-xs mt-1")}"${_scopeId}></i><div class="flex flex-1"${_scopeId}><span${_scopeId}>${serverRenderer.ssrInterpolate(menu.title)}</span></div>`);
            } else {
              return [
                vue.createVNode("i", {
                  class: "bx " + menu.icon + " bx-xs mt-1"
                }, null, 2),
                vue.createVNode("div", { class: "flex flex-1" }, [
                  vue.createVNode("span", null, vue.toDisplayString(menu.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttr("href", menu.url)} target="_blank"><i class="${serverRenderer.ssrRenderClass("bx " + menu.icon + " bx-xs mt-1")}"></i><span class="ml-2">${serverRenderer.ssrInterpolate(menu.title)}</span></a>`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--></ul></li></ul>`);
  });
  _push(`<!--]--></div></aside></div>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Themes/Main/MAside.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var MAside = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$15]]);
const _sfc_main$14 = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  },
  props: ["href", "as"]
});
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  if (_ctx.as == "button") {
    _push(`<button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  } else if (_ctx.as == "a") {
    _push(`<a${serverRenderer.ssrRenderAttr("href", _ctx.href)} class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</a>`);
  } else {
    _push(serverRenderer.ssrRenderComponent(_component_Link, {
      href: _ctx.href,
      class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
    }, {
      default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            vue.renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DropdownLink.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var JetDropdownLink = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$14]]);
const _sfc_main$13 = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link,
    JetDropdownLink
  },
  props: ["href", "active", "open", "isDark"],
  data() {
    return {
      isNotificationsMenuOpen: false,
      isProfileMenuOpen: false,
      dark: false,
      notifications: []
    };
  },
  computed: {
    notification() {
      return this.$page.props.notifications;
    }
  },
  methods: {
    changeLanguage() {
      if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", JSON.stringify({
          id: "ar",
          name: "Arabic"
        }));
      }
      this.$inertia.post(this.route("translations.switch"), { language: JSON.parse(localStorage.getItem("lang")) }, {
        preserveScroll: true,
        forceFormData: true,
        onSuccess: () => {
          let htmlEl = document.querySelector("html");
          if (JSON.parse(localStorage.getItem("lang")).id === "ar") {
            htmlEl.setAttribute("dir", "rtl");
            localStorage.setItem("lang", JSON.stringify({
              id: "en",
              name: "English"
            }));
          } else {
            htmlEl.setAttribute("dir", "ltr");
            localStorage.setItem("lang", JSON.stringify({
              id: "ar",
              name: "Arabic"
            }));
          }
        }
      });
    },
    toggleTheme() {
      if (this.dark) {
        this.dark = false;
        this.$emit("switchTheme");
      } else {
        this.dark = true;
        this.$emit("switchTheme");
      }
    },
    toggleSideMenu() {
      this.$emit("openMobileSidebar");
    },
    toggleProfileMenu() {
      if (this.isProfileMenuOpen) {
        this.isProfileMenuOpen = false;
      } else {
        this.isProfileMenuOpen = true;
      }
    },
    toggleNotificationsMenu() {
      if (this.isNotificationsMenuOpen) {
        this.isNotificationsMenuOpen = false;
      } else {
        this.isNotificationsMenuOpen = true;
      }
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false;
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false;
    },
    togglePagesMenu() {
      console.log("Open Sidebar");
    },
    closeSideMenu() {
      this.$emit("close");
    },
    logout() {
      this.$inertia.post(route("logout"));
    }
  }
});
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");
  _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "z-10 py-4 border-b dark:border-gray-700 dark:bg-gray-800" }, _attrs))}><div class="flex items-center justify-between h-full px-6 mx-auto text-primary-600 dark:text-primary-300"><button class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-primary" aria-label="Menu"><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button><div class="flex justify-center flex-1 lg:mr-32"></div><ul class="flex items-center flex-shrink-0 space-x-6"><li class="flex rtl:ml-4"><button class="rounded-md focus:outline-none focus:shadow-outline-primary" aria-label="Change Language"><div><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg></div></button></li><li class="flex rtl:ml-4"><button class="rounded-md focus:outline-none focus:shadow-outline-primary" aria-label="Toggle color mode">`);
  if (!_ctx.dark) {
    _push(`<div><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.dark) {
    _push(`<div><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</button></li><li class="relative"><button class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-primary" aria-label="Notifications" aria-haspopup="true"><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>`);
  if (_ctx.notifications.length) {
    _push(`<span aria-hidden="true" class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</button>`);
  if (_ctx.isNotificationsMenuOpen && _ctx.notifications.length) {
    _push(`<div><ul x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="absolute right-0 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md w-80 dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.notification, (note, index) => {
      _push(`<li class="flex"><a class="${serverRenderer.ssrRenderClass([{
        "text-green-600": note.type === "success",
        "text-red-600": note.type === "danger",
        "text-yellow-600": note.type === "warring"
      }, "inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"])}"${serverRenderer.ssrRenderAttr("href", note.url ? note.url : "#")}><span><i style="${serverRenderer.ssrRenderStyle({ "font-size": "20px" })}" class="${serverRenderer.ssrRenderClass([note.icon, "mt-1 bx"])}"></i></span><span>${serverRenderer.ssrInterpolate(note.title)}</span></a></li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="relative"><button class="align-middle rounded-full focus:shadow-outline-primary focus:outline-none" aria-label="Account" aria-haspopup="true">`);
  if (_ctx.$page.props.jetstream.managesProfilePhotos) {
    _push(`<img class="object-cover w-8 h-8 rounded-full"${serverRenderer.ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", _ctx.$page.props.user.name)} aria-hidden="true">`);
  } else {
    _push(`<span class="inline-flex rounded-md"><button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none">${serverRenderer.ssrInterpolate(_ctx.$page.props.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></span>`);
  }
  _push(`</button>`);
  if (_ctx.isProfileMenuOpen) {
    _push(`<div><ul class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700" aria-label="submenu"><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.$page.props.dropdown, (item, key) => {
      _push(`<li class="flex">`);
      _push(serverRenderer.ssrRenderComponent(_component_Link, {
        class: "inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200",
        href: _ctx.route(item.route)
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="${serverRenderer.ssrRenderClass("bx " + item.icon + " bx-xs p-2")}"${_scopeId}></i><span${_scopeId}>${serverRenderer.ssrInterpolate(item.title)}</span>`);
          } else {
            return [
              vue.createVNode("i", {
                class: "bx " + item.icon + " bx-xs p-2"
              }, null, 2),
              vue.createVNode("span", null, vue.toDisplayString(item.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--><li class="flex"><a class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="#"><i class="p-2 bx bx-log-out bx-xs"></i> Log Out </a></li></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li></ul></div></header>`);
}
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Themes/Main/Header.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var Header$1 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["ssrRender", _sfc_ssrRender$13]]);
const _sfc_main$12 = vue.defineComponent({
  props: {
    title: String
  },
  components: {
    Aside,
    MAside,
    Header: Header$1,
    Head: inertiaVue3.Head,
    Link: inertiaVue3.Link
  },
  data() {
    return {
      showingNavigationDropdown: false,
      isSideMenuOpen: false,
      dark: false
    };
  },
  created() {
    let isDark = localStorage.getItem("dark");
    if (isDark) {
      if (isDark === "true") {
        this.dark = true;
        document.querySelector("html").classList.add("dark");
      } else {
        this.dark = false;
        document.querySelector("html").classList.remove("dark");
      }
    }
  },
  computed: {
    lang() {
      return this.$page.props.data.trans;
    }
  },
  methods: {
    trans(key) {
      let getKey = this.lang[key] ? this.lang[key] : key;
      return getKey;
    },
    themeSwitcher() {
      if (this.dark) {
        this.dark = false;
        document.querySelector("html").classList.remove("dark");
        localStorage.setItem("dark", false);
      } else {
        this.dark = true;
        document.querySelector("html").classList.add("dark");
        localStorage.setItem("dark", true);
      }
    },
    openSidebar() {
      if (this.isSideMenuOpen) {
        this.isSideMenuOpen = false;
      } else {
        this.isSideMenuOpen = true;
      }
    },
    closeSidebar() {
      if (this.isSideMenuOpen) {
        this.isSideMenuOpen = false;
      } else {
        this.isSideMenuOpen = true;
      }
    },
    switchToTeam(team) {
      this.$inertia.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    },
    logout() {
      this.$inertia.post(route("logout"));
    }
  }
});
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Aside = vue.resolveComponent("Aside");
  const _component_MAside = vue.resolveComponent("MAside");
  const _component_Header = vue.resolveComponent("Header");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: ["flex h-screen dark:bg-gray-900 font-main", { "overflow-hidden": _ctx.isSideMenuOpen }]
  }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Aside, {
    user: this.$page.props.user
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_MAside, {
    open: _ctx.isSideMenuOpen,
    onClose: ($event) => _ctx.closeSidebar()
  }, null, _parent));
  _push(`<div class="flex flex-col flex-1 w-screen space-y-6 lg:pl-80 rtl:lg:pl-0 rtl:lg:pr-80 filament-main">`);
  _push(serverRenderer.ssrRenderComponent(_component_Header, {
    isDark: _ctx.dark,
    onSwitchTheme: ($event) => _ctx.themeSwitcher(),
    onOpenMobileSidebar: ($event) => _ctx.openSidebar()
  }, null, _parent));
  _push(`<main>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$12]]);
const _sfc_main$11 = vue.defineComponent({
  components: {
    AppLayout
  }
});
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = vue.resolveComponent("app-layout");
  _push(serverRenderer.ssrRenderComponent(_component_app_layout, vue.mergeProps({ title: "Dashboard" }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid px-6 mx-auto"${_scopeId}><h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> Dashboard </h2><a class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" href="https://github.com/estevanmaito/windmill-dashboard"${_scopeId}><div class="flex items-center"${_scopeId}><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"${_scopeId}></path></svg><span${_scopeId}>Star this project on GitHub</span></div><span${_scopeId}>View more \u2192</span></a><div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"${_scopeId}><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> Total clients </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> 6389 </p></div></div><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> Account balance </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> $ 46,760.89 </p></div></div><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> New sales </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> 376 </p></div></div><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"${_scopeId}></path></svg></div><div${_scopeId}><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"${_scopeId}> Pending contacts </p><p class="text-lg font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> 35 </p></div></div></div><div class="w-full overflow-hidden rounded-lg shadow-xs"${_scopeId}><div class="w-full overflow-x-auto"${_scopeId}><table class="w-full whitespace-no-wrap"${_scopeId}><thead${_scopeId}><tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"${_scopeId}><th class="px-4 py-3"${_scopeId}>Client</th><th class="px-4 py-3"${_scopeId}>Amount</th><th class="px-4 py-3"${_scopeId}>Status</th><th class="px-4 py-3"${_scopeId}>Date</th></tr></thead><tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"${_scopeId}><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Hans Burger</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> 10x Developer </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 863.45 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"${_scopeId}> Approved </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Jolina Angelie</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> Unemployed </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 369.95 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"${_scopeId}> Pending </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Sarah Curry</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> Designer </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 86.00 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"${_scopeId}> Denied </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Rulia Joberts</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> Actress </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 1276.45 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"${_scopeId}> Approved </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Wenzel Dashington</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> Actor </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 863.45 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"${_scopeId}> Expired </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Dave Li</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> Influencer </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 863.45 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"${_scopeId}> Approved </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Maria Ramovic</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> Runner </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 863.45 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"${_scopeId}> Approved </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Hitney Wouston</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> Singer </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 863.45 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"${_scopeId}> Approved </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr><tr class="text-gray-700 dark:text-gray-400"${_scopeId}><td class="px-4 py-3"${_scopeId}><div class="flex items-center text-sm"${_scopeId}><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"${_scopeId}><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"${_scopeId}><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"${_scopeId}></div></div><div${_scopeId}><p class="font-semibold"${_scopeId}>Hans Burger</p><p class="text-xs text-gray-600 dark:text-gray-400"${_scopeId}> 10x Developer </p></div></div></td><td class="px-4 py-3 text-sm"${_scopeId}> $ 863.45 </td><td class="px-4 py-3 text-xs"${_scopeId}><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"${_scopeId}> Approved </span></td><td class="px-4 py-3 text-sm"${_scopeId}> 6/10/2020 </td></tr></tbody></table></div><div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"${_scopeId}><span class="flex items-center col-span-3"${_scopeId}> Showing 21-30 of 100 </span><span class="col-span-2"${_scopeId}></span><span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end"${_scopeId}><nav aria-label="Table navigation"${_scopeId}><ul class="inline-flex items-center"${_scopeId}><li${_scopeId}><button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous"${_scopeId}><svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20"${_scopeId}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"${_scopeId}></path></svg></button></li><li${_scopeId}><button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"${_scopeId}> 1 </button></li><li${_scopeId}><button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"${_scopeId}> 2 </button></li><li${_scopeId}><button class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"${_scopeId}> 3 </button></li><li${_scopeId}><button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"${_scopeId}> 4 </button></li><li${_scopeId}><span class="px-3 py-1"${_scopeId}>...</span></li><li${_scopeId}><button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"${_scopeId}> 8 </button></li><li${_scopeId}><button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"${_scopeId}> 9 </button></li><li${_scopeId}><button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next"${_scopeId}><svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20"${_scopeId}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"${_scopeId}></path></svg></button></li></ul></nav></span></div></div><h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"${_scopeId}> Charts </h2><div class="grid gap-6 mb-8 md:grid-cols-2"${_scopeId}><div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300"${_scopeId}> Revenue </h4><canvas id="pie"${_scopeId}></canvas><div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"${_scopeId}><div class="flex items-center"${_scopeId}><span class="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"${_scopeId}></span><span${_scopeId}>Shirts</span></div><div class="flex items-center"${_scopeId}><span class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"${_scopeId}></span><span${_scopeId}>Shoes</span></div><div class="flex items-center"${_scopeId}><span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"${_scopeId}></span><span${_scopeId}>Bags</span></div></div></div><div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"${_scopeId}><h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300"${_scopeId}> Traffic </h4><canvas id="line"${_scopeId}></canvas><div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"${_scopeId}><div class="flex items-center"${_scopeId}><span class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"${_scopeId}></span><span${_scopeId}>Organic</span></div><div class="flex items-center"${_scopeId}><span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"${_scopeId}></span><span${_scopeId}>Paid</span></div></div></div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "grid px-6 mx-auto" }, [
            vue.createVNode("h2", { class: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200" }, " Dashboard "),
            vue.createVNode("a", {
              class: "flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple",
              href: "https://github.com/estevanmaito/windmill-dashboard"
            }, [
              vue.createVNode("div", { class: "flex items-center" }, [
                (vue.openBlock(), vue.createBlock("svg", {
                  class: "w-5 h-5 mr-2",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  vue.createVNode("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
                ])),
                vue.createVNode("span", null, "Star this project on GitHub")
              ]),
              vue.createVNode("span", null, "View more \u2192")
            ]),
            vue.createVNode("div", { class: "grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4" }, [
              vue.createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                vue.createVNode("div", { class: "p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500" }, [
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    vue.createVNode("path", { d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" })
                  ]))
                ]),
                vue.createVNode("div", null, [
                  vue.createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " Total clients "),
                  vue.createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " 6389 ")
                ])
              ]),
              vue.createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                vue.createVNode("div", { class: "p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500" }, [
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    vue.createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ]),
                vue.createVNode("div", null, [
                  vue.createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " Account balance "),
                  vue.createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " $ 46,760.89 ")
                ])
              ]),
              vue.createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                vue.createVNode("div", { class: "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500" }, [
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    vue.createVNode("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
                  ]))
                ]),
                vue.createVNode("div", null, [
                  vue.createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " New sales "),
                  vue.createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " 376 ")
                ])
              ]),
              vue.createVNode("div", { class: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                vue.createVNode("div", { class: "p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500" }, [
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    vue.createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ]),
                vue.createVNode("div", null, [
                  vue.createVNode("p", { class: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400" }, " Pending contacts "),
                  vue.createVNode("p", { class: "text-lg font-semibold text-gray-700 dark:text-gray-200" }, " 35 ")
                ])
              ])
            ]),
            vue.createVNode("div", { class: "w-full overflow-hidden rounded-lg shadow-xs" }, [
              vue.createVNode("div", { class: "w-full overflow-x-auto" }, [
                vue.createVNode("table", { class: "w-full whitespace-no-wrap" }, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", { class: "text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800" }, [
                      vue.createVNode("th", { class: "px-4 py-3" }, "Client"),
                      vue.createVNode("th", { class: "px-4 py-3" }, "Amount"),
                      vue.createVNode("th", { class: "px-4 py-3" }, "Status"),
                      vue.createVNode("th", { class: "px-4 py-3" }, "Date")
                    ])
                  ]),
                  vue.createVNode("tbody", { class: "bg-white divide-y dark:divide-gray-700 dark:bg-gray-800" }, [
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Hans Burger"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " 10x Developer ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 863.45 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100" }, " Approved ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Jolina Angelie"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " Unemployed ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 369.95 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600" }, " Pending ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Sarah Curry"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " Designer ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 86.00 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700" }, " Denied ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Rulia Joberts"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " Actress ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 1276.45 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100" }, " Approved ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Wenzel Dashington"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " Actor ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 863.45 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700" }, " Expired ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Dave Li"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " Influencer ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 863.45 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100" }, " Approved ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Maria Ramovic"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " Runner ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 863.45 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100" }, " Approved ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Hitney Wouston"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " Singer ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 863.45 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100" }, " Approved ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ]),
                    vue.createVNode("tr", { class: "text-gray-700 dark:text-gray-400" }, [
                      vue.createVNode("td", { class: "px-4 py-3" }, [
                        vue.createVNode("div", { class: "flex items-center text-sm" }, [
                          vue.createVNode("div", { class: "relative hidden w-8 h-8 mr-3 rounded-full md:block" }, [
                            vue.createVNode("img", {
                              class: "object-cover w-full h-full rounded-full",
                              src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                              alt: "",
                              loading: "lazy"
                            }),
                            vue.createVNode("div", {
                              class: "absolute inset-0 rounded-full shadow-inner",
                              "aria-hidden": "true"
                            })
                          ]),
                          vue.createVNode("div", null, [
                            vue.createVNode("p", { class: "font-semibold" }, "Hans Burger"),
                            vue.createVNode("p", { class: "text-xs text-gray-600 dark:text-gray-400" }, " 10x Developer ")
                          ])
                        ])
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " $ 863.45 "),
                      vue.createVNode("td", { class: "px-4 py-3 text-xs" }, [
                        vue.createVNode("span", { class: "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100" }, " Approved ")
                      ]),
                      vue.createVNode("td", { class: "px-4 py-3 text-sm" }, " 6/10/2020 ")
                    ])
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800" }, [
                vue.createVNode("span", { class: "flex items-center col-span-3" }, " Showing 21-30 of 100 "),
                vue.createVNode("span", { class: "col-span-2" }),
                vue.createVNode("span", { class: "flex col-span-4 mt-2 sm:mt-auto sm:justify-end" }, [
                  vue.createVNode("nav", { "aria-label": "Table navigation" }, [
                    vue.createVNode("ul", { class: "inline-flex items-center" }, [
                      vue.createVNode("li", null, [
                        vue.createVNode("button", {
                          class: "px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple",
                          "aria-label": "Previous"
                        }, [
                          (vue.openBlock(), vue.createBlock("svg", {
                            "aria-hidden": "true",
                            class: "w-4 h-4 fill-current",
                            viewBox: "0 0 20 20"
                          }, [
                            vue.createVNode("path", {
                              d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                              "clip-rule": "evenodd",
                              "fill-rule": "evenodd"
                            })
                          ]))
                        ])
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("button", { class: "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple" }, " 1 ")
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("button", { class: "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple" }, " 2 ")
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("button", { class: "px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple" }, " 3 ")
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("button", { class: "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple" }, " 4 ")
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("span", { class: "px-3 py-1" }, "...")
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("button", { class: "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple" }, " 8 ")
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("button", { class: "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple" }, " 9 ")
                      ]),
                      vue.createVNode("li", null, [
                        vue.createVNode("button", {
                          class: "px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple",
                          "aria-label": "Next"
                        }, [
                          (vue.openBlock(), vue.createBlock("svg", {
                            class: "w-4 h-4 fill-current",
                            "aria-hidden": "true",
                            viewBox: "0 0 20 20"
                          }, [
                            vue.createVNode("path", {
                              d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd",
                              "fill-rule": "evenodd"
                            })
                          ]))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            vue.createVNode("h2", { class: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200" }, " Charts "),
            vue.createVNode("div", { class: "grid gap-6 mb-8 md:grid-cols-2" }, [
              vue.createVNode("div", { class: "min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                vue.createVNode("h4", { class: "mb-4 font-semibold text-gray-800 dark:text-gray-300" }, " Revenue "),
                vue.createVNode("canvas", { id: "pie" }),
                vue.createVNode("div", { class: "flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400" }, [
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode("span", { class: "inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full" }),
                    vue.createVNode("span", null, "Shirts")
                  ]),
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode("span", { class: "inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" }),
                    vue.createVNode("span", null, "Shoes")
                  ]),
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode("span", { class: "inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" }),
                    vue.createVNode("span", null, "Bags")
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" }, [
                vue.createVNode("h4", { class: "mb-4 font-semibold text-gray-800 dark:text-gray-300" }, " Traffic "),
                vue.createVNode("canvas", { id: "line" }),
                vue.createVNode("div", { class: "flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400" }, [
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode("span", { class: "inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" }),
                    vue.createVNode("span", null, "Organic")
                  ]),
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode("span", { class: "inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" }),
                    vue.createVNode("span", null, "Paid")
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$11]]);
var Dashboard$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$10 = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  }
});
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");
  _push(serverRenderer.ssrRenderComponent(_component_Link, vue.mergeProps({ href: "/" }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"${_scopeId}></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"${_scopeId}></path></svg>`);
      } else {
        return [
          (vue.openBlock(), vue.createBlock("svg", {
            class: "w-16 h-16",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            vue.createVNode("path", {
              d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
              fill: "#6875F5"
            }),
            vue.createVNode("path", {
              d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
              fill: "#6875F5"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/AuthenticationCardLogo.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var JetAuthenticationCardLogo = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$10]]);
const _sfc_main$$ = vue.defineComponent({
  props: ["policy"],
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCardLogo
  }
});
function _sfc_ssrRender$$(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Privacy Policy" }, null, _parent));
  _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent));
  _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${_ctx.policy}</div></div></div></div><!--]-->`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
var PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$$]]);
var PrivacyPolicy$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": PrivacyPolicy
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$_ = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  },
  props: {
    setSearch: String,
    showFilter: Boolean
  },
  computed: {
    lang() {
      return this.$page.props.trans;
    }
  },
  watch: {
    setSearch(newValue, oldValue) {
      this.search = newValue;
    },
    per_page(newValue, oldValue) {
      this.setPerPage = newValue;
    }
  },
  data() {
    return {
      search: "",
      filters: {},
      activeFilter: false,
      setPerPage: 25,
      start_page: 0,
      last_page: 1
    };
  },
  methods: {
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    searchFilter() {
      let search = this.search;
      this.$emit("getSearch", search);
    },
    resetFilter() {
      this.$emit("reset");
    },
    filter(filterBy, filterValue) {
      let filter = {};
      filter[filterBy] = filterValue;
      this.$emit("filter", filter);
    },
    reload(page, type) {
      let url = {};
      url.page = page;
      url.per_page = this.setPerPage;
      this.$emit("reload", url);
    }
  }
});
function _sfc_ssrRender$_(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex items-center justify-end w-full gap-2 md:max-w-md" }, _attrs))}><div class="flex-1"><div class="filament-tables-search-input"><label for="tableSearchQueryInput" class="sr-only"> Search </label><div class="relative group"><span class="absolute inset-y-0 left-0 flex items-center justify-center text-gray-400 pointer-events-none w-9 h-9 group-focus-within:text-primary-500"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></span><form><input${serverRenderer.ssrRenderAttr("value", _ctx.search)} id="tableSearchQueryInput" placeholder="Search By Name" type="search" autocomplete="off" class="block w-full placeholder-gray-400 transition duration-75 border-gray-300 rounded-lg shadow-sm dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 h-9 pl-9 focus:border-primary-600 focus:ring-1 focus:ring-inset focus:ring-primary-600"></form></div></div></div>`);
  if (_ctx.showFilter) {
    _push(`<div class="relative inline-block filament-tables-filters shrink-0"><button type="button" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500/5 focus:outline-none filament-tables-icon-button text-primary-500 focus:bg-primary-500/10 hover:bg-gray-300/5 filament-tables-filters-trigger"><span class="sr-only"> Filter </span><svg class="w-5 h-5 filament-tables-icon-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#3a9251" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg></button><div class="absolute right-0 z-10 w-screen max-w-sm pl-12 mt-2 transition dark:text-white top-full rtl:right-auto rtl:left-0 rtl:pl-0 rtl:pr-12" style="${serverRenderer.ssrRenderStyle(_ctx.showFilter ? null : { display: "none" })}"><div class="px-6 py-4 space-y-6 bg-white border shadow-xl rounded-xl dark:bg-gray-700 border-1"><button type="button" class="absolute flex items-center justify-center w-10 h-10 text-gray-500 rounded-full hover:bg-gray-500/5 focus:outline-none filament-tables-icon-button focus:bg-gray-500/10 hover:bg-gray-300/5 top-3 right-3 rtl:right-auto rtl:left-3 shrink-0"><span class="sr-only"> Close </span><svg class="w-5 h-5 filament-tables-icon-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#24262d" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button><div class="grid grid-cols-1 gap-6 filament-forms-component-container lg:grid-cols-1"><div class="col-span-1"><div class="grid grid-cols-1 gap-6 filament-forms-component-container"><div class="col-span-1"><div class="filament-forms-field-wrapper"><div class="space-y-2"><div class="flex items-center justify-between space-x-2 rtl:space-x-reverse"><div class="w-full">`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`<button type="button" class="inline-flex items-center justify-center text-sm font-normal hover:underline focus:outline-none focus:underline filament-tables-link text-danger-600 hover:text-danger-500 dark:text-danger-500 dark:hover:text-danger-400"> Reset filters </button></div></div></div></div></div></div></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Filters.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
var Filters = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$_]]);
const _sfc_main$Z = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  },
  props: {
    title: String,
    button: String
  },
  methods: {
    buttonAction() {
      this.$emit("buttonAction");
    }
  }
});
function _sfc_ssrRender$Z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex justify-between my-6" }, _attrs))}><h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">${serverRenderer.ssrInterpolate(_ctx.title)}</h2><div class="flex justify-start gap-1">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.$attrs.canCreate) {
    _push(`<a href="#" class="flex justify-center gap-1 px-4 font-medium tracking-tight text-center text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"><i class="mt-2 bx bx-plus"></i><span class="mt-1">${serverRenderer.ssrInterpolate(_ctx.button)}</span></a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Header.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$Z]]);
const _sfc_main$Y = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  },
  props: {
    bulk: Object,
    show: Boolean,
    collection: Object
  },
  watch: {
    show(newValue, oldValue) {
      this.showBluk = newValue;
    }
  },
  data() {
    return {
      showBluk: false
    };
  },
  methods: {
    close() {
      this.$emit("close", this.showBluk);
    }
  }
});
function _sfc_ssrRender$Y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  if (Object.keys(this.bulk).length) {
    _push(`<div class="relative filament-tables-bulk-actions md:mr-2"><div class="flex justify-start gap-2">`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Bulk.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
var Bulk = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$Y]]);
const _sfc_main$X = vue.defineComponent({
  props: ["message"]
});
function _sfc_ssrRender$X(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    style: _ctx.message ? null : { display: "none" }
  }, _attrs))}><p class="text-sm text-red-600">${serverRenderer.ssrInterpolate(_ctx.message)}</p></div>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/InputError.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
var JetInputError = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$X]]);
const _sfc_main$W = vue.defineComponent({
  props: ["value"]
});
function _sfc_ssrRender$W(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<label${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
  if (_ctx.value) {
    _push(`<span>${serverRenderer.ssrInterpolate(_ctx.value)}</span>`);
  } else {
    _push(`<span>`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  }
  _push(`</label>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Label.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var JetLabel = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$W]]);
const _sfc_main$V = vue.defineComponent({
  components: {
    JetInputError,
    JetLabel,
    flatPickr: flatPickr__default["default"]
  },
  data() {
    return {
      value: "",
      date: {
        defaultHour: 12,
        locale: "ar",
        dateFormat: "Y-m-d H:i:S",
        altInput: true,
        altFormat: "d-m-Y"
      },
      time: {
        noCalendar: true,
        enableTime: true,
        enableSeconds: true,
        defaultHour: 12,
        locale: "ar",
        dateFormat: "H:i:S",
        altInput: true,
        altFormat: "h:i:S K"
      },
      datetime: {
        enableTime: true,
        enableSeconds: true,
        defaultHour: 12,
        locale: "ar",
        dateFormat: "Y-m-d H:i:S",
        altInput: true,
        altFormat: "d-m-Y h:i:S K"
      }
    };
  },
  mounted() {
    if (this.default) {
      this.value = this.default;
    }
    if (this.modelValue) {
      this.value = this.modelValue;
    }
  },
  props: {
    modelValue: {},
    default: {},
    view: {
      String,
      default: "input"
    },
    type: {
      String,
      default: "datetime"
    },
    label: {
      String,
      default: "Date"
    },
    id: {
      String
    },
    message: {
      String
    },
    placeholder: {
      String,
      default: "Input Your Date"
    },
    disabled: {
      Boolean,
      default: false
    },
    className: {
      String
    },
    multi: {
      Boolean,
      default: false
    }
  },
  mounted() {
    this.value = this.modelValue;
  },
  methods: {
    datetimefilter(value) {
      if (value) {
        return moment__default["default"](String(value)).format("MM/DD/YYYY hh:mm A");
      }
    },
    datefilter(value) {
      if (value) {
        return moment__default["default"](String(value)).format("MM/DD/YYYY");
      }
    },
    timefilter(value) {
      if (value) {
        return moment__default["default"](String(value), "hh:mm:ss").format("hh:mm:ss A");
      }
    }
  }
});
function _sfc_ssrRender$V(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetLabel = vue.resolveComponent("JetLabel");
  const _component_flat_pickr = vue.resolveComponent("flat-pickr");
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  _push(`<!--[-->`);
  if (_ctx.view === "input") {
    _push(`<div class="my-2">`);
    _push(serverRenderer.ssrRenderComponent(_component_JetLabel, {
      for: _ctx.id,
      value: _ctx.label
    }, null, _parent));
    _push(`<div>`);
    if (_ctx.type === "date") {
      _push(serverRenderer.ssrRenderComponent(_component_flat_pickr, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": ($event) => _ctx.value = $event,
        onOnClose: ($event) => _ctx.$emit("update:modelValue", _ctx.value),
        config: _ctx.date,
        placeholder: _ctx.placeholder,
        class: ["w-full p-3 pr-12 text-sm border-gray-200 rounded-lg shadow-sm", _ctx.className],
        disabled: _ctx.disabled
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (_ctx.type === "datetime") {
      _push(serverRenderer.ssrRenderComponent(_component_flat_pickr, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": ($event) => _ctx.value = $event,
        onOnClose: ($event) => _ctx.$emit("update:modelValue", _ctx.value),
        config: _ctx.datetime,
        placeholder: _ctx.placeholder,
        class: ["w-full p-3 pr-12 text-sm border-gray-200 rounded-lg shadow-sm", _ctx.className],
        disabled: _ctx.disabled
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (_ctx.type === "time") {
      _push(serverRenderer.ssrRenderComponent(_component_flat_pickr, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": ($event) => _ctx.value = $event,
        onOnClose: ($event) => _ctx.$emit("update:modelValue", _ctx.value),
        config: _ctx.time,
        placeholder: _ctx.placeholder,
        class: ["w-full p-3 pr-12 text-sm border-gray-200 rounded-lg shadow-sm", _ctx.className],
        disabled: _ctx.disabled
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
      message: _ctx.message,
      class: "mt-2"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.view === "view") {
    _push(`<div class="flex justify-between my-4"><div><p class="font-bold">${serverRenderer.ssrInterpolate(_ctx.label)}</p></div><div>`);
    if (_ctx.type === "time") {
      _push(`<p><i class="mx-2 bx bxs-time"></i> ${serverRenderer.ssrInterpolate(_ctx.timefilter(_ctx.modelValue))}</p>`);
    } else if (_ctx.type === "date") {
      _push(`<p><i class="mx-2 bx bxs-calendar"></i> ${serverRenderer.ssrInterpolate(_ctx.datefilter(_ctx.modelValue))}</p>`);
    } else if (_ctx.type === "datetime") {
      _push(`<p><i class="mx-2 bx bxs-calendar"></i> ${serverRenderer.ssrInterpolate(_ctx.datetimefilter(_ctx.modelValue))}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.view === "table") {
    _push(`<div>`);
    if (_ctx.type === "time") {
      _push(`<p><i class="mx-2 bx bxs-time"></i><span>${serverRenderer.ssrInterpolate(_ctx.timefilter(_ctx.modelValue))}</span></p>`);
    } else if (_ctx.type === "date") {
      _push(`<p><i class="mx-2 bx bxs-calendar"></i><span>${serverRenderer.ssrInterpolate(_ctx.datefilter(_ctx.modelValue))}</span></p>`);
    } else if (_ctx.type === "datetime") {
      _push(`<p><i class="mx-2 bx bxs-calendar"></i><span>${serverRenderer.ssrInterpolate(_ctx.datetimefilter(_ctx.modelValue))}</span></p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltDate.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
var ViltDate = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$V]]);
const _sfc_main$U = vue.defineComponent({
  components: {
    JetInputError
  },
  props: {
    modelValue: {},
    view: {
      String,
      default: "input"
    },
    label: {
      String,
      default: "File"
    },
    id: {
      String
    },
    multi: {
      Boolean,
      default: false
    },
    message: {
      String
    },
    preview: {
      Boolean,
      default: false
    },
    placeholder: {
      String,
      default: "File"
    },
    disabled: {
      Boolean,
      default: false
    },
    default: {}
  },
  data() {
    return {
      photoPreview: [],
      images: []
    };
  },
  mounted() {
    if (this.modelValue) {
      this.photoPreview.push(this.modelValue);
    }
    if (this.default) {
      this.photoPreview.push(this.default);
    }
  },
  methods: {
    updatePhotoPreview() {
      const photo = this.$refs[this.id].files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e2) => {
        if (this.multi) {
          this.photoPreview.push(e2.target.result);
          this.images.push(photo);
          this.$emit("update:modelValue", this.images);
        } else {
          this.photoPreview[0] = e2.target.result;
          this.$emit("update:modelValue", photo);
        }
      };
      reader.readAsDataURL(photo);
    },
    selectNewPhoto() {
      if (!this.disabled) {
        this.$refs[this.id].click();
      }
    }
  }
});
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  _push(`<!--[-->`);
  if (_ctx.view === "input") {
    _push(`<div class="py-2"><div class="col-span-6 sm:col-span-4">`);
    if (_ctx.id) {
      _push(`<input type="file" class="hidden"${serverRenderer.ssrIncludeBooleanAttr(_ctx.multi) ? " multiple" : ""}${serverRenderer.ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.id) {
      _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.id)} class="text-sm font-normal">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.photoPreview.length && _ctx.preview) {
      _push(`<div>`);
      if (_ctx.multi && _ctx.photoPreview.length) {
        _push(`<div class="flex justify-center mt-2 space-x-2"><!--[-->`);
        serverRenderer.ssrRenderList(_ctx.photoPreview, (item, key) => {
          _push(`<div><img${serverRenderer.ssrRenderAttr("src", item)} class="object-cover w-20 h-20 mx-auto rounded-full"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="mt-2"><img${serverRenderer.ssrRenderAttr("src", _ctx.photoPreview[0])} class="object-cover w-20 h-20 mx-auto rounded-full"></div>`);
      }
      _push(`</div>`);
    } else if (_ctx.preview) {
      _push(`<div class="mt-2">`);
      if (_ctx.modelValue && _ctx.multi) {
        _push(`<div><!--[-->`);
        serverRenderer.ssrRenderList(_ctx.modelValue, (item, key) => {
          _push(`<div><img${serverRenderer.ssrRenderAttr("src", item)} class="object-cover w-20 h-20 mx-auto rounded-full"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (_ctx.modelValue) {
        _push(`<div><img${serverRenderer.ssrRenderAttr("src", _ctx.modelValue)} class="object-cover w-20 h-20 mx-auto rounded-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<button class="w-full px-4 py-2 mt-2 mr-2 text-xs font-semibold tracking-widest text-center text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25" type="button"${serverRenderer.ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}>${serverRenderer.ssrInterpolate(_ctx.placeholder ? _ctx.placeholder : "Select A New File")}</button></div>`);
    _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
      message: _ctx.message,
      class: "mt-2"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.view === "view") {
    _push(`<div class="flex justify-between py-2 my-4 border-b-2 border-gray-100"><div><p class="font-bold">${serverRenderer.ssrInterpolate(_ctx.label)}</p></div><div><a${serverRenderer.ssrRenderAttr("href", _ctx.modelValue)} target="_blank"><img${serverRenderer.ssrRenderAttr("src", _ctx.modelValue)} class="object-cover w-20 h-20 rounded-full"></a></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.view === "table") {
    _push(`<div class="p-4"><a${serverRenderer.ssrRenderAttr("href", _ctx.modelValue)} target="_blank"><img${serverRenderer.ssrRenderAttr("src", _ctx.modelValue)} class="object-cover w-20 h-20 rounded-full"></a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltMedia.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var ViltMedia = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$U]]);
const _sfc_main$T = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link,
    ViltDate,
    ViltMedia
  },
  props: {
    rows: Array,
    collection: Object,
    url: String,
    bulk: Object,
    desc: Boolean,
    orderBy: String
  },
  data() {
    return {};
  },
  computed: {
    listRows() {
      let list = [];
      for (let i2 = 0; i2 < this.rows.length; i2++) {
        if (this.rows[i2].list) {
          list.push(this.rows[i2]);
        }
      }
      return list;
    },
    lang() {
      return this.$page.props.data.trans;
    }
  },
  methods: {
    money(item) {
      if (localStorage.getItem("lang")) {
        let lang = JSON.parse(localStorage.getItem("lang"));
        if (lang.id === "ar") {
          return item.toLocaleString("en-US", {
            style: "currency",
            currency: "EGP"
          });
        } else if (lang.id === "en") {
          return item.toLocaleString("ar-EG", {
            style: "currency",
            currency: "EGP"
          });
        }
      }
    },
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    bulkAll() {
      this.$emit("all");
    },
    reload(index = 1, type = "main", orderBy = null, dir = false) {
      let getDir = "";
      if (dir) {
        getDir = dir;
      } else {
        if (this.desc) {
          getDir = "desc";
        } else {
          getDir = "asc";
        }
      }
      let url = {};
      url.page = index;
      this.search ? url.search = this.search : "";
      url.per_page = this.per_page;
      orderBy ? url.orderBy = orderBy : "";
      url.orderDirection = getDir;
      this.$emit("reload", url);
    },
    viewItem(item) {
      this.$emit("view", item);
    },
    editItem(item) {
      this.$emit("edit", item);
    },
    deleteItem(item) {
      this.$emit("delete", item);
    },
    transItem(item, key) {
      if (item[key].hasOwnProperty("ar") && item[key].hasOwnProperty("en")) {
        if (localStorage.getItem("lang")) {
          let lang = JSON.parse(localStorage.getItem("lang"));
          if (lang.id === "ar") {
            return item[key].en;
          } else if (lang.id === "en") {
            return item[key].ar;
          }
        }
      } else {
        return item[key];
      }
    }
  }
});
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ViltMedia = vue.resolveComponent("ViltMedia");
  const _component_ViltDate = vue.resolveComponent("ViltDate");
  if (_ctx.collection.total) {
    _push(`<table${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "w-full text-left divide-y table-auto xl:rtl:text-right filament-tables-table" }, _attrs))}><thead><tr class="bg-tableHead text-main dark:bg-gray-800 dark:text-white"><th class="w-4 px-4 py-4 whitespace-nowrap filament-tables-checkbox-cell"><input class="block border-gray-300 rounded shadow-sm text-primary-600 focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50" type="checkbox"></th><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.listRows, (item, key) => {
      _push(`<th class="px-2 filament-tables-header-cell">`);
      if (item.sorting) {
        _push(`<button class="${serverRenderer.ssrRenderClass([{
          "font-bold": _ctx.orderBy == item.field
        }, "flex items-center w-full px-0 py-2 space-x-1 text-sm font-normal cursor-default text-main dark:text-white whitespace-nowrap rtl:space-x-reverse"])}">`);
        if (_ctx.orderBy == item.field) {
          _push(`<span>`);
          if (_ctx.desc) {
            _push(`<i class="bx bx-sort-a-z"></i>`);
          } else {
            _push(`<i class="bx bx-sort-z-a"></i>`);
          }
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${serverRenderer.ssrInterpolate(item.label)}</button>`);
      } else {
        _push(`<span class="flex items-center w-full px-4 py-2 space-x-1 text-sm font-normal cursor-default dark:text-white whitespace-nowrap rtl:space-x-reverse">${serverRenderer.ssrInterpolate(item.label)}</span>`);
      }
      _push(`</th>`);
    });
    _push(`<!--]-->`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "th", {}, null, _push, _parent);
    _push(`<th class="w-5"><span class="text-sm font-normal">${serverRenderer.ssrInterpolate(_ctx.trans("global.actions"))}</span></th></tr></thead><tbody class="divide-y whitespace-nowrap"><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.collection.data, (item, key) => {
      _push(`<tr class="hover:bg-primary-500/5 dark:hover:bg-primary-500/5 filament-tables-row"><th class="w-4 px-4 whitespace-nowrap filament-tables-checkbox-cell rtl:text-right"><input${serverRenderer.ssrIncludeBooleanAttr(_ctx.bulk[item.id]) ? " checked" : ""} class="block border-gray-300 rounded shadow-sm text-primary-600 focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 table-row-checkbox" value="1" type="checkbox"></th><!--[-->`);
      serverRenderer.ssrRenderList(_ctx.listRows, (field, index) => {
        _push(`<td class="px-2 rtl:text-right text-14">`);
        if (field.type === "relation") {
          _push(`<div class="grid grid-cols-3 gap-2"><!--[-->`);
          serverRenderer.ssrRenderList(item[field.field], (rel, relIndex) => {
            _push(`<div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">${serverRenderer.ssrInterpolate(rel[field.track_by_name] ? rel[field.track_by_name] : "")}</div>`);
          });
          _push(`<!--]--></div>`);
        } else if (field.url) {
          _push(`<div><a${serverRenderer.ssrRenderAttr("href", item[field.field])} target="_blank" class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"> Open URL </a></div>`);
        } else if (field.type === "image") {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltMedia, {
            modelValue: item[field.field],
            "onUpdate:modelValue": ($event) => item[field.field] = $event,
            multi: field.multi,
            view: "table"
          }, null, _parent));
          _push(`</div>`);
        } else if (field.type === "color") {
          _push(`<div><div class="w-8 h-8 rounded-full" style="${serverRenderer.ssrRenderStyle("background-color: " + item[field.field])}"></div></div>`);
        } else if (field.type === "hasOne") {
          _push(`<div><div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">${serverRenderer.ssrInterpolate(item[field.field] ? item[field.field][field.track_by_name] : "")}</div></div>`);
        } else if (field.type === "select-value") {
          _push(`<div><div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">${serverRenderer.ssrInterpolate(item[field.field] ? item[field.field][field.track_by_name] : "")}</div></div>`);
        } else if (field.type === "switch") {
          _push(`<div>`);
          if (item[field.field] == true) {
            _push(`<div class="w-10 h-10 p-2 text-lg text-center text-white bg-green-500 rounded-full"><i class="bx bx-check"></i></div>`);
          } else {
            _push(`<div class="w-10 h-10 p-2 text-lg text-center text-white rounded-full bg-danger-500"><i class="bx bx-x"></i></div>`);
          }
          _push(`</div>`);
        } else if (field.type === "date" || field.type === "datetime" || field.type === "time") {
          _push(serverRenderer.ssrRenderComponent(_component_ViltDate, {
            view: "table",
            modelValue: item[field.field],
            "onUpdate:modelValue": ($event) => item[field.field] = $event,
            type: field.type,
            label: field.label
          }, null, _parent));
        } else if (field.type === "icon") {
          _push(`<div><div class="text-3xl"><i class="${serverRenderer.ssrRenderClass(item[field.field])}"></i></div></div>`);
        } else if (field.type === "schema") {
          _push(`<div class="grid grid-cols-3 gap-2"><!--[-->`);
          serverRenderer.ssrRenderList(field.options, (rel, relIndex) => {
            _push(`<div>`);
            if (item[field.field][rel.field]) {
              _push(`<div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"><span>${serverRenderer.ssrInterpolate(item[field.field][rel.field])}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div>${serverRenderer.ssrInterpolate(item[field.field])}</div>`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "td", {}, null, _push, _parent);
        _push(`</td>`);
      });
      _push(`<!--]--><td class="px-4 py-3 whitespace-nowrap filament-tables-actions-cell"><div class="flex items-center justify-end gap-4 my-4">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(`<div>`);
      if (_ctx.$attrs.canView || _ctx.$attrs.canViewAny) {
        _push(`<a class="inline-flex items-center justify-center text-sm font-normal filament-tables-link text-main hover:text-greenColor3 filament-tables-link-action" href="#" title="Edit" role="button"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 -ml-2 filament-button-icon rtl:ml-1 rtl:-mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> ${serverRenderer.ssrInterpolate(_ctx.trans("global.view"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      if (_ctx.$attrs.canEdit) {
        _push(`<a class="inline-flex items-center justify-center text-sm font-normal hover:underline focus:outline-none focus:underline filament-tables-link text-main hover:text-greenColor3 filament-tables-link-action" href="#" title="Edit" role="button"><svg class="w-4 h-4 mr-1 -ml-2 filament-button-icon rtl:ml-1 rtl:-mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg> ${serverRenderer.ssrInterpolate(_ctx.trans("global.edit"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><form>`);
      if (_ctx.$attrs.canDelete || _ctx.$attrs.canDeleteAny) {
        _push(`<button type="submit" class="inline-flex items-center justify-center text-sm font-normal hover:underline focus:outline-none focus:underline filament-tables-link text-danger-600 hover:text-danger-500 filament-tables-link-action" title="Delete"><svg class="w-4 h-4 mr-1 -ml-2 filament-button-icon rtl:ml-1 rtl:-mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> ${serverRenderer.ssrInterpolate(_ctx.trans("global.delete"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></td></tr>`);
    });
    _push(`<!--]--></tbody></table>`);
  } else {
    _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative overflow-y-auto" }, _attrs))}><div class="flex items-center justify-center p-4"><div class="flex flex-col items-center justify-center flex-1 p-6 mx-auto space-y-6 text-center bg-white filament-tables-empty-state dark:bg-gray-900/70"><div class="flex items-center justify-center w-16 h-16 rounded-full text-primary-500 bg-tableHead"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#3A9252" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></div><div class="max-w-xs space-y-1"><h2 class="font-normal tracking-tight text-md filament-tables-empty-state-heading">${serverRenderer.ssrInterpolate(_ctx.trans("global.empty"))}</h2><p class="text-sm font-normal text-gray-500 filament-tables-empty-state-description"></p></div></div></div></div>`);
  }
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Table.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var List$2 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$T]]);
const _sfc_main$S = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link
  },
  props: {
    collection: Object,
    per_page: Number,
    url: String
  },
  watch: {
    per_page(newValue, oldValue) {
      this.setPerPage = newValue;
    }
  },
  data() {
    return {
      setPerPage: 10,
      start_page: 0,
      last_page: 1
    };
  },
  mounted() {
    if (this.collection.total >= 5 && this.collection.current_page > 3) {
      this.start_page = this.collection.current_page - 2;
    } else {
      this.start_page = 1;
    }
    if (this.collection.last_page == this.start_page) {
      this.last_page = this.start_page + 1;
    } else if (this.start_page + 5 <= this.collection.last_page) {
      this.last_page = this.start_page + 5;
    } else {
      let get_last = this.collection.last_page - this.start_page;
      this.last_page = this.start_page + get_last + 1;
    }
  },
  computed: {
    lang() {
      return this.$page.props.trans;
    }
  },
  methods: {
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    getNumbers(start, stop) {
      return new Array(stop - start).fill(start).map((n2, i2) => n2 + i2);
    },
    reload(page, type) {
      let url = {};
      url.page = page;
      url.per_page = this.setPerPage;
      this.$emit("reload", url);
    },
    next() {
      if (this.collection.current_page === this.last_page) {
        this.reload(this.last_page);
      } else {
        this.reload(this.collection.current_page + 1);
      }
    },
    back() {
      if (this.collection.current_page === 1) {
        this.reload(1);
      } else {
        this.reload(this.collection.current_page - 1);
      }
    }
  }
});
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    role: "navigation",
    "aria-label": "Pagination Navigation",
    class: "flex items-center justify-between filament-tables-pagination"
  }, _attrs))}><div class="flex items-center justify-between flex-1"><div class="flex items-center"><div class="pl-2 text-sm font-normal dark:text-white"> Showing ${serverRenderer.ssrInterpolate(_ctx.collection.from)} to ${serverRenderer.ssrInterpolate(_ctx.collection.to)} of ${serverRenderer.ssrInterpolate(_ctx.collection.total)} results </div></div><div class="flex items-center space-x-2 rtl:space-x-reverse filament-tables-pagination-records-per-page-selector"><select id="tableRecordsPerPageSelect" class="h-8 px-6 text-sm leading-none transition duration-75 border-gray-300 rounded-lg shadow-sm focus:border-primary-600 focus:ring-1 focus:ring-inset focus:ring-primary-600 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"><option value="5">5</option><option value="10">10</option><option value="25">25</option><option value="50">50</option></select><label for="tableRecordsPerPageSelect" class="text-sm font-normal"> per page </label></div>`);
  if (_ctx.collection.total > _ctx.collection.per_page) {
    _push(`<div class="flex items-center justify-end"><div class="py-3 border rounded-lg dark:border-gray-600"><ol class="flex items-center text-sm text-gray-500 divide-x divide-gray-300 dark:text-gray-400"><li><button style="${serverRenderer.ssrRenderStyle(_ctx.collection.current_page !== 1 ? null : { display: "none" })}" type="button" class="relative flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item hover:bg-gray-500/5 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-400/5 transition text-primary-600" aria-label="Previous" rel="prev"><svg class="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span></span></button></li><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.getNumbers(_ctx.start_page, _ctx.last_page), (page, key) => {
      _push(`<li>`);
      if (_ctx.collection.current_page === page) {
        _push(`<button type="button" class="flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item transition text-primary-600 focus:underline bg-primary-500/10 ring-2 ring-primary-500" aria-label="Go to page 1"><span>${serverRenderer.ssrInterpolate(page)}</span></button>`);
      } else {
        _push(`<button type="button" class="flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item hover:bg-gray-500/5 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-400/5 focus:text-primary-600 transition" aria-label="Go to page 2"><span>${serverRenderer.ssrInterpolate(page)}</span></button>`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--><li><button style="${serverRenderer.ssrRenderStyle(_ctx.collection.current_page !== _ctx.collection.last_page ? null : { display: "none" })}" type="button" class="flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item hover:bg-gray-500/5 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-400/5 transition text-primary-600" aria-label="Next" rel="next"><svg class="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg><span></span></button></li></ol></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></nav>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Pagination.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$S]]);
const _sfc_main$R = vue.defineComponent({
  emits: ["close"],
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: (show) => {
        if (show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    }
  },
  setup(props, { emit }) {
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    vue.onMounted(() => document.addEventListener("keydown", closeOnEscape));
    vue.onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    return {
      close
    };
  },
  computed: {
    maxWidthClass() {
      return {
        "sm": "sm:max-w-sm",
        "md": "sm:max-w-md",
        "lg": "sm:max-w-lg",
        "xl": "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[this.maxWidth];
    }
  }
});
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  serverRenderer.ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div style="${serverRenderer.ssrRenderStyle(_ctx.show ? null : { display: "none" })}" class="fixed inset-0 z-50 px-4 py-6 overflow-y-auto sm:px-0" scroll-region><div style="${serverRenderer.ssrRenderStyle(_ctx.show ? null : { display: "none" })}" class="fixed inset-0 transition-all transform"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${serverRenderer.ssrRenderStyle(_ctx.show ? null : { display: "none" })}" class="${serverRenderer.ssrRenderClass([_ctx.maxWidthClass, "mb-6 transition-all transform bg-white rounded-lg shadow-xl sm:w-full sm:mx-auto"])}">`);
    if (_ctx.show) {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div></div>`);
  }, "body", false, _parent);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Modal.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$R]]);
const _sfc_main$Q = vue.defineComponent({
  emits: ["close"],
  components: {
    Modal
  },
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
});
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal = vue.resolveComponent("modal");
  _push(serverRenderer.ssrRenderComponent(_component_modal, vue.mergeProps({
    show: _ctx.show,
    "max-width": _ctx.maxWidth,
    closeable: _ctx.closeable,
    onClose: _ctx.close
  }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-6 py-4"${_scopeId}><div class="text-lg"${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          vue.createVNode("div", { class: "px-6 py-4" }, [
            vue.createVNode("div", { class: "text-lg" }, [
              vue.renderSlot(_ctx.$slots, "title")
            ]),
            vue.createVNode("div", { class: "mt-4" }, [
              vue.renderSlot(_ctx.$slots, "content")
            ])
          ]),
          vue.createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 text-right" }, [
            vue.renderSlot(_ctx.$slots, "footer")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DialogModal.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var JetDialogModal = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$Q]]);
const _sfc_main$P = vue.defineComponent({
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    type: _ctx.type,
    class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SecondaryButton.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var JetSecondaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$P]]);
const _sfc_main$O = vue.defineComponent({
  props: {
    type: {
      type: String,
      default: "submit"
    }
  }
});
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    type: _ctx.type,
    class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Button.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var JetButton = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$O]]);
const _sfc_main$N = vue.defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  }
});
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<input${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
    value: _ctx.modelValue,
    ref: "input"
  }, _attrs))}>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Input.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var JetInput = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$N]]);
const _sfc_main$M = vue.defineComponent({
  components: {
    JetInputError,
    JetLabel
  },
  props: [
    "label",
    "type",
    "value",
    "class",
    "id",
    "icon",
    "placeholder",
    "message",
    "modelValue",
    "readonly"
  ],
  emits: ["update:modelValue"]
});
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><label${serverRenderer.ssrRenderAttr("for", _ctx.id)} class="h-40 text-sm font-normal">${serverRenderer.ssrInterpolate(_ctx.label)}</label><div class="relative mt-1"><input${serverRenderer.ssrRenderAttr("type", _ctx.type)}${serverRenderer.ssrRenderAttr("name", _ctx.id)}${serverRenderer.ssrRenderAttr("id", _ctx.id)}${serverRenderer.ssrRenderAttr("value", _ctx.modelValue)}${serverRenderer.ssrRenderAttr("placeholder", _ctx.placeholder)}${serverRenderer.ssrIncludeBooleanAttr(_ctx.readonly) ? " readonly" : ""} class="w-full h-40 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:border-main focus:ring-0 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"></div>`);
  _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
    message: _ctx.message,
    class: "mt-2"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Components/Text.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var Text = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$M]]);
function o(e2, l2) {
  var a2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(e2);
    l2 && (n2 = n2.filter(function(l3) {
      return Object.getOwnPropertyDescriptor(e2, l3).enumerable;
    })), a2.push.apply(a2, n2);
  }
  return a2;
}
function f(e2, l2, a2) {
  return l2 in e2 ? Object.defineProperty(e2, l2, { value: a2, enumerable: true, configurable: true, writable: true }) : e2[l2] = a2, e2;
}
function s(a2, n2, t4) {
  var u2 = vue.toRefs(a2), r2 = u2.disabled, d2 = t4.checked, i2 = vue.computed(function() {
    return function(e2) {
      for (var l2 = 1; l2 < arguments.length; l2++) {
        var a3 = arguments[l2] != null ? arguments[l2] : {};
        l2 % 2 ? o(Object(a3), true).forEach(function(l3) {
          f(e2, l3, a3[l3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(a3)) : o(Object(a3)).forEach(function(l3) {
          Object.defineProperty(e2, l3, Object.getOwnPropertyDescriptor(a3, l3));
        });
      }
      return e2;
    }({ container: "toggle-container", toggle: "toggle", toggleOn: "toggle-on", toggleOff: "toggle-off", toggleOnDisabled: "toggle-on-disabled", toggleOffDisabled: "toggle-off-disabled", handle: "toggle-handle", handleOn: "toggle-handle-on", handleOff: "toggle-handle-off", handleOnDisabled: "toggle-handle-on-disabled", handleOffDisabled: "toggle-handle-off-disabled", label: "toggle-label" }, u2.classes.value);
  });
  return { classList: vue.computed(function() {
    return { container: i2.value.container, toggle: [i2.value.toggle, r2.value ? d2.value ? i2.value.toggleOnDisabled : i2.value.toggleOffDisabled : d2.value ? i2.value.toggleOn : i2.value.toggleOff], handle: [i2.value.handle, r2.value ? d2.value ? i2.value.handleOnDisabled : i2.value.handleOffDisabled : d2.value ? i2.value.handleOn : i2.value.handleOff], label: i2.value.label };
  }) };
}
var b = { name: "Toggle", emits: ["input", "update:modelValue", "change"], props: { ...{ value: { validator: function(e2) {
  return (e3) => ["number", "string", "boolean"].indexOf(typeof e3) !== -1 || e3 == null;
}, required: false }, modelValue: { validator: function(e2) {
  return (e3) => ["number", "string", "boolean"].indexOf(typeof e3) !== -1 || e3 == null;
}, required: false } }, id: { type: [String, Number], required: false, default: "toggle" }, name: { type: [String, Number], required: false, default: "toggle" }, disabled: { type: Boolean, required: false, default: false }, required: { type: Boolean, required: false, default: false }, falseValue: { type: [String, Number, Boolean], required: false, default: false }, trueValue: { type: [String, Number, Boolean], required: false, default: true }, onLabel: { type: [String, Object], required: false, default: "" }, offLabel: { type: [String, Object], required: false, default: "" }, classes: { type: Object, required: false, default: () => ({}) }, labelledby: { type: String, required: false }, describedby: { type: String, required: false } }, setup(a2, n2) {
  const t4 = function(a3, n3, t5) {
    var u3 = vue.toRefs(a3), r3 = u3.value, d3 = u3.modelValue, i2 = u3.falseValue, c2 = u3.trueValue, o2 = u3.disabled, f2 = n3.expose !== void 0 ? d3 : r3, s2 = vue.computed(function() {
      return f2.value === c2.value;
    }), b2 = function(e2) {
      n3.emit("input", e2), n3.emit("update:modelValue", e2), n3.emit("change", e2);
    }, g2 = function() {
      b2(c2.value);
    }, v2 = function() {
      b2(i2.value);
    };
    return [null, void 0, false, 0, "0", "off"].indexOf(f2.value) !== -1 && [i2.value, c2.value].indexOf(f2.value) === -1 && v2(), [true, 1, "1", "on"].indexOf(f2.value) !== -1 && [i2.value, c2.value].indexOf(f2.value) === -1 && g2(), { externalValue: f2, checked: s2, update: b2, check: g2, uncheck: v2, handleInput: function(e2) {
      b2(e2.target.checked ? c2.value : i2.value);
    }, handleClick: function() {
      o2.value || (s2.value ? v2() : g2());
    } };
  }(a2, n2), u2 = function(a3, n3, t5) {
    var u3 = vue.toRefs(a3), r3 = u3.trueValue, d3 = u3.falseValue, i2 = u3.onLabel, c2 = u3.offLabel, o2 = t5.checked, f2 = t5.update;
    return { label: vue.computed(function() {
      var e2 = o2.value ? i2.value : c2.value;
      return e2 || (e2 = "&nbsp;"), e2;
    }), toggle: function() {
      f2(o2.value ? d3.value : r3.value);
    }, on: function() {
      f2(r3.value);
    }, off: function() {
      f2(d3.value);
    } };
  }(a2, 0, { checked: t4.checked, update: t4.update }), r2 = s(a2, 0, { checked: t4.checked }), d2 = function(l2, a3, n3) {
    var t5 = vue.toRefs(l2).disabled, u3 = n3.check, r3 = n3.uncheck, d3 = n3.checked;
    return { handleSpace: function() {
      t5.value || (d3.value ? r3() : u3());
    } };
  }(a2, 0, { check: t4.check, uncheck: t4.uncheck, checked: t4.checked });
  return { ...t4, ...r2, ...u2, ...d2 };
} };
b.render = function(e2, l2, o2, f2, s2, b2) {
  return vue.openBlock(), vue.createBlock("div", { class: e2.classList.container, tabindex: o2.disabled ? void 0 : 0, "aria-checked": e2.checked, "aria-describedby": o2.describedby, "aria-labelledby": o2.labelledby, role: "switch", onKeyup: l2[2] || (l2[2] = vue.withKeys((...l3) => e2.handleSpace && e2.handleSpace(...l3), ["space"])) }, [vue.withDirectives(vue.createVNode("input", { type: "checkbox", id: o2.id, name: o2.name, value: o2.trueValue, checked: e2.checked, disabled: o2.disabled }, null, 8, ["id", "name", "value", "checked", "disabled"]), [[vue.vShow, false]]), vue.createVNode("div", { class: e2.classList.toggle, onClick: l2[1] || (l2[1] = (...l3) => e2.handleClick && e2.handleClick(...l3)) }, [vue.createVNode("span", { class: e2.classList.handle }, null, 2), vue.renderSlot(e2.$slots, "label", { checked: e2.checked, classList: e2.classList }, () => [vue.createVNode("span", { class: e2.classList.label, innerHTML: e2.label }, null, 10, ["innerHTML"])]), o2.required ? (vue.openBlock(), vue.createBlock("input", { key: 0, type: "checkbox", style: { appearance: "none", height: "1px", margin: "0", padding: "0", fontSize: "0", background: "transparent", position: "absolute", width: "100%", bottom: "0", outline: "none" }, checked: e2.checked, "aria-hidden": "true", tabindex: "-1", required: "" }, null, 8, ["checked"])) : vue.createCommentVNode("v-if", true)], 2)], 42, ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"]);
}, b.__file = "src/Toggle.vue";
const _sfc_main$L = vue.defineComponent({
  components: {
    Toggle: b,
    JetInputError,
    JetLabel
  },
  props: ["id", "modelValue", "label", "message", "class"],
  emits: ["update:modelValue"]
});
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetLabel = vue.resolveComponent("JetLabel");
  const _component_Toggle = vue.resolveComponent("Toggle");
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_JetLabel, {
    for: _ctx.id,
    value: _ctx.label
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_Toggle, {
    name: _ctx.id,
    id: _ctx.id,
    value: _ctx.modelValue,
    class: _ctx.class,
    onInput: ($event) => _ctx.$emit("update:modelValue", $event.target.value)
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
    message: _ctx.message,
    class: "mt-2"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Components/Switch.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$L]]);
const _sfc_main$K = vue.defineComponent({
  components: {
    JetInputError
  },
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    if (this.modelValue) {
      this.value = this.modelValue;
    }
    if (this.default) {
      this.value = this.default;
    }
  },
  props: {
    modelValue: {},
    default: {},
    view: {
      String,
      default: "input"
    },
    type: {
      String,
      default: "text"
    },
    label: {
      String,
      default: "Text"
    },
    id: {
      String
    },
    message: {
      String
    },
    placeholder: {
      String,
      default: "Text"
    },
    disabled: {
      Boolean,
      default: false
    },
    className: {
      String
    }
  }
});
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  _push(`<!--[-->`);
  if (_ctx.view === "input") {
    _push(`<div class="py-2">`);
    if (_ctx.id) {
      _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.id)} class="text-sm font-normal">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<input${serverRenderer.ssrRenderAttr("type", _ctx.type)}${serverRenderer.ssrRenderAttr("name", _ctx.id)}${serverRenderer.ssrRenderAttr("id", _ctx.id)}${serverRenderer.ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${serverRenderer.ssrRenderAttr("value", _ctx.modelValue)}${serverRenderer.ssrRenderDynamicModel(_ctx.type, _ctx.value, _ctx.modelValue)}${serverRenderer.ssrRenderAttr("placeholder", _ctx.placeholder)} class="${serverRenderer.ssrRenderClass([_ctx.className, "w-full h-10 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"])}">`);
    _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
      message: _ctx.message,
      class: "mt-2"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.view === "view") {
    _push(`<div class="flex justify-between my-4"><div><p class="font-bold">${serverRenderer.ssrInterpolate(_ctx.label)}</p></div><div><p>${serverRenderer.ssrInterpolate(_ctx.modelValue)}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltText.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var ViltText = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$K]]);
const _sfc_main$J = vue.defineComponent({
  components: {
    Toggle: b,
    JetInputError,
    JetLabel
  },
  data() {
    return {
      value: false
    };
  },
  mounted() {
    if (this.default) {
      this.value = this.default;
    }
    if (this.modelValue) {
      this.value = this.modelValue;
    }
  },
  created() {
    this.value = this.$props.modelValue;
  },
  props: {
    modelValue: {
      Boolean,
      default: false
    },
    default: {},
    view: {
      String,
      default: "input"
    },
    type: {
      String,
      default: "text"
    },
    label: {
      String,
      default: "Text"
    },
    id: {
      String
    },
    name: {
      String
    },
    message: {
      String
    },
    disabled: {
      Boolean,
      default: false
    },
    className: {
      String
    }
  }
});
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toggle = vue.resolveComponent("Toggle");
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  _push(`<!--[-->`);
  if (_ctx.view === "input") {
    _push(`<div class="mt-2">`);
    if (_ctx.id) {
      _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.id)} class="text-sm font-medium">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<br>`);
    _push(serverRenderer.ssrRenderComponent(_component_Toggle, {
      name: _ctx.id,
      id: _ctx.id,
      modelValue: _ctx.value,
      "onUpdate:modelValue": ($event) => _ctx.value = $event,
      onChange: ($event) => _ctx.$emit("update:modelValue", _ctx.value),
      class: _ctx.className,
      disabled: _ctx.disabled
    }, null, _parent));
    _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
      message: _ctx.message,
      class: "mt-2"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.view === "view") {
    _push(`<div class="flex justify-between my-4"><div><p class="font-bold">${serverRenderer.ssrInterpolate(_ctx.label)}</p></div><div>`);
    if (_ctx.modelValue == 1) {
      _push(`<div class="w-10 h-10 p-2 text-lg text-center text-white bg-green-500 rounded-full"><i class="bx bx-check"></i></div>`);
    } else {
      _push(`<div class="w-10 h-10 p-2 text-lg text-center text-white rounded-full bg-danger-500"><i class="bx bx-x"></i></div>`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltSwitch.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var ViltSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$J]]);
const _sfc_main$I = vue.defineComponent({
  components: {
    JetInputError,
    Multiselect: Multiselect__default["default"]
  },
  data() {
    return {
      value: ""
    };
  },
  beforeUpdate() {
    if (this.default) {
      this.value = this.default;
    }
  },
  mounted() {
    if (this.modelValue) {
      this.value = this.modelValue;
    }
  },
  watch: {
    value(oldValue, newValue) {
      this.$emit("update:modelValue", this.value);
      this.$emit("change");
    }
  },
  props: {
    modelValue: {},
    default: {},
    view: {
      String,
      default: "input"
    },
    type: {
      String,
      default: "select"
    },
    label: {
      String,
      default: "Select"
    },
    id: {
      String
    },
    message: {
      String
    },
    disabled: {
      Boolean,
      default: false
    },
    multi: {
      Boolean,
      default: false
    },
    className: {
      String
    },
    track_by_id: {
      String
    },
    track_by_name: {
      String
    },
    options: {
      Array,
      default: []
    }
  }
});
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  if (_ctx.view === "input") {
    _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "py-2" }, _attrs))}>`);
    if (_ctx.id) {
      _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.id)} class="text-sm font-normal">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.type === "select-value") {
      _push(serverRenderer.ssrRenderComponent(_component_multiselect, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": ($event) => _ctx.value = $event,
        options: _ctx.options,
        multiple: _ctx.multi,
        "track-by": _ctx.track_by_id,
        label: _ctx.track_by_name,
        disabled: _ctx.disabled,
        class: _ctx.className
      }, null, _parent));
    } else if (_ctx.type === "select") {
      _push(serverRenderer.ssrRenderComponent(_component_multiselect, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": ($event) => _ctx.value = $event,
        options: _ctx.options,
        multiple: _ctx.multi,
        disabled: _ctx.disabled,
        class: _ctx.className
      }, null, _parent));
    } else {
      _push(serverRenderer.ssrRenderComponent(_component_multiselect, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": ($event) => _ctx.value = $event,
        options: _ctx.options,
        multiple: _ctx.multi,
        "track-by": _ctx.track_by_id,
        label: _ctx.track_by_name,
        disabled: _ctx.disabled,
        class: _ctx.className
      }, null, _parent));
    }
    _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
      message: _ctx.message,
      class: "mt-2"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltSelect.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var ViltSelect = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$I]]);
const _sfc_main$H = vue.defineComponent({
  components: {
    JetInputError
  },
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    if (this.default) {
      this.value = this.default;
    }
    if (this.modelValue) {
      this.value = this.modelValue;
    }
  },
  props: {
    modelValue: {},
    default: {},
    view: {
      String,
      default: "input"
    },
    label: {
      String,
      default: "Text"
    },
    id: {
      String
    },
    message: {
      String
    },
    placeholder: {
      String,
      default: "Text"
    },
    disabled: {
      Boolean,
      default: false
    },
    className: {
      String
    }
  }
});
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  _push(`<!--[-->`);
  if (_ctx.view === "input") {
    _push(`<div class="py-2">`);
    if (_ctx.id) {
      _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.id)} class="text-sm font-normal">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<textarea rows="5"${serverRenderer.ssrRenderAttr("name", _ctx.id)}${serverRenderer.ssrRenderAttr("id", _ctx.id)}${serverRenderer.ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${serverRenderer.ssrRenderAttr("placeholder", _ctx.placeholder)} class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm">${serverRenderer.ssrInterpolate(_ctx.value)}</textarea>`);
    _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
      message: _ctx.message,
      class: "mt-2"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.view === "view") {
    _push(`<div class="flex justify-between my-4"><div><p class="font-bold">${serverRenderer.ssrInterpolate(_ctx.label)}</p></div><div><p>${serverRenderer.ssrInterpolate(_ctx.modelValue)}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltTextArea.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var ViltTextArea = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$H]]);
const _sfc_main$G = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link,
    JetDialogModal,
    JetSecondaryButton,
    JetButton,
    JetInput,
    JetInputError,
    JetLabel,
    Multiselect: Multiselect__default["default"],
    Text,
    Switch,
    Toggle: b,
    flatPickr: flatPickr__default["default"],
    ViltMedia,
    ViltText,
    ViltSwitch,
    ViltDate,
    ViltSelect,
    ViltTextArea
  },
  props: {
    show: Boolean,
    edit: Boolean,
    errors: Object,
    item: Object,
    title: String,
    url: String,
    rows: Array
  },
  computed: {
    lang() {
      return this.$page.props.data.trans;
    },
    rowFilterCreate() {
      let rows = this.$props.rows;
      let rowValue = [];
      for (let i2 = 0; i2 < rows.length; i2++) {
        if (this.arraysEqual(rows[i2].reactive, this.form[rows[i2].row]) && rows[i2].create) {
          rowValue.push(rows[i2]);
        } else if (!rows[i2].reactive && rows[i2].create) {
          rowValue.push(rows[i2]);
        }
      }
      return rowValue;
    },
    rowFilterEdit() {
      let rows = this.$props.rows;
      let rowValue = [];
      for (let i2 = 0; i2 < rows.length; i2++) {
        if (this.arraysEqual(rows[i2].reactive, this.form[rows[i2].row]) && rows[i2].edit) {
          rowValue.push(rows[i2]);
        } else if (!rows[i2].reactive && rows[i2].edit) {
          rowValue.push(rows[i2]);
        }
      }
      return rowValue;
    }
  },
  watch: {
    show(newValue, oldValue) {
      this.showModal = newValue;
    },
    item(newValue, oldValue) {
      this.form = newValue;
    }
  },
  data() {
    return {
      isDisabledBtn: false,
      showModal: false,
      form: this.$inertia.form(this.item)
    };
  },
  mounted() {
    this.$inertia.on("start", () => this.isDisabledBtn = true);
    this.$inertia.on("finish", () => this.isDisabledBtn = false);
  },
  methods: {
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    close() {
      this.$emit("close", this.showModal);
    },
    success(id = null) {
      if (this.edit) {
        this.$emit("update", { form: thitrues.form, id });
        this.isDisabledBtn = false;
      } else {
        this.$emit("create", this.form);
        this.isDisabledBtn = false;
      }
    },
    saveRecord() {
      this.form.submit("post", this.route(this.url + ".store"), {
        preserveScroll: true,
        onSuccess: () => {
          this.form.reset();
          this.$emit("success");
          this.isDisabledBtn = false;
        }
      });
    },
    updateRecord(id) {
      this.form.submit("post", this.route(this.url + ".update", id), {
        preserveScroll: true,
        forceFormData: true,
        onSuccess: () => {
          this.form.reset();
          this.$emit("success");
          this.isDisabledBtn = false;
        }
      });
    },
    arraysEqual(a2, b2) {
      return JSON.stringify(a2) == JSON.stringify(b2);
    }
  }
});
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetDialogModal = vue.resolveComponent("JetDialogModal");
  const _component_ViltMedia = vue.resolveComponent("ViltMedia");
  const _component_ViltSwitch = vue.resolveComponent("ViltSwitch");
  const _component_JetLabel = vue.resolveComponent("JetLabel");
  const _component_JetInput = vue.resolveComponent("JetInput");
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  const _component_ViltDate = vue.resolveComponent("ViltDate");
  const _component_ViltSelect = vue.resolveComponent("ViltSelect");
  const _component_ViltTextArea = vue.resolveComponent("ViltTextArea");
  const _component_ViltText = vue.resolveComponent("ViltText");
  const _component_JetButton = vue.resolveComponent("JetButton");
  const _component_JetSecondaryButton = vue.resolveComponent("JetSecondaryButton");
  _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, vue.mergeProps({
    show: _ctx.showModal,
    onEnd: _ctx.close
  }, _attrs), {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.ssrInterpolate(_ctx.title)}`);
      } else {
        return [
          vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!_ctx.edit) {
          _push2(`<form class="grid grid-cols-1 gap-3 lg:grid-cols-1" action=""${_scopeId}>`);
          serverRenderer.ssrRenderSlot(_ctx.$slots, "create-top", {}, null, _push2, _parent2, _scopeId);
          _push2(`<!--[-->`);
          serverRenderer.ssrRenderList(_ctx.rowFilterCreate, (field, key) => {
            _push2(`<div class=""${_scopeId}>`);
            if (field.type === "image" && field.create) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltMedia, {
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                disabled: field.disabled === "create" ? true : false,
                label: field.label,
                id: field.field,
                multi: field.multi,
                message: _ctx.errors[field.field],
                preview: field.preview,
                placeholder: field.placeholder
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if (field.type === "switch" && field.create) {
              _push2(`<div class="px-6"${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltSwitch, {
                label: field.label,
                name: field.field,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "create" ? true : false,
                className: field.className
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if ((field.type === "schema" || field.type === "schema-area") && field.create) {
              _push2(`<div${_scopeId}><div${_scopeId}><div class=""${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: field.field,
                value: field.label
              }, null, _parent2, _scopeId));
              _push2(`<div class="px-4 py-4 mt-2 border rounded-default"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(field.options, (input, index) => {
                _push2(`<div class="mt-2"${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                  for: input.field,
                  value: input.label
                }, null, _parent2, _scopeId));
                if (field.type === "schema") {
                  _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
                    id: input.field,
                    modelValue: _ctx.form[field.field][input.field],
                    "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
                    type: input.type,
                    class: "block w-full mt-1",
                    autofocus: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<textarea${serverRenderer.ssrRenderAttr("id", input.field)} rows="5" class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default" autofocus${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.form[field.field][input.field])}</textarea>`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetInputError, {
                message: _ctx.errors[field.field],
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else if ((field.type === "datetime" || field.type === "time" || field.type === "date") && field.create) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltDate, {
                type: field.type,
                label: field.label,
                placeholder: field.placeholder,
                disabled: field.disabled === "create" ? true : false,
                message: _ctx.errors[field.field],
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                className: field.className,
                multi: field.multi
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if ((field.type === "relation" || field.type === "select-value" || field.type === "hasOne" || field.type === "select") && field.create) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltSelect, {
                type: field.type,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                options: field.options,
                multi: field.multi,
                track_by_id: field.track_by_id,
                disabled: field.disabled === "create" ? true : false,
                track_by_name: field.track_by_name,
                label: field.label,
                message: _ctx.errors[field.field]
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if (field.type === "textarea" && field.create) {
              _push2(`<div${_scopeId}>`);
              if (field.create) {
                _push2(`<div class="py-2"${_scopeId}><div${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_ViltTextArea, {
                  label: field.label,
                  id: field.field,
                  modelValue: _ctx.form[field.field],
                  "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                  message: _ctx.errors[field.field],
                  className: field.className,
                  placeholder: field.placeholder,
                  disabled: field.disabled === "create" ? true : false
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else if (field.type === "trans" && field.create) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltText, {
                label: field.label,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                type: "text",
                className: field.className,
                placeholder: field.placeholder,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "create" ? true : false,
                autofocus: ""
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              if (field.create) {
                _push2(`<div${_scopeId}><div${_scopeId}>`);
                if (field.type === "icon") {
                  _push2(serverRenderer.ssrRenderComponent(_component_ViltText, {
                    label: field.label,
                    id: field.field,
                    modelValue: _ctx.form[field.field],
                    "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                    type: "text",
                    className: field.className,
                    placeholder: field.placeholder,
                    message: _ctx.errors[field.field],
                    disabled: field.disabled === "create" ? true : false,
                    autofocus: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(serverRenderer.ssrRenderComponent(_component_ViltText, {
                    id: field.field,
                    label: field.label,
                    modelValue: _ctx.form[field.field],
                    "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                    type: field.type,
                    className: field.className,
                    placeholder: field.placeholder,
                    message: _ctx.errors[field.field],
                    disabled: field.disabled === "create" ? true : false,
                    autofocus: ""
                  }, null, _parent2, _scopeId));
                }
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          });
          _push2(`<!--]-->`);
          serverRenderer.ssrRenderSlot(_ctx.$slots, "create", {}, null, _push2, _parent2, _scopeId);
          _push2(`</form>`);
        } else {
          _push2(`<form class="grid grid-cols-1 gap-3 md:grid-cols-1" action=""${_scopeId}>`);
          serverRenderer.ssrRenderSlot(_ctx.$slots, "edit-top", {}, null, _push2, _parent2, _scopeId);
          _push2(`<!--[-->`);
          serverRenderer.ssrRenderList(_ctx.rowFilterEdit, (field, key) => {
            _push2(`<div class=""${_scopeId}>`);
            if (field.type === "image" && field.edit) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltMedia, {
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                disabled: field.disabled === "edit" ? true : false,
                label: field.label,
                id: field.field,
                multi: field.multi,
                message: _ctx.errors[field.field],
                preview: field.preview,
                placeholder: field.placeholder
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if (field.type === "switch" && field.edit) {
              _push2(`<div class="px-6"${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltSwitch, {
                label: field.label,
                name: field.field,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "edit" ? true : false,
                className: field.className
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if ((field.type === "schema" || field.type === "schema-area") && field.edit) {
              _push2(`<div${_scopeId}><div${_scopeId}><div class="px-4"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: field.field,
                value: field.label
              }, null, _parent2, _scopeId));
              _push2(`<div class="px-4 pb-3 mt-2 border rounded-default"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(field.options, (input, index) => {
                _push2(`<div class="mt-2"${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                  for: input.field,
                  value: input.label
                }, null, _parent2, _scopeId));
                if (field.type === "schema") {
                  _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
                    id: input.field,
                    modelValue: _ctx.form[field.field][input.field],
                    "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
                    type: input.type,
                    class: "block w-full mt-1",
                    autofocus: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<textarea${serverRenderer.ssrRenderAttr("id", input.field)} rows="5" class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default" autofocus${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.form[field.field][input.field])}</textarea>`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetInputError, {
                message: _ctx.errors[field.field],
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else if ((field.type === "datetime" || field.type === "time" || field.type === "date") && field.edit) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltDate, {
                type: field.type,
                label: field.label,
                placeholder: field.placeholder,
                disabled: field.disabled === "edit" ? true : false,
                message: _ctx.errors[field.field],
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                className: field.className,
                multi: field.multi
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if ((field.type === "relation" || field.type === "hasOne" || field.type === "select-value" || field.type === "select") && field.edit) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltSelect, {
                type: field.type,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                options: field.options,
                multi: field.multi,
                track_by_id: field.track_by_id,
                track_by_name: field.track_by_name,
                disabled: field.disabled === "edit" ? true : false,
                label: field.label,
                message: _ctx.errors[field.field]
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if (field.type === "textarea" && field.create) {
              _push2(`<div${_scopeId}>`);
              if (field.edit) {
                _push2(`<div class="py-2"${_scopeId}><div${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_ViltTextArea, {
                  label: field.label,
                  id: field.field,
                  modelValue: _ctx.form[field.field],
                  "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                  message: _ctx.errors[field.field],
                  className: field.className,
                  placeholder: field.placeholder,
                  disabled: field.disabled === "edit" ? true : false
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else if (field.type === "trans" && field.edit) {
              _push2(`<div${_scopeId}><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_ViltText, {
                label: field.label,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                type: "text",
                className: field.className,
                placeholder: field.placeholder,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "edit" ? true : false,
                autofocus: ""
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              if (field.edit) {
                _push2(`<div${_scopeId}><div${_scopeId}>`);
                if (field.type === "icon") {
                  _push2(serverRenderer.ssrRenderComponent(_component_ViltText, {
                    label: field.label,
                    id: field.field,
                    modelValue: _ctx.form[field.field],
                    "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                    type: "text",
                    className: field.className,
                    placeholder: field.placeholder,
                    message: _ctx.errors[field.field],
                    disabled: field.disabled === "edit" ? true : false,
                    autofocus: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(serverRenderer.ssrRenderComponent(_component_ViltText, {
                    id: field.field,
                    label: field.label,
                    modelValue: _ctx.form[field.field],
                    "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                    type: field.type,
                    className: field.className,
                    placeholder: field.placeholder,
                    message: _ctx.errors[field.field],
                    disabled: field.disabled === "edit" ? true : false,
                    autofocus: ""
                  }, null, _parent2, _scopeId));
                }
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          });
          _push2(`<!--]-->`);
          serverRenderer.ssrRenderSlot(_ctx.$slots, "edit", {}, null, _push2, _parent2, _scopeId);
          _push2(`</form>`);
        }
      } else {
        return [
          !_ctx.edit ? (vue.openBlock(), vue.createBlock("form", {
            key: 0,
            class: "grid grid-cols-1 gap-3 lg:grid-cols-1",
            action: ""
          }, [
            vue.renderSlot(_ctx.$slots, "create-top"),
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.rowFilterCreate, (field, key) => {
              return vue.openBlock(), vue.createBlock("div", {
                key,
                class: ""
              }, [
                field.type === "image" && field.create ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltMedia, {
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      disabled: field.disabled === "create" ? true : false,
                      label: field.label,
                      id: field.field,
                      multi: field.multi,
                      message: _ctx.errors[field.field],
                      preview: field.preview,
                      placeholder: field.placeholder
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "id", "multi", "message", "preview", "placeholder"])
                  ])
                ])) : field.type === "switch" && field.create ? (vue.openBlock(), vue.createBlock("div", {
                  key: 1,
                  class: "px-6"
                }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltSwitch, {
                      label: field.label,
                      name: field.field,
                      id: field.field,
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      message: _ctx.errors[field.field],
                      disabled: field.disabled === "create" ? true : false,
                      className: field.className
                    }, null, 8, ["label", "name", "id", "modelValue", "onUpdate:modelValue", "message", "disabled", "className"])
                  ])
                ])) : (field.type === "schema" || field.type === "schema-area") && field.create ? (vue.openBlock(), vue.createBlock("div", { key: 2 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode("div", { class: "" }, [
                      vue.createVNode(_component_JetLabel, {
                        for: field.field,
                        value: field.label
                      }, null, 8, ["for", "value"]),
                      vue.createVNode("div", { class: "px-4 py-4 mt-2 border rounded-default" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(field.options, (input, index) => {
                          return vue.openBlock(), vue.createBlock("div", {
                            key: index,
                            class: "mt-2"
                          }, [
                            vue.createVNode(_component_JetLabel, {
                              for: input.field,
                              value: input.label
                            }, null, 8, ["for", "value"]),
                            field.type === "schema" ? (vue.openBlock(), vue.createBlock(_component_JetInput, {
                              key: 0,
                              id: input.field,
                              modelValue: _ctx.form[field.field][input.field],
                              "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
                              type: input.type,
                              class: "block w-full mt-1",
                              autofocus: ""
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type"])) : vue.withDirectives((vue.openBlock(), vue.createBlock("textarea", {
                              key: 1,
                              id: input.field,
                              "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
                              rows: "5",
                              class: "w-full p-4 text-sm border-gray-200 shadow-sm rounded-default",
                              autofocus: ""
                            }, "\n                                            ", 8, ["id", "onUpdate:modelValue"])), [
                              [
                                vue.vModelText,
                                _ctx.form[field.field][input.field]
                              ]
                            ])
                          ]);
                        }), 128))
                      ]),
                      vue.createVNode(_component_JetInputError, {
                        message: _ctx.errors[field.field],
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ])
                ])) : (field.type === "datetime" || field.type === "time" || field.type === "date") && field.create ? (vue.openBlock(), vue.createBlock("div", { key: 3 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltDate, {
                      type: field.type,
                      label: field.label,
                      placeholder: field.placeholder,
                      disabled: field.disabled === "create" ? true : false,
                      message: _ctx.errors[field.field],
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      className: field.className,
                      multi: field.multi
                    }, null, 8, ["type", "label", "placeholder", "disabled", "message", "modelValue", "onUpdate:modelValue", "className", "multi"])
                  ])
                ])) : (field.type === "relation" || field.type === "select-value" || field.type === "hasOne" || field.type === "select") && field.create ? (vue.openBlock(), vue.createBlock("div", { key: 4 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltSelect, {
                      type: field.type,
                      id: field.field,
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      options: field.options,
                      multi: field.multi,
                      track_by_id: field.track_by_id,
                      disabled: field.disabled === "create" ? true : false,
                      track_by_name: field.track_by_name,
                      label: field.label,
                      message: _ctx.errors[field.field]
                    }, null, 8, ["type", "id", "modelValue", "onUpdate:modelValue", "options", "multi", "track_by_id", "disabled", "track_by_name", "label", "message"])
                  ])
                ])) : field.type === "textarea" && field.create ? (vue.openBlock(), vue.createBlock("div", { key: 5 }, [
                  field.create ? (vue.openBlock(), vue.createBlock("div", {
                    key: 0,
                    class: "py-2"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode(_component_ViltTextArea, {
                        label: field.label,
                        id: field.field,
                        modelValue: _ctx.form[field.field],
                        "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                        message: _ctx.errors[field.field],
                        className: field.className,
                        placeholder: field.placeholder,
                        disabled: field.disabled === "create" ? true : false
                      }, null, 8, ["label", "id", "modelValue", "onUpdate:modelValue", "message", "className", "placeholder", "disabled"])
                    ])
                  ])) : vue.createCommentVNode("", true)
                ])) : field.type === "trans" && field.create ? (vue.openBlock(), vue.createBlock("div", { key: 6 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltText, {
                      label: field.label,
                      id: field.field,
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      type: "text",
                      className: field.className,
                      placeholder: field.placeholder,
                      message: _ctx.errors[field.field],
                      disabled: field.disabled === "create" ? true : false,
                      autofocus: ""
                    }, null, 8, ["label", "id", "modelValue", "onUpdate:modelValue", "className", "placeholder", "message", "disabled"])
                  ])
                ])) : (vue.openBlock(), vue.createBlock("div", { key: 7 }, [
                  field.create ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                    vue.createVNode("div", null, [
                      field.type === "icon" ? (vue.openBlock(), vue.createBlock(_component_ViltText, {
                        key: 0,
                        label: field.label,
                        id: field.field,
                        modelValue: _ctx.form[field.field],
                        "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                        type: "text",
                        className: field.className,
                        placeholder: field.placeholder,
                        message: _ctx.errors[field.field],
                        disabled: field.disabled === "create" ? true : false,
                        autofocus: ""
                      }, null, 8, ["label", "id", "modelValue", "onUpdate:modelValue", "className", "placeholder", "message", "disabled"])) : (vue.openBlock(), vue.createBlock(_component_ViltText, {
                        key: 1,
                        id: field.field,
                        label: field.label,
                        modelValue: _ctx.form[field.field],
                        "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                        type: field.type,
                        className: field.className,
                        placeholder: field.placeholder,
                        message: _ctx.errors[field.field],
                        disabled: field.disabled === "create" ? true : false,
                        autofocus: ""
                      }, null, 8, ["id", "label", "modelValue", "onUpdate:modelValue", "type", "className", "placeholder", "message", "disabled"]))
                    ])
                  ])) : vue.createCommentVNode("", true)
                ]))
              ]);
            }), 128)),
            vue.renderSlot(_ctx.$slots, "create")
          ])) : (vue.openBlock(), vue.createBlock("form", {
            key: 1,
            class: "grid grid-cols-1 gap-3 md:grid-cols-1",
            action: ""
          }, [
            vue.renderSlot(_ctx.$slots, "edit-top"),
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.rowFilterEdit, (field, key) => {
              return vue.openBlock(), vue.createBlock("div", {
                key,
                class: ""
              }, [
                field.type === "image" && field.edit ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltMedia, {
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      disabled: field.disabled === "edit" ? true : false,
                      label: field.label,
                      id: field.field,
                      multi: field.multi,
                      message: _ctx.errors[field.field],
                      preview: field.preview,
                      placeholder: field.placeholder
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "label", "id", "multi", "message", "preview", "placeholder"])
                  ])
                ])) : field.type === "switch" && field.edit ? (vue.openBlock(), vue.createBlock("div", {
                  key: 1,
                  class: "px-6"
                }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltSwitch, {
                      label: field.label,
                      name: field.field,
                      id: field.field,
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      message: _ctx.errors[field.field],
                      disabled: field.disabled === "edit" ? true : false,
                      className: field.className
                    }, null, 8, ["label", "name", "id", "modelValue", "onUpdate:modelValue", "message", "disabled", "className"])
                  ])
                ])) : (field.type === "schema" || field.type === "schema-area") && field.edit ? (vue.openBlock(), vue.createBlock("div", { key: 2 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode("div", { class: "px-4" }, [
                      vue.createVNode(_component_JetLabel, {
                        for: field.field,
                        value: field.label
                      }, null, 8, ["for", "value"]),
                      vue.createVNode("div", { class: "px-4 pb-3 mt-2 border rounded-default" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(field.options, (input, index) => {
                          return vue.openBlock(), vue.createBlock("div", {
                            key: index,
                            class: "mt-2"
                          }, [
                            vue.createVNode(_component_JetLabel, {
                              for: input.field,
                              value: input.label
                            }, null, 8, ["for", "value"]),
                            field.type === "schema" ? (vue.openBlock(), vue.createBlock(_component_JetInput, {
                              key: 0,
                              id: input.field,
                              modelValue: _ctx.form[field.field][input.field],
                              "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
                              type: input.type,
                              class: "block w-full mt-1",
                              autofocus: ""
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type"])) : vue.withDirectives((vue.openBlock(), vue.createBlock("textarea", {
                              key: 1,
                              id: input.field,
                              "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
                              rows: "5",
                              class: "w-full p-4 text-sm border-gray-200 shadow-sm rounded-default",
                              autofocus: ""
                            }, "\n\n                                        ", 8, ["id", "onUpdate:modelValue"])), [
                              [
                                vue.vModelText,
                                _ctx.form[field.field][input.field]
                              ]
                            ])
                          ]);
                        }), 128))
                      ]),
                      vue.createVNode(_component_JetInputError, {
                        message: _ctx.errors[field.field],
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ])
                ])) : (field.type === "datetime" || field.type === "time" || field.type === "date") && field.edit ? (vue.openBlock(), vue.createBlock("div", { key: 3 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltDate, {
                      type: field.type,
                      label: field.label,
                      placeholder: field.placeholder,
                      disabled: field.disabled === "edit" ? true : false,
                      message: _ctx.errors[field.field],
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      className: field.className,
                      multi: field.multi
                    }, null, 8, ["type", "label", "placeholder", "disabled", "message", "modelValue", "onUpdate:modelValue", "className", "multi"])
                  ])
                ])) : (field.type === "relation" || field.type === "hasOne" || field.type === "select-value" || field.type === "select") && field.edit ? (vue.openBlock(), vue.createBlock("div", { key: 4 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltSelect, {
                      type: field.type,
                      id: field.field,
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      options: field.options,
                      multi: field.multi,
                      track_by_id: field.track_by_id,
                      track_by_name: field.track_by_name,
                      disabled: field.disabled === "edit" ? true : false,
                      label: field.label,
                      message: _ctx.errors[field.field]
                    }, null, 8, ["type", "id", "modelValue", "onUpdate:modelValue", "options", "multi", "track_by_id", "track_by_name", "disabled", "label", "message"])
                  ])
                ])) : field.type === "textarea" && field.create ? (vue.openBlock(), vue.createBlock("div", { key: 5 }, [
                  field.edit ? (vue.openBlock(), vue.createBlock("div", {
                    key: 0,
                    class: "py-2"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode(_component_ViltTextArea, {
                        label: field.label,
                        id: field.field,
                        modelValue: _ctx.form[field.field],
                        "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                        message: _ctx.errors[field.field],
                        className: field.className,
                        placeholder: field.placeholder,
                        disabled: field.disabled === "edit" ? true : false
                      }, null, 8, ["label", "id", "modelValue", "onUpdate:modelValue", "message", "className", "placeholder", "disabled"])
                    ])
                  ])) : vue.createCommentVNode("", true)
                ])) : field.type === "trans" && field.edit ? (vue.openBlock(), vue.createBlock("div", { key: 6 }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_ViltText, {
                      label: field.label,
                      id: field.field,
                      modelValue: _ctx.form[field.field],
                      "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                      type: "text",
                      className: field.className,
                      placeholder: field.placeholder,
                      message: _ctx.errors[field.field],
                      disabled: field.disabled === "edit" ? true : false,
                      autofocus: ""
                    }, null, 8, ["label", "id", "modelValue", "onUpdate:modelValue", "className", "placeholder", "message", "disabled"])
                  ])
                ])) : (vue.openBlock(), vue.createBlock("div", { key: 7 }, [
                  field.edit ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                    vue.createVNode("div", null, [
                      field.type === "icon" ? (vue.openBlock(), vue.createBlock(_component_ViltText, {
                        key: 0,
                        label: field.label,
                        id: field.field,
                        modelValue: _ctx.form[field.field],
                        "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                        type: "text",
                        className: field.className,
                        placeholder: field.placeholder,
                        message: _ctx.errors[field.field],
                        disabled: field.disabled === "edit" ? true : false,
                        autofocus: ""
                      }, null, 8, ["label", "id", "modelValue", "onUpdate:modelValue", "className", "placeholder", "message", "disabled"])) : (vue.openBlock(), vue.createBlock(_component_ViltText, {
                        key: 1,
                        id: field.field,
                        label: field.label,
                        modelValue: _ctx.form[field.field],
                        "onUpdate:modelValue": ($event) => _ctx.form[field.field] = $event,
                        type: field.type,
                        className: field.className,
                        placeholder: field.placeholder,
                        message: _ctx.errors[field.field],
                        disabled: field.disabled === "edit" ? true : false,
                        autofocus: ""
                      }, null, 8, ["id", "label", "modelValue", "onUpdate:modelValue", "type", "className", "placeholder", "message", "disabled"]))
                    ])
                  ])) : vue.createCommentVNode("", true)
                ]))
              ]);
            }), 128)),
            vue.renderSlot(_ctx.$slots, "edit")
          ]))
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "footer-button", {}, null, _push2, _parent2, _scopeId);
        _push2(`<div class="flex justify-start gap-2"${_scopeId}>`);
        if (!_ctx.edit) {
          _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
            disabled: _ctx.isDisabledBtn,
            onClick: ($event) => _ctx.saveRecord()
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${serverRenderer.ssrInterpolate(_ctx.trans("global.update"))}`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.update")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
            disabled: _ctx.isDisabledBtn,
            onClick: ($event) => _ctx.updateRecord(_ctx.form.id)
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${serverRenderer.ssrInterpolate(_ctx.trans("global.update"))}`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.update")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        }
        _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, { onClick: _ctx.close }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${serverRenderer.ssrInterpolate(_ctx.trans("global.close"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "footer-button"),
          vue.createVNode("div", { class: "flex justify-start gap-2" }, [
            !_ctx.edit ? (vue.openBlock(), vue.createBlock(_component_JetButton, {
              key: 0,
              disabled: _ctx.isDisabledBtn,
              onClick: vue.withModifiers(($event) => _ctx.saveRecord(), ["prevent"])
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.update")), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])) : (vue.openBlock(), vue.createBlock(_component_JetButton, {
              key: 1,
              disabled: _ctx.isDisabledBtn,
              onClick: vue.withModifiers(($event) => _ctx.updateRecord(_ctx.form.id), ["prevent"])
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.update")), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])),
            vue.createVNode(_component_JetSecondaryButton, { onClick: _ctx.close }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Modals/Create.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var CreateModal = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$G]]);
const _sfc_main$F = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link,
    JetDialogModal,
    JetSecondaryButton,
    JetButton,
    ViltMedia
  },
  props: {
    show: Boolean,
    item: Object,
    rows: Array,
    title: String
  },
  watch: {
    show(newValue, oldValue) {
      this.showModal = newValue;
    }
  },
  computed: {
    lang() {
      return this.$page.props.data.trans;
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    close() {
      this.$emit("close", this.showModal);
    }
  }
});
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetDialogModal = vue.resolveComponent("JetDialogModal");
  const _component_ViltMedia = vue.resolveComponent("ViltMedia");
  const _component_JetSecondaryButton = vue.resolveComponent("JetSecondaryButton");
  _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, vue.mergeProps({
    show: _ctx.showModal,
    onEnd: _ctx.close
  }, _attrs), {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-main"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.title)}</span><hr class="my-4"${_scopeId}>`);
      } else {
        return [
          vue.createVNode("span", { class: "text-main" }, vue.toDisplayString(_ctx.title), 1),
          vue.createVNode("hr", { class: "my-4" })
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="print_area"${_scopeId}><!--[-->`);
        serverRenderer.ssrRenderList(_ctx.rows, (field, key) => {
          _push2(`<div${_scopeId}>`);
          if (field.view) {
            _push2(`<div${_scopeId}>`);
            if (field.type === "image" && _ctx.item[field.field]) {
              _push2(serverRenderer.ssrRenderComponent(_component_ViltMedia, {
                modelValue: _ctx.item[field.field],
                "onUpdate:modelValue": ($event) => _ctx.item[field.field] = $event,
                view: "view",
                multi: field.multi,
                label: field.label
              }, null, _parent2, _scopeId));
            } else if (field.type === "schema") {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div class="grid grid-cols-3 gap-2"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(field.options, (rel, relIndex) => {
                _push2(`<div${_scopeId}>`);
                if (_ctx.item[field.field][rel.field]) {
                  _push2(`<div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"${_scopeId}><span${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.item[field.field][rel.field] ? _ctx.item[field.field][rel.field] : "")}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else if (field.url) {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div${_scopeId}><a target="_blank"${serverRenderer.ssrRenderAttr("href", _ctx.item[field.field])} class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"${_scopeId}> Open URL </a></div></div>`);
            } else if (field.type === "color") {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div${_scopeId}><div class="w-8 h-8 rounded-full" style="${serverRenderer.ssrRenderStyle("background-color: " + _ctx.item[field.field])}"${_scopeId}></div></div></div>`);
            } else if (field.type === "icon") {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div class="text-3xl"${_scopeId}><i class="${serverRenderer.ssrRenderClass(_ctx.item[field.field])}"${_scopeId}></i></div></div>`);
            } else if (field.type === "switch") {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div${_scopeId}>`);
              if (_ctx.item[field.field] == "1") {
                _push2(`<div class="w-10 h-10 p-2 text-lg text-center text-white bg-green-500 rounded-full"${_scopeId}><i class="bx bx-check"${_scopeId}></i></div>`);
              } else {
                _push2(`<div class="w-10 h-10 p-2 text-lg text-center text-white rounded-full bg-danger-500"${_scopeId}><i class="bx bx-x"${_scopeId}></i></div>`);
              }
              _push2(`</div></div>`);
            } else if (field.type === "hasOne") {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div class="grid grid-cols-1 gap-2"${_scopeId}><div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.item[field.field][field.track_by_name] ? _ctx.item[field.field][field.track_by_name] : "")}</div></div></div>`);
            } else if (field.type === "select-value") {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div class="grid grid-cols-1 gap-2"${_scopeId}><div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.item[field.field][field.track_by_name] ? _ctx.item[field.field][field.track_by_name] : "")}</div></div></div>`);
            } else if (field.type === "relation") {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normal"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div class="grid grid-cols-3 gap-2"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(_ctx.item[field.field], (rel, relIndex) => {
                _push2(`<div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"${_scopeId}>${serverRenderer.ssrInterpolate(rel[field.track_by_name] ? rel[field.track_by_name] : "")}</div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<div class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"${_scopeId}><div${_scopeId}><p class="font-normals"${_scopeId}>${serverRenderer.ssrInterpolate(field.label)}</p></div><div class="text-14"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.item[field.field])}</div></div>`);
            }
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "print_area" }, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.rows, (field, key) => {
              return vue.openBlock(), vue.createBlock("div", { key }, [
                field.view ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                  field.type === "image" && _ctx.item[field.field] ? (vue.openBlock(), vue.createBlock(_component_ViltMedia, {
                    key: 0,
                    modelValue: _ctx.item[field.field],
                    "onUpdate:modelValue": ($event) => _ctx.item[field.field] = $event,
                    view: "view",
                    multi: field.multi,
                    label: field.label
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "multi", "label"])) : field.type === "schema" ? (vue.openBlock(), vue.createBlock("div", {
                    key: 1,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", { class: "grid grid-cols-3 gap-2" }, [
                      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(field.options, (rel, relIndex) => {
                        return vue.openBlock(), vue.createBlock("div", { key: relIndex }, [
                          _ctx.item[field.field][rel.field] ? (vue.openBlock(), vue.createBlock("div", {
                            key: 0,
                            class: "inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"
                          }, [
                            vue.createVNode("span", null, vue.toDisplayString(_ctx.item[field.field][rel.field] ? _ctx.item[field.field][rel.field] : ""), 1)
                          ])) : vue.createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])
                  ])) : field.url ? (vue.openBlock(), vue.createBlock("div", {
                    key: 2,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", null, [
                      vue.createVNode("a", {
                        target: "_blank",
                        href: _ctx.item[field.field],
                        class: "inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500"
                      }, " Open URL ", 8, ["href"])
                    ])
                  ])) : field.type === "color" ? (vue.openBlock(), vue.createBlock("div", {
                    key: 3,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", null, [
                      vue.createVNode("div", {
                        class: "w-8 h-8 rounded-full",
                        style: "background-color: " + _ctx.item[field.field]
                      }, null, 4)
                    ])
                  ])) : field.type === "icon" ? (vue.openBlock(), vue.createBlock("div", {
                    key: 4,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", { class: "text-3xl" }, [
                      vue.createVNode("i", {
                        class: _ctx.item[field.field]
                      }, null, 2)
                    ])
                  ])) : field.type === "switch" ? (vue.openBlock(), vue.createBlock("div", {
                    key: 5,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", null, [
                      _ctx.item[field.field] == "1" ? (vue.openBlock(), vue.createBlock("div", {
                        key: 0,
                        class: "w-10 h-10 p-2 text-lg text-center text-white bg-green-500 rounded-full"
                      }, [
                        vue.createVNode("i", { class: "bx bx-check" })
                      ])) : (vue.openBlock(), vue.createBlock("div", {
                        key: 1,
                        class: "w-10 h-10 p-2 text-lg text-center text-white rounded-full bg-danger-500"
                      }, [
                        vue.createVNode("i", { class: "bx bx-x" })
                      ]))
                    ])
                  ])) : field.type === "hasOne" ? (vue.openBlock(), vue.createBlock("div", {
                    key: 6,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", { class: "grid grid-cols-1 gap-2" }, [
                      vue.createVNode("div", { class: "inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500" }, vue.toDisplayString(_ctx.item[field.field][field.track_by_name] ? _ctx.item[field.field][field.track_by_name] : ""), 1)
                    ])
                  ])) : field.type === "select-value" ? (vue.openBlock(), vue.createBlock("div", {
                    key: 7,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", { class: "grid grid-cols-1 gap-2" }, [
                      vue.createVNode("div", { class: "inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500" }, vue.toDisplayString(_ctx.item[field.field][field.track_by_name] ? _ctx.item[field.field][field.track_by_name] : ""), 1)
                    ])
                  ])) : field.type === "relation" ? (vue.openBlock(), vue.createBlock("div", {
                    key: 8,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normal" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", { class: "grid grid-cols-3 gap-2" }, [
                      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.item[field.field], (rel, relIndex) => {
                        return vue.openBlock(), vue.createBlock("div", {
                          class: "inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500",
                          key: relIndex
                        }, vue.toDisplayString(rel[field.track_by_name] ? rel[field.track_by_name] : ""), 1);
                      }), 128))
                    ])
                  ])) : (vue.openBlock(), vue.createBlock("div", {
                    key: 9,
                    class: "flex justify-between pb-4 my-4 border-b-2 border-gray-100"
                  }, [
                    vue.createVNode("div", null, [
                      vue.createVNode("p", { class: "font-normals" }, vue.toDisplayString(field.label), 1)
                    ]),
                    vue.createVNode("div", { class: "text-14" }, vue.toDisplayString(_ctx.item[field.field]), 1)
                  ]))
                ])) : vue.createCommentVNode("", true)
              ]);
            }), 128))
          ])
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, { onClick: _ctx.close }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${serverRenderer.ssrInterpolate(_ctx.trans("global.close"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createVNode(_component_JetSecondaryButton, { onClick: _ctx.close }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Modals/View.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var ViewModal = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$F]]);
const _sfc_main$E = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link,
    JetDialogModal,
    JetSecondaryButton,
    JetButton,
    JetInput,
    JetInputError,
    JetLabel
  },
  props: {
    show: Boolean,
    url: String,
    item: Object
  },
  data() {
    return {
      showModal: false,
      form: {}
    };
  },
  watch: {
    show(newValue, oldValue) {
      this.showModal = newValue;
    },
    item(newValue, oldValue) {
      this.form = newValue;
    }
  },
  computed: {
    lang() {
      return this.$page.props.data.trans;
    }
  },
  methods: {
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    close() {
      this.$emit("close", this.showModal);
    },
    destroyRecord(id) {
      this.form.submit("delete", this.route(this.url + ".destory", id), {
        preserveScroll: true,
        onSuccess: () => {
          this.form.reset();
          this.$emit("success");
        }
      });
    }
  }
});
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetDialogModal = vue.resolveComponent("JetDialogModal");
  const _component_JetSecondaryButton = vue.resolveComponent("JetSecondaryButton");
  _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, vue.mergeProps({
    show: _ctx.showModal,
    onEnd: ($event) => _ctx.close()
  }, _attrs), {
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center"${_scopeId}><h1 class="py-4 text-lg font-bold text-red-500"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.trans("global.delete"))}</h1><h3 claass=" text-gray-400 text-center"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.trans("global.delete.message"))}</h3></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "text-center" }, [
            vue.createVNode("h1", { class: "py-4 text-lg font-bold text-red-500" }, vue.toDisplayString(_ctx.trans("global.delete")), 1),
            vue.createVNode("h3", { claass: " text-gray-400 text-center" }, vue.toDisplayString(_ctx.trans("global.delete.message")), 1)
          ])
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="inline-flex items-center justify-center px-4 mr-3 font-normal tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-danger-600 hover:bg-danger-500 focus:bg-danger-700 focus:ring-offset-danger-700 filament-page-button-action"${_scopeId}> Delete </button>`);
        _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, {
          onClick: ($event) => _ctx.close()
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Close `);
            } else {
              return [
                vue.createTextVNode(" Close ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode("button", {
            class: "inline-flex items-center justify-center px-4 mr-3 font-normal tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-danger-600 hover:bg-danger-500 focus:bg-danger-700 focus:ring-offset-danger-700 filament-page-button-action",
            onClick: vue.withModifiers(($event) => _ctx.destroyRecord(_ctx.form.id), ["prevent"])
          }, " Delete ", 8, ["onClick"]),
          vue.createVNode(_component_JetSecondaryButton, {
            onClick: ($event) => _ctx.close()
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Close ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Modals/Delete.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var DeleteModal = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$E]]);
const _sfc_main$D = vue.defineComponent({
  components: {
    Link: inertiaVue3.Link,
    JetDialogModal,
    JetSecondaryButton,
    JetButton,
    JetInput,
    JetInputError,
    JetLabel
  },
  props: {
    show: Boolean,
    title: String,
    url: String,
    bulk: Object,
    action: String
  },
  watch: {
    show(newValue, oldValue) {
      this.showModal = newValue;
    }
  },
  computed: {
    lang() {
      return this.$page.props.data.trans;
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    close() {
      this.$emit("close", this.showModal);
    },
    bulkActionRun() {
      this.$inertia.post(this.route(this.url + ".bulk"), { action: this.action, ids: this.bulk }, {
        preserveScroll: true,
        onSuccess: () => {
          this.$emit("success");
        }
      });
    }
  }
});
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetDialogModal = vue.resolveComponent("JetDialogModal");
  const _component_JetButton = vue.resolveComponent("JetButton");
  const _component_JetSecondaryButton = vue.resolveComponent("JetSecondaryButton");
  _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, vue.mergeProps({
    show: _ctx.showModal,
    onEnd: ($event) => _ctx.close()
  }, _attrs), {
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="py-4 text-3xl text-center text-red-500"${_scopeId}></h1><div class="text-center"${_scopeId}><h1 class="py-4 text-lg font-bold text-red-500"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.title)}</h1><h3 claass=" text-gray-400 text-center"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.trans("global.bulk.message"))}</h3></div>`);
      } else {
        return [
          vue.createVNode("h1", { class: "py-4 text-3xl text-center text-red-500" }),
          vue.createVNode("div", { class: "text-center" }, [
            vue.createVNode("h1", { class: "py-4 text-lg font-bold text-red-500" }, vue.toDisplayString(_ctx.title), 1),
            vue.createVNode("h3", { claass: " text-gray-400 text-center" }, vue.toDisplayString(_ctx.trans("global.bulk.message")), 1)
          ])
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
          class: "mx-3",
          onClick: ($event) => _ctx.bulkActionRun()
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${serverRenderer.ssrInterpolate(_ctx.trans("global.run"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.run")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, {
          onClick: ($event) => _ctx.close()
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${serverRenderer.ssrInterpolate(_ctx.trans("global.close"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_JetButton, {
            class: "mx-3",
            onClick: vue.withModifiers(($event) => _ctx.bulkActionRun(), ["prevent"])
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.run")), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          vue.createVNode(_component_JetSecondaryButton, {
            onClick: ($event) => _ctx.close()
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Modals/Bulk.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var BulkModal = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$D]]);
const _sfc_main$C = vue.defineComponent({
  components: {
    AppLayout,
    Link: inertiaVue3.Link,
    Filters,
    Header,
    Bulk,
    List: List$2,
    Pagination,
    CreateModal,
    ViewModal,
    DeleteModal,
    BulkModal
  },
  props: {
    errors: Object,
    rows: Array,
    collection: Object,
    url: String
  },
  data() {
    return {
      createModal: false,
      viewModal: false,
      deleteModal: false,
      bulkModal: false,
      goNext: true,
      goBack: true,
      search: "",
      per_page: 10,
      orderBy: "id",
      desc: true,
      last_page: 0,
      edit: false,
      showFilter: false,
      filters: {},
      bulk: {},
      showBluk: false,
      bulkActionTitle: "",
      view: {},
      photoPreview: null
    };
  },
  mounted() {
    this.search = this.$attrs.search;
    this.per_page = this.$attrs.per_page;
    this.orderBy = this.$attrs.orderBy;
    if (this.$attrs.desc === "desc") {
      this.desc = false;
    } else {
      this.desc = true;
    }
    this.last_page = this.collection.last_page;
    this.filters = this.$attrs.filters;
    this.createModal = this.$attrs.create;
  },
  computed: {
    lang() {
      return this.$page.props.data.trans;
    },
    getMessage() {
      return this.$page.props.data.message;
    }
  },
  methods: {
    transItem(item, key) {
      if (item[key] && item[key].hasOwnProperty("ar") && item[key].hasOwnProperty("en")) {
        if (localStorage.getItem("lang")) {
          let lang = JSON.parse(localStorage.getItem("lang"));
          if (lang.id === "ar") {
            return item[key].en;
          } else if (lang.id === "en") {
            return item[key].ar;
          }
        }
      } else {
        return item[key];
      }
    },
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    searchFilter(search) {
      this.search = search;
      this.reload(1, "search");
    },
    resetFilter() {
      this.reload(1);
    },
    filter(filterBy, filterValue) {
      let filter = {};
      filter[filterBy] = filterValue;
      this.$inertia.get(route(this.url + ".index"), filter);
    },
    viewItem(item) {
      this.form = this.$inertia.form(item);
      this.viewModal = true;
    },
    editItem(item) {
      this.form = this.$inertia.form(item);
      this.createModal = true;
      this.edit = true;
    },
    deleteItem(item) {
      this.form = this.$inertia.form(item);
      this.deleteModal = true;
    },
    reloadList(url) {
      this.$inertia.get(route(this.url + ".index"), url);
    },
    bulkAction(action) {
      this.bulkActionTitle = action;
      this.bulkModal = true;
      this.showBluk = false;
    },
    bulkAll() {
      if (Object.keys(this.bulk).length) {
        this.bulk = {};
      } else {
        for (let i2 = 0; i2 < this.collection.data.length; i2++) {
          this.bulk[this.collection.data[i2].id] = true;
        }
      }
    },
    applyFilters(name) {
      this.reload(1, "filters", null, false, name);
    },
    resetFilters() {
      this.filters = [];
      this.reload();
    },
    success() {
      if (typeof this.getMessage === "object") {
        if (this.getMessage.type === "error") {
          this.$toast.error(this.getMessage.message, {
            position: "top",
            style: {
              "background": "rgba(210, 45, 61, .8)",
              "border-radius": "0.25rem"
            }
          });
        } else if (this.getMessage.type === "success") {
          this.$toast.success(this.getMessage.message, {
            position: "top",
            style: {
              "background": "#7e3af2",
              "border-radius": "0.25rem"
            }
          });
        }
      } else {
        this.$toast.success(this.getMessage, {
          position: "top",
          style: {
            "background": "#7e3af2",
            "border-radius": "0.25rem"
          }
        });
      }
      this.edit = false;
      this.createModal = false;
      this.deleteModal = false;
      this.reload(1, "orderBy", "id", "desc");
    },
    reload(index = 1, type = "main", orderBy = null, dir = false) {
      let getDir = "";
      if (dir) {
        getDir = dir;
      } else {
        if (this.desc) {
          getDir = "desc";
        } else {
          getDir = "asc";
        }
      }
      let url = {};
      url.page = index;
      this.search ? url.search = this.search : "";
      url.per_page = this.per_page;
      orderBy ? url.orderBy = orderBy : "";
      url.orderDirection = getDir;
      this.$inertia.get(route(this.url + ".index"), url);
    }
  }
});
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Mixin.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var MixinVue = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$C]]);
const _sfc_main$B = vue.defineComponent({
  components: {
    JetInputError,
    ViltText,
    ViltSwitch,
    ViltDate,
    ViltSelect,
    ViltTextArea
  },
  data() {
    return {
      main: [{}]
    };
  },
  mounted() {
    if (this.default) {
      this.main = this.default;
    }
    if (this.modelValue) {
      this.main = this.modelValue;
    }
  },
  props: {
    modelValue: {},
    default: {},
    view: {
      String,
      default: "input"
    },
    options: {
      Array,
      default: []
    },
    label: {
      String,
      default: "Text"
    },
    id: {
      String
    },
    name: {
      String
    },
    message: {
      String
    },
    disabled: {
      Boolean,
      default: false
    },
    className: {
      String
    }
  },
  methods: {
    addItem() {
      this.main.push({});
      this.$emit("update:modelValue", this.main);
    },
    removeItem(value) {
      this.main.splice(this.main.indexOf(value), 1);
      this.$emit("update:modelValue", this.main);
    },
    update() {
      this.$emit("update:modelValue", this.main);
    }
  }
});
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  const _component_ViltMedia = vue.resolveComponent("ViltMedia");
  const _component_ViltSwitch = vue.resolveComponent("ViltSwitch");
  const _component_ViltRepeater = vue.resolveComponent("ViltRepeater", true);
  const _component_JetInput = vue.resolveComponent("JetInput");
  const _component_ViltDate = vue.resolveComponent("ViltDate");
  const _component_ViltSelect = vue.resolveComponent("ViltSelect");
  const _component_ViltTextArea = vue.resolveComponent("ViltTextArea");
  const _component_ViltText = vue.resolveComponent("ViltText");
  _push(`<!--[-->`);
  if (_ctx.view === "input") {
    _push(`<div class="py-2">`);
    if (_ctx.id) {
      _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.id)} class="text-sm font-medium">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
    } else {
      _push(`<!---->`);
    }
    _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
      message: _ctx.message,
      class: "mt-2"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  serverRenderer.ssrRenderList(_ctx.main, (value, index) => {
    _push(`<div class="p-4 my-4 border rounded-lg"><div class="flex justify-end"><button class="text-danger-500"><i class="bx bx-trash"></i></button></div><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.options, (field, key) => {
      _push(`<div>`);
      if (field.type === "image" && field.create) {
        _push(`<div>`);
        if (field.reactive && value[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltMedia, {
            modelValue: value[field.field],
            "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
            default: field.default,
            disabled: field.disabled === "create" ? true : false,
            label: field.label,
            id: field.field + "_" + index,
            multi: field.multi,
            preview: field.preview,
            placeholder: field.placeholder
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "switch" && field.create) {
        _push(`<div>`);
        if (field.reactive && value[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltSwitch, {
            default: field.default,
            label: field.label,
            name: field.field,
            id: field.field + "_" + index,
            modelValue: value[field.field],
            "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
            disabled: field.disabled === "create" ? true : false,
            className: field.className
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "repeater" && field.create) {
        _push(`<div>`);
        if (field.reactive && value[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltRepeater, {
            default: field.default,
            label: field.label,
            name: field.field,
            id: field.field + "_" + index,
            options: field.options,
            modelValue: value[field.field],
            "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
            disabled: field.disabled === "create" ? true : false,
            className: field.className
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "schema" && field.create) {
        _push(`<div>`);
        if (field.reactive && value[field.row] || !field.reactive) {
          _push(`<div><!--[-->`);
          serverRenderer.ssrRenderList(field.options, (input, index2) => {
            _push(`<div class="mt-2">`);
            if (input.field) {
              _push(`<label${serverRenderer.ssrRenderAttr("for", input.field)} class="text-sm font-medium">${serverRenderer.ssrInterpolate(input.label)}</label>`);
            } else {
              _push(`<!---->`);
            }
            _push(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: input.field,
              modelValue: value[field.field][input.field],
              "onUpdate:modelValue": ($event) => value[field.field][input.field] = $event,
              type: input.type,
              class: "block w-full mt-1",
              autofocus: ""
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]-->`);
          _push(serverRenderer.ssrRenderComponent(_component_JetInputError, { class: "mt-2" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if ((field.type === "datetime" || field.type === "time" || field.type === "date") && field.create) {
        _push(`<div>`);
        if (field.reactive && value[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltDate, {
            default: field.default,
            type: field.type,
            label: field.label,
            placeholder: field.placeholder,
            disabled: field.disabled === "create" ? true : false,
            modelValue: value[field.field],
            "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
            className: field.className,
            multi: field.multi
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if ((field.type === "relation" || field.type === "select-value" || field.type === "hasOne" || field.type === "select") && field.create) {
        _push(`<div>`);
        if (field.reactive && value[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltSelect, {
            default: field.default,
            type: field.type,
            id: field.field + "_" + index,
            modelValue: value[field.field],
            "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
            options: field.options,
            multi: field.multi,
            track_by_id: field.track_by_id,
            disabled: field.disabled === "create" ? true : false,
            track_by_name: field.track_by_name,
            label: field.label
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "textarea" && field.create) {
        _push(`<div>`);
        if (field.create) {
          _push(`<div class="py-2">`);
          if (field.reactive && value[field.row] || !field.reactive) {
            _push(`<div>`);
            _push(serverRenderer.ssrRenderComponent(_component_ViltTextArea, {
              default: field.default,
              label: field.label,
              id: field.field + "_" + index,
              modelValue: value[field.field],
              "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
              className: field.className,
              placeholder: field.placeholder,
              disabled: field.disabled === "create" ? true : false
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        if (field.create) {
          _push(`<div>`);
          if (field.reactive && value[field.row] || !field.reactive) {
            _push(`<div>`);
            if (field.type === "icon") {
              _push(serverRenderer.ssrRenderComponent(_component_ViltText, {
                default: field.default,
                label: field.label,
                id: field.field + "_" + index,
                modelValue: value[field.field],
                "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
                type: "text",
                className: field.className,
                placeholder: field.placeholder,
                disabled: field.disabled === "create" ? true : false
              }, null, _parent));
            } else {
              _push(serverRenderer.ssrRenderComponent(_component_ViltText, {
                id: field.field + "_" + index,
                default: field.default,
                label: field.label,
                modelValue: value[field.field],
                "onUpdate:modelValue": [($event) => value[field.field] = $event, _ctx.update],
                type: field.type,
                className: field.className,
                placeholder: field.placeholder,
                disabled: field.disabled === "create" ? true : false
              }, null, _parent));
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--><button class="inline-flex items-center justify-center px-4 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"> Add New Item </button>`);
  if (_ctx.view === "view") {
    _push(`<div class="flex justify-between my-4"><div><p class="font-bold">${serverRenderer.ssrInterpolate(_ctx.label)}</p></div><div><p>${serverRenderer.ssrInterpolate(_ctx.modelValue)}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltRepeater.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var ViltRepeater = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$B]]);
const _sfc_main$A = vue.defineComponent({
  components: {
    JetInputError,
    ViltMedia,
    ViltText,
    ViltSwitch,
    ViltDate,
    ViltSelect,
    ViltTextArea,
    ViltRepeater
  },
  data() {
    return {
      form: {}
    };
  },
  props: {
    modelValue: {},
    rows: {
      Array,
      default: []
    },
    errors: {
      Object,
      default: {}
    },
    edit: {
      Boolean,
      default: false
    }
  },
  computed: {
    formRows() {
      let rows = this.$props.rows;
      let getRows = {};
      for (let i2 = 0; i2 < rows.length; i2++) {
        getRows[rows[i2].field] = rows[i2].default;
      }
      return getRows;
    }
  },
  mounted() {
    this.form = this.$inertia.form(this.formRows);
  },
  methods: {
    update() {
      this.$emit("update:modelValue", this.$inertia.form(this.form));
    }
  }
});
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ViltMedia = vue.resolveComponent("ViltMedia");
  const _component_ViltSwitch = vue.resolveComponent("ViltSwitch");
  const _component_ViltRepeater = vue.resolveComponent("ViltRepeater");
  const _component_JetInput = vue.resolveComponent("JetInput");
  const _component_JetInputError = vue.resolveComponent("JetInputError");
  const _component_ViltDate = vue.resolveComponent("ViltDate");
  const _component_ViltSelect = vue.resolveComponent("ViltSelect");
  const _component_ViltTextArea = vue.resolveComponent("ViltTextArea");
  const _component_ViltText = vue.resolveComponent("ViltText");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  if (!_ctx.edit) {
    _push(`<div><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.rows, (field, key) => {
      _push(`<div>`);
      if (field.type === "image" && field.create) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltMedia, {
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            default: field.default,
            disabled: field.disabled === "create" ? true : false,
            label: field.label,
            id: field.field,
            multi: field.multi,
            message: _ctx.errors[field.field],
            preview: field.preview,
            placeholder: field.placeholder
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "switch" && field.create) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltSwitch, {
            default: field.default,
            label: field.label,
            name: field.field,
            id: field.field,
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            message: _ctx.errors[field.field],
            disabled: field.disabled === "create" ? true : false,
            className: field.className
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "repeater" && field.create) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltRepeater, {
            default: field.default,
            label: field.label,
            name: field.field,
            id: field.field,
            options: field.options,
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            message: _ctx.errors[field.field],
            disabled: field.disabled === "create" ? true : false,
            className: field.className
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "schema" && field.create) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div><!--[-->`);
          serverRenderer.ssrRenderList(field.options, (input, index) => {
            _push(`<div class="mt-2">`);
            if (input.field) {
              _push(`<label${serverRenderer.ssrRenderAttr("for", input.field)} class="text-sm font-medium">${serverRenderer.ssrInterpolate(input.label)}</label>`);
            } else {
              _push(`<!---->`);
            }
            _push(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: input.field,
              modelValue: _ctx.form[field.field][input.field],
              "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
              type: input.type,
              class: "block w-full mt-1",
              autofocus: ""
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]-->`);
          _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
            message: _ctx.errors[field.field],
            class: "mt-2"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if ((field.type === "datetime" || field.type === "time" || field.type === "date") && field.create) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltDate, {
            default: field.default,
            type: field.type,
            label: field.label,
            placeholder: field.placeholder,
            disabled: field.disabled === "create" ? true : false,
            message: _ctx.errors[field.field],
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            className: field.className,
            multi: field.multi
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if ((field.type === "relation" || field.type === "select-value" || field.type === "hasOne" || field.type === "select") && field.create) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltSelect, {
            default: field.default,
            type: field.type,
            id: field.field,
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            options: field.options,
            multi: field.multi,
            track_by_id: field.track_by_id,
            disabled: field.disabled === "create" ? true : false,
            track_by_name: field.track_by_name,
            label: field.label,
            message: _ctx.errors[field.field]
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "textarea" && field.create) {
        _push(`<div>`);
        if (field.create) {
          _push(`<div class="py-2">`);
          if (field.reactive && _ctx.form[field.row] || !field.reactive) {
            _push(`<div>`);
            _push(serverRenderer.ssrRenderComponent(_component_ViltTextArea, {
              default: field.default,
              label: field.label,
              id: field.field,
              modelValue: _ctx.form[field.field],
              "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
              message: _ctx.errors[field.field],
              className: field.className,
              placeholder: field.placeholder,
              disabled: field.disabled === "create" ? true : false
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        if (field.create) {
          _push(`<div>`);
          if (field.reactive && _ctx.form[field.row] || !field.reactive) {
            _push(`<div>`);
            if (field.type === "icon") {
              _push(serverRenderer.ssrRenderComponent(_component_ViltText, {
                default: field.default,
                label: field.label,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
                type: "text",
                className: field.className,
                placeholder: field.placeholder,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "create" ? true : false
              }, null, _parent));
            } else {
              _push(serverRenderer.ssrRenderComponent(_component_ViltText, {
                id: field.field,
                default: field.default,
                label: field.label,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
                type: field.type,
                className: field.className,
                placeholder: field.placeholder,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "create" ? true : false
              }, null, _parent));
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "create", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<div><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.rows, (field, key) => {
      _push(`<div>`);
      if (field.type === "image" && field.edit) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltMedia, {
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            default: field.default,
            disabled: field.disabled === "edit" ? true : false,
            label: field.label,
            id: field.field,
            multi: field.multi,
            message: _ctx.errors[field.field],
            preview: field.preview,
            placeholder: field.placeholder
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "switch" && field.edit) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltSwitch, {
            default: field.default,
            label: field.label,
            name: field.field,
            id: field.field,
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            message: _ctx.errors[field.field],
            disabled: field.disabled === "edit" ? true : false,
            className: field.className
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "schema" && field.edit) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div><!--[-->`);
          serverRenderer.ssrRenderList(field.options, (input, index) => {
            _push(`<div class="mt-2">`);
            if (input.field) {
              _push(`<label${serverRenderer.ssrRenderAttr("for", input.field)} class="text-sm font-medium">${serverRenderer.ssrInterpolate(input.label)}</label>`);
            } else {
              _push(`<!---->`);
            }
            _push(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: input.field,
              modelValue: _ctx.form[field.field][input.field],
              "onUpdate:modelValue": ($event) => _ctx.form[field.field][input.field] = $event,
              type: input.type,
              class: "block w-full mt-1",
              autofocus: ""
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]-->`);
          _push(serverRenderer.ssrRenderComponent(_component_JetInputError, {
            message: _ctx.errors[field.field],
            class: "mt-2"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if ((field.type === "datetime" || field.type === "time" || field.type === "date") && field.edit) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltDate, {
            default: field.default,
            type: field.type,
            label: field.label,
            placeholder: field.placeholder,
            disabled: field.disabled === "edit" ? true : false,
            message: _ctx.errors[field.field],
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            className: field.className,
            multi: field.multi
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if ((field.type === "relation" || field.type === "hasOne" || field.type === "select-value" || field.type === "select") && field.edit) {
        _push(`<div>`);
        if (field.reactive && _ctx.form[field.row] || !field.reactive) {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_ViltSelect, {
            default: field.default,
            type: field.type,
            id: field.field,
            modelValue: _ctx.form[field.field],
            "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
            options: field.options,
            multi: field.multi,
            track_by_id: field.track_by_id,
            track_by_name: field.track_by_name,
            disabled: field.disabled === "edit" ? true : false,
            label: field.label,
            message: _ctx.errors[field.field]
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (field.type === "textarea" && field.create) {
        _push(`<div>`);
        if (field.edit) {
          _push(`<div class="py-2">`);
          if (field.reactive && _ctx.form[field.row] || !field.reactive) {
            _push(`<div>`);
            _push(serverRenderer.ssrRenderComponent(_component_ViltTextArea, {
              default: field.default,
              label: field.label,
              id: field.field,
              modelValue: _ctx.form[field.field],
              "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
              message: _ctx.errors[field.field],
              className: field.className,
              placeholder: field.placeholder,
              disabled: field.disabled === "edit" ? true : false
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        if (field.edit) {
          _push(`<div>`);
          if (field.reactive && _ctx.form[field.row] || !field.reactive) {
            _push(`<div>`);
            if (field.type === "icon") {
              _push(serverRenderer.ssrRenderComponent(_component_ViltText, {
                default: field.default,
                label: field.label,
                id: field.field,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
                type: "text",
                className: field.className,
                placeholder: field.placeholder,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "edit" ? true : false
              }, null, _parent));
            } else {
              _push(serverRenderer.ssrRenderComponent(_component_ViltText, {
                default: field.default,
                id: field.field,
                label: field.label,
                modelValue: _ctx.form[field.field],
                "onUpdate:modelValue": [($event) => _ctx.form[field.field] = $event, _ctx.update],
                type: field.type,
                className: field.className,
                placeholder: field.placeholder,
                message: _ctx.errors[field.field],
                disabled: field.disabled === "edit" ? true : false
              }, null, _parent));
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "edit", {}, null, _push, _parent);
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Rows/ViltForm.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var ViltForm = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A]]);
const _sfc_main$z = vue.defineComponent({
  mixins: [MixinVue],
  components: {
    JetDialogModal,
    JetButton,
    JetSecondaryButton,
    ViltForm
  },
  data() {
    return {
      form: this.$inertia.form({}),
      actionModal: {},
      modalAction: {}
    };
  },
  mounted() {
    for (let i2 = 0; i2 < this.$attrs.modals.length; i2++) {
      this.actionModal[this.$attrs.modals[i2].name] = false;
      this.modalAction[this.$attrs.modals[i2].name] = {};
      for (let x2 = 0; x2 < this.$attrs.modals[i2].rows.length; x2++) {
        if (this.$attrs.modals[i2].rows[x2].type === "relation") {
          this.modalAction[this.$attrs.modals[i2].name][this.$attrs.modals[i2].rows[x2].field] = [];
        } else {
          this.modalAction[this.$attrs.modals[i2].name][this.$attrs.modals[i2].rows[x2].field] = this.$attrs.modals[i2].rows[x2].default;
        }
      }
    }
    this.form = this.$inertia.form(this.getForm);
  },
  computed: {
    getForm() {
      let rowsArray = {};
      let rows = this.$page.props.rows;
      for (let i2 = 0; i2 < rows.length; i2++) {
        if (rows[i2].type === "relation") {
          rowsArray[rows[i2].field] = [];
        } else {
          rowsArray[rows[i2].field] = rows[i2].default;
        }
      }
      return rowsArray;
    }
  },
  methods: {
    openUrl(url) {
      window.open(url);
    },
    modalActionRun(modal, action) {
      this.$inertia.form(this.modalAction[modal]).submit("post", route(action), {
        preserveScroll: true,
        onSuccess: () => {
          this.modalAction[modal].reset();
          this.actionModal[modal] = false;
          this.success();
        }
      });
    },
    fireAction(name) {
      this.$inertia.post(route(name), {});
    },
    openModal(name) {
      this.actionModal[name] = !this.actionModal[name];
    },
    create() {
      this.form = this.$inertia.form(this.getForm);
      this.edit = false;
      this.createModal = true;
    }
  }
});
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = vue.resolveComponent("app-layout");
  const _component_Header = vue.resolveComponent("Header");
  const _component_Bulk = vue.resolveComponent("Bulk");
  const _component_Filters = vue.resolveComponent("Filters");
  const _component_List = vue.resolveComponent("List");
  const _component_Pagination = vue.resolveComponent("Pagination");
  const _component_CreateModal = vue.resolveComponent("CreateModal");
  const _component_ViewModal = vue.resolveComponent("ViewModal");
  const _component_DeleteModal = vue.resolveComponent("DeleteModal");
  const _component_BulkModal = vue.resolveComponent("BulkModal");
  const _component_JetDialogModal = vue.resolveComponent("JetDialogModal");
  const _component_ViltForm = vue.resolveComponent("ViltForm");
  const _component_JetButton = vue.resolveComponent("JetButton");
  const _component_JetSecondaryButton = vue.resolveComponent("JetSecondaryButton");
  _push(serverRenderer.ssrRenderComponent(_component_app_layout, vue.mergeProps({
    title: _ctx.$attrs.lang.index
  }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container grid px-6 mx-auto"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Header, {
          canCreate: _ctx.$attrs.canCreate,
          title: _ctx.$attrs.lang.index,
          button: _ctx.$attrs.lang.create,
          onButtonAction: _ctx.create
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              serverRenderer.ssrRenderList(_ctx.$attrs.actions, (action, index) => {
                _push3(`<a${serverRenderer.ssrRenderAttr("href", action.url ? action.url : "#")} class="inline-flex items-center justify-center gap-1 px-4 mr-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow rlt:ml-2 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"${_scopeId2}><i class="${serverRenderer.ssrRenderClass(action.icon)}"${_scopeId2}></i> ${serverRenderer.ssrInterpolate(action.label)}</a>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.$attrs.actions, (action, index) => {
                  return vue.openBlock(), vue.createBlock("a", {
                    key: index,
                    href: action.url ? action.url : "#",
                    onClick: vue.withModifiers(($event) => !action.url ? action.modal ? _ctx.openModal(action.modal) : _ctx.fireAction(action.action) : _ctx.openUrl(action.url), ["prevent"]),
                    class: "inline-flex items-center justify-center gap-1 px-4 mr-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow rlt:ml-2 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"
                  }, [
                    vue.createVNode("i", {
                      class: action.icon
                    }, null, 2),
                    vue.createTextVNode(" " + vue.toDisplayString(action.label), 1)
                  ], 8, ["href", "onClick"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="flex-1 w-full overflow-hidden mx-autofilament-main-content"${_scopeId}><div class="filament-page filament-resources-list-records-page"${_scopeId}><div class="space-y-6"${_scopeId}><div class="filament-tables-component"${_scopeId}><div class="bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container"${_scopeId}><div class="flex items-center justify-between p-2 h-14"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Bulk, {
          bulk: _ctx.bulk,
          show: _ctx.showBluk,
          collection: _ctx.collection,
          onClose: ($event) => _ctx.showBluk = !_ctx.showBluk
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.$attrs.canDeleteAny) {
                _push3(`<button type="button" class="flex items-center w-full h-8 px-3 text-sm font-normal text-white bg-danger group whitespace-nowrap focus:outline-none"${_scopeId2}><svg class="flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId2}></path></svg><span class="truncate"${_scopeId2}>${serverRenderer.ssrInterpolate(_ctx.$attrs.lang.bulk)}</span></button>`);
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                _ctx.$attrs.canDeleteAny ? (vue.openBlock(), vue.createBlock("button", {
                  key: 0,
                  type: "button",
                  class: "flex items-center w-full h-8 px-3 text-sm font-normal text-white bg-danger group whitespace-nowrap focus:outline-none",
                  onClick: ($event) => _ctx.bulkAction("delete")
                }, [
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    })
                  ])),
                  vue.createVNode("span", { class: "truncate" }, vue.toDisplayString(_ctx.$attrs.lang.bulk), 1)
                ], 8, ["onClick"])) : vue.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_Filters, {
          showFilter: false,
          setSearch: _ctx.search,
          onGetSearch: _ctx.searchFilter,
          onReset: _ctx.resetFilter,
          onFilter: _ctx.filter
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="relative overflow-y-auto border-t"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_List, {
          canEdit: _ctx.$attrs.canEdit,
          canDelete: _ctx.$attrs.canDelete,
          canDeleteAny: _ctx.$attrs.canDeleteAny,
          canView: _ctx.$attrs.canView,
          canViewAny: _ctx.$attrs.canViewAny,
          onReload: _ctx.reloadList,
          onView: _ctx.viewItem,
          onSub: _ctx.subItem,
          onEdit: _ctx.editItem,
          onDelete: _ctx.deleteItem,
          onAll: _ctx.bulkAll,
          rows: _ctx.rows,
          orderBy: _ctx.orderBy,
          collection: _ctx.collection,
          bulk: _ctx.bulk,
          url: _ctx.url,
          desc: _ctx.desc
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="p-2 border-t"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Pagination, {
          per_page: _ctx.per_page,
          collection: _ctx.collection,
          url: _ctx.url,
          onReload: _ctx.reloadList
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div></div></div></div><br${_scopeId}><br${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_CreateModal, {
          url: _ctx.url,
          title: _ctx.edit ? _ctx.$attrs.lang.edit_title : _ctx.$attrs.lang.create_title,
          show: _ctx.createModal,
          edit: _ctx.edit,
          errors: _ctx.errors,
          item: _ctx.form,
          rows: _ctx.rows,
          onClose: ($event) => _ctx.createModal = !_ctx.createModal,
          onSuccess: _ctx.success
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_ViewModal, {
          title: _ctx.$attrs.lang.view_title,
          show: _ctx.viewModal,
          item: _ctx.form,
          rows: _ctx.rows,
          onClose: ($event) => _ctx.viewModal = !_ctx.viewModal
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_DeleteModal, {
          url: _ctx.url,
          title: _ctx.$attrs.lang.delete_title,
          show: _ctx.deleteModal,
          item: _ctx.form,
          onClose: ($event) => _ctx.deleteModal = !_ctx.deleteModal,
          onSuccess: _ctx.success
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_BulkModal, {
          url: _ctx.url,
          title: _ctx.$attrs.lang.bulk_title,
          action: _ctx.bulkActionTitle,
          bulk: _ctx.bulk,
          show: _ctx.bulkModal,
          onClose: ($event) => _ctx.bulkModal = !_ctx.bulkModal,
          onSuccess: _ctx.success
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        serverRenderer.ssrRenderList(_ctx.$attrs.modals, (item, key) => {
          _push2(serverRenderer.ssrRenderComponent(_component_JetDialogModal, {
            key,
            show: _ctx.actionModal[item.name],
            onEnd: ($event) => _ctx.actionModal[item.name] = !_ctx.actionModal[item.name]
          }, {
            title: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${serverRenderer.ssrInterpolate(item.title)} <hr class="my-4"${_scopeId2}>`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(item.title) + " ", 1),
                  vue.createVNode("hr", { class: "my-4" })
                ];
              }
            }),
            content: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.ssrRenderComponent(_component_ViltForm, {
                  modelValue: _ctx.modalAction[item.name],
                  "onUpdate:modelValue": ($event) => _ctx.modalAction[item.name] = $event,
                  rows: item.rows,
                  errors: _ctx.$page.props.errors
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue.createVNode(_component_ViltForm, {
                    modelValue: _ctx.modalAction[item.name],
                    "onUpdate:modelValue": ($event) => _ctx.modalAction[item.name] = $event,
                    rows: item.rows,
                    errors: _ctx.$page.props.errors
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rows", "errors"])
                ];
              }
            }),
            footer: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                serverRenderer.ssrRenderList(item.buttons, (button, key2) => {
                  _push3(serverRenderer.ssrRenderComponent(_component_JetButton, {
                    key: key2,
                    onClick: ($event) => _ctx.modalActionRun(item.name, button.action),
                    class: "mx-2"
                  }, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer.ssrInterpolate(button.label)}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(button.label), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
                _push3(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, {
                  onClick: ($event) => _ctx.actionModal[item.name] = !_ctx.actionModal[item.name]
                }, {
                  default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${serverRenderer.ssrInterpolate(_ctx.trans("global.close"))}`);
                    } else {
                      return [
                        vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(item.buttons, (button, key2) => {
                    return vue.openBlock(), vue.createBlock(_component_JetButton, {
                      key: key2,
                      onClick: vue.withModifiers(($event) => _ctx.modalActionRun(item.name, button.action), ["prevent"]),
                      class: "mx-2"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(button.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128)),
                  vue.createVNode(_component_JetSecondaryButton, {
                    onClick: ($event) => _ctx.actionModal[item.name] = !_ctx.actionModal[item.name]
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          vue.createVNode("div", { class: "container grid px-6 mx-auto" }, [
            vue.createVNode(_component_Header, {
              canCreate: _ctx.$attrs.canCreate,
              title: _ctx.$attrs.lang.index,
              button: _ctx.$attrs.lang.create,
              onButtonAction: _ctx.create
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.$attrs.actions, (action, index) => {
                  return vue.openBlock(), vue.createBlock("a", {
                    key: index,
                    href: action.url ? action.url : "#",
                    onClick: vue.withModifiers(($event) => !action.url ? action.modal ? _ctx.openModal(action.modal) : _ctx.fireAction(action.action) : _ctx.openUrl(action.url), ["prevent"]),
                    class: "inline-flex items-center justify-center gap-1 px-4 mr-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow rlt:ml-2 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"
                  }, [
                    vue.createVNode("i", {
                      class: action.icon
                    }, null, 2),
                    vue.createTextVNode(" " + vue.toDisplayString(action.label), 1)
                  ], 8, ["href", "onClick"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["canCreate", "title", "button", "onButtonAction"]),
            vue.createVNode("div", { class: "flex-1 w-full overflow-hidden mx-autofilament-main-content" }, [
              vue.createVNode("div", { class: "filament-page filament-resources-list-records-page" }, [
                vue.createVNode("div", { class: "space-y-6" }, [
                  vue.createVNode("div", { class: "filament-tables-component" }, [
                    vue.createVNode("div", { class: "bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container" }, [
                      vue.createVNode("div", { class: "flex items-center justify-between p-2 h-14" }, [
                        vue.createVNode(_component_Bulk, {
                          bulk: _ctx.bulk,
                          show: _ctx.showBluk,
                          collection: _ctx.collection,
                          onClose: ($event) => _ctx.showBluk = !_ctx.showBluk
                        }, {
                          default: vue.withCtx(() => [
                            _ctx.$attrs.canDeleteAny ? (vue.openBlock(), vue.createBlock("button", {
                              key: 0,
                              type: "button",
                              class: "flex items-center w-full h-8 px-3 text-sm font-normal text-white bg-danger group whitespace-nowrap focus:outline-none",
                              onClick: ($event) => _ctx.bulkAction("delete")
                            }, [
                              (vue.openBlock(), vue.createBlock("svg", {
                                class: "flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                "aria-hidden": "true"
                              }, [
                                vue.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                })
                              ])),
                              vue.createVNode("span", { class: "truncate" }, vue.toDisplayString(_ctx.$attrs.lang.bulk), 1)
                            ], 8, ["onClick"])) : vue.createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["bulk", "show", "collection", "onClose"]),
                        vue.createVNode(_component_Filters, {
                          showFilter: false,
                          setSearch: _ctx.search,
                          onGetSearch: _ctx.searchFilter,
                          onReset: _ctx.resetFilter,
                          onFilter: _ctx.filter
                        }, null, 8, ["setSearch", "onGetSearch", "onReset", "onFilter"])
                      ]),
                      vue.createVNode("div", { class: "relative overflow-y-auto border-t" }, [
                        vue.createVNode(_component_List, {
                          canEdit: _ctx.$attrs.canEdit,
                          canDelete: _ctx.$attrs.canDelete,
                          canDeleteAny: _ctx.$attrs.canDeleteAny,
                          canView: _ctx.$attrs.canView,
                          canViewAny: _ctx.$attrs.canViewAny,
                          onReload: _ctx.reloadList,
                          onView: _ctx.viewItem,
                          onSub: _ctx.subItem,
                          onEdit: _ctx.editItem,
                          onDelete: _ctx.deleteItem,
                          onAll: _ctx.bulkAll,
                          rows: _ctx.rows,
                          orderBy: _ctx.orderBy,
                          collection: _ctx.collection,
                          bulk: _ctx.bulk,
                          url: _ctx.url,
                          desc: _ctx.desc
                        }, null, 8, ["canEdit", "canDelete", "canDeleteAny", "canView", "canViewAny", "onReload", "onView", "onSub", "onEdit", "onDelete", "onAll", "rows", "orderBy", "collection", "bulk", "url", "desc"])
                      ]),
                      vue.createVNode("div", { class: "p-2 border-t" }, [
                        vue.createVNode(_component_Pagination, {
                          per_page: _ctx.per_page,
                          collection: _ctx.collection,
                          url: _ctx.url,
                          onReload: _ctx.reloadList
                        }, null, 8, ["per_page", "collection", "url", "onReload"])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          vue.createVNode("br"),
          vue.createVNode("br"),
          vue.createVNode(_component_CreateModal, {
            url: _ctx.url,
            title: _ctx.edit ? _ctx.$attrs.lang.edit_title : _ctx.$attrs.lang.create_title,
            show: _ctx.createModal,
            edit: _ctx.edit,
            errors: _ctx.errors,
            item: _ctx.form,
            rows: _ctx.rows,
            onClose: ($event) => _ctx.createModal = !_ctx.createModal,
            onSuccess: _ctx.success
          }, null, 8, ["url", "title", "show", "edit", "errors", "item", "rows", "onClose", "onSuccess"]),
          vue.createVNode(_component_ViewModal, {
            title: _ctx.$attrs.lang.view_title,
            show: _ctx.viewModal,
            item: _ctx.form,
            rows: _ctx.rows,
            onClose: ($event) => _ctx.viewModal = !_ctx.viewModal
          }, null, 8, ["title", "show", "item", "rows", "onClose"]),
          vue.createVNode(_component_DeleteModal, {
            url: _ctx.url,
            title: _ctx.$attrs.lang.delete_title,
            show: _ctx.deleteModal,
            item: _ctx.form,
            onClose: ($event) => _ctx.deleteModal = !_ctx.deleteModal,
            onSuccess: _ctx.success
          }, null, 8, ["url", "title", "show", "item", "onClose", "onSuccess"]),
          vue.createVNode(_component_BulkModal, {
            url: _ctx.url,
            title: _ctx.$attrs.lang.bulk_title,
            action: _ctx.bulkActionTitle,
            bulk: _ctx.bulk,
            show: _ctx.bulkModal,
            onClose: ($event) => _ctx.bulkModal = !_ctx.bulkModal,
            onSuccess: _ctx.success
          }, null, 8, ["url", "title", "action", "bulk", "show", "onClose", "onSuccess"]),
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.$attrs.modals, (item, key) => {
            return vue.openBlock(), vue.createBlock(_component_JetDialogModal, {
              key,
              show: _ctx.actionModal[item.name],
              onEnd: ($event) => _ctx.actionModal[item.name] = !_ctx.actionModal[item.name]
            }, {
              title: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(item.title) + " ", 1),
                vue.createVNode("hr", { class: "my-4" })
              ]),
              content: vue.withCtx(() => [
                vue.createVNode(_component_ViltForm, {
                  modelValue: _ctx.modalAction[item.name],
                  "onUpdate:modelValue": ($event) => _ctx.modalAction[item.name] = $event,
                  rows: item.rows,
                  errors: _ctx.$page.props.errors
                }, null, 8, ["modelValue", "onUpdate:modelValue", "rows", "errors"])
              ]),
              footer: vue.withCtx(() => [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(item.buttons, (button, key2) => {
                  return vue.openBlock(), vue.createBlock(_component_JetButton, {
                    key: key2,
                    onClick: vue.withModifiers(($event) => _ctx.modalActionRun(item.name, button.action), ["prevent"]),
                    class: "mx-2"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(button.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128)),
                vue.createVNode(_component_JetSecondaryButton, {
                  onClick: ($event) => _ctx.actionModal[item.name] = !_ctx.actionModal[item.name]
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.trans("global.close")), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1032, ["show", "onEnd"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Resource.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var Resource = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z]]);
var Resource$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Resource
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = vue.defineComponent({
  props: ["terms"],
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCardLogo
  }
});
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Terms of Service" }, null, _parent));
  _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent));
  _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${_ctx.terms}</div></div></div></div><!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var TermsOfService = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y]]);
var TermsOfService$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TermsOfService
}, Symbol.toStringTag, { value: "Module" }));
var Welcome_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.bg-gray-100[data-v-6af539da] {\n        background-color: #f7fafc;\n        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));\n}\n.border-gray-200[data-v-6af539da] {\n        border-color: #edf2f7;\n        border-color: rgba(237, 242, 247, var(--tw-border-opacity));\n}\n.text-gray-400[data-v-6af539da] {\n        color: #cbd5e0;\n        color: rgba(203, 213, 224, var(--tw-text-opacity));\n}\n.text-gray-500[data-v-6af539da] {\n        color: #a0aec0;\n        color: rgba(160, 174, 192, var(--tw-text-opacity));\n}\n.text-gray-600[data-v-6af539da] {\n        color: #718096;\n        color: rgba(113, 128, 150, var(--tw-text-opacity));\n}\n.text-gray-700[data-v-6af539da] {\n        color: #4a5568;\n        color: rgba(74, 85, 104, var(--tw-text-opacity));\n}\n.text-gray-900[data-v-6af539da] {\n        color: #1a202c;\n        color: rgba(26, 32, 44, var(--tw-text-opacity));\n}\n@media (prefers-color-scheme: dark) {\n.dark\\:bg-gray-800[data-v-6af539da] {\n            background-color: #2d3748;\n            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));\n}\n.dark\\:bg-gray-900[data-v-6af539da] {\n            background-color: #1a202c;\n            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));\n}\n.dark\\:border-gray-700[data-v-6af539da] {\n            border-color: #4a5568;\n            border-color: rgba(74, 85, 104, var(--tw-border-opacity));\n}\n.dark\\:text-white[data-v-6af539da] {\n            color: #fff;\n            color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.dark\\:text-gray-400[data-v-6af539da] {\n            color: #cbd5e0;\n            color: rgba(203, 213, 224, var(--tw-text-opacity));\n}\n}\n")();
const _sfc_main$x = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    Link: inertiaVue3.Link
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  }
});
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_Link = vue.resolveComponent("Link");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Welcome" }, null, _parent));
  _push(`<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0" data-v-6af539da>`);
  if (_ctx.canLogin) {
    _push(`<div class="hidden fixed top-0 right-0 px-6 py-4 sm:block" data-v-6af539da>`);
    if (_ctx.$page.props.user) {
      _push(serverRenderer.ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "text-sm text-gray-700 underline"
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              vue.createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Link, {
        href: _ctx.route("login"),
        class: "text-sm text-gray-700 underline"
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in `);
          } else {
            return [
              vue.createTextVNode(" Log in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.canRegister) {
        _push(serverRenderer.ssrRenderComponent(_component_Link, {
          href: _ctx.route("register"),
          class: "ml-4 text-sm text-gray-700 underline"
        }, {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Register `);
            } else {
              return [
                vue.createTextVNode(" Register ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-6xl mx-auto sm:px-6 lg:px-8" data-v-6af539da><div class="flex justify-center pt-8 sm:justify-start sm:pt-0" data-v-6af539da><svg viewBox="0 0 651 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto text-gray-700 sm:h-20" data-v-6af539da><g clip-path="url(#clip0)" fill="#EF3B2D" data-v-6af539da><path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z" data-v-6af539da></path></g></svg></div><div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg" data-v-6af539da><div class="grid grid-cols-1 md:grid-cols-2" data-v-6af539da><div class="p-6" data-v-6af539da><div class="flex items-center" data-v-6af539da><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-6af539da><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-6af539da></path></svg><div class="ml-4 text-lg leading-7 font-semibold" data-v-6af539da><a href="https://laravel.com/docs" class="underline text-gray-900 dark:text-white" data-v-6af539da>Documentation</a></div></div><div class="ml-12" data-v-6af539da><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-6af539da> Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l" data-v-6af539da><div class="flex items-center" data-v-6af539da><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-6af539da><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-v-6af539da></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" data-v-6af539da></path></svg><div class="ml-4 text-lg leading-7 font-semibold" data-v-6af539da><a href="https://laracasts.com" class="underline text-gray-900 dark:text-white" data-v-6af539da>Laracasts</a></div></div><div class="ml-12" data-v-6af539da><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-6af539da> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700" data-v-6af539da><div class="flex items-center" data-v-6af539da><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-6af539da><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" data-v-6af539da></path></svg><div class="ml-4 text-lg leading-7 font-semibold" data-v-6af539da><a href="https://laravel-news.com/" class="underline text-gray-900 dark:text-white" data-v-6af539da>Laravel News</a></div></div><div class="ml-12" data-v-6af539da><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-6af539da> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l" data-v-6af539da><div class="flex items-center" data-v-6af539da><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-6af539da><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-6af539da></path></svg><div class="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white" data-v-6af539da>Vibrant Ecosystem</div></div><div class="ml-12" data-v-6af539da><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-6af539da> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline" data-v-6af539da>Forge</a>, <a href="https://vapor.laravel.com" class="underline" data-v-6af539da>Vapor</a>, <a href="https://nova.laravel.com" class="underline" data-v-6af539da>Nova</a>, and <a href="https://envoyer.io" class="underline" data-v-6af539da>Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline" data-v-6af539da>Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline" data-v-6af539da>Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline" data-v-6af539da>Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline" data-v-6af539da>Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline" data-v-6af539da>Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline" data-v-6af539da>Telescope</a>, and more. </div></div></div></div></div><div class="flex justify-center mt-4 sm:items-center sm:justify-between" data-v-6af539da><div class="text-center text-sm text-gray-500 sm:text-left" data-v-6af539da><div class="flex items-center" data-v-6af539da><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="-mt-px w-5 h-5 text-gray-400" data-v-6af539da><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" data-v-6af539da></path></svg><a href="https://laravel.bigcartel.com" class="ml-1 underline" data-v-6af539da> Shop </a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="ml-4 -mt-px w-5 h-5 text-gray-400" data-v-6af539da><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-6af539da></path></svg><a href="https://github.com/sponsors/taylorotwell" class="ml-1 underline" data-v-6af539da> Sponsor </a></div></div><div class="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0" data-v-6af539da> Laravel v${serverRenderer.ssrInterpolate(_ctx.laravelVersion)} (PHP v${serverRenderer.ssrInterpolate(_ctx.phpVersion)}) </div></div></div></div><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var Welcome = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x], ["__scopeId", "data-v-6af539da"]]);
var Welcome$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Welcome
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = vue.defineComponent({
  props: ["on"]
});
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div style="${serverRenderer.ssrRenderStyle(_ctx.on ? null : { display: "none" })}" class="text-sm text-gray-600">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ActionMessage.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var JetActionMessage = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$v = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "md:col-span-1 flex justify-between" }, _attrs))}><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-sm text-gray-600">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div class="px-4 sm:px-0">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SectionTitle.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var JetSectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v]]);
const _sfc_main$u = vue.defineComponent({
  components: {
    JetSectionTitle
  }
});
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_section_title = vue.resolveComponent("jet-section-title");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_jet_section_title, null, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "description")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="mt-5 md:mt-0 md:col-span-2"><div class="px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ActionSection.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var JetActionSection = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u]]);
const _sfc_main$t = vue.defineComponent({
  emits: ["close"],
  components: {
    Modal
  },
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
});
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal = vue.resolveComponent("modal");
  _push(serverRenderer.ssrRenderComponent(_component_modal, vue.mergeProps({
    show: _ctx.show,
    "max-width": _ctx.maxWidth,
    closeable: _ctx.closeable,
    onClose: _ctx.close
  }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}><svg class="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"${_scopeId}><h3 class="text-lg"${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</h3><div class="mt-2"${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div></div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          vue.createVNode("div", { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
            vue.createVNode("div", { class: "sm:flex sm:items-start" }, [
              vue.createVNode("div", { class: "mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                (vue.openBlock(), vue.createBlock("svg", {
                  class: "h-6 w-6 text-red-600",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  vue.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  })
                ]))
              ]),
              vue.createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                vue.createVNode("h3", { class: "text-lg" }, [
                  vue.renderSlot(_ctx.$slots, "title")
                ]),
                vue.createVNode("div", { class: "mt-2" }, [
                  vue.renderSlot(_ctx.$slots, "content")
                ])
              ])
            ])
          ]),
          vue.createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 text-right" }, [
            vue.renderSlot(_ctx.$slots, "footer")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ConfirmationModal.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var JetConfirmationModal = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$s = vue.defineComponent({
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    type: _ctx.type,
    class: "inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DangerButton.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var JetDangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$r = vue.defineComponent({
  emits: ["submitted"],
  components: {
    JetSectionTitle
  },
  computed: {
    hasActions() {
      return !!this.$slots.actions;
    }
  }
});
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_section_title = vue.resolveComponent("jet-section-title");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_jet_section_title, null, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "description")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="mt-5 md:mt-0 md:col-span-2"><form><div class="${serverRenderer.ssrRenderClass([_ctx.hasActions ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "px-4 py-5 bg-white sm:p-6 shadow"])}"><div class="grid grid-cols-6 gap-6">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
  _push(`</div></div>`);
  if (_ctx.hasActions) {
    _push(`<div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form></div></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/FormSection.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var JetFormSection = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r]]);
const _sfc_main$q = vue.defineComponent({
  emits: ["update:checked"],
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  computed: {
    proxyChecked: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit("update:checked", val);
      }
    }
  }
});
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<input${serverRenderer.ssrRenderAttrs((_temp0 = vue.mergeProps({
    type: "checkbox",
    value: _ctx.value,
    checked: Array.isArray(_ctx.proxyChecked) ? serverRenderer.ssrLooseContain(_ctx.proxyChecked, _ctx.value) : _ctx.proxyChecked,
    class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  }, _attrs), vue.mergeProps(_temp0, serverRenderer.ssrGetDynamicModelProps(_temp0, _ctx.proxyChecked))))}>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Checkbox.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var JetCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$p = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hidden sm:block" }, _attrs))}><div class="py-8"><div class="border-t border-gray-200"></div></div></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SectionBorder.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var JetSectionBorder = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$o = vue.defineComponent({
  components: {
    JetActionMessage,
    JetActionSection,
    JetButton,
    JetConfirmationModal,
    JetDangerButton,
    JetDialogModal,
    JetFormSection,
    JetInput,
    JetCheckbox,
    JetInputError,
    JetLabel,
    JetSecondaryButton,
    JetSectionBorder
  },
  props: [
    "tokens",
    "availablePermissions",
    "defaultPermissions"
  ],
  data() {
    return {
      createApiTokenForm: this.$inertia.form({
        name: "",
        permissions: this.defaultPermissions
      }),
      updateApiTokenForm: this.$inertia.form({
        permissions: []
      }),
      deleteApiTokenForm: this.$inertia.form(),
      displayingToken: false,
      managingPermissionsFor: null,
      apiTokenBeingDeleted: null
    };
  },
  methods: {
    createApiToken() {
      this.createApiTokenForm.post(route("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: () => {
          this.displayingToken = true;
          this.createApiTokenForm.reset();
        }
      });
    },
    manageApiTokenPermissions(token) {
      this.updateApiTokenForm.permissions = token.abilities;
      this.managingPermissionsFor = token;
    },
    updateApiToken() {
      this.updateApiTokenForm.put(route("api-tokens.update", this.managingPermissionsFor), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => this.managingPermissionsFor = null
      });
    },
    confirmApiTokenDeletion(token) {
      this.apiTokenBeingDeleted = token;
    },
    deleteApiToken() {
      this.deleteApiTokenForm.delete(route("api-tokens.destroy", this.apiTokenBeingDeleted), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => this.apiTokenBeingDeleted = null
      });
    }
  }
});
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = vue.resolveComponent("jet-form-section");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_checkbox = vue.resolveComponent("jet-checkbox");
  const _component_jet_action_message = vue.resolveComponent("jet-action-message");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_section_border = vue.resolveComponent("jet-section-border");
  const _component_jet_action_section = vue.resolveComponent("jet-action-section");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_confirmation_modal = vue.resolveComponent("jet-confirmation-modal");
  const _component_jet_danger_button = vue.resolveComponent("jet-danger-button");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_jet_form_section, {
    onSubmitted: _ctx.createApiToken,
    class: "mb-4"
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create API Token `);
      } else {
        return [
          vue.createTextVNode(" Create API Token ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API tokens allow third-party services to authenticate with our application on your behalf. `);
      } else {
        return [
          vue.createTextVNode(" API tokens allow third-party services to authenticate with our application on your behalf. ")
        ];
      }
    }),
    form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Name"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.createApiTokenForm.name,
          "onUpdate:modelValue": ($event) => _ctx.createApiTokenForm.name = $event,
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.createApiTokenForm.errors.name,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.availablePermissions.length > 0) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
            for: "permissions",
            value: "Permissions"
          }, null, _parent2, _scopeId));
          _push2(`<div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
          serverRenderer.ssrRenderList(_ctx.availablePermissions, (permission) => {
            _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_jet_checkbox, {
              value: permission,
              checked: _ctx.createApiTokenForm.permissions,
              "onUpdate:checked": ($event) => _ctx.createApiTokenForm.permissions = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(permission)}</span></label></div>`);
          });
          _push2(`<!--]--></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "name",
              value: "Name"
            }),
            vue.createVNode(_component_jet_input, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.createApiTokenForm.name,
              "onUpdate:modelValue": ($event) => _ctx.createApiTokenForm.name = $event,
              autofocus: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.createApiTokenForm.errors.name,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          _ctx.availablePermissions.length > 0 ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "col-span-6"
          }, [
            vue.createVNode(_component_jet_label, {
              for: "permissions",
              value: "Permissions"
            }),
            vue.createVNode("div", { class: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4" }, [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.availablePermissions, (permission) => {
                return vue.openBlock(), vue.createBlock("div", { key: permission }, [
                  vue.createVNode("label", { class: "flex items-center" }, [
                    vue.createVNode(_component_jet_checkbox, {
                      value: permission,
                      checked: _ctx.createApiTokenForm.permissions,
                      "onUpdate:checked": ($event) => _ctx.createApiTokenForm.permissions = $event
                    }, null, 8, ["value", "checked", "onUpdate:checked"]),
                    vue.createVNode("span", { class: "ml-2 text-sm text-gray-600" }, vue.toDisplayString(permission), 1)
                  ])
                ]);
              }), 128))
            ])
          ])) : vue.createCommentVNode("", true)
        ];
      }
    }),
    actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.createApiTokenForm.recentlySuccessful,
          class: "mr-3"
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Created. `);
            } else {
              return [
                vue.createTextVNode(" Created. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.createApiTokenForm.processing },
          disabled: _ctx.createApiTokenForm.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Create `);
            } else {
              return [
                vue.createTextVNode(" Create ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_action_message, {
            on: _ctx.createApiTokenForm.recentlySuccessful,
            class: "mr-3"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Created. ")
            ]),
            _: 1
          }, 8, ["on"]),
          vue.createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.createApiTokenForm.processing },
            disabled: _ctx.createApiTokenForm.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Create ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.tokens.length > 0) {
    _push(`<div>`);
    _push(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent));
    _push(`<div class="mt-10 sm:mt-0">`);
    _push(serverRenderer.ssrRenderComponent(_component_jet_action_section, null, {
      title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Manage API Tokens `);
        } else {
          return [
            vue.createTextVNode(" Manage API Tokens ")
          ];
        }
      }),
      description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` You may delete any of your existing tokens if they are no longer needed. `);
        } else {
          return [
            vue.createTextVNode(" You may delete any of your existing tokens if they are no longer needed. ")
          ];
        }
      }),
      content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
          serverRenderer.ssrRenderList(_ctx.tokens, (token) => {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>${serverRenderer.ssrInterpolate(token.name)}</div><div class="flex items-center"${_scopeId}>`);
            if (token.last_used_ago) {
              _push2(`<div class="text-sm text-gray-400"${_scopeId}> Last used ${serverRenderer.ssrInterpolate(token.last_used_ago)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.availablePermissions.length > 0) {
              _push2(`<button class="cursor-pointer ml-6 text-sm text-gray-400 underline"${_scopeId}> Permissions </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Delete </button></div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            vue.createVNode("div", { class: "space-y-6" }, [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.tokens, (token) => {
                return vue.openBlock(), vue.createBlock("div", {
                  class: "flex items-center justify-between",
                  key: token.id
                }, [
                  vue.createVNode("div", null, vue.toDisplayString(token.name), 1),
                  vue.createVNode("div", { class: "flex items-center" }, [
                    token.last_used_ago ? (vue.openBlock(), vue.createBlock("div", {
                      key: 0,
                      class: "text-sm text-gray-400"
                    }, " Last used " + vue.toDisplayString(token.last_used_ago), 1)) : vue.createCommentVNode("", true),
                    _ctx.availablePermissions.length > 0 ? (vue.openBlock(), vue.createBlock("button", {
                      key: 1,
                      class: "cursor-pointer ml-6 text-sm text-gray-400 underline",
                      onClick: ($event) => _ctx.manageApiTokenPermissions(token)
                    }, " Permissions ", 8, ["onClick"])) : vue.createCommentVNode("", true),
                    vue.createVNode("button", {
                      class: "cursor-pointer ml-6 text-sm text-red-500",
                      onClick: ($event) => _ctx.confirmApiTokenDeletion(token)
                    }, " Delete ", 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(serverRenderer.ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.displayingToken,
    onClose: ($event) => _ctx.displayingToken = false
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API Token `);
      } else {
        return [
          vue.createTextVNode(" API Token ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}> Please copy your new API token. For your security, it won&#39;t be shown again. </div>`);
        if (_ctx.$page.props.jetstream.flash.token) {
          _push2(`<div class="mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          vue.createVNode("div", null, " Please copy your new API token. For your security, it won't be shown again. "),
          _ctx.$page.props.jetstream.flash.token ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"
          }, vue.toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : vue.createCommentVNode("", true)
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.displayingToken = false
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Close `);
            } else {
              return [
                vue.createTextVNode(" Close ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.displayingToken = false
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Close ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.managingPermissionsFor,
    onClose: ($event) => _ctx.managingPermissionsFor = null
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API Token Permissions `);
      } else {
        return [
          vue.createTextVNode(" API Token Permissions ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
        serverRenderer.ssrRenderList(_ctx.availablePermissions, (permission) => {
          _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_checkbox, {
            value: permission,
            checked: _ctx.updateApiTokenForm.permissions,
            "onUpdate:checked": ($event) => _ctx.updateApiTokenForm.permissions = $event
          }, null, _parent2, _scopeId));
          _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(permission)}</span></label></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.availablePermissions, (permission) => {
              return vue.openBlock(), vue.createBlock("div", { key: permission }, [
                vue.createVNode("label", { class: "flex items-center" }, [
                  vue.createVNode(_component_jet_checkbox, {
                    value: permission,
                    checked: _ctx.updateApiTokenForm.permissions,
                    "onUpdate:checked": ($event) => _ctx.updateApiTokenForm.permissions = $event
                  }, null, 8, ["value", "checked", "onUpdate:checked"]),
                  vue.createVNode("span", { class: "ml-2 text-sm text-gray-600" }, vue.toDisplayString(permission), 1)
                ])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.managingPermissionsFor = null
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                vue.createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: ["ml-3", { "opacity-25": _ctx.updateApiTokenForm.processing }],
          onClick: _ctx.updateApiToken,
          disabled: _ctx.updateApiTokenForm.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                vue.createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.managingPermissionsFor = null
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          vue.createVNode(_component_jet_button, {
            class: ["ml-3", { "opacity-25": _ctx.updateApiTokenForm.processing }],
            onClick: _ctx.updateApiToken,
            disabled: _ctx.updateApiTokenForm.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_confirmation_modal, {
    show: _ctx.apiTokenBeingDeleted,
    onClose: ($event) => _ctx.apiTokenBeingDeleted = null
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete API Token `);
      } else {
        return [
          vue.createTextVNode(" Delete API Token ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Are you sure you would like to delete this API token? `);
      } else {
        return [
          vue.createTextVNode(" Are you sure you would like to delete this API token? ")
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.apiTokenBeingDeleted = null
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                vue.createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_danger_button, {
          class: ["ml-3", { "opacity-25": _ctx.deleteApiTokenForm.processing }],
          onClick: _ctx.deleteApiToken,
          disabled: _ctx.deleteApiTokenForm.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete `);
            } else {
              return [
                vue.createTextVNode(" Delete ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.apiTokenBeingDeleted = null
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          vue.createVNode(_component_jet_danger_button, {
            class: ["ml-3", { "opacity-25": _ctx.deleteApiTokenForm.processing }],
            onClick: _ctx.deleteApiToken,
            disabled: _ctx.deleteApiTokenForm.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Delete ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Partials/ApiTokenManager.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var ApiTokenManager = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
var ApiTokenManager$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ApiTokenManager
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = vue.defineComponent({
  props: [
    "tokens",
    "availablePermissions",
    "defaultPermissions"
  ],
  components: {
    ApiTokenManager,
    AppLayout
  }
});
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = vue.resolveComponent("app-layout");
  const _component_api_token_manager = vue.resolveComponent("api-token-manager");
  _push(serverRenderer.ssrRenderComponent(_component_app_layout, vue.mergeProps({ title: "API Tokens" }, _attrs), {
    header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> API Tokens </h2>`);
      } else {
        return [
          vue.createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " API Tokens ")
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_api_token_manager, {
          tokens: _ctx.tokens,
          "available-permissions": _ctx.availablePermissions,
          "default-permissions": _ctx.defaultPermissions
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          vue.createVNode("div", null, [
            vue.createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
              vue.createVNode(_component_api_token_manager, {
                tokens: _ctx.tokens,
                "available-permissions": _ctx.availablePermissions,
                "default-permissions": _ctx.defaultPermissions
              }, null, 8, ["tokens", "available-permissions", "default-permissions"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var Index = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
var Index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" }, _attrs))}><div>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
  _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/AuthenticationCard.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var JetAuthenticationCard = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$l = vue.defineComponent({
  computed: {
    errors() {
      return this.$page.props.errors;
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  }
});
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.hasErrors) {
    _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div class="font-medium text-red-600">Whoops! Something went wrong.</div><ul class="mt-3 list-disc list-inside text-sm text-red-600"><!--[-->`);
    serverRenderer.ssrRenderList(_ctx.errors, (error, key) => {
      _push(`<li>${serverRenderer.ssrInterpolate(error)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ValidationErrors.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var JetValidationErrors = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$k = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  data() {
    return {
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("password.confirm"), {
        onFinish: () => this.form.reset()
      });
    }
  }
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card = vue.resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = vue.resolveComponent("jet-validation-errors");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Secure Area" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          required: "",
          autocomplete: "current-password",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Confirm `);
            } else {
              return [
                vue.createTextVNode(" Confirm ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
          vue.createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          vue.createVNode("form", {
            onSubmit: vue.withModifiers(_ctx.submit, ["prevent"])
          }, [
            vue.createVNode("div", null, [
              vue.createVNode(_component_jet_label, {
                for: "password",
                value: "Password"
              }),
              vue.createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "current-password",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "flex justify-end mt-4" }, [
              vue.createVNode(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Confirm ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var ConfirmPassword = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
var ConfirmPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  props: {
    status: String
  },
  data() {
    return {
      form: this.$inertia.form({
        email: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("password.email"));
    }
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card = vue.resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = vue.resolveComponent("jet-validation-errors");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Forgot Password" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
        if (_ctx.status) {
          _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.status)}</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(serverRenderer.ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
          required: "",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Email Password Reset Link `);
            } else {
              return [
                vue.createTextVNode(" Email Password Reset Link ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
          _ctx.status ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "mb-4 font-medium text-sm text-green-600"
          }, vue.toDisplayString(_ctx.status), 1)) : vue.createCommentVNode("", true),
          vue.createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          vue.createVNode("form", {
            onSubmit: vue.withModifiers(_ctx.submit, ["prevent"])
          }, [
            vue.createVNode("div", null, [
              vue.createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              vue.createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: "",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              vue.createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Email Password Reset Link ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
var ForgotPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors,
    Link: inertiaVue3.Link
  },
  props: {
    canResetPassword: Boolean,
    status: String
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    submit() {
      this.form.transform((data) => ({
        ...data,
        remember: this.form.remember ? "on" : ""
      })).post(this.route("login"), {
        onFinish: () => this.form.reset("password")
      });
    }
  }
});
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card = vue.resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = vue.resolveComponent("jet-validation-errors");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_checkbox = vue.resolveComponent("jet-checkbox");
  const _component_Link = vue.resolveComponent("Link");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Log in" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        if (_ctx.status) {
          _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.status)}</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
          required: "",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          required: "",
          autocomplete: "current-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_checkbox, {
          name: "remember",
          checked: _ctx.form.remember,
          "onUpdate:checked": ($event) => _ctx.form.remember = $event
        }, null, _parent2, _scopeId));
        _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        if (_ctx.canResetPassword) {
          _push2(serverRenderer.ssrRenderComponent(_component_Link, {
            href: _ctx.route("password.request"),
            class: "underline text-sm text-gray-600 hover:text-gray-900"
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Forgot your password? `);
              } else {
                return [
                  vue.createTextVNode(" Forgot your password? ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log in `);
            } else {
              return [
                vue.createTextVNode(" Log in ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          vue.createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          _ctx.status ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "mb-4 font-medium text-sm text-green-600"
          }, vue.toDisplayString(_ctx.status), 1)) : vue.createCommentVNode("", true),
          vue.createVNode("form", {
            onSubmit: vue.withModifiers(_ctx.submit, ["prevent"])
          }, [
            vue.createVNode("div", null, [
              vue.createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              vue.createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: "",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "mt-4" }, [
              vue.createVNode(_component_jet_label, {
                for: "password",
                value: "Password"
              }),
              vue.createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "current-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "block mt-4" }, [
              vue.createVNode("label", { class: "flex items-center" }, [
                vue.createVNode(_component_jet_checkbox, {
                  name: "remember",
                  checked: _ctx.form.remember,
                  "onUpdate:checked": ($event) => _ctx.form.remember = $event
                }, null, 8, ["checked", "onUpdate:checked"]),
                vue.createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Remember me")
              ])
            ]),
            vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              _ctx.canResetPassword ? (vue.openBlock(), vue.createBlock(_component_Link, {
                key: 0,
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 hover:text-gray-900"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Forgot your password? ")
                ]),
                _: 1
              }, 8, ["href"])) : vue.createCommentVNode("", true),
              vue.createVNode(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Log in ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var Login = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
var Login$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors,
    Link: inertiaVue3.Link
  },
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("register"), {
        onFinish: () => this.form.reset("password", "password_confirmation")
      });
    }
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card = vue.resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = vue.resolveComponent("jet-validation-errors");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_checkbox = vue.resolveComponent("jet-checkbox");
  const _component_Link = vue.resolveComponent("Link");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Register" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Name"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.name,
          "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
          required: "",
          autofocus: "",
          autocomplete: "name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
          required: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirm Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
          _push2(`<div class="mt-4"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_label, { for: "terms" }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex items-center"${_scopeId2}>`);
                _push3(serverRenderer.ssrRenderComponent(_component_jet_checkbox, {
                  name: "terms",
                  id: "terms",
                  checked: _ctx.form.terms,
                  "onUpdate:checked": ($event) => _ctx.form.terms = $event
                }, null, _parent3, _scopeId2));
                _push3(`<div class="ml-2"${_scopeId2}> I agree to the <a target="_blank"${serverRenderer.ssrRenderAttr("href", _ctx.route("terms.show"))} class="underline text-sm text-gray-600 hover:text-gray-900"${_scopeId2}>Terms of Service</a> and <a target="_blank"${serverRenderer.ssrRenderAttr("href", _ctx.route("policy.show"))} class="underline text-sm text-gray-600 hover:text-gray-900"${_scopeId2}>Privacy Policy</a></div></div>`);
              } else {
                return [
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode(_component_jet_checkbox, {
                      name: "terms",
                      id: "terms",
                      checked: _ctx.form.terms,
                      "onUpdate:checked": ($event) => _ctx.form.terms = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    vue.createVNode("div", { class: "ml-2" }, [
                      vue.createTextVNode(" I agree to the "),
                      vue.createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("terms.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "Terms of Service", 8, ["href"]),
                      vue.createTextVNode(" and "),
                      vue.createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("policy.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "Privacy Policy", 8, ["href"])
                    ])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Link, {
          href: _ctx.route("login"),
          class: "underline text-sm text-gray-600 hover:text-gray-900"
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Already registered? `);
            } else {
              return [
                vue.createTextVNode(" Already registered? ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Register `);
            } else {
              return [
                vue.createTextVNode(" Register ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          vue.createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          vue.createVNode("form", {
            onSubmit: vue.withModifiers(_ctx.submit, ["prevent"])
          }, [
            vue.createVNode("div", null, [
              vue.createVNode(_component_jet_label, {
                for: "name",
                value: "Name"
              }),
              vue.createVNode(_component_jet_input, {
                id: "name",
                type: "text",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.name,
                "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
                required: "",
                autofocus: "",
                autocomplete: "name"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "mt-4" }, [
              vue.createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              vue.createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "mt-4" }, [
              vue.createVNode(_component_jet_label, {
                for: "password",
                value: "Password"
              }),
              vue.createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "mt-4" }, [
              vue.createVNode(_component_jet_label, {
                for: "password_confirmation",
                value: "Confirm Password"
              }),
              vue.createVNode(_component_jet_input, {
                id: "password_confirmation",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password_confirmation,
                "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (vue.openBlock(), vue.createBlock("div", {
              key: 0,
              class: "mt-4"
            }, [
              vue.createVNode(_component_jet_label, { for: "terms" }, {
                default: vue.withCtx(() => [
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode(_component_jet_checkbox, {
                      name: "terms",
                      id: "terms",
                      checked: _ctx.form.terms,
                      "onUpdate:checked": ($event) => _ctx.form.terms = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    vue.createVNode("div", { class: "ml-2" }, [
                      vue.createTextVNode(" I agree to the "),
                      vue.createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("terms.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "Terms of Service", 8, ["href"]),
                      vue.createTextVNode(" and "),
                      vue.createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("policy.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "Privacy Policy", 8, ["href"])
                    ])
                  ])
                ]),
                _: 1
              })
            ])) : vue.createCommentVNode("", true),
            vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              vue.createVNode(_component_Link, {
                href: _ctx.route("login"),
                class: "underline text-sm text-gray-600 hover:text-gray-900"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Already registered? ")
                ]),
                _: 1
              }, 8, ["href"]),
              vue.createVNode(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Register ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var Register = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
var Register$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Register
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  props: {
    email: String,
    token: String
  },
  data() {
    return {
      form: this.$inertia.form({
        token: this.token,
        email: this.email,
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("password.update"), {
        onFinish: () => this.form.reset("password", "password_confirmation")
      });
    }
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card = vue.resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = vue.resolveComponent("jet-validation-errors");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Reset Password" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
          required: "",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirm Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Reset Password `);
            } else {
              return [
                vue.createTextVNode(" Reset Password ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          vue.createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          vue.createVNode("form", {
            onSubmit: vue.withModifiers(_ctx.submit, ["prevent"])
          }, [
            vue.createVNode("div", null, [
              vue.createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              vue.createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: "",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "mt-4" }, [
              vue.createVNode(_component_jet_label, {
                for: "password",
                value: "Password"
              }),
              vue.createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "mt-4" }, [
              vue.createVNode(_component_jet_label, {
                for: "password_confirmation",
                value: "Confirm Password"
              }),
              vue.createVNode(_component_jet_input, {
                id: "password_confirmation",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password_confirmation,
                "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              vue.createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Reset Password ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
var ResetPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  data() {
    return {
      recovery: false,
      form: this.$inertia.form({
        code: "",
        recovery_code: ""
      })
    };
  },
  methods: {
    toggleRecovery() {
      this.recovery ^= true;
      this.$nextTick(() => {
        if (this.recovery) {
          this.$refs.recovery_code.focus();
          this.form.code = "";
        } else {
          this.$refs.code.focus();
          this.form.recovery_code = "";
        }
      });
    },
    submit() {
      this.form.post(this.route("two-factor.login"));
    }
  }
});
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card = vue.resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = vue.resolveComponent("jet-validation-errors");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Two-factor Confirmation" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}>`);
        if (!_ctx.recovery) {
          _push2(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
        } else {
          _push2(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
        }
        _push2(`</div>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}>`);
        if (!_ctx.recovery) {
          _push2(`<div${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
            for: "code",
            value: "Code"
          }, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
            ref: "code",
            id: "code",
            type: "text",
            inputmode: "numeric",
            class: "mt-1 block w-full",
            modelValue: _ctx.form.code,
            "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
            autofocus: "",
            autocomplete: "one-time-code"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
            for: "recovery_code",
            value: "Recovery Code"
          }, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
            ref: "recovery_code",
            id: "recovery_code",
            type: "text",
            class: "mt-1 block w-full",
            modelValue: _ctx.form.recovery_code,
            "onUpdate:modelValue": ($event) => _ctx.form.recovery_code = $event,
            autocomplete: "one-time-code"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}><button type="button" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"${_scopeId}>`);
        if (!_ctx.recovery) {
          _push2(`<!--[--> Use a recovery code <!--]-->`);
        } else {
          _push2(`<!--[--> Use an authentication code <!--]-->`);
        }
        _push2(`</button>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log in `);
            } else {
              return [
                vue.createTextVNode(" Log in ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
            !_ctx.recovery ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
              vue.createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
            ], 64)) : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
              vue.createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
            ], 64))
          ]),
          vue.createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          vue.createVNode("form", {
            onSubmit: vue.withModifiers(_ctx.submit, ["prevent"])
          }, [
            !_ctx.recovery ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
              vue.createVNode(_component_jet_label, {
                for: "code",
                value: "Code"
              }),
              vue.createVNode(_component_jet_input, {
                ref: "code",
                id: "code",
                type: "text",
                inputmode: "numeric",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.code,
                "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
                autofocus: "",
                autocomplete: "one-time-code"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])) : (vue.openBlock(), vue.createBlock("div", { key: 1 }, [
              vue.createVNode(_component_jet_label, {
                for: "recovery_code",
                value: "Recovery Code"
              }),
              vue.createVNode(_component_jet_input, {
                ref: "recovery_code",
                id: "recovery_code",
                type: "text",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.recovery_code,
                "onUpdate:modelValue": ($event) => _ctx.form.recovery_code = $event,
                autocomplete: "one-time-code"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])),
            vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              vue.createVNode("button", {
                type: "button",
                class: "text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",
                onClick: vue.withModifiers(_ctx.toggleRecovery, ["prevent"])
              }, [
                !_ctx.recovery ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                  vue.createTextVNode(" Use a recovery code ")
                ], 64)) : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                  vue.createTextVNode(" Use an authentication code ")
                ], 64))
              ], 8, ["onClick"]),
              vue.createVNode(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Log in ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var TwoFactorChallenge = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
var TwoFactorChallenge$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TwoFactorChallenge
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = vue.defineComponent({
  components: {
    Head: inertiaVue3.Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    Link: inertiaVue3.Link
  },
  props: {
    status: String
  },
  data() {
    return {
      form: this.$inertia.form()
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("verification.send"));
    }
  },
  computed: {
    verificationLinkSent() {
      return this.status === "verification-link-sent";
    }
  }
});
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue.resolveComponent("Head");
  const _component_jet_authentication_card = vue.resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = vue.resolveComponent("jet-authentication-card-logo");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_Link = vue.resolveComponent("Link");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Email Verification" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
        if (_ctx.verificationLinkSent) {
          _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Resend Verification Email `);
            } else {
              return [
                vue.createTextVNode(" Resend Verification Email ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_Link, {
          href: _ctx.route("logout"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900"
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Log Out`);
            } else {
              return [
                vue.createTextVNode("Log Out")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
          _ctx.verificationLinkSent ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "mb-4 font-medium text-sm text-green-600"
          }, " A new verification link has been sent to the email address you provided during registration. ")) : vue.createCommentVNode("", true),
          vue.createVNode("form", {
            onSubmit: vue.withModifiers(_ctx.submit, ["prevent"])
          }, [
            vue.createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
              vue.createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Resend Verification Email ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              vue.createVNode(_component_Link, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button",
                class: "underline text-sm text-gray-600 hover:text-gray-900"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Log Out")
                ]),
                _: 1
              }, 8, ["href"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
var VerifyEmail$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = vue.defineComponent({
  components: {
    JetActionSection,
    JetDangerButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton
  },
  data() {
    return {
      confirmingUserDeletion: false,
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    confirmUserDeletion() {
      this.confirmingUserDeletion = true;
      setTimeout(() => this.$refs.password.focus(), 250);
    },
    deleteUser() {
      this.form.delete(route("current-user.destroy"), {
        preserveScroll: true,
        onSuccess: () => this.closeModal(),
        onError: () => this.$refs.password.focus(),
        onFinish: () => this.form.reset()
      });
    },
    closeModal() {
      this.confirmingUserDeletion = false;
      this.form.reset();
    }
  }
});
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = vue.resolveComponent("jet-action-section");
  const _component_jet_danger_button = vue.resolveComponent("jet-danger-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete Account `);
      } else {
        return [
          vue.createTextVNode(" Delete Account ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Permanently delete your account. `);
      } else {
        return [
          vue.createTextVNode(" Permanently delete your account. ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_danger_button, { onClick: _ctx.confirmUserDeletion }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete Account `);
            } else {
              return [
                vue.createTextVNode(" Delete Account ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_dialog_modal, {
          show: _ctx.confirmingUserDeletion,
          onClose: _ctx.closeModal
        }, {
          title: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete Account `);
            } else {
              return [
                vue.createTextVNode(" Delete Account ")
              ];
            }
          }),
          content: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. <div class="mt-4"${_scopeId2}>`);
              _push3(serverRenderer.ssrRenderComponent(_component_jet_input, {
                type: "password",
                class: "mt-1 block w-3/4",
                placeholder: "Password",
                ref: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                onKeyup: _ctx.deleteUser
              }, null, _parent3, _scopeId2));
              _push3(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.password,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                vue.createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_jet_input, {
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    ref: "password",
                    modelValue: _ctx.form.password,
                    "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                    onKeyup: vue.withKeys(_ctx.deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  vue.createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])
              ];
            }
          }),
          footer: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cancel `);
                  } else {
                    return [
                      vue.createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(serverRenderer.ssrRenderComponent(_component_jet_danger_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.deleteUser,
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Delete Account `);
                  } else {
                    return [
                      vue.createTextVNode(" Delete Account ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                vue.createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_jet_danger_button, {
                  class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                  onClick: _ctx.deleteUser,
                  disabled: _ctx.form.processing
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Delete Account ")
                  ]),
                  _: 1
                }, 8, ["onClick", "class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. "),
          vue.createVNode("div", { class: "mt-5" }, [
            vue.createVNode(_component_jet_danger_button, { onClick: _ctx.confirmUserDeletion }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Delete Account ")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          vue.createVNode(_component_jet_dialog_modal, {
            show: _ctx.confirmingUserDeletion,
            onClose: _ctx.closeModal
          }, {
            title: vue.withCtx(() => [
              vue.createTextVNode(" Delete Account ")
            ]),
            content: vue.withCtx(() => [
              vue.createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
              vue.createVNode("div", { class: "mt-4" }, [
                vue.createVNode(_component_jet_input, {
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  ref: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  onKeyup: vue.withKeys(_ctx.deleteUser, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                vue.createVNode(_component_jet_input_error, {
                  message: _ctx.form.errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ]),
            footer: vue.withCtx(() => [
              vue.createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_jet_danger_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.deleteUser,
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Delete Account ")
                ]),
                _: 1
              }, 8, ["onClick", "class", "disabled"])
            ]),
            _: 1
          }, 8, ["show", "onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var DeleteUserForm = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
var DeleteUserForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = vue.defineComponent({
  props: ["sessions"],
  components: {
    JetActionMessage,
    JetActionSection,
    JetButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton
  },
  data() {
    return {
      confirmingLogout: false,
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    confirmLogout() {
      this.confirmingLogout = true;
      setTimeout(() => this.$refs.password.focus(), 250);
    },
    logoutOtherBrowserSessions() {
      this.form.delete(route("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => this.closeModal(),
        onError: () => this.$refs.password.focus(),
        onFinish: () => this.form.reset()
      });
    },
    closeModal() {
      this.confirmingLogout = false;
      this.form.reset();
    }
  }
});
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = vue.resolveComponent("jet-action-section");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_action_message = vue.resolveComponent("jet-action-message");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Browser Sessions `);
      } else {
        return [
          vue.createTextVNode(" Browser Sessions ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Manage and log out your active sessions on other browsers and devices. `);
      } else {
        return [
          vue.createTextVNode(" Manage and log out your active sessions on other browsers and devices. ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. </div>`);
        if (_ctx.sessions.length > 0) {
          _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
          serverRenderer.ssrRenderList(_ctx.sessions, (session, i2) => {
            _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
            if (session.agent.is_desktop) {
              _push2(`<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M0 0h24v24H0z" stroke="none"${_scopeId}></path><rect x="7" y="4" width="10" height="16" rx="1"${_scopeId}></rect><path d="M11 5h2M12 17v.01"${_scopeId}></path></svg>`);
            }
            _push2(`</div><div class="ml-3"${_scopeId}><div class="text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(session.agent.platform ? session.agent.platform : "Unknown")} - ${serverRenderer.ssrInterpolate(session.agent.browser ? session.agent.browser : "Unknown")}</div><div${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(session.ip_address)}, `);
            if (session.is_current_device) {
              _push2(`<span class="text-green-500 font-semibold"${_scopeId}>This device</span>`);
            } else {
              _push2(`<span${_scopeId}>Last active ${serverRenderer.ssrInterpolate(session.last_active)}</span>`);
            }
            _push2(`</div></div></div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="flex items-center mt-5"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, { onClick: _ctx.confirmLogout }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log Out Other Browser Sessions `);
            } else {
              return [
                vue.createTextVNode(" Log Out Other Browser Sessions ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "ml-3"
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Done. `);
            } else {
              return [
                vue.createTextVNode(" Done. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_dialog_modal, {
          show: _ctx.confirmingLogout,
          onClose: _ctx.closeModal
        }, {
          title: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log Out Other Browser Sessions `);
            } else {
              return [
                vue.createTextVNode(" Log Out Other Browser Sessions ")
              ];
            }
          }),
          content: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. <div class="mt-4"${_scopeId2}>`);
              _push3(serverRenderer.ssrRenderComponent(_component_jet_input, {
                type: "password",
                class: "mt-1 block w-3/4",
                placeholder: "Password",
                ref: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                onKeyup: _ctx.logoutOtherBrowserSessions
              }, null, _parent3, _scopeId2));
              _push3(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.password,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                vue.createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_jet_input, {
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    ref: "password",
                    modelValue: _ctx.form.password,
                    "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                    onKeyup: vue.withKeys(_ctx.logoutOtherBrowserSessions, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  vue.createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])
              ];
            }
          }),
          footer: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cancel `);
                  } else {
                    return [
                      vue.createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(serverRenderer.ssrRenderComponent(_component_jet_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.logoutOtherBrowserSessions,
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Log Out Other Browser Sessions `);
                  } else {
                    return [
                      vue.createTextVNode(" Log Out Other Browser Sessions ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                vue.createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_jet_button, {
                  class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                  onClick: _ctx.logoutOtherBrowserSessions,
                  disabled: _ctx.form.processing
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Log Out Other Browser Sessions ")
                  ]),
                  _: 1
                }, 8, ["onClick", "class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. "),
          _ctx.sessions.length > 0 ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "mt-5 space-y-6"
          }, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.sessions, (session, i2) => {
              return vue.openBlock(), vue.createBlock("div", {
                class: "flex items-center",
                key: i2
              }, [
                vue.createVNode("div", null, [
                  session.agent.is_desktop ? (vue.openBlock(), vue.createBlock("svg", {
                    key: 0,
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-8 h-8 text-gray-500"
                  }, [
                    vue.createVNode("path", { d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
                  ])) : (vue.openBlock(), vue.createBlock("svg", {
                    key: 1,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2",
                    stroke: "currentColor",
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "w-8 h-8 text-gray-500"
                  }, [
                    vue.createVNode("path", {
                      d: "M0 0h24v24H0z",
                      stroke: "none"
                    }),
                    vue.createVNode("rect", {
                      x: "7",
                      y: "4",
                      width: "10",
                      height: "16",
                      rx: "1"
                    }),
                    vue.createVNode("path", { d: "M11 5h2M12 17v.01" })
                  ]))
                ]),
                vue.createVNode("div", { class: "ml-3" }, [
                  vue.createVNode("div", { class: "text-sm text-gray-600" }, vue.toDisplayString(session.agent.platform ? session.agent.platform : "Unknown") + " - " + vue.toDisplayString(session.agent.browser ? session.agent.browser : "Unknown"), 1),
                  vue.createVNode("div", null, [
                    vue.createVNode("div", { class: "text-xs text-gray-500" }, [
                      vue.createTextVNode(vue.toDisplayString(session.ip_address) + ", ", 1),
                      session.is_current_device ? (vue.openBlock(), vue.createBlock("span", {
                        key: 0,
                        class: "text-green-500 font-semibold"
                      }, "This device")) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, "Last active " + vue.toDisplayString(session.last_active), 1))
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])) : vue.createCommentVNode("", true),
          vue.createVNode("div", { class: "flex items-center mt-5" }, [
            vue.createVNode(_component_jet_button, { onClick: _ctx.confirmLogout }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Log Out Other Browser Sessions ")
              ]),
              _: 1
            }, 8, ["onClick"]),
            vue.createVNode(_component_jet_action_message, {
              on: _ctx.form.recentlySuccessful,
              class: "ml-3"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Done. ")
              ]),
              _: 1
            }, 8, ["on"])
          ]),
          vue.createVNode(_component_jet_dialog_modal, {
            show: _ctx.confirmingLogout,
            onClose: _ctx.closeModal
          }, {
            title: vue.withCtx(() => [
              vue.createTextVNode(" Log Out Other Browser Sessions ")
            ]),
            content: vue.withCtx(() => [
              vue.createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
              vue.createVNode("div", { class: "mt-4" }, [
                vue.createVNode(_component_jet_input, {
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  ref: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  onKeyup: vue.withKeys(_ctx.logoutOtherBrowserSessions, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                vue.createVNode(_component_jet_input_error, {
                  message: _ctx.form.errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ]),
            footer: vue.withCtx(() => [
              vue.createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_jet_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.logoutOtherBrowserSessions,
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Log Out Other Browser Sessions ")
                ]),
                _: 1
              }, 8, ["onClick", "class", "disabled"])
            ]),
            _: 1
          }, 8, ["show", "onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var LogoutOtherBrowserSessionsForm = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
var LogoutOtherBrowserSessionsForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": LogoutOtherBrowserSessionsForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = vue.defineComponent({
  emits: ["confirmed"],
  props: {
    title: {
      default: "Confirm Password"
    },
    content: {
      default: "For your security, please confirm your password to continue."
    },
    button: {
      default: "Confirm"
    }
  },
  components: {
    JetButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton
  },
  data() {
    return {
      confirmingPassword: false,
      form: {
        password: "",
        error: ""
      }
    };
  },
  methods: {
    startConfirmingPassword() {
      axios.get(route("password.confirmation")).then((response) => {
        if (response.data.confirmed) {
          this.$emit("confirmed");
        } else {
          this.confirmingPassword = true;
          setTimeout(() => this.$refs.password.focus(), 250);
        }
      });
    },
    confirmPassword() {
      this.form.processing = true;
      axios.post(route("password.confirm"), {
        password: this.form.password
      }).then(() => {
        this.form.processing = false;
        this.closeModal();
        this.$nextTick(() => this.$emit("confirmed"));
      }).catch((error) => {
        this.form.processing = false;
        this.form.error = error.response.data.errors.password[0];
        this.$refs.password.focus();
      });
    },
    closeModal() {
      this.confirmingPassword = false;
      this.form.password = "";
      this.form.error = "";
    }
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(`<span${serverRenderer.ssrRenderAttrs(_attrs)}><span>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
  _push(serverRenderer.ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.confirmingPassword,
    onClose: _ctx.closeModal
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.ssrInterpolate(_ctx.title)}`);
      } else {
        return [
          vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.ssrInterpolate(_ctx.content)} <div class="mt-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          type: "password",
          class: "mt-1 block w-3/4",
          placeholder: "Password",
          ref: "password",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          onKeyup: _ctx.confirmPassword
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.error,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue.createTextVNode(vue.toDisplayString(_ctx.content) + " ", 1),
          vue.createVNode("div", { class: "mt-4" }, [
            vue.createVNode(_component_jet_input, {
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              ref: "password",
              modelValue: _ctx.form.password,
              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
              onKeyup: vue.withKeys(_ctx.confirmPassword, ["enter"])
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.error,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                vue.createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: ["ml-3", { "opacity-25": _ctx.form.processing }],
          onClick: _ctx.confirmPassword,
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${serverRenderer.ssrInterpolate(_ctx.button)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.button), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          vue.createVNode(_component_jet_button, {
            class: ["ml-3", { "opacity-25": _ctx.form.processing }],
            onClick: _ctx.confirmPassword,
            disabled: _ctx.form.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.button), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ConfirmsPassword.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var JetConfirmsPassword = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = vue.defineComponent({
  components: {
    JetActionSection,
    JetButton,
    JetConfirmsPassword,
    JetDangerButton,
    JetSecondaryButton
  },
  data() {
    return {
      enabling: false,
      disabling: false,
      qrCode: null,
      recoveryCodes: []
    };
  },
  methods: {
    enableTwoFactorAuthentication() {
      this.enabling = true;
      this.$inertia.post("/user/two-factor-authentication", {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
          this.showQrCode(),
          this.showRecoveryCodes()
        ]),
        onFinish: () => this.enabling = false
      });
    },
    showQrCode() {
      return axios.get("/user/two-factor-qr-code").then((response) => {
        this.qrCode = response.data.svg;
      });
    },
    showRecoveryCodes() {
      return axios.get("/user/two-factor-recovery-codes").then((response) => {
        this.recoveryCodes = response.data;
      });
    },
    regenerateRecoveryCodes() {
      axios.post("/user/two-factor-recovery-codes").then((response) => {
        this.showRecoveryCodes();
      });
    },
    disableTwoFactorAuthentication() {
      this.disabling = true;
      this.$inertia.delete("/user/two-factor-authentication", {
        preserveScroll: true,
        onSuccess: () => this.disabling = false
      });
    }
  },
  computed: {
    twoFactorEnabled() {
      return !this.enabling && this.$page.props.user.two_factor_enabled;
    }
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = vue.resolveComponent("jet-action-section");
  const _component_jet_confirms_password = vue.resolveComponent("jet-confirms-password");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_danger_button = vue.resolveComponent("jet-danger-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Two Factor Authentication `);
      } else {
        return [
          vue.createTextVNode(" Two Factor Authentication ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Add additional security to your account using two factor authentication. `);
      } else {
        return [
          vue.createTextVNode(" Add additional security to your account using two factor authentication. ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.twoFactorEnabled) {
          _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> You have enabled two factor authentication. </h3>`);
        } else {
          _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> You have not enabled two factor authentication. </h3>`);
        }
        _push2(`<div class="mt-3 max-w-xl text-sm text-gray-600"${_scopeId}><p${_scopeId}> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone&#39;s Google Authenticator application. </p></div>`);
        if (_ctx.twoFactorEnabled) {
          _push2(`<div${_scopeId}>`);
          if (_ctx.qrCode) {
            _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}> Two factor authentication is now enabled. Scan the following QR code using your phone&#39;s authenticator application. </p></div><div class="mt-4"${_scopeId}>${_ctx.qrCode}</div></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.recoveryCodes.length > 0) {
            _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}> Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. </p></div><div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(_ctx.recoveryCodes, (code) => {
              _push2(`<div${_scopeId}>${serverRenderer.ssrInterpolate(code)}</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="mt-5"${_scopeId}>`);
        if (!_ctx.twoFactorEnabled) {
          _push2(`<div${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.enableTwoFactorAuthentication }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.ssrRenderComponent(_component_jet_button, {
                  type: "button",
                  class: { "opacity-25": _ctx.enabling },
                  disabled: _ctx.enabling
                }, {
                  default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Enable `);
                    } else {
                      return [
                        vue.createTextVNode(" Enable ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  vue.createVNode(_component_jet_button, {
                    type: "button",
                    class: { "opacity-25": _ctx.enabling },
                    disabled: _ctx.enabling
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Enable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.regenerateRecoveryCodes }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.recoveryCodes.length > 0) {
                  _push3(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, { class: "mr-3" }, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Regenerate Recovery Codes `);
                      } else {
                        return [
                          vue.createTextVNode(" Regenerate Recovery Codes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.recoveryCodes.length > 0 ? (vue.openBlock(), vue.createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Regenerate Recovery Codes ")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.showRecoveryCodes }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.recoveryCodes.length === 0) {
                  _push3(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, { class: "mr-3" }, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Show Recovery Codes `);
                      } else {
                        return [
                          vue.createTextVNode(" Show Recovery Codes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.recoveryCodes.length === 0 ? (vue.openBlock(), vue.createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Show Recovery Codes ")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.disableTwoFactorAuthentication }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.ssrRenderComponent(_component_jet_danger_button, {
                  class: { "opacity-25": _ctx.disabling },
                  disabled: _ctx.disabling
                }, {
                  default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Disable `);
                    } else {
                      return [
                        vue.createTextVNode(" Disable ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  vue.createVNode(_component_jet_danger_button, {
                    class: { "opacity-25": _ctx.disabling },
                    disabled: _ctx.disabling
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Disable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          _ctx.twoFactorEnabled ? (vue.openBlock(), vue.createBlock("h3", {
            key: 0,
            class: "text-lg font-medium text-gray-900"
          }, " You have enabled two factor authentication. ")) : (vue.openBlock(), vue.createBlock("h3", {
            key: 1,
            class: "text-lg font-medium text-gray-900"
          }, " You have not enabled two factor authentication. ")),
          vue.createVNode("div", { class: "mt-3 max-w-xl text-sm text-gray-600" }, [
            vue.createVNode("p", null, " When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")
          ]),
          _ctx.twoFactorEnabled ? (vue.openBlock(), vue.createBlock("div", { key: 2 }, [
            _ctx.qrCode ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
              vue.createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600" }, [
                vue.createVNode("p", { class: "font-semibold" }, " Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application. ")
              ]),
              vue.createVNode("div", {
                class: "mt-4",
                innerHTML: _ctx.qrCode
              }, null, 8, ["innerHTML"])
            ])) : vue.createCommentVNode("", true),
            _ctx.recoveryCodes.length > 0 ? (vue.openBlock(), vue.createBlock("div", { key: 1 }, [
              vue.createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600" }, [
                vue.createVNode("p", { class: "font-semibold" }, " Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")
              ]),
              vue.createVNode("div", { class: "grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.recoveryCodes, (code) => {
                  return vue.openBlock(), vue.createBlock("div", { key: code }, vue.toDisplayString(code), 1);
                }), 128))
              ])
            ])) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true),
          vue.createVNode("div", { class: "mt-5" }, [
            !_ctx.twoFactorEnabled ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
              vue.createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.enableTwoFactorAuthentication }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_jet_button, {
                    type: "button",
                    class: { "opacity-25": _ctx.enabling },
                    disabled: _ctx.enabling
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Enable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["onConfirmed"])
            ])) : (vue.openBlock(), vue.createBlock("div", { key: 1 }, [
              vue.createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.regenerateRecoveryCodes }, {
                default: vue.withCtx(() => [
                  _ctx.recoveryCodes.length > 0 ? (vue.openBlock(), vue.createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Regenerate Recovery Codes ")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onConfirmed"]),
              vue.createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.showRecoveryCodes }, {
                default: vue.withCtx(() => [
                  _ctx.recoveryCodes.length === 0 ? (vue.openBlock(), vue.createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Show Recovery Codes ")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onConfirmed"]),
              vue.createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.disableTwoFactorAuthentication }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_jet_danger_button, {
                    class: { "opacity-25": _ctx.disabling },
                    disabled: _ctx.disabling
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Disable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["onConfirmed"])
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var TwoFactorAuthenticationForm = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
var TwoFactorAuthenticationForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TwoFactorAuthenticationForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = vue.defineComponent({
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel
  },
  data() {
    return {
      form: this.$inertia.form({
        current_password: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    updatePassword() {
      this.form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
        onError: () => {
          if (this.form.errors.password) {
            this.form.reset("password", "password_confirmation");
            this.$refs.password.focus();
          }
          if (this.form.errors.current_password) {
            this.form.reset("current_password");
            this.$refs.current_password.focus();
          }
        }
      });
    }
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = vue.resolveComponent("jet-form-section");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_action_message = vue.resolveComponent("jet-action-message");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_form_section, vue.mergeProps({ onSubmitted: _ctx.updatePassword }, _attrs), {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Password `);
      } else {
        return [
          vue.createTextVNode(" Update Password ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ensure your account is using a long, random password to stay secure. `);
      } else {
        return [
          vue.createTextVNode(" Ensure your account is using a long, random password to stay secure. ")
        ];
      }
    }),
    form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "current_password",
          value: "Current Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "current_password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.current_password,
          "onUpdate:modelValue": ($event) => _ctx.form.current_password = $event,
          ref: "current_password",
          autocomplete: "current-password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.current_password,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "New Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          ref: "password",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.password,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirm Password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.password_confirmation,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "current_password",
              value: "Current Password"
            }),
            vue.createVNode(_component_jet_input, {
              id: "current_password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.current_password,
              "onUpdate:modelValue": ($event) => _ctx.form.current_password = $event,
              ref: "current_password",
              autocomplete: "current-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.current_password,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "password",
              value: "New Password"
            }),
            vue.createVNode(_component_jet_input, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.password,
              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
              ref: "password",
              autocomplete: "new-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.password,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "password_confirmation",
              value: "Confirm Password"
            }),
            vue.createVNode(_component_jet_input, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.password_confirmation,
              "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
              autocomplete: "new-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.password_confirmation,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "mr-3"
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Saved. `);
            } else {
              return [
                vue.createTextVNode(" Saved. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                vue.createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_action_message, {
            on: _ctx.form.recentlySuccessful,
            class: "mr-3"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Saved. ")
            ]),
            _: 1
          }, 8, ["on"]),
          vue.createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var UpdatePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
var UpdatePasswordForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = vue.defineComponent({
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel,
    JetSecondaryButton
  },
  props: ["user"],
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        name: this.user.name,
        email: this.user.email,
        photo: null
      }),
      photoPreview: null
    };
  },
  methods: {
    updateProfileInformation() {
      if (this.$refs.photo) {
        this.form.photo = this.$refs.photo.files[0];
      }
      this.form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => this.clearPhotoFileInput()
      });
    },
    selectNewPhoto() {
      this.$refs.photo.click();
    },
    updatePhotoPreview() {
      const photo = this.$refs.photo.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e2) => {
        this.photoPreview = e2.target.result;
      };
      reader.readAsDataURL(photo);
    },
    deletePhoto() {
      this.$inertia.delete(route("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          this.photoPreview = null;
          this.clearPhotoFileInput();
        }
      });
    },
    clearPhotoFileInput() {
      var _a2;
      if ((_a2 = this.$refs.photo) == null ? void 0 : _a2.value) {
        this.$refs.photo.value = null;
      }
    }
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = vue.resolveComponent("jet-form-section");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_action_message = vue.resolveComponent("jet-action-message");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_form_section, vue.mergeProps({ onSubmitted: _ctx.updateProfileInformation }, _attrs), {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Profile Information `);
      } else {
        return [
          vue.createTextVNode(" Profile Information ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update your account&#39;s profile information and email address. `);
      } else {
        return [
          vue.createTextVNode(" Update your account's profile information and email address. ")
        ];
      }
    }),
    form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
          _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
            for: "photo",
            value: "Photo"
          }, null, _parent2, _scopeId));
          _push2(`<div class="mt-2" style="${serverRenderer.ssrRenderStyle(!_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><img${serverRenderer.ssrRenderAttr("src", _ctx.user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", _ctx.user.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}></div><div class="mt-2" style="${serverRenderer.ssrRenderStyle(_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${serverRenderer.ssrRenderStyle("background-image: url('" + _ctx.photoPreview + "');")}"${_scopeId}></span></div>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
            class: "mt-2 mr-2",
            type: "button",
            onClick: _ctx.selectNewPhoto
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Select A New Photo `);
              } else {
                return [
                  vue.createTextVNode(" Select A New Photo ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          if (_ctx.user.profile_photo_path) {
            _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
              type: "button",
              class: "mt-2",
              onClick: _ctx.deletePhoto
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Remove Photo `);
                } else {
                  return [
                    vue.createTextVNode(" Remove Photo ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.form.errors.photo,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Name"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.name,
          "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
          autocomplete: "name"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.name,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.email,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          _ctx.$page.props.jetstream.managesProfilePhotos ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "col-span-6 sm:col-span-4"
          }, [
            vue.createVNode("input", {
              type: "file",
              class: "hidden",
              ref: "photo",
              onChange: _ctx.updatePhotoPreview
            }, null, 40, ["onChange"]),
            vue.createVNode(_component_jet_label, {
              for: "photo",
              value: "Photo"
            }),
            vue.withDirectives(vue.createVNode("div", { class: "mt-2" }, [
              vue.createVNode("img", {
                src: _ctx.user.profile_photo_url,
                alt: _ctx.user.name,
                class: "rounded-full h-20 w-20 object-cover"
              }, null, 8, ["src", "alt"])
            ], 512), [
              [vue.vShow, !_ctx.photoPreview]
            ]),
            vue.withDirectives(vue.createVNode("div", { class: "mt-2" }, [
              vue.createVNode("span", {
                class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                style: "background-image: url('" + _ctx.photoPreview + "');"
              }, null, 4)
            ], 512), [
              [vue.vShow, _ctx.photoPreview]
            ]),
            vue.createVNode(_component_jet_secondary_button, {
              class: "mt-2 mr-2",
              type: "button",
              onClick: vue.withModifiers(_ctx.selectNewPhoto, ["prevent"])
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Select A New Photo ")
              ]),
              _: 1
            }, 8, ["onClick"]),
            _ctx.user.profile_photo_path ? (vue.openBlock(), vue.createBlock(_component_jet_secondary_button, {
              key: 0,
              type: "button",
              class: "mt-2",
              onClick: vue.withModifiers(_ctx.deletePhoto, ["prevent"])
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Remove Photo ")
              ]),
              _: 1
            }, 8, ["onClick"])) : vue.createCommentVNode("", true),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.photo,
              class: "mt-2"
            }, null, 8, ["message"])
          ])) : vue.createCommentVNode("", true),
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "name",
              value: "Name"
            }),
            vue.createVNode(_component_jet_input, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
              autocomplete: "name"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.name,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "email",
              value: "Email"
            }),
            vue.createVNode(_component_jet_input, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.email,
              "onUpdate:modelValue": ($event) => _ctx.form.email = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.email,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "mr-3"
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Saved. `);
            } else {
              return [
                vue.createTextVNode(" Saved. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                vue.createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_action_message, {
            on: _ctx.form.recentlySuccessful,
            class: "mr-3"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Saved. ")
            ]),
            _: 1
          }, 8, ["on"]),
          vue.createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var UpdateProfileInformationForm = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
var UpdateProfileInformationForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": UpdateProfileInformationForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = vue.defineComponent({
  props: ["sessions"],
  components: {
    AppLayout,
    DeleteUserForm,
    JetSectionBorder,
    LogoutOtherBrowserSessionsForm,
    TwoFactorAuthenticationForm,
    UpdatePasswordForm,
    UpdateProfileInformationForm
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = vue.resolveComponent("app-layout");
  const _component_update_profile_information_form = vue.resolveComponent("update-profile-information-form");
  const _component_jet_section_border = vue.resolveComponent("jet-section-border");
  const _component_update_password_form = vue.resolveComponent("update-password-form");
  const _component_two_factor_authentication_form = vue.resolveComponent("two-factor-authentication-form");
  const _component_logout_other_browser_sessions_form = vue.resolveComponent("logout-other-browser-sessions-form");
  const _component_delete_user_form = vue.resolveComponent("delete-user-form");
  _push(serverRenderer.ssrRenderComponent(_component_app_layout, vue.mergeProps({ title: "Profile" }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
        if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
          _push2(`<div class="mb-4"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_update_profile_information_form, {
            user: _ctx.$page.props.user
          }, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$page.props.jetstream.canUpdatePassword) {
          _push2(`<div class="mb-4"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_update_password_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
          _push2(`<div class="mb-4"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_two_factor_authentication_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(serverRenderer.ssrRenderComponent(_component_logout_other_browser_sessions_form, {
          sessions: _ctx.sessions,
          class: "mt-10 sm:mt-0 mb-4"
        }, null, _parent2, _scopeId));
        if (_ctx.$page.props.jetstream.hasAccountDeletionFeatures) {
          _push2(`<!--[-->`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_delete_user_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          vue.createVNode("div", null, [
            vue.createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
              _ctx.$page.props.jetstream.canUpdateProfileInformation ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mb-4"
              }, [
                vue.createVNode(_component_update_profile_information_form, {
                  user: _ctx.$page.props.user
                }, null, 8, ["user"]),
                vue.createVNode(_component_jet_section_border)
              ])) : vue.createCommentVNode("", true),
              _ctx.$page.props.jetstream.canUpdatePassword ? (vue.openBlock(), vue.createBlock("div", {
                key: 1,
                class: "mb-4"
              }, [
                vue.createVNode(_component_update_password_form, { class: "mt-10 sm:mt-0" }),
                vue.createVNode(_component_jet_section_border)
              ])) : vue.createCommentVNode("", true),
              _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (vue.openBlock(), vue.createBlock("div", {
                key: 2,
                class: "mb-4"
              }, [
                vue.createVNode(_component_two_factor_authentication_form, { class: "mt-10 sm:mt-0" }),
                vue.createVNode(_component_jet_section_border)
              ])) : vue.createCommentVNode("", true),
              vue.createVNode(_component_logout_other_browser_sessions_form, {
                sessions: _ctx.sessions,
                class: "mt-10 sm:mt-0 mb-4"
              }, null, 8, ["sessions"]),
              _ctx.$page.props.jetstream.hasAccountDeletionFeatures ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 3 }, [
                vue.createVNode(_component_jet_section_border),
                vue.createVNode(_component_delete_user_form, { class: "mt-10 sm:mt-0" })
              ], 64)) : vue.createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Show$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
var Show$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Show$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = vue.defineComponent({
  components: {
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel
  },
  data() {
    return {
      form: this.$inertia.form({
        name: ""
      })
    };
  },
  methods: {
    createTeam() {
      this.form.post(route("teams.store"), {
        errorBag: "createTeam",
        preserveScroll: true
      });
    }
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = vue.resolveComponent("jet-form-section");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_form_section, vue.mergeProps({ onSubmitted: _ctx.createTeam }, _attrs), {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Team Details `);
      } else {
        return [
          vue.createTextVNode(" Team Details ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create a new team to collaborate with others on projects. `);
      } else {
        return [
          vue.createTextVNode(" Create a new team to collaborate with others on projects. ")
        ];
      }
    }),
    form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, { value: "Team Owner" }, null, _parent2, _scopeId));
        _push2(`<div class="flex items-center mt-2"${_scopeId}><img class="object-cover w-12 h-12 rounded-full"${serverRenderer.ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}><div class="ml-4 leading-tight"${_scopeId}><div${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="text-sm text-gray-700"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Team Name"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          class: "block w-full mt-1",
          modelValue: _ctx.form.name,
          "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.name,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue.createVNode("div", { class: "col-span-6" }, [
            vue.createVNode(_component_jet_label, { value: "Team Owner" }),
            vue.createVNode("div", { class: "flex items-center mt-2" }, [
              vue.createVNode("img", {
                class: "object-cover w-12 h-12 rounded-full",
                src: _ctx.$page.props.user.profile_photo_url,
                alt: _ctx.$page.props.user.name
              }, null, 8, ["src", "alt"]),
              vue.createVNode("div", { class: "ml-4 leading-tight" }, [
                vue.createVNode("div", null, vue.toDisplayString(_ctx.$page.props.user.name), 1),
                vue.createVNode("div", { class: "text-sm text-gray-700" }, vue.toDisplayString(_ctx.$page.props.user.email), 1)
              ])
            ])
          ]),
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "name",
              value: "Team Name"
            }),
            vue.createVNode(_component_jet_input, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
              autofocus: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.name,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Create `);
            } else {
              return [
                vue.createTextVNode(" Create ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Create ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/CreateTeamForm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var CreateTeamForm = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
var CreateTeamForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": CreateTeamForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = vue.defineComponent({
  components: {
    AppLayout,
    CreateTeamForm
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = vue.resolveComponent("app-layout");
  const _component_create_team_form = vue.resolveComponent("create-team-form");
  _push(serverRenderer.ssrRenderComponent(_component_app_layout, vue.mergeProps({ title: "Create Team" }, _attrs), {
    header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Create Team </h2>`);
      } else {
        return [
          vue.createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Create Team ")
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_create_team_form, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          vue.createVNode("div", null, [
            vue.createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
              vue.createVNode(_component_create_team_form)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Create.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Create = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
var Create$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = vue.defineComponent({
  props: ["team"],
  components: {
    JetActionSection,
    JetConfirmationModal,
    JetDangerButton,
    JetSecondaryButton
  },
  data() {
    return {
      confirmingTeamDeletion: false,
      deleting: false,
      form: this.$inertia.form()
    };
  },
  methods: {
    confirmTeamDeletion() {
      this.confirmingTeamDeletion = true;
    },
    deleteTeam() {
      this.form.delete(route("teams.destroy", this.team), {
        errorBag: "deleteTeam"
      });
    }
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = vue.resolveComponent("jet-action-section");
  const _component_jet_danger_button = vue.resolveComponent("jet-danger-button");
  const _component_jet_confirmation_modal = vue.resolveComponent("jet-confirmation-modal");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete Team `);
      } else {
        return [
          vue.createTextVNode(" Delete Team ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Permanently delete this team. `);
      } else {
        return [
          vue.createTextVNode(" Permanently delete this team. ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_danger_button, { onClick: _ctx.confirmTeamDeletion }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete Team `);
            } else {
              return [
                vue.createTextVNode(" Delete Team ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_confirmation_modal, {
          show: _ctx.confirmingTeamDeletion,
          onClose: ($event) => _ctx.confirmingTeamDeletion = false
        }, {
          title: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete Team `);
            } else {
              return [
                vue.createTextVNode(" Delete Team ")
              ];
            }
          }),
          content: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. `);
            } else {
              return [
                vue.createTextVNode(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")
              ];
            }
          }),
          footer: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
                onClick: ($event) => _ctx.confirmingTeamDeletion = false
              }, {
                default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cancel `);
                  } else {
                    return [
                      vue.createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(serverRenderer.ssrRenderComponent(_component_jet_danger_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.deleteTeam,
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Delete Team `);
                  } else {
                    return [
                      vue.createTextVNode(" Delete Team ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                vue.createVNode(_component_jet_secondary_button, {
                  onClick: ($event) => _ctx.confirmingTeamDeletion = false
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_jet_danger_button, {
                  class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                  onClick: _ctx.deleteTeam,
                  disabled: _ctx.form.processing
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Delete Team ")
                  ]),
                  _: 1
                }, 8, ["onClick", "class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. "),
          vue.createVNode("div", { class: "mt-5" }, [
            vue.createVNode(_component_jet_danger_button, { onClick: _ctx.confirmTeamDeletion }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Delete Team ")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          vue.createVNode(_component_jet_confirmation_modal, {
            show: _ctx.confirmingTeamDeletion,
            onClose: ($event) => _ctx.confirmingTeamDeletion = false
          }, {
            title: vue.withCtx(() => [
              vue.createTextVNode(" Delete Team ")
            ]),
            content: vue.withCtx(() => [
              vue.createTextVNode(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")
            ]),
            footer: vue.withCtx(() => [
              vue.createVNode(_component_jet_secondary_button, {
                onClick: ($event) => _ctx.confirmingTeamDeletion = false
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_jet_danger_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.deleteTeam,
                disabled: _ctx.form.processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Delete Team ")
                ]),
                _: 1
              }, 8, ["onClick", "class", "disabled"])
            ]),
            _: 1
          }, 8, ["show", "onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/DeleteTeamForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var DeleteTeamForm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
var DeleteTeamForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": DeleteTeamForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = vue.defineComponent({
  components: {
    JetActionMessage,
    JetActionSection,
    JetButton,
    JetConfirmationModal,
    JetDangerButton,
    JetDialogModal,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel,
    JetSecondaryButton,
    JetSectionBorder
  },
  props: [
    "team",
    "availableRoles",
    "userPermissions"
  ],
  data() {
    return {
      addTeamMemberForm: this.$inertia.form({
        email: "",
        role: null
      }),
      updateRoleForm: this.$inertia.form({
        role: null
      }),
      leaveTeamForm: this.$inertia.form(),
      removeTeamMemberForm: this.$inertia.form(),
      currentlyManagingRole: false,
      managingRoleFor: null,
      confirmingLeavingTeam: false,
      teamMemberBeingRemoved: null
    };
  },
  methods: {
    addTeamMember() {
      this.addTeamMemberForm.post(route("team-members.store", this.team), {
        errorBag: "addTeamMember",
        preserveScroll: true,
        onSuccess: () => this.addTeamMemberForm.reset()
      });
    },
    cancelTeamInvitation(invitation) {
      this.$inertia.delete(route("team-invitations.destroy", invitation), {
        preserveScroll: true
      });
    },
    manageRole(teamMember) {
      this.managingRoleFor = teamMember;
      this.updateRoleForm.role = teamMember.membership.role;
      this.currentlyManagingRole = true;
    },
    updateRole() {
      this.updateRoleForm.put(route("team-members.update", [this.team, this.managingRoleFor]), {
        preserveScroll: true,
        onSuccess: () => this.currentlyManagingRole = false
      });
    },
    confirmLeavingTeam() {
      this.confirmingLeavingTeam = true;
    },
    leaveTeam() {
      this.leaveTeamForm.delete(route("team-members.destroy", [this.team, this.$page.props.user]));
    },
    confirmTeamMemberRemoval(teamMember) {
      this.teamMemberBeingRemoved = teamMember;
    },
    removeTeamMember() {
      this.removeTeamMemberForm.delete(route("team-members.destroy", [this.team, this.teamMemberBeingRemoved]), {
        errorBag: "removeTeamMember",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => this.teamMemberBeingRemoved = null
      });
    },
    displayableRole(role) {
      return this.availableRoles.find((r2) => r2.key === role).name;
    }
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_section_border = vue.resolveComponent("jet-section-border");
  const _component_jet_form_section = vue.resolveComponent("jet-form-section");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_action_message = vue.resolveComponent("jet-action-message");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_action_section = vue.resolveComponent("jet-action-section");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_confirmation_modal = vue.resolveComponent("jet-confirmation-modal");
  const _component_jet_danger_button = vue.resolveComponent("jet-danger-button");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  if (_ctx.userPermissions.canAddTeamMembers) {
    _push(`<div>`);
    _push(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent));
    _push(serverRenderer.ssrRenderComponent(_component_jet_form_section, { onSubmitted: _ctx.addTeamMember }, {
      title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Add Team Member `);
        } else {
          return [
            vue.createTextVNode(" Add Team Member ")
          ];
        }
      }),
      description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Add a new team member to your team, allowing them to collaborate with you. `);
        } else {
          return [
            vue.createTextVNode(" Add a new team member to your team, allowing them to collaborate with you. ")
          ];
        }
      }),
      form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="col-span-6"${_scopeId}><div class="max-w-xl text-sm text-gray-600"${_scopeId}> Please provide the email address of the person you would like to add to this team. </div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
            for: "email",
            value: "Email"
          }, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
            id: "email",
            type: "email",
            class: "mt-1 block w-full",
            modelValue: _ctx.addTeamMemberForm.email,
            "onUpdate:modelValue": ($event) => _ctx.addTeamMemberForm.email = $event
          }, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.addTeamMemberForm.errors.email,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
          if (_ctx.availableRoles.length > 0) {
            _push2(`<div class="col-span-6 lg:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
              for: "roles",
              value: "Role"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
              message: _ctx.addTeamMemberForm.errors.role,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(_ctx.availableRoles, (role, i2) => {
              _push2(`<button type="button" class="${serverRenderer.ssrRenderClass([{ "border-t border-gray-200 rounded-t-none": i2 > 0, "rounded-b-none": i2 != Object.keys(_ctx.availableRoles).length - 1 }, "relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"])}"${_scopeId}><div class="${serverRenderer.ssrRenderClass({ "opacity-50": _ctx.addTeamMemberForm.role && _ctx.addTeamMemberForm.role != role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${serverRenderer.ssrRenderClass([{ "font-semibold": _ctx.addTeamMemberForm.role == role.key }, "text-sm text-gray-600"])}"${_scopeId}>${serverRenderer.ssrInterpolate(role.name)}</div>`);
              if (_ctx.addTeamMemberForm.role == role.key) {
                _push2(`<svg class="ml-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mt-2 text-xs text-gray-600 text-left"${_scopeId}>${serverRenderer.ssrInterpolate(role.description)}</div></div></button>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            vue.createVNode("div", { class: "col-span-6" }, [
              vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Please provide the email address of the person you would like to add to this team. ")
            ]),
            vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
              vue.createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              vue.createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.addTeamMemberForm.email,
                "onUpdate:modelValue": ($event) => _ctx.addTeamMemberForm.email = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              vue.createVNode(_component_jet_input_error, {
                message: _ctx.addTeamMemberForm.errors.email,
                class: "mt-2"
              }, null, 8, ["message"])
            ]),
            _ctx.availableRoles.length > 0 ? (vue.openBlock(), vue.createBlock("div", {
              key: 0,
              class: "col-span-6 lg:col-span-4"
            }, [
              vue.createVNode(_component_jet_label, {
                for: "roles",
                value: "Role"
              }),
              vue.createVNode(_component_jet_input_error, {
                message: _ctx.addTeamMemberForm.errors.role,
                class: "mt-2"
              }, null, 8, ["message"]),
              vue.createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.availableRoles, (role, i2) => {
                  return vue.openBlock(), vue.createBlock("button", {
                    type: "button",
                    class: ["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200", { "border-t border-gray-200 rounded-t-none": i2 > 0, "rounded-b-none": i2 != Object.keys(_ctx.availableRoles).length - 1 }],
                    onClick: ($event) => _ctx.addTeamMemberForm.role = role.key,
                    key: role.key
                  }, [
                    vue.createVNode("div", {
                      class: { "opacity-50": _ctx.addTeamMemberForm.role && _ctx.addTeamMemberForm.role != role.key }
                    }, [
                      vue.createVNode("div", { class: "flex items-center" }, [
                        vue.createVNode("div", {
                          class: ["text-sm text-gray-600", { "font-semibold": _ctx.addTeamMemberForm.role == role.key }]
                        }, vue.toDisplayString(role.name), 3),
                        _ctx.addTeamMemberForm.role == role.key ? (vue.openBlock(), vue.createBlock("svg", {
                          key: 0,
                          class: "ml-2 h-5 w-5 text-green-400",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          vue.createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                        ])) : vue.createCommentVNode("", true)
                      ]),
                      vue.createVNode("div", { class: "mt-2 text-xs text-gray-600 text-left" }, vue.toDisplayString(role.description), 1)
                    ], 2)
                  ], 10, ["onClick"]);
                }), 128))
              ])
            ])) : vue.createCommentVNode("", true)
          ];
        }
      }),
      actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.ssrRenderComponent(_component_jet_action_message, {
            on: _ctx.addTeamMemberForm.recentlySuccessful,
            class: "mr-3"
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Added. `);
              } else {
                return [
                  vue.createTextVNode(" Added. ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
            class: { "opacity-25": _ctx.addTeamMemberForm.processing },
            disabled: _ctx.addTeamMemberForm.processing
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Add `);
              } else {
                return [
                  vue.createTextVNode(" Add ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            vue.createVNode(_component_jet_action_message, {
              on: _ctx.addTeamMemberForm.recentlySuccessful,
              class: "mr-3"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Added. ")
              ]),
              _: 1
            }, 8, ["on"]),
            vue.createVNode(_component_jet_button, {
              class: { "opacity-25": _ctx.addTeamMemberForm.processing },
              disabled: _ctx.addTeamMemberForm.processing
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Add ")
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.team.team_invitations.length > 0 && _ctx.userPermissions.canAddTeamMembers) {
    _push(`<div>`);
    _push(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent));
    _push(serverRenderer.ssrRenderComponent(_component_jet_action_section, { class: "mt-10 sm:mt-0" }, {
      title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Pending Team Invitations `);
        } else {
          return [
            vue.createTextVNode(" Pending Team Invitations ")
          ];
        }
      }),
      description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. `);
        } else {
          return [
            vue.createTextVNode(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")
          ];
        }
      }),
      content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
          serverRenderer.ssrRenderList(_ctx.team.team_invitations, (invitation) => {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(invitation.email)}</div><div class="flex items-center"${_scopeId}>`);
            if (_ctx.userPermissions.canRemoveTeamMembers) {
              _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500 focus:outline-none"${_scopeId}> Cancel </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            vue.createVNode("div", { class: "space-y-6" }, [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.team.team_invitations, (invitation) => {
                return vue.openBlock(), vue.createBlock("div", {
                  class: "flex items-center justify-between",
                  key: invitation.id
                }, [
                  vue.createVNode("div", { class: "text-gray-600" }, vue.toDisplayString(invitation.email), 1),
                  vue.createVNode("div", { class: "flex items-center" }, [
                    _ctx.userPermissions.canRemoveTeamMembers ? (vue.openBlock(), vue.createBlock("button", {
                      key: 0,
                      class: "cursor-pointer ml-6 text-sm text-red-500 focus:outline-none",
                      onClick: ($event) => _ctx.cancelTeamInvitation(invitation)
                    }, " Cancel ", 8, ["onClick"])) : vue.createCommentVNode("", true)
                  ])
                ]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.team.users.length > 0) {
    _push(`<div>`);
    _push(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent));
    _push(serverRenderer.ssrRenderComponent(_component_jet_action_section, { class: "mt-10 sm:mt-0" }, {
      title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Team Members `);
        } else {
          return [
            vue.createTextVNode(" Team Members ")
          ];
        }
      }),
      description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` All of the people that are part of this team. `);
        } else {
          return [
            vue.createTextVNode(" All of the people that are part of this team. ")
          ];
        }
      }),
      content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
          serverRenderer.ssrRenderList(_ctx.team.users, (user) => {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><img class="w-8 h-8 rounded-full"${serverRenderer.ssrRenderAttr("src", user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", user.name)}${_scopeId}><div class="ml-4"${_scopeId}>${serverRenderer.ssrInterpolate(user.name)}</div></div><div class="flex items-center"${_scopeId}>`);
            if (_ctx.userPermissions.canAddTeamMembers && _ctx.availableRoles.length) {
              _push2(`<button class="ml-2 text-sm text-gray-400 underline"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.displayableRole(user.membership.role))}</button>`);
            } else if (_ctx.availableRoles.length) {
              _push2(`<div class="ml-2 text-sm text-gray-400"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.displayableRole(user.membership.role))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.user.id === user.id) {
              _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Leave </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.userPermissions.canRemoveTeamMembers) {
              _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Remove </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            vue.createVNode("div", { class: "space-y-6" }, [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.team.users, (user) => {
                return vue.openBlock(), vue.createBlock("div", {
                  class: "flex items-center justify-between",
                  key: user.id
                }, [
                  vue.createVNode("div", { class: "flex items-center" }, [
                    vue.createVNode("img", {
                      class: "w-8 h-8 rounded-full",
                      src: user.profile_photo_url,
                      alt: user.name
                    }, null, 8, ["src", "alt"]),
                    vue.createVNode("div", { class: "ml-4" }, vue.toDisplayString(user.name), 1)
                  ]),
                  vue.createVNode("div", { class: "flex items-center" }, [
                    _ctx.userPermissions.canAddTeamMembers && _ctx.availableRoles.length ? (vue.openBlock(), vue.createBlock("button", {
                      key: 0,
                      class: "ml-2 text-sm text-gray-400 underline",
                      onClick: ($event) => _ctx.manageRole(user)
                    }, vue.toDisplayString(_ctx.displayableRole(user.membership.role)), 9, ["onClick"])) : _ctx.availableRoles.length ? (vue.openBlock(), vue.createBlock("div", {
                      key: 1,
                      class: "ml-2 text-sm text-gray-400"
                    }, vue.toDisplayString(_ctx.displayableRole(user.membership.role)), 1)) : vue.createCommentVNode("", true),
                    _ctx.$page.props.user.id === user.id ? (vue.openBlock(), vue.createBlock("button", {
                      key: 2,
                      class: "cursor-pointer ml-6 text-sm text-red-500",
                      onClick: _ctx.confirmLeavingTeam
                    }, " Leave ", 8, ["onClick"])) : vue.createCommentVNode("", true),
                    _ctx.userPermissions.canRemoveTeamMembers ? (vue.openBlock(), vue.createBlock("button", {
                      key: 3,
                      class: "cursor-pointer ml-6 text-sm text-red-500",
                      onClick: ($event) => _ctx.confirmTeamMemberRemoval(user)
                    }, " Remove ", 8, ["onClick"])) : vue.createCommentVNode("", true)
                  ])
                ]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(serverRenderer.ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.currentlyManagingRole,
    onClose: ($event) => _ctx.currentlyManagingRole = false
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Manage Role `);
      } else {
        return [
          vue.createTextVNode(" Manage Role ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.managingRoleFor) {
          _push2(`<div${_scopeId}><div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
          serverRenderer.ssrRenderList(_ctx.availableRoles, (role, i2) => {
            _push2(`<button type="button" class="${serverRenderer.ssrRenderClass([{ "border-t border-gray-200 rounded-t-none": i2 > 0, "rounded-b-none": i2 !== Object.keys(_ctx.availableRoles).length - 1 }, "relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"])}"${_scopeId}><div class="${serverRenderer.ssrRenderClass({ "opacity-50": _ctx.updateRoleForm.role && _ctx.updateRoleForm.role !== role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${serverRenderer.ssrRenderClass([{ "font-semibold": _ctx.updateRoleForm.role === role.key }, "text-sm text-gray-600"])}"${_scopeId}>${serverRenderer.ssrInterpolate(role.name)}</div>`);
            if (_ctx.updateRoleForm.role === role.key) {
              _push2(`<svg class="ml-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-2 text-xs text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(role.description)}</div></div></button>`);
          });
          _push2(`<!--]--></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.managingRoleFor ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
            vue.createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.availableRoles, (role, i2) => {
                return vue.openBlock(), vue.createBlock("button", {
                  type: "button",
                  class: ["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200", { "border-t border-gray-200 rounded-t-none": i2 > 0, "rounded-b-none": i2 !== Object.keys(_ctx.availableRoles).length - 1 }],
                  onClick: ($event) => _ctx.updateRoleForm.role = role.key,
                  key: role.key
                }, [
                  vue.createVNode("div", {
                    class: { "opacity-50": _ctx.updateRoleForm.role && _ctx.updateRoleForm.role !== role.key }
                  }, [
                    vue.createVNode("div", { class: "flex items-center" }, [
                      vue.createVNode("div", {
                        class: ["text-sm text-gray-600", { "font-semibold": _ctx.updateRoleForm.role === role.key }]
                      }, vue.toDisplayString(role.name), 3),
                      _ctx.updateRoleForm.role === role.key ? (vue.openBlock(), vue.createBlock("svg", {
                        key: 0,
                        class: "ml-2 h-5 w-5 text-green-400",
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        vue.createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                      ])) : vue.createCommentVNode("", true)
                    ]),
                    vue.createVNode("div", { class: "mt-2 text-xs text-gray-600" }, vue.toDisplayString(role.description), 1)
                  ], 2)
                ], 10, ["onClick"]);
              }), 128))
            ])
          ])) : vue.createCommentVNode("", true)
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.currentlyManagingRole = false
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                vue.createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
          class: ["ml-3", { "opacity-25": _ctx.updateRoleForm.processing }],
          onClick: _ctx.updateRole,
          disabled: _ctx.updateRoleForm.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                vue.createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.currentlyManagingRole = false
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          vue.createVNode(_component_jet_button, {
            class: ["ml-3", { "opacity-25": _ctx.updateRoleForm.processing }],
            onClick: _ctx.updateRole,
            disabled: _ctx.updateRoleForm.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_confirmation_modal, {
    show: _ctx.confirmingLeavingTeam,
    onClose: ($event) => _ctx.confirmingLeavingTeam = false
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Leave Team `);
      } else {
        return [
          vue.createTextVNode(" Leave Team ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Are you sure you would like to leave this team? `);
      } else {
        return [
          vue.createTextVNode(" Are you sure you would like to leave this team? ")
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.confirmingLeavingTeam = false
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                vue.createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_danger_button, {
          class: ["ml-3", { "opacity-25": _ctx.leaveTeamForm.processing }],
          onClick: _ctx.leaveTeam,
          disabled: _ctx.leaveTeamForm.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Leave `);
            } else {
              return [
                vue.createTextVNode(" Leave ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.confirmingLeavingTeam = false
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          vue.createVNode(_component_jet_danger_button, {
            class: ["ml-3", { "opacity-25": _ctx.leaveTeamForm.processing }],
            onClick: _ctx.leaveTeam,
            disabled: _ctx.leaveTeamForm.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Leave ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_jet_confirmation_modal, {
    show: _ctx.teamMemberBeingRemoved,
    onClose: ($event) => _ctx.teamMemberBeingRemoved = null
  }, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Remove Team Member `);
      } else {
        return [
          vue.createTextVNode(" Remove Team Member ")
        ];
      }
    }),
    content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Are you sure you would like to remove this person from the team? `);
      } else {
        return [
          vue.createTextVNode(" Are you sure you would like to remove this person from the team? ")
        ];
      }
    }),
    footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.teamMemberBeingRemoved = null
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                vue.createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_danger_button, {
          class: ["ml-3", { "opacity-25": _ctx.removeTeamMemberForm.processing }],
          onClick: _ctx.removeTeamMember,
          disabled: _ctx.removeTeamMemberForm.processing
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Remove `);
            } else {
              return [
                vue.createTextVNode(" Remove ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.teamMemberBeingRemoved = null
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          vue.createVNode(_component_jet_danger_button, {
            class: ["ml-3", { "opacity-25": _ctx.removeTeamMemberForm.processing }],
            onClick: _ctx.removeTeamMember,
            disabled: _ctx.removeTeamMemberForm.processing
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Remove ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/TeamMemberManager.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var TeamMemberManager = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
var TeamMemberManager$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TeamMemberManager
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = vue.defineComponent({
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel
  },
  props: ["team", "permissions"],
  data() {
    return {
      form: this.$inertia.form({
        name: this.team.name
      })
    };
  },
  methods: {
    updateTeamName() {
      this.form.put(route("teams.update", this.team), {
        errorBag: "updateTeamName",
        preserveScroll: true
      });
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = vue.resolveComponent("jet-form-section");
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_action_message = vue.resolveComponent("jet-action-message");
  const _component_jet_button = vue.resolveComponent("jet-button");
  _push(serverRenderer.ssrRenderComponent(_component_jet_form_section, vue.mergeProps({ onSubmitted: _ctx.updateTeamName }, _attrs), vue.createSlots({
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Team Name `);
      } else {
        return [
          vue.createTextVNode(" Team Name ")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` The team&#39;s name and owner information. `);
      } else {
        return [
          vue.createTextVNode(" The team's name and owner information. ")
        ];
      }
    }),
    form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, { value: "Team Owner" }, null, _parent2, _scopeId));
        _push2(`<div class="flex items-center mt-2"${_scopeId}><img class="object-cover w-12 h-12 rounded-full"${serverRenderer.ssrRenderAttr("src", _ctx.team.owner.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", _ctx.team.owner.name)}${_scopeId}><div class="ml-4 leading-tight"${_scopeId}><div${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.team.owner.name)}</div><div class="text-sm text-gray-700"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.team.owner.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Team Name"
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          class: "block w-full mt-1",
          modelValue: _ctx.form.name,
          "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
          disabled: !_ctx.permissions.canUpdateTeam
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.name,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue.createVNode("div", { class: "col-span-6" }, [
            vue.createVNode(_component_jet_label, { value: "Team Owner" }),
            vue.createVNode("div", { class: "flex items-center mt-2" }, [
              vue.createVNode("img", {
                class: "object-cover w-12 h-12 rounded-full",
                src: _ctx.team.owner.profile_photo_url,
                alt: _ctx.team.owner.name
              }, null, 8, ["src", "alt"]),
              vue.createVNode("div", { class: "ml-4 leading-tight" }, [
                vue.createVNode("div", null, vue.toDisplayString(_ctx.team.owner.name), 1),
                vue.createVNode("div", { class: "text-sm text-gray-700" }, vue.toDisplayString(_ctx.team.owner.email), 1)
              ])
            ])
          ]),
          vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            vue.createVNode(_component_jet_label, {
              for: "name",
              value: "Team Name"
            }),
            vue.createVNode(_component_jet_input, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
              disabled: !_ctx.permissions.canUpdateTeam
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
            vue.createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.name,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    _: 2
  }, [
    _ctx.permissions.canUpdateTeam ? {
      name: "actions",
      fn: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.ssrRenderComponent(_component_jet_action_message, {
            on: _ctx.form.recentlySuccessful,
            class: "mr-3"
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Saved. `);
              } else {
                return [
                  vue.createTextVNode(" Saved. ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Save `);
              } else {
                return [
                  vue.createTextVNode(" Save ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            vue.createVNode(_component_jet_action_message, {
              on: _ctx.form.recentlySuccessful,
              class: "mr-3"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Saved. ")
              ]),
              _: 1
            }, 8, ["on"]),
            vue.createVNode(_component_jet_button, {
              class: { "opacity-25": _ctx.form.processing },
              disabled: _ctx.form.processing
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Save ")
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ];
        }
      })
    } : void 0
  ]), _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var UpdateTeamNameForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
var UpdateTeamNameForm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": UpdateTeamNameForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = vue.defineComponent({
  props: [
    "team",
    "availableRoles",
    "permissions"
  ],
  components: {
    AppLayout,
    DeleteTeamForm,
    JetSectionBorder,
    TeamMemberManager,
    UpdateTeamNameForm
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = vue.resolveComponent("app-layout");
  const _component_update_team_name_form = vue.resolveComponent("update-team-name-form");
  const _component_team_member_manager = vue.resolveComponent("team-member-manager");
  const _component_jet_section_border = vue.resolveComponent("jet-section-border");
  const _component_delete_team_form = vue.resolveComponent("delete-team-form");
  _push(serverRenderer.ssrRenderComponent(_component_app_layout, vue.mergeProps({ title: "Team Settings" }, _attrs), {
    header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Team Settings </h2>`);
      } else {
        return [
          vue.createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Team Settings ")
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_update_team_name_form, {
          team: _ctx.team,
          permissions: _ctx.permissions
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_team_member_manager, {
          class: "mt-10 sm:mt-0",
          team: _ctx.team,
          "available-roles": _ctx.availableRoles,
          "user-permissions": _ctx.permissions
        }, null, _parent2, _scopeId));
        if (_ctx.permissions.canDeleteTeam && !_ctx.team.personal_team) {
          _push2(`<!--[-->`);
          _push2(serverRenderer.ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_delete_team_form, {
            class: "mt-10 sm:mt-0",
            team: _ctx.team
          }, null, _parent2, _scopeId));
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          vue.createVNode("div", null, [
            vue.createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
              vue.createVNode(_component_update_team_name_form, {
                team: _ctx.team,
                permissions: _ctx.permissions
              }, null, 8, ["team", "permissions"]),
              vue.createVNode(_component_team_member_manager, {
                class: "mt-10 sm:mt-0",
                team: _ctx.team,
                "available-roles": _ctx.availableRoles,
                "user-permissions": _ctx.permissions
              }, null, 8, ["team", "available-roles", "user-permissions"]),
              _ctx.permissions.canDeleteTeam && !_ctx.team.personal_team ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                vue.createVNode(_component_jet_section_border),
                vue.createVNode(_component_delete_team_form, {
                  class: "mt-10 sm:mt-0",
                  team: _ctx.team
                }, null, 8, ["team"])
              ], 64)) : vue.createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Show.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Show = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
var Show$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Show
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = vue.defineComponent({
  mixins: [MixinVue],
  data() {
    return {
      form: this.$inertia.form({
        created_by: "",
        model_type: "",
        model_id: "",
        title: "",
        url: "",
        icon: "",
        description: "",
        type: "",
        privacy: "",
        image: null
      })
    };
  },
  methods: {
    create() {
      this.form = this.$inertia.form({
        created_by: "",
        model_type: "",
        model_id: "",
        title: "",
        url: "",
        icon: "",
        description: "",
        type: "",
        privacy: "",
        image: null
      });
      this.edit = false;
      this.createModal = true;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = vue.resolveComponent("app-layout");
  const _component_Header = vue.resolveComponent("Header");
  const _component_Bulk = vue.resolveComponent("Bulk");
  const _component_Filters = vue.resolveComponent("Filters");
  const _component_JetLabel = vue.resolveComponent("JetLabel");
  const _component_JetInput = vue.resolveComponent("JetInput");
  const _component_List = vue.resolveComponent("List", true);
  const _component_Pagination = vue.resolveComponent("Pagination");
  const _component_CreateModal = vue.resolveComponent("CreateModal");
  const _component_ViewModal = vue.resolveComponent("ViewModal");
  const _component_DeleteModal = vue.resolveComponent("DeleteModal");
  const _component_BulkModal = vue.resolveComponent("BulkModal");
  _push(serverRenderer.ssrRenderComponent(_component_app_layout, vue.mergeProps({
    title: _ctx.trans("user_notifications.title")
  }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-6 mx-auto"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Header, {
          canCreate: _ctx.$attrs.canCreate,
          title: _ctx.trans("user_notifications.title"),
          button: _ctx.trans("user_notifications.create"),
          onButtonAction: _ctx.create
        }, null, _parent2, _scopeId));
        _push2(`<div class="flex-1 w-full mx-autofilament-main-content"${_scopeId}><div class="filament-page filament-resources-list-records-page"${_scopeId}><div class="space-y-6"${_scopeId}><div class="filament-tables-component"${_scopeId}><div class="bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container"${_scopeId}><div class="flex items-center justify-between p-2 h-14"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Bulk, {
          bulk: _ctx.bulk,
          show: _ctx.showBluk,
          collection: _ctx.collection,
          onClose: ($event) => _ctx.showBluk = !_ctx.showBluk
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.$attrs.canDeleteAny) {
                _push3(`<button type="button" class="flex items-center w-full h-8 px-3 text-sm font-normal group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-danger-600 focus:bg-danger-700"${_scopeId2}><svg class="flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId2}></path></svg><span class="truncate"${_scopeId2}> Delete selected </span></button>`);
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                _ctx.$attrs.canDeleteAny ? (vue.openBlock(), vue.createBlock("button", {
                  key: 0,
                  type: "button",
                  class: "flex items-center w-full h-8 px-3 text-sm font-normal group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-danger-600 focus:bg-danger-700",
                  onClick: ($event) => _ctx.bulkAction("delete")
                }, [
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    })
                  ])),
                  vue.createVNode("span", { class: "truncate" }, " Delete selected ")
                ], 8, ["onClick"])) : vue.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_Filters, {
          showFilter: false,
          setSearch: _ctx.search,
          onGetSearch: _ctx.searchFilter,
          onReset: _ctx.resetFilter,
          onFilter: _ctx.filter
        }, {
          default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: "phone",
                value: "Phone"
              }, null, _parent3, _scopeId2));
              _push3(serverRenderer.ssrRenderComponent(_component_JetInput, {
                id: "phone",
                modelValue: _ctx.filters.phone,
                "onUpdate:modelValue": ($event) => _ctx.filters.phone = $event,
                onChange: ($event) => _ctx.filter("phone", _ctx.filters.phone),
                type: "text",
                class: "block w-full mt-1",
                autofocus: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                vue.createVNode(_component_JetLabel, {
                  for: "phone",
                  value: "Phone"
                }),
                vue.createVNode(_component_JetInput, {
                  id: "phone",
                  modelValue: _ctx.filters.phone,
                  "onUpdate:modelValue": ($event) => _ctx.filters.phone = $event,
                  onChange: ($event) => _ctx.filter("phone", _ctx.filters.phone),
                  type: "text",
                  class: "block w-full mt-1",
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="relative overflow-y-auto border-t"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_List, {
          canEdit: false,
          canDelete: false,
          canDeleteAny: false,
          canView: _ctx.$attrs.canView,
          canViewAny: _ctx.$attrs.canViewAny,
          onReload: _ctx.reloadList,
          onView: _ctx.viewItem,
          onEdit: _ctx.editItem,
          onDelete: _ctx.deleteItem,
          onAll: _ctx.bulkAll,
          rows: _ctx.rows,
          orderBy: _ctx.orderBy,
          collection: _ctx.collection,
          bulk: _ctx.bulk,
          url: _ctx.url,
          desc: _ctx.desc
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="p-2 border-t"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Pagination, {
          per_page: _ctx.per_page,
          collection: _ctx.collection,
          url: _ctx.url,
          onReload: _ctx.reloadList
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div></div></div></div><br${_scopeId}><br${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_CreateModal, {
          url: _ctx.url,
          title: _ctx.edit ? _ctx.trans("user_notifications.edit.title") : _ctx.trans("user_notifications.create.title"),
          show: _ctx.createModal,
          edit: _ctx.edit,
          errors: _ctx.errors,
          item: _ctx.form,
          rows: _ctx.rows,
          onClose: ($event) => _ctx.createModal = !_ctx.createModal,
          onSuccess: _ctx.success
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_ViewModal, {
          title: _ctx.trans("user_notifications.edit"),
          show: _ctx.viewModal,
          item: _ctx.form,
          rows: _ctx.rows,
          onClose: ($event) => _ctx.viewModal = !_ctx.viewModal
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_DeleteModal, {
          url: _ctx.url,
          title: _ctx.trans("user_notifications.delete"),
          show: _ctx.deleteModal,
          item: _ctx.form,
          onClose: ($event) => _ctx.deleteModal = !_ctx.deleteModal,
          onSuccess: _ctx.success
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_BulkModal, {
          url: _ctx.url,
          title: _ctx.trans("user_notifications.bulk"),
          action: _ctx.bulkActionTitle,
          bulk: _ctx.bulk,
          show: _ctx.bulkModal,
          onClose: ($event) => _ctx.bulkModal = !_ctx.bulkModal,
          onSuccess: _ctx.success
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode("div", { class: "px-6 mx-auto" }, [
            vue.createVNode(_component_Header, {
              canCreate: _ctx.$attrs.canCreate,
              title: _ctx.trans("user_notifications.title"),
              button: _ctx.trans("user_notifications.create"),
              onButtonAction: _ctx.create
            }, null, 8, ["canCreate", "title", "button", "onButtonAction"]),
            vue.createVNode("div", { class: "flex-1 w-full mx-autofilament-main-content" }, [
              vue.createVNode("div", { class: "filament-page filament-resources-list-records-page" }, [
                vue.createVNode("div", { class: "space-y-6" }, [
                  vue.createVNode("div", { class: "filament-tables-component" }, [
                    vue.createVNode("div", { class: "bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container" }, [
                      vue.createVNode("div", { class: "flex items-center justify-between p-2 h-14" }, [
                        vue.createVNode(_component_Bulk, {
                          bulk: _ctx.bulk,
                          show: _ctx.showBluk,
                          collection: _ctx.collection,
                          onClose: ($event) => _ctx.showBluk = !_ctx.showBluk
                        }, {
                          default: vue.withCtx(() => [
                            _ctx.$attrs.canDeleteAny ? (vue.openBlock(), vue.createBlock("button", {
                              key: 0,
                              type: "button",
                              class: "flex items-center w-full h-8 px-3 text-sm font-normal group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-danger-600 focus:bg-danger-700",
                              onClick: ($event) => _ctx.bulkAction("delete")
                            }, [
                              (vue.openBlock(), vue.createBlock("svg", {
                                class: "flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                "aria-hidden": "true"
                              }, [
                                vue.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                })
                              ])),
                              vue.createVNode("span", { class: "truncate" }, " Delete selected ")
                            ], 8, ["onClick"])) : vue.createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["bulk", "show", "collection", "onClose"]),
                        vue.createVNode(_component_Filters, {
                          showFilter: false,
                          setSearch: _ctx.search,
                          onGetSearch: _ctx.searchFilter,
                          onReset: _ctx.resetFilter,
                          onFilter: _ctx.filter
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_JetLabel, {
                              for: "phone",
                              value: "Phone"
                            }),
                            vue.createVNode(_component_JetInput, {
                              id: "phone",
                              modelValue: _ctx.filters.phone,
                              "onUpdate:modelValue": ($event) => _ctx.filters.phone = $event,
                              onChange: ($event) => _ctx.filter("phone", _ctx.filters.phone),
                              type: "text",
                              class: "block w-full mt-1",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 1
                        }, 8, ["setSearch", "onGetSearch", "onReset", "onFilter"])
                      ]),
                      vue.createVNode("div", { class: "relative overflow-y-auto border-t" }, [
                        vue.createVNode(_component_List, {
                          canEdit: false,
                          canDelete: false,
                          canDeleteAny: false,
                          canView: _ctx.$attrs.canView,
                          canViewAny: _ctx.$attrs.canViewAny,
                          onReload: _ctx.reloadList,
                          onView: _ctx.viewItem,
                          onEdit: _ctx.editItem,
                          onDelete: _ctx.deleteItem,
                          onAll: _ctx.bulkAll,
                          rows: _ctx.rows,
                          orderBy: _ctx.orderBy,
                          collection: _ctx.collection,
                          bulk: _ctx.bulk,
                          url: _ctx.url,
                          desc: _ctx.desc
                        }, null, 8, ["canView", "canViewAny", "onReload", "onView", "onEdit", "onDelete", "onAll", "rows", "orderBy", "collection", "bulk", "url", "desc"])
                      ]),
                      vue.createVNode("div", { class: "p-2 border-t" }, [
                        vue.createVNode(_component_Pagination, {
                          per_page: _ctx.per_page,
                          collection: _ctx.collection,
                          url: _ctx.url,
                          onReload: _ctx.reloadList
                        }, null, 8, ["per_page", "collection", "url", "onReload"])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          vue.createVNode("br"),
          vue.createVNode("br"),
          vue.createVNode(_component_CreateModal, {
            url: _ctx.url,
            title: _ctx.edit ? _ctx.trans("user_notifications.edit.title") : _ctx.trans("user_notifications.create.title"),
            show: _ctx.createModal,
            edit: _ctx.edit,
            errors: _ctx.errors,
            item: _ctx.form,
            rows: _ctx.rows,
            onClose: ($event) => _ctx.createModal = !_ctx.createModal,
            onSuccess: _ctx.success
          }, null, 8, ["url", "title", "show", "edit", "errors", "item", "rows", "onClose", "onSuccess"]),
          vue.createVNode(_component_ViewModal, {
            title: _ctx.trans("user_notifications.edit"),
            show: _ctx.viewModal,
            item: _ctx.form,
            rows: _ctx.rows,
            onClose: ($event) => _ctx.viewModal = !_ctx.viewModal
          }, null, 8, ["title", "show", "item", "rows", "onClose"]),
          vue.createVNode(_component_DeleteModal, {
            url: _ctx.url,
            title: _ctx.trans("user_notifications.delete"),
            show: _ctx.deleteModal,
            item: _ctx.form,
            onClose: ($event) => _ctx.deleteModal = !_ctx.deleteModal,
            onSuccess: _ctx.success
          }, null, 8, ["url", "title", "show", "item", "onClose", "onSuccess"]),
          vue.createVNode(_component_BulkModal, {
            url: _ctx.url,
            title: _ctx.trans("user_notifications.bulk"),
            action: _ctx.bulkActionTitle,
            bulk: _ctx.bulk,
            show: _ctx.bulkModal,
            onClose: ($event) => _ctx.bulkModal = !_ctx.bulkModal,
            onSuccess: _ctx.success
          }, null, 8, ["url", "title", "action", "bulk", "show", "onClose", "onSuccess"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserNotification/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var List = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var List$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": List
}, Symbol.toStringTag, { value: "Module" }));
