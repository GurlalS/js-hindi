const clock = document.querySelector('#clock')

// have 2 args => function & duration after that it will re-execute that func
setInterval(function(){
  let date = new Date();
  
    clock.innerHTML = date.toLocaleTimeString('en-IN');
}, 1000)