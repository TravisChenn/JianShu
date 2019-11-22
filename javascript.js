
var btn = document.getElementById("btn-click");
var nav = document.getElementById("nav-collapse");

for(let a=1;a<10;a++){
    if(a%2!=0) {
        btn.addEventListener('click',function(){
        nav.style.display = "block";
        btn.style.backgroundColor = "rgba(221, 221, 221, 0.9)";
        
    })
    } else{
        document.getElementById("btn-click").addEventListener('click',function(){
            nav.style.display = "none";})
    }

    }
      
    
    
    


    
    
