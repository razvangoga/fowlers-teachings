function gondorffNumber(product, salesDataFor, recordCounts, fileName) {
    return salesDataFor(product, gondorffEpoch(product), hookerExpiry(), fileName)
        .find(r => r.date.match(/01$/))
        .quantity * Math.PI;
}

function gondorffEpoch(product, recordCounts, fileName) {
    const countingBase = recordCounts(baselineRange(product), fileName);
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