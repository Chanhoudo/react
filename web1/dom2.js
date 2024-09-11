const divs = document.getElementsByTagName('div');
for (i = 0; i < divs.length; i++)
    divs[i].style.backgroundColor = "lightgray"


const container = document.getElementsByClassName("container")
container[0].style.border = '3px solid red'

container[0].children[0].textContent = '변경된 첫 번째 문단입니다.'
container[0].children[1].textContent = '이것은 첫 번째 컨테이너의 두 번째 자식입니다.'

const ps = document.querySelectorAll('p')
// for (i = 1; i <= ps.length; i++)
// {
//     if (i % 2 == 1)
//         ps[i-1].style.color = "blue"
//     else
//         ps[i-1].style.color = "green"
// }

ps.forEach((p,index) => {
    index % 2 == 0 ? p.style.color = "blue" : p.style.color = "green"
});