var colors = ['red', 'blue', 'green', 'maroon', 'Crimson', 'Teal', 'Sienna'];
var i = 0;

$("#change-colour").click(function() {
    $("div").css("backgroundColor", colors[i]);
    i = (i == colors.length - 1) ? 0 : (i + 1);
});
