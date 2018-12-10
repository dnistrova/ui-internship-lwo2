const articlesSection = document.querySelector('.blog-articles');
const blogsSection = document.querySelector('.footer-blogs');

function RenderArticleItem(model) {
  const {previewImg, title, description, watched, comments, published} = model;
  const day = new Date(published).getDate();
  const month = formatMonth(published);
  const element = document.createElement('article');

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
  res.blogs.forEach(((model) => {
    blogsSection.appendChild(new RenderBlogItem(model));
  }));
  const blogs = res.blogs.filter((blog) => {
    return res.latest.includes(blog.id);
  });
  blogs.forEach(((model)=> {
    articlesSection.appendChild(new RenderArticleItem(model));
  }));
}

function formatMonth(published) {
  const date = new Date(published);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function RenderBlogItem(model) {
  const {previewImg, title, published} = model;
  const date = showFormattedDate(new Date(published));
  const element = document.createElement('div');
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

function showFormattedDate(published) {
  const date = new Date(published);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const MMM = months[date.getMonth()];

  return MMM + ' ' + date.getDate() + ', ' + date.getFullYear();
}

fetch('http://localhost:3000/api/blogs')
  .then(response => response.json())
  .then(renderer);
