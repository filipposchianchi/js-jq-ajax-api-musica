// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.

$(document).ready(function() {
	

	$.ajax({
		url : "https://flynn.boolean.careers/exercises/api/array/music",
		method : "GET",
		success : function (data) {
			var sorgente   = $("#entry-template").html();
	 		var sorgenteDigerita = Handlebars.compile(sorgente);
			for(var i =0; i<10; i++) {
				var context = {source: data.response[i].poster, title: data.response[i].title, author: data.response[i].author, year: data.response[i].year};

			var html = sorgenteDigerita(context);
			$(".my-container").append(html);
			}
			
		},
		error : function (errore) {
			alert("E' avvenuto un errore. "+errore);
		}
	});





});