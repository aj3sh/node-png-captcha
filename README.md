# node-png-captcha

A simple node library for generating PNG captcha images.

## Installation

To install the png-captcha, you can use npm:

```bash
npm install png-captcha
```

## Usage

```js
import pngCaptcha from 'png-captcha'

const options = {
    size: 6, // Number of characters in the captcha text
    noise: 2, // Level of noise in the captcha image
    // Add more options as needed
}

const captcha = pngCaptcha.create(options)

// Captcha properties
console.log('Captcha Text:', captcha.text)
console.log('Captcha Width:', captcha.width)
console.log('Captcha Height:', captcha.height)

// Use as base64 image URL
const base64imageURL = `data:image/png;base64,${captcha.image.toString('base64')}`

// Save captcha to a PNG file
fs.writeFileSync('captcha.png', captcha.image)
```

### Options

-   `size`: Number of characters in the captcha text.
-   `noise`: Level of noise in the captcha image.
-   `background`: Background color the image.
-   `color`: Enable color in the image.

## Acknowledgements

This project uses svg-captcha and @resvg/resvg-js libraries.
