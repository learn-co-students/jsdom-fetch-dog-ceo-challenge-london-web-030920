
document.addEventListener("DOMContentLoaded", function() {
    renderDogs();
    renderBreeds();
}) 

// const array = [];
// let theUl = document.querySelector("#dog-breeds")

function fetchDogs(){
return fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response){
    return response.json()
})
}

function renderDogs(){
    fetchDogs()
    .then(function(dogs){
        for (let i = 0; i < dogs.message.length; i++)
        renderDog(dogs.message[i])
    })
}

function renderDog(dog){
    let theDiv = document.querySelector("#dog-image-container")
    let image = document.createElement("img")
    image.src = dog
    theDiv.appendChild(image)
}

function fetchBreed(){
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response){
        return response.json()
    })
}

function renderBreeds(){
    fetchBreed()
    .then(function(breeds){
       let breedsArray = Object.keys(breeds.message)
       for (let i = 0; i < breedsArray.length; i++)
       appendLi(breedsArray[i])
    })
}

function appendLi(breed){
    const theUl = document.querySelector("#dog-breeds")
    let li = document.createElement("li")
    li.innerText = breed
    theUl.appendChild(li)
    li.addEventListener('click', function(e){
        li.style.color = 'blue'
    })
}

