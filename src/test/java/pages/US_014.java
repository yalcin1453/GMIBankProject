package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class US_014 {

  
   
   
   
   
   
   
   
   
   
   
   
   @FindBy(linkText = "My Operations")
    public WebElement myOperation;

   @FindBy(linkText = "Manage Customers")
    public WebElement manageCustomers;

   @FindBy(linkText = "Create a new Customer")
    public WebElement newCustomer;

}
