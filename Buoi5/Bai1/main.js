// Bài 1
// Cho 1 mảng sau
// Đếm số lần xuất hiện của các số
// Ví dụ
// const nums = [1,1,2]
// Output:
// Số 1 xuất hiện 2 lần
// Số 2 xuất hiện 1 lần

//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

function result(arr){
    arr.sort(function(a,b){
        return a-b;
    })
    function unique(arr) {
    return Array.from(new Set(arr)) 
    }
    for(var i=0;i<unique(arr).length;i++){
        var dem=0;
        for(var j=0;j<arr.length;j++){
            if(arr[j]===unique(arr)[i]){
               dem++;
           }
        }
        console.log("Số " + unique(arr)[i]+ " xuất hiện " + dem +" lần");
    }
}
console.log("Case 1");
console.log(result(nums));
console.log("Case 2");
console.log(result(nums1))
console.log("Case 3");
console.log(result(nums2))

