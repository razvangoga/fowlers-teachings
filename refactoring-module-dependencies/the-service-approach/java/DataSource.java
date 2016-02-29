public interface DataSource {
  Stream<SalesRecord> salesDataFor(String product, LocalDate start, LocalDate end);
  long recordCounts(LocalDate start);
}