const dataContainer = document.getElementById("fallenData");

const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3000/fallen");
    console.log(res);
    const data = await res.json();
    console.log(data);
    dataContainer.innerHTML = "";

    data.forEach((item) => {
      dataContainer.innerHTML += ` <div class="result">
     <h2>${item.first_name}</h2>
     <h3>${item.last_name}</h3>
     <p>${item.age}</p>
     <p>${item.content}</p>
    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};
fetchData();
