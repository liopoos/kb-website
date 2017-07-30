/**
 * Created by hades on 2017/6/29.
 */
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
    })
    $("#s2t-btn").click(function () {
        if ($('#t2s').val() == "s") {
            $('html').s2t();
            $('#s2t').html('<li class="icon-exchange"></li>&nbsp;&nbsp;切换为简体');
            $('#t2s').attr('value', 't');
        }
        else if ($('#t2s').val() == 't') {
            $('html').t2s();
            $('#s2t').html('<li class="icon-exchange"></li>&nbsp;&nbsp;切換為繁體');
            $('#t2s').attr('value', 's');
        }

    })

});
