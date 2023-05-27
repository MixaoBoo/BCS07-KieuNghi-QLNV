function NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    // Phương thức tính tổng luong nhân viên 
    this.tongLuong = function () {
        if (this.chucVu === "Sếp") {
            this.tongLuong = this.luongCoBan * 3;
            return this.tongLuong;
        } else if (this.chucVu === "Trưởng phòng") {
            this.tongLuong = this.luongCoBan * 2;
            return this.tongLuong;
        } else if (this.chucVu === "Nhân viên") {
            this.tongLuong = this.luongCoBan;
            return this.tongLuong;
        } 
        return 0;
    }


    // Phương thức xếp loại nhân viên
    this.loaiNhanVien = function () {
        if (this.gioLam >= 160 && this.gioLam <176) {
            return "Nhân viên khá";
        } else if (this.gioLam >= 176 && this.gioLam < 192) {
            return "Nhân viên giỏi";
        } else if (this.gioLam >= 192) {
            return "Nhân viên xuất sắc";
        }
    };
}
