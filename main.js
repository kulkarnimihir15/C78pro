var images =[
    "https://i.pinimg.com/originals/14/71/36/1471365a568614885ccb2c233334cdd0.png","https://www.pngitem.com/pimgs/m/284-2841358_mother-with-short-brown-hair-clip-art-at.png","","https://thumbs.dreamstime.com/b/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg","https://lh3.googleusercontent.com/proxy/X-bJC6GlFs7uNm3ghPQqCbsswLUqb7J1mOHRA7MptfTEwP0K7uhwwzuuiiLejR5_tqHVcnp5I483Hl7ev8kYxxEge6p0kOf7OM4qCnUFJH0ZBud_EYzaLEbsfxdN5EjApr_lDEUSvYNxNUrXYZNtAqvcIuHHhwX37A"
  ];
  
  
  var i =0;
  
  function nextslide(){ 
  if(i==3){
    i=0;
  }  document.getElementById("image").src=images[i];
  i++;                     
  }
  
  var names =[
    "Dad", "Mom", "Sister" , "Brother"
  ];
  function nextname(){ 
    if(i==3){
      i=0;
    }  document.getElementById("Names")[i];
    i++;                     
    }