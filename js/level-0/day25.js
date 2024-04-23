// 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 
// 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 
// 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
// 모스부호는 다음과 같습니다.
const test1 = (letter) => {
    morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    return letter.split(' ').map(item => morse[item]).join('');
}

// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 
// 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
const test2 = (n) => {
    let i = 1;
    let factorial = 1;
    while (factorial <= n) {
        i++;
        factorial *= i;
    }
    return i - 1;
}


// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. 
// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 
// num_list를 2 * 4 배열로 다음과 같이 변경합니다. 
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
const test3 = (num_list, n) => {
    let answer = [];
    let array = [];
    num_list.map((item, i) => {
        array.push(item);
        if((i+1)%n === 0 ) {
            answer.push(array);
            array = [];
        }
    });
    return answer;
}


// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 
// 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
// 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 
// n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
const test4 = (n) => {
    let answer = [];
    let divisor = 2;

    while (n >= 2) {
        if(n%divisor === 0) {
            answer.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    return [...new Set(answer)];
}


// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 
// 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 
// 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
const test5 = (s) => {
    let answer = 0;
    let before = 0;
    s.split(' ').forEach(item => {
        if(item === "Z"){
            answer -= before;
            before = 0;
        } else {
            answer += parseInt(item);
            before = parseInt(item);
        }
    });
    return answer;
}


// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 
// 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
// k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
const test6 = (numbers, k) => {
    return numbers[((k - 1) * 2) % numbers.length];
}


// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
const test7 = (balls, share) => {
    const factorial = (num) => (num === 0 ? 1 : num*factorial(num-1));
    return Math.round(
        factorial(balls) / factorial(balls - share) / factorial(share)
    );
}