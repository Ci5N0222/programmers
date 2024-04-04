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


// 