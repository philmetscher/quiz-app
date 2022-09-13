import { createCard, cards } from "../card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

const bookmarkedCards = cards.filter((card) => card.isBookmarked);
bookmarkedCards.forEach((card) => {
  const newCard = createCard(
    card.question,
    card.answer,
    card.tags,
    card.isBookmarked
  );
  cardContainer.append(newCard);
});
