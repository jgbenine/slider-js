import Slide from "./slide.js";

const slide1 = new Slide(".slide", ".slide-wrapper");

slide1.init();
console.log(slide1);

slide1.changeSlide(3);
slide1.activePrevSlide();