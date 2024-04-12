// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
// a + b = c
const test1 = (a, b) => {
    console.log(`${a} + ${b} = ${a+b}`);
}


// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
const test2 = (str1, str2) => {
    console.log(str1+str2);
}


// 문자열 str이 주어집니다.
// 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
const test3 = (str) => {
    const result = Array.from(str, index => {
        return console.log(index);
    }).join("");
}


// 자연수 n이 입력으로 주어졌을 때 
// 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
const test4 = (n) => {
    console.log(n%2 === 0 ? `${n} is even`  : `${n} is odd`);
}


// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 
// 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
const test5 = (my_string, overwrite_string, s) => {
    const head = my_string.substring(s, overwrite_string);
    const tail = my_string.substring(s+overwrite_string.length, my_string.length);
    return head+overwrite_string+tail;

    // slice
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}