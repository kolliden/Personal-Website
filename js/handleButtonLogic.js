let activeIndex = 0;

let articles = document.getElementsByClassName("article");

function handleLeftClick() {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
          nextArticle = document.querySelector(`[data-index="${nextIndex}"]`)

    currentArticle.dataset.status = "inactive";
    nextArticle.dataset.status = "active";

    activeIndex = nextIndex;
}

function handleRightClick() {
    const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
          nextArticle = document.querySelector(`[data-index="${nextIndex}"]`)

    currentArticle.dataset.status = "inactive";
    nextArticle.dataset.status = "active";

    activeIndex = nextIndex;
}