'use strict';

//Tasks - 
//1. reorganizing the variables to a minimum exposure scope.
//2. cleaning up the functions and DRYing them.
//3. fixing the image upload that is sometimes off.
//4. fixing the unclear change in margin of the first page image whenever the user changes big brother/sister radio input.


//================================================
//SELECTING ALL OBJECTS FOR DOM MANIPULATION
//================================================
//GET PAGE TEXT
const topLeftText = document.querySelector("#topLeftText");
const topRightText= document.querySelector("#topRightText");

//GET PAGE IMAGES
const bottomLeftImage= document.querySelector(".bottomLeftImage");
const bottomRightImage= document.querySelector(".bottomRightImage");

//GET BOTTOM PAGE BUTTONS FOR CHANGING PAGES
const nextPage = document.getElementById('nextPage');
const lastPage = document.getElementById('lastPage');
const previousPage = document.getElementById('previousPage');
const firstPage = document.getElementById('firstPage');


//================================================
//SETTING PAGE NUMBER VARIABLE AND CHANGING IT ALONG WITH PAGE CONTENTS ACCORDING TO USER INTERACTION
//================================================

let pageNum = 0;
let freshPage = (pageNum) => {
	pageText(pageNum);
	pageImage(pageNum);
	broSis();
	babySibling();
	page1(pageNum);
}

//PREVIOUS/NEXT PAGE FUNCTIONALITY

		//LEFT AND RIGHT KEYBOARD ARROWS
		let checkKeyPress = (key) => {
			if(key.keyCode == "37") {
				previous();
		    } else if (key.keyCode == "39") {
				next();
		    }
		}
		window.addEventListener("keyup", checkKeyPress, false);


		//THE PREVIOUS/NEXT CALLBACK FUNCTIONS
		let previous = (event) => {
			if (pageNum > 0) {
				pageNum--;
				freshPage(pageNum);
			}
		};
		//PREVIOUS PAGE BUTTON
		previousPage.addEventListener('click', previous, false);

		let next = (event) => {
			if (pageNum < pageData.length-1){ 
				pageNum++;
				freshPage(pageNum);
			}
		};
		//NEXT PAGE BUTTON FUNCTIONALITY
		nextPage.addEventListener('click', next, false);
		

//FIRST PAGE BUTTON FUNCTIONALITY
firstPage.addEventListener('click', (event) => {
	pageNum = 0;
	freshPage(pageNum);
});

//LAST PAGE BUTTON FUNCTIONALITY
lastPage.addEventListener('click', (event) => {
	pageNum = pageData.length-1;
	freshPage(pageNum);
});


//================================================
//SET INITIAL SCREEN
//================================================
pageText(pageNum);
pageImage(pageNum);
page1(pageNum);

