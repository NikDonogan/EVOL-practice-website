/* <link
  rel="preload"
  href="style.css"
  as="style"
  onload="var useThis=this; useThis.onload=null; setTimeout(function(){ useThis.rel='stylesheet'; },3000);"
></link>; */

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "nextscr" ? 1 : -1;
    const screenshots = button
      .closest("[data-carousel]")
      .querySelector("[data-screenshots]");

    const activeScreenshot = screenshots.querySelector("[data-active]");
    let newIndex = [...screenshots.children].indexOf(activeScreenshot) + offset;
    if (newIndex < 0) newIndex = screenshots.children.length - 1;
    if (newIndex >= screenshots.children.length) newIndex = 0;

    screenshots.children[newIndex].dataset.active = true;
    delete activeScreenshot.dataset.active;
  });
});

const gameButtons = document.querySelectorAll("[data-game-button]");
gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.gameButton === "nextgame" ? 1 : -1;
    const protags = button
      .closest("[data-protags]")
      .querySelector("[data-protagsplash]");

    const activeProtag = protags.querySelector("[data-active]");
    let newIndex = [...protags.children].indexOf(activeProtag) + offset;
    if (newIndex < 0) newIndex = protags.children.length - 1;
    if (newIndex >= protags.children.length) newIndex = 0;

    protags.children[newIndex].dataset.active = true;
    delete activeProtag.dataset.active;
  });
});
