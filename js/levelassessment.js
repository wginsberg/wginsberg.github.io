function CalculateScore() {
    score = 0;

    //Section A
    if (document.getElementById("opt1a").checked) document.getElementById("hiddA1").value = "a";
    if (document.getElementById("opt1b").checked) { document.getElementById("hiddA1").value = "b"; score++; }
    if (document.getElementById("opt1c").checked) document.getElementById("hiddA1").value = "c";

    if (document.getElementById("opt2a").checked) { document.getElementById("hiddA2").value = "a"; score++; }
    if (document.getElementById("opt2b").checked) document.getElementById("hiddA2").value = "b";
    if (document.getElementById("opt2c").checked) document.getElementById("hiddA2").value = "c";

    if (document.getElementById("opt3a").checked) document.getElementById("hiddA3").value = "a";
    if (document.getElementById("opt3b").checked) document.getElementById("hiddA3").value = "b";
    if (document.getElementById("opt3c").checked) { document.getElementById("hiddA3").value = "c"; score++; }

    if (document.getElementById("opt4a").checked) document.getElementById("hiddA4").value = "a";
    if (document.getElementById("opt4b").checked) document.getElementById("hiddA4").value = "b";
    if (document.getElementById("opt4c").checked) { document.getElementById("hiddA4").value = "c"; score++; }

    if (document.getElementById("opt5a").checked) document.getElementById("hiddA5").value = "a";
    if (document.getElementById("opt5b").checked) { document.getElementById("hiddA5").value = "b"; score++; }
    if (document.getElementById("opt5c").checked) document.getElementById("hiddA5").value = "c";

    if (document.getElementById("opt6a").checked) { document.getElementById("hiddA6").value = "a"; score++; }
    if (document.getElementById("opt6b").checked) document.getElementById("hiddA6").value = "b";
    if (document.getElementById("opt6c").checked) document.getElementById("hiddA6").value = "c";

    if (document.getElementById("opt7a").checked) { document.getElementById("hiddA7").value = "a"; score++; }
    if (document.getElementById("opt7b").checked) document.getElementById("hiddA7").value = "b";
    if (document.getElementById("opt7c").checked) document.getElementById("hiddA7").value = "c";

    if (document.getElementById("opt8a").checked) document.getElementById("hiddA8").value = "a";
    if (document.getElementById("opt8b").checked) { document.getElementById("hiddA8").value = "b"; score++; }
    if (document.getElementById("opt8c").checked) document.getElementById("hiddA8").value = "c";

    if (document.getElementById("opt9a").checked) { document.getElementById("hiddA9").value = "a"; score++; }
    if (document.getElementById("opt9b").checked) document.getElementById("hiddA9").value = "b";
    if (document.getElementById("opt9c").checked) document.getElementById("hiddA9").value = "c";

    if (document.getElementById("opt10a").checked) document.getElementById("hiddA10").value = "a";
    if (document.getElementById("opt10b").checked) { document.getElementById("hiddA10").value = "b"; score++; }
    if (document.getElementById("opt10c").checked) document.getElementById("hiddA10").value = "c";

    if (document.getElementById("opt11a").checked) document.getElementById("hiddA11").value = "a";
    if (document.getElementById("opt11b").checked) { document.getElementById("hiddA11").value = "b"; score++; }
    if (document.getElementById("opt11c").checked) document.getElementById("hiddA11").value = "c";

    if (document.getElementById("opt12a").checked) document.getElementById("hiddA12").value = "a";
    if (document.getElementById("opt12b").checked) document.getElementById("hiddA12").value = "b";
    if (document.getElementById("opt12c").checked) { document.getElementById("hiddA12").value = "c"; score++; }

    if (document.getElementById("opt13a").checked) document.getElementById("hiddA13").value = "a";
    if (document.getElementById("opt13b").checked) document.getElementById("hiddA13").value = "b";
    if (document.getElementById("opt13c").checked) { document.getElementById("hiddA13").value = "c"; score++; }

    if (document.getElementById("opt14a").checked) { document.getElementById("hiddA14").value = "a"; score++; }
    if (document.getElementById("opt14b").checked) document.getElementById("hiddA14").value = "b";
    if (document.getElementById("opt14c").checked) document.getElementById("hiddA14").value = "c";

    if (document.getElementById("opt15a").checked) document.getElementById("hiddA15").value = "a";
    if (document.getElementById("opt15b").checked) { document.getElementById("hiddA15").value = "b"; score++; }
    if (document.getElementById("opt15c").checked) document.getElementById("hiddA15").value = "c";    

    //Section B
    if (document.getElementById("optb1a").checked) document.getElementById("hiddB1").value = "a";
    if (document.getElementById("optb1b").checked) { document.getElementById("hiddB1").value = "b"; score++; }
    if (document.getElementById("optb1c").checked) document.getElementById("hiddB1").value = "c";

    if (document.getElementById("optb2a").checked) document.getElementById("hiddB2").value = "a";
    if (document.getElementById("optb2b").checked) document.getElementById("hiddB2").value = "b";
    if (document.getElementById("optb2c").checked) { document.getElementById("hiddB2").value = "c"; score++; }

    if (document.getElementById("optb3a").checked) document.getElementById("hiddB3").value = "a";
    if (document.getElementById("optb3b").checked) { document.getElementById("hiddB3").value = "b"; score++; }
    if (document.getElementById("optb3c").checked) document.getElementById("hiddB3").value = "c";

    if (document.getElementById("optb4a").checked) document.getElementById("hiddB4").value = "a";
    if (document.getElementById("optb4b").checked) document.getElementById("hiddB4").value = "b";
    if (document.getElementById("optb4c").checked) { document.getElementById("hiddB4").value = "c"; score++; }

    if (document.getElementById("optb5a").checked) { document.getElementById("hiddB5").value = "a"; score++; }
    if (document.getElementById("optb5b").checked) document.getElementById("hiddB5").value = "b";
    if (document.getElementById("optb5c").checked) document.getElementById("hiddB5").value = "c";

    if (document.getElementById("optb6a").checked) { document.getElementById("hiddB6").value = "a"; score++; }
    if (document.getElementById("optb6b").checked) document.getElementById("hiddB6").value = "b";
    if (document.getElementById("optb6c").checked) document.getElementById("hiddB6").value = "c";

    if (document.getElementById("optb7a").checked) document.getElementById("hiddB7").value = "a";
    if (document.getElementById("optb7b").checked) { document.getElementById("hiddB7").value = "b"; score++; }
    if (document.getElementById("optb7c").checked) document.getElementById("hiddB7").value = "c";

    if (document.getElementById("optb8a").checked) { document.getElementById("hiddB8").value = "a"; score++; }
    if (document.getElementById("optb8b").checked) document.getElementById("hiddB8").value = "b";
    if (document.getElementById("optb8c").checked) document.getElementById("hiddB8").value = "c";

    if (document.getElementById("optb9a").checked) { document.getElementById("hiddB9").value = "a"; score++; }
    if (document.getElementById("optb9b").checked) document.getElementById("hiddB9").value = "b";
    if (document.getElementById("optb9c").checked) document.getElementById("hiddB9").value = "c";

    if (document.getElementById("optb10a").checked) { document.getElementById("hiddB10").value = "a"; score++; }
    if (document.getElementById("optb10b").checked) document.getElementById("hiddB10").value = "b";
    if (document.getElementById("optb10c").checked) document.getElementById("hiddB10").value = "c";

    if (document.getElementById("optb11a").checked) document.getElementById("hiddB11").value = "a";
    if (document.getElementById("optb11b").checked) document.getElementById("hiddB11").value = "b";
    if (document.getElementById("optb11c").checked) { document.getElementById("hiddB11").value = "c"; score++; }

    if (document.getElementById("optb12a").checked) document.getElementById("hiddB12").value = "a";
    if (document.getElementById("optb12b").checked) { document.getElementById("hiddB12").value = "b"; score++; }
    if (document.getElementById("optb12c").checked) document.getElementById("hiddB12").value = "c";

    if (document.getElementById("optb13a").checked) document.getElementById("hiddB13").value = "a";
    if (document.getElementById("optb13b").checked) document.getElementById("hiddB13").value = "b";
    if (document.getElementById("optb13c").checked) { document.getElementById("hiddB13").value = "c"; score++; }

    if (document.getElementById("optb14a").checked) { document.getElementById("hiddB14").value = "a"; score++; }
    if (document.getElementById("optb14b").checked) document.getElementById("hiddB14").value = "b";
    if (document.getElementById("optb14c").checked) document.getElementById("hiddB14").value = "c";

    if (document.getElementById("optb15a").checked) document.getElementById("hiddB15").value = "a";
    if (document.getElementById("optb15b").checked) { document.getElementById("hiddB15").value = "b"; score++; }
    if (document.getElementById("optb15c").checked) document.getElementById("hiddB15").value = "c";

    //Section C
    if (document.getElementById("optc1a").checked) { document.getElementById("hiddC1").value = "a"; score++; }
    if (document.getElementById("optc1b").checked) document.getElementById("hiddC1").value = "b";
    if (document.getElementById("optc1c").checked) document.getElementById("hiddC1").value = "c";

    if (document.getElementById("optc2a").checked) { document.getElementById("hiddC2").value = "a"; score++; }
    if (document.getElementById("optc2b").checked) document.getElementById("hiddC2").value = "b";
    if (document.getElementById("optc2c").checked) document.getElementById("hiddC2").value = "c";

    if (document.getElementById("optc3a").checked) document.getElementById("hiddC3").value = "a";
    if (document.getElementById("optc3b").checked) { document.getElementById("hiddC3").value = "b"; score++; }
    if (document.getElementById("optc3c").checked) document.getElementById("hiddC3").value = "c";

    if (document.getElementById("optc4a").checked) { document.getElementById("hiddC4").value = "a"; score++; }
    if (document.getElementById("optc4b").checked) document.getElementById("hiddC4").value = "b";
    if (document.getElementById("optc4c").checked) document.getElementById("hiddC4").value = "c";

    if (document.getElementById("optc5a").checked) document.getElementById("hiddC5").value = "a";
    if (document.getElementById("optc5b").checked) document.getElementById("hiddC5").value = "b";
    if (document.getElementById("optc5c").checked) { document.getElementById("hiddC5").value = "c"; score++; }

    if (document.getElementById("optc6a").checked) { document.getElementById("hiddC6").value = "a"; score++; }
    if (document.getElementById("optc6b").checked) document.getElementById("hiddC6").value = "b";
    if (document.getElementById("optc6c").checked) document.getElementById("hiddC6").value = "c";

    if (document.getElementById("optc8a").checked) { document.getElementById("hiddC8").value = "a"; score++; }
    if (document.getElementById("optc8b").checked) document.getElementById("hiddC8").value = "b";

    if (document.getElementById("optc9a").checked) { document.getElementById("hiddC9").value = "a"; score++; }
    if (document.getElementById("optc9b").checked) document.getElementById("hiddC9").value = "b";

    if (document.getElementById("optc10a").checked) { document.getElementById("hiddC10").value = "a"; score++; }
    if (document.getElementById("optc10b").checked) document.getElementById("hiddC10").value = "b";

    if (document.getElementById("optc11a").checked) document.getElementById("hiddC11").value = "a";
    if (document.getElementById("optc11b").checked) { document.getElementById("hiddC11").value = "b"; score++; }

    if (document.getElementById("txt1").value == "tengan" && document.getElementById("txt2").value == "poner") score++;
    if (document.getElementById("txt3").value == "es") score++;
    if (document.getElementById("txt4").value == "me interese") score++;
    if (document.getElementById("txt5").value == "sea" && document.getElementById("txt6").value == "pasen") score++;
    if (document.getElementById("txt7").value == "tenga" && document.getElementById("txt8").value == "sigan") score++;

    document.getElementById("hiddC7a").value = document.getElementById("txt1").value
    document.getElementById("hiddC7b").value = document.getElementById("txt2").value
    document.getElementById("hiddC7c").value = document.getElementById("txt3").value
    document.getElementById("hiddC7d").value = document.getElementById("txt4").value
    document.getElementById("hiddC7e").value = document.getElementById("txt5").value
    document.getElementById("hiddC7f").value = document.getElementById("txt6").value
    document.getElementById("hiddC7g").value = document.getElementById("txt7").value
    document.getElementById("hiddC7h").value = document.getElementById("txt8").value

    //Section D
    if (document.getElementById("optd1a").checked) document.getElementById("hiddD1").value = "a";
    if (document.getElementById("optd1b").checked) { document.getElementById("hiddD1").value = "b"; score++; }
    if (document.getElementById("optd1c").checked) document.getElementById("hiddD1").value = "c";

    if (document.getElementById("optd2a").checked) { document.getElementById("hiddD2").value = "a"; score++; }
    if (document.getElementById("optd2b").checked) document.getElementById("hiddD2").value = "b";
    if (document.getElementById("optd2c").checked) document.getElementById("hiddD2").value = "c";

    if (document.getElementById("optd3a").checked) { document.getElementById("hiddD3").value = "a"; score++; }
    if (document.getElementById("optd3b").checked) document.getElementById("hiddD3").value = "b";
    if (document.getElementById("optd3c").checked) document.getElementById("hiddD3").value = "c";

    if (document.getElementById("optd4a").checked) document.getElementById("hiddD4").value = "a";
    if (document.getElementById("optd4b").checked) document.getElementById("hiddD4").value = "b";
    if (document.getElementById("optd4c").checked) { document.getElementById("hiddD4").value = "c"; score++; }

    if (document.getElementById("optd5a").checked) document.getElementById("hiddD5").value = "a";
    if (document.getElementById("optd5b").checked) { document.getElementById("hiddD5").value = "b"; score++; }
    if (document.getElementById("optd5c").checked) document.getElementById("hiddD5").value = "c";

    if (document.getElementById("optd6a").checked) { document.getElementById("hiddD6").value = "a"; score++; }
    if (document.getElementById("optd6b").checked) document.getElementById("hiddD6").value = "b";
    if (document.getElementById("optd6c").checked) document.getElementById("hiddD6").value = "c";

    if (document.getElementById("optd7a").checked) document.getElementById("hiddD7").value = "a";
    if (document.getElementById("optd7b").checked) { document.getElementById("hiddD7").value = "b"; score++; }
    if (document.getElementById("optd7c").checked) document.getElementById("hiddD7").value = "c";

    if (document.getElementById("optd8a").checked) document.getElementById("hiddD8").value = "a";
    if (document.getElementById("optd8b").checked) document.getElementById("hiddD8").value = "b";
    if (document.getElementById("optd8c").checked) { document.getElementById("hiddD8").value = "c"; score++; }

    if (document.getElementById("optd9a").checked) { document.getElementById("hiddD9").value = "a"; score++; }
    if (document.getElementById("optd9b").checked) document.getElementById("hiddD9").value = "b";
    if (document.getElementById("optd9c").checked) document.getElementById("hiddD9").value = "c";

    if (document.getElementById("optd10a").checked) document.getElementById("hiddD10").value = "a";
    if (document.getElementById("optd10b").checked) { document.getElementById("hiddD10").value = "b"; score++; }
    if (document.getElementById("optd10c").checked) document.getElementById("hiddD10").value = "c";

    if (document.getElementById("optd11a").checked) { document.getElementById("hiddD11").value = "a"; score++; }
    if (document.getElementById("optd11b").checked) document.getElementById("hiddD11").value = "b";
    if (document.getElementById("optd11c").checked) document.getElementById("hiddD11").value = "c";

    if (document.getElementById("optd12a").checked) document.getElementById("hiddD12").value = "a";
    if (document.getElementById("optd12b").checked) { document.getElementById("hiddD12").value = "b"; score++; }
    if (document.getElementById("optd12c").checked) document.getElementById("hiddD12").value = "c";

    if (document.getElementById("optd13a").checked) { document.getElementById("hiddD13").value = "a"; score++; }
    if (document.getElementById("optd13b").checked) document.getElementById("hiddD13").value = "b";
    if (document.getElementById("optd13c").checked) document.getElementById("hiddD13").value = "c";

    if (document.getElementById("optd14a").checked) document.getElementById("hiddD14").value = "a";
    if (document.getElementById("optd14b").checked) document.getElementById("hiddD14").value = "b";
    if (document.getElementById("optd14c").checked) { document.getElementById("hiddD14").value = "c"; score++; }

    if (document.getElementById("optd15a").checked) { document.getElementById("hiddD15").value = "a"; score++; }
    if (document.getElementById("optd15b").checked) document.getElementById("hiddD15").value = "b";
    if (document.getElementById("optd15c").checked) document.getElementById("hiddD15").value = "c";    
    
    
    document.getElementById("hiddScore").value = score;

    //var hScore = document.getElementById("hiddScore").value = score;
    //alert("puntuacion: "  + hScore.toString());
}
