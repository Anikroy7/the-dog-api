const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data));
}

const displayDog = (dogs) => {
    // console.log(dogs)
    const neededDogs = dogs.slice(0, 12);
    const displayArea = document.getElementById('display-area');
    // console.log(neededDogs)
    for (const dog of neededDogs) {
        const div = document.createElement('div');
        div.classList.add('display-dog')
        div.innerHTML = `
                <div class="single-dog">
                <img width="220px" src="${dog.image.url}" alt="">
                <h3 class="text-danger">${dog.name}</h3>             
                <p>${dog.temperament.slice(0, 50)}</p>
                <p>${dog.weight.imperial}</p>
                <div/>

        `
        displayArea.appendChild(div)
        console.log(dog)

    }
}