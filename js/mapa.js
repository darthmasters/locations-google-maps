class Mapa{
    constructor(){
        this.map;
        this.locations = [
            ['Edifício Angra dos Reis', '-10.9645414', '-37.0549375', 1],
            ['Parmegiano', '-10.9645761', '-37.0535549', 1],
            ['Chop Time', '-10.9690615', '-37.0565717', 1],
            ['Chop Time', '-10.9690615', '-37.0549375', 1]
        ];
        this.initialize()
    }
    initialize(){
        const mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(-10.9645414,-37.0549375),
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            scrollwheel: false
        };
        this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        this.setMarkers(this.locations);
    }
    setMarkers(){
        for(let i = 0; i < this.locations.length; i++){
            let myLatLng = new google.maps.LatLng(this.locations[i][1], this.locations[i][2]);
            const marker = new google.maps.Marker({
                position: myLatLng,
                map: this.map,
                icon: "images/pin.png",
                animation: google.maps.Animation.DROP,
                title: this.locations[i][0],
                zIndex: 8
            });
        }
    }
}
const maps = new Mapa();
