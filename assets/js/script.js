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
      // var light = setInterval("roulette_light()",500);
      start_stop = true;
      brake_roulette_id = setInterval(function() {
        speed /= 1.2;
        if (speed < 0.2){
          clearInterval(spin_roulette_id);spin_roulette_id = null;
          clearInterval(brake_roulette_id);
          $('#start_button').show();
          setInterval(test01,500);
          get_hit_number();
          start_stop = false;
        } else {
          spin_roulette(speed);
        }
      }, 100);]
    }

    // Stopがクリックされたらルーレットを止める
    $('#stop_button').on('click', function () {
      if(spin_roulette_id !==null && start_stop === false) stop_roulette();
      $('#stop_button').hide();
    });

    // function check_start_stop(stop_num) {
    //
    // }

    function test01() {
      $('#roulette').toggle();
      $('#roulette_1').toggle();
    }
    
    function get_hit_number() {
      var angle = roulette_angle % 360;console.log(angle);
      if ((0 <= angle && angle <= 59) || (301 <= angle && angle <= 360)) console.log(1);
      if (60 <= angle && angle <= 179) console.log(3);
      if (180 <= angle && angle <= 300) console.log(2);
    }
  });
}(jQuery));
