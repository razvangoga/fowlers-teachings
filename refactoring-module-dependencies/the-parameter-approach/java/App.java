public class App {
  public String emitGondorff(List<String> products) {
      
    DataSource dataSource = new CsvDataSource('sales.csv');
      
    List<String> result = new ArrayList<>();
    result.add("\n<table>");
    for (String p : products)
      result.add(String.format("  <tr><td>%s</td><td>%4.2f</td></tr>", p, new Gondorff().gondorffNumber(p, dataSource)));
    result.add("</table>");
    return HtmlUtils.encode(result.stream().collect(Collectors.joining("\n")));
  }
}