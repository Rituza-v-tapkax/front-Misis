function guessgame(){
    var guessnumber=123;
    var number = prompt("введите число:");

    if (number > guessnumber) {
        alert("Ваше число больше");
        return guessgame();
    }

    else if (number < guessnumber) {
        alert("Ваше число меньше");
        return guessgame();
    }
    
    else {
        return alert("Угадали!");
    }


}


//guessgame();












//function reminder() {
//    alert("Вы как-то долго, не?");
//    window.location.href("https://t-j.ru/list/to-buy-or-not-to-buy/")
//}


function validForm() {
    var name =document.getElementById("name").value;
    console.log(name);
    
    var password =document.getElementById("password").value;
    console.log(password);
    
    var reg_name = /^[а-яёA-Z]+$/i;
    var reg_pas = /^[0-9A-Z]{5,100}$/i;
    
    if (reg_name.test(name) == false) {
        alert("Ошибка в ФИО");
    }
    
    if (reg_pas.test(password) == false) {
        alert("Ошибка в пароле");
    }
    
}

document.querySelector(".button").addEventListener("click", validForm);