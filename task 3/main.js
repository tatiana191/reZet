let words = [
    ["Hello","World"],
    ["Brad","came","to","dinner","with","us"],
    ["He","loves","tacos"]
];



function limitString () {


    function splitArray(words, chunk) {

        let newArray = [];

        for (let i = 0; i < words[1].length; i += chunk) {
            newArray.push(words.slice(i, i + chunk));
        }
        return newArray;
    }

    let res = splitArray(words[1], 3);


    words.splice(1, 0, res[0],res[1],);
    words.splice(3,1)
    words.push(['****************']);
    words.unshift(['****************']);

    let limitString = 16;
    let string;
    for (let i = 0; i < words.length; i++) {
        let result = "";
        let amountSymbol = +words[i].toString().length;


        if (amountSymbol < limitString) {

            string = Array(limitString - amountSymbol).fill('\xa0').join('') + words[i].join(' ')
            result = '*' + string + '*';

            console.log(result);

        } else {
            result = '*' + words[i].join(' ') + '*';

        }
    console.log(result)
    }

}
limitString();






