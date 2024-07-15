const alertt = document.querySelector(".alert");
const groceryInput = document.querySelector("#grocery");
const submitBtn = document.querySelector("#submitBtn");
const clearBtn = document.querySelector("#clearBtn");
const editBtn = document.querySelector("#editBtn");
const addEditBtn = document.querySelector("#addEditBtn");
const deleteBtn = document.querySelector("#deleteBtn");

var List = [];
if (localStorage.getItem("itemList") != null) {
  List = JSON.parse(localStorage.getItem("itemList"));
  displayItem();
  clearBtn.classList.remove("invisible");
}
submitBtn.addEventListener("click", addItem);
function addItem() {
  var item = groceryInput.value;
  if (groceryInput.value.length >= 3) {
    alertt.classList.add("invisible");
    List.push(item);
    localStorage.setItem("itemList", JSON.stringify(List));
    displayItem();
    clearBtn.classList.remove("invisible");
  } else {
    alertt.classList.remove("invisible");
  }
}

function displayItem() {
  temp = "";
  List.forEach((element, index) => {
    temp += `<div class="d-flex justify-content-between">
          <p style="letter-spacing: 2px;" class="fw-semibold">${element}</p>
          <div>
            <i role="button" onclick="editItem(${index})" id="editBtn" class="fa-solid fa-pen-to-square text-success m-1"></i>
            <i role="button" onclick="deleteItem(${index})" id="deleteBtn" class="fa-solid fa-trash text-danger"></i>
          </div>
        </div>`;
  });
  document.getElementById("list").innerHTML = temp;
  groceryInput.value = null;
}
clearBtn.addEventListener("click", () => {
  List = [];
  localStorage.removeItem("itemList");
  displayItem();
  clearBtn.classList.add("invisible");
});
var y;
function editItem(x) {
  groceryInput.value = List[x];
  addEditBtn.classList.remove("d-none");
  submitBtn.classList.add("d-none");
  y = x;
}
addEditBtn.addEventListener("click", () => {
  var x = y;
  if (groceryInput.value.length >= 3) {
    alertt.classList.add("invisible");
    List[x] = groceryInput.value;
    localStorage.setItem("itemList", JSON.stringify(List));
    displayItem();
    addEditBtn.classList.add("d-none");
    submitBtn.classList.remove("d-none");
  } else {
    alertt.classList.remove("invisible");
  }
});

function deleteItem(x) {
  List.splice(x, 1);
  localStorage.setItem("itemList", JSON.stringify(List));
  displayItem();
  if (List.length == 0) {
    localStorage.removeItem("itemList");
    clearBtn.classList.add("invisible");
  }
}

const switchBtn = document.querySelector(".switch-btn");
const switchVideo = document.querySelector(".switch");
const video = document.querySelector("video");
switchBtn.addEventListener("click", () => {
  if (!switchVideo.classList.contains("slide")) {
    switchVideo.classList.add("slide");
    video.pause();
  } else {
    switchVideo.classList.remove("slide");
    video.play();
  }
});
