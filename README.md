# revealme.js
*Lightweight JavaScript email address obfuscation*

## Usage
1) Include revealme.js in your html

```html
<script type="text/javascript" src="revealme.js"></script>
```

2) Add email addresses to you HTML in a phoenitic form, and encapsulate them in the revealme class.

```html
<p>My email address <span class="revealme">jessie dot wongus at example hyphen domain dot com</span></p>
```

3) EMail address will be automatically converted to a link and obfuscated.

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
