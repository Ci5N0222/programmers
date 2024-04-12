// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
// queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
const test1 = (arr, queries) => {
    let answer = [...arr];
    queries.map(item => {
        let i = answer[item[0]];
        let j = answer[item[1]];
        answer[item[0]] = j;
        answer[item[1]] = i;
    })
    return answer;
}


// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
// queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.
// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
const test2 = (arr, queries) => {
    let answer = [];
    queries.forEach(item => {
        let min = [];
        let count = -1;
        const [s, e, k] = item;

        for (let i = s; i <= e; i++) {
            min.push(arr[i]);
        }
        min.forEach(i => {
            if (i > k) {
                if (count === -1 || count > i) count = i;
            }
        });
        
        if (count === -1) answer.push(-1);
        else answer.push(count);
    });
    return answer;

    // 리팩토링
    return queries.map(item => {
        const [s, e, k] = item;
        const min = arr.slice(s, e + 1).filter(num => num > k);
        const count = min.length > 0 ? Math.min(...min) : -1;
        return count;
    });
}


// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
// queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
const test3 = (arr, queries) => {
    queries.forEach(item => {
        const [s, e, k] = item;
        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                arr[i] += 1;
            }
        }
    });
    return arr;
}


// 정수 l과 r이 주어졌을 때, 
// l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
const test4 = (l, r) => {
    let answer = [];

    for(let i=l; i<=r; i++) {
        const str = i.toString();
        let check = true;
        for(let digit of str){
            if(digit !== '0' && digit !== '5') check = false;
        }
        if(check) answer.push(i);
    }
    return answer.length === 0 ? [-1] : answer;
}


// 정수 start_num와 end_num가 주어질 때, 
// start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
const test5 = (start_num, end_num) => {
    let answer = [];
    for(let i=start_num; i<=end_num; i++) answer.push(i);
    return answer;
}


// 모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고, 
// x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.
// 그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다.
// 계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다.
// 임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.
const test6 = (n) => {
    var answer = [n];
    while(true){
        const count = n%2 === 0 ? n/2 : 3*n+1;
        answer.push(count);
        n = count;
        if(count === 1) break;
    }
    return answer;
}


// 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.
// 변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.
// 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
// 위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.
const test7 = (arr) => {
    let stk = [];

    arr.forEach((item) => {
        while (stk.length > 0 && stk[stk.length - 1] >= item) {
            stk.pop();
        }
        stk.push(item);
    });

    return stk;
}