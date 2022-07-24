//const sliderTag = document.getElementById('slider1');
//const imgTag = sliderTag.getElementsByClassName('img');

//const previousButton = document.querySelector('.previous');
//const nextButton = document.querySelector('.next');

//nextButton.addEventListener('click', () => {
  //  sliderTag.append(imgTag[0]);
//});

//previousButton.addEventListener('click', () => {
  //  sliderTag.prepend(imgTag[imgTag.length-1])
//});



const oneTag = document.querySelector('.one');
const twoTag = document.querySelector('.two');
const threeTag = document.querySelector('.three');
const fourTag = document.querySelector('.four');

const menuTag = document.querySelector('.menu');
const slideroneTag = document.querySelector('.slider1');
const slidertwoTag = document.querySelector('.slider2');
const sliderthreeTag = document.querySelector('.slider3');
const sliderfourTag = document.querySelector('.slider4');


oneTag.addEventListener('click', () => {
    slidertwoTag.style.display='none';
    sliderthreeTag.style.display='none';
    sliderfourTag.style.display='none';
    menuTag.append(slideroneTag);
    slideroneTag.style.display='flex';
    slideroneTag.style.flexDirection='row';
    slideroneTag.style.justifyContent='space-between';
    slideroneTag.style.alignItem='center'; 

});


twoTag.addEventListener('click', () => {
    slideroneTag.style.display='none';
    sliderthreeTag.style.display='none';
    sliderfourTag.style.display='none';
    menuTag.append(slidertwoTag);
    slidertwoTag.style.display='flex';
    slidertwoTag.style.flexDirection='row';
    slidertwoTag.style.justifyContent='space-between';
    slidertwoTag.style.alignItem='center';   
    
});

threeTag.addEventListener('click', () => {
    slideroneTag.style.display='none';
    slidertwoTag.style.display='none';
    sliderfourTag.style.display='none';
    menuTag.append(sliderthreeTag);
    sliderthreeTag.style.display='flex';
    sliderthreeTag.style.flexDirection='row';
    sliderthreeTag.style.justifyContent='space-between';
    sliderthreeTag.style.alignItem='center';   
    sliderthreeTag.style.transition=`all 1s ease`; 
});

fourTag.addEventListener('click', () => {
    slideroneTag.style.display='none';
    sliderthreeTag.style.display='none';
    slidertwoTag.style.display='none';
    menuTag.append(sliderfourTag);
    sliderfourTag.style.display='flex';
    sliderfourTag.style.flexDirection='row';
    sliderfourTag.style.justifyContent='space-between';
    sliderfourTag.style.alignItem='center';   
    sliderfourTag.style.transition=`all 1s ease`; 
});

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

const first = document.querySelector('.first');
const firstPerson = document.querySelector('.firstPerson');
const second = document.querySelector('.second');
const secondPerson = document.querySelector('.secondPerson');
const third = document.querySelector('.third');
const thirdPerson = document.querySelector('.thirdPerson');
const fourth = document.querySelector('.fourth');
const fourthPerson = document.querySelector('.fourthPerson');
const hideMenu = document.querySelector('.hideMenu');
const hideMenu1 = document.querySelector('.hideMenu1');
const hideMenu2 = document.querySelector('.hideMenu2');
const hideMenu3 = document.querySelector('.hideMenu3');
const favMenu = document.querySelector('.favMenu');
const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');

btn1.addEventListener('click', () => {
  firstPerson.style.display='none';
  hideMenu.style.display='block';
  first.append(hideMenu);

  close1.addEventListener('click' , () => {
    firstPerson.style.display='flex';
    firstPerson.style.flexDirection='column';
    firstPerson.style.justifyContent='center';
    firstPerson.style.alignItem='center';
    hideMenu.style.display='none';
    first.append(firstPerson);
  });
  
});

btn2.addEventListener('click', () => {
  secondPerson.style.display='none';
  hideMenu1.style.display='block';
  second.append(hideMenu1);

  close2.addEventListener('click' , () => {
    secondPerson.style.display='flex';
    secondPerson.style.flexDirection='column';
    secondPerson.style.justifyContent='center';
    secondPerson.style.alignItem='center';
    hideMenu1.style.display='none';
    second.append(secondPerson);
  });
  
});

btn3.addEventListener('click', () => {
  thirdPerson.style.display='none';
  hideMenu2.style.display='block';
  third.append(hideMenu2);

  close3.addEventListener('click' , () => {
    thirdPerson.style.display='flex';
    thirdPerson.style.flexDirection='column';
    thirdPerson.style.justifyContent='center';
    thirdPerson.style.alignItem='center';
    hideMenu2.style.display='none';
    third.append(thirdPerson);
  });
  
});

btn4.addEventListener('click', () => {
  fourthPerson.style.display='none';
  hideMenu3.style.display='block';
  fourth.append(hideMenu3);

  close4.addEventListener('click' , () => {
    fourthPerson.style.display='flex';
    fourthPerson.style.flexDirection='column';
    fourthPerson.style.justifyContent='center';
    fourthPerson.style.alignItem='center';
    hideMenu3.style.display='none';
    fourth.append(fourthPerson);
  });

  
});


const lastOrderbtn = document.querySelector('.lastOrderbtn');
const emailTag = document.querySelector('.email');
emailTag.value='';
let emailValue;
lastOrderbtn.addEventListener('click' , () => {
   emailValue = emailTag.value;

  if(!(emailValue.includes('@gmail.com'))){
      
    emailTag.classList.add('wrongEmailClass');
    emailTag.value='Your email is invalid!';
    //console.log(wrongEmail);


    setTimeout( () => {
     emailTag.value ='';
     emailTag.classList.remove('wrongEmailClass');
    },1500);
  }

});

length = 11;
phLength = parseInt(length);
const phoneno = document.querySelector('.phoneno');
phoneno.value ='';
lastOrderbtn.addEventListener('click',() => {
  getPhoneValue = phoneno.value;
  phoneLength =getPhoneValue.length;
  console.log('length is: ',phoneLength);
  if (phoneLength !== phLength){
    phoneno.classList.add('phClass'); 
    phoneno.value = 'Your phone number is invalid !';
/*     setTimeout( () => {
      phoneno.value ='';
     },2000);*/

  }
  if(phoneno.value == ''){
    phoneno.value ='Plazz enter your phone number !!!';
  }
  setTimeout( () => {
    phoneno.value = '';
    phoneno.classList.remove('phClass');
  }, 1500);

});


const nameTag = document.querySelector('.name');
const food = document.querySelector('.food');
const address = document.querySelector('.address');

nameTag.value ='';
lastOrderbtn.addEventListener('click' , () => {
  if(nameTag.value ===  ''){
    nameTag.classList.add('nameTagClass');
    nameTag.value = 'Plazz enter your name !!!';

  };

  setTimeout( () => {
    nameTag.value = '';
    nameTag.classList.remove('nameTagClass');
  }, 1500);
});

food.value='';
lastOrderbtn.addEventListener('click' , () => {
  if(food.value ===  ''){
    food.classList.add('foodClass');
    food.value ='Pazz enter your order !!!';
  };

  setTimeout( () => {
    food.value = '';
    food.classList.remove('foodClass');
  }, 1500);
});


address.value='';
lastOrderbtn.addEventListener('click' , () => {
  if(address.value ===  ''){
    address.classList.add('addressClass');
    address.value='Plazz enter your address !!!';
  };

  setTimeout( () => {
    address.value = '';
    address.classList.remove('addressClass');
  }, 1500);
});


