$(document).ready(function() {

    $("#submit").click(function () {

        var x = $("#a").val();
        var y = $("#b").val();

        for (var i = 0; i <= 100; i++) {

            if ((i % x == 0) && (i % y == 0)) {
                $("#result").append("FizzBuzz" + " ");
            }
            else if (i % x == 0) {
                $("#result").append("Fizz" + " ");
            }
            else if (i % y == 0) {
                $("#result").append("Buzz" + " ");
            }
            else {
                $("#result").append(i + " ");
            }
        }
    });
});
