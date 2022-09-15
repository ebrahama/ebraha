const scriptURL = 'https://script.google.com/macros/s/AKfycbxU_nOocXZcUtAKpUd8dLSUrLuBhJX5L4a9mCFtxGxifrhGskU_5Zgi5-8-FK0U6HjS/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("spncon")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { 
        msg.style.display="block"
        msg.innerHTML = "Message send succesfully"
        setTimeout(function(){
        msg.style.display="none"
        msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
