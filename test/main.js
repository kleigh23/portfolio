const form = document.forms['search'];
const input = form.elements.searchInput;

input.addEventListener('focus', () => console.log('focused'), false);
input.addEventListener('blur', () => console.log('blurred'), false);
input.addEventListener('change', () => console.log('changed'), false);

form.addEventListener('submit', search, false);

input.value = 'Search Here';

input.addEventListener('focus', function(){
  if (input.value==='Search Here') {
    input.value = ''
    }
  }, false);

input.addEventListener('blur', function(){
  if(input.value == '') {
    input.value = 'Search Here';
    } }, false);

// function search(event) {
//   alert(`You Searched for: ${input.value}`);
//   event.preventDefault();
// }

const form1 = document.forms['search'];
form.addEventListener ('submit', search, false);

function search(event) {
    // alert('Form Submitted');
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
