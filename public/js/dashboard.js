//Click event to make sure .js and .hdb files are linked correctly
document.querySelector('#entryBtn').onclick = function() {
    console.log("linked correctly to hdb");
}

const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new diary entry form
    const title = document.querySelector('#post-email').value.trim();
    const date = document.querySelector('#post-date').value.trim();
    const description = document.querySelector('#post-description').value.trim();
  
    if (title && date && description) {
      // Send a POST request to the API endpoint;
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ date, title, description, image, user_id}),
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