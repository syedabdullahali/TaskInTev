const bogoList1 = document.getElementById("bogo_list_1");
const bogoList2 = document.getElementById("bogo_list_2");
const bogoList3 = document.getElementById("bogo_list_3");

const select_input_size = document.querySelectorAll(".select_input_size");
const select_input_color = document.querySelectorAll(".select_input_color");

const addCartutton = document.querySelector(".add_cart_button");

const allowedClikedElement = [
  "select_input_size",
  "select_input_color",
  "bogo_info",
];
const obj = {
  unit: 0,
  amount: 0,
  size: "",
  color: "",
};
let orderObj = { ...obj };

let bogo1Togale = false;
let bogo2Togale = false;
let bogo3Togale = false;

const hnadaleOtherTogel = (bogo1, bogo2, bogo3, cliked) => {
  if (bogo1 && cliked !== "first") {
    handaleClassNamebogoList1();
  }
  if (bogo2 && cliked !== "second") {
    handaleClassNamebogoList2();
  }
  if (bogo3 && cliked !== "third") {
    handaleClassNamebogoList3();
  }
  if (!(bogo1 || bogo2 || bogo3)) {
    document.querySelector(".price_tag").innerHTML = `Total: <b>$ 0 USD</b>`;
  }
};
const handaleTogaleClasses = (el) => {
  el.querySelector(".bogo_info").classList.toggle("bogo_info_hide");
  el.classList.toggle("bogo_container_active");
  const input = el.querySelector(".bogo_label").querySelector("input");
  const span = el.querySelector(".most_papular");
  if (!input.checked) {
    orderObj.amount = +input.value;
    orderObj.unit = input.getAttribute("data-unit");
    document.querySelector(
      ".price_tag"
    ).innerHTML = `Total: <b>$ ${input.value} USD</b>`;
    input.checked = true;
  } else {
    input.checked = false;
    orderObj = { ...obj };
  }

  if (span) {
    span.classList.toggle("bogo_label_popup");
  }
};

function handaleClassNamebogoList1(e) {
  const className = e?.target?.className || "";
  if (!allowedClikedElement.includes(className)) {
    bogo1Togale ? (bogo1Togale = false) : (bogo1Togale = true);
    e
      ? hnadaleOtherTogel(bogo1Togale, bogo2Togale, bogo3Togale, "first")
      : null;
    handaleTogaleClasses(bogoList1);
  }
}
function handaleClassNamebogoList2(e) {
  const className = e?.target?.className || "";
  if (!allowedClikedElement.includes(className)) {
    bogo2Togale ? (bogo2Togale = false) : (bogo2Togale = true);
    e
      ? hnadaleOtherTogel(bogo1Togale, bogo2Togale, bogo3Togale, "second")
      : null;
    handaleTogaleClasses(bogoList2);
  }
}
function handaleClassNamebogoList3(e) {
  const className = e?.target?.className || "";
  if (!allowedClikedElement.includes(className)) {
    bogo3Togale ? (bogo3Togale = false) : (bogo3Togale = true);
    e
      ? hnadaleOtherTogel(bogo1Togale, bogo2Togale, bogo3Togale, "third")
      : null;
    handaleTogaleClasses(bogoList3);
  }
}

bogoList1.addEventListener("click", handaleClassNamebogoList1);

bogoList2.addEventListener("click", handaleClassNamebogoList2);

bogoList3.addEventListener("click", handaleClassNamebogoList3);

select_input_size.forEach((el) => {
  el.addEventListener("change", (e) => {
    orderObj.size = e.target.value;
  });
});
select_input_color.forEach((el) => {
  el.addEventListener("change", (e) => {
    orderObj.color = e.target.value;
  });
});
addCartutton.addEventListener("click", () => {
  // If u want You can call here your api sir
  console.log(orderObj);
});
