// 0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.
// i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.
// 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
// 위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.
// 단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.
const test1 = (arr) => {
    let stk = [];
    arr.forEach(item => {
        if(stk.length === 0 || stk[stk.length-1] !== item) stk.push(item);
        else stk.pop();
    });
    return stk.length === 0 ? [-1] : stk;
}

// 문자열 my_string이 매개변수로 주어집니다. 
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
const test2 = (my_string) => {
    let answer = ''
    let seen = new Set();
    for (let char of my_string){
        if(!seen.has(char)) {
            answer += char;
            seen.add(char);
        }
    }
    return answer;
}


// 문자열 s가 매개변수로 주어집니다. 
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
const test3 = (s) => {
     const seen = new Map();
     for (let char of s) {
        seen.set(char, (seen.get(char) || 0) + 1);
     }
     const answer = Array.from(seen.keys()).filter(item => seen.get(item) === 1);
     return answer.sort().join('');
}


// 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
const test4 = (array, n) => {
    let answer = array[0]; 
    let minDiff = Math.abs(n - answer); 

    array.forEach(item => {
        const diff = Math.abs(n - item);
        if (diff < minDiff) {
            minDiff = diff;
            answer = item;
        }
    });

    return answer;
}