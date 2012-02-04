# CSS Write-on Text Effect

I'm using -webkit-mask-image with a [sprite](https://github.com/tylergaw/css-write-on/blob/master/images/mask.png) that contains a frame for each partial path of the text. The text, "Write-on!" is in an h1 element but the mask applied to its parent element starts out at 100% transparent so nothing is shown below it. A CSS animation is applied to the containing element. Each step of the animation changes the -webkit-mask-image-position to advance to the next frame. The animation step percentages are placed close enough together that the interpolation between one frame and the next is not seen.

## Reference

* [Webkit mask image on MDN](https://developer.mozilla.org/en/CSS/-webkit-mask-image)
* [CSS Animations on MDN](https://developer.mozilla.org/en/CSS/CSS_animations)
* [classList on MDN](https://developer.mozilla.org/en/DOM/element.classList)