// import {mail, passmail, mapKey} from ('../../config');
"use strict"

const contactForm = document.querySelector(".contact-form");
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let mapa = document.getElementById("map");

contactForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  let formData = {
    name: name.value,
    email : email.value,
    subject : subject.value,
    message : message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type','application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert ('Email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }else{
      alert("something went wrong");
    }
  }
  xhr.send(JSON.stringify(formData));

})



mapboxgl.accessToken = 'pk.eyJ1IjoiYXZpbGxhbG9ib3NnIiwiYSI6ImNrb2JoaW9pMzJ6ZzQyb2x5eXdkMGhya2oifQ.YDhBmQfMd4O3SVdRzqdg6A';
var map = new mapboxgl.Map({
    container: mapa,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-2.55282,48.59047],
    zoom: 13
});

map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');

map.on('load', function() {
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  directions.setOrigin('-2.55282,48.59047');
  
});

let toggle = document.getElementById('toggle')
let direcciones = document.getElementById('directions')


const arrayimgs = [
  "./images/cocina_ret.jpg",
  "./images/cocina2_ret.jpg",
  "./images/comedor_ret.jpg",
  "./images/dobledorm_ret.jpg"
];

let id = null;
let i = 0;
var index=0;
let img = document.getElementById("img1");
let indicadores = document.getElementsByClassName("indicadores");
function carrousel (){
  let opacity = 0;
  if (index >2){
    index=0
  }
  // let id = setInterval(opac,105)
  clearInterval(id)
  id = setInterval(opac,35)
  
  
  function opac(){
    if (opacity > 1){
      opacity=0
      clearInterval(id)
    }else{
      opacity+=0.05
      img.style.opacity =opacity;
      left.style.opacity=(opacity-0.2)
      right.style.opacity=(opacity-0.2)
      
    }
    img.src =arrayimgs[index]
    
    
    

  }
  
  // let id = setInterval(opac,25)
  // clearInterval(id)

 index++
 console.log(index)

}


const right = document.getElementById("right-carr");
const left = document.getElementById("left-carr");
const navlist= document.getElementById("navlist");

left.addEventListener("click",function(){
   

    if(index==0|undefined){
      index=(arrayimgs.length-1)
      img.src =arrayimgs[index]
      console.log(index)
      
    }else{
      
      index--
      img.src = arrayimgs[index]
      console.log(index)
    }

})
right.addEventListener("click",function(){
   

  if(index==(arrayimgs.length-1)){
    index=0
    img.src =arrayimgs[index]
    
    
  }else{
    
    index++
    img.src = arrayimgs[index]
    
  }

})

$("#flip-btn").click(function(e) {
    e.preventDefault();
    // $(".sc3-container").addClass('add_keyframe')
    // $("#flip").addClass('add_keyframeout')
    
    let carrouselInterval;
    $("#flip").css("display","flex")
              // .css("align-items","center")

            $(".sc3-container").hide()
            $("#img-flip-container").show()
            setInterval(carrousel,5000)
            // $(".sc3-container").removeClass('add_keyframe')
   

      // setTimeout(
      //     function() {
      //                  setInterval(carrousel,7000)  
      //     },
      //     100);
          
  });
  $("#flipback").click(
    function(e) {
      e.preventDefault();
      $("#flip").removeClass('flex')
      // $("#flip").addClass('add_keyframe')
  
      setTimeout(
        function() {
          
              $(".sc3-container").show()
              
              $("#flip").hide()
              // $("#flip").removeClass('add_keyframe')
                
            },
            100);
    });


$("#plus").click(function(e){
    e.preventDefault();
    $("#plus").hide()
    $("#less").show()
    $(".paragraph").show()
    // if (window.outerWidth < 720){
    
});
$("#less").click(function(e){
    e.preventDefault();
    $("#plus").show()
    $("#less").hide()
    $(".paragraph").hide()
    // if (window.outerWidth < 720){
    //   $("section").css('height','100vh')}
    
});

$(".fa-bars").click(function(e) {
    e.preventDefault();
        if($(".navlist").is(":visible")){
          $(".navlist").hide();
          $('.navbar').css('height','')
        }else{
            $(".navlist").show();  
            $('.navbar').css('height','60vh')
            $('.navbar').css("display","block")         
        }
    
          });

    
function checkMediaQuery() {

  if (window.outerWidth < 720 ||(navlist.scrollHeight>52 || window.devicePixelRatio>3)) {
    $(".fa-bars").show();
    $("#navlist").hide();
    $('.navbar').css('height','')
    // $('section').css('height','fit-content')
   
    $("#nav-buttons").hide();
    // $(".sc").css('height','fit-content');
    // document.getElementById("nav").scrollIntoView();

   
    
    // $(".indicadores").hide()
    // alert("<720")
  
  }else if (window.outerWidth > 720) {
    // alert(">720")
      $(".fa-bars").hide();
      $("#navlist").show(); 
      $("#nav-buttons").show()
      $(".sc").css('height','')
      $('.navbar').css('height','')

  }
  // console.log(navlist.style.flexDirection)
  //  console.log(window.devicePixelRatio)
  // if(navlist.scrollHeight>52){

  // //   console.log("row")
  // // }else{

  // }
}
// Add a listener for when the window resizes

const navButtons = document.getElementById('nav-buttons');
const navCaptions = document.querySelectorAll('.but-ref');

navButtons.addEventListener('mouseover',function(){
  // console.log("en")
  $(".but-ref").show();
  navButtons.style.backgroundColor="rgb(255,250,250,0.6)"

})
navButtons.addEventListener('mouseleave',function(){
  
  $(".but-ref").hide();
  navButtons.style.backgroundColor=""
})
window.addEventListener('resize', checkMediaQuery);
checkMediaQuery() 