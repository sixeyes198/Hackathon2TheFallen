const searchForm = document.getElementById("searchForm");
const searchResults = document.getElementById("fallenData");
const searchButton = document.getElementById("searchButton");
const secondButton = document.getElementById("secondButton");
const flames = document.querySelector(".flames");
const glow = document.querySelector(".glow");

secondButton.addEventListener("click", (event) => {
  event.preventDefault();
  flames.classList.toggle("active");
  glow.classList.toggle("active");
});

// searching all data
const fetchData = async () => {
  try {
    const res = await fetch(`http://localhost:3000/fallen`);
    const data = await res.json();
    searchResults.innerHTML = "";

    data.forEach((item, index) => {
      const imageFileName = `${index + 1}.jpeg`;

      searchResults.innerHTML += `<div class="result">
     <h1>${item.first_name}</h1>
     <h2>${item.last_name}</h2>
     <p>${item.age}</p>
     <img src="images/${imageFileName}" alt="${item.first_name} ${item.last_name}" />
     <p>${item.content}</p>
    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};

//Searching by name function
const serachFallen = async (query) => {
  try {
    const response = await fetch(
      `http://localhost:3000/fallen/search?name=${query}`
    );
    const data = await response.json();
    searchResults.innerHTML = "";

    data.forEach((item, index) => {
      const imageFileName = `${index + 1}.jpeg`;
      searchResults.innerHTML += `<div class="result">
      <h1>${item.first_name}</h1>
      <h2>${item.last_name}</h2>
      <p>${item.age}</p>
      <img src="images/${imageFileName}" alt="${item.first_name} ${item.last_name}"
      <p>${item.content}</p>
      </div>
      `;
    });
    console.log(data);
  } catch (error) {
    console.log("Cant find the data", error);
  }
};

fetchData();

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = document.getElementById("searchInput").value;
  await serachFallen(query);
});
