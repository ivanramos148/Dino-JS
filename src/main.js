import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

$(document).ready(function() {
  $("form.dinoIpsum").submit(function(event) {
    event.preventDefault();

    var paragraphs = $("input#numParagraphs").val();
    var numbers = $("input#numWords").val();

      var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + numbers).then(function(response) {
      $(".results").html(response);
      getDinos.then(response);
    });
  });
});
