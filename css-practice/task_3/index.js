function renderArticleItem(model) {
  const {previewImg, title, description, watched, comments, published} = model;
  const element = document.createElement('article');
  const {month, day} = parseDate(published);

  const article = `
      <img src="${previewImg}" alt="">
      <div class="calendar">
        <p><span>${day}</span> ${month}</p>
      </div>
      <div class="latest-blog-paragraph">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      <div class="counter">
        <p><span><i class="far fa-eye"></i></span> ${watched}</p>
        <p><i class="fas fa-comment-dots"></i> ${comments}</p>
      </div>
  `;

  element.innerHTML = article;

  return (element);
}

function renderer(res) {
  const articlesSection = document.querySelector('.blog-articles');
  const blogsSection = document.querySelector('.footer-blogs');
  const latestBlogs = [];
  const footerBlogs = [];

  res.blogs.forEach((blog) => {
    if (res.latest.includes(blog.id)) {
      latestBlogs.push(blog);
    } else {
      footerBlogs.push(blog);
    }
  });
  latestBlogs.forEach(((model)=> {
    articlesSection.appendChild(new renderArticleItem(model));
  }));
  footerBlogs.forEach(((model) => {
    blogsSection.appendChild(new renderBlogItem(model));
  }));
}

function parseDate(published) {
  const date = new Date(published);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();

  return {day, month, year};
}

function renderBlogItem(model) {
  const {previewImg, title, published} = model;
  const element = document.createElement('div');
  const {month, day, year} = parseDate(published);
  const date = `${month} ${day}, ${year}`;
  element.classList.add('footer-blog');

  const blog = `
    <div class="footer-blog-image">
      <img src="${previewImg}" alt="">
    </div>
    <div class="footer-blog-text">
      <p>${title}</p>
      <h5 class="footer-blog-date">${date}</h5>
    </div>
  `;

  element.innerHTML = blog;
  return (element);
}

fetch('http://localhost:3000/api/blogs')
  .then(response => response.json())
  .then(renderer);
