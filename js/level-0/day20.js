// 랜덤으로 서로 다른 k개의 수를 저장한 배열을 만드려고 합니다. 
// 적절한 방법이 떠오르지 않기 때문에 일정한 범위 내에서 무작위로 수를 뽑은 후, 
// 지금까지 나온적이 없는 수이면 배열 맨 뒤에 추가하는 방식으로 만들기로 합니다.
// 이미 어떤 수가 무작위로 주어질지 알고 있다고 가정하고, 실제 만들어질 길이 k의 배열을 예상해봅시다.
// 정수 배열 arr가 주어집니다. 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때, 
// 완성될 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채워서 return 합니다.
const test1 = (arr, k) => {
    let answer = Array.from(new Set(arr));
    if(answer.length < k) {
        for(let i=answer.length; i<k; i++) answer.push(-1);
    } else if (answer.length > k) {
        answer = answer.slice(0, k);
    }
    return answer;
}


// 이차원 정수 배열 arr이 매개변수로 주어집니다. 
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 
// 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
const test2 = (arr) => {
    let answer = [...arr];
    
    const rows = arr.length;
    const cols = arr[0].length;
    
    if (rows < cols) {
        for (let i = 0; i < rows; i++) {
            for (let j = cols; j < rows; j++) {
                answer[i].push(0);
            }
        }
    } else if (rows > cols) {
        for (let i = cols; i < rows; i++) {
            answer.push(new Array(cols).fill(0));
        }
    }
    
    return answer;
}


// 1부터 13까지의 수에서, 1은 1, 10, 11, 12,  13이렇게 총 6번 등장합니다. 
// 정수 i, j, k가 매개변수로 주어질 때, 
// i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
const test3 = (i, j, k) => {
    let answer = [];
    for(let l=i; l<=j; l++){
        if(l.toString().length > 1) {
            for(let m=0; m<l.toString().length; m++){
                answer.push(l.toString()[m]);
            }
            
        } else {
            answer.push(l.toString());
        }
    }
    return answer.filter(item => item.includes(k)).length;

    // 리팩토링
    // let answer = 0;
    // for (let num = i; num <= j; num++) {
    //     const numStr = num.toString();
    //     answer += numStr.split(k.toString()).length - 1;
    // }
    // return answer;
}


// 문자열 before와 after가 매개변수로 주어질 때, 
// before의 순서를 바꾸어 after를 만들 수 있으면 1을, 
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
const test4 = (before, after) => {
    let be = before.split('').sort().join('');
    let af = after.split('').sort().join('');
    return be === af ? 1 : 0;
}


// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 
// 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
const test5 = (bin1, bin2) => {
    let bin1Arr = bin1.split('');
    let bin2Arr = bin2.split('');
    let answer = [];
    let nextNum = 0;

    while (bin1Arr.length > 0 || bin2Arr.length > 0 || nextNum !== 0) {
        let num1 = parseInt(bin1Arr.pop() || '0');
        let num2 = parseInt(bin2Arr.pop() || '0');
        let sum = num1 + num2 + nextNum;

        if (sum >= 2) {
            let hNum = sum % 2;
            nextNum = 1;
            answer.unshift(hNum);
        } else {
            answer.unshift(sum);
            nextNum = 0;
        }
    }

    return answer.join('');
}


// 직사각형 형태의 그림 파일이 있고, 
// 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
// 이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때, 
// 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요
const test6 = (picture, k) => {
    let answer = [];
    for (let i = 0; i < picture.length; i++) {
        let str = '';
        for (let j = 0; j < picture[i].length; j++) {
            for (let m = 0; m < k; m++) {
                str += picture[i][j]; 
            }
        }
        for (let n = 0; n < k; n++) {
            answer.push(str); 
        }
    }
    return answer;
}


// 0번부터 n - 1번까지 n명의 학생 중 3명을 선발하는 전국 대회 선발 고사를 보았습니다. 
// 등수가 높은 3명을 선발해야 하지만, 
// 개인 사정으로 전국 대회에 참여하지 못하는 학생들이 있어 참여가 가능한 학생 중 
// 등수가 높은 3명을 선발하기로 했습니다.
// 각 학생들의 선발 고사 등수를 담은 정수 배열 rank와 전국 대회 
// 참여 가능 여부가 담긴 boolean 배열 attendance가 매개변수로 주어집니다. 
// 전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 
// 10000 × a + 100 × b + c를 return 하는 solution 함수를 작성해 주세요.
const test7 = (rank, attendance) => {
    let answer = rank.filter((_, index) => attendance[index]);
    answer.sort((a, b) => a-b);
    let ranker = [];
    for(let i=0; i<3; i++) {
        let index = rank.indexOf(answer[i]);
        ranker.push(index);
    }

    return 10000*ranker[0] + 100*ranker[1] + ranker[2];
}


// 정수 배열 arr와 query가 주어집니다.
// query를 순회하면서 다음 작업을 반복합니다.
// 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
// 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
// 위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.
const test8 = (arr, query) => {
    let answer = [...arr];
    query.forEach((item, i) => {
        if(i%2 === 0) {
            answer = answer.slice(0, query[i]+1);
        } else {
            answer = answer.slice(query[i]);
        }
    })
    return answer;
}


// 양의 정수 n이 매개변수로 주어집니다. 
// n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 
// 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
const test9 = (n) => {
    const result = Array.from(Array(n), () => Array(n).fill(0)); // n x n 배열 생성

    let num = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        // 위쪽 가로줄 채우기
        for (let i = left; i <= right; i++) {
            result[top][i] = num++;
        }
        top++;

        // 오른쪽 세로줄 채우기
        for (let i = top; i <= bottom; i++) {
            result[i][right] = num++;
        }
        right--;

        // 아래쪽 가로줄 채우기
        for (let i = right; i >= left; i--) {
            result[bottom][i] = num++;
        }
        bottom--;

        // 왼쪽 세로줄 채우기
        for (let i = bottom; i >= top; i--) {
            result[i][left] = num++;
        }
        left++;
    }

    return result;
}


// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 
// 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.

// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.

// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 
// 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
const test10 = (a, b, c, d) => {
    const dice = [a, b, c, d];

    if(new Set(dice).size === 1) {
        return 1111*a;
    }

    if(new Set(dice).size === 2) {
        const [p, q] = [...new Set(dice)];
        let count = 0;
        for(let i=0; i<dice.length; i++){
            for(let j=i+1; j<dice.length; j++){
                if(dice[i] === dice[j])
                    count++;
            }
        }

        if(count === 3) {
            let pCount = 0, qCount = 0;
            dice.forEach(n => {
                n === p ? pCount++ : qCount++;
            });
            return pCount > qCount ? Math.pow(10*p+q, 2) : Math.pow(10*q+p, 2);

        } else if(count == 2){
            return (p+q)*Math.abs(p-q);
        }
    }

    if(new Set(dice).size === 3) {
        const [q, p, r] = [...new Set(dice)];
        let pCount = 0, qCount = 0;

        dice.forEach(n=>{
            n === p && pCount++;
            n === q && qCount++;
        });

        if(pCount === 2){
            return q*r;

        } else if(qCount === 2){
            return p*r;

        } else {
            return q*p;
        }
    }
    return Math.min(...dice);
}
