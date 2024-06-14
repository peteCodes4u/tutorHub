const addInstrumentButton = document.getElementById('addInstrument');
const addCertificationButton = document.getElementById('addCertification');
const addSpecialtyButton = document.getElementById('addSpecialty');
const addLinkButton = document.getElementById('addLink');
const removeInstrumentButton = document.getElementById('removeInstrument');
const removeCertificationButton = document.getElementById('removeCertification');
const updateUserInfoButton = document.getElementById('updateUserInfo');

// populate form functions
// get the username from local storage
const userEmail = localStorage.getItem('username');
email = JSON.parse(userEmail);

// pull the user data from the api by user email
fetch(`./api/users/email/${email}`).then( response => {
    if(!response.ok) {
        alert('Sorry Something went wrong....')
    }
    return response.json();
    // handle the data in the appropriate form spaces 
}).then(data => {
    document.getElementById('choose-profile-image').value = data.profile_img;
    selectImage(data.profile_img);
    document.getElementById('salutation').value = data.salutation;
    document.getElementById('first-name').value = data.firstName;
    document.getElementById('last-name').value = data.lastName;
    document.getElementById('email-input').value = data.email;
    document.getElementById('zipcode').value = data.zipcode;
    document.getElementById('phone').value = data.phone;
    document.getElementById('price').value = data.price;
    document.getElementById('lesson-setting-list').value = data.lesson_setting;

    // send the user_id out for use in other edit profile functions
    return user_id = data.id;
}).catch(err => alert('we apologize, something went wrong...', err))

// submit personal information button
updateUserInfoButton.addEventListener("click", async function(){

});

// add instrument
addInstrumentButton.addEventListener("click", async function(){

    const instrument_id = document.getElementById('instrumentlist').value;
    // send needed data to the api
    const response = await fetch('./api/tutorInstrument', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user_id, instrument_id: instrument_id })
    });

    if(response.ok) { alert ('you have successfully added an instrument to your profile!')}
});

// remove instrument
removeInstrumentButton.addEventListener("click", async function(){

        let email = localStorage.getItem('username');
        email = JSON.parse(email); 
        const apiData = await fetch(`./api/users/email/${email}`);
        const data = await apiData.json();
        const user_id = data.id;
        const instrument_id = document.getElementById('instrumentlist').value;
        const response = await fetch(`./api/tutorInstrument/${user_id}/${instrument_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    
        if(response.ok) { alert ('the instrument has been eliminated from your profile')} 
        else { alert('Sorry, it does not seem this instrument has been associated with your profile in our records.')}
});


// add certification
addCertificationButton.addEventListener("click", async function(){
    let email = localStorage.getItem('username');
    email = JSON.parse(email); 
    const apiData = await fetch(`./api/users/email/${email}`);
    const data = await apiData.json();
    const user_id = data.id;

    const certification_id = document.getElementById('certification-list').value;
    const response = await fetch('./api/tutorCertification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user_id, certification_id: certification_id})
    });
    if(response.ok) { alert ('you have successfully added a certification to your profile!')}
});

// remove certification
removeCertificationButton.addEventListener("click", async function(){
    let email = localStorage.getItem('username');
    email = JSON.parse(email); 
    const apiData = await fetch(`./api/users/email/${email}`);
    const data = await apiData.json();
    const user_id = data.id;

    const certification_id = document.getElementById('certification-list').value;
    const response = await fetch(`./api/tutorCertification/${user_id}/${certification_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(response.ok) { alert ('you have removed a certification to your profile')}
});

// add specialty
addSpecialtyButton.addEventListener("click", async function(){
    let email = localStorage.getItem('username');
    email = JSON.parse(email); 
    const apiData = await fetch(`./api/users/email/${email}`);
    const data = await apiData.json();
    const user_id = data.id;

    const specialty_id = document.getElementById('specialty-list').value;
    const response = await fetch('./api/tutorSpecialty', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user_id, specialty_id: specialty_id})
    });
    if(response.ok) { alert ('you have successfully added a specialty to your profile!')}
});

// add link
addLinkButton.addEventListener("click", async function(){
    let email = localStorage.getItem('username');
    email = JSON.parse(email); 
    const apiData = await fetch(`./api/users/email/${email}`);
    const data = await apiData.json();
    const user_id = data.id;

    const link = document.getElementById('link').value;
    const platform =  document.getElementById('platform').value;
    const response = await fetch('./api/tutorLink', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user_id, platform: platform, link: link})
    });
    if(response.ok) { alert ('you have successfully added a link to your profile!')}
});

