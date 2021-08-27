





arrayOfCzVoc.sort()









function searchWord(){
var searchBox = document.getElementById("searchBox")






    for(let i = 0, len = rowVoc.length; i < len; i++){
      rowVoc[i].style.display = "none";
        for(let x = 0, len = rowVoc[i].childNodes.length; x < len; x++){

          if(rowVoc[i].childNodes[x].textContent.indexOf(searchBox.value) > -1){
            rowVoc[i].style.display = "";
          }



        }


}


}
var rowVoc = document.querySelectorAll(".rowVoc")


var infoRow = document.querySelectorAll(".infoRow")

var EnWord = document.querySelectorAll(".EnWord")
var deleteEdit = document.querySelectorAll(".deleteEdit")


function showInfo(cell){





  for(let i = 0, len = czEnWord.length; i < len; i++){
    czEnWord[i].classList.remove("showInf")

    }
    cell.classList.add("showInf")

var rowVoc = document.querySelectorAll(".rowVoc")
  //console.log(arrayWordInfo[0]['caseSubDict']['genitive'])

var infoRow = document.querySelectorAll(".infoRow")
var infoCaption = document.getElementById("infoCaption")



for(let i = 0, len = arrayWordInfo.length; i < len; i++){

  if(cell.textContent === arrayWordInfo[i]['entryCz'] || cell.textContent === arrayWordInfo[i]['entryEn']){

    infoCaption.textContent = arrayWordInfo[i]['word_class'] + " - " + arrayWordInfo[i]['gender']



    infoRow[0].childNodes[3].textContent = arrayWordInfo[i]['caseSubDict']['nominative']
    infoRow[0].childNodes[5].textContent = arrayWordInfo[i]['caseSubDictPl']['nominativePl']

    infoRow[1].childNodes[3].textContent = arrayWordInfo[i]['caseSubDict']['genitive']
    infoRow[1].childNodes[5].textContent = arrayWordInfo[i]['caseSubDictPl']['genitivePl']

    infoRow[2].childNodes[3].textContent = arrayWordInfo[i]['caseSubDict']['dative']
    infoRow[2].childNodes[5].textContent = arrayWordInfo[i]['caseSubDictPl']['dativePl']

    infoRow[3].childNodes[3].textContent = arrayWordInfo[i]['caseSubDict']['accusative']
    infoRow[3].childNodes[5].textContent = arrayWordInfo[i]['caseSubDictPl']['accusativePl']

    infoRow[4].childNodes[3].textContent = arrayWordInfo[i]['caseSubDict']['vocative']
    infoRow[4].childNodes[5].textContent = arrayWordInfo[i]['caseSubDictPl']['vocativePl']

    infoRow[5].childNodes[3].textContent = arrayWordInfo[i]['caseSubDict']['locative']
    infoRow[5].childNodes[5].textContent = arrayWordInfo[i]['caseSubDictPl']['locativePl']

    infoRow[6].childNodes[3].textContent = arrayWordInfo[i]['caseSubDict']['instrumental']
    infoRow[6].childNodes[5].textContent = arrayWordInfo[i]['caseSubDictPl']['instrumentalPl']


  }
}

var infoTable = document.getElementById("infoTable")
infoTable.style.display = "inline-block";

}


function toggleEditDel(btn){


btn.nextElementSibling.childNodes[1].classList.toggle("hide")

btn.classList.toggle("clicked")

btn.previousElementSibling.classList.toggle("clicked")

}




function showEditDel(btn){
btn.childNodes[1].classList.remove("hide")

}

















var folderOptions = document.querySelectorAll(".folderOption")
var entryForm = document.getElementById("entryForm")
var vocFolder = document.getElementById("voc_folder")
var folders = document.getElementById("folders")


var formBasicInf = document.querySelectorAll(".formBasicInf")
formBasicInf[0].childNodes[1].id = "foldersHidden2"


var folderOption = document.querySelectorAll(".folderOption")





folders.addEventListener('change', (event) => {

  var chosenFolder = document.getElementById("chosenFolder")

  formBasicInf[0].childNodes[1].value = event.target.value

  chosenFolder.value = event.target.value

});










var folderLink = document.querySelectorAll(".folderLink")



    if(folderLink.length === 0){


      var instruction = document.getElementById("instruction")
      instruction.style.display = "block"
    }

        if(folderLink.length > 0){

              folderLink[folderLink.length -1].childNodes[0].classList.add("last")
              document.getElementById("userFolders").classList.remove("disab")
        }

        var czEnWord = document.querySelectorAll(".czEnWord")

        if(czEnWord.length > 0){
          document.getElementById("vocInfoCont").style.display = "block";
          document.getElementById("searchBox").style.display = "block";
        }




var wordClass = document.getElementById("word_class");
var nounsCases = document.getElementById("nounsCases")
var adjCases = document.getElementById("adjCases")

var noun = document.getElementById("word_class").childNodes[1];

var adj = document.getElementById("word_class").childNodes[2];




wordClass.addEventListener("change", (event) =>{
  var chosenClass = document.getElementById("chosenClass")

  if(event.target.value === "Noun" || event.target.value === "Adjective"){
    nounsCases.style.display = "block";
    chosenClass.value = event.target.value;
  }

});



var noun_gender = document.getElementById("noun_gender")

noun_gender.addEventListener("change", (event) =>{
    var chosenGender = document.getElementById("chosenGender")

    chosenGender.value = event.target.value;

});

var instrNum = 2;
var arrayIndex = 0;
var instruction = document.getElementById("instruction")

function instructions(){
  var instText = document.getElementById("instP")
  var instrSlide = document.getElementById("instrSlide")


  var instrArray = ["Click 'new folder' to create a folder where you save your words.",
                  "Once you have created a folder you can start adding words to it. Make sure that you choose the correct category and gender.",
                  "Click 'my folder' to practice declensions of the words you added to your dictionary."]

  var linkNavbar = document.querySelectorAll(".barLink")
if(instrNum < 5){

  instrSlide.style.transform = "translateX(100%)"
  instrSlide.style.opacity = "0";

    setTimeout(function(){
    instrSlide.style.transform = "translateX(0%)"

  },400)

    setTimeout(function(){
      instrSlide.style.opacity = "1";


  linkNavbar[instrNum -1].classList.remove("highlight")
  linkNavbar[instrNum].classList.add("highlight")
  linkNavbar[instrNum].childNodes[1].classList.add("fa-lg")
  instText.textContent = instrArray[arrayIndex]


  arrayIndex++
  instrNum++;
},1000)

}
if(instrNum === 5){
var barNewWord = document.getElementById("barNewWord")

  instruction.style.display = "none";

  linkNavbar[4].classList.remove("highlight")
  linkNavbar[4].childNodes[1].classList.remove("fa-lg")
  barNewWord.style.pointerEvents = "auto"

}




}








var vocFolderInput = document.getElementById("voc_folder")
var folderTextImput = document.getElementById("folderTextImput")

function showInputField(btn){

    var barNewFold = document.getElementById("barNewFold")
    btn.classList.toggle("clicked")

    folderTextImput.classList.toggle("hiddenFolder")

}





function showEntryForm(btn){



  var entryForm = document.getElementById("entryForm")
  entryForm.classList.toggle("hiddenFolder")

  btn.classList.toggle("clicked")
}



var folderMenuWrap = document.getElementById("folderMenuWrap")
function showFolderMenu(btn){

  folderMenuWrap.classList.toggle("show")

  btn.classList.toggle("clicked")
}



window.onload = function(){



  document.getElementById("word_class").childNodes[0].disabled = folderOptions.true;

  var barNewWord = document.getElementById("barNewWord")

  if(instruction.style.display === "block"){
    barNewWord.style.pointerEvents = "none"
  }


  if (folderOptions.length > 1){




  var barLink = document.querySelectorAll(".barLink")
  barLink[3].classList.remove("disab")
  }

  document.onclick=function(elem){


    var czEnWord = document.querySelectorAll(".czEnWord")
    var elemClassList = elem.target.classList;

    var ignoreArray = ["userFolders", "folderUrl", "userfoldersIcon", "userfoldersSpan"]


    //if(elem.target.id !== "userFolders" && elemClassList[0] != "folderUrl"){
          if(ignoreArray.includes(elem.target.id) === false){
            document.getElementById("userFolders").classList.remove("clicked")
            folderMenuWrap.classList.remove("show")
          }

          if(elemClassList[0] != "czEnWord"){
            infoTable.style.display = "none";
                  for(let i = 0, len = czEnWord.length; i < len; i++){
                      czEnWord[i].classList.remove("showInf")
                      }
          }
          if(elemClassList[0] != "EnWord" && elemClassList[1] != "fa-trash-alt" && elemClassList[1] != "fa-edit"){

            var kos = document.querySelectorAll(".kos")

            for(let i = 0, len = EnWord.length; i < len; i++){
                EnWord[i].classList.remove("clicked")
                czEnWord[i].classList.remove("clicked")
                kos[i].classList.add("hide")
              }
          }


            var folderTextImput = document.getElementById("folderTextImput")
            var barNewFold = document.getElementById("barNewFold")
            var entryForm = document.getElementById("entryForm")
            var secondFormWrap = document.getElementById("secondFormWrap")
            var firstFormWrap = document.getElementById("firstFormWrap")


            var firstFormDesc = firstFormWrap.querySelectorAll("*")
            var secondFormDesc = secondFormWrap.querySelectorAll("*")


            for(let i = 0, len = firstFormDesc.length; i < len; i++){
              firstFormDesc[i].classList.add("isFF")
            }

            for(let i = 0, len = secondFormDesc.length; i < len; i++){
              secondFormDesc[i].classList.add("isWF")
            }



            if(elemClassList.contains("folIc") === false && elemClassList.contains("isFF") === false){
              barNewFold.classList.remove("clicked")
              folderTextImput.classList.add("hiddenFolder")
            }

            if(elemClassList.contains("nWIc") === false && elemClassList.contains("isWF") === false){
              barNewWord.classList.remove("clicked")
              entryForm.classList.add("hiddenFolder")
            }




  }


}





/* Webscraping */


var nounsSingular = []
var nounsPlural = []


if(declensioList.length > 0){

        var foldersHidden2 = document.getElementById("foldersHidden2")

        document.getElementById("czech_entry").value = czEnInitialDict.czech
        document.getElementById("english_entry").value = czEnInitialDict.english

        if(czEnInitialDict.druh != ""){
        word_class.value = czEnInitialDict.druh
        }

        if(czEnInitialDict.rod != ""){
        noun_gender.value = czEnInitialDict.rod
        }

        if(czEnInitialDict.slozka != ""){
        folders.value = czEnInitialDict.slozka
        foldersHidden2.value = czEnInitialDict.slozka
        }








        if(declensioList != "no declensions"){
        document.getElementById("entryForm").classList.remove("hiddenFolder")
        nounsCases.style.display = "block";
          }

          if(czEnInitialDict.czech != ""){
            document.getElementById("entryForm").classList.remove("hiddenFolder")
          }

          if(declensioList === "no declensions" && czEnInitialDict.czech != ""){
            var noDeclensionsFound = document.getElementById("noDeclensionsFound")
            noDeclensionsFound.style.display = "block"
            setTimeout(function(){
              noDeclensionsFound.style.opacity = "0"
            }, 4000)

            setTimeout(function(){
            noDeclensionsFound.style.display = "none"
          }, 4800)
          }


          for(let i = 0, len = declensioList.length; i < len; i++){
              if(i % 2 === 0){
                nounsSingular.push(declensioList[i])
              }else{
                nounsPlural.push(declensioList[i])
              }
          }




                    if(declensioList != "no declensions"){

                    var deklinace = document.querySelectorAll(".deklinace")

                    for(let i = 0, len = deklinace.length; i < len; i++){

                    //  deklinace[i].value = nounsSingular[i]


                          var patt = /\s\/.*/;

                          if(patt != "undefined"){
                              var result = nounsSingular[i].match(patt);


                              nounsSingular[i].replace(result, "")
                              deklinace[i].value = nounsSingular[i].replace(result, "")
                          }

                        if(deklinace[i].value === "undefined" || deklinace[i].value === "—"){
                          deklinace[i].value = ""
                            }

                      }


                      var deklinacePlu = document.querySelectorAll(".deklinacePlu")

                      for(let i = 0, len = deklinacePlu.length; i < len; i++){


                            var patt = /\s\/.*/;
                            var result = nounsPlural[i].match(patt);

                            nounsPlural[i].replace(result, "")
                            deklinacePlu[i].value = nounsPlural[i].replace(result, "")




                          if(deklinacePlu[i].value === "undefined" || deklinace[i].value === "—"){
                            deklinacePlu[i].value = ""
                          }

                        }


                      }
                  }


var baseEntr = document.getElementById("czech_entry")
var baseEntrEng = document.getElementById("english_entry")

baseEntr.addEventListener("keyup", copyWord);
baseEntrEng.addEventListener("keyup", copyWord);

function copyWord(){
  var deklinator = document.getElementById("deklinator")

  var declinatedWord = document.getElementById("declinatedWord")
  var declinatedWordEng = document.getElementById("declinatedWordEng")

  declinatedWord.value = baseEntr.value

  declinatedWordEng.value = baseEntrEng.value

  if(baseEntr.value.length > 0 && baseEntrEng.value.length > 0){
    deklinator.classList.remove("hidden")
  }


}
