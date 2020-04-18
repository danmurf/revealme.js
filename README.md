# revealme.js
*Lightweight JavaScript email address obfuscation*

[![Build Status](https://travis-ci.org/danmurf/revealme.js.svg?branch=master)](https://travis-ci.org/danmurf/revealme.js)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=danmurf/revealme.js)](https://dependabot.com)
- - -
Use revealme.js in your web page so you can include a link to your email address without having to actually write it out. If you're worried about getting spam because you'd like to put your email address on a publicly accessible page, this script is for you.

*Note: this script won't stop you getting spam, but it will make it much harder for automated scripts to harvest an email address from your pages.*

## Usage
1) Include revealme.js in your html

```html
<script type="text/javascript" src="revealme.js"></script>
```

2) Add email addresses to you HTML in a phonetic form, and encapsulate them in the revealme class.

```html
<p>My email address <span class="revealme">jessie dot wongus at example hyphen domain dot com</span></p>
```

3) Email addresses will be automatically converted to a link and obfuscated.

Example:
```
My email address is jessie.w...main.com (click to reveal)
```

Once the address has been clicked, the email address will be revealed with a properly formatted mailto link.

```
My email address is jessie.wongus@example-domain.com
```

## License
revealme.js is released under the MIT license.
