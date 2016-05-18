(function ($) {
  $(function () {
    'use strict';

    var spin_roulette_id = null,
      spin_speed = 18,
      roulette_angle = 0,
      start_stop = false,
      cnt = 0,
      brake_roulette_id = 0;

    // ルーレットを回す
    function spin_roulette (speed) {
      clearInterval(spin_roulette_id);
      spin_roulette_id = setInterval(function () {
        cnt++;
        //if (cnt > 215) clearInterval(spin_roulette_id);
        roulette_angle += speed;
        $('#roulette').css('transform', 'rotate(' + roulette_angle + 'deg)');
      }, 10);
    }

    // Startがクリックされたらルーレットを回す
    $('#start_button').on('click', function(){
      spin_roulette(spin_speed);
      $('#stop_button').show();
      $('#start_button').hide();
    });

    // ルーレットは止め始めた位置から時計回りに80°進む
    // ルーレットを止める
    function stop_roulette() {
      var speed = spin_speed;
      start_stop = true;
      brake_roulette_id = setInterval(function() {
        speed /= 1.2;
        if (speed < 0.2){
          clearInterval(spin_roulette_id);spin_roulette_id = null;
          clearInterval(brake_roulette_id);
          $('#start_button').show();
          get_roulette_number_by_angle(roulette_angle);
          start_stop = false;
        } else {
          spin_roulette(speed);
        }
      }, 100);
    }

    // Stopがクリックされたらルーレットを止める
    $('#stop_button').on('click', function () {
      if(spin_roulette_id !==null && start_stop === false) stop_roulette();
      $('#stop_button').hide();
    });

    function check_start_stop(stop_num) {
      if(get_roulette_number_by_angle() === stop_num)
    }

    function get_stop_number_by_angle(angle) {
      
    }

    function get_roulette_number_by_angle(angle) {
      var a = angle % 360;console.log(angle);
      if ((0 <= a && a<= 59) || (301 <= a && a<= 360)) console.log(1);
      if (60 <= a && a<= 179) console.log(3);
      if (180 <= a&& a<= 300) console.log(2);
    }
  });
}(jQuery));
