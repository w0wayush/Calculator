let display = document.getElementByClassName('calculator');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.value){
            case 'C':
                display.value = '';
                break;
            case '=':
                try{
                    display.value = eval(display.value);
                } catch {
                    display.value = "Undefined"
                }
                break;
            case 'AC':
                if (display.value){
                   display.value = display.value.slice(0, -100);
                }
                break;
            case 'DE':
                
            default:
                display.value += e.target.vale;
                
        }
    });
});