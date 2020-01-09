$(function () {
    let scroll_timer;
    let displayed = false;
    let $message = $('#message a');
    let $window = $(window);
    let top = $(document.body).children(0).position().top;
    $window.scroll(function () {
        window.clearTimeout(scroll_timer);
        scroll_timer = window.setTimeout(function () {
            if ($window.scrollTop() <= top) {
                displayed = false;
                $message.fadeOut(500);
            } else if (displayed == false) {
                displayed = true;
                $message.stop(true, true).show().click(function () {
                    $message.fadeOut(500);
                });
            }
        }, 100);
    });
});