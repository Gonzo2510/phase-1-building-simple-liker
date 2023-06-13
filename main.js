// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




// User likes/unlikes post
document.querySelectorAll('.like-glyph').forEach(element => {
  element.addEventListener('click',() => mimicServerCall()
  .then(result => {
    let heart = document.querySelector('.like-glyph')
    if (element.innerHTML === EMPTY_HEART){
      element.innerHTML = FULL_HEART
      element.className = "activated-heart"
    } else {
      element.innerHTML = EMPTY_HEART
      element.className = "like"
    }


    console.log(element)
  })
  .catch(error => {
    const errorMessage = document.getElementById('modal')
    errorMessage.querySelector('h2').innerHTML = error
    errorMessage.className = 'visible'
    setTimeout(() => {
      errorMessage.className = 'hidden'
    }, 3000)
  }))
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
