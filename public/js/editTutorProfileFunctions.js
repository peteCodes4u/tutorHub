const addInstrumentButton = document.getElementById("addInstrument");
const addCertificationButton = document.getElementById("addCertification");
const addSpecialtyButton = document.getElementById("addSpecialty");
const addLinkButton = document.getElementById("addLink");
const removeInstrumentButton = document.getElementById("removeInstrument");
const removeCertificationButton = document.getElementById(
  "removeCertification"
);
const removeSpecialtyButton = document.getElementById("removeSpecialty");

// add instrument
addInstrumentButton.addEventListener("click", async function () {
  // pull email from local storage
  let email = localStorage.getItem("username");
  //parse the JSON string to extract email value
  email = JSON.parse(email);
  // get user id
  const apiData = await fetch(`./api/users/email/${email}`);
  const data = await apiData.json();
  const user_id = data.id;
  // Get the selected instrument_id from the form
  const instrument_id = document.getElementById("instrumentlist").value;
  // send needed data to the api
  const response = await fetch("./api/tutorInstrument", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: user_id, instrument_id: instrument_id }),
  });

  if (response.ok) {
    alert("you have successfully added an instrument to your profile!");
  }
});

// remove instrument
removeInstrumentButton.addEventListener("click", async function () {
  let email = localStorage.getItem("username");
  email = JSON.parse(email);
  const apiData = await fetch(`./api/users/email/${email}`);
  const data = await apiData.json();
  const user_id = data.id;
  const instrument_id = document.getElementById("instrumentlist").value;
  const response = await fetch(
    `./api/tutorInstrument/${user_id}/${instrument_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    alert("the instrument has been eliminated from your profile");
  } else {
    alert(
      "Sorry, it does not seem this instrument has been associated with your profile in our records."
    );
  }
});

// add certification
addCertificationButton.addEventListener("click", async function () {
  let email = localStorage.getItem("username");
  email = JSON.parse(email);
  const apiData = await fetch(`./api/users/email/${email}`);
  const data = await apiData.json();
  const user_id = data.id;

  const certification_id = document.getElementById("certification-list").value;
  const response = await fetch("./api/tutorCertification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
      certification_id: certification_id,
    }),
  });
  if (response.ok) {
    alert("you have successfully added a certification to your profile!");
  }
});

// add specialty
addSpecialtyButton.addEventListener("click", async function () {
  let email = localStorage.getItem("username");
  email = JSON.parse(email);
  const apiData = await fetch(`./api/users/email/${email}`);
  const data = await apiData.json();
  const user_id = data.id;

  const specialty_id = document.getElementById("specialty-list").value;
  const response = await fetch("./api/tutorSpecialty", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: user_id, specialty_id: specialty_id }),
  });
  if (response.ok) {
    alert("you have successfully added a specialty to your profile!");
  }
});

// Remove specialty

removeSpecialtyButton.addEventListener("click", async function () {
  let email = localStorage.getItem("username");
  email = JSON.parse(email);
  const apiData = await fetch(`./api/users/email/${email}`);
  const data = await apiData.json();
  const user_id = data.id;

  const specialty_id = document.getElementById("specialty-list").value;
  const response = await fetch(
    `./api/tutorSpecialty/${user_id}/${specialty_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    alert("you have successfully removed a specialty from your profile!");
  }
});

// Remove certification

removeCertificationButton.addEventListener("click", async function () {
  let email = localStorage.getItem("username");
  email = JSON.parse(email);
  const apiData = await fetch(`./api/users/email/${email}`);
  const data = await apiData.json();
  const user_id = data.id;

  const certification_id = document.getElementById("certificationlist").value;
  const response = await fetch(
    `./api/tutorCertification/${user_id}/${certification_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    alert("you have successfully removed a certification from your profile!");
  }
});

// add link
addLinkButton.addEventListener("click", async function () {
  let email = localStorage.getItem("username");
  email = JSON.parse(email);
  const apiData = await fetch(`./api/users/email/${email}`);
  const data = await apiData.json();
  const user_id = data.id;

  const link = document.getElementById("link").value;
  const platform = document.getElementById("platform").value;
  const response = await fetch("./api/tutorLink", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: user_id, platform: platform, link: link }),
  });
  if (response.ok) {
    alert("you have successfully added a link to your profile!");
  }
});
