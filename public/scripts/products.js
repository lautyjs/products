const socket = io();
socket.on("products", (data) => {
  console.log(data)
  const template = data
    .map(
      (each) =>
        ` 
      <img style="width: 33%; height: 33%" src="${each.photo}" 
      
      class="object-fit-cover" alt="${each.id}"> `
    )
    .splice(0, 9)
    .join("");
  document.querySelector("#products").innerHTML = template;
});
document.querySelector("#products").addEventListener("click", (event) => {
  const title = document.querySelector("#title").value;
});