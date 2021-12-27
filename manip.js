
// Pssst, I've created a github package - https://github.com/brookesb91/dismissible

  
 // suppression section experience  
    var sup_exp= document.querySelector("#sup_experience");
    sup_exp.addEventListener('click',function(){
        var Sect=document.querySelector("section.section_experience")
        Sect.remove();
    })

// suppression section formation  
    var sup_info= document.querySelector("#sup_formation");
    sup_info.addEventListener('click',function(){
        var Sect2=document.querySelector("section.section_formation")
        Sect2.remove();
    })

// suppression section formation  
    var sup_comp= document.querySelector("#sup_competence");
    sup_comp.addEventListener('click',function(){
        var Sect3=document.querySelector("section.section_competence")
        Sect3.remove();
    })

// suppression section formation  
    var sup_pro= document.querySelector("#sup_propos");
    sup_pro.addEventListener('click',function(){
        var Sect4=document.querySelector("section.section_propos")
        Sect4.remove();
    })
    //function notification
    const showBanner = (selector) => {
        hideBanners();
        // Ensure animation plays even if the same alert type is triggered.
        requestAnimationFrame(() => {
          const banner = document.querySelector(selector);
          banner.classList.add("visible");
        });
      };
      
      const hideBanners = (e) => {
        document
          .querySelectorAll(".banner.visible")
          .forEach((b) => b.classList.remove("visible"));
      };
      