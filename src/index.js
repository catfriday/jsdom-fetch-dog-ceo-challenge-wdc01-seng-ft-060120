console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {



   fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(images){
        console.log(images)
        let div = document.getElementById("dog-image-container")
            // console.log(div)
        images.message.forEach(image => {
            // console.log(image)
            let imageElement = document.createElement('img')
            // console.log(imageElement)
            imageElement.src = image
            div.append(imageElement)
        } );
    });

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(breeds) {
        breedNames = Object.keys(breeds.message)
        
        breedNames.forEach(name => {
             
        let ul = document.getElementById("dog-breeds");
        let li = document.createElement('li');
        li.id = 'bn'; 
            li.innerText = name
            ul.append(li);
         handleClick(li) 
        //  alternative
        //  li.addEventListener('click', () => {
        //     li.style.color = 'red';
        // })

    })

    // when we click on the li, the color should change
    
     function handleClick(x) {
        x.addEventListener('click', () => {
            x.style.color = 'red';
        });
    }

   
        
     }
)
    