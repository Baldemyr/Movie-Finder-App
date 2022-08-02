const loginFormHandler = async function (event) {
    event.preventDefault();
    const emailEl = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
    //default route, will change later
    fetch('/login', {
      method: 'post',
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function (res){
        return res.json();
      })
      .then(function () {
        //Jump to the homepage page
        //default route, will change later
      document.location.replace('/homepage');
    })
    .catch((err) => console.log('Error'+err));
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);