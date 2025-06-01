function random_num_start(){
  let x=document.getElementById('display_result')
  x.innerText=''
let random_num=Math.random()*10
let result=Math.floor(random_num)
let count=3
for(let i=1;i<=3;i++){
  let input_user=prompt('Enter a number between 0-9')
if(input_user===result){
x.innerText='Cangratulations! You won \uD83C\uDF89'
x.style.color='green'
break
}
count--
 if(input_user==""){
  alert('you did not enter the number,play again')
} 
if(isNaN(input_user)){
  alert('only numbers are allowed,play again')
}
if(input_user>9){
  alert('only one number allowed from 0-9')
}
}
if(count==0){
  x.innerText='You Lost! Better luck next time'
  x.style.color='red'
   let y=document.createElement('p')
   y.setAttribute('class','childp')
  y.innerText=`the answer is ${result}`
  y.style.color='green'
  x.appendChild(y)
}
}

function restart(){
  location.reload(true)
}