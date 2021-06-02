
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let countrys =[];
let totalArray =[];

//code from w3school

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ========================== Country ==========================

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

Country.prototype.calcCustomersEachHour=function () {

  for (let i = 0; i < hours.length; i++) {
    this.cusHourArray.push(random(this.minCustomer, this.maxCustomer));
  }
};

Country.prototype.calcCookiesEachHour=function () {

  for (let i = 0; i < this.cusHourArray.length; i++) {
    this.cookiesHourArray.push(Math.floor(this.avgCookies * this.cusHourArray[i]));
    this.total+=this.cookiesHourArray[i];
  }
};

//====================  DOM Countrys ==============================

let parents = document.getElementById('allcountrys');

// Creating the table
let tableElement = document.createElement('table');

parents.appendChild(tableElement);


// ========= Head Row =========

function headHoursRow (){

  let firstRow = document.createElement('tr');

  // Append for the table
  tableElement.appendChild(firstRow);

  // Making the first th
  let thName = document.createElement('th');

  // Append for the Row
  firstRow.appendChild(thName);

  // Giving text Content
  thName.textContent='Name';

  for (let i = 0; i < hours.length; i++){
    // Creating the th
    let hourRow = document.createElement('th');

    // Append to the raw
    firstRow.appendChild(hourRow);

    // Giving text Content
    hourRow.textContent = hours[i];
  }

  // Making the last th
  let DailyLocationTotal=document.createElement('th');

  // Appending
  firstRow.appendChild(DailyLocationTotal);

  // Giving text Content
  DailyLocationTotal.textContent = 'theDailyLocationTotal';

}

// headHoursRow();



// =========Locations Results prototype Render =========

Country.prototype.render=function(){

  // Making row for the shop
  let dataRow=document.createElement('tr');

  // Append to the table
  tableElement.appendChild(dataRow);
  // Making the name td
  let nameData=document.createElement('td');
  // Apped
  dataRow.appendChild(nameData);
  // Text content
  nameData.textContent=this.countryName;

  for (let i = 0; i < hours.length; i++) {

    // Create the td for the cookies
    let cookiesTd=document.createElement ('td');

    // Append
    dataRow.appendChild(cookiesTd);

    // Text content
    cookiesTd.textContent=this.cookiesHourArray[i];

  }

  // Make the total td
  let totalTd=document.createElement('td');

  // Append
  dataRow.appendChild(totalTd);

  // Text content
  totalTd.textContent=this.total;


};

// ========= Making the lastraw Total =========


function makingLastRow() {

  // Making last row
  let lastRaw=document.createElement('tr');
  // console.log(tableElement);

  // Appending
  tableElement.appendChild(lastRaw);

  // Making last row th
  let firstTh=document.createElement('th');

  // Appending
  lastRaw.appendChild(firstTh);

  // Text Content
  firstTh.textContent='total';

  // Making the total of everything
  let totalOfTotal=0;

  for (let i = 0; i < hours.length; i++) {
    console.log(countrys);

    let totalForEachHour=0;
    // Create a variable
    // console.log(countrys[i]);

    for (let j = 0; j < countrys.length; j++) {
      // console.log(countrys[j].cookiesHourArray[i]);
      totalForEachHour+=countrys[j].cookiesHourArray[i];
      totalOfTotal+=countrys[j].cookiesHourArray[i];
    }
    totalArray.push(totalForEachHour);


    // console.log(totalArray);

    let dataTh=document.createElement('th');

    // Append
    lastRaw.appendChild(dataTh);

    // Text content
    dataTh.textContent=totalForEachHour;

  }
  console.log(totalOfTotal);

  let finalTh=document.createElement('th');

  // Append
  lastRaw.appendChild(finalTh);

  // Text content
  finalTh.textContent=(totalOfTotal);

}

headHoursRow();

for (let i = 0; i < countrys.length; i++) {
  countrys[i].calcCustomersEachHour();
  countrys[i].calcCookiesEachHour();
  countrys[i].render();
}
makingLastRow();

