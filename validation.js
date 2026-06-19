// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    //  ===== GET A QUOTE FORM VALIDATION =====
    const quoteForm = document.querySelector(".quote-form");
    if (quoteForm) {
        quoteForm.addEventListener("submit", function (event) {
            // Prevent the form from submitting and refreshing the page blindly
            event.preventDefault();

            // Get form values and trim whitespace
            const firstName = document.getElementById("firstname").value.trim();
            const surname = document.getElementById("surname").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const coverType = document.getElementById("cover-type").value;

            // Simple South African Phone Regex (checks for exactly 10 digits starting with 0)
            const phoneRegex = /^0[0-9]{9}$/;

            // Validation Checks
            if (firstName === "" || surname === "") {
                alert("Please fill in both your First Name and Surname.");
                return;
            }

            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid 10-digit South African phone number (e.g., 0821234567).");
                return;
            }

            if (email === "") {
                alert("Please enter a valid email address.");
                return;
            }

            if (coverType === "") {
                alert("Please select what you would like to cover from the dropdown menu.");
                return;
            }

            // If everything passes validation
            alert(`Thank you, ${firstName}! Your quote request for ${coverType} insurance has been submitted successfully. We will contact you soon.`);
            quoteForm.reset(); // Clears the form fields
        });
    }

});

// ===== GENERAL ENQUIRY FORM VALIDATION =====
    const enquiryForm = document.querySelector(".quote-form"); // Falls back cleanly if on enquiry.html
    // To prevent collision since both forms use .quote-form, we check for an enquiry-specific field
    const enquiryTypeField = document.getElementById("enquiry-type");

    if (enquiryForm && enquiryTypeField) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullName = document.getElementById("username").value.trim();
            const email = document.getElementById("useremail").value.trim();
            const enquiryType = enquiryTypeField.value;
            const message = document.getElementById("usermessage").value.trim();

            if (fullName === "") {
                alert("Please enter your Full Name.");
                return;
            }

            if (email === "") {
                alert("Please enter your Email Address.");
                return;
            }

            if (enquiryType === "") {
                alert("Please select your Type of Enquiry.");
                return;
            }

            if (message === "") {
                alert("Please type a message before submitting.");
                return;
            }

            alert(`Thank you, ${fullName}! Your message regarding "${enquiryType}" has been sent safely. Our team will review it shortly.`);
            enquiryForm.reset();
        });
    }