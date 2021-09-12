


let linksArray = document.querySelectorAll(".content .left ul li a");
let liArray = document.querySelectorAll(".content .left ul li");


linksArray.forEach((link) => {
  link.addEventListener("click", function () {
    liArray.forEach((li) => {
      if (li.className === "active") {
        li.className = "";
      }
    });
    link.parentElement.className = "active";
  });
});


