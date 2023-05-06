const students = [ {
  id: 1,
  name: "Harry",
  house: "Gryffindor",
  imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/012/782/661/small/symbol-from-the-book-about-harry-potter-glasses-and-lightning-illustration-free-vector.jpg",

},
{
  id: 2,
  name: "Ron",
  house: "Gryffindor",
  imageUrl: "https://i.pinimg.com/474x/e9/b3/a1/e9b3a1f3938d87bf8fe09707dad63cca.jpg",
 
},
{
  id: 3,
  name: "Hermione",
  house: "Gryffindor",
  imageUrl: "https://images4.fanpop.com/image/photos/19000000/Little-Hermione-hermione-granger-19011367-225-225.jpg"
  
},
{
  id: 4,
  name: "Malfoy",
  house: "Slytherin",
  imageUrl: "https://i.pinimg.com/236x/a3/15/91/a31591693c13437e90ac7b79dad8b315--drako-malfoy-harry-potter-actors.jpg",
},
{
  id: 5, 
  name: "Luna",
  house: "Ravenclaw",
  imageUrl: "https://cdn.europosters.eu/image/1300/art-photo/harry-potter-luna-lovegood-i114411.jpg",
},
{
  id: 6, 
  name: "Newt",
  house: "Hufflepuff",
  imageUrl: "https://i0.wp.com/setimacabine.com.br/wp-content/uploads/2016/12/Newt-Scamander-Eddie-Redmayne-Poster.jpg?fit=1600%2C800&ssl=1",
}
];


{/* <div class='card' style='width: 14rem;'>
<div class= "card-body card">
<h5 class="card-title">${student.name}</h5>
<p class="card-text">More text maybe</p>
<a href="#" class="btn btn-primary">EXPEL</a>
</div>
*/}

const renderToDom = (divId, htmlToRender) => {
const selectedContainer = document.querySelector(divId);
selectedContainer.innerHTML=htmlToRender
}

const cardsOnDom = (array) => {
let domString = "";
for (student of array) {
domString+= `
<div class='card' style='width: 14rem;'>
  <div class= "card-body card">
    <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-primary">EXPEL</a>
</div>`
}
renderToDom("#app", domString)
}




// SORT FORM BAR
function renderSortForm() {
  const formHtml = `
    <form> 
      <div class="d-flex justify-content-center align-items-center">
        <label for="sortInput" class="form-label">Student</label>
        <form class="d-flex">
        <input type="name" class="form-control" id="name" aria-describedby="emailHelp">
        <button type="submit" class="btn btn-primary">Sort</button>
      </div>
    </form>
  `;
  document.querySelector('#sortFormContainer').innerHTML = formHtml;
}
renderSortForm();


// //ADD EVENT LISTENER TO FORM BAR/ TYPE
const inputElement = document.getElementById("name");
const formElement = document.querySelector("form");
const cardsContainer = document.getElementById("app");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = inputElement.value.toLowerCase();

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchTerm) ||
      student.house.toLowerCase().includes(searchTerm)
    );
  });

  const html = filteredStudents
    .map(
      (student) => `
        <div class='card' style='width: 14rem;'>
          <div class= "card-body card">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">House: ${student.house}</p>
            <img src="${student.imageUrl}" class="card-img-top" alt="${student.name}">
            <a href="#" class="btn btn-primary">Expel</a>
          </div>
        </div>
      `
    )
    .join("");

  cardsContainer.innerHTML = html;
});



//querySelector Buttons
const allButton = document.querySelector("#all");
const gryffindorButton = document.querySelector("#gryffindor");
const hufflepuffButton = document.querySelector("#hufflepuff");
const ravenclawButton = document.querySelector("#ravenclaw");
const slytherinButton = document.querySelector("#slytherinButton");


// CLICK TO SHOW ALL BUTTONS
allButton.addEventListener('click', () => {
cardsOnDom(students);
})

// FILTER REUSABLE BUTTONS
const buttonFilter = (array, houseString) => {
  let houseArray = [];

for (const student of students) {
  if (student.house === houseString) {
    houseArray.push(student);
  }
}
return houseArray;
};


// EventListeners for Buttons - CLICK
gryffindorButton.addEventListener('click', () => {
const gryffindorHouse = buttonFilter(students, "Gryffindor");
cardsOnDom(gryffindorHouse)
});


hufflepuffButton.addEventListener('click', () => {
  const hufflepuffHouse = buttonFilter(students, "Hufflepuff");
  cardsOnDom(hufflepuffHouse);
});


ravenclawButton.addEventListener('click', () => {
  const ravenclawHouse = buttonFilter(students, "Ravenclaw");
  cardsOnDom(ravenclawHouse);
});


slytherin.addEventListener('click', () => {
  const slytherinHouse = buttonFilter(students, "Slytherin");
  cardsOnDom(slytherinHouse);
});

function moveCardToExpelledContainer(event) {
  const card = event.target.closest('.card');
  const expelledContainer = document.querySelector('#expelledContainer');
  expelledContainer.appendChild(card);
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const expelButton = card.querySelector('.btn');
  expelButton.addEventListener('click', moveCardToExpelledContainer);
});
