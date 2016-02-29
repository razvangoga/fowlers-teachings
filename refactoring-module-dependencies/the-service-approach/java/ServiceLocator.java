public class ServiceLocator {
  private static ServiceLocator soleInstance;
  private DataSource dataSource;
  private Gondorff gondorff;

  public static DataSource dataSource() {
     return soleInstance.dataSource;
  }

  public static Gondorff gondorff() {
    return soleInstance.gondorff;
  }

  public static void initialize(ServiceLocator arg) {
    soleInstance = arg;
  }

  public ServiceLocator(DataSource dataSource, Gondorff gondorff) {
    this.dataSource = dataSource;
    this.gondorff = gondorff;
  }
}