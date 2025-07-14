import { greeting } from "./greeting.js";
import "./styles.css";
console.log(greeting);

//change pages with the button 
const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => {
    window.location.href = 'about.html';
});