//================================================
//FUNCTION TO SET BROTHER/SISTER IN THE TEXT ACCORDING TO USER PREFERENCE
//================================================

//DISPLAY THE BROTHER/SISTER FORM AND MAKE THE TITLE BIGGER - ONLY ON THE FIRST PAGE
let page1 = (pageNum) => {
	var title = document.getElementById("topLeftText");
	var dedication = document.getElementById("topRightText");
	var chooseGender = document.getElementById("radio1");
	if (pageNum !== 0) {
		chooseGender.classList.add("none");
		title.classList.remove("title");
		dedication.classList.remove("dedication");
	} else {
		chooseGender.classList.remove("none");
		title.classList.add("title");
		dedication.classList.add("dedication");
	}
}

//TAKE USER PREFERENCES FOR BIG BROTHER/SISTER
const big = document.getElementsByName("big");

big[1].addEventListener("click", () => {
		broSis();
		big[1].blur();
});

big[0].addEventListener("click", () => {
		broSis();
		big[0].blur();
});


//TOGGLE ALL *BIG* BROTHER/SISTER REFERENCES ACCORDING TO USER CHOICE
let broSis = () => {
	if (big[1].checked) {
		//Check if there's more than 1 instance to change. If so, change all. else change once.
		let bigSister = document.querySelectorAll(".bigSister");
		if(typeof(bigSister[1]) !== undefined) {
			for (var i = 0; i<bigSister.length; i++){
	    		bigSister[i].textContent = "sister";
			}
		} else {
			let bigSister = document.querySelector(".bigSister");
			bigSister.textContent = "sister";
		}

		let indi = document.querySelector(".indi");
		if (indi !== null) {
			indi.innerHTML = "It makes me so happy I dance and I twirl,<br> I am independent - as I'm a big girl.";
		};
		let girl = document.querySelector(".girl");
		if (girl !== null) {
			girl.textContent = "girl";
		}
		
	} else if (big[0].checked) {
		let bigSister = document.querySelectorAll(".bigSister");
		//Check if there's more than 1 instance to change. If so, change all. else change once.
		if(typeof(bigSister[1]) !== undefined) {
			for (var i = 0; i<bigSister.length; i++){
	    		bigSister[i].textContent = "brother";
			}
		} else {
			let bigSister = document.querySelector(".bigSister");
			bigSister.textContent = "brother";	
		}
	}
};


//TAKE USER PREFERENCES FOR BABY BROTHER/SISTER
const baby = document.getElementsByName("baby");

baby[1].addEventListener("click", () => {
		babySibling();
		baby[1].blur();
});

baby[0].addEventListener("click", () => {
		babySibling();
		baby[0].blur();
});


//TOGGLE ALL *BABY* BROTHER/SISTER REFERENCES ACCORDING TO USER CHOICE
let babySibling = () => {
	if (baby[1].checked) {
		var babytext1 = document.querySelector("#babytext1");
		if (babytext1 !== null) {
			babytext1.innerHTML = "Perhaps I should help taking care of my sister,<br> when a toy is out of reach - I can assist her.";
		}
		var babytext2 = document.querySelector("#babytext2");
		if (babytext2 !== null) {
			babytext2.innerHTML = "Since she cannot speak, I can act as her mouth,<br> and explain what she needs before all things go south.";
		}
		var babytext3 = document.querySelector("#babytext3");
		if (babytext3 !== null) {
			babytext3.innerHTML = "My mom and my dad even let me embrace her,<br>surrounded by pillows I sit and caress her,<br>never touching her head, just her hands and her feet,<br>as she's smaller and gentler than kids that I meet.";
		} 
		var babySister = document.querySelector(".babySister");
		if (babySister !== null) {
			babySister.innerHTML = "sister";
		} 
	}
};

let getElement = (element) => {
	
} 