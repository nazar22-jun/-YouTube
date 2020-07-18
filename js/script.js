google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);


let arr = tank;

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable(arr);

    var options = {
        colorAxis: {
            colors: ['green', 'blue']
        }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    document.getElementById('regions_div').style.height = (5 / 9) * document.getElementById('regions_div').offsetWidth + "px";

    chart.draw(data, options);
    showTable(arr);
}

window.onload = resize;
window.onresize = resize;

function resize() {
    drawRegionsMap();
}


function showTable(arr) {
    let out = '';
    for (let i = 1; i < arr.length; i++) {
        out += '<li class="list-group-item d-flex justify-content-between align-item-center">' + arr[i][0] + '<span class="">' + arr[i][1] + '</li>';
    }
    document.querySelector('.list-group').innerHTML = out;
}

document.querySelectorAll(".btn").forEach(elment => {
    elment.onclick = function () {
        let data = this.getAttribute('data');
        console.log(data);
        if (data == 'ship') {
            arr = ship;
        }
        if (data == 'aircrash') {
            arr = aircrash;
        }
        if (data == 'tank') {
            arr = tank;
        }
        if (data == "submarine") {
            arr = submarine;
        }
        if (data == army) {
            arr = army;
        }
        drawRegionsMap();
    };
});