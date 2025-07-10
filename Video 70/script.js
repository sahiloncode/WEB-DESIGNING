let div = document.createElement("div");
div.innerHTML= "This Div Is Inserted By JavaScript";
div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
document.querySelector(".container").before(div);