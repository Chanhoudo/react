//DOM 요소 삭제: 부모요소.removeChild("삭제할요소명")

//1. 삭제할 요소명을 가져오기
const h1El = document.getElementById("title")

//2. 삭제할 요소명의 부모요소를 가져오기
const h1ElParent = document.getElementById("root")

//3. 삭제
h1ElParent.removeChild(h1El)

//모든 DOM 요소를 삭제하기
//body 태그 가져오기
const bodyEls = document.getElementsByTagName('body')

//body 태그의 textContent=null
bodyEls[0].textContent = null