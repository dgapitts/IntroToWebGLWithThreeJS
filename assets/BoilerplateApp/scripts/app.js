var demo = (function(){

    "use strict";
    
    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null;

        function initScene(){
    
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
                      
            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
                );
            
            camera.position.set( 0, 0, 100 );
            
            scene.add(camera);  

            box = new THREE.Mesh(
              new THREE.CubeGeometry(
                20,
                20,
                20),
              new THREE.MeshBasicMaterial({color: 0xFF0000}));

            scene.add(box);

            //Move the camera closer to the cube
            camera.position.z=50;
            //Move the camera to the left of the cube
            camera.position.x=-20;
            //Move the cube to the right and further away
            camera.position.x=+20;
            camera.position.z=300;
            //Make the camera look down on the cube
            camera.position.y=+20;
            //camera.lookAt(new THREE.Vector3(0,20,0));
            //Animate the camera so it gradually moves closer to the cube 


            requestAnimationFrame(render);

            


            requestAnimationFrame(render);
        };

        function render() {
                renderer.render(scene, camera); 
                requestAnimationFrame(render);
                camera.position.z--;
        };
       
        window.onload = initScene;

})();
