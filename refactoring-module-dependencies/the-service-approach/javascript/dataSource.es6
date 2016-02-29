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

function readFileSync(file, options) {
    // redacted
}