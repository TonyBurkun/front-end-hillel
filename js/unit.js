let Unit = (function(){
    function Unit(type, health, stamina) {
        this.type = type;
        this.health = this.maxHealth =  health;
        this.stamina =  this.maxStamina = stamina;

        this.elements = this.prepareElements();
        this.initListeners();
    }

    Unit.prototype.prepareElements = function(){
        let type = createElement('h3', {classes: ['title']});
        type.innerHTML = this.type;

        let valueHealthSeparator = createElement('span', {classes: ['value-separator']});
        valueHealthSeparator.innerHTML = '|';

        let healthValue = createElement('span', {classes: ['bar-value']});
        healthValue.innerHTML = this.health;

        let healthValueMax = createElement('span', {classes: ['bar-value']});
        healthValueMax.innerHTML = this.maxHealth;

        let healthValueWrapper = createElement('div', {classes: ['bar-value-wrapper']}, [healthValue, valueHealthSeparator,  healthValueMax]);

        let innerHealthBar = createElement('div', {classes: ['bar__inner', 'bar__inner--health']});

        let valueStaminaSeparator = createElement('span', {classes: ['value-separator']});
        valueStaminaSeparator.innerHTML = '|';

        let staminaValue = createElement('span', {classes: ['bar-value']});
        staminaValue.innerHTML = this.stamina;

        let staminaValueMax = createElement('span', {classes: ['bar-value']});
        staminaValueMax.innerHTML = this.maxStamina;

        let staminaValueWrapper = createElement('div', {classes: ['bar-value-wrapper']}, [staminaValue, valueStaminaSeparator,  staminaValueMax]);
        let innerStaminaBar = createElement('div', {classes: ['bar__inner', 'bar__inner--stamina']});

        let health = createElement('div', {classes: ['bar', 'health']}, [innerHealthBar, healthValueWrapper]);
        let stamina = createElement('div', {classes: ['bar', 'stamina']}, [innerStaminaBar, staminaValueWrapper]);
        let avatar = createElement('img', {classes: ['avatar']});

        let card = createElement('div', {classes: ['card']}, [type, health, stamina, avatar]);


        return {
            type,
            health,
            healthValue,
            healthValueMax,
            staminaValue,
            staminaValueMax,
            innerHealthBar,
            innerStaminaBar,
            stamina,
            avatar,
            card
        }

    };


    Unit.prototype.initListeners = function(){
        this.elements.health.addEventListener('click', () => {
            let newHealth = Math.floor(this.health - this.maxHealth * 0.1);
            this.health = (newHealth >0) ? newHealth : this.removeCard();
            let healthBarWidth = this.health / this.maxHealth * 100;
            this.updateHealthText(healthBarWidth);
        });

        this.elements.stamina.addEventListener('click', () => {
            let newStamina = Math.floor(this.stamina - this.maxStamina * 0.1);
            this.stamina = (newStamina >= 0) ? newStamina : 0;
            let staminaBarWidth = this.stamina / this.maxStamina * 100;
            this.updateStaminaText(staminaBarWidth);

            if (!this.stamina){
                this.switchToDisable();
            }
        })
    };

    Unit.prototype.removeCard = function(){
        this.elements.card.remove();
    };

    Unit.prototype.switchToDisable = function(){
        this.elements.card.classList.add('disabled');
    };


    Unit.prototype.updateHealthText = function(healthBarWidth){
        this.elements.healthValue.innerHTML = this.health;
        this.elements.healthValueMax.innerHTML = this.maxHealth;
        this.elements.innerHealthBar.style.width = healthBarWidth + '%';
    };

    Unit.prototype.updateStaminaText = function(staminaBarWidth){
        this.elements.staminaValue.innerHTML = this.stamina;
        this.elements.staminaValueMax.innerHTML = this.maxStamina;
        this.elements.innerStaminaBar.style.width = staminaBarWidth + '%';
    };

    Unit.prototype.render = function(parent){
        parent.appendChild(this.elements.card)
    };

    return Unit

})();