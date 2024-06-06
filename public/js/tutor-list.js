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
tutorCard.setAttribute('class', 'card');
console.log(tutorCard)
const cardImage = document.createElement('img');
cardImage.setAttribute('class', 'col-md-4');
console.log(cardImage)
const cardTutorName = document.createElement('h5');
console.log(cardTutorName)
const tutorInstrument = document.createElement('p');
console.log(tutorInstrument) // Can add italic style to font
const cardTutorLocation = document.createElement('p');
console.log(cardTutorLocation) // There's a margin and space to edit here
const cardContactInfo = document.createElement('h6');
console.log(cardContactInfo)
const tutorEmail = document.createElement('h6');
console.log(tutorEmail);
const tutorPhone = document.createElement('h6');
console.log(tutorPhone)




// card.append(tutorCard);
// console.log(card)

// card.append(cardTutorName, cardTutorLocation, tutorInstrument, cardContactInfo);
// console.log(tutorCard)

// Variables to store empty string so that when data is entered by the user in the registration it will populate on the card
const tName = 'Tutor Name';
cardTutorName.textContent = tName;
// cardTutorName.setAttribute()
console.log(cardTutorName);

const tInstrument = 'Instrument';
tutorInstrument.textContent = tInstrument;
console.log(tutorInstrument);

const tLocation = 'Location';
cardTutorLocation.textContent = tLocation;
console.log(cardTutorLocation);

const cInfo = 'Contact Info';
cardContactInfo.textContent = cInfo;
console.log(cardContactInfo);

const tEmail = 'Email:';
tutorEmail.textContent = tEmail;
console.log(tutorEmail);

const tPhone = 'Phone:';
tutorPhone.textContent = tPhone;
console.log(tutorPhone);

// Append elements to the tutorCard
tutorCard.append(cardImage, cardTutorName, tutorInstrument, cardTutorLocation, cardContactInfo, tutorEmail, tutorPhone);

// Append the tutorCard to the container
cardContainer.append(tutorCard);

// Adjust classes and styles so the card will display correctly on the page

// Clear contents of the card
