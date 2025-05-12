 let yesButton = document.getElementById('yesButton');
        let noButton = document.getElementById('noButton');
        let message = document.getElementById('message');
        let attemptsText = document.getElementById('attempts');
        let noCount = 0;
        let questionText = document.getElementById('question'); 
        let surpriseMessage = document.getElementById('surpriseMessage');
        let okButton = document.getElementById('okButton');
        let timerDisplay = document.getElementById('timerDisplay'); 
        let sendPicsMessage = document.getElementById('sendPicsMessage'); 
        let confirmButton = document.getElementById('confirmButton');  
        let thanksMessage = document.getElementById('thanksMessage'); 
        
        yesButton.addEventListener('click', function() {
            message.classList.add('visible');  
            questionText.style.display = 'none';  
            noButton.style.display = 'none';  
            yesButton.style.display = 'none'; 
            attemptsText.style.display = 'none';  
        
            let valentineMusic = document.getElementById('valentineMusic');
            valentineMusic.play();  // Start playing the music

            let countdown = 10;
            let countdownInterval = setInterval(function() {
                timerDisplay.textContent = `💌 : ${countdown} seconds`;
                countdown--;

                
                timerDisplay.style.opacity = '1';  
                timerDisplay.style.transform = 'scale(1)';  

                if (countdown < 0) {
                    clearInterval(countdownInterval);  

            
                    timerDisplay.style.opacity = '0';  
                    timerDisplay.style.transform = 'scale(0)';  

                
                    surpriseMessage.style.opacity = '1';  

        
                    setTimeout(function() {
                        okButton.style.display = 'inline-block';  
                    }, 2000);  
                }
            }, 1000);  
          
            setTimeout(function() {
                valentineMusic.pause();  
                valentineMusic.currentTime = 0;  
            }, 153000);  
        });

        okButton.addEventListener('click', function() {
            surpriseMessage.style.display = 'none';  
            okButton.style.display = 'none';  

            sendPicsMessage.style.display = 'block';  
            confirmButton.style.display = 'inline-block';  
        });

        confirmButton.addEventListener('click', function() {

    message.classList.add('highlight');  
    
    confirmButton.style.display = 'none';  

    setTimeout(function() {
        thanksMessage.style.display = 'block';  
    }, 2000);  

    let valentineMusic = document.getElementById('valentineMusic');
    let songDuration = valentineMusic.duration;  
    let songTimerDisplay = document.getElementById('songTimer');  

    songTimerDisplay.style.opacity = '1';

    let countdownInterval = setInterval(function() {
        let remainingTime = songDuration - valentineMusic.currentTime;  
        let minutes = Math.floor(remainingTime / 60);
        let seconds = Math.floor(remainingTime % 60);

        songTimerDisplay.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            songTimerDisplay.style.opacity = '0';  
        }
    }, 1000);  
});

        noButton.addEventListener('click', function() {
            noCount++;  
            if (noCount === 1) {
                attemptsText.textContent = "😔 I will cry, 2 attempts are left!";
            } else if (noCount === 2) {
                attemptsText.textContent = "😭 If you click again NO, I will remove it, 1 attempt  left!";
            } else if (noCount === 3) {
                attemptsText.textContent = "😎 Now you can choose the option";
                noButton.style.display = 'none'; 
            }
        });