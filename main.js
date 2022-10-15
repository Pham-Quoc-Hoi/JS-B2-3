var currentFM = Intl.NumberFormat("VN-vn");

/*
Bài 1: tính tiền lương nhân viên
Lương 1 ngày = 100.000
- Đầu vào: 
    + Nhập số ngày, (Buổi 1: cho số ngày nhân viên làm)
    + Hệ số lương: 100.000
- Xử lý:
    Lương = Lấy số ngày * 100.000
- Đầu ra: In kết quả

Buổi 1
Đầu vào
var ngaylam = 20;
var hesoluong = 100000;
Xử lý
var luong = ngaylam * hesoluong;
Đầu ra
var xuat = "Lương của nhân viên làm " + ngaylam + " ngày là: " + luong
 console.log(xuat);
*/

// Buổi 2,3
// document.getElementById("btnAdd").onclick = function (){}
var btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = function () {
    // Đầu vào
    var songaylam = document.getElementById("songaylam").value;
    const hesoluong = 100000;
    // Xử lý
    var luong = songaylam * hesoluong;
    // console.log(luong);
    // Đầu ra
    var luong = "Tổng lương của bạn là: " + currentFM.format(luong) + " VND";
    Tongluong.innerHTML = luong;
}


/*
Bài 2: Tính giá trị trung bình của 5 số 
- Đầu vào: 
    + Nhập 5 số
- Xử lý:
    + Tính tổng của 5 số.
    + TB = tổng của 5 số / 5;
- Đầu ra: Xuất kết quả ra HTML
    
Buổi 1
Đầu vào
var sothu1 = 1;
var sothu2 = 2;
var sothu3 = 3;
var sothu4 = 4;
var sothu5 = 6;
Xử lý
var tong5so = sothu1 + sothu2 + sothu3 + sothu4 + sothu5;
Đầu ra
console.log("Giá trị trung bình 5 số là: " + tong5so / 5);
*/


// Buổi 2,3
// document.getElementById("btnTB").onclick = function (){}
var btnTB = document.getElementById("btnTB");
btnTB.onclick = function () {
    /*
    var number_1 = document.getElementById("TB_1").value;
    var number_2 = document.getElementById("TB_2").value;
    var number_3 = document.getElementById("TB_3").value;
    var number_4 = document.getElementById("TB_4").value;
    var number_5 = document.getElementById("TB_5").value; 
    
    number_1 = parseInt(number_1);
    number_2 = parseInt(number_2);
    number_3 = parseInt(number_3);
    number_4 = parseInt(number_4);
    number_5 = parseInt(number_5);
    */
    //   Đầu vào
    var number_1 = document.getElementById("TB_1").value * 1;
    var number_2 = document.getElementById("TB_2").value * 1;
    var number_3 = document.getElementById("TB_3").value * 1;
    var number_4 = document.getElementById("TB_4").value * 1;
    // Xử lý
    var number_5 = document.getElementById("TB_5").value * 1;
    var tongnamso = number_1 + number_2 + number_3 + number_4 + number_5;
    // console.log(tongnamso);
    var TB5so = tongnamso / 5;
    // Đầu ra
    var TB5so = "Giá trị trung bình 5 số là: " + TB5so;
    Trungbinh.innerHTML = TB5so;

}


/* 
Bài 3: Quy đổi tiền USD sang VND
Đầu vào: 
    + Tỷ giá 1 USD = 23500 VNĐ.
    + Nhập số USD cần quy đổi thành VNĐ.
Xử lý:
    + Số tiền VNĐ quy đổi = tỷ giá (23500) * số USD cần quy đổi
Đầu ra: Xuất giá trị VNĐ đã quy đổi

Buổi 1
Đầu vào
var tygia = 23500;
var usdquydoi = 2;
Xử lý
var vnd = tygia * usdquydoi;
Đầu ra
console.log("Số USD cần quy đổi là: " + usdquydoi);
console.log("Số tiền sau quy đổi: " + vnd + " VND");
*/
// Buổi 2,3
var btnTien = document.getElementById("btnTien");
btnTien.onclick = function () {
    // Đầu vào
    var usd = document.getElementById("usdquydoi").value;
    var tygia = 23500;
    // Xử lý
    var Quydoi = usd * tygia;
    // console.log(tongTien);
    // Đầu ra
    var Quydoi = "Tổng số tiền quy đổi từ USD sang VND là " + currentFM.format(Quydoi) + " VND";
    tongTien.innerHTML = Quydoi;
}


/**
Bài 4
Tính diện tính và chu vi hình chữ nhật.
Đầu vào:
    + Chiều dài hình cn
    + Chiều rộng hình cn
Xử lý:
    + Diện tích hcn S = C.dài * C.rộng;
    + Chu vi P = (tong) / *2
        * tong = c.dài + c.rộng
Đầu ra:
    + Xuất diện tích S
    + Xuất chu vi P

Buổi 1.
// Đầu vào
var cdai = 10;
var crong = 5;
// Xử lý
var S = cdai * crong;
var tonghcn = cdai + crong;
var P = tonghcn * 2;
// Đầu ra
console.log("Diện tích hình chữ nhật là: " + S);
console.log("Chu vi hình chữ nhật là: " + P);
 */
// Buổi 2,3:
document.getElementById("btnHCN").onclick = function () {
    // Đầu vào
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;
    // Xử lý
    var S = chieudai * chieurong;
    var tonghcn = chieudai + chieurong;
    var P = tonghcn * 2;
    // Đầu ra
    var kq = "";
    kq += "<p> Diện tích hình chữ nhật là " + S + "</p >";
    kq += "<p> Chu vi hình chữ nhật là " + P + "</p >";
    document.getElementById("hinhCN").innerHTML = kq;
}

/**
Bài 5: tổng 2 ký số của số vừa nhập.
Đầu vào:
    + Nhập số cần tính
Xử lý:
    + Số hàng chục = số cần tính /10;
    + Số hàng đơn vị = số cần tính % 10;
    + Tổng ký số = Số hàng chục + số hàng đơn vị;
Đầu ra: Xuất kết quả (tổng ký số);

Buổi 1
// Đầu vào
var sonhap = 12;
// Xử lý
var sohangchuc = Math.floor(sonhap / 10);
var sohangdv = Math.floor(sonhap % 10);
var tongkyso = sohangchuc + sohangdv;
// Đầu ra
console.log("Tổng 2 ký số của số đã cho là: " + tongkyso);
 */
// Buổi 2,3
document.getElementById("btnKyso").onclick = function () {
    // Đầu vào
    var num = document.getElementById("num").value * 1;
    // Xử lý
    var sohangchuc = Math.floor(num / 10);
    var sohangdv = Math.floor(num % 10);
    var tongkyso = sohangchuc + sohangdv;
    // Đầu ra
    var ks = "";
    ks = "<p> Tổng 2 ký số của số đã cho là: " + tongkyso + "</p >"
    document.getElementById("kyso").innerHTML = ks;
}


