//URL ARRAYS
//array of level 1 background images
var bGLvl1 = ["url('images/lvl1-0.png')", "url('images/lvl1-1.png')", "url('images/lvl1-2.png')"];
//array of level 2 background images
var bGLvl2 = ["url('images/lvl2-0.png')", "url('images/lvl2-1.png')", "url('images/lvl2-2.png')"];
//array of level 3 background images
var bGLvl3 = ["url('images/lvl3-0.png')",  "url('images/lvl3-1.png')", "url('images/lvl3-2.png')"];
//array of level 4 background images
var bGLvl4 = ["url('images/lvl4-0.png')", "url('images/lvl4-1.png')", "url('images/lvl4-2.png')"];
//holds the urls for the explosion animation
var explosionArray = ['images/Explosion/explosion00.png',
	'images/Explosion/explosion01.png',
	'images/Explosion/explosion02.png',
	'images/Explosion/explosion03.png',
	'images/Explosion/explosion04.png',
	'images/Explosion/explosion05.png',
	'images/Explosion/explosion06.png',
	'images/Explosion/explosion07.png',
	'images/Explosion/explosion08.png'
];

//INTEGER VARIABLES
var side = 1; //keeps track of what side of screen player is looking at
var hasPick = false; //does the player have the pickaxe?
var hasShovel = false; //does the player have the shovel?
var hasAxe = false; //does the player have the axe?
var monologCount = 0; //counts what page of the monolog the wizard is at
var toolSelect = -1; //keeps track of what tool is selected at any time
var startTime; //start time for the wizard smoke effect
var startSeconds; //start seconds for the wizard smoke effect
var myVar; //sets the intervals for the myTimer function
var random;//stores which crate has the compass in it
var riddle; //stores which riddle to give player
var fightStarted = false; //has the user initiated the wizard fight
var wizardHit = 0;//stores how many times the wizard has been hit
var ending = 0; //stores what ending image the player is on

//sounds
var clickSound; //a click sound for buttons
var breakSound; //a breaking sound for the wizard targets
var latchSound; //metal latch sound
var wizardBackground; //the wizards background music
var creakSound; //a creak sound
var knifeSlice; //knife slice sound
var knifeSlice2; //second knife slice sound
var drawKnife1; //drawing knife sound
var drawKnife2;
var drawKnife3;
var foundHorse; //music for when you find the horse
var teddy; //music for the ending screen;
var mummy; //music for the chimera

//randomly chooses knife sound to player
function randomKnife () {
	rand = Math.floor((Math.random()* 3) + 1);
	switch (rand) {
		case 1:
			drawKnife1.play();
			break;

		case 2:
			drawKnife2.play();
			break;

		case 3:
			drawKnife3.play();
			break;
	}//switch
}//randomKnife



//INTRO
//takes user to the instruction page
function welcome () {
	location.href = "menu.html";
} //welcome

//takes the user to the instruction page
function startInstruc () {
	location.href = "instructions.html";
}//startInstruc

//takes the user back to the menu
function endInstruc () {
	location.href = "menu.html";
} //endInstruc

//takes player to level 1
function lvl1 () {
	location.href = "lvl1.html";
}

//takes user to the credits page
function credits () {
	location.href = "credits.html";
}



//LEVEL 1
//starts the first screen of the game
function beginGame () {
	screen = document.getElementById('screen');
	screen.style.backgroundImage = bGLvl1[1];
	clickSound = new sound("sound/click.mp3");
	latchSound = new sound('sound/latch.mp3');
	creakSound = new sound('sound/creak.mp3');
	drawKnife1 = new sound('sound/drawKnife1.mp3');
	drawKnife2 = new sound('sound/drawKnife2.mp3');
	drawKnife3 = new sound('sound/drawKnife3.mp3');
	lvl0Hide(1);
	document.getElementById('lvl1-pickaxe-side1').style.display = 'none';
	document.getElementById('lvl1-pickaxe-side2').style.display = 'none';
	document.getElementById('lvl1-hammer-side0').style.display = 'none';
	document.getElementById('lvl1-shovel-side2').style.display = 'none';
	document.getElementById('lvl1-sledgeHammer-side0').style.display = 'none';
	document.getElementById('lvl1-sledgeHammer-side1').style.display = 'none';
	document.getElementById('lvl1-wrench-side2').style.display = 'none';
	document.getElementById('lvl1-saw-side1').style.display = 'none';
	document.getElementById('lvl1-saw-side2').style.display = 'none';
	document.getElementById('lvl1-axe-side1').style.display = 'none';
	document.getElementById('lvl1-axe-side2').style.display = 'none';
	document.getElementById('slot1Img').style.backgroundImage =
		"url('images/sprites/pickaxeDark.png')";
	document.getElementById('slot2Img').style.backgroundImage =
		"url('images/sprites/axeDark.png')";
	document.getElementById('slot3Img').style.backgroundImage =
		"url('images/sprites/shovelDark.png')";
}//beginGame

//turns the player left and right on level 1
function turnLvl1 (direction) {
	screen = document.getElementById('screen');
	switch (direction) {
		case 'r':
			clickSound.play();
			if (side === 0) {
				screen.style.backgroundImage = bGLvl1[1];
				side = 1;
				lvl1Hide(1);
			} else if (side === 1) {
				screen.style.backgroundImage = bGLvl1[2];
				side = 2;
				lvl1Hide(2);
			}//else if
			break;

		case 'l':
			clickSound.play();
			if (side === 2) {
				screen.style.backgroundImage = bGLvl1[1];
				side = 1;
				lvl1Hide(1);
			} else if (side === 1) {
				screen.style.backgroundImage = bGLvl1[0];
				side = 0;
				lvl1Hide(0);
			}//else if
			break;

			default:
				break;
	}//switch
}//turnLvl1

//turns the player to the right on lvl 0
function rightBasic () {
	screen = document.getElementById('screen');
	if (side === 0) {
		clickSound.play();
		screen.style.backgroundImage = bGLvl1[1];
		side = 1;
		lvl0Hide(1);
	} else if (side === 1) {
		clickSound.play();
		screen.style.backgroundImage = bGLvl1[2];
		side = 2;
		lvl0Hide(2);
	}//else if
}//right

//turns the player to the left on lvl 0
function leftBasic () {
	screen = document.getElementById('screen');
	if (side === 2) {
		clickSound.play();
		screen.style.backgroundImage = bGLvl1[1];
		side = 1;
		lvl0Hide(1);
	} else if (side === 1) {
		clickSound.play();
		screen.style.backgroundImage = bGLvl1[0];
		side = 0;
		lvl0Hide(0);
	}//else if
} //left

//takes player to window background
function seeWindow () {
	latchSound.play();
	document.getElementById('screen').style.backgroundImage = "url('images/window.png')";
	document.getElementById('window').style.display = 'none';
	document.getElementById('goRight1').style.display = 'none';
	document.getElementById('goLeft1').style.display = 'none';
	document.getElementById('goalText').innerHTML = "";
	document.getElementById('toBarn').style.display = "block";
	document.getElementById('topBar').style.display = 'block'
}

//takes player back to the barn
function back2Barn () {
	clickSound.play();
	document.getElementById('goRight2').style.display = 'block';
	document.getElementById('goLeft2').style.display = 'block';
	document.getElementById('screen').style.backgroundImage = bGLvl1[2];
	document.getElementById('toBarn').style.display = "none";
	document.getElementById('topBar').style.display = 'none'
	document.getElementById('slot1').style.display = 'block';
	document.getElementById('slot2').style.display = 'block';
	document.getElementById('slot3').style.display = 'block';
	document.getElementById('slot1Img').style.display = 'block';
	document.getElementById('slot2Img').style.display = 'block';
	document.getElementById('slot3Img').style.display = 'block';
	document.getElementById('goalText').innerHTML = "Find all the tools you will need <br>" +
	"to rescue the horse!!!";
	side = 2;
	lvl1Hide(2);
}//back to Barn


//masks items in lvl 0
function lvl0Hide(num) {
	windowSide2 = document.getElementById('window');

	if (num === 1) {
		windowSide2.style.display = 'none';
	} else if (num === 2) {
		windowSide2.style.display = 'block';
	} else if (num === 0) {
		windowSide2.style.display = 'none';
	}//else if
}//lvl0Hide


//masks items in lvl 1
function lvl1Hide (num) {
	pickaxeSide1 = document.getElementById('lvl1-pickaxe-side1');
	pickaxeSide2 = document.getElementById('lvl1-pickaxe-side2');
	hammerSide0 = document.getElementById('lvl1-hammer-side0');
	shovelSide2 = document.getElementById('lvl1-shovel-side2');
	sledgeHammerSide0 = document.getElementById('lvl1-sledgeHammer-side0');
	sledgeHammerSide1 = document.getElementById('lvl1-sledgeHammer-side1');
	wrenchSide2 = document.getElementById('lvl1-wrench-side2');
	sawSide1 = document.getElementById('lvl1-saw-side1');
	sawSide2 = document.getElementById('lvl1-saw-side2');
	axeSide1 = document.getElementById('lvl1-axe-side1');
	axeSide2 = document.getElementById('lvl1-axe-side2');
	barn = document.getElementById('outBarn');

	if(num === 1) {
		pickaxeSide1.style.display = 'block';
		pickaxeSide2.style.display = 'none';
		hammerSide0.style.display = 'none';
		shovelSide2.style.display = 'none';
		sledgeHammerSide0.style.display = 'none';
		sledgeHammerSide1.style.display = 'block';
		wrenchSide2.style.display = 'none';
		sawSide1.style.display = 'block';
		sawSide2.style.display = 'none';
		axeSide1.style.display = 'block';
		axeSide2.style.display = 'none';
		if (hasShovel === true && hasPick == true && hasAxe === true) {
			barn.style.display = 'block';
			barn.style.width = '15%';
		}//if
	} else if (num === 2) {
		pickaxeSide1.style.display = 'none';
		pickaxeSide2.style.display = 'block';
		hammerSide0.style.display = 'none';
		shovelSide2.style.display = 'block';
		sledgeHammerSide0.style.display = 'none';
		sledgeHammerSide1.style.display = 'none';
		wrenchSide2.style.display = 'block';
		sawSide1.style.display = 'none';
		sawSide2.style.display = 'block';
		axeSide1.style.display = 'none';
		axeSide2.style.display = 'block';
		barn.style.display = 'none';
	} else if (num === 0) {
		pickaxeSide1.style.display = 'none';
		pickaxeSide2.style.display = 'none';
		hammerSide0.style.display = 'block';
		shovelSide2.style.display = 'none';
		sledgeHammerSide0.style.display = 'block';
		sledgeHammerSide1.style.display = 'none';
		wrenchSide2.style.display = 'none';
		sawSide1.style.display = 'none';
		sawSide2.style.display = 'none';
		axeSide1.style.display = 'none';
		axeSide2.style.display = 'none';
		if (hasShovel === true && hasPick == true && hasAxe === true) {
			barn.style.display = 'block';
			barn.style.width = '65%';
		}//if
	} else {
		pickaxeSide1.style.display = 'none';
		pickaxeSide2.style.display = 'none';
		hammerSide0.style.display = 'none';
		shovelSide2.style.display = 'none';
		sledgeHammerSide0.style.display = 'none';
		sledgeHammerSide1.style.display = 'none';
		wrenchSide2.style.display = 'none';
		sawSide1.style.display = 'none';
		sawSide2.style.display = 'none';
		axeSide1.style.display = 'none';
		axeSide2.style.display = 'none';
		barn.style.display = 'none';
	}//else if
}//lvl1Hide

//puts items into inventory on lvl 1
function foundItemLvl1 (thing) {
	randomKnife();
	switch (thing) {
		case 'a':
			document.getElementById('lvl1-pickaxe-side1')
				.setAttribute('src', 'images/sprites/pickaxeDark.png');
			document.getElementById('lvl1-pickaxe-side2')
				.setAttribute('src', 'images/sprites/pickaxeDark.png');
			document.getElementById('slot1Img')
				.style.backgroundImage = "url('images/sprites/pickaxe.png')";
			hasPick = true;
			break;

		case 'b':
			document.getElementById('lvl1-axe-side1')
				.setAttribute('src', 'images/sprites/axeDark.png');
			document.getElementById('lvl1-axe-side2')
				.setAttribute('src', 'images/sprites/axeDark.png');
			document.getElementById('slot2Img')
				.style.backgroundImage = "url('images/sprites/axe.png')";
			hasAxe = true;
			break;

		case 'c':
			document.getElementById('lvl1-shovel-side2')
				.setAttribute('src', 'images/sprites/shovelDark.png');
			document.getElementById('slot3Img')
				.style.backgroundImage = "url('images/sprites/shovel.png')";
			hasShovel = true;
			break;
	}//switch

	if (hasShovel === true && hasPick == true && hasAxe === true) {
		document.getElementById('goalText').innerHTML = "<b>Now get out of the Barn!!</b>";
	}//if
}//foundItemLvl1

//transfers player to leaving barn scene
function getOutOfBarn () {
	creakSound.play();
	document.getElementById('screen').style.backgroundImage = "url('images/barnOpenBG0.png')";
	bar = document.getElementById('topBar');
	bar.style.display = 'block';
	bar.innerHTML = "<br><h1>Level 1 Complete</h1><br><h2>Now go rescue Bucephalus!!!</h2><br>";
	document.getElementById('goalText').innerHTML = "";
	document.getElementById('goTo2').style.display = 'block';
	document.getElementById('goRight2').style.display = 'none';
	document.getElementById('goLeft2').style.display = 'none';
	lvl1Hide(3);
}//getOutOfBarn

//changes iframe src to lvl2.html
function lvl2 () {
	location.href = "lvl2.html";
}//lvl2




//LEVEL 2
//loads level 2
function beginLvl2 () {
	document.getElementById('screen').style.backgroundImage = bGLvl2[1];
	document.getElementById('slot1').style.display = 'block';
	document.getElementById('slot2').style.display = 'block';
	document.getElementById('slot3').style.display = 'block';
	document.getElementById('goRight2').style.display = 'none';
	document.getElementById('goLeft2').style.display = 'none';
	document.getElementById('topBar').style.display = 'block';
	num = 1;
	wizardBackground = new sound("sound/wizardBGM.mp3");
	clickSound = new sound("sound/click.mp3");
	knifeSlice = new sound('sound/knifeSlice.mp3');
	knifeSlice2 = new sound('sound/knifeSlice2.mp3');
	drawKnife1 = new sound('sound/drawKnife1.mp3');
	drawKnife2 = new sound('sound/drawKnife2.mp3');
	drawKnife3 = new sound('sound/drawKnife3.mp3');
	wizardBackground.play();
	lvl2Hide(num);
	random = Math.floor(Math.random() * 9);
}//beginLvl2

//goes through the wizards monolog
function wizardMonolog () {
	text = document.getElementById('monolog');

	switch (monologCount) {
		case 0:
			text.innerHTML = "<h1>Are You Even Listening???...</h1><hr><h4>Click anywhere...</h4>";
			monologCount++;
			console.log(monologCount);
			break;
		case 1:
			text.innerHTML = "<h2>All you have to know is that you'll<br>never get your horse " +
				"back!...</h2><hr><h4>Click anywhere...</h4>";
			monologCount++;
			break;

		case 2:
			text.innerHTML = "<h1>You don't even know what <br>direction my castle is" +
				"!...</h1><hr><h4>click anywhere...</h4>";
			monologCount++;
			break;

		case 3:
			text.innerHTML = "<h1>HA HA HA HA HA...<br></h1>";
			startTimer();
			monologCount++;
			break;

		case 4:
			break;
	}//switch
}//wizardMonolog

//starts the animation timer for the smoke effect
function startTimer() {
    startTime = new Date();
    startSeconds = startTime.getTime();
    myVar = setInterval(function(){myTimer()},10);
}//startTimer

//executes the animation of the smoke effect
function myTimer() {
    var d = new Date();
    animation = document.getElementById('explosion');
		wizard = document.getElementById('Wizard-Lvl2');
	// changes the src of the img tag to the different images every couple of milliseconds
    if (d.getTime() - startSeconds >= 400) animation.style.display = 'block';
    if (d.getTime() - startSeconds >= 800) animation.setAttribute('src', explosionArray[1]);
		if (d.getTime() - startSeconds >= 800) wizard.style.display = 'none';
		if (d.getTime() - startSeconds >= 1200) animation.setAttribute('src', explosionArray[2]);
		if (d.getTime() - startSeconds >= 1600) animation.setAttribute('src', explosionArray[3]);
		if (d.getTime() - startSeconds >= 2000) animation.setAttribute('src', explosionArray[4]);
		if (d.getTime() - startSeconds >= 2800) animation.style.display = 'none';
		if (d.getTime() - startSeconds >= 3200) {
			document.getElementById('topBar').style.display = 'none';
			document.getElementById('goLeft2').style.display = 'block';
			document.getElementById('goRight2').style.display = 'block';
			stopTimer();
		}//if
}//myTimer

//stops the animation/timer function
function stopTimer() {
    clearInterval(myVar);
		wizardBackground.stop();
		document.getElementById('goalText').innerHTML = "Find a <b>Compass<br>" +
			"Remember: You have tools</b>";
}//stopTimer

//turns player left and right on lvl2
function turnLvl2 (direction) {
	screen = document.getElementById('screen');
	switch (direction) {
		case 'r':
			clickSound.play();
			if (side === 0) {
				screen.style.backgroundImage = bGLvl2[1];
				side = 1;
				lvl2Hide(1);
			} else if (side === 1) {
				screen.style.backgroundImage = bGLvl2[2];
				side = 2;
				lvl2Hide(2);
			}//else if
			break;

		case 'l':
			clickSound.play();
			if (side === 2) {
				screen.style.backgroundImage = bGLvl2[1];
				side = 1;
				lvl2Hide(1);
			} else if (side === 1) {
				screen.style.backgroundImage = bGLvl2[0];
				side = 0;
				lvl2Hide(0);
			}//else if
			break;
	}//switch
}//turnLvl2

//hides and unhides items as player's head turns
function lvl2Hide (num) {
	crate0Side0 = document.getElementById('crate-00');
	crate1Side0 = document.getElementById('crate-01');
	crate2Side0 = document.getElementById('crate-02');
	crate0Side1 = document.getElementById('crate-10');
	crate1Side1 = document.getElementById('crate-11');
	crate2Side1 = document.getElementById('crate-12');
	crate0Side2 = document.getElementById('crate-20');
	crate1Side2 = document.getElementById('crate-21');
	crate2Side2 = document.getElementById('crate-22');
	crate02Side1 = document.getElementById('crate-02-Side1');
	crate11Side0 = document.getElementById('crate-11-Side0');
	crate10Side2 = document.getElementById('crate-10-Side2');
	crate12Side2 = document.getElementById('crate-12-Side2');

	switch (num) {
		case 0:
			crate0Side0.style.display = 'block';
			crate1Side0.style.display = 'block';
			crate2Side0.style.display = 'block';
			crate0Side1.style.display = 'none';
			crate1Side1.style.display = 'none';
			crate2Side1.style.display = 'none';
			crate0Side2.style.display = 'none';
			crate1Side2.style.display = 'none';
			crate2Side2.style.display = 'none';
			crate02Side1.style.display = 'none';
			crate11Side0.style.display = 'block';
			crate12Side2.style.display = 'none';
			crate10Side2.style.display = 'none';
			break;

		case 1:
			crate0Side0.style.display = 'none';
			crate1Side0.style.display = 'none';
			crate2Side0.style.display = 'none';
			crate0Side1.style.display = 'block';
			crate1Side1.style.display = 'block';
			crate2Side1.style.display = 'block';
			crate0Side2.style.display = 'none';
			crate1Side2.style.display = 'none';
			crate2Side2.style.display = 'none';
			crate02Side1.style.display = 'block';
			crate11Side0.style.display = 'none';
			crate12Side2.style.display = 'none';
			crate10Side2.style.display = 'none';
			break;

		case 2:
		crate0Side0.style.display = 'none';
		crate1Side0.style.display = 'none';
		crate2Side0.style.display = 'none';
		crate0Side1.style.display = 'none';
		crate1Side1.style.display = 'none';
		crate2Side1.style.display = 'none';
		crate0Side2.style.display = 'block';
		crate1Side2.style.display = 'block';
		crate2Side2.style.display = 'block';
		crate02Side1.style.display = 'none';
		crate11Side0.style.display = 'none';
		crate12Side2.style.display = 'block';
		crate10Side2.style.display = 'block';
			break;
	}//switch
}//lvl2Hide

//selects the axe so the player can break crates
function toolChoice (tool) {
	slot2 = document.getElementById('slot2');
	slot1 = document.getElementById('slot1');
	slot3 = document.getElementById('slot3');
	body = document.getElementById('screen');
	randomKnife();
	if (tool === 0) {
		if (toolSelect === 0) {
			toolSelect = -1;
			slot2.style.backgroundImage = "url('images/slot.png')";
			body.style.cursor = "url('images/cursor.png'), auto";
		} else {
			toolSelect = 0;
			slot2.style.backgroundImage = "url('images/slotDown.png')";
			slot1.style.backgroundImage = "url('images/slot.png')";
			slot3.style.backgroundImage = "url('images/slot.png')";
			body.style.cursor = "url('images/axeCursor.png'), auto";
		}//else if
	} else if (tool === 1) {
		if (toolSelect === 1) {
			toolSelect = -1;
			slot1.style.backgroundImage = "url('images/slot.png')";
			body.style.cursor = "url('images/cursor.png'), auto";
		} else {
			toolSelect = 1;
			slot1.style.backgroundImage = "url('images/slotDown.png')";
			slot3.style.backgroundImage = "url('images/slot.png')";
			slot2.style.backgroundImage = "url('images/slot.png')";
			body.style.cursor = "url('images/pickaxeCursor.png'), auto";
			console.log("pick");
		}//else if
	} else if (tool === 2) {
			if (toolSelect === 2) {
				toolSelect = -1;
				slot3.style.backgroundImage = "url('images/slot.png')";
				body.style.cursor = "url('images/cursor.png'), auto";
			} else {
				toolSelect = 2;
				slot3.style.backgroundImage = "url('images/slotDown.png')";
				slot2.style.backgroundImage = "url('images/slot.png')";
				slot1.style.backgroundImage = "url('images/slot.png')";
				body.style.cursor = "url('images/shovelCursor.png'), auto";
				console.log('shovel');
			}//else if
	} else {
		toolSelect = -1;
		body.style.cursor = "url('images/cursor.png')";
	}//else if
}//selectAxe

//breaks open crates to randomly find the compass
function breakCrate (input) {
	if (toolSelect === 0) {
		rand = Math.floor((Math.random() * 2) + 1);
		switch (rand) {
			case 1:
				knifeSlice.play();
				break;

			case 2:
				knifeSlice2.play();
				break;
		}//switch
		switch (input) {
			case 0:
				document.getElementById('crate-00').classList.add("hidden");
				break;

			case 1:
				document.getElementById('crate-01').classList.add("hidden");
				break;

			case 2:
				document.getElementById('crate-02').classList.add("hidden");
				document.getElementById('crate-02-Side1').classList.add("hidden");
				break;

			case 3:
				document.getElementById('crate-10').classList.add("hidden");
				document.getElementById('crate-10-Side2').classList.add("hidden");
				break;

			case 4:
				document.getElementById('crate-11').classList.add("hidden");
				document.getElementById('crate-11-Side0').classList.add("hidden");
				break;

			case 5:
				document.getElementById('crate-12').classList.add("hidden");
				document.getElementById('crate-12-Side2').classList.add("hidden");
				break;

			case 6:
				document.getElementById('crate-20').classList.add("hidden");
				break;

			case 7:
				document.getElementById('crate-21').classList.add("hidden");
				break;

			case 8:
				document.getElementById('crate-22').classList.add("hidden");
				break;
		}//switch

		if (random === input) {
			foundCompass();
		}//if
	}//if
}//breakCrate


function foundCompass () {
	toolSelect = -1;
	document.getElementById('slot2').style.backgroundImage = "url('images/slot.png')";
	document.body.style.cursor = "url('images/cursor.png'), auto";
	topBar = document.getElementById('topBar').style.display = 'block';
	document.getElementById('monolog').innerHTML = "<h1>You Found the Compass!<br>" +
		"Now you can find your way to the Wizard's Castle</h1>";
	document.getElementById('lightbox').style.display = "block";
	document.getElementById('compass').style.display = 'block';
	document.getElementById('goalText').innerHTML = '';
	document.getElementById('lvl3').style.display = 'block';
}//foundCompass

//changes iframe src to lvl3.html
function lvl3 () {
	location.href = "lvl3.html";
}//lvl3



//LEVEL 3
//loads assets for level 3
function beginLvl3 () {
	screen = document.getElementById('screen');
	screen.style.backgroundImage = bGLvl3[1];
	clickSound = new sound("sound/click.mp3");
	drawKnife1 = new sound('sound/drawKnife1.mp3');
	drawKnife2 = new sound('sound/drawKnife2.mp3');
	drawKnife3 = new sound('sound/drawKnife3.mp3');
	mummy = new sound('sound/mummy.mp3');
	document.getElementById('goRight2').style.display = 'none';
	document.getElementById('goLeft2').style.display = 'none';
	document.getElementById('chimera').style.display = 'none';
	document.getElementById('slot1').style.display = 'block';
	document.getElementById('slot2').style.display = 'block';
	document.getElementById('slot3').style.display = 'block';
	document.getElementById('topBar').style.display = 'block';
	document.getElementById('monolog').innerHTML = "<h2>You're close so to the wizard's " +
		"castle<br>If you can find your way through<br>the forest you can find the castle!</h2>" +
		"<hr><h4>Click anywhere to continue...</h4>";
	lvl3Hide(1);
}//beginlvl3

//turns the player left and right on level 3
function turnLvl3 (direction) {
	screen = document.getElementById('screen');
	switch (direction) {
		case 'r':
			clickSound.play();
			if (side === 0) {
				screen.style.backgroundImage = bGLvl3[1];
				side = 1;
				lvl3Hide(1);
			} else if (side === 1) {
				screen.style.backgroundImage = bGLvl3[2];
				side = 2;
				lvl3Hide(2);
				sphinx();
			}//else if
			break;

		case 'l':
			clickSound.play();
			if (side === 2) {
				screen.style.backgroundImage = bGLvl3[1];
				side = 1;
				lvl3Hide(1);
			} else if (side === 1) {
				screen.style.backgroundImage = bGLvl3[0];
				side = 0;
				lvl3Hide(0);
			}//else if
			break;

			default:
				break;
	}//switch
}//turnLvl3

//hides assets on level 3
function lvl3Hide (side) {
	chimera = document.getElementById('chimera');
	door = document.getElementById('door');
	switch (side) {
		case 0:
			chimera.style.display = 'none';
			door.style.display = 'none';
			break;

		case 1:
			chimera.style.display = 'none';
			door.style.display = 'none';
			break;

		case 2:
			chimera.style.display = 'block';
			door.style.display = 'block';
			document.getElementById('goRight2').style.display = 'none';
			document.getElementById('goLeft2').style.display = 'none';
			break;
	}//switch
}//lvl3Hide

//closes the top bar after level is done loading
function closeTopBar () {
	topBar = document.getElementById('topBar');
	monolog = document.getElementById('monolog');
	buttons = document.getElementsByClassName('answer');
	switch (monologCount) {
		case 0:
			topBar.style.display = 'none';
			document.getElementById('goRight2').style.display = 'block';
			document.getElementById('goLeft2').style.display = 'block';
			document.getElementById('goalText').innerHTML =
				"<b>Find a way out<br> of the forest<b>";
			monologCount++;
			break;

		case 2:
			document.getElementById('goRight2').style.display = 'none';
			document.getElementById('goLeft2').style.display = 'none';
			monolog.innerHTML = "<h1>Welcome adventurer,</h1><h3> I see you want to find " +
				"my master.<br>Well you can stop on your futile quest, for if you <br>" +
				"want to get past me you'll have to answer<br> a riddle. If you fail" +
				" I send you back to the beginning!<hr>Click anywhere to continue</h3>";
			mummy.loop();
			mummy.play();
			monologCount++;
			break;
			
		case 3:
			monologCount++;
			break;

		case 4:
			monologCount++;
			switch(riddle) {
				case 1:
					monolog.innerHTML = "<h3>There is one father and twelve children; of these " +
						"each<br>Has twice thirty daughters of different appearance:<br>" +
						"Some are white to look at and the others black in turn;<br>" +
						"They are immortal and yet they all fade away<br>" +
						"What are they?</h3>";
					for (i = 0; i < buttons.length; i++) {
						buttons[i].style.display = 'block';
					}//for
					buttons[0].innerHTML = "The Year and its days and nights";
					buttons[1].innerHTML = "A family in the middle of Alabama";
					buttons[2].innerHTML = "The Greek pantheon";
					break;

				case 2:
					monolog.innerHTML = "<h3>I am a black child sprung from a bright sire,<br>" +
						"A wingless bird, fleeting to heaven from earth.<br>" +
						"Each eye that meets me weeps, but not from grief,<br>" +
						"And in thin air I vanish at my birth.</h3>";
					for (i = 0; i < buttons.length; i++) {
						buttons[i].style.display = 'block';
					}//for
					buttons[0].innerHTML = "Rock";
					buttons[1].innerHTML = "Smoke";
					buttons[2].innerHTML = "Onions";
					break;

				case 3:
					monolog.innerHTML = "<h3>Voiceless it cries,<br>" +
						"Wingless flutters,<br>" +
						"Toothless bites,<br>" +
						"Mouthless mutters.<h3>";
					for (i = 0; i < buttons.length; i++) {
						buttons[i].style.display = 'block';
					}//for
					buttons[0].innerHTML = "A Man without teeth or voice";
					buttons[1].innerHTML = "A baby";
					buttons[2].innerHTML = "The Wind";
					break;
			}//switch
			break;

		default:
			break;
	}//switch
}//closeTopBar

//runs the riddles
function sphinx () {
	topBar = document.getElementById('topBar').style.display = 'block';
	document.getElementById('monolog').innerHTML = "";
	riddle = Math.floor((Math.random() * 3) + 1);
	console.log(riddle);
	monologCount++;
	closeTopBar();
}//sphinx

//analyses the answers
function answered (x) {
	switch (riddle) {
	//riddle one
		case 1:
			switch (x) {
				case 1:
					correct();
					break;

				case 2:
					wrong();
					break;

				case 3:
					wrong();
					break;
			}//switch
			break;

	//riddle two
		case 2:
			switch (x) {
				case 1:
					wrong();
					break;

				case 2:
					correct();
					break;

				case 3:
					wrong();
					break;
			}//switch

	//riddle three
		case 3:
			switch (x) {
				case 1:
					wrong();
					break;

				case 2:
					wrong();
					break;

				case 3:
					correct();
					break;
			}//switch
	}//switch
}//answered

//puts player to lvl4 if answer to riddle is correct
function correct () {
	clickSound.play();
	document.getElementById('monolog').innerHTML =
		"<h1>You Have Bested Me</h1>" +
		"<h3><br>You may now proceed to my master";
	button = document.getElementsByClassName('answer');
	document.getElementById('goalText').innerHTML = "";
	document.getElementById('lvl4GoTo').style.display = 'block';

	for (i = 0; i < button.length; i++) {
		button[i].style.display = 'none';
	}//for

}//correct

//puts player back to start if they answer the riddle wrong
function wrong () {
	clickSound.play();
	document.getElementById('monolog').innerHTML =
		"<h1>You have been defeated<br>Back to the barn with you!!!</h1>";
	document.getElementById('lvl4GoTo').style.display = 'none';
	document.getElementById('goalText').style.display = 'none';

	button = document.getElementsByClassName('answer');
	for (i = 0; i < button.length; i++) {
		button[i].style.display = 'none';
	}//for

	lightbox = document.getElementById('lightbox');
	lightbox.style.display = 'block';
	lightbox.style.backgroundColor = "rgba(256, 0, 0, 0.8)";
	document.getElementById("fail").style.display = 'block';

}//wrong

//loads level 4
function lvl4 () {
	location.href = "lvl4.html";
}



//LEVEL 4
//loads level 4
function beginLvl4() {
	document.getElementById('screen').style.backgroundImage = bGLvl4[1];
	side = 1;
	clickSound = new sound("sound/click.mp3");
	breakSound = new sound('sound/break.mp3');
	wizardBGM = new sound('sound/wizardBGM.mp3');
	drawKnife1 = new sound('sound/drawKnife1.mp3');
	drawKnife2 = new sound('sound/drawKnife2.mp3');
	drawKnife3 = new sound('sound/drawKnife3.mp3');
	foundHorse = new sound('sound/foundHorse.mp3');
	wizardBGM.play();
	wizardBGM.loop();
	document.getElementById('topBar').style.display = 'block';
	document.getElementById('slot1').style.display = 'block';
	document.getElementById('slot2').style.display = 'block';
	document.getElementById('slot3').style.display = 'block';
}//beginLvl4

//takes keydown event and if user has not started fight starts combat
function startFight () {
	monolog = document.getElementById('monolog');
	if (fightStarted === false) {
		combat();
		fightStarted = true;
		document.getElementById('topBar').style.display = 'none';
		document.getElementById('healthBar').style.display = 'block';
		document.getElementById('targetDiv').style.display = 'block';
	}//if

	switch (monologCount) {
		case 1:
			monologCount++;
			break;
			
		case 2:
			document.getElementById('horse').style.display = 'block';
			foundHorse.play();
			monolog.innerHTML = "<h2>Here is Bucephalus, may you serve him well</h2>" +
				"<hr><h3>Click anywhere to continue</h3>";
			monologCount++;
			break;

		case 3:
			monolog.innerHTML = "<h1>Congratulations, you won</h1>" +
				"<hr><h2>Click anywhere to be taken back to the menu...</h2>";
			monologCount++;
			break;

		case 4:
			location.href = "happyEnding.html";
			break;
	}//switch
}//startFight

//starts combat
function combat () {
	startCombatTimer();
}//combat

//starts the combat timer
function startCombatTimer () {
    startTime = new Date();
    startSeconds = startTime.getTime();
    myVar = setInterval(function(){combatTimer()},1);
}//startTimer

//executes the animation of the smoke effect
function combatTimer () {
    var d = new Date();
		target1 = document.getElementById('target-1');
		target2 = document.getElementById('target-2');
		target3 = document.getElementById('target-3');
		target4 = document.getElementById('target-4');
		target5 = document.getElementById('target-5');
		console.log((d.getTime() - startSeconds) / 1000);
	//turns targets visible to invisible
    if (((d.getTime() - startSeconds) / 1000) >= 1) target1.style.display = 'block';
    if (((d.getTime() - startSeconds) / 1000) >= 2) target1.style.display = 'none';
    if (((d.getTime() - startSeconds) / 1000) >= 2) target2.style.display = 'block';
    if (((d.getTime() - startSeconds) / 1000) >= 3) target2.style.display = 'none';
    if (((d.getTime() - startSeconds) / 1000) >= 3) target3.style.display = 'block';
    if (((d.getTime() - startSeconds) / 1000) >= 4) target3.style.display = 'none';
    if (((d.getTime() - startSeconds) / 1000) >= 4) target4.style.display = 'block';
    if (((d.getTime() - startSeconds) / 1000) >= 5) target4.style.display = 'none';
    if (((d.getTime() - startSeconds) / 1000) >= 5) target5.style.display = 'block';
    if (((d.getTime() - startSeconds) / 1000) >= 6) target5.style.display = 'none';
	if (((d.getTime() - startSeconds) / 1000) >= 7) stopCombatTimer();

}//myTimer

//stops the animation/timer function
function stopCombatTimer() {
  clearInterval(myVar);
	startTime = 0;
	startCombatTimer();
}//stopTimer

//removes a life bar if the wizards has been hit
function hitWizard () {
	if (toolSelect === 1) {
		breakSound.play();
		wizardHit++;
		switch (wizardHit) {
			case 1:
				document.getElementById('healthBarCapRight').style.display = 'none';
				break;

			case 2:
				document.getElementById('healthBar1').style.display = 'none';
				break;

			case 3:
				document.getElementById('healthBar2').style.display = 'none';
				break;

			case 4:
				document.getElementById('healthBar3').style.display = 'none';
				break;

			case 5:
				document.getElementById('healthBar4').style.display = 'none';
				break;

			case 6:
				document.getElementById('healthBar5').style.display = 'none';
				break;

			case 7:
				document.getElementById('healthBar6').style.display = 'none';
				break;

			case 8:
				document.getElementById('healthBar7').style.display = 'none';
				break;

			case 9:
				document.getElementById('healthBar8').style.display = 'none';
				break;

			case 10:
				document.getElementById('healthBar').style.display = 'none';
				defeatedWizard();
				break;

			default:
				break;
		}//switch
	} else {
		document.getElementById('goalText').innerHTML = "Remember: you have tools!";
	}//if else
}//hitWizard

//shows the win screen
function defeatedWizard () {
	wizardBGM.stop();
	body.style.cursor = "url('images/cursor.png'), auto";
	document.getElementById('targetDiv').style.display = 'none';
	wizard = document.getElementById('wizard-Lvl4').style.left = "300px"
	document.getElementById('goalText').innerHTML = "";
	document.getElementById('topBar').style.display = "block";
	document.getElementById('lightbox').style.display = 'block';
	document.getElementById('monolog').innerHTML = "<h1>You have Beaten Me!</h1><br>" +
		"<h3>Fine, you have proven that you deserve to take care of this horse<br></h3>" +
		"<hr><h3>Click anywhere to continue</h3>";
	monologCount++;
}//defeatedWizard



//ENDING
function happyEnding () {
	document.getElementById('ending0').style.display = 'block';
	var teddy = new sound("sound/teddy.mp3");
	teddy.play();
	ending++;
}//happyEnding

//loads ending bgImages
function endingImages () {
	switch (ending) {
		case 1:
			document.getElementById('ending0').style.display = 'none';
			document.getElementById('ending1').style.display = 'block';
			ending++;
			break;

		case 2:
			document.getElementById('ending1').style.display = 'none';
			document.getElementById('ending2').style.display = 'block';
			ending++;
			break;

		case 3:
			document.getElementById('ending2').style.display = 'none';
			document.getElementById('ending3').style.display = 'block';
			ending++;
			break;

		case 4:
			document.getElementById('ending3').style.display = 'none';
			document.getElementById('ending4').style.display = 'block';
			ending++;
			break;

		case 5:
			document.getElementById('ending4').style.display = 'none';
			document.getElementById('ending5').style.display = 'block';
			ending++;
			break;

		case 6:
			document.getElementById('ending5').style.display = 'none';
			document.getElementById('ending6').style.display = 'block';
			ending++;
			break;

		case 7:
			document.getElementById('ending6').style.display = 'none';
			document.getElementById('ending7').style.display = 'block';
			document.getElementById('topBar').style.display = 'block';
			document.getElementById('monolog').innerHTML = "<h1>Thank you for playing!!!!</h1>";
			ending++;
			break;

		case 8:
			location.href = "menu.html";
			break;
	}//switch
}//endingImages


//CODE THAT IS NOT MINE

//W3 schools sound object contructor
function sound (src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }//this.play
    this.stop = function(){
        this.sound.pause();
    }//this.stop

		//I CAME UP WITH THIS ONE THOUGH
		this.loop = function(){
			this.sound.loop = true;
		}//this.loop
}//sound
