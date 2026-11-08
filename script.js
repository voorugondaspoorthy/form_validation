alert("JavaScript is working!");

const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {

        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Get error elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");
        const success = document.getElementById("successMessage");

        // Clear old messages
        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        success.textContent = "";

        let valid = true;

        // Name validation
        if (name === "") {
            nameError.textContent = "Name is required!";
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "Email is required!";
            valid = false;
        }
        else if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email!";
            valid = false;
        }

        // Subject validation
        if (subject === "") {
            subjectError.textContent = "Subject is required!";
            valid = false;
        }

        // Message validation
        if (message === "") {
            messageError.textContent = "Message is required!";
            valid = false;
        }

        // Final result
        if (valid) {
            success.textContent =
                "Thank you! Your message was submitted successfully!";

            form.reset();
        }

    });