// variable for the various aspects of my program (buttons, embedded widgets, etc.)
var fancyComponents;

// variable for the background/canvas color, changes based on light & dark mode selections
var canvasBG;

// variables for the color-changing square in the middle of my program, the color of the square changes based on these variables' values
var i;
var colorChange;

// array for the colors that the square can be filled with
var colors = [];

// Skill 0, DATA STRUCTURES --->
// array that holds all of the albums & song recommendatin users get
var recommendations = [];
// <--- Skill 0

// Skill 1, DATA STRUCTURES --->
// array that holds embedding links for all the albums that can be recommended to users
var albums = ['<iframe src="https://open.spotify.com/embed/album/2gertXS08whDTzBWfmewPO" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/76290XdXVF9rPzGdNRWdCh" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/0XqAZHNx0xJDObehTI2587" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/1Ao5vWPO13f4l0ldwxOKL7" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>','<iframe src="https://open.spotify.com/embed/album/0JeyP8r2hBxYIoxXv11XiX" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/6ECUAXThxlRHQ1JPUQJQJG" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/0rvrbZvaDX5S9ZBhwOwFfH" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/16pubXUlqRziVWRsT6lLNz" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/5zi7WsKlIiUXv09tbGLKsE" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/1PKhKkeCqANY5E9RGcUWUX" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/58QwKbqqxvic4OsBubpZ6h" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/05c49JgPmL4Uz2ZeqRx5SP" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/3rVtm00UfbuzWOewdm4iYM" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/4n2UdASUneo56k6Uk5ZRIb" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/3euz4vS7ezKGnNSwgyvKcd" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/66J1OXSaS3hBZASOV3el8t" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/6kf46HbnYCZzP6rjvQHYzg" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/7FxxU3EP37uMsZf8FilkDR" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/album/1l0aFrH24oPrQSqGtfeFyE" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'];
// <--- Skill 1

// Skill 2, DATA STRUCTURES --->
// array that holds the embedding links for all the songs/tracks that can be recommended to users
var tracks = ['<iframe src="https://open.spotify.com/embed/track/1UBp6NPWRYWEqvRtFwIvZO" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/5BXr7hYZQOeRttkeWYTq5S" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/748mdHapucXQri7IAO8yFK" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/6naxalmIoLFWR0siv8dnQQ" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/2Oj5hRhkJH00VGzjBdQNq3" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/1rL3u6JsjQT9Cxg1oHTJEK" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/5XJEdVQ5jl3C3dFsV7kCTZ" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/6KE3Fs6LMzi4hJI3eFqyLC" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/339Y993TrFyWyO438be0RY" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/2xtP8RNbo2BEMzLX7tK7aq" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', '<iframe src="https://open.spotify.com/embed/track/39EXZNMxb4RBHlRjnRaOKp" width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'];
// <--- Skill 2

function setup() {
  // anything here will happen one time only

	// initializing i and colorChange as 0 so colors don't change until colorChange is 1 and the colors start changing with the first color in the colors array
	i = 0;
	colorChange = 0;

	// the array for the colors of the middle square, a new color is called each time the draw function runs using index values
	colors = [color(255, 0, 0), color(255, 69, 0), color(255, 140, 0), color(255, 165, 0), color(255, 215, 0), color(255, 255, 0), color(173, 255, 47), color(127, 255, 0), color(0, 255, 0), color(0, 255, 255), color(0, 191, 255), color(0, 0, 255), color(138, 43, 226), color(148, 0, 211), color(255, 0, 255), color(199, 21, 133), color(255, 20, 147), color(220, 20, 60)];

	// the canvas/background is a semi-transparent black by default
	canvasBG = color(0, 0, 0, 230);

	// the size of the canvas/program background depends on the window size
	createCanvas(windowWidth * 4.5/5, windowHeight * 4.5/5);

	// assigning the fancyComponents variable from the global scope to the class that codes for the different aspects of my program
	fancyComponents = new FancyComponents(width / 2, color(255));
}

function draw () {
//anything here runs repeatedly

	// since the canvas/background color changes depending on the mode selection, the background must be constantly reset
	background(canvasBG);

	// function that creates the text and middle square
	fancyComponents.textSymbols();

	// function that creates the mode & recommendation buttons
	fancyComponents.buttons();

	// frame rate makes sure the colors don't flash or change too quickly
	frameRate(5);
	
	// the value of i changes every time the draw function runs
	if(i < colors.length - 1){
		i++;
	} else {
		i = 0;
	}
}

function keyPressed(){
	// Skill 3, CONDITIONAL LOGIC --->
	// the recommendation is undone/previous recommendation is seen only when the spacebar is pressed, if another key is pressed, this code does not run
	if(keyCode === 32){
		// gets rid of the current recommendation's widget
		recommendations[recommendations.length - 1].remove();

		// removes the current recommendation from the recommendations array
		recommendations.pop();
	}
	// <--- Skill 3

	if(keyCode === 67){
		// tells program to change the square's color as colorChange equals 1
		colorChange = 1;
	}
}


// Skill 4, FUNCTIONAL ORGANIZATION --->
class FancyComponents {
	constructor(xCenter, textColor){
		// allows me to easily place items in the canvas's width's center
		this.xCenter = xCenter;

		// sets colors of all text except the instructions in the middle square
		this.textColor = textColor;

		// since the color of the instructions is white no matter the mode, it needs a separate variable
		this.instructionsColor = color(255);

		// the color of the middle square, changes based on variables initialized in the global scope
		this.accentColor = color(60, 179, 113);

		// variable that gets random album recommendations
		this.i = 0;

		// variable that gets random song/track recommendations
		this.j = 0;
	}

	textSymbols(){
		noStroke();
		textAlign(CENTER);
		textFont('Helvetica');

		// program title
		fill(this.textColor);
		textStyle(BOLD);
		textSize(width / 50);
		text("Samiksha's Music Recommmender", this.xCenter, height / 8);
		
		// tip for viewing the program
		textStyle(ITALIC);
		textSize(width / 80);
		text("Looks best if opened in a new tab!", this.xCenter, height / 6.25);

		// Skill 5, DYNAMIC VISUALS or CONDITIONAL LOGIC --->
		// the color of the middle square changes based on the values of colorChange and i
		// Niki recommended that I make the middle square change colors to add some spice and ~pizazz~ to my program
		if(colorChange == 1){
			fill(colors[i]);
		} else {
			fill(this.accentColor);
		}
		rectMode(CENTER);
		rect(width/2, height/2 + 10, width/3.25, width/3.25, 15);
		// <--- Skill 5

		// instructions	
		fill(this.instructionsColor);
		textStyle(NORMAL);
		text("Click either of the buttons below \n to be recommended an album \n or a track/song that I like! \n \n All of the albums and songs \n can be listened to on Spotify. \n You can also play them through \n the embedded widget!", this.xCenter, height / 2.4);

		fill(this.textColor);
		text('Press the spacebar to undo the recommendation or see the previous recommendation. \n Press the "C" key to see the square above flash or change colors!', this.xCenter, height * 16/17);
	}

	buttons(){
		//when a button is pressed, its respective function is called and run

		// Skill 6, INTERACTIVITY --->
		// each time the "Album" button is pressed, a new Spotify widget/embedding pops up displaying an album recommendation
		var albumsButton = createButton("Album");
		albumsButton.style('font-size', width / 85 + 'px');
		albumsButton.position(this.xCenter - 40, height);
		albumsButton.mousePressed(this.embedAlbums);
		// <--- Skill 6

		// each time the "Track" button is pressed, a new Spotify widget/embedding pops up displaying a track recommendation
		var tracksButton = createButton("Track");
		tracksButton.style('font-size', width / 85 + 'px');
		tracksButton.position(this.xCenter + 60, height);
		tracksButton.mousePressed(this.embedTracks);
		
		// each time the "Dark Mode" button is pressed, the background and text (except for the instructions in the square) are set to their default semi-transparent black and white respectively
		var darkMButton = createButton("Dark Mode (default)");
		darkMButton.style('font-size', width / 125 + 'px');
		darkMButton.position(width / 25, height / 6.5);
		darkMButton.mousePressed(this.darkMode);

		// Skill 7, INTERACTIVITY --->
		// each time the "Light Mode" button is pressed, the background and text (except for the instructions in the square) are set to white and black respectively 
		var lightMButton = createButton("Light Mode");
		lightMButton.style('font-size', width / 125 + 'px');
		lightMButton.position(width / 25, height / 6.5 + height / 25);
		lightMButton.mousePressed(this.lightMode);
		// <--- Skill 7
	}

	embedAlbums(){
		// Skill 8, DYNAMIC VISUALS --->
		// runs when the "Album" button is pressed

		// the album recommendation changes based on the value of this.i
		// gets a random integer between 0 and the length of the albums array
		this.i = floor(random(albums.length));

		// used https://editor.p5js.org/Zipexpo/sketches/Ue0gG-r6l as reference for this.embedded functions

		// sets an area/divider and position for the embedded widget
		this.embedded = createDiv('').size(windowWidth, windowHeight);
		this.embedded.position(width / 2 - 85, height / 2 - 70);

		// gets an embed link from the albums array using the value of this.i as the index value
		this.embedded.html(albums[this.i]);

		// adds the new album recommendation to the recommendations array so that it can be undone or deleted if the user pressed the spacebar
		recommendations.push(this.embedded.html(albums[this.i]));
		// <--- Skill 8
	}

	embedTracks(){
		// Skill 9, DYNAMIC VISUALS --->
		// runs when the "Track" button is pressed

		// the track recommendation changes based on the value of this.j
		// gets a random integer between 0 and the length of the tracks array
		this.j = floor(random(tracks.length));

		// used https://editor.p5js.org/Zipexpo/sketches/Ue0gG-r6l as reference for this.embedded functions

		// sets an area/divider and position for the embedded widget
		this.embedded = createDiv('').size(windowWidth, windowHeight);
		this.embedded.position(width / 2 - 85, height / 2 - 70);

		// gets an embed link from the tracks array using the value of this.j as the index value
		this.embedded.html(tracks[this.j]);

		// adds the new album recommendation to the recommendations array so that it can be undone or deleted if the user pressed the spacebar
		recommendations.push(this.embedded.html(tracks[this.j]));
		// <--- Skill 9
	}

	lightMode(){
		// "light mode" just means that the background color is changed to white and all text except for the instructions in the middle square are black
		canvasBG = color(255);
		fancyComponents.textColor = color(0);
	}

	darkMode(){
		// "dark mode" is the default color scheme for my program, it means that the background is a semi-transparent black and all text is white
		canvasBG = color(0, 0, 0, 230);
		fancyComponents.textColor = color(255, 255, 255);
	}
}
// <--- Skill 4
