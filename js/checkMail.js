$(document).ready(function() {
    $("#form-email").blur(function (e) {
        e.preventDefault();
        //associo variabili
        var email = $("#form-email").val();


        //chiamata ajax
        $.ajax({
            //imposto il tipo di invio dati
            type: "POST",

            //Invio i dati alla pagina php
            url: "./php/checkmail.php",
            data: "email=" + email,
            dataType: "html",

            //visualizzazione errori/ok
            success: function (response) {
                var returnedData = JSON.parse(response);
                if (returnedData.status == 0) {
                    $("#form-email").val("");
                    $("#checkMail").css('display', 'block');
                }
                else if (returnedData.status == 1){
                    $("#checkMail").css('display', 'none');
                }
                else{
                    $("#form-email").val("");
                    $.notify({
                        title: '<strong>ATTENZIONE</strong>',
                        message: 'E\' necessario inserire una mail valida!'
                    },{
                        type: 'danger'
                    });
                }
            }
        });
    });
});