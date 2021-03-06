$(document).ready(function(){



  $board = $('#board');

  
  var origin_x = 500;
  var origin_y = 500;
  var radius = 100;
  var all_lines = [];
  var circle_loop = 0;
  var adding_lines = setInterval(add_a_line, 10);
  var steps_increment = 1;

  // var colours_a = ['#00F', '#00e','#00d', '#00c', '#00b','#00a', '#009', '#008','#007', '#006', '#005','#004', '#003', '#002', '#001', '#002', '#003', '#004','#005', '#006', '#007', '#008',  '#009','#00a','#00b','#00c', '#00d', '#00e'];
  // var colours_b = ['#0F0', '#0e0','#0d0', '#0c0', '#0b0','#0a0', '#090', '#080','#070', '#060', '#050','#040', '#030', '#020', '#010', '#020', '#030', '#040','#050', '#060', '#070', '#080',  '#090','#0a0','#0b0','#0c0', '#0d0', '#0e0'];
  // var colours_c = ['#F00', '#e00','#d00', '#c00', '#b00','#a00', '#900', '#800','#700', '#600', '#500','#400', '#300', '#200', '#100', '#200', '#300', '#400','#500', '#600', '#700', '#800',  '#900','#a00','#b00','#c00', '#d00', '#e00'];
  // var colours_d = colours_a; //['#003', '#002','001'];

  var colours_a = ['white', 'black'];
  var colours_b = ['white', 'black'];
  var colours_c = ['white', 'black'];
  var colours_d = ['white', 'black'];
    

  
  function add_a_line() {
    circle_loop = circle_loop + 1/steps_increment;

    random_radius = Math.random()*40;

    var pointA_x = 50+(random_radius * Math.cos(circle_loop));
    var pointA_y = 800+(random_radius * Math.sin(circle_loop));
    pointA_x = Math.round(pointA_x * 100) / 100;
    pointA_y = Math.round(pointA_y * 100) / 100;

    var pointB_x = 300 +(random_radius * Math.cos(circle_loop));
    var pointB_y = 50 +(random_radius * Math.sin(circle_loop));
    pointB_x = Math.round(pointB_x * 100) / 100;
    pointB_y = Math.round(pointB_y * 100) / 100;

    var pointC_x = 500+(random_radius * Math.cos(circle_loop));
    var pointC_y = 800+(random_radius * Math.sin(circle_loop));
    pointC_x = Math.round(pointC_x * 100) / 100;
    pointC_y = Math.round(pointC_y * 100) / 100;

    var pointD_x = 50 +(random_radius * Math.cos(circle_loop));
    var pointD_y = 550 +(random_radius * Math.sin(circle_loop));
    pointD_x = Math.round(pointD_x * 100) / 100;
    pointD_y = Math.round(pointD_y * 100) / 100;

    var pointE_x = 900 +(random_radius * Math.cos(circle_loop));
    var pointE_y = 250 +(random_radius * Math.sin(circle_loop));
    pointE_x = Math.round(pointE_x * 100) / 100;
    pointE_y = Math.round(pointE_y * 100) / 100;

    var pointF_x = 500 +(random_radius * Math.cos(circle_loop));
    var pointF_y = 700 +(random_radius * Math.sin(circle_loop));
    pointF_x = Math.round(pointF_x * 100) / 100;
    pointF_y = Math.round(pointF_y * 100) / 100;

    var pointG_x = 900 +(random_radius * Math.cos(circle_loop));
    var pointG_y = 700 +(random_radius * Math.sin(circle_loop));
    pointG_x = Math.round(pointG_x * 100) / 100;
    pointG_y = Math.round(pointG_y * 100) / 100;

    var pointH_x = 550 +(random_radius * Math.cos(circle_loop));
    var pointH_y = 800 +(random_radius * Math.sin(circle_loop));
    pointH_x = Math.round(pointH_x * 100) / 100;
    pointH_y = Math.round(pointH_y * 100) / 100;

    var pointI_x = 1300 +(random_radius * Math.cos(circle_loop));
    var pointI_y = 250 +(random_radius * Math.sin(circle_loop));
    pointI_x = Math.round(pointI_x * 100) / 100;
    pointI_y = Math.round(pointI_y * 100) / 100;

    var pointJ_x = 1000 +(random_radius * Math.cos(circle_loop));
    var pointJ_y = 50 +(random_radius * Math.sin(circle_loop));
    pointJ_x = Math.round(pointJ_x * 100) / 100;
    pointJ_y = Math.round(pointJ_y * 100) / 100;

    var pointK_x = 950 +(random_radius * Math.cos(circle_loop));
    var pointK_y = 500 +(random_radius * Math.sin(circle_loop));
    pointK_x = Math.round(pointK_x * 100) / 100;
    pointK_y = Math.round(pointK_y * 100) / 100;

    var pointL_x = 1000 +(random_radius * Math.cos(circle_loop));
    var pointL_y = 800 +(random_radius * Math.sin(circle_loop));
    pointL_x = Math.round(pointL_x * 100) / 100;
    pointL_y = Math.round(pointL_y * 100) / 100;

    var pointM_x = 1300 +(random_radius * Math.cos(circle_loop));
    var pointM_y = 750 +(random_radius * Math.sin(circle_loop));
    pointM_x = Math.round(pointM_x * 100) / 100;
    pointM_y = Math.round(pointM_y * 100) / 100;


    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");

    var stroke_colours_1 = colours_a[ Math.floor(circle_loop*steps_increment) % colours_a.length ];
    var stroke_colours_2 = colours_b[Math.floor(circle_loop*steps_increment) % colours_b.length];
    var stroke_colours_3 = colours_c[Math.floor(circle_loop*steps_increment) % colours_c.length];
    var stroke_colours_4 = colours_d[Math.floor(circle_loop*steps_increment) % colours_d.length];
    
    //A
    ctx.beginPath();
    ctx.strokeStyle = stroke_colours_1;
    ctx.moveTo(pointA_x,pointA_y);
    ctx.lineTo(pointB_x,pointB_y);
    ctx.lineTo(pointC_x,pointC_y);
    ctx.stroke();
    ctx.closePath();

    // B
    ctx.beginPath();
    ctx.strokeStyle = stroke_colours_2;
    ctx.moveTo(pointD_x,pointD_y);
    ctx.lineTo(pointE_x,pointE_y);
    ctx.lineTo(pointF_x,pointF_y);
    ctx.lineTo(pointG_x,pointG_y);
    ctx.lineTo(pointH_x,pointH_y);
    ctx.stroke();
    ctx.closePath();

      // C
      ctx.beginPath();
      ctx.strokeStyle = stroke_colours_3;
      ctx.moveTo(pointI_x,pointI_y);
      ctx.lineTo(pointJ_x,pointJ_y);
      ctx.lineTo(pointK_x,pointK_y);
      ctx.lineTo(pointL_x,pointL_y);
      ctx.lineTo(pointM_x,pointM_y);
      ctx.stroke();
      ctx.closePath();

      // rafOverride();
      requestAnimationFrame( add_a_line );
  }


  var ws = new WebSocket('ws://localhost:8080/');
  ws.onopen = function() {
    console.log('CONNECT');
  };

  ws.onclose = function() {
    console.log('DISCONNECT');
  };
  ws.onmessage = function(event) {
    console.log('MESSAGE: ' + event.data);
  };

  var frames = 1000;

  // Request Animation Frame Override
  var raf = window.requestAnimationFrame;
  var next = null;
  var hold = false;
  window.requestAnimationFrame = function rafOverride(callback) {
    // Find canvas
    var canvas = document.querySelector('canvas');
    if (canvas) {
      // Done capturing?
      if (frames < 0) {
        window.requestAnimationFrame = raf;
        return raf(callback);
      }

      // Hold rendering until screenshot is done
      if (!hold) {
        hold = true;
        frames--;
        console.log('preparing: capture');
        setTimeout(function () {
          callback();
          console.log('calling: capture');
          capture(canvas, function () {
            // Resume rendering
            hold = false;
            rafOverride(next);
          });
        }, 5);
      }
      else {
        next = callback;
      }
    }
    else {
      // Canvas not created yet?
      return raf(callback);
    }
  }

  function capture(canvas, callback) {
    // Capture image and strip header from string.
    var image = canvas.toDataURL('image/png').slice(22);

    // Writing image as msg
    ws.send(image);

    setTimeout(function () {
      // Resume rendering
      callback();
    }, 5);
  }
  
});