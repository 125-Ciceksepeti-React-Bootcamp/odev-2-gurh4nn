import createAnimals from "./createAnimals";

const animals = createAnimals();
const $app = document.body;
const $head = document.head;
const $createStyle = `<link rel="stylesheet" href="./assets/css/style.css">`;
$head.innerHTML += $createStyle;
const $cardList = document.createElement("div");
$cardList.className = "card-list";

const headerContent = `<div class="header">
<p>Animals Planet</p>
</div>`
$app.innerHTML += headerContent;
const footerContent = `<div class="footer">© 2021 GG. All Rights Reserved.</div>`
$app.appendChild($cardList);

const renderItems = () => {
  const $list = document.querySelector(".contact-map .point-list");
  const listItems = [];
  const listMap = animals.map((item) => {
      console.log(item)
    const $listItem = `
    <div class="card">
        <div class="card__image"> <img src="./assets/img/${item.image}.jpeg" /> </div>
        <div class="card__info">
            <p>Name: ${item.name}</p>
            <p>Number Of Legs: ${item.numberOfLegs}</p>
            <p>Age: ${item.age}</p>
        </div>
    </div>
    `;
    listItems.push($listItem);
  });
  $cardList.innerHTML = listItems.join("");
};
renderItems();
$app.innerHTML += footerContent;