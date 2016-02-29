public class Gondorff {
  public double gondorffNumber(String product) {
    return  ServiceLocator.dataSource.salesDataFor(product, gondorffEpoch(product), hookerExpiry())
            .filter(r -> r.getDate().toString().matches(".*01$"))
            .findFirst()
            .get()
            .getQuantity() * Math.PI;
  }
  
  private LocalDate gondorffEpoch(String product) {
    final long countingBase = ServiceLocator.dataSource.recordCounts(baselineRange(product));
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