var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event){
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content)
if(Content == "take my selfie"){
console.log ("taking selfie");
speak();
}
document.getElementById("textbox").innerHTML = Content; 
}

function speak(){
var synth = window.speechSynthesis;
speak_data= "taking your selifie in 5 seconds";
var utterthis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();
save();
},5000);

}
camera = document.getElementById("camera");
Webcam.set({
width:900,
height:700,
image_format:'jpeg',
jpeg_quality:100
});



function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
});

}

function save(){
link = document.getElementById("link");
image = document.getElementById("selfie_image").src ;
link.href = image;
link.click();
}