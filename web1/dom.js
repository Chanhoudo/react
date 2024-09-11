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
});