var langSwitcher = function(e) {
	if (e.value == "en") {
		Array.prototype.slice.call(document.querySelectorAll('[lang="en"]'))
			.forEach(function(element) {
				element.classList.remove('hidden');
			});
	} else if (e.value == "pl") {
		Array.prototype.slice.call(document.querySelectorAll('[lang="pl"]'))
			.forEach(function(element) {
				element.classList.remove('hidden');
			});
	}
}