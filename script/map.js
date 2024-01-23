
ymaps.ready(function () {
    
    var myMap = new ymaps.Map('map', {
            center: [54.711868, 20.521644],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #282828; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'тц Ванда',
            balloonContent: '9 этаж, кабинет 905'
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
    
        //масштабирование на CTRL
        myMap.behaviors.disable(['scrollZoom']);
        var body = document.getElementsByTagName('body')[0];
        body.onkeydown = callbackDown;
        body.onkeyup = callbackUp;
        function callbackDown(e){
            if(e.keyCode === 17){
                myMap.behaviors.enable(['scrollZoom']);
            }
        }
        function callbackUp(e){
            if(e.keyCode === 17){
                myMap.behaviors.disable(['scrollZoom']);
            }
        }
});