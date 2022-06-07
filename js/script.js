// Video
const videoBtn = document.querySelector('#overlook-video__btn');
const videoBtnIcon = document.querySelector('#overlook-video__icon');
const videoOverlay = document.querySelector('#overlook__overlay');
const videoFile = document.querySelector('#overlook__video');

videoBtn.addEventListener('click', function() {

   function toggleOverlay (event) {
      if(event.type === 'mouseleave') {
         videoOverlay.classList.add('hidden');
      }
      else {
         videoOverlay.classList.remove('hidden');
      }
   }

   if(videoFile.paused) {
      videoFile.play();
      videoBtnIcon.src = "./img/pause.svg"

      videoOverlay.onmouseleave = toggleOverlay;
      videoOverlay.onmouseenter = toggleOverlay;
   }
   else {
      videoFile.pause();
      videoBtnIcon.src="./img/overlook-overlay.svg"
      videoOverlay.onmouseleave = null;
      videoOverlay.onmouseenter = null;
   }
});

// Burger menu