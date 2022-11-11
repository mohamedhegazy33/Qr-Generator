// selectors
const container = document.querySelector(".container"),
  generateBTN = container.querySelector("form button"),
  qrInput = container.querySelector("#qrInput"),
  qrImg = container.querySelector(".qr-code img");
const downLoadqr = document.querySelector(".downLoadQr");
let downloadQr = document.querySelector(".qr-code");

generateBTN.addEventListener("click", (e) => {
  // prevent refresh
  e.preventDefault();
  // take qr value
  let qrInputvalue = qrInput.value;
  console.log(qrInputvalue);
  // avoid empty value if the input empty return
  if (!qrInputvalue) {
    alert("Please Enter Url Or text");
  } else {
    // update qr
    let src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputvalue}`;
    // add class active class
    container.classList.add("active");
    let imgQr = document.createElement("img");
    imgQr.src = src;
    let developer = document.createElement("p");
    downloadQr.appendChild(imgQr);
  }
});
