$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.714905,37.6807497],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([55.714905,37.6807497], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
    });

    myMap.geoObjects.add(myPlacemark);
}
