$(document).ready(function() {
    $('#signup').validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,
            },
            mobile: {
                required: true,
            },
            pass: {
                required: true,
                minlength: 8,
            }
        }
    })

});