let rollvalue;
let a;
let b;
let play;
let ptoken = {
    dice:0
}

function roll(){
    rollvalue = Math.ceil(Math.random()*6);
    let value = document.querySelector('.rolled');
    if(rollvalue){
        b=true;
    }
    if(rollvalue==6){
        a = true;
    }
    ptoken.dice = rollvalue;
    const pturn = document.querySelector('.nturn span');
    if(pturn.textContent.includes('A')){
        play = 'A';
    }
    else if(pturn.textContent.includes('B')){
        play = 'B';
    }

    if(rollvalue!=6){
        if(pturn.textContent == 'A'){
            pturn.textContent = 'B';
        }
        else if(pturn.textContent == 'B'){
            pturn.textContent = 'A';
        }
    }

    value.innerHTML = `<p>Rolled for ${play}: ${rollvalue}</p>`;      
        
}

function turn(indexA, indexB){
    let pt = document.querySelector('.rolled');
    let tokenp = pt.textContent[11];
    if(b){
        if(tokenp=='A' && tokenp==play){
            if (indexA<23 || (indexA == 23 && ptoken.dice<6) || (indexA ==24 && ptoken.dice<5) || (indexA ==25 && ptoken.dice<4) || (indexA ==26 && ptoken.dice<3) || (indexA ==27 && ptoken.dice<2)){
                let token1 = document.querySelector(`.A${indexA}`);
                let tc = token1.textContent;
                if(tc.includes('A')){
                    let tc2 = tc.replace(' 1 A', '');
                    let tokenf = document.querySelector(`.A${indexA + ptoken.dice}`);
                    let indexf = indexA + ptoken.dice;
                    if(!(indexf==1 || indexf==8 || indexf==15 || indexf==22)){
                        if(tokenf.textContent.includes(' 1 B')){
                            tokenf.textContent = tokenf.textContent.replace(' 1 B', '');
                            let tc3 = document.querySelector(`.butB p`);
                            if(tc3.textContent.includes('1')){
                                tc3.textContent = '2 B';    
                            } 
                            else if(tc3.textContent.includes('0')){
                                tc3.textContent = '1 B';    
                            }
                        }
                    }                    
                    tokenf.textContent += ' 1 A';
                    token1.textContent = tc2;
                    if((indexA + ptoken.dice) == 28){
                        let thome = document.querySelector('.itemA span');
                        let complete = document.querySelector('.A28');
                        complete.textContent = complete.textContent.replace(' 1 A', '');
                        if(!thome.textContent){
                            thome.textContent = '1';
                        }
                        else{
                            thome.textContent = '2';
                            if(document.querySelector('.itemB span').textContent != '2'){
                                document.querySelector('.winnerp').classList.add('winnerA');
                                document.querySelector('.winnerh').classList.add('winnerd');
                            }
                        }
                    }
                }
                b=false;            
            }
        }

        if(tokenp=='B' && tokenp==play){
            if (indexB<23 || (indexB == 23 && ptoken.dice<6) || (indexB ==24 && ptoken.dice<5) || (indexB ==25 && ptoken.dice<4) || (indexB ==26 && ptoken.dice<3) || (indexB ==27 && ptoken.dice<2)){
                let token1 = document.querySelector(`.B${indexB}`);
                let tc = token1.textContent;
                if(tc.includes('B')){
                    let tc2 = tc.replace(' 1 B', '');
                    let tokenf = document.querySelector(`.B${indexB + ptoken.dice}`);
                    let indexf = indexB + ptoken.dice;
                    if(!(indexf==1 || indexf==8 || indexf==15 || indexf==22)){
                        if(tokenf.textContent.includes(' 1 A')){
                            tokenf.textContent = tokenf.textContent.replace(' 1 A', '');
                            let tc3 = document.querySelector(`.butA p`);
                            if(tc3.textContent.includes('1')){
                                tc3.textContent = '2 A';
                            } 
                            else if(tc3.textContent.includes('0')){
                                tc3.textContent = '1 A';
                            }               
                        }
                    }
                    
                    tokenf.textContent += ' 1 B';
                    token1.textContent = tc2; 
                    if((indexB + ptoken.dice) == 28){
                        let thome = document.querySelector('.itemB span');
                        let complete = document.querySelector('.B28');
                        complete.textContent = complete.textContent.replace(' 1 B', '');
                        if(!thome.textContent){
                            thome.textContent = '1';
                        }
                        else{
                            thome.textContent = '2';
                            if(document.querySelector('.itemA span').textContent != '2'){
                                document.querySelector('.winnerp').classList.add('winnerB');
                                document.querySelector('.winnerh').classList.add('winnerd');
                            }
                        }
                    } 
                }

                b=false;     
            }       
        }
    }    
}

function token(player){
    let nump = document.querySelector(`.but${player} p`);
    if(a && play == player){
        if(nump.textContent.includes('2')){
            document.querySelector(`.${player}1`).textContent += ` 1 ${player}`;
            nump.textContent = `1 ${player}`;
            a = false ;
            b=false
        }
        else if(nump.textContent.includes('1')){
            document.querySelector(`.${player}1`).textContent += ` 1 ${player}`;
            nump.textContent = `0 ${player}`;
            a = false ;
            b=false;
        }
    }
}