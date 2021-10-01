//set initial count
let count = 0;

let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        
        switch(btn.classList[1]){            
            case 'decrease':
                count--;                
                break;
            case 'increase':
                count++;
                break;
            default:
                count = 0;
                break; 
        }

        if(count>0){
            value.style.color = 'green';
        } else if(count<0){
            value.style.color = 'red';
        } else{
            value.style.color = 'black';
        }
        value.textContent = count;
    });
})