export default function gondorffNumber(product, salesDataFor, recordCounts) {
    return salesDataFor(product, gondorffEpoch(product), hookerExpiry())
        .find(r => r.date.match(/01$/))
        .quantity * Math.PI;
}

function gondorffEpoch(product, recordCounts) {
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