public class Gondorff {
  private DataSource dataSource;

  public Gondorff(DataSource dataSource) {
    this.dataSource = dataSource;
  }
      
  public double gondorffNumber(String product) {
    return  dataSource.salesDataFor(product, gondorffEpoch(product), hookerExpiry())
            .filter(r -> r.getDate().toString().matches(".*01$"))
            .findFirst()
            .get()
            .getQuantity() * Math.PI;
  }
  
  private LocalDate gondorffEpoch(String product) {
    final long countingBase = dataSource.recordCounts(baselineRange(product));
    return deriveEpoch(countingBase);
  }

  private LocalDate baselineRange(String product) {
    // redacted
  }
  private LocalDate deriveEpoch(long base) {
    // redacted
  }
  private LocalDate hookerExpiry() {
    // redacted
  }    
}