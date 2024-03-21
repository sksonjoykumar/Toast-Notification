// selected all html id
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const toastBox = document.getElementById("toastBox");

// window.onload
window.onload = function () {
  mainFun();
};

let btn1 = `<i class="fa-solid fa-check"></i> Successfully submitted!`;
let btn2 = `<i class="fa-solid fa-xmark"></i> Please fix the error!`;
let btn3 = `<i class="fa-solid fa-exclamation"></i> Invalid input, check again!`;

// mainFun function
function mainFun() {
  // btnOne addEventListener
  btnOne.addEventListener("click", function () {
    toastMsgFun(btn1);
  });

  // btnTwo addEventListener
  btnTwo.addEventListener("click", function () {
    toastMsgFun(btn2);
  });

  // btnThree addEventListener
  btnThree.addEventListener("click", function () {
    toastMsgFun(btn3);
  });
}

// toastMsgFun function
function toastMsgFun(msg) {
  let div = document.createElement("div");
  div.classList.add("toast");
  div.innerHTML = msg;
  toastBox.appendChild(div);

  if (msg.includes("error")) {
    div.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    div.classList.add("invalid");
  }

  setTimeout(() => {
    div.remove();
  }, 5000);
}
