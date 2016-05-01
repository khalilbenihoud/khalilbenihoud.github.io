var words = ['Bonjour','Hello','Marhaba','Hallo', 'Ciao'],
            currentStep = 0,
            textEl = document.querySelector('.change-text'),
            oldWord = '';


        setTimeout(changeWord, 1000);

        function changeWord() {
          oldWord = textEl.innerHTML;
          
          if (oldWord.length < 1) {

            if (currentStep !== words.length -1) {
                  currentStep ++;
            }else {
              currentStep = 0;
            }
            addNextWord();
          } else {
            setTimeout(deleteWord, 800);
          }
          
        };

        function deleteWord() {
          var WordLength = oldWord.length,
              currentWord = textEl.innerHTML,
              currentLength = currentWord.length;
          
          if (currentLength < 1) {
            changeWord();
            return;
          }
          
          textEl.innerHTML = currentWord.substring(0, currentLength - 1);
          
          setTimeout(deleteWord, 200);
        }

        function addNextWord() {
          var currentWord = textEl.innerHTML,
              currentLength = currentWord.length,
              nextWord = words[currentStep],
              nextWordLength = nextWord.length;
            
          
          if (currentLength === nextWordLength) {
            changeWord();
            return;
          }
          
          textEl.innerHTML = nextWord.substring(0, currentLength + 1);
            
          setTimeout(addNextWord, 200);
          
          
        }