document.body.style.backgroundColor = "#2F4F4F";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";

let h1 = document.createElement("h1");

h1.innerText = "Сергей Дзюбенко";
h1.style.color = "#778899";
document.body.appendChild(h1);

let p = document.createElement("p");

p.innerText = "Задача: создать страницу с элементами <h1>, <p>, <input> и <button> без использования html, а лишь используя методы объекта window.document. В заголовке <h1> должны быть ваше имя и фамилия, в <p> - текст задания, которое вы сейчас выполняете. В <input> можно что-то ввести, если нажать на кнопку то будет выведен alert c введенным в поле значением и после закрытия alert'а поле будет очищаться.";
p.style.fontWeight = "bold";
p.style.textAlign = "center";
p.style.width = "50%";
p.style.color = "#FFFFFF";

document.body.appendChild(p);

let input = document.createElement("input");

input.style.width = "20%";
input.style.marginLeft = "5px";

document.body.appendChild(input);

let button = document.createElement("button");
button.style.width = "100px";
button.style.marginTop = "5px";
button.style.borderRadius = "20px";
button.innerText = "Нажми сюда";

button.addEventListener("click", () => alert(input.value));
button.addEventListener("click", () =>  input.value = "");

document.body.appendChild(button);
