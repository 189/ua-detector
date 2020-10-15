"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebview = exports.isIE = exports.isGreatIE = exports.isSafari = exports.isFirefox = exports.isFirefoxos = exports.isChrome = exports.isPlaybook = exports.isBb10 = exports.isBlackberry = exports.isKindle = exports.isWinPhone = exports.isWebos = exports.isIpod = exports.isIpad = exports.isAndroid = exports.isIphone = exports.isWin = exports.isMac = void 0;
const detector = {
    os: {},
    browser: {},
}, ua = navigator.userAgent, platform = navigator.platform;
/**
 * Inspired by zepto
 */
const os = {
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
const browser = {
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
            return (ua.match(/msie\s([\d.]+)/) ||
                ua.match(/trident\/[\d](?=[^\?]+).*rv:([0-9.].)/i));
        },
    },
    webview: {
        match: function () {
            return (!browser.chrome.match() &&
                ua.match(/(iphone|ipod|ipad).*applewebkit(?!.*safari)/i));
        },
    },
    safari: {
        match: function () {
            return (browser.webview.match.call(browser) ||
                ua.match(/version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^s]*(safari))/i));
        },
    },
};
let p, m;
for (p in os) {
    if (os.hasOwnProperty(p)) {
        const match = os[p].match.call(os);
        if (match) {
            detector.os = detector.os || {};
            detector.os[p] = true;
            detector.os["result"] = p;
            detector.os["version"] = (_a = match === null || match === void 0 ? void 0 : match[1]) === null || _a === void 0 ? void 0 : _a.replace(/_/g, ".");
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
            detector.browser["version"] = (_b = match === null || match === void 0 ? void 0 : match[1]) === null || _b === void 0 ? void 0 : _b.replace(/_/g, ".");
            break;
        }
    }
}
exports.default = detector;
// OS
exports.isMac = !!detector.os.osx;
exports.isWin = !!detector.os.win;
exports.isIphone = !!detector.os.iphone;
exports.isAndroid = !!detector.os.android;
exports.isIpad = !!detector.os.ipad;
exports.isIpod = !!detector.os.ipod;
exports.isWebos = !!detector.os.webos;
exports.isWinPhone = !!detector.os.wp;
exports.isKindle = !!detector.os.kindle;
exports.isBlackberry = !!detector.os.blackberry;
exports.isBb10 = !!detector.os.bb10;
exports.isPlaybook = !!detector.os.playbook;
// browser
exports.isChrome = !!detector.browser.chrome;
exports.isFirefoxos = !!detector.browser.firefoxos;
exports.isFirefox = !!detector.browser.firefox;
exports.isSafari = !!detector.browser.safari;
exports.isGreatIE = !!detector.browser.msie;
exports.isIE = exports.isGreatIE;
exports.isWebview = !!detector.browser.webview;
