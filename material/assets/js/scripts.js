var blogLayout = document.getElementsByClassName('mdl-layout')[0];
var cover = document.getElementsByClassName('cover')[0];
var appBar = document.getElementById('app-bar');

blogLayout.addEventListener("scroll", checkScrolled);

function checkScrolled() {
	var body = document.body;
	var scroll = blogLayout.scrollTop;
	if(scroll > 0){
		body.classList.add("scrolled");
	}
	else{
		body.classList.remove("scrolled");
	}
}

function scrollDown(){
	scrollBy(blogLayout, cover.getBoundingClientRect().bottom - appBar.offsetHeight + 1, 500);
}

function scrollTo(element, to, duration) {
	var start = element.scrollTop,
		change = to - start,
		currentTime = 0,
		increment = 16; //16ms -> 60fps (theoretically)

	var animateScroll = function(){
		currentTime += increment;
		element.scrollTop = Math.easeInOutQuad(currentTime, start, change, duration);
		if(currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}
function scrollBy(element, by, duration) {
	var start = element.scrollTop;
	scrollTo(element, start + by, duration)
}

/**
 *
 * @param t current time
 * @param b start value
 * @param c change in value
 * @param d duration
 * @returns current value
 */
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

hljs.initHighlightingOnLoad();