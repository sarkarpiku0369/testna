 /* horizontal panel */

 gsap.registerPlugin(ScrollTrigger)

 let container = document.getElementById("container");

 gsap.to(container, {
     x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
     ease: "none",
     scrollTrigger: {
         trigger: container,
         invalidateOnRefresh: true,
         pin: true,
         scrub: 1,
         end: () => "+=" + container.offsetWidth
     }
 })

 /* end horizontal panel */


 /* centered carousel */
 var centerCarousel = document.querySelectorAll('.carousel-center')[0]

 function getOffset(element) {
     let rect = element.getBoundingClientRect();
     let win = element.ownerDocument.defaultView;

     return {
         top: rect.top + win.pageYOffset,
         left: rect.left + win.pageXOffset
     };
 }

 let boxes = gsap.utils.toArray(".box");
 var currentSection = boxes[0];

 function offset(box) {
     var centerCarouselMiddle = centerCarousel.offsetWidth? centerCarousel.offsetWidth/ 2 : 0;
     var centerCarouselLeft = getOffset(centerCarousel).left
     var boxLeft = getOffset(box).left
     var currentCenterOffset = gsap.getProperty(".carousel-center-inner", "left");

     var offsetGeneral = centerCarouselLeft - boxLeft + centerCarouselMiddle + currentCenterOffset - box.offsetWidth / 2

     return offsetGeneral
 }

 gsap.set('.carousel-center-inner', {
     left: offset(currentSection),
 })


 gsap.set(".carousel-container", { height: ((boxes.length - 1) * 100) + "vh" });

 ScrollTrigger.create({
     pin: true,
     start: "top center",
     trigger: ".carousel-container"
 })

 boxes.forEach((section, i) => {
     ScrollTrigger.create({
         // use dynamic scroll positions based on the window height (offset by half to make it feel natural)

         // when a new section activates (from either direction), set the section accordinglyl.
         onToggle: self => self.isActive && setSectionCard(section, i),
         markers: true
     });
 });

 function setSectionCard(newSection, i) {

     if (newSection !== currentSection) {
         gsap.to('.carousel-center-inner', {
             left: offset(newSection)
         })
         currentSection = newSection;
     }
 }