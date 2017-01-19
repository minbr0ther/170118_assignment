/***********************************************

중첩된 dom에 이벤트핸들러가 모두 등록되었을때, 

어떤 순서대로 발생하는지를 설명하세요. 

github에 readme로 설명하고 그 URL을 댓글로 남겨주세요.

***********************************************/

document.getElementById("one").addEventListener("click", function(){
	console.log("one")
});

document.getElementById("two").addEventListener("click", function(){
	console.log("two")
});

document.getElementById("three").addEventListener("click", function(){
	console.log("three")
	event.stopPropagation(); //전파를 막는다
});

document.getElementById("four").addEventListener("click", function(){
	console.log("four")
});

document.getElementById("five").addEventListener("click", function(){
	console.log("five")
});
