const cardDeck = document.querySelector("#card-deck");
const instrumentList = document.querySelector("#instrumentlist");

// Function to dynamically populate instrument choices from available instruments in table
async function createInstrumentSearch() {
    const apiData = await fetch("./api/instruments");
    var data = await apiData.json();
    console.log(data);
    let length = data.length;
    console.log(length);

    for (let i = 0; i < data.length; i++) {
        const listItem = `
        <option value=${i}>${data[i].instrument_name}</option>
        `;
        instrumentList.innerHTML += listItem;
    }
}
const cardCreate = (data) => {
    for (let y = 0; y < data.length; y++) {
        // Variables to be used in HTML
        const sal = data[y].salutation;
        const first = data[y].firstName;
        const surname = data[y].lastName;
        const tutorName = `${data[y].firstName}-${data[y].lastName}`;

        if (data[y].reviews === null) {
            tutorReviews = "There are no reviews yet for this tutor.";
        } else {
            tutorReviews = `TODO: INSERT REVIEW HTML HERE FOR INJECTION`;
        };

        const rate = data[y].price;

        if (rate === null) {
            lessonRate = "n/a"
        } else if (rate === "$ ($30 or less)") {
            lessonRate = "$"
        } else if (rate === "$$ ($35 to $55)") {
            lessonRate = "$$"
        } else if (rate === "$$$ ($60 to $80)") {
            lessonRate = "$$$"
        } else if (rate === "$$$$ ($85+)") {
            lessonRate = "$$$$"
        } else {
            lessonRate = ""
        };

        // HTML injection
        const card = `<div class="INDIV-CARD-CONTAINER-FOR-GRID-DISPLAY col">
            <div class="ACTUAL-TUTOR-CARD-WITH-MARGINS-AND-PADDING card p-3">

                <div class="CONTAINER-T0-PUT-MAIN-INFO-AND-DETAILS-COLUMNS-SIDE-BY-SIDE row">

                    <div class="LEFT-SIDE-OF-TUTOR-CARD col-4">

                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                            class="TUTOR-CHOSEN-PROFILE-IMAGE rounded-circle shadow-1-strong my-3" style="width: 100%;"
                            alt="Avatar">

                        <h2 class="TUTOR-NAME-FIRST-AND-LAST mb-3 open-sans-semibold-semicondensed">
                            ${sal}
                            ${first} ${surname}
                        </h2>

                        <h5 class="INSTRUMENTS-OFFERED-BY-TUTOR light-text mb-3">${data[y].instruments}</h5>

                    </div>

                    <div class="DETAILED-TUTOR-INFO-COLUMN col-8">
                        <h6 id="isAcceptingNewStudents" class="text-end p-2 light-text">❔ Inquire for availability</h6>
<!-- ✅ Accepting New Students -->
<!-- ⛔ Not Accepting New Students -->
<!-- ❔ Inquire for availability -->
                        <div class="card">
                            <nav>
                                <div class="nav nav-tabs card-header"
                                    id="${tutorName}-tabNav" role="tablist">
                                    <button class="nav-link active p-2 tutor-detail-tabs"
                                        id="${tutorName}-infoTab" data-bs-toggle="tab"
                                        data-bs-target="#${tutorName}-infoTabContent"
                                        type="button" role="tab" aria-controls="nav-home" aria-selected="true">Basic
                                        Info</button>
                                    <button class="nav-link p-2 tutor-detail-tabs"
                                        id="${tutorName}-reviewsTab" data-bs-toggle="tab"
                                        data-bs-target="#${tutorName}-reviewsTabContent"
                                        type="button" role="tab" aria-controls="nav-profile"
                                        aria-selected="false">Reviews</button>
                                    <button class="nav-link p-2 tutor-detail-tabs"
                                        id="${tutorName}-contactTab" data-bs-toggle="tab"
                                        data-bs-target="#${tutorName}-contactTabContent"
                                        type="button" role="tab" aria-controls="nav-contact"
                                        aria-selected="false">Contact</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="${tutorName}-tabPanels">
                                <div class="tab-pane fade show active p-2"
                                    id="${tutorName}-infoTabContent" role="tabpanel"
                                    aria-labelledby="nav-home-tab" tabindex="0">
                                    <div class="SIDE-BY-SIDE-CONTAINER-LOCATION-INTERESTS row">

                                        <div class="LOCATION-OPTIONS-OFFERED col-auto">
                                            <h5 class="pt-1">Location</h5>
                                            <div class="row text-muted">
<!-- are we able to write add checked/unchecked attributes to checkboxes using js based on data? -->
                                                <p><input class="form-check-input" type="checkbox" id="${tutorName}-students-home"
                                                        value="" aria-label="student's home" disabled> Your Home </br>
                                                    <input class="form-check-input" type="checkbox" id="${tutorName}-teacher-studio"
                                                        value="" aria-label="tutor's studio" disabled> Studio </br>
                                                    <input class="form-check-input" type="checkbox" id="${tutorName}-virtual"
                                                        value="" aria-label="virtual lesson" disabled> Virtual
                                                </p>
                                            </div>
                                        </div>

                                        <div class="SPECIAL-INTERESTS col border-start border-opacity-10">
                                            <h5 class="pt-1">Interests</h5>
<!-- is listing interests separately an option? if not, remove list structure & insert as text only -->
                                            <p class="LIST-INTERESTS-HERE text-muted">
                                                ${data[y].interests}
                                            </p>
                                        </div>
                                        <div class="text-center mt-2">
                                            <div class="EXTRA-CERTIFICATIONS">
                                                <h5>Extra Certifications</h5>
                                                <p class="LIST-CERTIFICATIONS-HERE text-muted">${data[y].certifications}
                                                </p>
                                            </div>
                                            <div class="PRICE-IN-DOLLAR-SIGNS">
                                                <h5>Lesson Rate</h5>
                                                <h4 class="LINK-PRICE-DATA-HERE brush" style="color: green;">
                                                    ${lessonRate}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade p-2"
                                    id="${tutorName}-reviewsTabContent" role="tabpanel"
                                    aria-labelledby="nav-profile-tab" tabindex="0">

                                    <div class="TUTOR-REVIEWS-DROPDOWN accordion accordion-flush"
                                        id="${tutorName}-reviews-dropdown">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed px-0" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#${tutorName}-reviews"
                                                    style="font-size: large;">
                                                    Reviews & Testimonials
                                                </button>
                                            </h2>
                                            <div id="${tutorName}-reviews"
                                                class="accordion-collapse collapse"
                                                data-bs-parent="#${tutorName}-reviews-dropdown">
                                                <!-- What is needed to populate reviews for each tutor? -->
                                                <div class="accordion-body">${tutorReviews}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="tab-pane fade p-2"
                                    id="${tutorName}-contactTabContent" role="tabpanel"
                                    aria-labelledby="nav-contact-tab" tabindex="0">
                                    <p class="OPTION-FOR-DETAILS-AT-TOP-OF-INFO text-muted"
                                        style="font-style: italic; font-size: smaller;">

                                    </p>

                                    <div class="CONTACT-EMAIL-ADDRESS row">
                                        <h5 class="col-3">Email</h5>
                                        <p class="text-muted col">${data[y].email}</p>
                                    </div>
                                    <div class="CONTACT-PHONE-NUMBER row">
                                        <h5 class="col-3">Phone</h5>
                                        <p class="text-muted col">${data[y].phone}</br>
<!-- **YES, MAYBE: use toggleAttribute** are we able to write add checked/unchecked attributes to checkboxes using js based on data? -->
                                            <input class="form-check-input" type="checkbox" id="${tutorName}-okToCall" value=""
                                                aria-label="text ok?" disabled> Call
                                            <input class="form-check-input ms-3" type="checkbox" id="${tutorName}-okToText"
                                                value="" aria-label="text ok?" disabled> Text
                                        </p>
                                    </div>


                                    <div class="SOCIAL-MEDIA-LINKS row">
                                        <h5 class="col-3">Links</h5>
<!-- needs formatting of links -->
                                        <p class="SOCIAL-LINKS-GO-HERE text-muted col-auto">${data[y].socials}</p>
                                    </div>
                                </div>
                            </div>


                            


                        </div>

                    </div>
                </div>
            </div>
        </div>`;

        cardDeck.innerHTML += card;

        // add checked preferences
        let dispTextOk = document.getElementById(`${tutorName}-okToText`)
        let dispCallOk = document.getElementById(`${tutorName}-okToCall`)

        let prefTextOk = data[y].textOk;
    }
}