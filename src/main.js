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
  });
});
