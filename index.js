const secondContainer = document.getElementById('second-container')
const noBtn = document.getElementById('nobtn')
const yesBtn = document.getElementById('yesbtn')
const Text = document.getElementById('text')

noBtn.addEventListener('mouseenter', function(){
  secondContainer.classList.toggle('reverse')
})
yesBtn.addEventListener('click', function(){
  Text.textContent = 'Akhir Mann heeh gyi na!'
})