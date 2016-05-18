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
<<<<<<< HEAD
      var clear_id = setInterval(function () {
        start_stop = check_start_stop(num,clear_id);
      }, 50);
      brake_roulette_id = setInterval(function() {
        if (start_stop) {if(x==undefined)x = roulette_angle;console.log(roulette_angle%360);
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
=======
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
>>>>>>> e3e1d9c9dc840b7e37684388ba47e6d316f22ec8
        }
      }, 100);]
    }

    // Stopがクリックされたらルーレットを止める
    $(window).keypress(function(e){
      //if(spin_roulette_id !==null && start_stop === false) 
      var press_key = (function (key_code) {
        switch (key_code) {
          case 49:
                   return 1;
          case 50:
                   return 2;
          case 51:
                   return 3;
        }
      }(e.keyCode));
      stop_roulette(press_key);
      $('#stop_button').hide();
    });

<<<<<<< HEAD
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

    function get_roulette_number_by_angle(angle) {
      var a = angle % 360;
      if ((0 <= a && a<= 59) || (301 <= a && a<= 360)) return 1;
      if (60 <= a && a<= 179) return 3;
      if (180 <= a&& a<= 300) return 2;
=======
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
>>>>>>> e3e1d9c9dc840b7e37684388ba47e6d316f22ec8
    }

  });
}(jQuery));
