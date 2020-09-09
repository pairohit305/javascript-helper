"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toStartCase = exports.textLimitor = void 0;
function textLimitor(text, limit = 60, content = "...") {
    if (typeof text !== "string" || !text)
        throw "String is not provider";
    if (text.length > limit) {
        return text.slice(0, limit) + content;
    }
    return text;
}
exports.textLimitor = textLimitor;
function toStartCase(text) {
    if (typeof text !== "string" || !text)
        throw "String is not provider";
    text = text.toLowerCase();
    text = text.charAt(0).toUpperCase() + text.slice(1);
    return text;
}
exports.toStartCase = toStartCase;
//# sourceMappingURL=index.js.map