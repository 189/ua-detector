# ua-detector

A simple package to dectect mobile browser ventor and version(`detector.browser`), and also detect device operation system(`detector.os`).

Mostly I suggest you to detect feature instend of browser ventors or version. But sometimes, there is no other way, and not even good modern browsers provide good feature detection mechanisms.

[live demo](https://codesandbox.io/s/ua-detector-demo-kxlw0)

## Usage

It works like :

```
import detector, {isMac, isWin, isIphone, isAndroid...} from "ua-detector";

console.log(detector) // output: {"os":{"win":true,"result":"win"},"browser":{"chrome":true,"result":"chrome","version":"81.0.4044.138"}}

if(detector.os.android  && detector.os.version < 4){
	// do your stuff
}

if(detector.browser.chrome  && detector.browser.version > 10 ){
	// do your stuff
}


```

## Install

```
$ npm install ua-detector -D
// or
$ yarn add ua-detector

```

## API

#### detector.browser

```
import detector from "ua-detector";
console.log(detector.browser);
// output: { result : 'chrome', version:'56.0.29', chrome : true }

```

#### detector.os

```
import detector from "ua-detector";
console.log(detector.os);
// output : { result : 'iphone', version : '9.1', iphone : true }

```

#### And More

- isMac;

```
import {isMac} from "ua-detector";
console.log(isMac); // output true or false
```

- isWin

- isIphone

- isAndroid

- isIpad

- isIpod

- isWebos

- isWinPhone

- isKindle

- isBlackberry

- isBb10

- isPlaybook

- isChrome

- isFirefoxos

- isFirefox

- isSafari

- isGreatIE
  > same as isIE
- isWebview
