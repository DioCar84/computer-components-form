/* allos the DOM content to load without waiting for CSS or other factors to be read */
document.addEventListener("DOMContentLoaded", function() {

    /* creating global variable for the checkout button */
    var checkoutButton = document.getElementById("proceedToCheckout");
    /* creating global variable for the parts drop down menu */
    var dropDownList = document.getElementById("parts-dropdown");
    /* creating global variable for the add to cart button */
    var addToCart = document.getElementById("addToCart");
    /* creating global variable for the first form on the left side */
    var form1 = document.getElementById("first-form");
    /* creating global variable for the second form on the right side */
    var form2 = document.getElementById("second-form");

    /* creates an event listener that reacts to the drop down menu changing its selected item */
    dropDownList.addEventListener("change", function() {
        /* creating local variable for the drop down menu current value */
        var unit = document.getElementById("parts-dropdown").value;
        /* creating local variable for the unit price text field */
        var unitPrice = document.getElementById("outputUnitPrice");

        /* if, else if, else conditional statements that sets the price displayed based on the drop down item selected */
        if (unit === "1") {
            /* price for Motherboard */
            unitPrice.value = "400.00";
        } else if (unit === "2") {
            /* price for CPU */
            unitPrice.value = "700.00";
        } else if (unit === "3") {
             /* price for RAM */
            unitPrice.value = "250.00";
        } else if (unit === "4") {
             /* price for GPU */
            unitPrice.value = "1200.00";
        } else if (unit === "5") {
             /* price for Storage, SSD Drive */
            unitPrice.value = "150.00";
        } else if (unit === "6") {
             /* price for Power Supply */
            unitPrice.value = "75.00";
        } else {
            /* default display if no item is selected */
            unitPrice.value = "0.00";
        }
    })

    /* function that adds an event listener to add to cart button for displaying total purchase value */
    addToCart.addEventListener("click", function() {
        /* local variable that parses String value of Unit price into an Integer */
        var unitPrice = parseInt(document.getElementById("outputUnitPrice").value);
        /* local variable that parses String value of quantity into an Integer */
        var quantity = parseInt(document.getElementById("inputQuantity").value);
        /* local variable for the total cost text field */
        var totalCost = document.getElementById("inputTotalCost");
        /* adds the cost of purchase to the existing value and siaplys as a float with 2 decimal place precision */
        totalCost.value = (+parseFloat(totalCost.value) + +parseFloat(unitPrice * quantity)).toFixed(2);
    })

    /* function that adds an event listener to the checkout button for checking if all fields are complete, displaying total purchase and resetting the input fields */
    checkoutButton.addEventListener("click", function(){
        /* local variable that holds the value of the first name user input */
        var firstName = document.getElementById("inputFirstName").value;
        /* local variable that holds the value of the last name user input */
        var lastName = document.getElementById("inputLastName").value;
        /* local variable that holds the value of the e-mail user input */
        var email = document.getElementById("inputEmail").value;
        /* local variable that holds the value of the first address line user input */
        var address = document.getElementById("inputAddress").value;
        /* local variable that holds the value of the second address line user input */
        var address2 = document.getElementById("inputAddress2").value;
        /* local variable that holds the value of the city user input */
        var city = document.getElementById("inputCity").value;
        /* local variable that holds the value of the post code user input */
        var postCode = document.getElementById("inputPostCode").value;
        /* local variable that holds an array with the values above */
        var firstForm = [firstName, lastName, email, address, address2, city, postCode];
        /* local variable to be used for determining if any of the input fields are blank */
        var emptyFields = 0;

        /* function that checks if  each input fields is blank and increments emptyFields variable for each blank entry */
        firstForm.forEach(function(i){
            /* checking if input value is blank String */
            if (i === "") {
                /* incrementing emptyFields variable by 1 for each blank entry */
                emptyFields++;
            }
        })

        /* checking if any input fields were left blank through variable value */
        if(emptyFields > 0) {
            /* sending user an alert to fill in all necessary fields */
            alert("Please fill in all the required fields!");
        } else {
            /* if all fields are complete, getting the total order value */
            var totalOrder = document.getElementById("inputTotalCost").value;
            /* sending user an alert thanking them for the order with their name and total spent */
            alert("Thank you for your order, " + firstName + " " + lastName + ". Your total is $" + totalOrder);
            /* clears the left form input fields for a new order */
            form1.reset();
            /* clears the right form input fields for a new order */
            form2.reset(); 
        }
        
    })

});