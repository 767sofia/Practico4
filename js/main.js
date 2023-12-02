let apiKey = "Q8AF8mPt1XN90P6lNI7vIdPbPKxC6BZH" ;

let submitBtn = document.getElementById('submit_btn');


let generateGif = () => { 
     //muestro la animación de carga hasta que se cargue el gif
    let loading = document.querySelector(".loading");
    loading.style.display = "block";
    document.querySelector(".wrapper").style.display = "none";


    let q = document.getElementById("search-box").value;
   

    let gifCount = 9;

    let finalURL =  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;

    document.querySelector(".wrapper").innerHTML = "";

    fetch(finalURL)
      .then((resp) => resp.json())
      .then((info) => {
         console.log(info.data)

         let gifData = info.data;
         gifData.forEach((gif) => {

            let container = document.createElement("div");
            container.classList.add("container");

            let iframe = document.createElement("img");
            console.log(gif);
            iframe.setAttribute("src", gif.images.downsized_medium.url);
           
            iframe.onload = () => {
               gifCount--;
               if (gifCount == 0){
                  loading.style.display= "none";
                  document.querySelector(".wrapper")
                  .style
                  .display = "grid";
                  
               }
            };

            container.append(iframe);
            document.querySelector(".wrapper").append(container);

            
         });
      
      
      
      
      
      });



    
 };

 submitBtn.addEventListener("click", generateGif);
 window.addEventListener("load", generateGif);

