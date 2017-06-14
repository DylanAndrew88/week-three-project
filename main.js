
      var myValue = document.querySelector("#myTextBox");
      if  (myValue.length == 0) {
        alert("Please enter a real value in the text box.");
        return;
      }

      var myTitle = document.querySelector("#title");
        myTitle.innerHTML = myValue;
    }
