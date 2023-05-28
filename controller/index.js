var arrNhanVien = [];
getStorage();
renderGiaoDien();

    // Render ra giao diện
function renderGiaoDien() {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {

        var nhanVien = new NhanVien();
        var nhanVienItem = arrNhanVien[i];
        Object.assign(nhanVien, nhanVienItem);
        var tongLuong = nhanVien.tongLuong();
        var xepLoai = nhanVien.loaiNhanVien();
        content +=
            `
            <tr>
            <td>${nhanVien.taiKhoan}</td>
            <td>${nhanVien.hoTen}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${tongLuong}</td>
            <td>${xepLoai}</td>
            <td>
            <button onclick="xoaNhanVien(${nhanVien.taiKhoan})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            <button onclick="editNhanVien(${nhanVien.taiKhoan})" class="btn btn-warning" data-toggle="modal"
            data-target="#myModal"><i class="fa-solid fa-pen"></i></button>
            </td>
            </tr>
            `
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}
renderGiaoDien();

function themNhanVien() {
    var nhanVien = layGiaTriInput();
    if (nhanVien) {
        arrNhanVien.push(nhanVien);
        saveStorage(arrNhanVien);
        renderGiaoDien();
        ganGiaTriChoInput("","","","","","","","");
    }
}





// Chức năng xoá Nhân viên
function xoaNhanVien(taiKhoan) {
    var index = timViTriNhanVien(taiKhoan);
    if (index != -1) {
        arrNhanVien.splice(index, 1);
        saveStorage(arrNhanVien);
        renderGiaoDien();
    }
}

// Chức năng sửa thông tin nhân viên
function editNhanVien(taiKhoan) {
    document.getElementById("btnCapNhat").innerHTML;
    var index = timViTriNhanVien(taiKhoan);
    console.log("index: ", index);
    var nhanVien = arrNhanVien[index];
    console.log(nhanVien)
    ganGiaTriChoInput(nhanVien.taiKhoan, nhanVien.hoTen, nhanVien.email, nhanVien.matKhau, nhanVien.ngayLam, nhanVien.luongCoBan, nhanVien.chucVu, nhanVien.gioLam);
    document.getElementById("tknv").readOnly = true;
}

function capNhatThongTinNhanVien() {
    var nhanVienDaChinhSua = layGiaTriInput();
    // console.log(nhanVienDaChinhSua);
    var index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoan);
    arrNhanVien[index] = nhanVienDaChinhSua;
    
    saveStorage(arrNhanVien);
    renderGiaoDien();
}