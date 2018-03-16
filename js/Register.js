$(document).ready(function() {
    //al click sul bottone del form
    $(".btnRegister").click(function(e){
        e.preventDefault();
        //associo variabili
        var nome = $("#form-name").val();
        var cognome= $("#form-surname").val();
        var data=$("#form-date").val();
        var sesso=$("#form-sex").val();
        var email=$("#form-email").val();
        var password=$("#form-password").val();

        //chiamata ajax
        $.ajax({

            //imposto il tipo di invio dati
            type: "POST",

            //Invio i dati alla pagina php
            url: "./php/Register.php",
            data: "nome=" + nome + "&cognome=" + cognome + "&data=" + data  + "&sesso=" + sesso +"&email="+email+"&password="+password,
            dataType: "html",

            //visualizzazione errori/ok
            success: function(response) {
                var returnedData = JSON.parse(response);
                if(returnedData.status==1){
                    $.notify({
                        title: '<strong>Complimenti</strong>',
                        message: 'Registrazione avvenuta con successo!!'
                    },{
                        type: 'success'
                    });
                    window.location.replace("controllers/medico/HomeMedico.php");
                }
                else if(returnedData.status==2)
                    $.notify({
                        title: '<strong>ERRORE</strong>',
                        message: 'Qualcosa è andato storto!'
                    },{
                        type: 'danger'
                    });

            },
        });
    });
});