(function ($) {
  $(function () {
    'use strict';

    var spin_roulette_id = null,
      spin_speed = 18,
      roulette_angle = 0,
      start_stop = false;
      var cnt = 0;
      var brake_roulette_id = 0;

    // ルーレットを回す
    function spin_roulette (speed) {
      clearInterval(spin_roulette_id);
      spin_roulette_id = setInterval(function () {console.log(cnt);
        cnt++;
        //if (cnt > 215) clearInterval(spin_roulette_id);
        roulette_angle += speed;
        $('#roulette').css('transform', 'rotate(' + roulette_angle + 'deg)');
      }, 10);
    }

    // Startがクリックされたらルーレットを回す
    $('#start_button').on('click', function(){spin_roulette(spin_speed)});

    // ルーレットは止め始めた位置から時計回りに80°進む
    // ルーレットを止める
    function stop_roulette() {
      start_stop = true;
      var speed = spin_speed;
      brake_roulette_id = setInterval(function() {
        speed /= 1.2;
        if (speed < 0.2){
          clearInterval(spin_roulette_id);spin_roulette_id = null;
          clearInterval(brake_roulette_id);
          start_stop = false;
        } else {
          spin_roulette(speed);
        }
      }, 100);
    }

    // Stopがクリックされたらルーレットを止める
    $('#stop_button').on('click', function () {
      //if(spin_roulette_id !==null && start_stop === false)
        stop_roulette()
    });

    function get_roulette_angle() {
      return parseFloat($('#roulette')[0].style.transform.match(/\d*\.\d*/)[0]);
    }


  });
}(jQuery));
