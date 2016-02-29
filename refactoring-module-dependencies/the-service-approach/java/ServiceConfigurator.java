public class ServiceConfigurator {

  public class ServiceConfigurator {
    public static void run() {
      ServiceLocator locator = new ServiceLocator(new CsvDataSource("sales.csv"), new Gondorff());
      ServiceLocator.initialize(locator);
    }
  }
}