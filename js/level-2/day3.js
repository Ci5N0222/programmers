// 2진수 변환 ( answer.length )
function decimalToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary; 
        decimal = Math.floor(decimal / 2); 
    }
    return binary !== "" ? binary : "0";
}


// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.
const test1 = (n) => {
    let length = decimalToBinary(n).split('').filter(item => item === "1").length;
    let answer = 0;
    while(true){
        for(let i=n+1; i<n*n; i++){
            if(length === decimalToBinary(i).split('').filter(item => item === "1").length){
                answer = i;
                return i;
            }
        }
    }
}


// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
// 예를들어
// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다.
const test2 = (n) => {
    let answer = [];
    for(let i=0; i<=n; i++){
        if(i === 0) answer[i] = 0;
        else if(i === 1) answer[i] = 1;
        else {
            let sum = answer[i-2] + answer[i-1];
            answer[i] = sum%1234567;
        }
    }
    return answer[n];
}