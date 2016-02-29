public class ServiceConfigurator {
    public static void run() {
      DataSource dataSource = new CsvDataSource("sales.csv");
      ServiceLocator locator = new ServiceLocator(dataSource, new Gondorff(dataSource));
      ServiceLocator.initialize(locator);
    }
}