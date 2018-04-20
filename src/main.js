import { Years } from './scripts.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();
    let age = $("#age").val();
    let dateRaw1 = $("#date1").val();
    let dateRaw2 = $("#date2").val();
    let date1 = new Date(dateRaw1);
    let date2 = new Date(dateRaw2)
    let cosmicInfo = new Years(age, date2, date1, 79);
    let ageInSeconds = cosmicInfo.ageToSeconds();
    let dateDifferenceInSeconds = cosmicInfo.dateDifference();
    let ageOnMercury = cosmicInfo.mercuryYears();
    let ageOnVenus = cosmicInfo.venusYears();
    let ageOnMars = cosmicInfo.marsYears();
    let ageOnJupiter = cosmicInfo.jupiterYears();
    let timeRemainingArray = cosmicInfo.remainingLifeCalculator();
    let overTimeArray = cosmicInfo.overTimeCalculator();
    $("#secondsOld").text(ageInSeconds);
    $("#elapsedSeconds").text(dateDifferenceInSeconds);
    $("#mercury").text(ageOnMercury);
    $("#venus").text(ageOnVenus);
    $("#mars").text(ageOnMars);
    $("#jupiter").text(ageOnJupiter);
    $("#yearsRemaining").text("You have " + timeRemainingArray[0] + " years left on earth, " + timeRemainingArray[1] + " years left on Mercury, " + timeRemainingArray[2] + " years left on Venus, " + timeRemainingArray[3] + " years left on Mars and " + timeRemainingArray[4] + " years left on Jupiter, ");
    $("#overTimeYears").text("You are " + overTimeArray[0] + " years beyond your Earth life expectancy " + overTimeArray[1] + " years beyond your Mercury life expectancy, " + overTimeArray[2] + " years beyond your Venus life expectancy, " + overTimeArray[3] + " years beyond your Mars life expectancy and "+ overTimeArray[1] + " years beyond your Jupiter life expectancy, ");
  });
});
