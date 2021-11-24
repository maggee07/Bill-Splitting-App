let total = 0;
let users = 0;
let splittedBill = 0;
function splitBill() {

    let totalInput = document.getElementById('total');
    let usersInput = document.getElementById('users');
    if (totalInput.value == "" || usersInput.value == "") {
        alert("please fill all the fields");

    }
    else if (checkifint(totalInput)) {
        alert("please enter only numbers");
    }
    else {

        splittedBill = totalInput.value / usersInput.value;
        document.getElementById('bill').innerHTML = splittedBill;
    }

}
function checkifint(a) {

    console.log(a.value);
    var temp = a.value
    var flag = 0
    for (i = 0; i < temp.length; i++) {
        if (!(temp[i] <= 9 && temp[i] >= 0)) {
            flag = 1
        }
    }
    if (flag == 1)
        return true;
    else
        return false;
}