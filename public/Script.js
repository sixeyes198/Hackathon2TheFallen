const data = document.getElementById("fallenData");

const result = async () => {
  try {
    const res = await fetch("http://localhost:3000/fallen");
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
result();
