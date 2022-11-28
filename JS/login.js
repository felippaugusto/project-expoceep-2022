// starts document html
$(document).ready(function() {
    setTimeout(function() {
        console.log($("audio").attr("src", "TRACKS/track-login.mp3"));
    }, 2000);

    //  when to click, add class
    $("#btn-form").click(function() {
        $(".model").addClass("active");
    })

    //  when to click, add class
    $(".close").click(function(event) {
        // prevent form, get the data
        event.preventDefault("form");
        // remove class
        $(".model").removeClass("active");
        // input empty
        $("#name").val("");
    })

    //  when to click, add class
    $("#btnSubmit").click(function(event) {
        // get input values
        const inputName = $("#name").val();
        $(".model").removeClass("active");

        // if the input is empty
        if(inputName.length === 0) {
            event.preventDefault("form");
            $(".model").addClass("active");
            $("#alertInputEmpty").addClass("active");
            // after 3s, the alert disappears
            setTimeout(function() {
                $("#alertInputEmpty").removeClass("active");
            }, 3000);
        }
        else {
            // send the player name to the other page
            sessionStorage.setItem('playerName', inputName);
            $("#name").val("");
        }
    })    
})
