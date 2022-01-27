let array = [1,3,5,4,5,7];
function compare() {
    let result = [];
    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] < array[i + 1] && array[i + 1] < array[i + 2]) {
          result +=" 1";
        } else {
            result += " 0";
        }
        console.log(result)


    }
}
compare()



//document.querySelector('.button').onclick = compare;
// document.querySelector('.output').innerHTML = result
