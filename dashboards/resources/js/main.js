//------------------------------------- Declaration Session -------------------------------------//

var dbSel = "";
var jdbcOption = "";
var ip = "";
var port = "";
var acceptLocalhost = "";
var hibDb = "";
var hibUser = "";
var hibPsswd = "";
var jcrDb = "";
var jcrUser = "";
var jcrPsswd = "";
var qtzDb = "";
var qtzUser = "";
var qtzPsswd = "";

console.log("-------------------------------------Main Start-------------------------------------")

$("#rdioDbSel").on("click", function () {

    console.log("----Into the Function DB SELECT----")
    dbSel = $("input:checked").val().trim();

    if (dbSel == "PostgreSQL") {
        $(portText)[0].placeholder = 5432
    } else if (dbSel == "MySQL") {
        $(portText)[0].placeholder = 3306
    } else if (dbSel == "Oracle DB 10/11/12") {
        $(portText)[0].placeholder = 1521
    } else if (dbSel == "Microsoft SQL Server") {
        $(portText)[0].placeholder = 1433
    }

    console.log(dbSel + " " + $(portText)[0].placeholder);
});

//\\-------------------------------------Validation Session-------------------------------------//


$('#ipForm').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        ip: {
            validators: {
                ip: {
                    message: 'Please enter a valid IP address'
                }
            }
        }
    }
});


//Port Validation

$('#portInput').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            portText: {
                validators: {
                    regexp: {
                        regexp: /^\d{4,5}$/i,
                        message: 'Port must be within 4 and 5 digits.'
                    }
                }
            }
        }
    });



//\\-------------------------------------Request Session-------------------------------------//

$("#exchangeBttn").on('click', function () {

    var exchange = true;

    if (dbSel == "") {

        dbSel = $("input:checked").val().trim();
    }

    console.log("Trocando!!!");

    jdbcOption = $("#jdbcCheck-0")[0].checked

    if (jdbcOption == true) {
        jdbcOption = "YES"
    } else if (jdbcOption == false) {
        jdbcOption = "NO"
    };

    ip = $("#ipText")[0].value

    if (ip == "") {
        ip = $("#ipText")[0].placeholder
        console.log("Using localhost as DB ip")
    };

    port = $("#portText")[0].value

    if (port == "") {
        console.log("Using default Port")
        port = $("#portText")[0].placeholder
    };

    //----------------------- GET hibernate inputs -----------------------\\
    hibDb = $("#hibDBnm")[0].value;
    hibUser = $("#hibDBuser")[0].value;
    hibPsswd = $("#hibDBpass")[0].value;

    //----------------------- GET Jackrabbit inputs -----------------------\\
    jcrDb = $("#jcrDbInput")[0].value;
    jcrUser = $("#jcrDBuser")[0].value;
    jcrPsswd = $("#jcrDBpass")[0].value;

    //------------------------- GET Quartz inputs -------------------------\\
    qtzDb = $("#qtzDBnm")[0].value;
    qtzUser = $("#qtzDBuser")[0].value;
    qtzPsswd = $("#qtzDBpass")[0].value;


    if (exchange == true) {

        /*alert(dbSel + "\n" + jdbcOption + "\n" + ip + "\n" + port + "\n"
            + hibDb + " : " + hibUser + " : " + hibPsswd + "\n"
            + jcrDb + " : " + jcrUser + " : " + jcrPsswd + "\n"
            + qtzDb + " : " + qtzUser + " : " + qtzPsswd + "\n");*/
        console.log(dbSel + " : " + jdbcOption + " : " + ip + " : " + port + "\n"
            + hibDb + " : " + hibUser + " : " + hibPsswd + "\n"
            + jcrDb + " : " + jcrUser + " : " + jcrPsswd + "\n"
            + qtzDb + " : " + qtzUser + " : " + qtzPsswd + "\n");
        //------------------------- SET PARAMS to ETL -------------------------\\

        var objParam = {
            paramparamSGBD: dbSel,
            paramparamCOPY_DRIVERS: jdbcOption,
            paramparamPORT: port,
            paramparamDB_IP_NAME: ip,
            paramparamHIB_DBNAME: hibDb,
            paramparamHIB_USER: hibUser,
            paramparamHIB_PASS: hibPsswd,
            paramparamJCR_DBNAME: jcrDb,
            paramparamJCR_USER: jcrUser,
            paramparamJCR_PASS: jcrPsswd,
            paramparamQTZ_DBNAME: qtzDb,
            paramparamQTZ_USER: qtzUser,
            paramparamQTZ_PASS: qtzPsswd
        }

        console.log(objParam)

        $.post("/pentaho/plugin/repoEX/api/repoex", objParam)
            .done(function (data) {
                alert("Data Loaded: " + data);
                console.log(data)
            });

    } else {
        alert("Missing some stuffs")
    };

});