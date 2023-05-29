// regex
// kiểm tra chỉ chứa toàn số: /^\d+$/
// kiểm tra chỉ chứa toàn chữ: /^[a-zA-Z]*$/

// Hàm kiểm tra xem người dùng có nhập dữ liệu hay không
function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
        console.log("checkInput: ", checkInput);
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block");
        return true;
    } else if (idThongBao === "tbChucVu" && checkInput === "") { 
        console.log('check: ', checkInput);
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường dữ liệu này";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường dữ liệu này";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}

// Check email
function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var hopLe = regexEmail.test(checkInput);
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

// check tài khoản: 4-6
function kiemTraTaiKhoan(checkInput, idThongBao) {
    var regexTaiKhoan = /^\d+$/;
    var hopLe = regexTaiKhoan.test(checkInput);
    if (checkInput.length >= 4 && checkInput.length <= 6 && hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Tài khoản phải từ 4-6 kí tự số";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}
// check tên nhân viên: là chữ
function kiemTraTenNV(checkInput, idThongBao) {
    var regexTenNV = /^[\p{L}\s]+$/u;
    var hopLe = regexTenNV.test(checkInput)
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Tên nhân viên không hợp lệ";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}
// check mật khẩu: 6-10 (chứa ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt)
function kiemTraPasword(checkInput, idThongBao) {
    var regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    var hopLe = regexPassword.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Password phải từ 6-10 (chứa ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt)";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}
// check date: mm/dd/yyyy
function kiemTraDate(checkInput, idThongBao) {
    var regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/
    var hopLe = regexDate.test(checkInput)
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Date không hợp lệ";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}
// check lương cơ bản: 1 000 000 - 20 000 000
function kiemTraLươngCB(checkInput, idThongBao) {
    var regexLươngCB = /^\d+$/;
    var hopLe = regexLươngCB.test(checkInput);
    if (hopLe && checkInput*1 >= 1000000 && checkInput*1 <= 20000000) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Lương cơ bản không hợp lệ";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}
// check số giờ làm: 80 - 200
function kiemTraSoGioLam(checkInput, idThongBao) {
    var regexSoGioLam = /^\d+$/;
    var hopLe = regexSoGioLam.test(checkInput);
    if (hopLe && checkInput*1 >= 80 && checkInput*1 <= 200) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).classList.remove("d-block")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Số giờ làm không hợp lệ";
        document.getElementById(idThongBao).classList.add("d-block");
        return false;
    }
}