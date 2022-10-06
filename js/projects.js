const getData = async()=>{
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    
    return data;
}


const fetchInfo = async()=>{
    const fetchData = await getData();
    console.log(await fetchData)
    
    const mainH1 = document.querySelector(`#main-h1`)
    const mainText = document.querySelector(`#main-text`)

    mainH1.innerHTML = `${fetchData[0].title}`
    mainText.innerHTML = `${fetchData[0].body}`
    
    for (let i = 0; i < 3; i++) {
        const myTitle = document.querySelector(`#titleproject${i + 1}`)
        console.log(myTitle)
        const myBody = document.querySelector(`#bodyproject${i + 1}` )
        console.log(myBody)
        myTitle.innerHTML = `${fetchData[i].title}`
        myBody.innerHTML = `${fetchData[i].body}`
    }

}

fetchInfo()