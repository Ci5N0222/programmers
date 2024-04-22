// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
const test1 = (box, n) => {
    let answer = 1;
    box.forEach(item => {
        answer *= Math.floor(item/n);
    });
    return answer;
}

// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 
// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
const test2 = (n) => {
    let str = "*"
    for(let i=1; i<=n; i++){
        console.log(str);
        str += "*";
    }
}


// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. 
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
const test3 = (age) => {
    const str = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j'];
    return age.toString().split('').map(item => {
        console.log(item);
        return str[item];
    }).join('');
}


// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 
// 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
const test4 = (n) => {
    let answer = 0;
    for(let i=1; i<=n; i++){
        if((6*i)%n === 0) {
            answer = i;
            break;
        }
    }
    return answer;
}


// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
const test5 = (n) => {
    let answer = 0;
    for(let i=1; i<=n; i++){
        let count = 0;
        for(let j=1; j<=i; j++){
            if(i%j === 0) count++;
        }
        if(count >= 3)answer++;
    }
    return answer;
}

// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
// 수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
const test6 = (emergency) => {
    let answer = emergency.slice().sort((a,b) => b-a);
    return emergency.map(item => answer.indexOf(item)+1);
}