# Oddball Magnifier
A touch-friendly, light-weight image magnifier. Can be used on multiple images on a page, and is highly customisable.

![Screenshot of working Oddball Magnifier](http://wearegrowth.com/zoomer.jpg)



### How to use the Oddball Magnifier
To designate an image to be magnified:
```
<img src="example.jpg" class="your-class-name" />
```

Make sure you have jQuery called, thing simply add 
```
<script src='./oddballMagnifier.min.js'></script>
```

To run the script:
```
<script>
$('.your-class-name').oddballMagnifier();
</script>
```

You can also designate a different magnified image (for example, a high-definition version of the image) like so:
```
<img src="example.jpg" data-hdsrc="example-hd.jpg" class="your-class-name" />
```

For more customisability, you can change the lens layout:
```
$('.your-class-name').oddballMagnifier({
	lens: 340,
	curve: 340,
	shadow: 0.1,
	spread: 30,
	zoom: 1920,
	border: 8
});
```


### Documentation
* lens -- Sets the size of the magnifier (pixels)
* curve -- sets the border-radius of the lends (pixels)
* shadow -- Sets the opacity of the drop-shadow of the magnifier (set from 0-1)
* spread -- Sets the size/spread of the drop-shadow (pixels)
* zoom -- Sets the size of the magnifier image (pixels)
* border -- Sets the border-width of the magnifier


### To do
* Add more customisable shapes to the magnifier
* Add ability to change border and shadow colours
* Anything anyone else can think of/cares to add
* Possible pre-loading of HD images
* Transitions on lens to fade in and out


### Dependencies
* jQuery
