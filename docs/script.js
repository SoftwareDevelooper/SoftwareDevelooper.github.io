let main_input = document.querySelector("#main_input input");

function add_function() {
  let newElement;
  newElement = document.createElement("input");
  newElement.style.width = "90%";
  newElement.style.height = "21.2px";
  newElement.value = main_input.value;
  newElement.style.display = "inline-block";
  newElement.style.background = "bisque";
  newElement.style.border = "none";
  newElement.style.margin = "auto 0px";

  kontrolEt(0);

  let newDiv;
  newDiv = document.createElement("Div");
  newDiv.style.display = "flex";
  newDiv.style.background = "bisque";
  newDiv.style.width = "100%";
  newDiv.style.marginBottom = "2px";
  newDiv.style.height = "35px";

  let newİnput;
  newİnput = document.createElement("input");
  newİnput.type = "checkbox";

  let newicon;
  newicon = document.createElement("i");
  newicon.className = "fa-solid fa-xmark";
  newicon.style.color = "#ff0000";
  newicon.style.margin = "auto";
  newicon.style.display = "none";
  newicon.onclick = () => {
    newDiv.remove();
    kontrolEt(1);
  };

  document.getElementById("list").appendChild(newDiv);
  newDiv.appendChild(newİnput);
  newDiv.appendChild(newElement);
  newDiv.appendChild(newicon);

  newDiv.tabIndex = 0;
  newDiv.addEventListener("mouseover", () => {
    newicon.style.display = "inline-block";
  });

  newDiv.addEventListener("mouseleave", () => {
    newicon.style.display = "none";
  });

  main_input.value = "";
}

function kontrolEt(c) {
  let kontrol = document.querySelectorAll("#list div");
  let clasing = document.getElementById("clasing");
  let notclasing = document.getElementById("notclasing");
    let clear=document.getElementById("clear");
  if (kontrol.length >= c) {
    clasing.style.display = "flex";
    notclasing.style.display = "none";
    clear.style.display="block";
  } else {
    clasing.style.display = "none";
    notclasing.style.display = "flex";
    clear.style.display = "none";
  }
}

function cagır() {
  let allDives = document.querySelectorAll("#list div");

  for (let item of allDives) {
    let divv = item.querySelector("input[type='checkbox']");

    if (b == 1) {
      item.style.display = "flex";
    } else if (b == 2) {
      if (divv.checked) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
      }
    } else if (b == 3) {
      if (divv.checked) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    }
  }
}

let b = 1;
let cls1 = document.querySelector(".cls1");
let cls2 = document.querySelector(".cls2");
let cls3 = document.querySelector(".cls3");
function btncolor(a) {
  if (a == 1) {
    cls1.style.background = "#0046FF";
    cls3.style.background = "#435663";
    cls2.style.background = "#435663";
    b = 1;
  } else if (a == 2) {
    cls2.style.background = "#0046FF";
    cls1.style.background = "#435663";
    cls3.style.background = "#435663";
    b = 2;
  } else if (a == 3) {
    cls3.style.background = "#0046FF";
    cls1.style.background = "#435663";
    cls2.style.background = "#435663";
    b = 3;
  }
  cagır();
}
cls1.addEventListener("click", btncolor);
cls2.addEventListener("click", btncolor);
cls3.addEventListener("click", btncolor);
function clearfunk(){
    
    let allDives = document.querySelectorAll("#list div");
    for(let item of allDives){
        item.remove();
    }
    kontrolEt(1);
}
let clearitem = document.getElementById("clear"); 
clearitem.addEventListener("click", clear);
 