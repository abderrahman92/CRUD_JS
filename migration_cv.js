


              //=>récuperation des donées experience.json  
              fetch('data/experience.json')
              .then(function(response){
                  return response.json();
              })
              .then(function(experience){
                  //=>lister des donées .
                  for(var i=0;i<experience.length;i++){
                  let contenu1=document.getElementById("experience_id").innerHTML +="<h6 class='card-header'>"+experience[i].nom+"</h6>"+"<h8 class='card-text'>"+experience[i].description+"</h8>"+"<div class='card-text text-muted'>"+experience[i].url+"</div>"
                  }
              })

            //=>récuperation des donées formation.json  
               fetch('data/formation.json')
              .then(function(formation){
                  return formation.json();
              })
              .then(function(formation){
                  //=>lister des donées .
                  for(var j=0;j<formation.length;j++){
                      document.getElementById("formation_id").innerHTML +="<h6 class='card-header'>"+formation[j].nom+"</h6>"+"<h8 class='card-text'>"+formation[j].description+"</h8>"+"<div class='card-text text-muted'>"+formation[j].annee+"</div>"
                  }
              })

            //=>récuperation des donées competence.json  
               fetch('data/competence.json')
              .then(function(competence){
                  return competence.json();
              })
              .then(function(competence){
                  //=>lister des donées .
                  for(var c=0;c<competence.length;c++){
                      document.getElementById("competence_id").innerHTML +="<h6 class='card-header'>"+competence[c].language+"</h6>"+"<h8 class='card-text text-muted' >"+competence[c].outils+"</h8>"
                  }
              })
            //=>récuperation des donées propos.json  
                fetch('data/propos.json')
                .then(function(propos){
                    return propos.json();
                })
                .then(function(propos){
                    //=>lister des donées .
                    for(var d=0;d<propos.length;d++){
                        document.getElementById("propos_id").innerHTML +="<h6 class='card-header'>"+propos[d].evenment+"</h6>"+"<h8 class='card-text text-muted' >"+propos[d].description+"</h8>"
                    }
                })
   