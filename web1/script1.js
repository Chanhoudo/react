
document.addEventListener("DOMContentLoaded", function(){
            var h1Ele = document.createElement("h1");
            var pEle = document.createElement("p");
            h1Ele.textContent = "첫 실습-DOM 제어 프로그램"
            pEle.textContent = "자바스크립트로 DOM 제어는 재미있습니다."
            var H1Id = document.getElementById('root');
            var pId = document.getElementById('root');
            H1Id.appendChild(h1Ele);
            pId.appendChild(pEle);
})
