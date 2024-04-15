let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	let duration = Math.floor(interval / endValue);
	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});

// jquery
$(document).ready(function () {
	$(document).on("contextmenu", function (e) {
		// Prevent the default right-click menu
		e.preventDefault();
	});
});


$(document).ready(function () {
	// Scroll to bottom
	$('#scrollToBottom').click(function () {
		$('html, body').animate({ scrollTop: $(document).height() }, 'slow');
		return false;
	});

	// Scroll to top
	$('#scrollToTop').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
});

// on click event (button)
$('.btn ').click(function () {
	console.log(alert("sorry its a static web page. send me a massage i'll try to fix."));
});
