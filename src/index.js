console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// fetch link and change into json 
    function getDogs() {
        return fetch(imgUrl)
        .then(function(response){
            return response.json()
        })
    }


// get array element 
    function renderPhotos() {
        getDogs()
        .then(function(json){
            for(let i = 0; i < json.message.length; i++) {
                renderPhoto(json.message[i])
            }
        })
    }

//  render photo 
     function renderPhoto(photo){
         const dogPhoto = document.createElement('img')
         dogPhoto.src = photo

         const dogDiv = document.querySelector('#dog-image-container')
         dogDiv.appendChild(dogPhoto)
     }


     renderPhotos()


///////////////////////////////////////// dog breed ////////////////////////////////////////
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getBreeds() {
    return fetch(breedUrl)
    .then(function(response){
        return response.json()
    })
}

function renderBreeds() { 
    getBreeds()
    .then(function(json){
        for (const key of Object.keys(json.message)) {
            renderBreed(key)
        }
    })
}

function renderBreed(breed){
  
    const breedLi = document.createElement('li')
    const breedUl = document.querySelector('#dog-breeds')

    breedLi.innerText = `${breed}`

    breedUl.appendChild(breedLi)
    
    // change colour on value
    breedLi.addEventListener('click', function(e){
        breedLi.style.color = 'blue'
    })


}


renderBreeds() 

/////////////////////// drop down /////////////////////////

const dropDown = document.querySelector('#breed-dropdown')
const breedUl = document.querySelector('#dog-breeds')


dropDown.addEventListener("change", function(e) {
    const allLis = document.querySelectorAll('li')
        for (let i = 0; i < allLis.length; i++){
            allLis[i].style.visibility = "visible"
         }
        for (let i = 0; i < allLis.length; i++){
            // console.log( allLis[i].innerText[0] )
            if (allLis[i].innerText[0] !== e.target.value) {
                allLis[i].style.visibility = "hidden"
            }
        }
})




})

