const panels = document.querySelectorAll('.panel')

//在點每一個panel的時候都會加入css特效
panels.forEach(panel => panel.addEventListener('click', () => console.log('clicked!')))