// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";

function checkEmail(email) {
    return email.match(/[\w]+\@gmail\.com/g);
}
console.log("Email: " + checkEmail(textEmail));

function checkPhone(email) {
    return email.match(/[0-9]{10}/g);
}
console.log("Phone: " + checkPhone(textPhone));