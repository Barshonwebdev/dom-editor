document.getElementById("bold-button").addEventListener("click",function(){
    const textElement=document.getElementById("text-area");
    const bold=textElement.style.fontWeight="bolder";
})

document.getElementById("normal-button").addEventListener("click", function () {
  const textElement = document.getElementById("text-area");
  textElement.style.fontWeight = "normal";
  textElement.style.fontStyle="normal";
  textElement.style.textDecoration="none";
});

document.getElementById("Italic-button").addEventListener("click", function () {
  const textElement = document.getElementById("text-area");
  const italic = (textElement.style.fontStyle = "italic");
});

document.getElementById("underline-button").addEventListener("click", function () {
  const textElement = document.getElementById("text-area");
  const underline = (textElement.style.textDecoration = "underline");
});

document.getElementById("normal-button").addEventListener("click", function () {
  const textElement = document.getElementById("text-area");
  const normal = (textElement.style.fontWeight = "normal");
});