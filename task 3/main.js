let words = [
    ["Hello","World"],
    ["Brad","came","to","dinner","with","us"],
    ["He","loves","tacos"]
];

function limitString () {
    words.push(['****************']);
    words.unshift(['****************']);
    let limit = 16;
    let result = [];


     for ( let i = 0; i < words.length; i++){
       let symbol = +words[i].toString().length;


        for (let k = 0; k < 1; k++) {
            if (symbol < limit) {
                result += '*' + words[i].join(' ') + '*' + '<br>';
            }
            else {
                result += '*' + words[i].join(' ') + '*' + '<br>';
            }
        }
     }
     document.querySelector('.output').innerHTML = result;

    }
document.querySelector('.button').onclick = limitString;



