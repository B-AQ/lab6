
'use strict';


// // Lima	2	16	4.6

// Seattle

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let Seattle = {
  name: 'Seattle',
  min: 23, //Customer
  max: 65, //Customer
  avg: 6.3, //Avg Cookie
  cusHourArray: [],
  cookiesHourArray: [],
  total: 0,

  cusPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cusHourArray.push(hourly(this.min, this.max));
    }
    console.log(this.cusHourArray);
  },


  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
    }
    console.log(this.cookiesHourArray);
  },


  // totalCookiesCustomer: function () {
  //   this.total.push(this.cookiesHourArray + this.cusPerHour);
  //   console.log(this.total);
  // },
};

let parent= document.getElementById('cookiessales');


let articleElement=document.createElement('article');
// appending
parent.appendChild(articleElement);

console.log(parent);

let ulElement=document.createElement('ul');

articleElement.appendChild(ulElement);

for (let i = 0; i < Seattle.cusHourArray; i++) {
  let liElement=document.createElement('i');

  // appending
  ulElement.appendChild(liElement);

  liElement.textContent=Seattle.cusHourArray[i];

}

let imgElement=document.createElement('img');
// appending
articleElement.appendChild(imgElement);

imgElement.setAttribute('src','img/salmon.png');


//code from w3school

function hourly(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
Seattle.cusPerHour();
Seattle.cookiesPerHour();
// Seattle.totalCookiesCustomer();


// Tokyo
let Tokyo = {
  name: 'Tokyo',
  min: 3, //Customer
  max: 24, //Customer
  avg: 1.2, //Avg Cookie
  cusHourArray: [],
  cookiesHourArray: [],
  total: 0,

  cusPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cusHourArray.push(hourly(this.min, this.max));
    }
    console.log(this.cusHourArray);
  },


  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
    }
    console.log(this.cookiesHourArray);
  },

};

for (let i = 0; i < Tokyo.cusHourArray; i++) {

  let liElement=document.createElement('i');

  // appending
  ulElement.appendChild(liElement);

  liElement.textContent=Tokyo.cusHourArray[i];

}
Tokyo.cusPerHour();
Tokyo.cookiesPerHour();


// // Dubai
let Dubai = {
  name: 'Seattle',
  min: 11, //Customer
  max: 38, //Customer
  avg: 3.7, //Avg Cookie
  cusHourArray: [],
  cookiesHourArray: [],
  total: 0,

  cusPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cusHourArray.push(hourly(this.min, this.max));
    }
    console.log(this.cusHourArray);
  },


  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
    }
    console.log(this.cookiesHourArray);
  },


};

for (let i = 0; i < Dubai.cusHourArray; i++) {

  let liElement=document.createElement('i');

  // appending
  ulElement.appendChild(liElement);

  liElement.textContent=Dubai.cusHourArray[i];

}

Dubai.cusPerHour();
Dubai.cookiesPerHour();


// // Paris
let Paris = {
  name: 'Paris',
  min: 20, //Customer
  max: 38, //Customer
  avg: 2.3, //Avg Cookie
  cusHourArray: [],
  cookiesHourArray: [],
  total: 0,

  cusPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cusHourArray.push(hourly(this.min, this.max));
    }
    console.log(this.cusHourArray);
  },


  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
    }
    console.log(this.cookiesHourArray);
  },


};

for (let i = 0; i < Paris.cusHourArray; i++) {

  let liElement=document.createElement('i');

  // appending
  ulElement.appendChild(liElement);

  liElement.textContent=Paris.cusHourArray[i];

}

Paris.cusPerHour();
Paris.cookiesPerHour();




// // Lima
let lima = {
  name: 'lima',
  min: 2, //Customer
  max: 16, //Customer
  avg: 4.6, //Avg Cookie
  cusHourArray: [],
  cookiesHourArray: [],
  total: 0,

  cusPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cusHourArray.push(hourly(this.min, this.max));
    }
    console.log(this.cusHourArray);
  },


  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
    }
    console.log(this.cookiesHourArray);
  },


};

for (let i = 0; i < lima.cusHourArray; i++) {

  let liElement=document.createElement('i');

  // appending
  ulElement.appendChild(liElement);

  liElement.textContent=lima.cusHourArray[i];

}


lima.cusPerHour();
lima.cookiesPerHour();
