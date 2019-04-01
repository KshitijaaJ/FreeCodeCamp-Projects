$(document).ready(function(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
		$.getJSON(('https://fcc-weather-api.glitch.me/api/current?lat=' + latitude + "&lon=" + longitude), function(json){
			$(".place").html(json.name + "," + json.sys.country);
			$(".temp").html((json.main.temp) + " " + String.fromCharCode(0186) + "C");
			$(".rht").html("<img src = \"" + json.weather[0].icon + "\" class = \" w-icon \" ><br> " + json.weather[0].main);
			var varTemp = 0;
			var cTemp = json.main.temp + " " + String.fromCharCode(0186) + "C";
			varTemp = (json.main.temp * 9/5 + 32).toFixed(2) + String.fromCharCode(0186) + "F";
			var a = 0;

	$('.temp').click(function(){
		if(a!=1){$(".temp").html(varTemp); a = 1;}
		else{$(".temp").html(cTemp); a = 0;}	

	})


		})
		});
	}

})
