player1_name_var = localStorage.getItem("player_1_name");
player2_name_var = localStorage.getItem("player_2_name");

if (player1_name_var != null) { player1_score_var = 0;}
if (player2_name_var != null) { player2_score_var = 0;}

console.log(player1_name_var);
console.log(player2_name_var);
console.log(player1_score_var);
console.log(player2_score_var);


document.getElementById("player1_name_HID").innerHTML = player1_name_var + " : ";
document.getElementById("player2_name_HID").innerHTML = player2_name_var + " : ";

document.getElementById("player1_score").innerHTML = " " + player1_score_var;
document.getElementById("player2_score").innerHTML = " " + player2_score_var;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name_var;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name_var;


function addUser() {
    player_1_name = document.getElementById("player1_name_input").value;
    player_2_name = document.getElementById("player2_name_input").value;

        localStorage.setItem("player_1_name", player_1_name);
        localStorage.setItem("player_2_name", player_2_name);

        window.location = "math_quiz.html";
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " x "+ number2 +"</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    console.log(row);

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

if (number1 = "") {
    number1 = "1";
}
if(number2 = "") {
    number2 = "1"
}
