const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#fname-signup').value.trim();
    const lastName = document.querySelector('#lname-signup').value.trim();
    const userName = document.querySelector('#user-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (firstName && lastName && userName && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, userName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/users/dashboard');
      } else {
        alert("User already exists; try again");
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);