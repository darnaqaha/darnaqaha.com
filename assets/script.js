var langSet = function(e) {
	localStorage.setItem('dnq_lang', e.value);
}

var langSwitcher = function() {
	e = localStorage.getItem("dnq_lang");
	if (e == "en") {
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
	} else if (e == "fr") {
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