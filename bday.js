window.onload = function () {
	var currentYear = new Date().getFullYear();
	var currentMonth = new Date().getMonth() + 1;
	var currentDate = new Date().getDate();
	if (currentMonth === 5 && currentDate === 25) {
		document.getElementById('bday').innerHTML = 'Happy Birthday Notme!';
	}
};