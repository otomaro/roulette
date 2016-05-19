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

    // ルーレットは止め始めた位置から時計回りに260°進む
    // ルーレットを止める
    function stop_roulette(num) {var x;
      var speed = spin_speed;
      // var light = setInterval("roulette_light()",500);
      start_stop = true;
      brake_roulette_id = setInterval(function() {
        speed /= 1.2;
        if (speed < 0.2){
          clearInterval(spin_roulette_id);spin_roulette_id = null;
          clearInterval(brake_roulette_id);
          $('#start_button').show();
          get_hit_number();
          start_stop = false;
        } else {
          spin_roulette(speed);
        }
      }, 100);
    }

    // Stopがクリックされたらルーレットを止める
    $('#stop_button').on('click', function (e) {
      stop_roulette();
      $('#stop_button').hide();
    });

    function check_start_stop(stop_num,check_id) {
      console.log(roulette_angle + ' : ' + get_stop_number_by_angle(roulette_angle) + ' : ' + stop_num);
      if(get_stop_number_by_angle(roulette_angle) === stop_num){
        clearInterval(check_id);
        return true;
      }
    }

    // たまに+18degの誤差がでる
    function get_stop_number_by_angle(angle) {
      var a = angle + 80;
      return get_roulette_number_by_angle(a);
    }

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
