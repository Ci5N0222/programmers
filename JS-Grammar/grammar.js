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


/** reduce() **/
// 배열의 각 요소에 대해 주어진 콜백 함수를 실행하고 하나의 결과값을 반환
// 배열을 하나의 값으로 줄이는 데 사용
// 주로 배열의 모든 요소를 합산하거나 평균을 구하는 등의 작업에 활용
// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// callback: 각 요소에 대해 실행할 함수로, 네 가지 매개변수를 받습니다.
// accumulator: 누산기로서 콜백 함수의 반환값을 누적합니다. 초기값으로 설정된 경우, 이는 이전 콜백 호출의 반환값이고, 아닌 경우, 배열의 첫 번째 요소입니다.
// currentValue: 현재 처리 중인 요소입니다.

// index (선택사항): 배열 내 현재 처리 중인 요소의 인덱스입니다.
// array (선택사항): reduce()가 호출된 배열입니다.
// initialValue (선택사항): 콜백 함수의 첫 번째 호출에서 accumulator의 초기값으로 사용되는 값입니다. 생략되면 배열의 첫 번째 요소가 accumulator의 초기값으로 사용됩니다.
// reduce() 메서드의 작동 과정은 다음과 같습니다:

// accumulator에 초기값이 제공되지 않은 경우, 배열의 첫 번째 요소가 초기값으로 사용됩니다. 그렇지 않으면, 초기값은 제공된 값입니다.
// 배열의 각 요소마다 callback 함수가 실행됩니다.
// callback 함수에서 반환된 값은 accumulator에 누적됩니다.
// 마지막 배열 요소가 처리되면, reduce() 메서드는 누적된 결과를 반환합니다.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 출력: 15 (1 + 2 + 3 + 4 + 5)
// 이 예제에서는 초기값으로 0을 설정하여 배열의 모든 요소를 합산하고 있습니다.