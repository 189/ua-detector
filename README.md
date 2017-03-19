# ua-detector
A simple package to dectect mobile browser ventor and version. Mostly I suggest you to detect feature instend of browser ventors or version. But sometimes, there is no other way, and not even good modern browsers provide good feature detection mechanisms.

## Usage
It works like :

```
var detector = require('ua-detector');

if(detector.os.android  && detector.os.version < 4){
	// do your stuff
}

if(detector.browser.chrome  && detector.browser.version > 10 ){
	// do your stuff
}


```

## Install
### In a browser
```
<script src='ua-detector.js'></script>
```
### Use npm
```
npm install ua-detector -D 
```

## API
#### detector.browser
```
	// output: { result : 'chrome', version:'56.0.29', chrome : true }
	console.log(detector.io); 
```
#### detector.os
```
	// output : { result : 'iphone', version : '9.1', iphone : true }
	console.log(detector.os);
```

