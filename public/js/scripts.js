"use strict";
$(function () {
    $("#leagues").on("click", function () {
        $.getJSON("http://localhost:3000/leagues", function () { })
            .done(function (data) {
                console.log(data)
                $("#leaguesUl").empty()
                for (let i = 0; i < data.length; i++) {
                    let property = data[i].Name;
                    $("#leaguesUl").append(
                        $("<li />").html(property)
                    )
                }
            })

            .fail(function () {
                console.log("Error connecting to server")
            })

    }); // end of get JSON


    $("#teams").on("click", function () {
        $.getJSON("http://localhost:3000/teams", function () { })
            .done(function (data) {
                console.log(data)
                $("#leaguesUl").empty()
                for (let i = 0; i < data.length; i++) {
                    let property = data[i].TeamName;
                    $("#leaguesUl").append(
                        $("<li />").html(property)
                    )
                }
            })

            .fail(function () {
                console.log("Error connecting to server")
            })
    });
});
