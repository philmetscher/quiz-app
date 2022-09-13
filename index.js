import { createCard, cards } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

cards.forEach((card) => {
  const newCard = createCard(
    card.question,
    card.answer,
    card.tags,
    card.isBookmarked
  );

  cardContainer.append(newCard);
});
