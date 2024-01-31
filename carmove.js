AFRAME.registerComponent("car-move", {
     init: function () {
       const car =  document.getElementById("car");
       var carRot = car.getAttribute("rotation");
   
   
       const camera = document.getElementById("cam");
       var cameraRot = camera.getAttribute("rotation");
   
   
       var cameraMoveControl = camera.getAttribute("movement-controls")
   
   
       window.addEventListener("keydown", (e) => {
         if (e.code === "ArrowUp") {
           camera.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
         }

   
   
         if (e.code === "ArrowDown") {
           camera.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
          
         }
   
   
         if (e.code === "ArrowRight") {
           carRot.y -= 0.1
           cameraRot.y-=3
           car.setAttribute("rotation",carRot)    
           camera.setAttribute("rotation",cameraRot)            
           camera.setAttribute("movement-controls", {"speed": 0.3})
         }
   
   
         if (e.code === "ArrowLeft") {
           carRot.y += 0.1
           cameraRot.y+=3
           car.setAttribute("rotation",carRot)  
           camera.setAttribute("rotation",cameraRot)              
         camera.setAttribute("movement-controls", {"speed": 0.3})
      
   
   
         }
       });

       window.addEventListener("keyup", (e) => {
          if(e.code === "ArrowRight") {
               camera.setAttribute("movement-controls", {"speed": 0.5})
          }

          if(e.code === "ArrowLeft") {
               camera.setAttribute("movement-controls", {"speed": 0.5})
          }
       })

     },
   });
   
   
   