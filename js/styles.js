/* Vincent P. Van Dintel, 2016 */

/*pure js*/

//used different variable so as not to conflict with jquery $
var get = function(id) {
 return document.getElementById(id);
}

//toggle accordion
function togglePanel(panel, btn) {
	var panel = get(panel);
	panel.classList.toggle("active");
	panel.classList.toggle("show");
	var btn = get(btn);
	btn.classList.toggle("show");
	
	//display associated images in the aside
	if(panel.id == "panel1") {
		image1.classList.toggle("show");
		image2.classList.toggle("show");
		image3.classList.toggle("show");
		image4.classList.toggle("show");
	} else if (panel.id == "panel2") {
		image5.classList.toggle("show");
		image6.classList.toggle("show");
		image7.classList.toggle("show");
	} else if (panel.id == "panel3") {
		image8.classList.toggle("show");
		image9.classList.toggle("show");
		image10.classList.toggle("show");
	}
}

//display/hide contact modal on click
var mlink = get("openContactModal");
var cmodal = get("contactModal");
var mclose = get("modal-close");

mlink.onclick = function() {
    cmodal.style.display = "block";
}

mclose.onclick = function() {
    cmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == cmodal) {
        cmodal.style.display = "none";
    }
}

/* jquery */
$(function(){

	//panels only hidden if javascript is disabled
	$(".panel2").hide();
	
	//show/hide content on hover
	//used jQuery UI easing animation and hoverIntent plugin
	$(".holder").hoverIntent(function(){
		//$(this).closest(".holder").children(".panel2").slideToggle("2000","easeInOutElastic");
		$(this).children(".panel2").slideToggle("2000","easeInOutElastic");
		$(this).children(".arrow").toggleClass("arrow-reverse");
	});
	
	//display image modal on click
	$("img").click(function(){
		var imgTag = "<img id=\"imageZoom\" class=\"image-zoom\" alt=\"\" src=\"" +  $(this).prop("src") + "\">"
		$("#imageModalContent :first-child").after(imgTag)
		$("#imageModal").show();
	});
	
	//hide image modal on close button click
	$("#modal-close-img").click(function(){
		$("#imageModal").hide();
		$("#imageZoom").remove();
	});
	
	//hide image modal on outside click
	$("#imageModal").click(function(){
		$("#imageModal").hide();
		$("#imageZoom").remove();
	});
	
	//display resume modal on button click
	$("#showResume").click(function(){
		$("#resumeModal").show();
	});
	
	//hide resume modal on outside click
	$("#resumeModal").click(function(){
		$("#resumeModal").hide();
	});
	
	//animsition jquery plugin for page animations
	//css added dynamically in case javascript is disabled
	$(".container").toggleClass("animsition");
	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: '15',
		outDuration: '15',
	});
});

