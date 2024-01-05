const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector('body')
console.log(body)

// button is NodeList so we can apply forEach on in
buttons.forEach(function(button){
              button.addEventListener('click', function(e){
                 const color = e.target.id
                 body.style.backgroundColor = color 
              })
            })