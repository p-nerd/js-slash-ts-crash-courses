const title = document.querySelector("#main-heading");

title.style.color = "red";

console.log(title);

const listItems = document.querySelectorAll(".list-item");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = "5rem";
}
listItems[1].style.fontSize = "2rem";

console.log(listItems);