import initializeServices from './configureServices.es6';
import {gondorffNumber} from './serviceLocator.es6'


initializeServices();

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

function encodeForHtml(html){
    // redacted
}