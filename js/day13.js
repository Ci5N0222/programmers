// 정수 배열 arr과 delete_list가 있습니다. 
// arr의 원소 중 delete_list의 원소를 모두 삭제하고 
// 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.
const test1 = (arr, delete_list) => {
    let answer = arr.filter(item => !delete_list.includes(item));
    return answer;
}


//문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. 
// myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 
// pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.
const test2 = (myString, pat) => {
    let answer = '';
    for(let index of myString){
        answer += index === 'A' ? 'B' : 'A';
    }
    return answer.includes(pat) ? 1 : 0;
}


// 문자열 배열 strArr가 주어집니다. 
// 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 
// 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.
const test3 = (strArr) => {
    return strArr.filter(item => !item.includes("ad"));
}


// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 
// 나타내는 boolean 배열 finished가 매개변수로 주어질 때, 
// todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
const test4 = (todo_list, finished) => {
    let answer = [];
    for(let i=0; i<todo_list.length; i++){
        finished[i] === true ? null : answer.push(todo_list[i]);
    }
    return answer;
}


// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, 
// arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
// 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]
const test5 = (arr) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(i !== j && arr[i][j] !== arr[j][i]){
                return 0;
            }
        }
    }
    return 1;
}


// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.
const test6 = (myString) => {
    let answer = '';
    for(const i of myString) {
        if(i < 'l') answer += 'l';
        else answer += i;
    }
    return answer;
}


// 정수 n이 매개변수로 주어질 때, 
// 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
const test7 = (n) => {
    let answer = [];
    for(let i=0; i<n; i++){
        let row = [];
        for(let j=0; j<n; j++){
            i === j ? row.push(1) : row.push(0);
        }
        answer.push(row);
    }
    return answer;
}


// 문자열 binomial이 매개변수로 주어집니다. 
// binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, 
// op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
const test8 = (binomial) => {
    return eval(binomial);
}


// 문자열 myString이 주어집니다. 
// "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.
const test9 = (myString) => {
    let answer = myString.split("x");
    return answer = answer.filter(item => item !== '').sort();
}


// 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.
// intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 
// 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.
// 이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 
// 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.
const test10 = (arr, intervals) => {
    let answer = [];
    intervals.forEach(item => {
        let [a, b] = item;
        answer = [...answer, ...arr.slice(a, b+1)];
    });
    return answer;
}


// 정수 배열 arr가 주어집니다. 
// 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, 
// idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
const test11 = (arr, idx) => {
    let answer = -1;
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] === 1) {
            answer = i;
            break; 
        }
    }
    return answer;
}