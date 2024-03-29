// 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요
const test1 = (str) => {
    console.log(str);
}


// 정수 a와 b가 주어집니다. 
// 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
// 출력 : a = 4, b = 5
const test2 = (a, b) => {
    console.log(`a = ${a}\nb = ${b}`);
}


// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
const test3 = (str, n) => {
    console.log(str.repeat(n));
}


// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
// 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
const test4 = (str) => {
    const result = Array.from(str, index => {
        return index === index.toUpperCase() ? index.toLowerCase() : index.toUpperCase()
    }).join("");
    console.log(result);
}