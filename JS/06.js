//problema 3
function problem3(){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var p3_input = document.querySelector("#p3-input").value;

    var p3_words = p3_input.split(', ');

    p3_words = p3_words.map(function (words){
        return words.replace(/\s/g, '')
        toUppercase();
    });

    var p3_min = '';

    p3_words.forEach(function(word, i){
        var unic_words = [];
        var word_array = word.split('');

        alphabet.forEach(fuction(letter, j){
            word_array.forEach(function(letter_words, k){
                if(letter_words == letter){
                    if(unic_words.indexOf(letter < 0){
                        unic_words.push(letter);
                    }
                }
            })
        })
        p3_min += 'words: ' + letter + ' = ' + unic_words.lenght + '\n';
    })

    document.querySelector('#p3-output').textContent = p3_min;
}
