// CONTACT FORM ERROR HANDLING
// Save the values/DOM elements we need to interact with
    const formEl = document.querySelector('form');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.querySelector('textarea');
    const errorName = document.getElementById('nameError'); 
    const errorEmail = document.getElementById('emailError');
    const errorMessage = document.getElementById('messageError');
    const errorComment = document.getElementById('commentError')

    // Attach an event listener to the form element
    formEl.addEventListener('submit', function(e) {
        
        // save the entered text value from the input within a variable
        const userName = (nameEl.value.trim());
        const userEmail = (emailEl.value.trim());
        const userMessage = (messageEl.value.trim());
        
        // if the user submits the form without entering anything, that returns an empty string
        // IF user submits name, email. message - create error message
        
        // if name is blank then alert "this is required field"
        // if (userName !== "" && userEmail !== "" && userMessage !== "") {
            //     console.log('form submitted!');
            // }
            
            if (userName === "") {
            e.preventDefault();
            errorName.innerText = 'Name is required'
        } else {
            true;
        }
        // if email is blank then alert "this is required field"
        if (userEmail === "") {
            e.preventDefault();
            errorEmail.innerText = 'Email is required'
        } else {
            true;
        }
        // if textarea is blank then alert "message is blank"
        if (userMessage === "") {
            e.preventDefault();
            errorMessage.innerText = 'Message is blank'
        } else {
            true;
        }

        



})
