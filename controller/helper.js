// Hàm lưu dữ liệu xuống localStorage
function saveStorage(arrNhanVien) {
    localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien))
};
// Hàm lấy giá trị từ localStorage lên
function getStorage() {
    // check điều kiện nếu như key gọi tới không có dưới localStorage
    var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
    if (arrNhanVienLocal != null) {
      arrNhanVien = arrNhanVienLocal;
    }
  };