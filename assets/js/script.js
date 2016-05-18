(function ($) {
  $(function () {
    'use strict';

    var spin_roulette_id = null,
      spin_speed = 18,
      roulette_angle = 0,
      start_stop = false,click_stop_button,
      brake_roulette_id = 0;

    // ルーレットを回す
    function spin_roulette (speed) {var x;
      clearInterval(spin_roulette_id);

      spin_roulette_id = setInterval(function () {
        if (click_stop_button && !start_stop) {start_stop = check_start_stop(press_key);
          console.log(start_stop);console.time();
          if( !brake_roulette_id && start_stop ){
            console.log(2);
            brake_roulette_id = setInterval(function() {
              if(x==undefined)x = roulette_angle;
              console.log(roulette_angle%360);
              speed /= 1.2;
              if (speed < 0.2){
                clearInterval(spin_roulette_id);spin_roulette_id = null;
                clearInterval(brake_roulette_id);
                $('#start_button').show();
                get_roulette_number_by_angle(roulette_angle);
                start_stop = false;console.log(roulette_angle-x);
              } else {
                spin_roulette(speed);
              }
            }, 100);
          }
        }
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
    function stop_roulette(num) {
      var speed = spin_speed;
//      start_stop = check_start_stop(num)
//      var clear_id = setInterval(function () {
//        start_stop = check_start_stop(num);
//        if (start_stop) {
//          clearInterval(clear_id);
//        }
//      }, 9);
    }
var press_key;
    // Stopがクリックされたらルーレットを止める
    $(window).keypress(function(e){
      click_stop_button = true;
      //if(spin_roulette_id !==null && start_stop === false) 
      press_key = (function (key_code) {
        switch (key_code) {
          case 49:
                   return 1;
          case 50:
                   return 2;
          case 51:
                   return 3;
        }
      }(e.keyCode));
      $('#stop_button').hide();
    });

    function check_start_stop(stop_num) {
      console.log(roulette_angle%360 + ' : ' + get_stop_number_by_angle(roulette_angle) + ' : ' + stop_num + ' ' + start_stop);
      if(get_stop_number_by_angle(roulette_angle) === stop_num){
        return true;
      }
    }

    // たまに+18degの誤差がでる
    function get_stop_number_by_angle(angle) {
      var a = angle + 80;
      return get_roulette_number_by_angle(a);
    }

    function get_roulette_number_by_angle(angle) {
      var a = angle % 360;
      if ((0 <= a && a<= 59) || (301 <= a && a<= 360)) return 1;
      if (60 <= a && a<= 179) return 3;
      if (180 <= a&& a<= 300) return 2;
    }

    // function check_start_stop(stop_num) {
    //
    // }

    function test01() {
      $('#roulette').toggle();
      $('#roulette_1').toggle();
    }
    

  });
}(jQuery));
