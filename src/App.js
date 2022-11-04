import { useEffect, useState } from "react";

function App() {

	const [count, setCount] = useState(1);
	const [name, setName] = useState('');

	function update() {
		setCount(count + 1);
	};

	function inputUpdate(e) {
		setName(e.target.value);
	}

	useEffect(() => {
		console.log('랜더링이되었습니다');
	}, [count]);

	useEffect(() => {
		console.log('카운트가 변화되어 랜더링 되었습니다');
	}, [count]);

	useEffect(() => {
		console.log('네임이 변화되어 랜더링 되었습니다');
	}, [name]);

	return (
		<div>
			<button onClick={update}>Update</button>
			<span>count : {count}</span>

			<input type="text" value={name} onChange={inputUpdate} />
			<span>name: {name}</span>
		</div>
	);
}

export default App;


/*
useEffect(()=>{작업});
하나의 매개변수로 콜백하나만 받음
렌더링이 될때마다 실행되게하는 방법

useEffect(()=>{작업},[]); 
두개의 매개변수로 콜백과 배열(디벤턴시어레이)을 받음
처음 랜더링이 될때, 배열의 값이 있다면 그 값이 업데이트 될때만
만약 배열의 값이 비어있다면 처음 랜더링이 될때만


클린업 함수?
useEffect(()=>{작업
return()=>{
	클린업하는 함수 = 정리하는 작업 언마운트될때 사용됨
}
});

*/

/*
function App() {

	const [count, setCount] = useState(1);

	function update() {
		setCount(count + 1);
	};
	return (
		<div>
			<button onClick={update}>Update</button>
			<span>count : {count}</span>
		</div>
	);
}
이전에 배운 유즈스테이트를 이용해서 버튼을 누르면 1씩 올라가게 만듦 스테이트 복습


function App() {

	const [count, setCount] = useState(1);

	function update() {
		setCount(count + 1);
	};

	useEffect(() => {
		console.log('랜더링이되었습니다');
	});

	return (
		<div>
			<button onClick={update}>Update</button>
			<span>count : {count}</span>
		</div>
	);
}
이번 유즈이펙트는 인자가 하나이기 때문에 랜더링될때마다 실행된다 확인해보자 
유즈스테이트로 인해 셋카운트가 매번 렌더링을 시키므로 랜더링콘솔은 계속 찍힘 디펜더시어레이 설명하고 넘어가기


function App() {

	const [count, setCount] = useState(1);
	const [name, setName] = useState(''); <---- 1

	function update() {
		setCount(count + 1);
	};

	function inputUpdate(e) {
		setName(e.target.value); <----- 2
	}

	useEffect(() => {
		console.log('랜더링이되었습니다');
	});

	return (
		<div>
			<button onClick={update}>Update</button>
			<span>count : {count}</span>

			<input type="text" value={name} onChange={inputUpdate} /> <----- 3
			<span>name: {name}</span>
		</div>
	);
}
이벤에는 유즈스테이트를 하나더 만들어서 인풋으로도 렌더링이 되게만들었다
이제 저 유즈이펙트는 엄청나게 실행이 될것이다

이제 매번 랜더링이 될때마다 유즈이펙트를 실행하는게 아닌 특정 랜더링이 일어날때만 실행시키고 싶다면???<-- 중요 자세히 설명하고, 이해안가면 처음부터 다시 설명할것

function App() {

	const [count, setCount] = useState(1);
	const [name, setName] = useState('');

	function update() {
		setCount(count + 1);
	};

	function inputUpdate(e) {
		setName(e.target.value);
	}

	useEffect(() => {
		console.log('랜더링이되었습니다');
	}, [count]); <------------------ 

	return (
		<div>
			<button onClick={update}>Update</button>
			<span>count : {count}</span>

			<input type="text" value={name} onChange={inputUpdate} />
			<span>name: {name}</span>
		</div>
	);
}

두번째인자로 배열안에 원하는 랜더링을 넣어주면 , 처음 랜더링될때와 원하는 값이 업데이트 될때 유즈이펙트가 실행됨
즉 마운트될때와 디펜던시어레이의 값에 변경이 일어날때만 
디펜더시 어레이를 이용한 응용으로 중요하다고 이야기하기 

function App() {

	const [count, setCount] = useState(1);
	const [name, setName] = useState('');

	function update() {
		setCount(count + 1);
	};

	function inputUpdate(e) {
		setName(e.target.value);
	}

	useEffect(() => {
		console.log('랜더링이되었습니다');
	}, [count]);

	useEffect(() => {
		console.log('카운트가 변화되었습니다');
	}, [count]);

	useEffect(() => {
		console.log('네임이 바뀌었습니다');
	}, [name]);

	return (
		<div>
			<button onClick={update}>Update</button>
			<span>count : {count}</span>

			<input type="text" value={name} onChange={inputUpdate} />
			<span>name: {name}</span>
		</div>
	);
} 실습시켜보자 꼭
*/
