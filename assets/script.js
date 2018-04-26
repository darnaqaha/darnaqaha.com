var langSwitcher = function(e) {
	if (e.value == "en") {
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
	} else if (e.value == "fr") {
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
	} else if (e.value == "ar") {
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
}