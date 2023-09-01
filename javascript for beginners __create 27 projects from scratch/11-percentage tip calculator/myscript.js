function calculate() {
    var amount = $('#amount').val();
    var percentage = $('#percentage').val();
    var tip = amount * (percentage / 100);
    var total = parseFloat(amount) + tip;

    $('#tip').val(tip.toFixed(2));
    $('#total').val(total.toFixed(2));

    return false;
}

$(document).ready(function() {
    $('#calculator').submit(calculate);
});
