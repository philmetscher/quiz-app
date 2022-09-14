import { createEl } from "../js-functions/createEl.js";

function createCard(question, answer, tags, bookmarked) {
  const card = createEl("card", "card");
  card.innerHTML = `
  <div class="card__question-wrapper">
    <p class="card__question" data-js="question">
      What property flips the axes in flexbox?
    </p>
    <button class="card__btn" data-js="toggleAnswer">
      Show Answer
    </button>
    <ul class="card__tags">
      <li class="card__tag">#html</li>
      <li class="card__tag">#css</li>
      <li class="card__tag">#flexbox</li>
    </ul>
  </div>
  <div class="card__answer-wrapper" data-js="answer">
    <p>flex-direction</p>
  </div>
  <button
    class="card__bookmark"
    aria-label="bookmark"
    data-js="bookmarkBtn"
  >
    <i class="fa-solid fa-bookmark"></i>
  </button>`;

  //append question & answer
  const cardQuestion = card.querySelector('[data-js="question"]');
  const cardAnswer = card.querySelector('[data-js="answer"]');
  const cardBookmarkBtn = card.querySelector('[data-js="bookmarkBtn"]');
  const cardToggleAnswerBtn = card.querySelector('[data-js="toggleAnswer"]');

  cardQuestion.textContent = question;
  cardAnswer.getElementsByTagName("p").textContent = answer;

  //QUESTION TAG LIST
  //collect all tags
  let questionTags;

  console.log(tags);
  if (tags.indexOf(",")) {
    questionTags = tags.split(",");
  } else {
    questionTags = [tags];
  }

  //iterate through tag-list
  for (const questionTag of questionTags) {
    let listItem = createEl("li", "card__tag");
    listItem.textContent = questionTag;

    //append tags
    card.querySelector("ul.card__tags").append(listItem);
  }

  //add eventlistener to toggle answer
  cardToggleAnswerBtn.addEventListener("click", () => {
    card.classList.toggle("answer-shown");
  });

  //check if card is active & add event Listener
  if (bookmarked) {
    cardBookmarkBtn.classList.add("card__bookmark--active");
  }
  cardBookmarkBtn.addEventListener("click", () => {
    cardBookmarkBtn.classList.toggle("card__bookmark--active");
  });

  return card;
}

const cards = [
  {
    question:
      "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: "kingdomheart,mastereraqus,english voices",
    isBookmarked: true,
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: "danielradcliffe,hewhomustnotbenamed,abracadabra",
    isBookmarked: false,
  },
  {
    question:
      'Which former US president was nicknamed "Teddy" after he refused to shoot a defenseless black bear?',
    answer: "Theodore Roosevelt",
    tags: "usa,president,teddybear",
    isBookmarked: false,
  },
];

export { createCard, cards };
