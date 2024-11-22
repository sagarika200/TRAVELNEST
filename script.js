// Select all sliders on the page
document.querySelectorAll(".slider").forEach((slider) => {
  const cards = slider.querySelector(".cards");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  const cardWidth = slider.querySelector(".card").offsetWidth;
  let index = 0;

  // Move to the previous set of cards
  prev.addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    cards.style.transform = `translateX(-${index * cardWidth}px)`;
  });

  // Move to the next set of cards
  next.addEventListener("click", () => {
    const maxIndex = cards.childElementCount - 1; // Adjust based on number of cards
    index = Math.min(index + 1, maxIndex);
    cards.style.transform = `translateX(-${index * cardWidth}px)`;
  });
});
