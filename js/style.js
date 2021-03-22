console.log("Hello world!");

$(document).ready(function () {
    $('[data-toggle="popover"]').attr("data-offset", "0, 10");
    $('[data-toggle="popover"]').popover();
});

$('.popover-dismiss').popover({
    trigger: 'focus'
})



$(document).ready(function () {
    $('#addToCart').on('click', function () {
        var text = $('#addToCart').text();
        if (text === "Add to cart") {
            $(this).html('Remove from cart');
        } else {
            $(this).text('Add to cart');
        }
    });
});

