const today = new Date();
const formattedToday = `${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()}`;
let userDate = document.querySelector('#date-input');
userDate.value = formattedToday;

function getApod(date) {
  const img = document.querySelector('#apod');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const hdLink = document.querySelector('#hd-link');
  fetch(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=ZbYFKEl3L5d9oM3Eal8XTp8MqyRVVK6JeNuNyhYD`
  )
    .then(res => res.json())
    .then(data => {
      img.src = data.url;
      img.alt = data.title;
      title.innerText = data.title;
      description.innerText = data.explanation;
      hdLink.href = data.hdurl;
    });
}

getApod(formattedToday);

const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', () => {
  userDate = document.querySelector('#date-input').value;
  getApod.call(null, userDate);
});
