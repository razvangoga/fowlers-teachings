import gondorffNumber from './gondorff.es6'
import createDataSource from './dataSourceAdapter.es6'

function emitGondorff(products) {
    
    const dataSource = createDataSource('sales.csv');
    
    function line(product) {
        return [
            '  <tr>',
            '    <td>${product}</td>',
            '    <td>${gondorffNumber(product, dataSource.salesDataFor, dataSource.recordCounts).toFixed(2)}</td>',
            '  </tr>'].join('\n');
    }
    return encodeForHtml('<table>\n${products.map(line).join(\'\n\')}\n</table>');
}

function encodeForHtml(html){
    // redacted
}