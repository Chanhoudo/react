<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function(){
    console.log("test") 
}); //html다 처리하고 실행
console.log("test")



//h1 태그의 ID 기준으로 텍스트(새로운 제목입니다) 변경하기
document.addEventListener("DOMContentLoaded", function(){
    const h1El = document.getElementById("header")
    //console.log(h1El)
    h1El.textContent = "새로운 제목입니다"

    //2. 클래스 이름으로 요소 탐색
    //클래스가 container인 첫번째 요소의 텍스를 변경

    const containers = document.getElementsByClassName("container")

    containers[0].textContent = "첫번째 컨테이너 입니다."
    containers[containers.length-1].style.backgroundColor = 'lightblue';

    //css요소로 탐색
    const firstContainer = document.querySelector(".container");
    firstContainer.style.backgroundColor = 'green';

    //모든 동일 요소 검색
    const parahraphs = document.querySelectorAll('p')
    // for(i=0; i < parahraphs.length; i++){
    //     parahraphs[i].textContent = `문단${i + 1}입니다.`
    // }
    parahraphs.forEach((p, index)=>{[p.textContent = `문단${index+1}입니다.`]}) 
=======
document.addEventListener("DOMContentLoaded", function(){
    console.log("test") 
}); //html다 처리하고 실행
console.log("test")



//h1 태그의 ID 기준으로 텍스트(새로운 제목입니다) 변경하기
document.addEventListener("DOMContentLoaded", function(){
    const h1El = document.getElementById("header")
    //console.log(h1El)
    h1El.textContent = "새로운 제목입니다"

    //2. 클래스 이름으로 요소 탐색
    //클래스가 container인 첫번째 요소의 텍스를 변경

    const containers = document.getElementsByClassName("container")

    containers[0].textContent = "첫번째 컨테이너 입니다."
    containers[containers.length-1].style.backgroundColor = 'lightblue';

    //css요소로 탐색
    const firstContainer = document.querySelector(".container");
    firstContainer.style.backgroundColor = 'green';

    //모든 동일 요소 검색
    const parahraphs = document.querySelectorAll('p')
    // for(i=0; i < parahraphs.length; i++){
    //     parahraphs[i].textContent = `문단${i + 1}입니다.`
    // }
    parahraphs.forEach((p, index)=>
        {[p.textContent = `문단${index+1}입니다.`]}) 

    //5. 부모 요소 탐색
    //특정 요소(.container 밑에 p)의 부모 요소에 테두리 추가
    const pEl = document.querySelector('.container p')
    const pElParent = pEl.parentElement
    pElParent.style.border = '2px solid red'

    //6. 자식 요소 탐색
    //contatin 요소의 첫번째 자식 요소 텍스트 변경
    const container2 = document.getElementsByClassName("container2")
    container2Child = container2[0].children
    container2Child.textContent = "첫번째 요소 입니다."

    //7. 태그이름으로 요소 찾기
    const divs = document.getElementsByTagName('div')
    console.log(divs.length)
    divs[divs.length-1].style.background = 'skyblue'
>>>>>>> 17efa1d (0911)
});