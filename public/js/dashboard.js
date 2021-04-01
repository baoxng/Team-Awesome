//Click event to make sure .js and .hdb files are linked correctly
document.querySelector('#entryBtn').onclick = function() {
    console.log("linked correctly to hdb");
}

const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new diary entry form
    const title = document.querySelector('#post-title').value.trim();
    const date = document.querySelector('#post-date').value.trim();
    const description = document.querySelector('#post-description').value.trim();
  
    if (title && date && description) {
      // Send a POST request to the API endpoint;
      console.log("before post");
      const response = await fetch('/api/post/create', {
        method: 'POST',
        body: JSON.stringify({ date, title, description}),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response);
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