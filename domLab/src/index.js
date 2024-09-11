console.log("test")

//h1 요소 생성
const h1El = document.createElement("h1")
h1El.textContent = "타이틀이 추가되었습니다."

//생성된 요소를 붙이기: 부모 요소를 탐색
const h1ElParent = document.getElementById("root")
console.log(h1ElParent)
h1ElParent.appendChild(h1El)

//container 요소의 마지막 위치에 새로운 container 추가
//1. 요소 생성 <div class="container"><p>영역4입니다.</p></div>
const divEl = document.createElement('div')
divEl.className = 'container'

const pEl = document.createElement('p')
pEl.textContent = "영역 4입니다."
//생성된 p요소를 생성된 div요소에 자직 요소로 붙이기
console.log(pEl)

//2. 추가할 위치에 찾아 붙이기 -> div con박스의 마지막 위치에 붙이기
const containers = document.getElementsByClassName('container')
const lastIndex = containers.length - 1
containers[lastIndex].after(divEl)

containers[0].before(divEl)

const h1El2 = document.createElement('h1');
h1El2.textContent = "타이틀2이 추가되었습니다."

h1ElParent.prepend(h1El2)
//자식 요소 붙이기 
//1. 맨뒤에 붙이기 부모요소.appendChild(자식요소)
//2. 맨앞에 붙이기 부모요소.prepend(자식요소)

//형제 요소로 붙이기
//1. 형제요소 다음에 붙이기 형제요소 after(붙일요소)
//2. 원하는 형제요소 앞에 붙이기 형제요소.before(붙일요소)