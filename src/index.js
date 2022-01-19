console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"



fetch( imgUrl )
    .then( r => r.json() )      
    .then( renderDogs )
    
function renderDogs( dogStuff ) {
    dogStuff.message.forEach( buildAndAppendDogElement )
}

function buildAndAppendDogElement( imgUrl ) {
    //make a new element
    const newImg = document.createElement('img')
    //change it's attribute to use the img string
    newImg.src = imgUrl
    //append it to the DOM
    const imgContainer = document.getElementById("dog-image-container")
    imgContainer.append(newImg)
}



const breedUrl = 'https://dog.ceo/api/breeds/list/all'


fetch( breedUrl )
    .then( resp => resp.json() )
    .then( breedResp => {

        const breedArray = Object.keys(breedResp.message)

        const breedsContainer = document.querySelector('#dog-breeds')

        breedArray.forEach( breedText => {
            // create a new element
            const newLi = document.createElement('li')
            // change the text content of the element
            newLi.textContent = breedText


            // lol rabbithole!
            // const myNodes = breedsContainer.querySelectorAll('li')
            

            // extra step to add a listener to the event
            newLi.addEventListener('click', (e) => {

                // for (let i = 0; i < myNodes.length; i++){
                //     myNodes[i].style.color = 'black'
                // }
                e.target.style.color = 'red'

                
                // change ALL the li's back to the original color
                // THEN change this one to red

            })



            // append the new element to the DOM
            breedsContainer.append(newLi)
        })
    })