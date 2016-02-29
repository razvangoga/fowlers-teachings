function emitGondorff(products) {
    function line(product) {
        return [
            '  <tr>',
            '    <td>${product}</td>',
            '    <td>${gondorffNumber(product).toFixed(2)}</td>',
            '  </tr>'].join('\n');
    }
    return encodeForHtml('<table>\n${products.map(line).join(\'\n\')}\n</table>');
}

function gondorffNumber(product) {
    return salesDataFor(product, gondorffEpoch(product), hookerExpiry())
        .find(r => r.date.match(/01$/))
        .quantity * Math.PI;
}

function gondorffEpoch(product) {
    const countingBase = recordCounts(baselineRange(product));
    return deriveEpoch(countingBase);
}

function salesDataFor(product, start, end) {
    return salesData()
        .filter(r =>
            (r.product === product)
            && (new Date(r.date) >= start)
            && (new Date(r.date) < end)
            );
}

function recordCounts(start) {
    return salesData()
        .filter(r => new Date(r.date) >= start)
        .length;
}

function salesData() {
    const data = readFileSync('sales.csv', { encoding: 'utf8' });
    return data
        .split('\n')
        .slice(1)
        .map(makeRecord);
}

function makeRecord(line) {
    const [product, date, quantityString, location] = line.split(/\s*,\s*/);
    const quantity = parseInt(quantityString, 10);
    return { product, date, quantity, location };
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