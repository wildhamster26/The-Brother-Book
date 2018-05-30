
//=====================================================
//CREATING FUNCTIONS TO UPLOAD TEXT AND IMAGE DATA FROM THE PAGE DATABASE
//=====================================================

		//================================================
		//TEXT DATA
		//================================================

		let pageText = (pageNum) => {

			//SETTING DOM OBJECTS ACCORDING TO THE PAGE NUMBER IN THE PAGE DATABASE DETAILS
			if(pageData[pageNum].topLeftText !== undefined){
				topLeftText.innerHTML = pageData[pageNum].topLeftText;
			} else {
				topLeftText.innerHTML = null;
			}
			
			if(pageData[pageNum].topRightText !== undefined) {
				topRightText.innerHTML = pageData[pageNum].topRightText;
			} else {
				topRightText.innerHTML = null;
			}
		};

		//================================================
		//IMAGE DATA
		//================================================

		let pageImage = (pageNum) => {

			//SETTING DOM OBJECTS ACCORDING TO THE PAGE NUMBER IN THE PAGE DATABASE DETAILS
			if(pageData[pageNum].bottomLeftImage !== undefined) {
				bottomLeftImage.src = pageData[pageNum].bottomLeftImage;
				bottomLeftImage.classList.remove("none");
				fadeIn(bottomLeftImage);
			} else {
				bottomLeftImage.src = "assets/main.jpg";
				bottomLeftImage.classList.add("none");
			}

			if(pageData[pageNum].bottomRightImage !== undefined) {
				bottomRightImage.src = pageData[pageNum].bottomRightImage;
				bottomRightImage.classList.remove("none");
				fadeIn(bottomRightImage);
			} else {
				bottomRightImage.src = "assets/main.jpg";
				bottomRightImage.classList.add("none");
			}
		};

				//================================================
				//PICTURE ANIMATION - FADING IN AND OUT FUNCTIONS FOR TURNING PAGES
				//================================================

				let fadeIn = (element) => {
					element.style.opacity = 0;
					let frame = () => {
						if (element.style.opacity == 1) {
							clearInterval(id);
						} else {
							element.style.opacity = Number(element.style.opacity) + 0.1;
						}
					}
					let id = setInterval(frame, 50);
				}