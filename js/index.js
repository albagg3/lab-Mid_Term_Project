// MENU HAMBURGUESA
const btn = document.querySelector('#btn-hamburguesa')
const menu = document.querySelector('#menu-hamburguesa')

btn.addEventListener('click', ()=>{
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
})


// FETCH
//array con todos los title

//array con todos los body


const getData = async()=>{
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    
    return data;
}


const fetchInfo = async()=>{
    const fetchData = await getData();
    console.log(await fetchData)
    
    for (let i = 0; i < 3; i++) {
        const myTitle = document.querySelector(`#title${i + 1}`)
        console.log(myTitle)
        const myBody = document.querySelector(`#body${i + 1}` )
        console.log(myBody)
        myTitle.innerHTML = `${fetchData[i].title}`
        myBody.innerHTML = `${fetchData[i].body}${fetchData[i].body}`
    }
}

fetchInfo()