// Creating a point.
var point=new Point(view.size.width,view.size.height);



var circles=[];
function onKeyDown(event){          //Keydown event listener
    if(audioData[event.key]){
    // Random points
    xCoord=Math.random()*point.x;
    yCoord=Math.random()*point.y;
    
    // Creating a circle
    var newCircle=new Path.Circle(xCoord,yCoord,500)
    newCircle.fillColor="red";
    circles.push(newCircle);
    newCircle.fillColor=audioData[event.key].color;         //Set fill color as object key color
    audioData[event.key].sound.play();
    
}


}

function onFrame(event){            //For animation of circle array and change of hue.
    for(var i=0;i<circles.length;i++){
    circles[i].fillColor.hue+=1;
    circles[i].scale(.9);
    }
}