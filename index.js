const questions = document.querySelectorAll(".question-block");
const box = document.querySelector("#illustration-box");

questions.forEach((question) => {
  const questionHeadline = question.querySelector("h4");
  question.addEventListener("click", () => {
    handleAnswer(question);
  });
  question.addEventListener("mouseenter", () => {
    questionHeadline.style.color = "hsl(14, 88%, 65%)";
    box.style.left = "-136px";
  });
  question.addEventListener("mouseleave", () => {
    box.style.left = "-96px";
    questionHeadline.style.color = "hsl(240, 6%, 50%)";
  });
});

function handleAnswer(ele) {
  questions.forEach((question) => {
    if (question !== ele) {
      const answer = question.querySelector(".answer");
      answer.classList.remove("show");
      const arrow = question.querySelector(".arrow");
      arrow.classList.remove("rotate");
      const questionHeadline = question.querySelector("h4");
      questionHeadline.classList.remove("active");
    }
  });

  const answer = ele.querySelector(".answer");
  answer.classList.toggle("show");
  const arrow = ele.querySelector(".arrow");
  arrow.classList.toggle("rotate");
  const questionHeadline = ele.querySelector("h4");
  console.log(questionHeadline);
  questionHeadline.classList.toggle("active");
  questionHeadline.style.color = "hsl(240, 6%, 50%)";
}
