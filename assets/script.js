// Setting localStorage of the selected language - used by the language switcher
var langSet = function(e) {
	localStorage.setItem('dnq_lang', e);
}

// Function run on start or change of language to show the selected language - taken from the localStorage
var langSwitcher = function() {
	e = localStorage.getItem("dnq_lang");
	if (e == "En") {
		Array.prototype.slice.call(document.querySelectorAll('[lang="en"]'))
			.forEach(function(element) {
				element.classList.remove('hidden');
			});
		Array.prototype.slice.call(document.querySelectorAll('[lang="fr"]'))
			.forEach(function(element) {
				element.classList.add('hidden');
			});
		Array.prototype.slice.call(document.querySelectorAll('[lang="ar"]'))
			.forEach(function(element) {
				element.classList.add('hidden');
			});
	} else if (e == "Fr") {
		Array.prototype.slice.call(document.querySelectorAll('[lang="en"]'))
			.forEach(function(element) {
				element.classList.add('hidden');
			});
		Array.prototype.slice.call(document.querySelectorAll('[lang="fr"]'))
			.forEach(function(element) {
				element.classList.remove('hidden');
			});
		Array.prototype.slice.call(document.querySelectorAll('[lang="ar"]'))
			.forEach(function(element) {
				element.classList.add('hidden');
			});
	} else  {
		Array.prototype.slice.call(document.querySelectorAll('[lang="en"]'))
			.forEach(function(element) {
				element.classList.add('hidden');
			});
		Array.prototype.slice.call(document.querySelectorAll('[lang="fr"]'))
			.forEach(function(element) {
				element.classList.add('hidden');
			});
		Array.prototype.slice.call(document.querySelectorAll('[lang="ar"]'))
			.forEach(function(element) {
				element.classList.remove('hidden');
			});
	}
	console.log("Language picked: " + e);
}
document.addEventListener('DOMContentLoaded', langSwitcher(), false);

// Arabic font to all Arabic texts
Array.prototype.slice.call(document.querySelectorAll('[lang="ar"]'))
	.forEach(function(element) {
		element.classList.add('arabic');
	});

// Mobile nav open-close
var mobNavToggle = function() {
	document.getElementById('mobNav').classList.toggle('mob-nav-open');
	document.getElementById('body').classList.toggle('scroll-lock');
	document.getElementById('hero').classList.toggle('hidden');
}