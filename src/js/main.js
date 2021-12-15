const btnLang = document.querySelector('.btn-searchlang');
const lang = document.querySelector('.nav-select-lang');

const btnSearch = document.querySelector('.btn-search');
const search = document.querySelector('.nav-search');

const btnRegion = document.querySelector('.btn-region');
const region = document.querySelector('.region-list');

const btnCity = document.querySelector('.btn-city');
const city = document.querySelector('.city-list');

const btnJob = document.querySelector('.btn-job');
const job = document.querySelector('.job-list');

const relatedBtn = document.querySelector('.related-list');
const relatedList = document.querySelector('.related-items');

const btnIns = document.querySelector('.btn-ins');
const insList = document.querySelector('.insta-list');

const btnFace = document.querySelector('.btn-face');
const faceList = document.querySelector('.face-list');

const btnGit = document.querySelector('.btn-git');
const inList = document.querySelector('.in-list');

const btnYou = document.querySelector('.btn-you');
const youList = document.querySelector('.you-list');

const none = document.querySelectorAll('.btn-off');

// function checkFlag() {
//   onEl.classList.remove('btn-off');
// }

btnLang.addEventListener('click', () => {
  checkFlag();
  lang.classList.toggle('btn-off');
  lang.classList.add('on');
});

btnSearch.addEventListener('click', () => {
  checkFlag();
  search.classList.toggle('btn-off');
  search.classList.add('on');
});

btnRegion.addEventListener('click', () => {
  checkFlag();
  region.classList.toggle('btn-off');
  region.classList.add('on');
});

btnCity.addEventListener('click', () => {
  checkFlag();
  city.classList.toggle('btn-off');
  city.classList.add('on');
});

btnJob.addEventListener('click', () => {
  checkFlag();
  job.classList.toggle('btn-off');
  job.classList.add('on');
});

relatedBtn.addEventListener('click', () => {
  checkFlag();
  relatedList.classList.toggle('btn-off');
  relatedList.classList.add('on');
});

btnIns.addEventListener('click', () => {
  checkFlag();
  insList.classList.toggle('btn-off');
  insList.classList.add('on');
});

btnFace.addEventListener('click', () => {
  checkFlag();
  faceList.classList.toggle('btn-off');
  faceList.classList.add('on');
});

btnGit.addEventListener('click', () => {
  checkFlag();
  inList.classList.toggle('btn-off');
  inList.classList.add('on');
});

btnYou.addEventListener('click', () => {
  checkFlag();
  youList.classList.toggle('btn-off');
  youList.classList.add('on');
});
