function salesDataFor(product, start, end, fileName) {
    return salesData(fileName)
        .filter(r =>
            (r.product === product)
            && (new Date(r.date) >= start)
            && (new Date(r.date) < end)
            );
}

function recordCounts(start, fileName) {
    return salesData(fileName)
        .filter(r => new Date(r.date) >= start)
        .length;
}

function salesData(fileName) {
    const data = readFileSync(fileName, { encoding: 'utf8' });
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