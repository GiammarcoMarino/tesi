
$(function() {
    //on keypress
    $('#confpass').keyup(function(e){
        //get values
        var pass = $('#pass').val();
        var confpass = $(this).val();

        //check the strings
        if(pass == confpass){
            //if both are same remove the error and allow to submit
            $("#checkPass").css('display', 'none');
            allowsubmit = true;
        }else{
            //if not matching show error and not allow to submit
            $('#checkPass').text('Password non corrispondenti!');
            $("#checkPass").css('display', 'block');
            allowsubmit = false;
        }
    });
});