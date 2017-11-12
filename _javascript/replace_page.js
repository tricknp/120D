function replacePage(){
	window.location.replace("_pages/home.html");
}

var btn = document.getElementById('btn');
btn.addEventListener('click', replacePage);