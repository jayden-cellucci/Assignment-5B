//Enter in the a area in the first textboxt
function formula(){
  let a = document.getElementById("t1").value;
  a = parseInt(a)
  area (a);
}


//calcucate the area using the fucntion (formula)
function area(a) {
  const answer = (3.14*a*a)
  console.log(answer);
    
}
function formula2(){
  let c= document.getElementById("t2").value;

  c = parseInt(c)
  circumference (c);
}

function circumference(c) {
  const answer = (2*3.14*c)
  console.log(answer)
}