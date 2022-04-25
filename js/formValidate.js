/******f************
    
    Project 3 Javascript
    Name: Gabby Tan
    Date: 2022-04-24
    Description: Javascript for Project 3.

*******************/

function validate(e){
	hideErrors();

	if(formHasErrors()){

		e.preventDefault();

		return false;
	}

	return true;
}

function formHasErrors(){
	let errorFlag = false;

	let inputs = ["name", "phone", "email"];
	let emailRegex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

	for(let i = 0; i < inputs.length; i++){
		let input = document.getElementById(inputs[i]);

		if(input.value == null || input.value.trim() == ""){

			document.getElementById(inputs[i] + "_error").style.display = "block";

			if(!errorFlag){
				input.focus();
				input.select();
			}

			errorFlag = true;
		}
		else if(i == 1){
			if(isNaN(input.value) || input.value.length != 10){
				document.getElementById(inputs[i] + "_error").style.display = "block";

				if(!errorFlag){
					input.focus();
					input.select();
				}
			}
		}
		else if(i == 2){
			if(!emailRegex.test(input.value)){
				document.getElementById(inputs[i] + "Format_error").style.display = "block";

				if(!errorFlag){
					input.focus();
					input.select();
				}

				errorFlag = true;
			}
		}
	}

	return errorFlag;
}

function hideErrors(){
	let errors = document.getElementsByClassName("error");

	for(let i = 0; i < errors.length; i++){
		errors[i].style.display = "none";
	}
}

function resetForm(e){

	if(confirm('Clear Form?')){
		hideErrors();

		document.getElementById("name").focus();

		return true;
	}

	e.preventDefault();

	return false;
}

function load(){
	document.getElementById("submit").addEventListener("click", validate);
	document.getElementById("reset").addEventListener("click", resetForm)
}

document.addEventListener("DOMContentLoaded", load);