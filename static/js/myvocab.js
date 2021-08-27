


var arrayOfCzVoc = {{list_cz_voc | tojson}};
var arrayOfNounDic = {{list_of_NounDictionaries | tojson}};






var zadani = document.getElementById('assignment')
var halfOfAnswer = document.getElementById('halfOfAnswer')
var odpoved = document.getElementById('odpoved')
var answerOption = document.querySelectorAll(".answerOption")
var answersContainer = document.getElementById('answersContainer')
var practiceCont = document.getElementById('practiceCont')








const nounTest = {


    "caseList" : [accusative = {"I see the ":"Vidím ", "I have the ":"Mám ", "We don't have the ":"Nemáme ",
                                "We want the ":"Chceme ", "They need the ":"Potřebují ", "I like the ": "Mám rád "},
                  dative = {"I call you because of the ":"Volám ti kvůli ", "He came because of the ":"Přišel kvůli ",
                            "I have nothing against the ":"Nemám nic proti ", "We came to the ":"Přišli jsme k "},
                genitive = {"I am without the ":"Já jsem bez ", "It is next to the ":"Je to vedle ", "From the ":"Od "},
                instrumental = {"It is above the ":"Je to nad ", "We can solve it with the ":"Vyřešíme to "},
                locative = {"I read a book about the ":"Čtu knihu o ", "It is a film about the ":"Je to film o ",
                            "After the ":"Po "},
                nominative ={"It is her ":"To je její", "It is his ":"To je jeho ", "There isn't any ": "Není tady ", "There is their ": "Tady je jejich "}
                ],

    "caseListPl" : [accusativePl = {"I see the ":"Vidím ", "I have ":"Mám ", "We don't have the ":"Nemáme ",
                                    "We want the ":"Chceme ", "They need ":"Potřebují ", "I like ": "Mám rád "},
                    dativePl = {"I call you because of the ":"Volám ti kvůli ", "He came because of the ":"Přišel kvůli ",
                                "I have nothing against the ":"Nemám nic proti ", "We came to the ":"Přišli jsme k "},
                    genitivePl = {"I am without the ":"Já jsem bez ", "It is next to the ":"Je to vedle ", "from the ":"od "},
                    instrumentalPl = {"It is above the ":"Je to nad ", "We can solve it with the ":"Vyřešíme to "},
                    locativePl = {"I read a book about ":"Čtu knihu o ", "It is a film about ":"Je to film o ",
                                  "After the ":"Po "},
                    nominativePl = {"Those are ":"to jsou ", "Those are his ":"To jsou jeho "}
                    ],





   "irreGularPlurals": {

            "aircraft":	"aircraft", "alumna":"alumnae", "alumnus":"alumni",
            "analysis":"analyses", "antithesis":"antitheses", "apex": "apices",
            "appendix":"appendices", "axis":"axes", "bacillus":"bacilli",
            "bacterium":"bacteria", "basis":"bases", "beau":"beaux",
            "bison":"bison", "bureau":"bureaus", "cactus":"cacti",
            "château":"châteaus", "child":"children", "codex":"codices",
            "corpus":"corpora", "crisis":"crises", "criterion":"criteria",
            "curriculum":"curricula","datum":"data","deer":"deer",
            "diagnosis":"diagnoses","die":"dice","dwarf":"dwarves",
            "ellipsis":"ellipses","erratum":"errata","fish":"fish",
            "foot":"feet","fungus":"fungi","genus":"genera",
            "goose":"geese","graffito":"graffiti","half":"halves",
            "hoof":"hooves","hypothesis":"hypotheses",
            "index":"indices","larva":"larvae","loaf":"loaves",
            "locus":"loci","louse":"lice","man":"men",
            "matrix":"matrices","medium":"media","memorandum":"memoranda",
            "moose":"moose","mouse":"mice","ovum":"ova","ox":"oxen",
            "parenthesis":"parentheses","phenomenon":"phenomena",
            "quiz":"quizzes","scarf":"scarves","self":"selves",
            "series":"series","sheep":"sheep","species":"species",
            "stimulus":"stimuli","stratum":"strata","swine":"swine",
            "syllabus":"syllabi","synopsis":"synopses","thesis":"theses",
            "thief":"thieves","tooth":"teeth","vertex":"vertices",
            "vita":"vitae","wharf":"wharves","wife":"wives",
            "wolf":"wolves","woman":"women",
          },


  "defaultNouns":{
                  "friend":{"gender":"Masculine", "nominative":"kamarád", "genitive":"kamaráda", "dative":"kamarádovi", "accusative":"kamaráda", "vocative":"kamaráde", "locative":"kamaradovi", "instrumental":"kamarádem",
                            "nominativePl":"kamarádi", "genitivePl":"kamarádů", "dativePl":"kamarádům", "accusativePl":"kamarády", "vocativePl":"kamarádi", "locativePl":"kamarádech", "instrumentalPl":"kamarády"},
                   "castle":{"gender":"Masculine", "nominative":"hrad", "genitive":"hradu", "dative":"hradu", "accusative":"hrad", "vocative":"hrade", "locative":"hradu", "instrumental":"hradem",
                            "nominativePl":"hrady", "genitivePl":"hradů", "dativePl":"hradům", "accusativePl":"hrady", "vocativePl":"hrady", "locativePl":"hradech", "instrumentalPl":"hrady"},
                  "machine":{"gender":"Masculine","nominative":"stroj", "genitive":"stroj", "dative":"stroj", "accusative":"stroj", "vocative":"stroj", "locative":"stroj", "instrumental":"stroj",
                          "nominativePl":"stroje", "genitivePl":"strojů", "dativePl":"strojům", "accusativePl":"stroje", "vocativePl":"stroje", "locativePl":"strojích", "instrumentalPl":"stroji"},
                  "man":{"gender":"Masculine", "nominative":"muž", "genitive":"muže", "dative":"muži", "accusative":"muže", "vocative":"muži", "locative":"muži", "instrumental":"mužem",
                          "nominativePl":"muži", "genitivePl":"mužů", "dativePl":"mužům", "accusativePl":"muže", "vocativePl":"muži", "locativePl":"mužích", "instrumentalPl":"muži"},
                  "woman":{"gender":"Feminine", "nominative":"žena", "genitive":"ženy", "dative":"ženě", "accusative":"ženu", "vocative":"ženo", "locative":"ženě", "instrumental":"ženou",
                          "nominativePl":"ženy", "genitivePl":"žen", "dativePl":"ženám", "accusativePl":"ženy", "vocativePl":"ženy", "locativePl":"ženách", "instrumentalPl":"ženami"},
                  "rose":{"gender":"Feminine", "nominative":"růže", "genitive":"růže", "dative":"růži", "accusative":"růži", "vocative":"růže", "locative":"růži", "instrumental":"růží",
                          "nominativePl":"růže", "genitivePl":"růží", "dativePl":"růžím", "accusativePl":"růže", "vocativePl":"růže", "locativePl":"růžích", "instrumentalPl":"růžemi"},
                   "song":{"gender":"Feminine", "nominative":"píseň", "genitive":"písně", "dative":"písni", "accusative":"píseň", "vocative":"písni", "locative":"písni", "instrumental":"písní",
                          "nominativePl":"písně", "genitivePl":"písní", "dativePl":"písním", "accusativePl":"písně", "vocativePl":"písně", "locativePl":"písnich", "instrumentalPl":"písněmi"},
                   "bone":{"gender":"Feminine", "nominative":"kost", "genitive":"kost", "dative":"kosti", "accusative":"kost", "vocative":"kosti", "locative":"kosti", "instrumental":"kostí",
                          "nominativePl":"kosti", "genitivePl":"kostí", "dativePl":"kostím", "accusativePl":"kosti", "vocativePl":"kosti", "locativePl":"kostech", "instrumentalPl":"kostmi"},

                    "city":{"gender":"Neuter", "nominative":"město", "genitive":"města", "dative":"městu", "accusative":"město", "vocative":"město", "locative":"městě", "instrumental":"městem",
                            "nominativePl":"města", "genitivePl":"měst", "dativePl":"městům", "accusativePl":"města", "vocativePl":"města", "locativePl":"městech", "instrumentalPl":"městy"},
                    "sea":{"gender":"Neuter", "nominative":"moře", "genitive":"moře", "dative":"moři", "accusative":"moře", "vocative":"moře", "locative":"moři", "instrumental":"mořem",
                           "nominativePl":"moře", "genitivePl":"moří", "dativePl":"mořím", "accusativePl":"moře", "vocativePl":"moře", "locativePl":"mořích", "instrumentalPl":"moři"},
                    "chicken":{"gender":"Neuter", "nominative":"kuře", "genitive":"kuřete", "dative":"kuřeti", "accusative":"kuře", "vocative":"kuře", "locative":"kuřeti", "instrumental":"kuřetem",
                            "nominativePl":"kuřata", "genitivePl":"kuřat", "dativePl":"kuřatům", "accusativePl":"kuřata", "vocativePl":"kuřata", "locativePl":"kuřatach", "instrumentalPl":"kuřaty"},
                    "package":{"gender":"Neuter", "nominative":"balení", "genitive":"balení", "dative":"balení", "accusative":"balení", "vocative":"balení", "locative":"balení", "instrumental":"balením",
                           "nominativePl":"balení", "genitivePl":"balení", "dativePl":"balením", "accusativePl":"balení", "vocativePl":"balení", "locativePl":"baleních", "instrumentalPl":"baleními"},
                         },


    pluralOrSingular: function(){

          var emptyPluralStr = nounTest.countEmptyPlurStr()

          if(emptyPluralStr < 6){
          var plSgNumber = Math.floor(Math.random() *2)
          }
          else{
            plSgNumber = 0;
          }
          return plSgNumber
    },

    questionNumber: function(){
          var questNum = Math.floor(Math.random() * Object.values(arrayOfNounDic).length)
          return questNum
    },

    genereteIndices: function(singOrPlur){


            var casesEntered = Object.values(arrayOfNounDic[questNum]["caseSubDict"]).length


                    var indexArray = []
                    var optionsUnique = []

                    while(indexArray.length < 7){
                      var i = Math.floor(Math.random() * 7)
                      if(indexArray.includes(i)){continue;}
                      else{indexArray.push(i)}
                    }



                    if(singOrPlur === 0){

                    answerOption[indexArray[0]].textContent = arrayOfNounDic[questNum]["caseSubDict"].nominative;
                    answerOption[indexArray[1]].textContent = arrayOfNounDic[questNum]["caseSubDict"].genitive;
                    answerOption[indexArray[2]].textContent = arrayOfNounDic[questNum]["caseSubDict"].dative;
                    answerOption[indexArray[3]].textContent = arrayOfNounDic[questNum]["caseSubDict"].accusative;
                    answerOption[indexArray[4]].textContent = arrayOfNounDic[questNum]["caseSubDict"].vocative;
                    answerOption[indexArray[5]].textContent = arrayOfNounDic[questNum]["caseSubDict"].locative;
                    answerOption[indexArray[6]].textContent = arrayOfNounDic[questNum]["caseSubDict"].instrumental;
                    }

                    if(singOrPlur === 1){
                    answerOption[indexArray[0]].textContent = arrayOfNounDic[questNum]["caseSubDictPl"].nominativePl;
                    answerOption[indexArray[1]].textContent = arrayOfNounDic[questNum]["caseSubDictPl"].genitivePl;
                    answerOption[indexArray[2]].textContent = arrayOfNounDic[questNum]["caseSubDictPl"].dativePl;
                    answerOption[indexArray[3]].textContent = arrayOfNounDic[questNum]["caseSubDictPl"].accusativePl;
                    answerOption[indexArray[4]].textContent = arrayOfNounDic[questNum]["caseSubDictPl"].vocativePl;
                    answerOption[indexArray[5]].textContent = arrayOfNounDic[questNum]["caseSubDictPl"].locativePl;
                    answerOption[indexArray[6]].textContent = arrayOfNounDic[questNum]["caseSubDictPl"].instrumentalPl;

                    }


                    for (let i = 0, len = answerOption.length; i < len; i++){
                      if(optionsUnique.includes(answerOption[i].textContent) || answerOption[i].textContent === ""){
                        answerOption[i].style.display = "none";

                      continue

                      }else{optionsUnique.push(answerOption[i].textContent)
                        }

                    }

    },


    countEmptyStr: function(){


              var casesEnteredSg = Object.values(arrayOfNounDic[questNum]["caseSubDict"]).length
              var numEmptyStrings = 0;
              for (let i = 0, len = casesEnteredSg; i < len; i++){
              if(Object.values(arrayOfNounDic[questNum]["caseSubDict"])[i] == ""){
                numEmptyStrings++;
                }
              }
              return numEmptyStrings

    },


    countEmptyPlurStr: function(){


              var casesEnteredPl = Object.values(arrayOfNounDic[questNum]["caseSubDictPl"]).length

              var numEmptyStringsPl = 0;
              for (let i = 0, len = casesEnteredPl; i < len; i++){
              if(Object.values(arrayOfNounDic[questNum]["caseSubDictPl"])[i] == ""){
                numEmptyStringsPl++;
                }
              }
              return numEmptyStringsPl
    },


    generateCase: function(singOrPlur){


              var emptyStrings = nounTest.countEmptyStr()
              var typingAnswer = document.getElementById("writtenAnsCont")


              var randomCaseNumber = Math.floor(Math.random() * 6)


              if(singOrPlur === 0){
                if(emptyStrings < 6){

              while(Object.values(arrayOfNounDic[questNum]["caseSubDict"])[randomCaseNumber] === ""){

                randomCaseNumber = Math.floor(Math.random() * 6)
                  }

                }
                  else{
                  typingAnswer.style.display = "block";
                  randomCaseNumber = 5;

                  for (let i = 0, len = answerOption.length; i < len; i++){
                      answerOption[i].style.display = "none";
                      }
                    }

              }





              if(singOrPlur === 1){
                while(Object.values(arrayOfNounDic[questNum]["caseSubDictPl"])[randomCaseNumber] === ""){

                  randomCaseNumber = Math.floor(Math.random() * 6)
                  }

              }

              return randomCaseNumber
        },

      generateRandomKey: function(num, singOrPlur){

        if(singOrPlur === 0){
        var randomKey = Math.floor(Math.random() * Object.keys(nounTest.caseList[num]).length)
        }

        if(singOrPlur === 1){
        var randomKey = Math.floor(Math.random() * Object.keys(nounTest.caseListPl[num]).length)
        }
        return randomKey
      },
        // singOrPlur = oneOrTwo, whatCase = caseNumber, whatKey = keyNumber

      generateZadani: function(singOrPlur, whatCase, whatKey){
                questnum = nounTest.questionNumber()
                const caseListStr = ["accusative", "dative", "genitive", "instrumental", "locative", "nominative"]
                const caseListStrPlural = ["accusativePl", "dativePl", "genitivePl", "instrumentalPl", "locativePl", "nominativePl"]



                var esOneChar = ["s", "x", "z"]
                var esTwoChar = ["ss", "sh", "ch"]
                var yEndings = ["ty", "ry", "wy", "sy", "qy", "dy", "fy", "gy", "hy", "ky", "ly", "zy", "xy", "cy", "vy", "by", "ny", "my", "py"]

                // doresit co se stane v pluralu - pouzit caseListStrPlural
                var czZadani = document.getElementById('czechPart')

                var lastWord = arrayOfNounDic[questNum].entryEn;
                var lastLetter = lastWord[lastWord.length -1]
                var lastTwoLetters = lastWord[lastWord.length -2] + lastWord[lastWord.length -1]
                var irregularKeyList =  Object.keys(nounTest.irreGularPlurals)






                if(arrayOfNounDic[questNum].word_class === "Adjective"){




                          //singOrPlur = 0;

                          //tohle mi najde podstatne jmeno se stejnym rodem -doresit co se stane kdyz nemam zadane noun stejneho rodu apadu (defaultni noun) + cislo  (if lastWord2 === undefined)

                          for (let i = 0, len = arrayOfNounDic.length; i < len; i++){
                            if(arrayOfNounDic[i].gender === arrayOfNounDic[questNum].gender && arrayOfNounDic[i].word_class === "Noun"){
                            //  var lastWord2 = arrayOfNounDic[i].entryEn
                                          if(singOrPlur === 0){
                                                              if(arrayOfNounDic[i]['caseSubDict'][caseListStr[whatCase]] != "" ){

                                                                                    var czLastWord2 = arrayOfNounDic[i]['caseSubDict'][caseListStr[whatCase]]
                                                                                    var lastWord2 = arrayOfNounDic[i].entryEn


                                                                                      }
                                          }
                                          if(singOrPlur === 1){
                                            if(arrayOfNounDic[i]['caseSubDictPl'][caseListStrPlural[whatCase]] != ""){

                                            var czLastWord2 = arrayOfNounDic[i]['caseSubDictPl'][caseListStrPlural[whatCase]]
                                            var lastWord2 = arrayOfNounDic[i].entryEn


                                            lastLetter = lastWord2[lastWord2.length -1]
                                            lastTwoLetters = lastWord2[lastWord2.length -2] + lastWord2[lastWord2.length -1]

                                            }
                                          }




                              zadani.textContent = Object.keys(nounTest.caseList[whatCase])[whatKey] + lastWord + " " + lastWord2;

                              czZadani.textContent = Object.values(nounTest.caseList[whatCase])[whatKey] + " ... " + czLastWord2;

                            }


                          }








                          // undefined - tzn pokud user nezadal zadne vhodne noun to match with it
                          var defaultChoices = false;

                          if(lastWord2 === undefined){
                            defaultChoices = true;
                            var randomDefNoun = Math.floor(Math.random() * Object.keys(nounTest.defaultNouns).length)
                            var defaultLastWordCz =  nounTest.defaultNouns[Object.keys(nounTest.defaultNouns)[randomDefNoun]]

                            lastWord2 = Object.keys(nounTest.defaultNouns)[randomDefNoun]

                            var lastLetter = lastWord2[lastWord.length -1]
                            var lastTwoLetters = lastWord2[lastWord2.length -2] + lastWord2[lastWord2.length -1]


                              zadani.textContent = Object.keys(nounTest.caseList[whatCase])[whatKey] + lastWord + " " + lastWord2;

                                  if(singOrPlur === 0){
                                    var czLastWord2 = defaultLastWordCz[caseListStr[whatCase]];
                                  }
                                  if(singOrPlur === 1){
                                    var czLastWord2 = defaultLastWordCz[caseListStrPlural[whatCase]];
                                  }

                                  czZadani.textContent = Object.values(nounTest.caseList[whatCase])[whatKey] + "..." +  czLastWord2
                          }


                        if(defaultChoices === true){
                              while(defaultLastWordCz['gender'] != arrayOfNounDic[questNum].gender){

                                randomDefNoun = Math.floor(Math.random() * Object.keys(nounTest.defaultNouns).length)
                                defaultLastWordCz =  nounTest.defaultNouns[Object.keys(nounTest.defaultNouns)[randomDefNoun]]


                                      if(defaultLastWordCz['gender'] === arrayOfNounDic[questNum].gender){
                                                  defaultLastWordCz =  nounTest.defaultNouns[Object.keys(nounTest.defaultNouns)[randomDefNoun]]
                                                  lastWord2 = Object.keys(nounTest.defaultNouns)[randomDefNoun]

                                                  if(singOrPlur === 0){
                                                    var czLastWord2 = defaultLastWordCz[caseListStr[whatCase]];
                                                  }
                                                  if(singOrPlur === 1){
                                                    var czLastWord2 = defaultLastWordCz[caseListStrPlural[whatCase]];
                                                  }

                                                  zadani.textContent = Object.keys(nounTest.caseList[whatCase])[whatKey] + lastWord + " " + lastWord2;

                                                  czZadani.textContent = Object.values(nounTest.caseList[whatCase])[whatKey] + "..." +  czLastWord2
                                                  defaultChoices === false;
                                                  }
                                  }
                      }

                }



                if(singOrPlur === 0 && arrayOfNounDic[questNum].word_class === "Noun"){


                      zadani.textContent = Object.keys(nounTest.caseList[whatCase])[whatKey] + lastWord;

                      czZadani.textContent = Object.values(nounTest.caseList[whatCase])[whatKey] + "...";

                }


                var pluralEnding = "s"

                if(singOrPlur === 1 && arrayOfNounDic[questNum].word_class === "Noun"){




                        if(lastLetter === undefined ){
                          lastLetter = lastTwoLetters;
                        }



                          if(irregularKeyList.includes(lastWord)){

                          lastWord = nounTest.irreGularPlurals[lastWord]
                          }
                          else{
                            if(esOneChar.includes(lastLetter) || esTwoChar.includes(lastTwoLetters)){
                              pluralEnding = "es";
                            }
                            if(yEndings.includes(lastTwoLetters)){
                              var lastWordNoY = ""
                              for(let i = 0, len = lastWord.length -1; i < len; i++){
                                lastWordNoY = lastWordNoY + lastWord[i];
                              }
                             lastWord = lastWordNoY;
                             pluralEnding = "ies"
                            }


                            lastWord = lastWord + pluralEnding;
                          }






                          zadani.textContent = Object.keys(nounTest.caseListPl[whatCase])[whatKey] + lastWord;

                          czZadani.textContent = Object.values(nounTest.caseListPl[whatCase])[whatKey] + "...";
                }





                if(singOrPlur === 1 && arrayOfNounDic[questNum].word_class === "Adjective"){

                  lastLetter = lastWord2[lastWord2.length -1]
                  lastTwoLetters = lastWord2[lastWord2.length -2] + lastWord2[lastWord2.length -1]



                        if(lastLetter === undefined ){
                          lastLetter = lastTwoLetters;
                        }




                          if(irregularKeyList.includes(lastWord2)){

                          lastWord2 = nounTest.irreGularPlurals[lastWord2]
                          }
                          else{
                            if(esOneChar.includes(lastLetter) || esTwoChar.includes(lastTwoLetters)){
                              pluralEnding = "es";
                            }
                            if(yEndings.includes(lastTwoLetters)){
                              var lastWordNoY = ""
                              for(let i = 0, len = lastWord2.length -1; i < len; i++){
                                lastWordNoY = lastWordNoY + lastWord2[i];
                              }
                             lastWord2 = lastWordNoY;
                             pluralEnding = "ies";
                            }
                            lastWord2 = lastWord2 + pluralEnding;
                          }


                          zadani.textContent = Object.keys(nounTest.caseListPl[whatCase])[whatKey] + lastWord + " " + lastWord2;

                          czZadani.textContent = Object.values(nounTest.caseListPl[whatCase])[whatKey] + "..." + czLastWord2;
                }



              }

}
















// initiate test for NOUNS

if(arrayOfNounDic.length > 0){

    var questNum = nounTest.questionNumber()
    var oneOrTwo = nounTest.pluralOrSingular()
    nounTest.genereteIndices(oneOrTwo)

    var caseNumber = nounTest.generateCase(oneOrTwo)
    var keyNumber = nounTest.generateRandomKey(caseNumber, oneOrTwo)


    // singOrPlur = oneOrTwo, whatCase = caseNumber, whatKey = keyNumber
    nounTest.generateZadani(oneOrTwo, caseNumber, keyNumber)


}
else{
  alert("This folder is empty. Add some nouns or adjectives!")
}









function checkAnswer(elem){



const caseStrList = ["accusative", "dative", "genitive", "instrumental", "locative", "nominative"]
const caseStrListPl = ["accusativePl", "dativePl", "genitivePl", "instrumentalPl", "locativePl", "nominativePl"]

console.log("hi")

console.log(zadani.textContent);
console.log(czZadani.textContent);


var textAnswer = document.getElementById("writtenAnswer");

var  emptyStrings = nounTest.countEmptyStr()



if(oneOrTwo === 0){
  if(emptyStrings < 6){

      for (let i = 0, len = caseStrList.length; i < len; i++){

        if(Object.keys(arrayOfNounDic[questNum]["caseSubDict"])[i] === caseStrList[caseNumber]){
        var correctAnswer = Object.values(arrayOfNounDic[questNum]["caseSubDict"])[i].trim()
        }

      }
  }else{
    //var correctAnswer = Object.values(arrayOfNounDic[questNum])[2]
   var correctAnswer =  Object.values(arrayOfNounDic[questNum]["caseSubDict"])[5].trim()

  }


}

if(oneOrTwo === 1){

      for (let i = 0, len = caseStrListPl.length; i < len; i++){

        if(Object.keys(arrayOfNounDic[questNum]["caseSubDictPl"])[i] === caseStrListPl[caseNumber]){
        var correctAnswer = Object.values(arrayOfNounDic[questNum]["caseSubDictPl"])[i].trim()
        }

      }
}




if(emptyStrings < 6 || oneOrTwo === 1){

  var userAnswer = elem.textContent.trim();

}



if(emptyStrings >= 6 && oneOrTwo === 0){
  var userAnswer= textAnswer.value.trim();

}

  if(userAnswer === correctAnswer){
    textAnswer.value = "";
    document.getElementById("writtenAnsCont").style.display = "none";

    document.getElementById("nextQuest").style.display = "inline-block";

      elem.classList.add("green")

  }else{
    var incorrectNotif = document.getElementById("incorrectNotif")
    incorrectNotif.style.opacity = "1"

    setTimeout(function(){
      incorrectNotif.style.opacity = "0"
    }, 1500)

        }

}






function nextQuestion(){

      for (let i = 0, len = answerOption.length; i < len; i++){
        answerOption[i].classList.remove("green");
/*
        answerOption[i].addEventListener("mouseover", function() {
          answerOption[i].style.background = "#dcdcdc";
        });

        answerOption[i].addEventListener("mouseout", function() {
          answerOption[i].style.background = "white";
        });

*/
      }



        document.getElementById("nextQuest").style.display = "none";

        var czechPart = document.getElementById("czechPart")

        practiceCont.style.transform = "translateX(100%)";
        practiceCont.style.opacity = "0";

        answersContainer.style.transform = "translateX(100%)";
        answersContainer.style.opacity = "0";

        czechPart.style.opacity = "0";
        czechPart.style.transform = "translateX(100%)";

          setTimeout(function(){
          practiceCont.style.transform = "translateX(0%)";
          answersContainer.style.transform = "translateX(0%)";
          czechPart.style.transform = "translateX(0%)";
        }, 500)

          setTimeout(function(){

          practiceCont.style.opacity = "1";
          answersContainer.style.opacity = "1";
          czechPart.style.opacity = "1";



          questNum = nounTest.questionNumber();



    for (let i = 0, len = answerOption.length; i < len; i++){
        answerOption[i].style.display = "block";
        }



        oneOrTwo = nounTest.pluralOrSingular()

        caseNumber = nounTest.generateCase(oneOrTwo)
        keyNumber = nounTest.generateRandomKey(caseNumber, oneOrTwo)


        nounTest.genereteIndices(oneOrTwo)
        nounTest.generateZadani(oneOrTwo, caseNumber, keyNumber)

}, 1300)

}
