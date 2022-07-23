
let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');
let read_more = document.getElementById('read_more');
let hideExp = document.getElementById('hideExp');


readMore_btn.addEventListener('click', toggleText);
read_more.addEventListener('click', a);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Read Less'
  }
  else {
    readMore_btn.innerHTML = 'Read More'
  }

}
 

function a() {
    hideExp.classList.toggle('showText');
  
    if(hideExp.classList.contains('showText')) {
      read_more.innerHTML = 'Read Less'
    }
    else {
      read_more.innerHTML = 'Read More'
    }
  
  }
