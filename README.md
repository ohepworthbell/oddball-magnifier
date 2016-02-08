# Oddball Magnifier
A touch-friendly, light-weight image magnifier. Can be used on multiple images on a page, and is highly customisable. [ View demo ](http://ohepworthbell.github.io/projects/clothes-rack-carousel/)

![Screenshot of working Oddball Magnifier](http://wearegrowth.com/github/zoomer.jpg)



### How to use the Oddball Magnifier
To use the Oddball Magnifier, simply include any class-name on an image and call the script like so:
```
<img src="./example.jpg" class="your-class-name" />

...

<script src='./oddballMagnifier.min.js'></script>
<script>
$(document).ready(function() {
	$('.your-class-name').oddballMagnifier();
});
</script>
```

You can also designate a different magnified image from the main image (for example, a high-definition version of the image) like so:
```
<img src="./example.jpg" data-hdsrc="./example-hd.jpg" class="your-class-name" />
```

For more customisability, you can change the lens layout:
```
$('.your-class-name').oddballMagnifier({
	lens: 340,
	curve: 340,
	shadow: 0.1,
	spread: 30,
	zoom: 1920,
	border: 8,
	inset: false,
	borderColor: '255,255,255',
	shadowColor: '0,0,0'
});
```


### Documentation
* __lens__ - size of the magnifier (pixels)
* __curve__ - border-radius of the lends (pixels)
* __shadow__ - opacity of the drop-shadow of the magnifier (set from 0-1)
* __spread__ - size/spread of the drop-shadow (pixels)
* __zoom__ - size of the magnifier image (pixels)
* __border__ - border-width of the magnifier
* __inset__ - shadow/glow as inset (true or false)
* __borderColor__ - border color (rgb only - i.e. '255,255,255')
* __shadowColor__ - shadow color (rgb only - i.e. '0,0,0')


### To do
* Add more customisable shapes to the magnifier
* Possible pre-loading of HD images
* Transitions on lens to fade in and out
* Anything anyone else can think of/cares to add


### Dependencies
* jQuery
