import {salesDataFor, recordCounts} from './dataSource.es6'

function gondorffNumber(product) {
    return salesDataFor(product, gondorffEpoch(product), hookerExpiry())
        .find(r => r.date.match(/01$/))
        .quantity * Math.PI;
}

function gondorffEpoch(product) {
    const countingBase = recordCounts(baselineRange(product));
    return deriveEpoch(countingBase);
}

function baselineRange(product) {
    // redacted
}
function deriveEpoch(countingBase) {
    // redacted
}
function hookerExpiry() {
    // redacted
}

function readFileSync(file, options) {
    // redacted
}
function encodeForHtml(html){
    // redacted
}