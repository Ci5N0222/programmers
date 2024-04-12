/** indexOf() **/
// parameter 1
// 해당 문자가 있는 곳의 첫번째 인덱스를 반환, 없다면 -1 반환
const indexOfStr = 'hello world';
console.log(indexOfStr.indexOf('o')); // 4
console.log(indexOfStr.indexOf('z')); // -1
// parameter 2
// 해당 문자를 두번째 파라미터로 받은 인덱스부터 검색
// 해당 문자 있는 곳의 첫번째 인덱스 반환, 없다면 -1 반환
console.log(indexOfStr.indexOf('o', 4)); // 7


/** lastIndexOf() **/
// 패턴이 마지막으로 등장하는 위치를 찾음
const lastIndexOfStr = 'hello world';
console.log(lastIndexOfStr.indexOf('o')); // 7


/** slice() **/
// 문자열이나 배열의 일부분을 선택하여 새로운 문자열이나 배열을 반환
let sliceStr = "hello, world!"
// 사용 예시: sliceStr.slice(start, end);

// start: 선택한 부분의 시작 인덱스입니다. 
// 음수 값을 사용할 경우 끝에서부터의 오프셋을 나타냅니다.
let newString1 = sliceStr.slice(0);

// end (옵션): 선택한 부분의 종료 인덱스입니다. 
// 이 인덱스 이전까지의 문자열이 선택됩니다. 
// 생략할 경우 문자열의 끝까지 선택됩니다. 
// 음수 값을 사용할 경우 끝에서부터의 오프셋을 나타냅니다.
let newString2 = sliceStr.slice(0,3);

let sliceArr = ['h','e','l','l','o',' ', 'w', 'o', 'r', 'l', 'd'];
sliceArr.slice(start, end);

// start: 선택한 부분의 시작 인덱스 입니다.
// 음수 값을 사용할 경우 끝에서부터의 오프셋을 나타냅니다.
sliceArr.slice(0);

// end (옵션): 선택한 부분의 종료 인덱스입니다. 
// 이 인덱스 이전까지의 요소가 선택됩니다.
// 생략할 경우 배열의 끝까지 선택됩니다.
// 음수 값을 사용할 경우 끝에서부터의 오프셋을 나타냅니다.
sliceArr.slice(0, 7);

// 예
console.log(str.slice(7));      // "world!"
console.log(str.slice(7, 12));  // "world"
console.log(str.slice(-6));     // "world!"
console.log(str.slice(-6, -1)); // "world"


/** split() **/
// 문자열을 지정된 구분자를 기준으로 나누어 배열로 변환하는 JavaScript 문자열 메서드
string.split(separator, limit)
// separator: 필수 매개변수로, 문자열을 나눌 때 사용할 구분자.
// 이 구분자는 문자열 내에서 찾아진 첫 번째 구분자를 문자열로 나눈다. 
// 매개변수를 생략하면 문자열 전체가 하나의 요소로 포함된 배열이 반환

// limit: 선택적 매개변수로, 반환할 배열의 최대 길이를 나타낸다.
// 이 매개변수를 생략하면 문자열 전체를 기준으로 배열이 생성됨.
const str1 = "apple,banana,orange";
const arr1 = str.split(","); // 구분자 ','를 기준으로 문자열을 나누어 배열 생성
console.log(arr); // ["apple", "banana", "orange"]


/** join() **/
// 배열의 모든 요소를 하나의 문자열로 결합하는 JavaScript의 배열 메서드
// 배열의 각 요소를 문자열로 반환한 후, 지정된 구분자를 이용하여 하나의 문자열로 합칩니다.
array.join(separator)
// separator: 선택적 매개변수로, 배열의 요소를 결합할 때 사용할 구분자
// 이 구분자는 각 요소 사이에 삽입. 이 매개변수를 생략하면 기본적으로 쉼표가 사용됨
const arr2 = ["apple", "banana", "orange"];
const str2 = arr.join(","); // 구분자 ','를 사용하여 배열의 요소를 결합하여 문자열 생성
console.log(str); // "apple,banana,orange"
const arr = ["apple", "banana", "orange"];
const str = arr.join(" "); // 구분자 ' ' (공백)을 사용하여 배열의 요소를 결합하여 문자열 생성
console.log(str); // "apple banana orange"