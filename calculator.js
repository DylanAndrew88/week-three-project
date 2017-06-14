
      var myValue = document.getElementById("#myTextBox");
      if  (myValue.length == 0) {
        alert.onclick("Please enter a real value in the text box.");
        return;
      }

      var myTitle = document.getElementById("#title");
        myTitle.innerHTML = myValue;
    }
