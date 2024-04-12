// 임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.
// 예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
// 문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.
const test1 = (myStr) => {
    var answer = [];
    let str = '';
    for(let i=0; i<myStr.length; i++){
        if(myStr[i] === 'a' || myStr[i] === 'b' || myStr[i] === 'c') {
            if(str.length !== 0){
                answer.push(str);
                str = '';
            }
        } else {
            str += myStr[i];
        }
    }
    if(str !== '') answer.push(str);
    
    return answer.length === 0 ? ["EMPTY"] : answer;
}


// 정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. 
// slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.
// n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
// n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
// n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
// n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
// 올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.
const test2 = (n, slicer, num_list) => {
    const [a, b, c] = slicer;
    
    switch (n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            let answer = [];
            for (let i = a; i <= b; i += c) {
                answer.push(num_list[i]);
            }
            return answer;
        default:
            return [];
    }
}


// 팀의 막내인 철수는 아메리카노와 카페 라테만 판매하는 카페에서 팀원들의 커피를 사려고 합니다. 
// 아메리카노와 카페 라테의 가격은 차가운 것과 뜨거운 것 상관없이 각각 4500, 5000원입니다. 
// 각 팀원에게 마실 메뉴를 적어달라고 하였고, 
// 그 중에서 메뉴만 적은 팀원의 것은 차가운 것으로 통일하고 
// "아무거나"를 적은 팀원의 것은 차가운 아메리카노로 통일하기로 하였습니다.
// 각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 
// 카페에서 결제하게 될 금액을 return 하는 solution 함수를 작성해주세요. 
// order의 원소는 아래의 것들만 들어오고, 각각의 의미는 다음과 같습니다.
const test3 = (order) => {
    let answer = 0;
     order.forEach(item => {
        switch (item) {
            case "americano":
            case "anything":
            case "americanoice":
            case "iceamericano":
                answer += 4500;
                break;
            case "americanohot":
            case "hotamericano":
                answer += 4500;
                break;
            case "cafelatteice":
            case "cafelatte":
            case "icecafelatte":
                answer += 5000;
                break;
            case "cafelattehot":
            case "hotcafelatte":
                answer += 5000;
                break;
        }
    });
    return answer;
}


// 두 정수 q, r과 문자열 code가 주어질 때, 
// code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 
// 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
const test4 = (q, r, code) => {
    let answer = '';
    for(let i=0; i<code.length; i++){
        i%q === r ? answer += code[i] : null;
    }
    return answer;
}


// 정수 배열 arr가 주어집니다. 
// arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
// 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
// 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, 
// arr(x) = arr(x + 1)인 x가 항상 존재합니다. 
// 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.
// 단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 
// 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.
const test5 = (arr) => {
    let count = 0;
    let newArray = [...arr];
    while(true){
        let array = newArray.map(item => {
            if(item >= 50 && item%2 === 0) return item/2;
            else if(item < 50 && item%2 === 1) return item*2+1;
        });
        if(JSON.stringify(newArray) === JSON.stringify(array)) return count-1;
        newArray = array;
        count++;
    }
}


// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, 
// my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, 
// my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 
// 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
const test6 = (my_string) => {
    let answer = new Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        let char = my_string[i];
        if (char >= 'A' && char <= 'Z') {
            let index = char.charCodeAt(0) - 'A'.charCodeAt(0);
            answer[index]++;
        }
        else if (char >= 'a' && char <= 'z') {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            answer[index + 26]++;
        }
    }

    return answer;
}


// 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다.
// str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 
// "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 
// 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 
// 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
// "l"이나 "r"이 없다면 빈 리스트를 return합니다.
const test7 = (str_list) => {
    let answer = [];
    for(let i=0; i<str_list.length; i++){
        if(str_list[i] === "l") {
            for(let j=0; j<i; j++){
                answer.push(str_list[j]);
            }
            return answer;
        }
        if(str_list[i] === "r") {
            for(let j=i+1; j<str_list.length; j++){
                answer.push(str_list[j]);
            }
            return answer;
        }
    }
}