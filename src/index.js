import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Bike from './bike.js';

function clearFields() {
  $('#bikeLocation').val("");
  $('.showStolenBike').text("");
}

// function getElements(response) {
//   if (response.bikes[0].title && response.bikes[1].title) {
//     $('.showStolenBike').text(`${response.bikes[0].title},${response.bikes[1].title} `)

//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`)
//   }
// }

// function getElements(response) {
//   if (response.bikes[0].date_stolen) {
//     $('.showStolenBike').text(`${response.bikes[0].date_stolen}`)

//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`)
//   }
// }

function getElements(response) {
  for (let i = 0; i < response.bikes.length; i++){
    if(response.bikes[i].title) {
      $('.showStolenBike').append(`${response.bikes[i].title}<br>`);
    } else {
      $('.showErrors').text(`There was an error: ${response.message}`)
    }
  }
}


// "ibi-0408"  ^[/aA-zZ/]

async function makeApiCall(city) {
  const response = await Bike.getBike(city);
  getElements(response);
}

$(document).ready(function() {
  $('#bikeLocation').click(function() {
    let city = $('#city').val();
    clearFields();
    makeApiCall(city);
  });
});





