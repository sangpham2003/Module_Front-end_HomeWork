$(document).ready(function () {
    $(".accordion-header").click(function () {
        var accordionBody = $(this).next(".accordion-body");
        var accordionIcon = $(this).find(".accordion-icon");

        // Đóng tất cả các accordion khác
        $(".accordion-body").not(accordionBody).slideUp();
        $(".accordion-icon").not(accordionIcon).text("+");

        // Hiện hoặc ẩn nội dung của accordion được nhấn và chuyển đổi biểu tượng
        accordionBody.slideToggle(function() {
            accordionIcon.text(function () {
                return accordionBody.is(":visible") ? "-" : "+";
            });
        });
    });
});


