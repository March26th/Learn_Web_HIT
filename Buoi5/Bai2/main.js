// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];
console.log("- - - - - - - - - Yêu cầu 1 - - - - - - - - - - ");
console.log("Menu");
console.log("1.Xem danh sách");
console.log("2.Thêm người dùng");
console.log("3.Xóa người dùng theo id");
console.log("4.Cập nhật thông tin người dùng");
console.log("------------------------------------");
/*------------------------------------------------------------------------*/
function show(){
    console.log(users);
}
console.log("Chọn 1:Xem danh sách");
show();
function insert(newname,newage,newgender,newmoney){
    const newid=users[users.length-1].id+1;
    var temp = {id: newid, name: newname, age: newage, gender: newgender,money: newmoney};
    users.push(temp);
}
/*------------------------------------------------------------------------*/
console.log("Chọn 2:Thêm người dùng");
insert("Tr Nguyen",19,"male",1500);
show();
function deletebyId(id){
    users.splice(id-1,1);
}
console.log("Chọn 3:Xóa người dùng theo id");
var ID=2;
deletebyId(ID);
show();
/*------------------------------------------------------------------------*/
console.log("Chọn 4:Cập nhật thông tin người dùng");
function update(){
    for(var i=ID-1;i<users.length;i++){
        if(users[i].id>ID){
        users[i].id--;
    }
    }
    show();
}
update();
/*------------------------------------------------------------------------*/
console.log("- - - - - - - - - Yêu cầu 2 - - - - - - - - - - ");
/*    Thêm 2 người vào */
console.log("Cập nhật lại sau khi thêm");
insert("Le Van A",16,"male",400);
insert("Le Thi B",25,"female",3000);
show();
/* Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi*/
function bonus1(){
    var t=0;
    var a=0;
    for(var i=0;i<users.length;i++){
        if(users[i].gender==="male"){
            t++;
        }
        if(users[i].age>15){
            a++;
        }
    }
    console.log("Có "+ t +" nam");
    console.log("Có "+ a+" người trên 15 tuổi");
}
console.log("======Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi======");
bonus1();
/*Tính tổng tiền những người có id chẵn*/
console.log("======Tính tổng tiền những người có id chẵn======");
function bonus2(){
    var sum=0;
    for(var i=0;i<users.length;i++){
        if(users[i].id % 2==0){
            sum+=users[i].money;
        }
    }
    console.log("Tổng tiền những người có id chẵn : "+sum);
}
bonus2();
/*Ai nghèo nhất, Ai giàu nhất*/
console.log("======Ai nghèo nhất, Ai giàu nhất======");
function max_min(){
    var max=users[0].money;
    var indexmax;
    var min=users[0].money;
    var indexmin;
    for(var i=1;i<users.length;i++){
        if(users[i].money>max){
            max=users[i].money;
            indexmax=i;
        }
        if(users[i].money<min){
            min=users[i].money;
            indexmin=i;
        }
    }
    console.log("Giàu nhất :"+users[indexmax].name);
    console.log("Nghèo nhất :"+users[indexmin].name);
}
max_min();
console.log("- - - - - - - - - Yêu cầu 3 - - - - - - - - - - ");
/*Chuyển hết những người có giới tính male về female*/
console.log("------Chuyển hết những người có giới tính male về female-----");
function update_gender(){
    for(var i=0;i<users.length;i++){
        users[i].gender="female";
    }
    show();
}
update_gender();


