 // Functions for select elems with id & class
 var $ = document;
 // Select Elems
 var togglePassword = $.querySelector(".toggle-password");
 var passwordField = $.querySelector("#password-field");

 // Fire click event on eye icon
 togglePassword.addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword.classList.remove("active");
   } else {
     passwordField.type = "text";
     togglePassword.classList.add("active");
   }
 })