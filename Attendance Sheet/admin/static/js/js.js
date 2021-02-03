$(document).ready(function(){
    $('#sidebarcollapse').on('click', function(){
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});