const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", this.window.scrollY > 0);
});

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
});

sr.reveal('.home-text',{ delay:190, origin:'bottom' })

sr.reveal('.home,.about,.services,.projects,.contacts', { delay:200, origin:'bottom' })

onNavigated = () => {
	changeNavNarVisibility(true);
}

toggleNavBar = () => {
	const visibility = document.getElementById("nav-bar").style.visibility;
	changeNavNarVisibility(visibility === 'visible');
};

window.onorientationchange = (event) => {
	const screenSize = event.target.screen.orientation.angle;
	changeNavNarVisibility(screenSize === 0);
};

changeNavNarVisibility = (expression) => {
	document.getElementById("nav-bar").style.visibility = expression ? 'hidden' : 'visible';
}
