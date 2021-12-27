         //=>récuperation des donées projet.json  
         fetch('data/projet.json')
         .then(function(projet){
             return projet.json();
         })
         .then(function(projet){
             //=>lister des donées .
             for(var j=0;j<projet.length;j++){
                 console.log(projet[1])
               //<section> 
               var sect = document.querySelector('section.section_projet');
                 //div card

                 var para = document.createElement('div');
                 para.classList.add('card');
                 sect.appendChild(para);

                     //h5 card-header
                     var para1=document.createElement('h5');
                         para1.classList.add('card-header');
                         para1.textContent=projet[j].nom
                         para.appendChild(para1);

                     //div card-body
                     var para2=document.createElement('div');
                         para2.classList.add('card-body');
                     
                         para.appendChild(para2);

                         //div card-title 
                          var para2_1=document.createElement('h5');
                          para2_1.classList.add('card-title');
                          para2_1.textContent=projet[j].description
                          para2.appendChild(para2_1); 

                         //div card-title 
                          var para2_2=document.createElement('p');
                          para2_2.classList.add('card-title');
                          para2_2.textContent=projet[j].url
                          para2.appendChild(para2_2); 

                         //div card-title 

                         
                          var para2_3=document.createElement('button');
                          para2_3.classList.add('card-title');
                          para2_3.textContent='boutton';
                          para2_3.addEventListener("click", function() {
                            hideBanners();
                            // Ensure animation plays even if the same alert type is triggered.
                            requestAnimationFrame(() => {
                            const banner = document.querySelector(selector);
                            banner.classList.add("visible");
                            });
                            const hideBanners = (e) => {
                                document
                                  .querySelectorAll(".banner.visible")
                                  .forEach((b) => b.classList.remove("visible"));
                                  alert('gg');
                              };
                        });
                          para2.appendChild(para2_3); 
                          
                             
             }
         })
