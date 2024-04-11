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

