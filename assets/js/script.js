(function ($) {
  $(function () {
    'use strict';

    var spin_roulette_interval_id = null,
      spin_speed = 18,
      roulette_angle = 0,
      brake_roulette_id = 0;

    // ルーレットを回す
    function spin_roulette (speed) {
      clearInterval(spin_roulette_interval_id);
      spin_roulette_interval_id = setInterval(function () {
        roulette_angle += speed;
        $('#roulette').css('transform', 'rotate(' + roulette_angle + 'deg)');
      }, 10);
    }

    // Startがクリックされたらルーレットを回す
    $('#start_button').on('click', function () {
      spin_roulette(spin_speed);
      $('#stop_button').show();
      $('#start_button').hide();
    });

    // Stopがクリックされたらルーレットを止める
    $('#stop_button').on('click', function () {
      var speed = spin_speed,
        light_number,
        light_interval_id,
        light_toggle_cnt = 0;
      brake_roulette_id = setInterval(function () {
        speed /= 1.2;
        if (speed < 0.2){
          clearInterval(spin_roulette_interval_id);
          spin_roulette_interval_id = null;
          clearInterval(brake_roulette_id);
          $('#start_button').show();
          $('#stop_button').hide();
          light_number = get_roulette_number();
          $('#roulette_' + light_number).css('transform', 'rotate(' + roulette_angle + 'deg)');
          light_interval_id = setInterval(function () {
            if (light_toggle_cnt < 6) {
              $('#roulette').toggle();
              $('#roulette_' + light_number).toggle();
              light_toggle_cnt++;
            } else if (light_toggle_cnt < 8) {
              light_toggle_cnt++;
            } else {
              clearInterval(light_interval_id);
              window.location.href = 'question.html?num=' + light_number;
            }
          }, 500);
        } else {
          spin_roulette(speed);
        }
      }, 100);
    });

    function get_roulette_number() {
      var a = roulette_angle % 360;
      if ((0 <= a && a <= 59) || (300 < a && a <= 360)) return 1;
      if (59 < a && a <= 179) return 3;
      if (179 < a && a <= 300) return 2;
    }
  });
}(jQuery));
