

let wrapper = document.getElementById('wrapper');
let baseURL = 'https://rickandmortyapi.com/api/character/';
let counter = 2; // normal setting value
// let counter = 30; // this value using for checking disabling button process


function inputFileToPage(data, element){
    let arrayOfCard = data.results.map(function(item){
        return new Card(item.name, item.image);
    });

    arrayOfCard.forEach(item => {
        item.render(element);
    });
}






get(baseURL)
    .then(data => inputFileToPage(data, wrapper));


let button = createElement('button', {classes: ['button']});
button.innerHTML = 'Load more';
wrapper.after(button);
button.addEventListener('click', () => {
    let nextPageURL= baseURL + '?page=' + counter;
    counter = ++counter;
    get(nextPageURL)
        .then(data => {
            inputFileToPage(data, wrapper);

            if (!data.info.next){
                button.setAttribute('disabled', 'disabled');
            }
        })
});




