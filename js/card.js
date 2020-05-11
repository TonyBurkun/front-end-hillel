let Card = (function(){
    function Card(name, imageSource){
        this.name = name;
        this.imageSource = imageSource;
        this.elements = this.prepareElements();
    }

    Card.prototype.prepareElements = function(){
        let titleBlock = createElement('h3', {classes: ['card-title']});
        titleBlock.innerHTML = this.name;

        let imageBlock = createElement('img', {classes: ['image']});
        imageBlock.setAttribute('src', this.imageSource);

        let card = createElement('div', {classes: ['card']}, [titleBlock, imageBlock]);

        return {
            card
        }
    };


    Card.prototype.render = function(parent){
        parent.appendChild(this.elements.card)
    };



    return Card;
})();