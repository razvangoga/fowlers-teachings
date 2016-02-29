public class App {
    
  public App() {
      ServiceConfigurator.run();
  }
    
  public String emitGondorff(List<String> products) {
    List<String> result = new ArrayList<>();
    result.add("\n<table>");
    for (String p : products)
      result.add(String.format("  <tr><td>%s</td><td>%4.2f</td></tr>", p, 
        ServiceLocator.gondorff().gondorffNumber(p, new CsvDataSource())));
    result.add("</table>");
    return HtmlUtils.encode(result.stream().collect(Collectors.joining("\n")));
  }
}