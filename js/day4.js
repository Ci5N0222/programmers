// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
// 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항의미할 때, 
// 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
const test1 = (a, d, included) => {
    let answer = 0;
    included.map((item, i) => {
        if(item) answer += a+(d*i);
    });
    return answer;
}


// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 
// 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
const test2 = (a, b, c) => {
    let answer = 0;
    if(a === b && b === c) answer = (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
    else if(a === b || b === c || a === c) answer = (a+b+c)*(a**2+b**2+c**2);
    else answer = a+b+c;
    return answer;
}


// 정수가 담긴 리스트 num_list가 주어질 때, 
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
const test3 = (num_list) => {
    let answer = 0;
    let sum = 0;
    let mul = 1;
    num_list.map(item => {
        sum += item;
        mul *= item;
    })
    answer = mul < sum**2 ? 1 : 0;
    return answer;
}


//정수가 담긴 리스트 num_list가 주어집니다. 
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
const test4 = (num_list) => {
    let answer = 0;
    let one = '';
    let zero = '';
    num_list.map(item => item%2 === 0 ? zero += item.toString() : one += item.toString());
    answer = parseInt(one) + parseInt(zero);
    return answer;
}


// 정수 리스트 num_list가 주어질 때, 
// 마지막 원소가 그전 원소보다 크면 
// 마지막 원소에서 그전 원소를 뺀 값을 

// 마지막 원소가 그전 원소보다 크지 않다면 
// 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
const test5 = (num_list) => {
    let add = 0;
    let last = num_list[num_list.length-1];
    let lastBefore = num_list[num_list.length-2];
    add = last > lastBefore ? last - lastBefore : last*2;
    answer = [...num_list, add];
    return answer;
}


// 정수 n과 문자열 control이 주어집니다. 
// control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, 
// control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
const test6 = (n, control) => {
    for(let i=0; i<control.length; i ++){
        if(control[i] === "w") n = n+1;
        if(control[i] === "s") n = n-1;
        if(control[i] === "d") n = n+10;
        if(control[i] === "a") n = n-10;
    }
    return n;
}


// 정수 배열 numLog가 주어집니다. 
// 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.
// "w" : 수에 1을 더한다.
// "s" : 수에 1을 뺀다.
// "d" : 수에 10을 더한다.
// "a" : 수에 10을 뺀다.
// 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다.
//  즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
// 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
const test7 = (numLog) => {
    let answer = '';
    let data = 0;
    numLog.map((item, i) => {
        if(item - data === 1) answer += "w"
        if(item - data === -1) answer += "s"
        if(item - data === 10) answer += "d"
        if(item - data === -10) answer += "a"
        data = item;
    });
    return answer;
}