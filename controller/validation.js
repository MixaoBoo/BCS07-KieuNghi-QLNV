// Hàm kiểm tra xem người dùng có nhập dữ liệu hay không
function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
        console.log("checkInput: ", checkInput);
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block");
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường dữ liệu này";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}

// Check email
function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var hopLe = regexEmail.test(checkInput)
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng Email";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}