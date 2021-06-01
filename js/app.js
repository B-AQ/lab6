
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//code from w3school

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ========================== Seattle ==========================

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
      this.cusHourArray.push(random(this.min, this.max));

    }

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.cusHourArray.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
      this.total+=this.cookiesHourArray[i];
      console.log(this.cusHourArray[i]);
    }

  },

};

Seattle.cusPerHour();
Seattle.cookiesPerHour();


//========== DOM Seattle ==========

let parents= document.getElementById('cookiessales');
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
h2Element.textContent='Seattle';



let ulElement=document.createElement('ul');
articleElement.appendChild(ulElement);

for (let i = 0; i < Seattle.cusHourArray.length; i++) {
  let liElement=document.createElement('li');
  // appending
  ulElement.appendChild(liElement);
  liElement.textContent=hours[i]+' : '+ Seattle.cookiesHourArray[i]+' Cookies ';

}

let totalLi=document.createElement('li');
// appending
ulElement.appendChild(totalLi);
totalLi.textContent=(' Total '+Seattle.total+ ' Cookies ');



// ========================== Tokyo ==========================

let tokyo = {
  name: 'Tokyo',
  min: 3, //Customer
  max: 24, //Customer
  avg: 1.2, //Avg Cookie
  cusHourArray: [],
  cookiesHourArray: [],
  total: 0,

  cusPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cusHourArray.push(random(this.min, this.max));

    }

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.cusHourArray.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
      this.total+=this.cookiesHourArray[i];
      console.log(this.cusHourArray[i]);
    }

  },

};

tokyo.cusPerHour();
tokyo.cookiesPerHour();

//========== DOM Tokyo ==========




// ========================== Dubai ==========================

let Dubai = {
  name: 'Dubai',
  min: 11, //Customer
  max: 38, //Customer
  avg: 3.7, //Avg Cookie
  cusHourArray: [],
  cookiesHourArray: [],
  total: 0,

  cusPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cusHourArray.push(random(this.min, this.max));

    }

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.cusHourArray.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
      this.total+=this.cookiesHourArray[i];
      console.log(this.cusHourArray[i]);
    }

  },

};

Dubai.cusPerHour();
Dubai.cookiesPerHour();

//========== DOM Dubai ==========




// ========================== Paris ==========================

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
      this.cusHourArray.push(random(this.min, this.max));

    }

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.cusHourArray.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
      this.total+=this.cookiesHourArray[i];
      console.log(this.cusHourArray[i]);
    }

  },

};

Paris.cusPerHour();
Paris.cookiesPerHour();

//========== DOM Paris ==========





// ========================== Lima ==========================

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
      this.cusHourArray.push(random(this.min, this.max));

    }

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.cusHourArray.length; i++) {
      this.cookiesHourArray.push(Math.floor(this.avg * this.cusHourArray[i]));
      this.total+=this.cookiesHourArray[i];
      console.log(this.cusHourArray[i]);
    }

  },

};

lima.cusPerHour();
lima.cookiesPerHour();

//========== DOM lima ==========
