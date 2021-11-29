// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = "    23hOANG      B23UI   hOang231     ";

const case3 = "23traN    dUOng23     ";

function All(arr){
    var s;
    s= arr.trim();
    s=s.replace(/\s+/g,' ');
    s=s.toLowerCase();
    s=s.split("");
    for(var i=0;i<s.length;i++){
        if(!isNaN(s[i])&&s[i]!=' '){
            s.splice(i,1);
            i--;
        }
    }
    s=s.join('');
    var temp=s.split(" ")
    var result='';
    for(var i=0;i<temp.length;i++){
        var str1=temp[i];
        str1.toLowerCase();
        var str1_1=str1.charAt(0).toUpperCase();
        var str1_2=str1.substr(1);
        result+=str1_1+str1_2;
        if(i!=temp.length-1){
            result+=" ";
        }
    }
    console.log(result);
}
All(case1);
All(case2);
All(case3);