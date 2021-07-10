function closeAnim(){
	menu.classList.remove("endAnimated");
	menu.classList.remove("menu");
	menu.classList.add("disabled");
	menu.replaceWith(menu.cloneNode(true));
	menu = document.getElementById("menu");
	let hider = document.getElementById("hider");
	hider.onclick = hideMenu;
}
function hideMenu(){
	menu.classList.add("endAnimated");
	menu.addEventListener("animationend",closeAnim); 
}
function showMenu(){
	menu.classList.remove("disabled");
	menu.classList.add("menu");
	menuSwitch = true;
}
window.onload = function(){
	let menu = document.getElementById("menu");
	let hider = document.getElementById("hider");
	let trigger = document.getElementById("trigger");
	trigger.onclick = showMenu;
	hider.onclick = hideMenu;
}
