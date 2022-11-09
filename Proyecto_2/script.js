/*  se declaran las contantes, espera las acciones de index.html*/
const count = document.getElementById('count');
const add = document.getElementById('up');
const sub = document.getElementById('down');
const reset = document.getElementById('reset');

/* evento para aumentar el conteo y aplicar color*/
up.addEventListener('click', () => {
  count.innerHTML++;
  applyColor();
});
/* evento para disminuir el conteo y aplicar color */
down.addEventListener('click', () => {
  count.innerHTML--;
  applyColor();
});
/* evento para resetear el  conteo y aplicar color */
reset.addEventListener('click', () => {
  count.innerHTML = 0;
  applyColor();
});
/*  funcion para asignar color al contador conforme a los elementos   */
function applyColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'green';
  } else if (count.innerHTML < 0) {
    count.style.color = 'red';
  } else {
    count.style.color = 'black';
  }
}
