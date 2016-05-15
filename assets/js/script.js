(function ($) {
  $(function () {
    'use strict';

    var spin_id,
      spin_speed = 19,
      roulette_angle = 0;

    // ルーレットを回す
    function start_spin (speed) {
      spin_id = setInterval(function () {
        roulette_angle += speed;
        $('#roulette').css('transform', 'rotate(' + roulette_angle + 'deg)');
      }, 1);
    }

    // Startがクリックされたらルーレットを回す
    $('#start_button').on('click', function(){start_spin(spin_speed)});

    // ルーレットを止める
    function stop_spin() {
      var speed = spin_speed;
      var brake_id = setInterval(function() {
        clearInterval(spin_id);
        speed /= 1.02;
        if (speed < 0.05){
          clearInterval(brake_id);
        } else {
          start_spin(speed);
        }
      }, 10);
    };

    $('#stop_button').on('click', function(){stop_spin()});

    function get_roulette_angle() {
      return parseFloat($('#roulette')[0].style.transform.match(/\d*\.\d*/)[0]);
    }


  });
}(jQuery));
