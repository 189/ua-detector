/**
 * A simple package attemp to detect mobile browser ventor and version.
 * Mostly please detect feature instend of vendor.
 *
 * It works like :
 *
 * if (detector.bowser.msie && detector.version <= 9) {
 * 	 do stuff
 * }
 *
 */
export type OSIndicator =
  | "android"
  | "osx"
  | "win"
  | "ipad"
  | "ipod"
  | "iphone"
  | "webos"
  | "wp"
  | "kindle"
  | "silk"
  | "blackberry"
  | "bb10"
  | "playbook";

export interface Matcher {
  match: () => null | RegExpMatchArray | boolean;
}
// https://github.com/Microsoft/TypeScript/issues/24220#issuecomment-502517104
// Construct a type with a set of properties K of type T
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };
export type OSFactory = Record<OSIndicator, Matcher>;
export type BrowserIndicator =
  | "chrome"
  | "firefox"
  | "firefoxos"
  | "msie"
  | "webview"
  | "safari";
export type BrowserFactory = Record<BrowserIndicator, Matcher>;
export interface Detector {
  os: {
    result?: OSIndicator;
    version?: string;
  } & Partial<Record<OSIndicator, true>>;
  browser: {
    result?: BrowserIndicator;
    version?: string;
  } & Partial<Record<BrowserIndicator, true>>;
}

const detector: Detector = {
    os: {},
    browser: {},
  },
  ua = navigator.userAgent,
  platform = navigator.platform;

/**
 * Inspired by zepto
 */

const os: OSFactory = {
  android: {
    match: function () {
      return ua.match(/(?:android);?[\s\/]+([\d.]+)?/i);
    },
  },

  osx: {
    match: function () {
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
      return ua.match(/\(macintosh\;\sintel\smac\sos\sx\s([\d_]+)/i);
    },
  },

  win: {
    match: function () {
      return platform.match(/win\d{2}|windows/i);
    },
  },

  ipad: {
    match: function () {
      return ua.match(/(?:ipad).*os\s([\d_]+)/i);
    },
  },

  ipod: {
    match: function () {
      return ua.match(/(?:ipod)(.*os\s([\d_]+))?/i);
    },
  },

  iphone: {
    match: function () {
      return !os.ipod.match() && ua.match(/(?:iphone\sos)\s([\d_]+)/i);
    },
  },

  webos: {
    match: function () {
      return ua.match(/(?:webos|hpwos)[\s\/]([\d.]+)/i);
    },
  },

  wp: {
    match: function () {
      return ua.match(/windows phone ([\d.]+)/i);
    },
  },

  kindle: {
    match: function () {
      return ua.match(/kindle\/([\d.]+)/i);
    },
  },

  silk: {
    match: function () {
      return ua.match(/silk\/([\d._]+)/i);
    },
  },

  blackberry: {
    match: function () {
      return ua.match(/(blackberry).*version\/([\d.]+)/i);
    },
  },

  bb10: {
    match: function () {
      return ua.match(/(bb10).*version\/([\d.]+)/i);
    },
  },

  playbook: {
    match: function () {
      return ua.match(/playbook/i);
    },
  },
};

const browser: BrowserFactory = {
  chrome: {
    match: function () {
      return ua.match(/chrome\/([\d.]+)/i) || ua.match(/crios\/([\d.]+)/i);
    },
  },
  firefox: {
    match: function () {
      return ua.match(/firefox\/([\d.]+)/i);
    },
  },
  firefoxos: {
    match: function () {
      return ua.match(/\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/i);
    },
  },
  msie: {
    match: function () {
      return (
        ua.match(/msie\s([\d.]+)/) ||
        ua.match(/trident\/[\d](?=[^\?]+).*rv:([0-9.].)/i)
      );
    },
  },
  webview: {
    match: function () {
      return (
        !browser.chrome.match() &&
        ua.match(/(iphone|ipod|ipad).*applewebkit(?!.*safari)/i)
      );
    },
  },
  safari: {
    match: function () {
      return (
        browser.webview.match.call(browser) ||
        ua.match(/version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^s]*(safari))/i)
      );
    },
  },
};

let p: OSIndicator, m: BrowserIndicator;

for (p in os) {
  if (os.hasOwnProperty(p)) {
    const match = os[p].match.call(os);
    if (match) {
      detector.os = detector.os || {};
      detector.os[p] = true;
      detector.os["result"] = p;
      detector.os["version"] = match?.[1]?.replace(/_/g, ".");
      break;
    }
  }
}

for (m in browser) {
  if (browser.hasOwnProperty(m)) {
    const match = browser[m].match.call(browser);
    if (match) {
      detector.browser = detector.browser || {};
      detector.browser[m] = true;
      detector.browser["result"] = m;
      detector.browser["version"] = match?.[1]?.replace(/_/g, ".");
      break;
    }
  }
}

export default detector;

// OS
export const isMac = !!detector.os.osx;
export const isWin = !!detector.os.win;
export const isIphone = !!detector.os.iphone;
export const isAndroid = !!detector.os.android;
export const isIpad = !!detector.os.ipad;
export const isIpod = !!detector.os.ipod;
export const isWebos = !!detector.os.webos;
export const isWinPhone = !!detector.os.wp;
export const isKindle = !!detector.os.kindle;
export const isBlackberry = !!detector.os.blackberry;
export const isBb10 = !!detector.os.bb10;
export const isPlaybook = !!detector.os.playbook;

// browser
export const isChrome = !!detector.browser.chrome;
export const isFirefoxos = !!detector.browser.firefoxos;
export const isFirefox = !!detector.browser.firefox;
export const isSafari = !!detector.browser.safari;
export const isGreatIE = !!detector.browser.msie;
export const isIE = isGreatIE;
export const isWebview = !!detector.browser.webview;
