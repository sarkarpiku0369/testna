let focus = document.getElementById('focus');

let focusHalfWidth = focus.offsetWidth / 2;


gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function(){
      gsap.set(focus, {
        css: {
          left: mouseX,
          top: mouseY,
        }
      })
    }
  });
  
  window.addEventListener('mousemove', (e)=> {
    mouseX = e.clientX;
    mouseY = e.clientY;
  })
  