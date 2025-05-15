const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const showButton = document.getElementById("btn2");

showButton.addEventListener("click", function() {
    overlay.style.display = "block";
    popup.style.display = "block";
});

var closeButton = document.getElementById("closePopup");
closeButton.addEventListener("click", function() {
   event.preventDefault();
   popup.style.display = "none";
   overlay.style.display = "none";
});

var lorum = document.querySelector(".lorum");
var bookname = document.getElementById("bookName");
var bookauthor = document.getElementById("authorName");
var bookdescription = document.getElementById("des");
var addbook = document.getElementById("addBook");

addbook.addEventListener("click", function(event) { 
event.preventDefault();
   
var div =document.createElement("div");
div.setAttribute("class", "lorum");
div.innerHTML=`<h2> ${bookname.value}</h2> <h5> ${bookauthor.value}</h5> <p>${bookdescription.value}</p>`;
lorum.appendChild(div);
})