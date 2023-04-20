
function validate(e) {	
	hideErrors();	
	if (formHasErrors()) {
		e.preventDefault();
		return false;
	}
	return true;
}

function resetForm(e) {
	if (confirm('Clear Form?')) {
		hideErrors();
		document.getElementById("fname").focus();
		return true;
	}
	e.preventDefault();
	return false;
}

function hideErrors() {
	
	let error = document.getElementsByClassName("error");
	for (let i = 0; i < error.length; i++) {
		
		error[i].style.display = "none";
	}
}

function formHasErrors() 
{
	// required fields are empty, no submission
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

    // Phone Number is not in the correct format, no submission
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


    // email is not in the correct format, no submission
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


function load() {
    // Add event listener for the form submit
    document.getElementById("submitForm").addEventListener("submit", validate);

    // Add event listener for the form reset
    document.getElementById("submitForm").addEventListener("reset", resetForm);

    // Hide all errors on the form at the beginning
    hideErrors();

	// When users focus on the input, the textbox will be highlighted
	let requiredFields = ["fname", "phone","email","subject"];
	for (let i= 0; i< requiredFields.length; i++)
	document.getElementById(requiredFields[i]).addEventListener("focus", function() {
		document.getElementById(requiredFields[i]).style.backgroundColor = "antiquewhite";
	});

	// When users leave focus on the input, the textbox will be reset to white
	for (let i= 0; i< requiredFields.length; i++)
	document.getElementById(requiredFields[i]).addEventListener("blur", function() {
		document.getElementById(requiredFields[i]).style.backgroundColor = "white";
	});

}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);