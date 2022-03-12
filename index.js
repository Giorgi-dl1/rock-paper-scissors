const choice=['paper','scissors', 'rock'];
const choiceDiv = document.querySelector('.choice');
const outcomeDiv= document.querySelector('.outcome');
const resultDiv = document.querySelector('.result');
const result = document.getElementById('result');
const userPick = document.getElementById("user-pick");
const computerPick = document.getElementById("computer-pick");
const scoreCount = document.querySelector('.count');
const replayButton = document.querySelector('.result button');
var score = 0;
var computerChoice;
replayButton.addEventListener('click',()=>{
   choiceDiv.style.display = 'flex';
   outcomeDiv.style.display = 'none';
   resultDiv.style.display='none';
})
function pickHand(hand){
   console.log(hand)
   choiceDiv.style.display = 'none';
   outcomeDiv.style.display = 'flex';
   showResult(hand);
 }
function showResult(hand){
   appendUserPick(hand);
   appendComputerPick();

   setTimeout(() => {
      updateResult(hand,computerChoice)
      resultDiv.style.display='flex';
   }, 700);
}
function appendUserPick(data){
   userPick.innerHTML=`<h2>YOU PICKED</h2>
   <div class="${data} hand">
     <img src="/images/icon-${data}.svg" alt="paper" >
   </div>`
}
function appendComputerPick(){
 let randomNum = Math.floor(Math.random()*3);
 computerChoice = choice[randomNum];
 computerPick.innerHTML=`<h2>THE HOUSE PICKED</h2>
 <div class="${computerChoice} hand">
   <img src="/images/icon-${computerChoice}.svg" alt="paper" >
 </div>`
 console.log(computerChoice);
}
function updateResult(user,computer){
   console.log(user,computer);
   if(user === 'paper'&&computer==='rock'){
      document.getElementById('result').innerText = 'you win';
      document.getElementById('result').nextElementSibling.style.color = 'hsl(214, 47%, 23%)';
      score++;
      scoreCount.innerText = score;
   }
   if(user === 'paper' && computer==='scissors'){
      document.getElementById('result').innerText = 'you lose';
      document.getElementById('result').nextElementSibling.style.color = 'hsl(349, 71%, 52%)';
      if(score>=1){score--;};
      if(score>=10){score-=2;};
      scoreCount.innerText = score;
   }
   if(user === 'paper'&&computer==='paper'){
      document.getElementById('result').innerText = "it's a tie";
      document.getElementById('result').nextElementSibling.style.color = 'hsl(214, 47%, 23%)';
   }

   if(user === 'scissors'&&computer==='paper'){
      document.getElementById('result').innerText = 'you win';
      document.getElementById('result').nextElementSibling.style.color = 'hsl(214, 47%, 23%)';
      score++;
      scoreCount.innerText = score;
   }
   if(user === 'scissors' && computer==='rock'){
      document.getElementById('result').innerText = 'you lose';
      document.getElementById('result').nextElementSibling.style.color = 'hsl(349, 71%, 52%)';
      if(score>=1){score--;};
      if(score>=10){score-=2;};
      scoreCount.innerText = score;
   }
   if(user === 'scissors'&&computer==='scissors'){
      document.getElementById('result').innerText = "it's a tie";
      document.getElementById('result').nextElementSibling.style.color = 'hsl(214, 47%, 23%)';
   }

   if(user === 'rock'&&computer==='scissors'){
      document.getElementById('result').innerText = 'you win';
      document.getElementById('result').nextElementSibling.style.color = 'hsl(214, 47%, 23%)';
      score++;
      scoreCount.innerText = score;
   }
   if(user === 'rock' && computer==='paper'){
      document.getElementById('result').innerText = 'you lose';
      document.getElementById('result').nextElementSibling.style.color = 'hsl(349, 71%, 52%)';
      if(score>=1){score--;};
      if(score>=10){score-=2;};
      scoreCount.innerText = score;
   }
   if(user === 'rock'&&computer==='rock'){
      document.getElementById('result').innerText = "it's a tie";
      document.getElementById('result').nextElementSibling.style.color = 'hsl(214, 47%, 23%)';
   }
}
function showRules(){
   document.querySelector('.rules').style.display = 'block';
}
function hideRules(){
   document.querySelector('.rules').style.display = 'none';
}