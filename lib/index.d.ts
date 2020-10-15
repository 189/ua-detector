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
export declare type OSIndicator = "android" | "osx" | "win" | "ipad" | "ipod" | "iphone" | "webos" | "wp" | "kindle" | "silk" | "blackberry" | "bb10" | "playbook";
export interface Matcher {
    match: () => null | RegExpMatchArray | boolean;
}
export declare type OSFactory = Record<OSIndicator, Matcher>;
export declare type BrowserIndicator = "chrome" | "firefox" | "firefoxos" | "msie" | "webview" | "safari";
export declare type BrowserFactory = Record<BrowserIndicator, Matcher>;
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
declare const detector: Detector;
export default detector;
export declare const isMac: boolean;
export declare const isWin: boolean;
export declare const isIphone: boolean;
export declare const isAndroid: boolean;
export declare const isIpad: boolean;
export declare const isIpod: boolean;
export declare const isWebos: boolean;
export declare const isWinPhone: boolean;
export declare const isKindle: boolean;
export declare const isBlackberry: boolean;
export declare const isBb10: boolean;
export declare const isPlaybook: boolean;
export declare const isChrome: boolean;
export declare const isFirefoxos: boolean;
export declare const isFirefox: boolean;
export declare const isSafari: boolean;
export declare const isGreatIE: boolean;
export declare const isIE: boolean;
export declare const isWebview: boolean;
