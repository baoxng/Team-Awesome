const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new diary entry form
    const postName = document.querySelector('#post-email').value.trim();
    const postDate = document.querySelector('#post-date').value.trim();
    const postDescription = document.querySelector('#post-description').value.trim();
  
    if (postName && postDate && postDescription) {
      // Send a POST request to the API endpoint
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ postName, postDate, postDescription }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("this worked");
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/api/users/dashboard');
      } else {
        alert("Failed to create new entry");
      }
    }
  };
  
  document
    .querySelector('#post-form')
    .addEventListener('submit', postFormHandler);