'use strict';

const addEventOnElements = (
  elements: NodeListOf<Element>,
  eventType: string,
  callback: EventListener
) => {
  elements.forEach(el => el.addEventListener(eventType, callback));
};

// Preloader
const preloader = document.querySelector("[data-preloader]") as HTMLElement | null;

window.addEventListener("DOMContentLoaded", () => {
  if (preloader) preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Navbar toggling
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]") as HTMLElement | null;
const navbar = document.querySelector("[data-navbar]") as HTMLElement | null;
const overlay = document.querySelector("[data-overlay]") as HTMLElement | null;

const toggleNavbar = () => {
  navbar?.classList.toggle("active");
  navToggleBtn?.classList.toggle("active");
  overlay?.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

// Header active on scroll
const header = document.querySelector("[data-header]") as HTMLElement | null;

window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Slider logic
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = (currentSlider: Element) => {
  const sliderContainer = currentSlider.querySelector("[data-slider-container]") as HTMLElement | null;
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]") as HTMLElement | null;
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]") as HTMLElement | null;

  if (!sliderContainer || !sliderPrevBtn || !sliderNextBtn) return;

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider as HTMLElement).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  let currentSlidePos = 0;

  const moveSliderItem = () => {
    const offsetLeft = (sliderContainer.children[currentSlidePos] as HTMLElement).offsetLeft;
    sliderContainer.style.transform = `translateX(-${offsetLeft}px)`;
  };

  const slideNext = () => {
    if (currentSlidePos >= totalSlidableItems) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
    moveSliderItem(); 
  };

  const slidePrev = () => {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }
    moveSliderItem();
  };


};

sliders.forEach(slider => initSlider(slider));
