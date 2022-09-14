import { createCard } from "../card/card.js";

const form = document.querySelector('[data-js="questionForm"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  data.isBookmarked = false;

  const newCard = createCard(data.question, data.answer, data.tags);
  cardContainer.append(newCard);
});
