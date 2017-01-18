# 중첩된 dom에 이벤트핸들러가 모두 등록되었을때

## 2017. 1. 18 과제

```gist
https://gist.github.com/minbr0ther/803328d411aab6f856914f8108b14253
```

```javascript
document.getElementById("one").addEventListener("click", function(){
	console.log("one")
});

document.getElementById("two").addEventListener("click", function(){
	console.log("two")
});

document.getElementById("three").addEventListener("click", function(){
	console.log("three")
});

document.getElementById("four").addEventListener("click", function(){
	console.log("four")
});

document.getElementById("five").addEventListener("click", function(){
	console.log("five")
});
```

## 실험을 해본 결과

=> 가장 하위의 자식의 이벤트 부터 실행이 된다!