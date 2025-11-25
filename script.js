const dashboardContainer = document.getElementById('dashboardContainer');
const toggleBtn = document.getElementById('toggleBtn');
const ball = document.getElementById('myBall');
const btnContainer = document.getElementById('darkModeContent')

const body = document.body;


toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  btnContainer.classList.toggle('active')
  body.classList.toggle('dark')

  const darkMode = toggleBtn.classList.contains('active');

  dashboardContainer.style.backgroundColor = darkMode ? "black" : "white"
})