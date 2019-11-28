var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');
const url = 'https://restcountries.eu/rest/v2/alpha/' + param;


function renderData(data) {
    const title = $('title')
    title.text(data.name)
    const about = $('.about')
    const country = $(document.createElement('p'))
    country.text('Страна: ' + data.name)
    const region = $(document.createElement('p'))
    region.text('Население: ' + data.population)
    const capital = $(document.createElement('p'))
    capital.text('Регион: ' + data.region)
    const pop = $(document.createElement('p'))
    pop.text('Столица: ' + data.capital)
    about.append(country, region, capital, pop)
}

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadData() {
    $.ajax({
        url: url,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}

$(document).ready(function() {
    jqueryLoadData();
});