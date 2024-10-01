let iconList = document.querySelector(".iconList");
let list = document.querySelector(" header .container ul");
let lists = document.querySelectorAll("header .container ul li ");
let links = document.querySelectorAll(".links li a");
let arrow = document.querySelectorAll(".landing i");
let circles = document.querySelectorAll(".landing .circles li");
let circles1 = document.querySelectorAll(".landing .circles li");
let circles2 = document.querySelectorAll(".people .circles li");

let CircleCount = 0;

let counter = 1;

iconList.onclick = function () {
  if (counter % 2 != 0) {
    list.style.display = "flex";
    arrow.forEach((e) => {});
    counter++;
  } else {
    list.style.display = "none";
    counter++;
  }
};

links.forEach((e) => {
  e.onclick = function () {
    list.style.display = "none";
    counter++;
  };
});

arrow[0].onclick = function () {
  circles.forEach(function (e) {
    e.classList.remove("active-circle");
  });
  if (CircleCount === 0) {
    CircleCount = 2;
    circles[CircleCount].classList.add("active-circle");
  } else {
    CircleCount--;
    circles[CircleCount].classList.add("active-circle");
  }
};
arrow[1].onclick = function () {
  circles.forEach(function (e) {
    e.classList.remove("active-circle");
  });
  if (CircleCount === 2) {
    CircleCount = 0;
    circles[CircleCount].classList.add("active-circle");
  } else {
    CircleCount++;
    circles[CircleCount].classList.add("active-circle");
  }
};

circles1.forEach((e) => {
  e.onclick = () => {
    let n;
    circles1.forEach(function (e) {
      e.classList.remove("active-circle");
    });
    for (let i = 0; i < circles.length; i++) {
      if (circles[i] === e) {
        n = i;
      }
    }
    CircleCount = n;
    e.classList.add("active-circle");
  };
});
circles2.forEach((e) => {
  e.onclick = () => {
    circles2.forEach(function (e) {
      e.classList.remove("active-circle");
    });
    e.classList.add("active-circle");
  };
});

let optionsPortfolio = document.querySelectorAll("#portfolio ul li ");

optionsPortfolio.forEach((e) => {
  e.onclick = () => {
    optionsPortfolio.forEach((e) => {
      e.classList.remove("active-portflio-ul");
    });
    e.classList.add("active-portflio-ul");
  };
});

let extra = document.querySelectorAll(".extra");
let more = document.querySelector("#portfolio button");
let portImages = document.querySelector(".portfolio-images");

more.addEventListener("click", () => {
  if (more.innerHTML === "More") {
    extra.forEach((e) => {
      e.classList.remove("extra");
    });
    portImages.classList.add("more-portfolio-images");
    more.textContent = "less";
  } else {
    extra.forEach((e) => {
      e.classList.add("extra");
    });
    portImages.classList.remove("more-portfolio-images");
    more.textContent = "More";
  }
});

let foot = document.querySelector(".rights");

let date = new Date();

let foot1 = foot.innerHTML.replace("2021", date.getFullYear());

foot.innerHTML = foot1;
