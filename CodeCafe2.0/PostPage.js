document.addEventListener('DOMContentLoaded', function() {
    var URL = 'https://docs.google.com/spreadsheets/d/1yEpL6bAdPt5bWG3vpOKVBD6O3xOwqshd9M0HmDLzps0/pubhtml';
    Tabletop.init( { key: URL, callback: makeUL, simpleSheet: true } )
   
  //  Tabletop.init( { key: URL, callback: displayShow, simpleSheet: true } )
   
    
})


function makeUL(data) {
    // Create the list element:
    var list = document.createElement('ul');
    
    


    for(var i = 0; i < data.length; i++) {
        // Create the div item:
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.height='50px';
        div.style.border="3px solid #C1C3D1";
        div.style.color = "#666B85";
        div.style.background = "white";
        div.style.textAlign="center";
        div.style.padding="-1px 2px 10px";
        div.style.margin = "0px 0px 0px 10px";
        



        //create list item
        var a = document.createElement('a');
        var item = document.createElement('li');
        
        
        a.setAttribute('href', '#display');
        
        item.appendChild(a);
        div.appendChild(item);
        div.setAttribute('id', 'post_'+i);
        

        // Add it to the list:

        list.appendChild(div);
        
        document.getElementById('posts').appendChild(list); 
        document.getElementById('post_'+i).textContent = data[i].ProjectTitle;
    }


    var oldID='post_';
    list.addEventListener('click', function(e) {
    
   
    var target = e.target; // Clicked element
    
    while (target && target.parentNode !== list) {
        target = target.parentNode;
         // If the clicked element isn't a direct child
        if(!target) { return; } // If element doesn't exist
    }

    if (target.tagName === 'DIV'){
        
        console.alert("displaying" + target.id);

        if(oldID!='post_'){
            document.getElementById('pTitle').innerHTML = '';
            document.getElementById('image').innerHTML = '';
            document.getElementById('Name').innerHTML = '';
            document.getElementById('des').innerHTML = '';
            
        }
        
        //display title

        var h = document.createElement('h1');

        var t = document.createTextNode(document.getElementById(target.id).textContent);
        var title=h.appendChild(t);
        document.getElementById('pTitle').appendChild(title);

        //display other elements
        var id = target.id;
        console.log(data);
        var idNew =String(id);
        var i = idNew.split('_').pop();
        
        //create a break
        var br = document.createElement('br');
        document.getElementById('pTitle').appendChild(br);

        //create the name
        var p= document.createElement('P');
        
        var t = document.createTextNode(data[i].YourNameFirstandLast);
        var v=p.appendChild(t);
        var v = document.getElementById('Name').appendChild(v);
        

        //create a break
        var br = document.createElement('br');
        document.getElementById('Name').appendChild(br);
        //create a break
        var br = document.createElement('br');
        document.getElementById('Name').appendChild(br);
        //create a break
        var br = document.createElement('br');
        document.getElementById('Name').appendChild(br);

        //create the image
        var x = document.createElement('IMG');
        x.setAttribute('src', data[i].File);
        x.setAttribute('width', '100%');
        x.setAttribute('width', '100%');
        
        document.getElementById('image').appendChild(x);

         //create a break
        var br = document.createElement('br');
        document.getElementById('image').appendChild(br);
       

        //create the description
        var d= document.createElement('P');
        var t = document.createTextNode(data[i].Description);
        var c=d.appendChild(t);
        document.getElementById('des').appendChild(c);
        


        oldID=target.id;
        


    }

});

}

