const article1 = {
  img: 'img/blog1.png',
  previewImg: 'img/footer-image-1.png',
  day: '15',
  month: 'Jan',
  title: 'Lorem ipsum dolor sit amet',
  watched: '542',
  comments: '17',
  date: 'Jan 9, 2016',
};
const articles = document.querySelector('.three-images.blog-articles');
const blogs = document.querySelector('.footer-blogs');

function renderLatestArticle(image, day, month, heading, viewsCounter, commentsCounter) {
  const element = document.createElement('DIV');
  element.classList.add('template-article');

  const article = `
    <article class="template-article">
      <img src="${image}" alt="">
      <div class="calendar">
        <p><span>${day}</span> ${month}</p>
      </div>
      <div class="latest-blog-paragraph">
        <h2>${heading}</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="counter">
        <p><span><i class="far fa-eye"></i></span> ${viewsCounter}</p>
        <p><i class="fas fa-comment-dots"></i> ${commentsCounter}</p>
      </div>
    </article>
  `;

  element.innerHTML = article;
  articles.append(element);
}

renderLatestArticle(article1.img,
    article1.day, article1.month,
    article1.title, article1.watched,
    article1.comments);

function renderBlogArticle(image, heading, date) {
  const element = document.createElement('DIV');
  element.classList.add('footer-blog');

  const blog = `
    <div class="footer-blog-image">
      <img src="${image}" alt="">
    </div>
    <div class="footer-blog-text">
      <p>${heading}</p>
      <h5 class="footer-blog-date">${date}</h5>
    </div>
    </div>
  `;

  element.innerHTML = blog;
  blogs.append(element);
}

renderBlogArticle(article1.previewImg,
    article1.title,
    article1.date);
