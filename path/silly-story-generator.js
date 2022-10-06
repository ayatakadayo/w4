const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温, :inserty: で外は寒かった。 :insertx: は出かけた。 :insertz: に着いた。:insertx: 体重50キロの :insertx: は驚いたが、 customName は驚かなかった。 :insertz: にはよくあることだった。';
const insertX = ['ミッキーマウス', 'スヌーピー', 'サンタクロース'];
const insertY = ['-5度', '9度', '-30度'];
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

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
