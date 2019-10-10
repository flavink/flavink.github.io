//@ts-check
window.onload = function(){

let button1 = document.getElementById("view-button1");
let button2 = document.getElementById("view-button2");
let button3 = document.getElementById("view-button3");
let close_button = document.getElementById("close");
let download_button = document.getElementById("download-button");
let viewer = document.getElementById("image-viewer");
let body = document.getElementById("body");
function openimage(){
    if(this.id=="view-button1"){
        // @ts-ignore
        document.getElementById("infographic").src = "images/planning.jpeg";
        viewer.setAttribute("data-which-image","planning");
    }else if(this.id=="view-button2"){
                // @ts-ignore
        document.getElementById("infographic").src = "images/management.jpeg";
        viewer.setAttribute("data-which-image","management");

    }else if(this.id=="view-button3"){
                // @ts-ignore
        document.getElementById("infographic").src = "images/principles.jpeg";
        viewer.setAttribute("data-which-image","principles");

    }
    setTimeout(function openimage_in_delay(){

        viewer.style.display = "flex";
        body.style.overflow = "hidden";


    }, 100);
};
function closeimage(){
    viewer.style.display = "none";
    body.style.overflow = "scroll";
    viewer.setAttribute("data-which-image","empty");
    //@ts-ignore
    document.getElementById("infographic").src = "";


};
function download_image(){
   let checkimage = document.getElementById("image-viewer").getAttribute("data-which-image");
   if(checkimage=="planning"){
    download_button.setAttribute("href","images/planning.jpeg");
   }else if(checkimage=="management"){
    download_button.setAttribute("href","images/management.jpeg");
   }else if(checkimage=="principles"){
    download_button.setAttribute("href","images/priciples.jpeg");
   }
};
button1.addEventListener('click',openimage);
button2.addEventListener('click',openimage);
button3.addEventListener('click',openimage);
download_button.addEventListener('click',download_image);
close_button.addEventListener('click',closeimage);

const buildpost = () =>{

    let real_post = document.getElementById("post0");
    let parent = document.getElementById("commentbyuserid");
    let clone;
    //@ts-ignore
    for(let buildpost = 1; buildpost <= 5 ; buildpost++){
    clone = real_post.cloneNode(true);
    clone.id = "post"+buildpost;
    clone.children[0].children[0].innerHTML = "best 👍👌";
    clone.children[1].children[0].innerHTML = "by ram rathore"; 
    clone.children[1].children[1].innerHTML = "9 day ago";  
    parent.appendChild(clone);
    }
}

const News = () =>{
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              let comments = this.responseText;
              let lines = comments.split(',');
              lines.pop();
              let length = lines.length - 1;
              let matrix = [];
              for(let clip = 0; clip<=length; clip++){
                 var house = lines[clip].split('|*|');
                 house.shift();
                 matrix.push([]);
                 matrix[clip][0] = house[0];
                 matrix[clip][1] = house[1];
                 matrix[clip][2] = house[2];
              }
                let real_post = document.getElementById("post-1");
                let parent = document.getElementById("commentbyuserid");
                let clone;
              for(let buildpost = 0; buildpost <= 0 ; buildpost++){
              clone = real_post.cloneNode(true);
              clone.id = "post"+buildpost;
              clone.children[0].children[0].innerHTML = matrix[buildpost][0];
              clone.children[1].children[0].innerHTML = matrix[buildpost][1]; 
              clone.children[1].children[1].innerHTML = matrix[buildpost][2] + " day ago";  
              parent.appendChild(clone);
              }
              let show_but = document.getElementById('ShowMoreButton');
              show_but.addEventListener('click',function(){
              let this_end = show_but.getAttribute("data-stop-or");    
              if(this_end == "no-stop"){
              show_but.innerHTML = "Showless";
              for(let buildpost = 1; buildpost <= length ; buildpost++){
              clone = real_post.cloneNode(true);
              clone.id = "post"+buildpost;
              clone.setAttribute("data-label","label");
              clone.children[0].children[0].innerHTML = matrix[buildpost][0];
              clone.children[1].children[0].innerHTML = matrix[buildpost][1]; 
              clone.children[1].children[1].innerHTML = matrix[buildpost][2] + " day ago";  
              parent.appendChild(clone);
              show_but.setAttribute("data-stop-or","stop"); 
                }
               }else{
 
                }

              });


              
            

          };
        };
        xhttp.open("GET", "user_response.txt", true);
        xhttp.send();
      
}

News();

let submit_button = document.getElementById("submit");
submit_button.addEventListener('click',function(){
let name = document.getElementById("name").value;
let comment = document.getElementById("usertext").value;
if(comment == ""){
    document.getElementById("usertext").setAttribute("placeholder","Write Something First!");
}else{
    if(name == ""){
        document.getElementById("name").setAttribute("placeholder","Your Name!")
    }else{
        

    }
}
   

});


};






