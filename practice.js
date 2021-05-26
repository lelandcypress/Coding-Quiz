function numOfVowels(word){
    var num= 0;
    var vowels = 'aAeEiIoOuU'
    for (var i=0; i< word.length; i++){
        if(vowels.indexOf(word[i])!==-1){
            num += 1
        }

    }
    return num
}