import * as locator from './serviceLocator.es6';
import gondorffImpl from './gondorff.es6';
import createDataSource from './dataSourceAdapter.es6'

export default function () {
    const dataSource = createDataSource('sales.csv');
    
    locator.initialize({
        salesDataFor: dataSource.salesDataFor,
        recordCounts: dataSource.recordCounts,
        gondorffNumber: (product) => gondorffImpl(product, dataSource.salesDataFor, dataSource.recordCounts)
    });
}