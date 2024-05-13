
        function playGame(playerMove)
        {
            const computerMove=pickComputerMove();
            let result='';
            let userSelection = 'You selected: ' + playerMove + '\n';
            let computerSelection = 'Computer selected: ' + computerMove + '\n';


            if(playerMove === 'Scissor')
            {
                if (computerMove==='Rock'){result= 'You Loose';}
                else if (computerMove==='Paper'){result ='You Win';}
                else if (computerMove==='Scissor'){result ='Tie';}
            }
            else if(playerMove === 'Paper')
            {
                if (computerMove==='Rock'){result= 'You Win';}
                else if (computerMove==='Paper'){result ='Tie';}
                else if (computerMove==='Scissor'){result ='You loose';}
            }
            else if(playerMove === 'Rock')
            {
                if (computerMove==='Rock'){result= 'Tie';}
                else if (computerMove==='Paper'){result ='You Loose';}
                else if (computerMove==='Scissor'){result ='You Win';}
            }

            alert(userSelection + computerSelection + result);

        }

        function pickComputerMove(){
            const randomNumber=Math.random();

            let computerMove='';
            
            if(randomNumber>= 0 && randomNumber< 1/3){
                computerMove='Rock';
            }
            else if(randomNumber>= 1/3 && randomNumber< 2/3){
                computerMove='Paper';
            }
            else if(randomNumber>= 2/3 && randomNumber< 1){
                computerMove='Scissor';
            }

            return computerMove;

        }
    