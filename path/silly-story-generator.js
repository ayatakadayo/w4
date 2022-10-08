const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ':insertx: は気温 -1度(摂氏) と寒い中出かけた。 :inserty: :insertz: に着いた。体重 50キロ の :insertx: は驚いたが、 Bob は驚かなかった。 :insertz: にはよくあることだった。';
const insertX = ['ミッキーマウス', 'スヌーピー', 'サンタクロース'];
const insertY = ['雪が降っていた。', '雨が降っていた。', '晴れていた。'];
const insertZ = ['ディズニーランド', '千駄ヶ谷', '小平'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }
  
  if (document.getElementById("us").checked) {
    const weight = `110ポンド`;
    const temperature =  `30度(華氏)`;
    newStory = newStory.replace('-1度(摂氏)', temperature);
    newStory = newStory.replace('50キロ', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
