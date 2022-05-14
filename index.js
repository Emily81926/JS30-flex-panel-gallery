const panels = document.querySelectorAll('.panel')

//當點擊panel時，產生open特效
function clickedToOpen() {
  if (this.propertyName === 'open') return
  this.classList.toggle('open')
}

//在點每一個panel的時候都會加入css特效
panels.forEach(panel => panel.addEventListener('click', clickedToOpen))