var health = 100;
var slap = 5;
var punch = 10; 
var kick = 20;

function onSlap(){
  health -= slap
  update()
  return health
}
// console.log(health)
// console.log(onSlap())


function onPunch(){
  health -= punch
  update()
  return health
}

function onKick(){
  health -= kick
  update()
  return health
}

function update(){
  if (health <= 0 ) {
    health = 0
    
  }
  var healthElem = document.getElementById('health')
  healthElem.innerHTML = health
}

function reset(){
  health = 100
  update()
//   return health
}


//Each fighter will be there own object

