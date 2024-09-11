
const containers = 
document.getElementsByClassName("container");
console.log(containers);

for (i = 0; i < containers.length; i++){
    const buttonEl = document.createElement("button");
    buttonEl.textContent = `버튼${i+1}`;
    containers[i].appendChild(buttonEl);

}