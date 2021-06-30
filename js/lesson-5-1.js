function my_initiation() 
{

    let board = document.querySelector('.chessboard');
    let block;
    let flag = true;
    
    for(let i=0; i<8; i++){
        
        
        let cifer=document.createElement('div');
        with (cifer.style)
        {
            height="40px";
            width="10px";
            display="block";
            float="left";
            fontSize="16px";
            fontWeight="bold";
            paddingTop="40px";
        }
        cifer.innerText=8-i;
        board.appendChild(cifer);     
        
        for(let j=0; j<8; j++){
            
            
            
            if(j==0)
                flag = !flag;   
            
            block = document.createElement('div');
        
            if(flag)
                block.className='block black';
            else
                block.className='block white';

            board.appendChild(block);

            flag = !flag;
        }

    }
    
   
    for (let b=String("A").charCodeAt(0);b<String("I").charCodeAt(0);b++)
    {
            let bukaf=document.createElement('div');
            bukaf.style.height="20px;"
            bukaf.style.display="block";
            bukaf.style.float="left";
            bukaf.style.width="80px";
            bukaf.style.textAlign="center";
            bukaf.style.fontSize="16px";
            bukaf.style.fontWeight="bold";
            bukaf.innerHTML=String.fromCharCode(b);
            board.appendChild(bukaf);
    }
            
            
}