  import * as ds from './dataSource.es6'
  
  export default function(filename) {
    return {
      salesDataFor(product, start, end) {return ds.salesDataFor(product, start, end, filename)},
      recordCounts(start) {return ds.recordCounts(start, filename)}
    }
  }