const signupFormHandler = async function (event) {
    event.preventDefault();
  
    const firstnameEl = document.querySelector('#firstname-signup');
    const lastnameEl = document.querySelector('#lastname-signup');
    const emailEl = document.querySelector('#email-signup');
    const usernameEl = document.querySelector('#username-signup');
    const passwordEl = document.querySelector('#password-signup');
    //default, will change later
    fetch('/user', {
      method: 'post',
      body: JSON.stringify({
        first_name: firstnameEl.value,
        last_name: lastnameEl.value,
        email: emailEl.value,
        user_name: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function () {
        // after log in, it will jump to home route
        // Default, will chnage route later
        document.location.replace('/homepage');
      })
      .catch((err) => console.log(err));
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);