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

document.getElementById("color-button").addEventListener("click", function () {
  const inputColor=document.getElementById("color-input");
  const color=inputColor.value;
  const textElement=document.getElementById("text-area");
  textElement.style.color=color;
});

function alignText(style){
    const textElement=document.getElementById("text-area");
    textElement.style.textAlign=style;
}

document.getElementById("left-button").addEventListener("click",function(){
    alignText("left");
})
document.getElementById("middle-button").addEventListener("click",function(){
    alignText("center");
})
document.getElementById("right-button").addEventListener("click",function(){
    alignText("right");
})