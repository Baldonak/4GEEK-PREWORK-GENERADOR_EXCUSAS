function Excuse_generator(){

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let excuse_parts = [who, action, what, when];
    let excuse = "";

    for (var i of excuse_parts){

        excuse += i[Math.floor(Math.random() * i.length)] + " ";
    }

    document.getElementById("Excuse").innerHTML = excuse;

}