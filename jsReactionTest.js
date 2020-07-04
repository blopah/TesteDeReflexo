		var start = new Date().getTime();

		function randomColor() {

		var letters = "123456789ABCDEF".split('');
		var color = "#";
		for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
		}

		function makeShapeAppear() {

		var height = (Math.random() * 50) + 20;
		var right = Math.random() * 100;
		var top = Math.random() * 450;

		document.getElementById("shape1").style.backgroundColor = randomColor();
		document.getElementById("shape2").style.backgroundColor = randomColor();
		document.getElementById("shape3").style.backgroundColor = randomColor();
		document.getElementById("shape4").style.backgroundColor = randomColor();
		document.getElementById("shape5").style.backgroundColor = randomColor();
		document.getElementById("shape6").style.backgroundColor = randomColor();
		document.getElementById("shape7").style.backgroundColor = randomColor();
		document.getElementById("shape8").style.backgroundColor = randomColor();
		document.getElementById("shape9").style.backgroundColor = randomColor();
		document.getElementById("shape10").style.backgroundColor = randomColor();
		document.getElementById("shape11").style.backgroundColor = randomColor();
		document.getElementById("shape12").style.backgroundColor = randomColor();
		document.getElementById("shape13").style.backgroundColor = randomColor();
		document.getElementById("shape14").style.backgroundColor = randomColor();
		document.getElementById("shape15").style.backgroundColor = randomColor();
		document.getElementById("shape16").style.backgroundColor = randomColor();
		document.getElementById("shape17").style.backgroundColor = randomColor();
		document.getElementById("shape18").style.backgroundColor = randomColor();
		document.getElementById("shape19").style.backgroundColor = randomColor();
		document.getElementById("shape20").style.backgroundColor = randomColor();
		document.getElementById("shape21").style.backgroundColor = randomColor();
		document.getElementById("shape22").style.backgroundColor = randomColor();
		document.getElementById("shape23").style.backgroundColor = randomColor();
		document.getElementById("shape24").style.backgroundColor = randomColor();
		document.getElementById("shape25").style.backgroundColor = randomColor();
		document.getElementById("shape26").style.backgroundColor = randomColor();
		document.getElementById("shape27").style.backgroundColor = randomColor();
		document.getElementById("shape28").style.backgroundColor = randomColor();
		document.getElementById("shape29").style.backgroundColor = randomColor();
		document.getElementById("shape30").style.backgroundColor = randomColor();
		document.getElementById("shape31").style.backgroundColor = randomColor();
		document.getElementById("shape32").style.backgroundColor = randomColor();
		document.getElementById("shape33").style.backgroundColor = randomColor();
		document.getElementById("shape34").style.backgroundColor = randomColor();
		document.getElementById("shape35").style.backgroundColor = randomColor();
		document.getElementById("shape36").style.backgroundColor = randomColor();
		document.getElementById("shape37").style.backgroundColor = randomColor();
		document.getElementById("shape38").style.backgroundColor = randomColor();
		document.getElementById("shape39").style.backgroundColor = randomColor();
		document.getElementById("shape40").style.backgroundColor = randomColor();
		document.getElementById("shape41").style.backgroundColor = randomColor();
		document.getElementById("shape42").style.backgroundColor = randomColor();
		document.getElementById("shape43").style.backgroundColor = randomColor();
		document.getElementById("shape44").style.backgroundColor = randomColor();
		document.getElementById("shape45").style.backgroundColor = randomColor();
		document.getElementById("shape46").style.backgroundColor = randomColor();
		document.getElementById("shape47").style.backgroundColor = randomColor();
		document.getElementById("shape48").style.backgroundColor = randomColor();
		document.getElementById("shape49").style.backgroundColor = randomColor();
		document.getElementById("shape50").style.backgroundColor = randomColor();
		document.getElementById("shape51").style.backgroundColor = randomColor();
		document.getElementById("shape52").style.backgroundColor = randomColor();
		document.getElementById("shape53").style.backgroundColor = randomColor();
		document.getElementById("shape54").style.backgroundColor = randomColor();
		document.getElementById("shape55").style.backgroundColor = randomColor();
		document.getElementById("shape56").style.backgroundColor = randomColor();
		document.getElementById("shape57").style.backgroundColor = randomColor();
		document.getElementById("shape58").style.backgroundColor = randomColor();
		document.getElementById("shape59").style.backgroundColor = randomColor();
		document.getElementById("shape60").style.backgroundColor = randomColor();
		document.getElementById("shape61").style.backgroundColor = randomColor();
		document.getElementById("shape62").style.backgroundColor = randomColor();
		document.getElementById("shape63").style.backgroundColor = randomColor();
		document.getElementById("shape64").style.backgroundColor = randomColor();
		document.getElementById("shape65").style.backgroundColor = randomColor();
		document.getElementById("shape66").style.backgroundColor = randomColor();
		document.getElementById("shape67").style.backgroundColor = randomColor();
		document.getElementById("shape68").style.backgroundColor = randomColor();
		document.getElementById("shape69").style.backgroundColor = randomColor();
		document.getElementById("shape70").style.backgroundColor = randomColor();

		document.getElementById("shape").style.backgroundColor = randomColor();
		document.getElementById("shape").style.borderColor = randomColor();
		document.getElementById("shape").style.display = "block";
		document.getElementById("shape").style.height = height + "px";
		document.getElementById("shape").style.width = height + "px";
		document.getElementById("shape").style.right = right + "%";
		document.getElementById("shape").style.top = top + "px";

		start = new Date().getTime();

		}

		document.getElementById("shape").onclick = function() {

		document.getElementById("shape").style.display = "none";

		var end = new Date().getTime();

		setTimeout(makeShapeAppear, Math.random() * 0);

		document.getElementById("h1").style.color = randomColor();
		document.getElementById("p").style.color = randomColor();
		document.getElementById("time").style.color = randomColor();

		document.body.style.background = randomColor();

		var timeTaken = (end - start) / 1000;

		document.getElementById("time").innerHTML = timeTaken;

		}
