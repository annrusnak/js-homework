  //1. �������� �������, ��� ���� ������� ����� � ��������� ���������, �������������� ����� map()
   var testArray = [1,2435,544,4545, 4, 6, 7 ,23];
function double(array) {
	var doubled = testArray.map(function(num) {
  return num * 2;
})
  return doubled;
}
console.log(double(testArray));

    //2. �������� �������, ��� ���� ������� ����� � ��������� ����������, �������������� ����� filter()

var myArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var odd = function (num) {
return num % 2 !== 0;
};
function oddFilter(array){
return myArray.filter(odd);
}

console.log(oddFilter(myArray));

    //3. �������� �������, ��� ���� ������� ������ ����������� ������� ������, �������������� ����� reduce()
  var myArray = [1,2,3,4,5,6,7,8,9,10,11,12];
 function avg(array) {
     var sum = array.reduce(function(a, b) { return a + b; });
     var avg = sum / array.length;
    return avg;
    }
    console.log(avg(myArray));