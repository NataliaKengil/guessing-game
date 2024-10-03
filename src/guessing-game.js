class GuessingGame {
    /*constructor() {
        this.min = 0;  
        this.max = 0;  
        this.currentGuess = 0; // 
    }

    setRange(min, max) {
        this.min = min; // Устанавливаем минимальное значение диапазона
        this.max = max; // Устанавливаем максимальное значение диапазона
    }

    guess() {
        this.currentGuess = Math.floor((this.min + this.max) / 2); // Находим среднее значение
        return this.currentGuess; // Возвращаем предположение
    }

    lower() {
        this.max = this.currentGuess; // Если предположение слишком велико, сужаем диапазон
    }

    greater() {
        this.min = this.currentGuess + 1; // Если предположение слишком мало, сужаем диапазон
    }*/

        
            constructor() {
                this.min = null;
                this.max = null;
                this.guessValue = null;
            }
        
            setRange(min, max) {
                this.min = min;
                this.max = max;
                this.guessValue = Math.floor((this.min + this.max) / 2); // Первое предположение
            }
        
            guess() {
                return this.guessValue;
            }
        
            lower() {
                this.max = this.guessValue - 1; // Уменьшаем верхнюю границу
                this.guessValue = Math.floor((this.min + this.max) / 2); // Новое предположение
            }
        
            greater() {
                this.min = this.guessValue + 1; // Увеличиваем нижнюю границу
                this.guessValue = Math.floor((this.min + this.max) / 2); // Новое предположение
            }
        
}

module.exports = GuessingGame;


  