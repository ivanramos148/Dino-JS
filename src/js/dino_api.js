var getDinos = $.get(`http://dinoipsum.herokuapp.com/api/?format=html`),
  fillContainer = function(html) {
    $('.results').html(html);
    console.log("html: "+ html);
  },
  error = function() {
      console.log('No dinosaurs');
    };

getDinos.then(fillContainer, error);
