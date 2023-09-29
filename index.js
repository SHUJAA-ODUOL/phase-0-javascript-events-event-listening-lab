const input = document.getElementById('input');

function addingEventListener(){
  input.addEventListener('click', function addEventListener() {
    alert('I was clicked!');
  })
}

input.addEventListener('click', true);