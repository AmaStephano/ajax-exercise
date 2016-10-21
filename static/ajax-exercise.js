"use strict";


// PART 1: SHOW A FORTUNE

//evt isn't necessary here since you aren't actually pulling any 
//event data
function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function(result){
        $('#fortune-text').html(result);
    });
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    //got zipcode and put it into url
    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(result){
            $('#weather-info').html(result.forecast);

    })
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form

    //javascript object
    var formInputs = {
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
    }

    $.post('order-melons.json', formInputs, function(result){ 

        if (result.code === 'ERROR') {
            $('#order-status').html(result.msg).addClass("order-error");
        }

        else {
            $('#order-status').html(result.msg).removeClass("order-error");
        }
    });
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


