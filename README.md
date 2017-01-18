# 중첩된 dom에 이벤트핸들러가 모두 등록되었을때

## 2017. 1. 18 과제

```html
<!DOCTYPE html>
<html>
<head>
	<title>중첩이벤트 </title>
	<style type="text/css">
		div {
			border: 1px solid black;
			margin: 10px;
			padding: 10px;
		}
	</style>
</head>
<body>
	<div id="one">
		첫번째
		<div id="two">
			두번째
			<div id="three">
				세번째
				<div id="four">
					네번째
					<div id="five">
						다섯번째
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="./duplicateEvents.js"></script>
</body>
</html>
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