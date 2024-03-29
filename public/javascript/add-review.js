
 async function newFormHandler(event) {
  event.preventDefault();

  //console.log(document.querySelector('#reviewSubmit').value);

  const review = document.querySelector('input[name="review-title"]').value;
  var pathName= window.location.pathname;
  var bookId = pathName.slice(12);
 
  const response = await fetch(`/api/review/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      book_id: bookId,
      user_id: document.querySelector('#reviewSubmit').value,
      comment: review,
      created: Date(),
      updated: Date()
    })    
   });
   

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}


document.querySelector('.reviewClick').addEventListener('click', newFormHandler);


