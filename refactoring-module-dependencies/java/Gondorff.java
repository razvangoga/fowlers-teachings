public class Gondorff {
  public double gondorffNumber(String product) {
    return salesDataFor(product, gondorffEpoch(product), hookerExpiry())
            .filter(r -> r.getDate().toString().matches(".*01$"))
            .findFirst()
            .get()
            .getQuantity() * Math.PI;
  }
  
  private LocalDate gondorffEpoch(String product) {
    final long countingBase = recordCounts(baselineRange(product));
    return deriveEpoch(countingBase);
  }

  private Stream<SalesRecord> salesDataFor(String product, LocalDate start, LocalDate end) {
    // unimportant details
  }
  private long recordCounts(LocalDate start) {
    // unimportant details
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