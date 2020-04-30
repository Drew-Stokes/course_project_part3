
    function validateForm(){
        var name = document.getElementById("name").value;
        var genre = document.getElementById("genre").value;
        if(name == "" || name == null){//checking for null or empty string
            resultsMsg("We need your name please");
        } else {
            if(genre == "" || genre == null){
                resultsMsg("Please tell us your favorite gaming genre");
            } else {
                //alert("Thanks" + name + "You are" + age + " --yeah, right!");
                if(getAnswer() == null){
                    resultsMsg("please select a gaming platform");
                    }else{
                        moreMsg("Awesome! " + name + ", The " + genre + " genre has some amazing titles on " + getAnswer() + ".");
                    }// end else
            }    
        }
    }


    function getAnswer(selection){
        var isChecked = false;
        var theSelection;
        var theAnswer = document.getElementsByName('answer');
        for (var i=0; i < theAnswer.length; i++){
            if(theAnswer[i].checked){
                isChecked = true;
                theSelection = theAnswer[i].value;
            }
            if(isChecked){
                return theSelection;
            }
        }
    }


    function resultsMsg(s){
        var resultsBox = document.getElementById("results");
        //reset to blank by overwriting
        resultsBox.innerHTML = s;
    }//end function

    function moreMsg(s){
        var resultsBox = document.getElementById("more");
        //reset to blank by overwriting
        resultsBox.innerHTML = s;
        resultsBox.style.color = "darkgreen";
    }



