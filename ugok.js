const requestNumber = document.getElementById('requestnumber');
//
const requestDate = document.getElementById('requestdate');
const camNumber = document.getElementById('camnumber');
//
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//let storyText = 'После поступления заявки №/_____ВВЕДИТЕ НОМЕР ЗАЯВКИ_____/ от FROMWHOM /_____ВВЕДИТЕ ДАТУ ПОСТУПЛЕНИЯ ЗАЯВКИ_____/ года о периодической потере изображения с камеры наружного видеонаблюдения №60 была проведена диагностика оборудования и установлен выход из строя :inserty: вследствие :insertz:.';

let storyText = 'После поступления заявки №/_____ВВЕДИТЕ НОМЕР ЗАЯВКИ_____/ от FROMWHOM /_____ВВЕДИТЕ ДАТУ ПОСТУПЛЕНИЯ ЗАЯВКИ_____/ года о :insertx: №/_____ВВЕДИТЕ НОМЕР КАМЕРЫ_____/ была проведена диагностика оборудования и установлен выход из строя :inserty: вследствие :insertz:.';

let insertX = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
let insertY = ['контроллера видеопроцессора','матрицы','блока питания','камеры'];
let insertZ = ['нестабильного питания','попадания влаги','аварии блока бесперебойного питания'];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  //newStory = newStory.replace(':insertx:',xItem);
 // newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(requestNumber.value !== '') {
    const name = requestNumber.value;
    newStory = newStory.replace('/_____ВВЕДИТЕ НОМЕР ЗАЯВКИ_____/', name);
  }

  if(requestDate.value !== '') {
    const name = requestDate.value;
    newStory = newStory.replace('/_____ВВЕДИТЕ ДАТУ ПОСТУПЛЕНИЯ ЗАЯВКИ_____/', name);
  }

  if(camNumber.value !== '') {
    const name = camNumber.value;
    newStory = newStory.replace('/_____ВВЕДИТЕ НОМЕР КАМЕРЫ_____/', name);
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var e = document.getElementById("ddlViewBy");
var value = e.options[e.selectedIndex].value;
//var text = e.options[e.selectedIndex].text;

if (value == 'none') {newStory = newStory.replace(':insertx:','/_____ВЫБЕРИТЕ ОПИСАНИЕ НЕИСПРАВНОСТИ_____/');}
if (value == 'noimage') {newStory = newStory.replace(':insertx:','потере изображения с камеры видеонаблюдения');}
if (value == 'noimageperiodically') {newStory = newStory.replace(':insertx:','периодической потере изображения с камеры видеонаблюдения');}
if (value == 'imagescrambled') {newStory = newStory.replace(':insertx:','помехах при выводе изображения с камеры видеонаблюдения');}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(document.getElementById("pcn").checked) {
    newStory = newStory.replace('FROMWHOM', 'ПЦН');
  }

  if(document.getElementById("batyr").checked) {
    newStory = newStory.replace('FROMWHOM', 'Дежурной части Батыр');
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  story.textContent = newStory;
  story.style.visibility = 'visible';
}