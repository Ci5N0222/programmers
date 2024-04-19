// 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
const test1 = (array, n ) => {
    let minDiff = Math.abs(n - array[0]); 
    let closestNumbers = [array[0]];

    for (let i = 1; i < array.length; i++) {
        const diff = Math.abs(n - array[i]);
        if (diff < minDiff) {
            minDiff = diff;
            closestNumbers = [array[i]];
        } else if (diff === minDiff) {
            closestNumbers.push(array[i]);
        }
    }

    return Math.min(...closestNumbers);
}

// 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다. 
// str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 
// 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 
// 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 
// 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. "l"이나 "r"이 없다면 빈 리스트를 return합니다.
const test2 = (str_list) => {
    let leftIndex = str_list.indexOf('l');
    let rightIndex = str_list.indexOf('r');

    if (leftIndex === -1 && rightIndex === -1) {
        return [];
    } else if (leftIndex !== -1 && rightIndex !== -1) {
        return leftIndex < rightIndex ? str_list.slice(0, leftIndex) : str_list.slice(rightIndex + 1);
    } else if (leftIndex !== -1) {
        return str_list.slice(0, leftIndex);
    } else {
        return str_list.slice(rightIndex + 1);
    }
}


// 이차원 정수 배열 arr이 매개변수로 주어집니다. 
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.