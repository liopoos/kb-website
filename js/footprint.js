/**
 * Created by hades on 2017/6/28.
 */
function my_init() {
    var map = new AMap.Map('footprint', {
        zoom: 10,
        center: [116.39, 39.9],
        scrollWheel: false,
        zoomEnable: false,
        dragEnable: false
        //mapStyle:'amap://styles/dark'
    });

    function convert() {
        AMap.convertFrom(lnglats, 'gps',
            function (status, result) {

            });
    }

    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'],
        function () {
        });

    var infoWindow = new AMap.InfoWindow();
    convert();
    for (var i = 0, marker; i < lnglats.length; i++) {
        marker = new AMap.Marker({
            position: lnglats[i],
            map: map
        });
        marker.content = msg[i];
        marker.on('click', markerClick);
    }
    map.setFitView();
    function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }

    function writeObj(obj) {
        var description = "";
        for (var i in obj) {
            var property = obj[i];
            description += i + " = " + property + "\n";
        }
        alert(description);
    }

}