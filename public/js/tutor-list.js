// Create variables that will pull the desired HTML
// This selects the container and everything inside - so I might be able to delete these other variables as they might not be necessary
const cardContainer = document.querySelector(".container");
console.log(cardContainer)
// This selects the card mb-2 and the row g-4
const card = document.querySelector(".card");
console.log(card)
// Since this is the main row that holds all the cards - this also pretty much selects everything so we might not need this
const cardRowAllCards = document.querySelector(".row");
console.log(cardRowAllCards)

// Function needs to be created that will retrieve tutors from local storage
// There needs to be a function created to store Tutor search list

// After search is made card will be created dynamically
const tutorCard = document.createElement('div');
console.log(tutorCard)
const cardImage = document.createElement('img');
console.log(cardImage)
const cardTutorName = document.createElement('h5');
console.log(cardTutorName)
const tutorInstrument = document.createElement('p');
console.log(tutorInstrument) // Can add italic style to font
const cardTutorLocation = document.createElement('p');
console.log(cardTutorLocation) // There's a margin and space to edit here
const cardContactInfo = document.createElement('h6');
console.log(cardContactInfo)


tutorCard.setAttribute('class', 'card');
cardImage.setAttribute('class', 'col-md-4');
card.append(tutorCard);
console.log(card)

// card.append(cardTutorName, cardTutorLocation, tutorInstrument, cardContactInfo);
// console.log(tutorCard)

// Variable to store empty string so that when a name is inputted it will add the inputted name to the card heading
const tName = '';
cardTutorName.textContent = `${tName}`;
console.log(cardTutorName)

const tInstrument = '';
tutorInstrument.textContent = `${tInstrument}`;
console.log(tutorInstrument);
// Clear contents of the card


// Create functions that will dynamically generate the HTML on the page
// const generateCard =

// Function to create container for cards

// Creates DIV for card, image on card

// Function to create necessary classes to display card styles