let headsImg = "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png";
let tailsImg = "https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg";
        
$("button").click(function() {
	let randomCoin = Math.random();
    console.log(randomCoin);
    if(randomCoin > .5) {
		flipCoin(headsImg);
    } else {
		flipCoin(tailsImg);
    }
});

function flipCoin(img) {
    $(".result").html(`<img src='${img}'>`);
}
