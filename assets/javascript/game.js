// Crystal Collector Game JavaScript ========================
// ==========================================================

// Create user's target number
	var targetNumber = Math.floor(Math.random() * 101 + 1) + 19;
	$("#number-to-guess").text(targetNumber);

// Create on-click event that responds to button clicks of crystal images.
	var counter = 0;

	var crystalOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (var i = 0; i < 4; i++) {

		var imageCrystal = $("<img>");
		imageCrystal = $("<img>");
		imageCrystal.addClass("crystal-image");
		imageCrystal.attr("src", "assets/images/sparkling-diamond-bling-animated-gif-21.gif");
		
		imageCrystal.attr("data-crystal-value", crystalOptions[i])

		$("#crystals").append(imageCrystal);
	}

	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystal-value"));
		crystalValue = parseInt(crystalValue);

		counter += crystalValue;
		
		// alert("New score: " + counter);
		$("#user-total-score").text(counter);
	
	// "Check" if counter matches targetNumber.
		if(counter === targetNumber) {
			alert("You Win!");
		}
		else if(counter >= targetNumber) {
			alert("You Lose!");
		}

	});











