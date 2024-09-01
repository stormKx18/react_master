import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-17cab-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let key in leads) {
    listItems += `
            <li class="super-li no-select" data-key="${key}">
                    ${leads[key]}
            </li>
        `;
  }
  ulEl.innerHTML = listItems;

  // Add double-click event listener to each list item
  const listElements = document.querySelectorAll(".super-li");
  listElements.forEach((li) => {
    li.addEventListener("dblclick", function () {
      const key = li.getAttribute("data-key");
      const itemRef = ref(database, `leads/${key}`);
      remove(itemRef);
    });
  });
}

onValue(referenceInDB, function (snapshot) {
  const snapshotDoesExist = snapshot.exists();
  if (snapshotDoesExist) {
    const snapshotValues = snapshot.val();
    render(snapshotValues);
  } else {
    ulEl.innerHTML = "";
  }
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
});

//Input btn
inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});

inputEl.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    push(referenceInDB, inputEl.value);
    inputEl.value = "";
  }
});
