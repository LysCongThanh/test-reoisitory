$(document).ready(function () {

    $(document).ready(function () {
        $("#delay").click(function (event) {
            event.preventDefault(); // prevent the default behavior of the link
            setTimeout(function () {
                // calculate the height of the header, so that the section will appear just below it
                var headerHeight = $("header").outerHeight();
                $("html, body").animate({
                    scrollTop: $("#book-tour").offset().top - headerHeight + 170
                }, 1000); // animate the scrolling over a period of 1000 milliseconds (1 second)
            }, 100); // delay for 1000 milliseconds (1 second)
        });
    });

    // Ẩn tất cả các phần tử có class 'travel-item'
    $('.travel-item').hide();

    // Hiển thị phần tử đầu tiên có class 'travel-item'
    $('.travel-item:first-child').fadeIn();

    // Khi người dùng click vào một mục trong menu:
    $('.menu .menu-list').click(function () {

        // Lấy id của phần tử sẽ được hiển thị (được lưu trữ trong thuộc tính href của liên kết)
        let id_tab_content = $(this).children('.menu-link').attr('href');

        // Ẩn tất cả các phần tử có class 'travel-item'
        $('.travel-item').hide();

        // Hiển thị phần tử được chọn
        $(id_tab_content).fadeIn();

        // Ngăn chặn trình duyệt tải lại trang khi người dùng click vào một mục trong menu
        return false;
    })

    // Khi người dùng click vào nút 'up':
    $('#up').click(function () {
        // Cuộn lên đầu trang trong 1800ms
        $("html, body").animate({ scrollTop: 0 }, 1800);
        // Ngăn chặn trình duyệt tải lại trang khi người dùng click vào nút 'up'
        return false;
    });
    AOS.init();
})