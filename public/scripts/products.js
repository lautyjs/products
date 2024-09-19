const socket = io();
socket.on("products", (data) => {
  console.log(data)
  const template = data
    .map(
      (each) =>
        ` 
      <div style="width: 30vw; heigth:200px; backgroung-color: gray 0,5">
      <img style="width:100%;padding: 2px; heigth: 90%" src="${each.photo}" class="object-fit-cover" alt="${each.id}"> 

      <h3 style= "" src="${each.title}">
      ${each.title}
      </h3>
      </div>


      `
    )
    .splice(0, 9)
    .join("");
  document.querySelector("#products").innerHTML = template;
});
document.querySelector("#products").addEventListener("click", (event) => {
  const title = document.querySelector("#title").value;
});