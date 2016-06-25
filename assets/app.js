$( document ).ready(function() {
	var animals = [
		'koala', 'panda', 'elephant', 'turtle', 'bear'
	];

	function showAnimalGifs(){

		var animal = $(this).attr('data-name');
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			console.log(queryURL);
            console.log(response)

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
            	
            	var animalDiv = $('<div>');
				var p = $('<p>').text("Rating: " + results[i].rating);
				var animalImage = $('<img>');
                
                animalImage.attr('src', results[i].images.fixed_height.url);

                animalDiv.append(p);
                animalDiv.append(animalImage);

                $('#animalGif').prepend(animalDiv);
            }
		});
	}

	function makeButtons(){ 

		$('#newButtons').empty();

		for (var i = 0; i < animals.length; i++){

		    var a = $('<button>')
		    a.addClass('animal'); 
		    a.attr('data-name', animals[i]);
		    a.text(animals[i]);
		    $('#newButtons').append(a);
		}
	}

	$('#addAnimal').on('click', function(){

		var animal = $('#animal-input').val().trim();

		animals.push(animal);
		
		makeButtons();

		return false;
	})

	$(document).on('click', '.animal', showAnimalGifs);

	makeButtons();
});