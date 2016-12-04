window.onload = function() {

		var fileInput = document.getElementById('fileInput');
		//var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;
            alert( 'hei2 '   ); // hvor fikse globale variabler??
			if (file.type.match(textType)) {

				var reader = new FileReader();

				reader.onload = function(e) {
					//fileDisplayArea.innerText = reader.result;
					newBarChart = new THREEGRAPHS.BarChart ( reader.result );
                    newBarChart.init();
				}

				reader.readAsText(file);
			} else {
				fileDisplayArea.innerText = "File not supported!";
			}
		});
}
