
// Kriegen wir alle unsere Aktionen und die in einem Array hinzufügen
const actions = Array.from(
    document.querySelectorAll('[data-action]')
    );

// Entweder nehmen wir die Information aus unserem localStorage oder mit 0 anfangen
let counter = localStorage.getItem('counter') || 0;

// Kriegen wir zuerst die Variable
let counterValue = document.querySelector(".counter-value")
// Machen wir etwas damit ---> variablename.innerText erreicht
counterValue.innerText = counter;

actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;
        switch (type) {
            case 'increase':
                counter++;
                break;
            case 'decrease':
                counter--;
                break;
            case 'reset':
                counter = 0;
                break;
            case 'save':
                localStorage.setItem('counter', counter);
                break;
            case 'load':
                counter = localStorage.getItem('counter');
                break;
            case 'clear':
                localStorage.clear();
                counter = 0;
                break;            
        }
        counterValue.innerText = counter;                
    });

});