
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.722820, 20.498674],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #282828; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наше местоположение',
            balloonContent: 'Советский проспект, 7'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'icon/marker.png',
            // Размеры метки.
            iconImageSize: [50, 72],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -70]
        });
    myMap.geoObjects
        .add(myPlacemark)
});