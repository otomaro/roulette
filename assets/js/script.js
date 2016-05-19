(function ($) {
  $(function () {
    'use strict';

    var spin_roulette_id = null,
      spin_speed = 18,
      roulette_angle = 0,
      start_stop = false,
      brake_roulette_id = 0;

    // ルーレットを回す
    function spin_roulette (speed) {
      clearInterval(spin_roulette_id);
      spin_roulette_id = setInterval(function () {
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

    // ルーレットは止め始めた位置から時計回りに260°進む
    // ルーレットを止める

    // Stopがクリックされたらルーレットを止める
    $('#stop_button').on('click', function () {
      var speed = spin_speed;
      start_stop = true;
      brake_roulette_id = setInterval(function () {
        speed /= 1.2;
        if (speed < 0.2){
          clearInterval(spin_roulette_id);spin_roulette_id = null;
          clearInterval(brake_roulette_id);
          $('#start_button').show();
          $('#stop_button').hide();
          console.log(get_roulette_number_by_angle());
          start_stop = false;
        } else {
          spin_roulette(speed);
        }
      }, 100);
    });

    function check_start_stop(stop_num,check_id) {
      if(get_stop_number_by_angle(roulette_angle) === stop_num){
        clearInterval(check_id);
        return true;
      }
    }

    function get_roulette_number_by_angle() {
      var a = roulette_angle % 360;
      if ((0 <= a && a <= 59) || (300 < a && a <= 360)) return 1;
      if (59 < a && a <= 179) return 3;
      if (179 < a && a <= 300) return 2;
    }
  });
}(jQuery));
