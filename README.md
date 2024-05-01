# Coming-Soon-Master

Hello everybody! 👋 </br>
✨ Welcome to the Coming-Soon-Master!
 The Coming-Soon-Master is a web-based application built using HTML, CSS, and JavaScript. The purpose of this form is to allow users to sign up for our service by providing their basic information.

## 👀 Overview

### 📷 Screenshot
![screencapture-127-0-0-1-3000-index-html-2024-05-01-13_59_22](https://github.com/tucecifci/Coming-Soon-Master/assets/151346784/82dd156e-e2d4-4dc8-8f12-f15c16274e01)

![screencapture-127-0-0-1-3000-index-html-2024-05-01-13_59_39](https://github.com/tucecifci/Coming-Soon-Master/assets/151346784/879832b0-8097-462e-8357-cd29d8ca7d68)



### 🔗 Links

- https://tucecifci.github.io/Coming-Soon-Master/

## My process

### 💡 Built with

The Coming Soon Master is built using the following technologies:

- HTML: For creating the structure of the signup form.
- CSS: For styling the form and adding visual enhancements.
- JavaScript: For implementing client-side validation and form submission functionality.
  

### 🧠 What I learned

While working on the Coming Soon Master Project, I gained valuable knowledge and skills including:

- Form Validation Techniques: Explored various techniques for validating user input, including regex patterns, length checks, and conditional statements.
- Error Handling: Learned how to handle errors gracefully and provide informative feedback to users to guide them towards correct inputs.
- DOM Manipulation: Practiced manipulating the Document Object Model (DOM) using JavaScript to dynamically update form elements and display error messages.
- Event Handling: Implemented event listeners to detect user interactions and trigger validation checks at appropriate times.
- Accessibility: Considered accessibility principles to ensure the form is usable by all users, including those with disabilities, by providing clear and descriptive error messages and using semantic HTML markup.
- Testing: Conducted testing to verify the functionality of the form across different browsers and devices, ensuring a consistent user experience.
- Documentation: Improved my documentation skills by writing clear and concise comments in the code and creating this README file to provide instructions for users and contributors.


```javascript
  const input = document.querySelector("#input-email");
document.getElementById("submit-button").addEventListener("click", function () {
  const invalidEmail = document.getElementById("input-email").value;
  const error = document.getElementById("error");
  // const errorImg = document.getElementById("error-img");
  if (!invalidEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.style.display = "block";
    input.style.border = "2px solid red";
    // errorImg.style.display = "block";
    input.placeholder = "email@example/com";
  }
});
```

### 👩🏼‍💻 Features

The Coming Soon Master offers the following features:

- Form Validation: Users can validate the information they enter into the form to ensure its accuracy.
- Visual Feedback: Users receive visual feedback if they enter incorrect formats or incomplete data.
- Live Validation: Users can benefit from live validation while entering information.
- Form Submission: Once correct and complete information is entered, users can successfully submit the form.



### 🤌🏻 Useful resources

- https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
