var a = ["sweet", "savory"];
var b = ["hot", "cold"];
var c = ["dry", "wet"];
var d = ["crunchy", "soft"];

function foodMaker(one, two, three, four){


	var food = one[Math.round(Math.random())] + " " + 
			two[Math.round(Math.random())] + " " + 
			three[Math.round(Math.random())] + " " +
			four[Math.round(Math.random())]

	console.log(food);

	return food;
}

function allFoods(one, two, three, four){

	var combos = "";

	for (i = 0; i < one.length; i++){
		if (i < one.length) {
			for (n = 0; n < two.length; n++){
				if (n < two.length) {
					for (m = 0; m < three.length; m++){
						if (m < three.length) {
							for (p = 0; p < four.length; p++){
								combos += one[i] + " " + two[n] + " " + three[m] + " " + four[p] + "</br>";
							}
						}
					}
				}
			}
		}
	}

	return combos;

}


console.log(allFoods(a,b,c,d));