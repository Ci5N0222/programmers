// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.
// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때, 
// 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.
const test1 = (arr1, arr2) => {
    let answer = 0;
    if(arr1.length === arr2.length){
        let array1 = 0;
        let array2 = 0;
        for(let i=0; i<arr1.length; i++){
            array1 += arr1[i];
            array2 += arr2[i];
        }
        if(array1 > array2) answer = 1;
        else if(array1 < array2) answer = -1;
        else answer = 0;
    } else {
        answer = arr1.length > arr2.length ? 1 : -1;
    }
    return answer;
}


// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때,
// 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
// 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.
const test2 = (names) => {
    let answer = [];
    let arr = [];
    let count = 0;
    for(let i=0; i<names.length; i++){
        let arr2 = [];
        if(count%5 === 0) {
            arr.push(arr2);
        }
        arr2.push(names[i]);
        count ++;
    }
    for(let i=0; i<arr.length; i++){
        answer.push(arr[i][0]);
    }

    return answer;
}


// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, 
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
const test3 = (my_string) => {
    let answer = my_string.trim().split(' ');
    return answer.filter(item => item !== '');
}


// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 
// 문자열 rny_string이 주어질 때, 
// rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
const test4 = (rny_string) => {
    return rny_string.replaceAll('m', 'rn');
}


// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. 
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, 
// arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.
const test5 = (arr, n) => {
    return arr.map((item, i) => {
        if(arr.length%2 === 1) {
            if(i%2 === 0) return item + n
            else return item
        } else {
            if(i%2 === 1) return item + n
            else return item
        }
    });
}


// 정수 리스트 num_list가 주어집니다. 
// 가장 첫 번째 원소를 1번 원소라고 할 때, 
// 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.
const test6 = (num_list) => {
    let num1 = 0;
    let num2 = 0;
    num_list.forEach((item, i) => {
        i%2 === 0 ? num1 += item : num2 +=item; 
    });

    return num1 > num2 ? num1 : num2;
}


// 문자열들이 담긴 리스트가 주어졌을 때, 
// 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 
// 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 
// 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.
// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, 
// str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.
const test7 = (str_list, ex) => {
    let str = '';
    let answer = str_list.map(item => {
        if(item.includes(ex)) return null;
        else return item;
    });
    answer.map(item => {
        if(item !== null) str += item;
    });
    return str;
}


// 정수 리스트 num_list와 정수 n이 주어질 때, 
// num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 
// 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
const test8 = (num_list, n) => {
    let answer = [];
    let num1 = num_list.slice(0, n);
    answer.push(...num_list.slice(n));
    answer.push(...num1);
    return answer;
}


// 문자열 myString이 주어집니다. 
// myString을 문자 "x"를 기준으로 나눴을 때 
// 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
const test9 = (myString) => {
    let answer = [];
    let arr = myString.split('x');
    arr.map(item => {
        answer.push(item.length);
    })
    return answer;
}


// 정수로 이루어진 문자열 n_str이 주어질 때, 
// n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
const test10 = (n_str) => {
    let index = 0;
    for(let i=0; i<n_str.length; i++){
        if(n_str[i] === '0') index ++;
        else break;
    }
    return n_str.substring(index);
}