
/**
 * A simple package attemp to detect mobile browser ventor and version.
 * Mostly please detect feature instend of vendor.
 * 
 * It works like :
 * 
 * if (detector.bowser.msie && detector.version <= 9) {
 * 		// do stuff
 * }
 * 
 * kv.wang87@gmail.com
 * 229283287
 * 2017-03-19
 */

(function(context, name, factory){
	if(typeof module === 'object' && module.exports){
		module.exports = factory();
	}
	else if (typeof define === 'function'){
		if(define.cmd){
			define(factory);
		}
		else {
			define(name, factory);
		}
	}
	else {
		context[name] = factory();
	}
})(this, 'detector', function(){

	var detector = {}, ua = navigator.userAgent, platform = navigator.platform;

	/**
	 * Inspired by zepto
	 */
	
	var os = {
		android : {
			match : function(){
				return ua.match(/(?:android);?[\s\/]+([\d.]+)?/i);
			}
		},

		osx : {
			match : function(){
				// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
				return ua.match(/\(macintosh\;\sintel\smac\sos\sx\s([\d_]+)/i);
			}
		},

		win : {
			match : function(){
				return platform.match(/win\d{2}|windows/);
			}
		},

		ipad : {
			match : function(){
				return ua.match(/(?:ipad).*os\s([\d_]+)/i);
			}
		},
		
		ipod : {
			match : function(){
				return ua.match(/(?:ipod)(.*os\s([\d_]+))?/i);
			}
		},
		
		iphone : {
			match : function(){
				return !this.ipod.match() && ua.match(/(?:iphone\sos)\s([\d_]+)/i);
			}
		},
		
		webos : {
			match : function(){
				return ua.match(/(?:webos|hpwos)[\s\/]([\d.]+)/i);
			}
		},
		
		wp : {
			match : function(){
				return ua.match(/windows phone ([\d.]+)/i);
			}
		},
		
		touchpad : {
			match : function(){
				return ua.match(this.webos.match() && ua.match(/touchpad ([\d.]+)/i))
			},
		},
		
		kindle : {
			match : function(){
				return ua.match(/kindle\/([\d.]+)/i);
			}
		},
		
		silk : {
			match : function(){
				return ua.match(/silk\/([\d._]+)/i);
			}
		},
		
		blackberry : {
			match : function(){
				return ua.match(/(blackberry).*version\/([\d.]+)/i);
			}
		},
		
		bb10 : {
			match : function(){
				return ua.match(/(bb10).*version\/([\d.]+)/i);
			}
		},

		playbook : {
			match : function(){
				return ua.match(/playbook/i);
			}
		}
	};

	var browser = {
		chrome : {
			match : function(){
				return ua.match(/chrome\/([\d.]+)/i) || ua.match(/crios\/([\d.]+)/i);
			}
		},
		firefox : {
			match : function(){
				return ua.match(/firefox\/([\d.]+)/i);
			}
		},
		firefoxos : {
			match : function(){
				return ua.match(/\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/i);
			}
		},
		msie : {
			match : function(){
				return ua.match(/msie\s([\d.]+)/) || ua.match(/trident\/[\d](?=[^\?]+).*rv:([0-9.].)/i);
			}
		},
		webview : {
			match : function(){
				return !this.chrome.match() && ua.match(/(iphone|ipod|ipad).*applewebkit(?!.*safari)/i);
			}
		},
		safari : {
			match : function(){
				return this.webview.match.call(browser) || ua.match(/version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^s]*(safari))/i);
			}
		}		
	};

	var core = {
		webkit : ua.match(/webkit[\/]{0,1}([\d.]+)/i)
	};


	for( var p in os ) {
		if(os.hasOwnProperty(p)){
			var match = os[p].match.call(os);
			if(match){
				detector.os = detector.os || {};
				detector.os[p] = true;
				detector.os['result'] = p;
				detector.os['version'] = match[1].replace(/_/g, '.');
				break;
			}
		}
	}

	for(var m in browser){
		if(browser.hasOwnProperty(m)){
			var match = browser[m].match.call(browser);
			if(match){
				detector.browser = detector.browser || {};
				detector.browser[m] = true;
				detector.browser['result'] = m;
				detector.browser['version'] = match[1].replace(/_/g, '.');
				break;
			}
		}
	}

	return detector;
})





