// CONTACT FORM ERROR HANDLING
// Save the values/DOM elements we need to interact with
    const formEl = document.getElementById('contactForm');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.querySelector('textarea');
    const errorName = document.getElementById('nameError'); 
    const errorEmail = document.getElementById('emailError');
    const errorMessage = document.getElementById('messageError');

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


// COMMENT POST SECTION
// STEP 1: save the values/DOM elements we will need to interact with in variables
    const commentForm = document.getElementById('commentForm');
    const nameElement = document.getElementById('nameComment');
    const emailElement = document.getElementById('emailComment');
    const commentElement = document.getElementById('comment');
    const ulElement = document.getElementById('commentPosts');

// STEP 2: attach an event listener to the comment form element
    commentForm.addEventListener('submit', function(e) {
        // remove refresh with prevent default
        e.preventDefault();

        // save the entered text values within variables
        const userNameComment = (nameElement.value.trim());
        const userEmailComment = (emailElement.value.trim());
        const userMessageComment = (commentElement.value.trim());
        // If the user submits values that are empty strings, they must be told it is required or blank
            if (userNameComment !== "" && userEmailComment !== "" && userMessageComment !== "") {
                console.log('you have submitted your comment');

                // create list element, createElement
                const listElement = document.createElement('li');

                // create figure with img, innerHTML
                const figureElement = document.createElement('figure');
    
                figureElement.innerHTML = '<i class="fa-solid fa-user"></i>';
    
                // create paragraph with today's date, commentDate, create text node
                const commentDate = document.createTextNode(curday('/'));
                
                // create paragraph with text, userComment, create text node
                const userComment = document.createTextNode(userMessageComment);

                
    
            }
    })
    // append commentDate and userComment to liEl
    // append liEl to ulEl.
    // clear value once form is submitted
    // else if, inputs are empty strings, must add message "field is required"

