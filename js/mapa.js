var map;
var markers = []; // Create a marker array to hold your markers

var locations = [
    ['Edifício Angra dos Reis', '-10.9645414', '-37.0549375', 1],
    ['Parmegiano', '-10.9645761', '-37.0535549', 1],
    ['Chop Time', '-10.9690615', '-37.0565717', 1],
    ['Chop Time', '-10.9690615', '-37.0549375', 1]
];

function setMarkers(locations) {
    for (var i = 0; i < locations.length; i++) {
        var beach = locations[i];
        var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: beach[0],
            zIndex: 8
        });
    }
}

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-10.9645414,-37.0549375),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        scrollwheel: false
    }

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    setMarkers(locations);
}

initialize();
