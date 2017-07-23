 document.addEventListener('click', function(e){
    let color; 
     switch(e.target.id) {
         case 'box1':
             color = 'green';
             break;
        case 'box2':
             color = 'blue';
             break;
        case 'box3':
             color = 'red';
             break;
         case 'box4':
             color = 'yellow';
             break;
         default:
             color = '#f4f4f4';
     }
     document.body.style.background = color;
 });