$(document).ready(function() {
    $('#btn-click').click() 
  })

$(window).scroll(function() {
    if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
        $('#allvoitures').append(`<div class="container">
        <div class="row align-items-center mb-5 mt-3">
            <div class="col sm-6">

                <li><img src=${'img/vehicule1.png'} alt="peugeot"></li>
            </div>
            <div class="col sm-6">
                <span class="descriptif" id="titre">Peugeot 208</span>
                <span class="descriptif">Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km
                    supplémentaire).</span>
                <span class="descriptif">999 € - Agence de Paris</span>
                <button type="button" class="descriptif" id="bouton">Réserver et Payer</button>
            </div>
        </div>
        <hr>

        <div class="row align-items-center mb-5 mt-5 ">
            <div class="col sm-6">
                <li><img src=${'img/vehicule2.png'} alt="ford"></li>
            </div>
            <div class="col sm-6">
                <span class="descriptif" id="titre">Ford Focus</span>
                <span class="descriptif">Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km
                    supplémentaire).</span>
                <span class="descriptif">999 €</span>
                <button class="descriptif" type="button" id="bouton">Réserver et Payer</button>
            </div>
        </div>
        <hr>

        <div class="row align-items-center mb-5 mt-5">
            <div class="col sm-6">
                <li><img src=${'img/vehicule3.png'} alt="audi"></li>
            </div>
            <div class="col sm-6">
                <span class="descriptif" id="titre">Audi A1</span>
                <span class="descriptif">Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km
                    supplémentaire).</span>
                <span class="descriptif">1 100 € - Agence de Paris</span>
                <button class="descriptif" type="button" id="bouton">Réserver et Payer</button>

            </div>
        </div>

        <hr>


        </div>`)
        }
    
    });
    
    $('.carousel').carousel({
        interval: 15000
      
      })
    