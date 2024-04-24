// Check if there is local stoarge color option
let mainColor = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColor != null) {
  document.documentElement.style.setProperty("--main--color", mainColor);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColor) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}
////////////////////////////////////////////////////////////////////////////
//Random background Option
let backgroundOption = true;

//Variable To Control The Interval
let backgroundInterval;

// Check If there is Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("backround_option");
// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {
  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

///////////////////////////////////////////////////////////////////////////
//Click On Toggle Setting Gear

document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  //Toogle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  //Toggle Class Open On Main Setting Box
  document.querySelector(".setting-box").classList.toggle("open");
};
////////////////////////////////////////////////////////////////////////
// Switch Colors

const colorLi = document.querySelectorAll(".colors-list li");

//loop on all list items
colorLi.forEach((li) => {
  //click on every list item
  li.addEventListener("click", (e) => {
    //Set color on root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );

    // set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    //Remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // add active class on self
    e.target.classList.add("active");
  });
});
////////////////////////////////////////////////////////////////////////////
// Switch random backgrounds option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

//loop on all Span
randomBackEl.forEach((span) => {
  //click on every list item
  span.addEventListener("click", (e) => {
    //Remove active class from all Span
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // add active class on self
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});
///////////////////////////////////////////////////////////////
//Select Landing Page Elemnt
let landingPage = document.querySelector(".landing-page");

//Get Array Of Imgs
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

//Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
      console.log(randomNumber);
    }, 10000);
  }
}
