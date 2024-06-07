const router = require("express").Router();

// Create variables that will pull the desired HTML

const userCardRow = document.querySelector(".user-card");
app.use(express.static("public"));

// Function needs to be created that will retrieve tutors from local storage
// There needs to be a function created to store Tutor search list
router.get("/api", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// This will provide a way to dynamically display each card
async function createCard(data) {
  try {
    const apiData = await fetch("/api");
    if (!apiData.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await apiData.json();
    //   var data = await apiData.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
  const card = `<div class="col-12 col-md-6 col-lg-4">
              <div class="card mb-2">
                  <div class="row g-4">
                      <div class="col-md-4">
                          <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                              class="rounded-circle shadow-1-strong my-5"
                              style="width: 80px;"
                              alt="Avatar"
                          >
                              <h5>${data.firstName}</h5>
                              <p style="font-style: italic;"></p>
                              <p>${data.region}</p>
                              <i class="far fa-edit mb-2"></i>
                      </div>
                      <div class="col-md-8">
                          <h6>Contact Info:</h6>
                          <hr class="mt-0 mb-4">
                              <div class="row pt-2">
                                  <div class="col-6 mb-3">
                                      <h6>Email</h6>
                                      <p class="text-muted">${data.email}</p>
                                  </div>
                                  <div class="col-6 mb-3">
                                      <h6>Phone:</h6>
                                      <p class="text-muted">${data.phone}</p>
                                  </div>
                              </div>
                              <h6>Specialties:</h6>
                              <hr class="mt-0 mb-4">
                                  <div class="row pt-1">
                                      <div class="col-6 mb-3">
                                          <h6>Instruments</h6>
                                          <p class="text-muted">${data.instruments}</p>
                                      </div>
                                      <div class="col-6 mb-3">
                                          <h6>Tutoring location:</h6>
                                          <p class="text-muted">${data.virtual}</p>
                                      </div>
                                  </div>
                              </div>
                      </div>
                  </div>
              </div>`;
  userCardRow.innerHTML += card;
}
createCard()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
console.log(createCard);
// Function to get all tutors

// Routes

// Router.get to fetch the data from the API that we created

module.exports = router;
