// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 
// 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
// 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 
// 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
const test1 = (num) => {
    if(num === 1) return 0;
    let count = 0;
    while(num !== 1){
        num = num%2 === 0 ? num/2 : num*3 + 1;
        count++;
        if(count === 500) return -1;
    }
    return count;
}


// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
const test2 = (arr1, arr2) => {
    let answer = [];
    for(let i=0; i<arr1.length; i++){
        let item = [];
        for(let j=0; j<arr1[i].length; j++) {
            item.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(item);
    }
    return answer;
}


// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
const test3 = (n ,m) => {
    for(let i=0; i<n; i++){
        let star = '';
        for(let j=0; j<m; j++){
            star += "*";      
        }
        console.log(star);
    }
}


// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
// 제한 사항
// str은 길이 1 이상인 문자열입니다.
const test4 = (s) => {
    let sArr = s.split("");
    sArr.sort((a,b) => {
        if(a>b) return -1;
        if(a<b) return 1;
    })
    return sArr.join('');
}


// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, 
// solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
const test5 = (n, m) => {
    let num = n < m ? m : n;
    let gcd = 1;
    let lcm = 1;
    
    for(let i=1; i<num; i++){
        if(n%i === 0 && m%i === 0) gcd = i;
    }
    while(true){
        if((lcm%n === 0)&&(lcm%m === 0)){
            break;
        }
        lcm++;
    }   
    return [gcd, lcm];
}


// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
const test6 = (arr) => {
    let answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i-1]) answer.push(arr[i]);
    }
    return answer;
}


// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
const test7 = (s) => {
    let answer = s.split(" ");
    return answer.map(item => {
        let str = '';
        for(let i=0; i<item.length; i++){
            if(i === 0 || i%2 === 0) str += item[i].toUpperCase();
            else str += item[i].toLowerCase(); 
        }
        return str;
    }).join(' ');
}