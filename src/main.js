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
    var date1 = new Date(dateRaw1);
    var date2 = new Date(dateRaw2)
    var cosmicInfo = new Years(age, date2, date1, 79);
    let ageInSeconds = cosmicInfo.ageToSeconds();
    let dateDifferenceInSeconds = cosmicInfo.dateDifference();
    console.log(ageInSeconds);
    console.log(dateDifferenceInSeconds);
    console.log(cosmicInfo);
    console.log(date1);
    console.log(date2);
    console.log(age);
  });
});
