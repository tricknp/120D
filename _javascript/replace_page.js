function replacePage(){
	window.location.replace("_pages/home.php");
}

var btn = document.getElementById('btn');
btn.addEventListener('click', replacePage);