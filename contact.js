
function validate(e) {
	//	Hides all error elements on the page
	hideErrors();

	//	Determine if the form has errors
	if (formHasErrors()) {
		// 	Prevents the form from submitting
		e.preventDefault();
		return false;
	}

	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e A reference to the reset event
 * return  True allows the reset to happen; False prevents
 *         the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear Form?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("fname").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}


/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() 
{
	// When the required fields are empty, submission of form is halted 
	let errorFlag = false;
	let requiredFields = ["fname", "phone","email"];

	for (let i= 0; i< requiredFields.length; i++) 
	{
		if(!formFieldHasInput(document.getElementById(requiredFields[i]))) {
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
			if(!errorFlag) {
				document.getElementById(requiredFields[i]).focus();
				document.getElementById(requiredFields[i]).select();
			}
			errorFlag = true;
		}
	}

    // When the Phone Number is not in the correct format, submission of form is halted
		let regex1 = new RegExp(/^\d{10}$/);
		let phoneValue = document.getElementById("phone").value;

      
		if(phoneValue != "" && !regex1.test(phoneValue)){
			document.getElementById("validphone_error").style.display = "block";
			if(!errorFlag) {
				document.getElementById("phone").focus();
				document.getElementById("phone").select();
			}
			errorFlag = true;
		}	


    // When the Email Address is not in the correct format, submission of form is halted
	let regex2 = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
	let emailAddress = document.getElementById("email").value;

		if(emailAddress != "" && !regex2.test(emailAddress))
		{
			document.getElementById("validemail_error").style.display = "block";
			if(!errorFlag) {
				document.getElementById("email").focus();
				document.getElementById("email").select();
			}
			errorFlag = true;
		}

	return errorFlag;
}

function formFieldHasInput(field) {
	if (field.value == null || field.value == "") {
		return false;
	}
	return true;
}

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");
	
	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {
    // Add event listener for the form submit
    document.getElementById("submitForm").addEventListener("submit", validate);

    // Add event listener for the form reset
    document.getElementById("submitForm").addEventListener("reset", resetForm);

    // Hide all errors on the form at the beginning
    hideErrors();

}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);