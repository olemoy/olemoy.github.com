/**
*
*/

// clientside...
var base = "content/";
var tnc = [];
var teamA = 0;
var teamB = 0;

function setup(){
	
	$("#teama .actions .give").click(function(){
		teamA++;
		updateScore();
		return false;
	});

	$("#teama .actions .take").click(function(){
		if(teamA-1>=0){
			teamA--;
			updateScore();
		}
		return false;
	});

	$("#teamb .actions .give").click(function(){
		teamB++;
		updateScore();
		return false;
	});

	$("#teamb .actions .take").click(function(){
		if(teamB-1>=0){
			teamB--;
			updateScore();
		}
		return false;
	});


}

function updateScore(){
	$("#score #teama .value").html(teamA);
	$("#score #teamb .value").html(teamB);
	location.hash =  "!/"+teamA+"-"+teamB;
}

function onHashChange(){

	var score = location.hash.split("!/")[1];

	if(typeof(score) == "undefined"){
		location.hash = "#!/0-0";
		document.title = "Quiz : 0 - 0";
	} else {
		var values = score.split("-");
		teamA = values[0];	
		teamB = values[1];
		updateScore();
	}
	document.title = "Quiz : "+score;
}

// get content
(function(){
	setup();
	$(window).hashchange(onHashChange);
	$(window).hashchange();
})();
