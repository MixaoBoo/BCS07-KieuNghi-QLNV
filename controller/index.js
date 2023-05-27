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
            </tr>
            `
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}
renderGiaoDien();

function themNhanVien() {
    // Lấy dữ liệu
    var _taiKhoan = document.getElementById("tknv").value;
    var _hoTen = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _matKhau = document.getElementById("password").value;
    var _ngayLam = document.getElementById("datepicker").value;
    var _luongCoBan = document.getElementById("luongCB").value * 1;
    var _chucVu = document.getElementById("chucvu").value;
    var _gioLam = document.getElementById("gioLam").value * 1;
    
    var nhanVien = new NhanVien(
        _taiKhoan,
        _hoTen,
        _email,
        _matKhau,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam
    );
    arrNhanVien.push(nhanVien);
    saveStorage(arrNhanVien);
    renderGiaoDien();
    var nhanVien = new NhanVien("", "", "", "", "", "", "", "");
}