const number = [...document.querySelectorAll('#number')] 
const paren = [...document.querySelectorAll('.paren')]
const op = [...document.querySelectorAll('.key--operator')]
const equal = document.querySelector('.key--equal')
const display = document.querySelector('.calculator__display')
const clear = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')
const copy = document.querySelector('.copy')
const del = document.querySelector('.del')


let verificop = false
let verificDecimal = false
let verificParen = false

number.map((el)=>{
    el.addEventListener('click',(evt)=>{
        verificop = false
        verificParen = false
       
        if(display.innerHTML == '0'){
           display.innerHTML = ''
        }
      display.innerHTML += evt.target.innerHTML
    })
})

paren.map((el)=>{
    el.addEventListener('click',(evt)=>{

        if(verificParen == true){
            if(evt.target.innerHTML != display.innerHTML){
                const back =  display.innerHTML;
                display.innerHTML = back.substring(0, back.length -1) 
                if(evt.target.innerHTML == 'x'){
                    display.innerHTML += '*'
                } else{
                display.innerHTML += evt.target.innerHTML
                console.log(evt.target)
                }
            }
        }
  
        if(!verificParen){
            verificParen= true
      
        if(display.innerHTML == '0'){
           display.innerHTML = ''
        }

    
      display.innerHTML += evt.target.innerHTML
    }
    
    })
})

op.map((el)=>{
    el.addEventListener('click',(evt)=>{

        if(display.innerHTML == '0'){
            verificop = true
          
        }

        if(verificop == true){
            if(evt.target.innerHTML != display.innerHTML){
                const back =  display.innerHTML;
                display.innerHTML = back.substring(0, back.length -1) 
                if(evt.target.innerHTML == 'x'){
                    display.innerHTML += '*'
                } else{
                display.innerHTML += evt.target.innerHTML
                console.log(evt.target)
                }
            }
        }

        
        if(!verificop){
            
            verificDecimal = false
            verificop = true
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }else if(evt.target.innerHTML == '÷'){
                display.innerHTML += '/'
            }else{
            display.innerHTML += evt.target.innerHTML
            }
        
        }

    
    
    })
})

decimal.addEventListener('click',(evt)=>{

   if(!verificDecimal){
    verificDecimal = true
        display.innerHTML +='.'  
   }

})

equal.addEventListener('click',(evt)=>{
    verificop = false
    verificDecimal = false
     verificParen = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

clear.addEventListener('click',(evt)=>{
    display.innerHTML = '0'
     verificop = false
    verificDecimal = false
     verificParen = false
})

copy.addEventListener('click',(el)=>{
        navigator.clipboard.writeText(display.innerHTML)
    
})

del.addEventListener('click',(el)=>{
    const back =  display.innerHTML;
    display.innerHTML = back.substring(0, back.length -1) 

    if(display.innerHTML == ''){
        display.innerHTML = '0'
    }
})