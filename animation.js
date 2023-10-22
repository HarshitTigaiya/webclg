document.addEventListener("DOMContentLoaded", function () {
    // Get the elements you want to animate
    const textContainer = document.querySelector(".content__container__text");
    const listItems = document.querySelectorAll(".content__container__list__item");
  
    // Function to animate text
    function animateText() {
      textContainer.classList.add("animate-text");
    }
  
    // Function to animate list items
    function animateListItems() {
      listItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 2}s`; // Delay each item's animation
        item.classList.add("animate-list-item");
      });
    }
  
    // Add event listeners to trigger animations
    document.addEventListener("scroll", () => {
      const windowHeight = window.innerHeight;
      const contentTop = document.querySelector(".content").getBoundingClientRect().top;
  
      if (contentTop < windowHeight * 0.75) {
        animateText();
        animateListItems();
      }
    });
  });
  