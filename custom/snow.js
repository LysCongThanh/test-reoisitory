// window.onload = function() {
// 	var canvas = document.querySelector("canvas");
// 	var neige = canvas.getContext("2d");
// 	var w = window.innerWidth;
// 	var h = window.innerHeight;
// 	canvas.width = w;
// 	canvas.height = h;
// 	var maxfloc = 30;
// 	var flocons = [];
// 	for (var i = 0; i < maxfloc; i++) {
// 	  flocons.push({
// 		x: Math.random() * w,
// 		y: Math.random() * h,
// 		r: Math.random() * 2 + 1,
// 		d: Math.random() * maxfloc
// 	  })
// 	}
  
// 	function draw() {
// 	  neige.clearRect(0, 0, w, h);
// 	  neige.fillStyle = "rgb(255, 255, 255)";
// 	  neige.beginPath();
// 	  for (var i = 0; i < maxfloc; i++) {
// 		var f = flocons[i];
// 		neige.moveTo(f.x, f.y);
// 		neige.arc(f.x, f.y, f.r, 0, Math.PI * 2);
// 	  }
// 	  neige.fill();
// 	  update();
// 	}
// 	var angle = 0;
  
// 	function update() {
// 	  angle += 0.01;
// 	  for (var i = 0; i < maxfloc; i++) {
// 		var f = flocons[i];
// 		f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
// 		if (f.x > w + 5 || f.x < -5 || f.y > h) {
// 		  if (i % 3 > 0) {
// 			flocons[i] = {
// 			  x: Math.random() * w,
// 			  y: -10,
// 			  r: f.r,
// 			  d: f.d
// 			};
// 		  } else {
// 			if (Math.sin(angle) > 0) {
// 			  flocons[i] = {
// 				x: -5,
// 				y: Math.random() * h,
// 				r: f.r,
// 				d: f.d
// 			  };
// 			} else {
// 			  flocons[i] = {
// 				x: w + 5,
// 				y: Math.random() * h,
// 				r: f.r,
// 				d: f.d
// 			  };
// 			}
// 		  }
// 		}
// 	  }
// 	}
// 	setInterval(draw, 50);
//   };

//using jquery
$(document).ready(function() {
	var canvas = $("canvas")[0];
	var neige = canvas.getContext("2d");
	var w = $(window).width();
	var h = $(window).height();
	canvas.width = w;
	canvas.height = h;
	var maxfloc = 30;
	var flocons = [];
	for (var i = 0; i < maxfloc; i++) {
	  flocons.push({
		x: Math.random() * w,
		y: Math.random() * h,
		r: Math.random() * 2 + 1,
		d: Math.random() * maxfloc
	  });
	}
  
	function draw() {
	  neige.clearRect(0, 0, w, h);
	  neige.fillStyle = "rgb(255, 255, 255)";
	  neige.beginPath();
	  for (var i = 0; i < maxfloc; i++) {
		var f = flocons[i];
		neige.moveTo(f.x, f.y);
		neige.arc(f.x, f.y, f.r, 0, Math.PI * 2);
	  }
	  neige.fill();
	  update();
	}
	var angle = 0;
  
	function update() {
	  angle += 0.01;
	  for (var i = 0; i < maxfloc; i++) {
		var f = flocons[i];
		f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
		if (f.x > w + 5 || f.x < -5 || f.y > h) {
		  if (i % 3 > 0) {
			flocons[i] = {
			  x: Math.random() * w,
			  y: -10,
			  r: f.r,
			  d: f.d
			};
		  } else {
			if (Math.sin(angle) > 0) {
			  flocons[i] = {
				x: -5,
				y: Math.random() * h,
				r: f.r,
				d: f.d
			  };
			} else {
			  flocons[i] = {
				x: w + 5,
				y: Math.random() * h,
				r: f.r,
				d: f.d
			  };
			}
		  }
		}
	  }
	}
	setInterval(draw, 50);
  });
  