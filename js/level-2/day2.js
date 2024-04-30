// Finn은 요즘 수학공부에 빠져 있습니다. 
// 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 
// 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
const test1 = (n) => {
    let count = 0;
    for(let i=1; i<=n; i++){
        if(i === n) {
            count ++;
            break;
        }
        let score = i;
        for(let j=i+1; j<n; j++){
            score += j;
            if(score > n) break;
            else if (score === n){
                count++;
                break;
            } 
        }   
    }
    return count;
}


// 길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 
// 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. 
// (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)
// 예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면
// A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
// A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
// A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)
// 즉, 이 경우가 최소가 되므로 29를 return 합니다.
// 배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.
const test2 = (A, B) => {
    let arr1 = A.sort((a, b) => a - b);
    let arr2 = B.sort((a, b) => b - a);
    let answer = 0;
    for(let i=0; i<arr1.length; i++){
        answer += arr1[i] * arr2[i];
    }
    return answer;
}


// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. 
// s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// s의 길이는 1 이상 150,000 이하입니다.
// s에는 '1'이 최소 하나 이상 포함되어 있습니다.
const test3 = (s) => {
    let del = 0;
    let count = 0;
    while(s > 1){
        let answer = s.split('').filter(item => {
            if(item === "0") del++;
            if(item === "1") return item;
        }).join('');
        s = decimalToBinary(answer.length);
        count++;
    }
    return [count, del];

}

// 2진수 변환 ( answer.length )
function decimalToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary; 
        decimal = Math.floor(decimal / 2); 
    }
    return binary !== "" ? binary : "0";
}