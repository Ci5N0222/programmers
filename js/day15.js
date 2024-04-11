// 2차원 정수 배열 board와 정수 k가 주어집니다.
// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 
// return 하는 solution 함수를 완성해 주세요.
const test1 = (board, k) => {
    let answer = 0;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++)
            if(i+j <= k) answer += board[i][j];
    }
    return answer;
}


// 정수 배열 date1과 date2가 주어집니다. 
// 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 
// 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.
// 만약 date1이 date2보다 앞서는 날짜라면 1을, 
// 아니면 0을 return 하는 solution 함수를 완성해 주세요.
const test2 = (date1, date2) => {
    for(let i=0; i<date1.length; i++){
        if(date1[i] < date2[i]) {
            return 1;
        } else if(date1[i] > date2[i]) {
            return 0;
        }
    }
    return 0;
}


// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
// queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
const test3 = (arr, queries) => {
    queries.forEach(([s, e]) => {
        for(let i = s; i <= e; i++) {
            arr[i]++;
        }
    });
    return arr;
}



// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, 
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
const test4 = (my_string, s, e) => {
    let answer = my_string.slice(0, s); 
    for(let i = e; i >= s; i--) {
        answer += my_string[i]; 
    }
    answer += my_string.slice(e + 1); 
    return answer;
}


// 정수 배열 arr이 매개변수로 주어집니다. 
// arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. 
// arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.
const test5 = (arr) => {
    let length = arr.length;
    let i = 1;
    while(length > i) i*=2;
    while(arr.length < i) arr.push(0);
    return arr;
}


// 문자열 myString과 pat이 주어집니다. 
// myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
const test6 = (myString, pat) => {
    let answer = 0;
    let index = myString.indexOf(pat);
    if(index === -1) return answer;
    while(index !== -1){
        answer++;
        index = myString.indexOf(pat, index+1);
    }
    return answer;
}


// 문자열 myString과 pat가 주어집니다. 
// myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
const test7 = (myString, pat) => {
    let answer = '';
    let index = myString.lastIndexOf(pat);
    if(index === -1) return answer;
    answer = myString.slice(0, index+pat.length);
    return answer;
}


// 정수가 있을 때, 
// 짝수라면 반으로 나누고, 
// 홀수라면 1을 뺀 뒤 반으로 나누면, 
// 마지막엔 1이 됩니다. 
// 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.
// 10 / 2 = 5
// (5 - 1) / 2 = 2
// 2 / 2 = 1
// 위와 같이 3번의 나누기 연산으로 1이 되었습니다.
// 정수들이 담긴 리스트 num_list가 주어질 때, 
// num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.
const test8 = (num_list) => {
    let answer = 0;
    num_list.forEach(item => {
        while(item > 1){
            if(item%2 === 0) item /= 2;
            else item = (item-1) >>> 1;
            answer++;
        }
    });
    return answer;
}


// 문자열 배열 strArr이 주어집니다. 
// strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 
// 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
const test9 = (strArr) => {
    let lengthArr = strArr.map(item => item.length);
    lengthArr.sort((a, b) => a-b);

    // 가장 큰 그룹의 크기
    let maxGroupSize = 1;

    // 현재 그룹의 크기
    let currentGroupSize = 1;

    for(let i=1; i<lengthArr.length; i++){
        // 이전 문자열과 값이 같을 경우
        if(lengthArr[i] === lengthArr[i-1]) {
            currentGroupSize++;
            // 최대 그룹 크기 갱신
            maxGroupSize = Math.max(maxGroupSize, currentGroupSize); 
        } else {
            // 현재 그룹 크기 초기화
            currentGroupSize = 1;
        }
    }
    return maxGroupSize;
}