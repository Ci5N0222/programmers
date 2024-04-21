// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 
// 물품을 구매하는데 필요한 금액을 조사했습니다. 
// 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 
// 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 
// 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 
// 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
const test1 = (d, budget) => {
    let count = 0;
    d.sort((a, b) => a - b);
    for(let i=0; i<d.length; i++){
        budget -= d[i];
        if(budget >= 0) count++;
        else break;
    }
    return count;
}


// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 
// 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
// 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 
// 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 
// 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 
// 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 
// 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.
const test2 = (number) => {
    let count = 0;
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                if(number[i]+number[j]+number[k] === 0) count++;
            }
        }
    }
    return count;
}


// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
// "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
const test3 = (s, n) => {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === ' ') {
            answer += ' ';
            continue;
        }

        if (char >= 'A' && char <= 'Z') {
            let code = char.charCodeAt(0) - 'A'.charCodeAt(0);
            let shiftedCode = (code + n) % 26;
            let shiftedChar = String.fromCharCode(shiftedCode + 'A'.charCodeAt(0));
            answer += shiftedChar;
        }
        else if (char >= 'a' && char <= 'z') {
            let code = char.charCodeAt(0) - 'a'.charCodeAt(0);
            let shiftedCode = (code + n) % 26;
            let shiftedChar = String.fromCharCode(shiftedCode + 'a'.charCodeAt(0));
            answer += shiftedChar;
        }
    }

    return answer;
}