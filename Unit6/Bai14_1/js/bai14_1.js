$(document).ready(function () {
    // Xử lý sự kiện khi nhấn nút "Add"
    $("#addTask").click(function () {
        var taskText = $("#taskInput").val().trim();

        if (taskText !== "") {
            var listItem = $("<li>").text(taskText);
            listItem.append('<span class="delete">X</span>');
            $("#taskList").append(listItem);

            // Xóa nội dung trong input sau khi thêm công việc
            $("#taskInput").val("");
        } else {
            alert("Vui lòng nhập nội dung công việc!");
        }
    });

    // Xử lý sự kiện khi nhấn phím Enter trong input
    $("#taskInput").keypress(function (e) {
        if (e.which === 13) {
            $("#addTask").click();
        }
    });

    // Xử lý sự kiện khi nhấn vào công việc để đánh dấu đã hoàn thành
    $("#taskList").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    // Xử lý sự kiện khi nhấn vào dấu "X" để xóa công việc
    $("#taskList").on("click", ".delete", function (e) {
        e.stopPropagation(); // Ngăn chặn sự kiện click lan rộng đến các công việc

        $(this).parent().remove();
    });
});

