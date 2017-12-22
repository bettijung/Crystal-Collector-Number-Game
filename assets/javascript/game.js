// Crystal Collector Game JavaScript ========================
// ==========================================================

// Create user's target number
	var targetNumber = Math.floor(Math.random() * 101 + 1) + 19;
	$("#number-to-guess").text(targetNumber);

// Create crystals and their counting values.
	var counter = 0;
	var wins = 0;
	var losses = 0;

	var crystalOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (var i = 0; i < 4; i++) {

		var imageCrystal = $("<img>");
		imageCrystal = $("<img>");
		imageCrystal.addClass("crystal-image");
		imageCrystal.attr("src", "assets/images/sparkling-diamond-bling-animated-gif-21.gif");
		
		imageCrystal.attr("data-crystal-value", crystalOptions[i]);

		$("#crystals").append(imageCrystal);
	}
// Make crystals working buttons that add thair values to the counter when clicked.
	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystal-value"));
		crystalValue = parseInt(crystalValue);

		counter += crystalValue;
		$("#user-total-score").text(counter);
	
	// Mark wins and losses.
		if(counter === targetNumber) {
			wins ++;
			$("#win-score").text(wins);
			resetGame();
		}
		else if(counter >= targetNumber) {
			losses ++;
			$("#lose-score").text(losses);
			resetGame();
		}

	});

// Reset game funciton.
	function resetGame() {
				counter = 0;
				imageCrystal.attr("data-crystal-value", crystalOptions[i])

		$("#crystals").append(imageCrystal);
			}










