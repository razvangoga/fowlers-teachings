public class CsvDataSource implements DataSource {
  
  private string filename;
  
  public CsvDataSource(String filename) {
    this.filename = filename;
  }    
    
  public Stream<SalesRecord> salesDataFor(String product, LocalDate start, LocalDate end) {
    // unimportant details
  }
  public long recordCounts(LocalDate start) {
    // unimportant details
  }
  
  private Stream<SalesRecord> salesData() {
    // unimportant details
  }
  private SalesRecord makeSalesRecord(String line) {
    // unimportant details
  }    
}