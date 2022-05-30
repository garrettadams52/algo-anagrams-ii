exports.anagramsFor = function(word, listOfWords) {

    word = word.split('').sort()
    ans = []
    let temp
    for(let i = 0; i<listOfWords.length; i++){
        temp = listOfWords[i]

        if(word.join()===listOfWords[i].split('').sort().join())
            ans.push(temp)
        
    }


    return ans

};



//listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];
//console.log(anagramsFor("threads", listOfWords))