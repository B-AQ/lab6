
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let countrys =[];
//code from w3school

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ========================== Seattle ==========================

function Country (name,minCustomer,maxCustomer,avgCookies) {
  this.countryName=name;
  this.minCustomer=minCustomer;
  this.maxCustomer=maxCustomer;
  this.avgCookies=avgCookies;
  this.cusHourArray=[];
  this.cookiesHourArray=[];
  this.total=0;

  countrys.push(this);

}

let seattle=new Country('seattle',23,65,6.3);
console.log(seattle);
let tokyo=new Country('tokyo',3,24,1.2);
console.log(tokyo);
let dubai=new Country('dubai',11,38,3.7);
console.log(dubai);
let paris=new Country('paris',20,38,2.3);
console.log(paris);
let lima=new Country('lima',2,16,4.6);
console.log(lima);

Country.prototype.cusEachHour=function () {

  for (let i = 0; i < hours.length; i++) {
    this.cusHourArray.push(random(this.minCustomer, this.maxCustomer));
  }
},

Country.prototype.cookiesEachHour=function () {

  for (let i = 0; i < this.cusHourArray.length; i++) {
    this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
    this.total+=this.cookiesHourArray[i];
  }
};






//========== DOM Countrys ==========
let parents = document.getElementById('allcountrys');

Country.prototype.render=function() {

  let articleElement=document.createElement('article');
  // appending
  parents.appendChild(articleElement);
  console.log(parents);

  let imgElement=document.createElement('img');
  // appending
  articleElement.appendChild(imgElement);
  imgElement.setAttribute('src','img/salmon.png');

  let h2Element=document.createElement('h2');
  articleElement.appendChild(h2Element);
  h2Element.textContent=this.name;



  let ulElement=document.createElement('ul');
  articleElement.appendChild(ulElement);

  for (let i = 0; i < this.cusHourArray.length; i++) {
    let liElement=document.createElement('li');
    // appending
    ulElement.appendChild(liElement);
    liElement.textContent=hours[i]+' : '+ this.cookiesHourArray[i]+' Cookies ';

  }

  let totalLi=document.createElement('li');
  // appending
  ulElement.appendChild(totalLi);
  totalLi.textContent=(' Total '+this.total+ ' Cookies ');



  let table=document.createElement('table');

  article.appendChild(table);
  
  let dataRow=document.createElement('tr');

  trElement.appendChild(dataRow);

};




for (let i = 0; i < countrys.length; i++) {
  countrys[i].cusEachHour().cookiesEachHour();
  countrys[i].render();
}



