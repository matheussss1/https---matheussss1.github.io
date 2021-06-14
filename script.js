const botoes = [].slice.call(document.querySelectorAll("button"));
const display = document.getElementById("display__text")

const apagar = () => display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 1)
const limpar = () => display.innerHTML = ''
const calcular = () => display.innerHTML = eval(display.innerHTML)

botoes.forEach(element => {
    element.addEventListener("click", () => {
        switch (element.innerHTML) {
            case 'C':   limpar(); break;
            case 'CE':  apagar(); break;
            case '=':   calcular(); break;
            default:    display.innerHTML += element.innerHTML;
        }
    })
});