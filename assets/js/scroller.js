gsap.defaultEase = Linear.easeNone;
		var titles = document.querySelectorAll(".sectionTitle");
		var controller = new ScrollMagic.Controller();
		var tl = gsap.timeline();


    // change behaviour of controller to animate scroll instead of jump

    //NOT WORKING FOR ME
    /*controller.scrollTo(function (newpos) {
      gsap.to(window, {duration: 0.5, scrollTo: {y: newpos}});
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^='#']", function (e) {
      var id = $(this).attr("href");
      if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);

        // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    });*/

    //GSAP scrollTo
    document.querySelectorAll(".stories a").forEach((trigger, index) => {
      trigger.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:0}});
      });
    });


		
		
		// create timeline
		// this could also be created in a loop
		tl.to("#js-slideContainer", {duration: 1, xPercent: 0 }, "label1");
		tl.from(titles[1], {duration: 0.1, opacity: 1 }, "label1+=0.5");
		tl.to("#js-slideContainer", {duration: 1, xPercent: -25 }, "label2");
		tl.from(titles[2], {duration: 0.2, opacity: 1 }, "label2+=0.5");
		// tl.to("#js-slideContainer", {duration: 1, xPercent: -50 }, "label3");
		// tl.from(titles[3], {duration: 0.5, opacity: 1 }, "label3+=0.5");
		// tl.to("#js-slideContainer", {duration: 1, xPercent: -75 }, "label4");
		// tl.from(titles[4], {duration: 0.5, opacity: 1 }, "label4+=0.5");



// tl.to(
// 			".progress-bar", 
// 			{
// 				duration: 0, 
// 				width:'25%'}, 
// 				"label1"
// 			);
// 		tl.from(titles[1], 
// 			{
// 				duration: 0.5, 
// 				opacity: 0 
// 			}, 
// 			"label1+=0.5");



// 		tl.to(
// 			".progress-bar", 
// 			{
// 				duration: 1, 
// 				width:'50%'}, 
// 				"label2"
// 			);
// 		tl.from(titles[2], 
// 			{
// 				duration: 0.5, 
// 				opacity: 0 
// 			}, 
// 			"label2+=0.5");
		


// 		tl.to(
// 			".progress-bar", 
// 			{
// 				duration: 1, 
// 				width:'75%'}, 
// 				"label3"
// 			);
// 		tl.from(titles[3], 
// 			{
// 				duration: 0.5, 
// 				opacity: 0 
// 			}, 
// 			"label3+=0.5");
		
		
// 		tl.to(
// 			".progress-bar", 
// 			{
// 				duration: 1, 
// 				width:'100%' }, 
// 				"label4"
// 			);
// 		tl.from(titles[4], 
// 			{
// 				duration: 0.5, 
// 				opacity: 0 
// 			}, 
// 			"label4+=0.5");



		new ScrollMagic
		.Scene({
		triggerElement: "#js-wrapper",
		triggerHook: "onLeave",
		duration: "150%"

		})
		.setPin("#js-wrapper")
		.setTween(tl)
		.addIndicators({
			colorTrigger: "white",
			colorStart: "white",
			colorEnd: "white"
		})
		.addTo(controller);

