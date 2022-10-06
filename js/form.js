const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const inputPhone = document.querySelector('#phone')
const inputMessage = document.querySelector('#textarea')
const btnSubmit = document.querySelector('#btn-form')

// inputName.addEventListener('keyup', ()=>{
//     console.log(inputName.value)
// })

btnSubmit.addEventListener('click', (e)=>{

    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        message: inputMessage.value,
        
    }),
})
    .then((response) => response.json())
    .then((json) => console.log(json));

})