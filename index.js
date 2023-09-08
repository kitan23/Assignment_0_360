const button = document.getElementById("button");
button.addEventListener("click", themeToggle);

function themeToggle() {
	var container = document.getElementById("container");
	if (container.classList.contains("dark-theme")) {
		container.classList.remove("dark-theme");
		container.classList.add("light-theme");
	} else {
		container.classList.remove("light-theme");
		container.classList.add("dark-theme");
	}

	var button = document.getElementById("button");
	if (button.classList.contains("dark-theme")) {
		button.classList.remove("dark-theme");
		button.classList.add("light-theme");
	} else {
		button.classList.remove("light-theme");
		button.classList.add("dark-theme");
	}
}
