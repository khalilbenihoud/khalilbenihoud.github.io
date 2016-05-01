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

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46687393-1', 'auto');
  ga('send', 'pageview');

