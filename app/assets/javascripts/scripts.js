var tv ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/offair%20fast_zpsa4xnexhu.gif' id='tv'>";
var offair ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/retro%20offair_zpsp65w34wa.gif' id='offair'>";
var flash = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/neon.jpg_zpsmei4z0zu.gif' id='flash'>"
var logo ="<a href=\"/\" class='animated fadeIn' onClick=\"home();return false;\"><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/headphonesINVERTED2_zpsuu9jvfmc.png' id='logo' class='animated slideInDown'></a>";

var AudioBoyInfo ="<div id='gel'><h2 id='audiopeter' class='animated fadeIn'>Audio Boy = Rebel Solo</h2><h2 id='audiodo' class='animated fadeIn'>Audio Boy = Peter Hahn</h2>"
var PeterHahnInfo ="<div id='gel2'><h2 id='peterdo' class='animated fadeIn'>Peter Hahn = Songwriter/Producer/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSinger/Musician</h2></div>"
var ContactInfo ="<div id='gel4'><h2 id='contactpeter' class='animated fadeIn'>551 689 3517</h2></div>"
var MV ="<iframe class='animated slideInUp' width=\"660\" height=\"415\" src=\"https://www.youtube.com/embed/etAH9IhStBc\" frameborder=\"0\" allowfullscreen></iframe>"
var headshot = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/phat_zpsnq9fh8qf.jpg' class='animated fadeIn' id='photo'>";
var RebelSolo ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/microphone_zps9ae9ume5.gif' class='animated fadeIn' id='RebelSolo'>";
var stuckgraph ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/wonders_zpsitueonqh.gif' class='animated fadeIn' id='stuckgraph'>";
var scene ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/alone_zpsuq76gojr.gif' class='animated fadeIn' id='scene'>";
var circle1 ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/CIRCLE_zps84mtikcr.png' id='circle1'>";
var circle2 ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/CIRCLE_zps84mtikcr.png' id='circle2'>";
var circle3 ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/CIRCLE_zps84mtikcr.png' id='circle3'>";




function home(){
    $('#content').empty();
    $('#video').empty();
    $('#content').append(flash);
}

function AudioBoy(){

    $('#content').empty();
    $('#video').empty();
    $('#content').append(AudioBoyInfo);
}

function PeterHahn(){

    $('#content').empty();
    $('#video').empty();
    $('#content').append(PeterHahnInfo);
    $('#content').append(headshot);
}

function ContactInfor(){

    $('#content').empty();
    $('#video').empty();
    $('#content').append(ContactInfo);
}

function MusicVideo(){
    stuck.stop();
    program.stop();
    micro.stop();
    // $('#content').empty();
    $('#video').empty();
    $('#video').append(MV);
}

function ridmv(){
    $('#video').empty();
}

function play_microphone(){
    var audio = document.getElementById("audio_microphone");
    var audio1 = document.getElementById("audio_stuck");
    var audio2 = document.getElementById("audio_program");
    $('#video').empty();
    program.stop();
    // micro.stop();
    stuck.stop();
    micro.play();
    $('#circle1').remove();
    $('#circle2').remove();
    $('#circle3').remove();
    $('#audioplayer').append(circle3);
    $('#content').empty();
    $('#video').empty();
    $('#content').append(RebelSolo);
}

function pause_microphone(){
    var audio = document.getElementById("audio_microphone");
    $('#video').empty();
    micro.pause();
    $('#content').empty();
    $('#content').append(offair);
}

function stop_microphone(){
    var audio = document.getElementById("audio_microphone");
    $('#video').empty();
    micro.stop();
    $('#circle1').remove();
    // $('#circle2').remove();
    // $('#circle3').remove();
    $('#content').empty();
    $('#content').append(tv);
}

function play_stuck(){
    var audio = document.getElementById("audio_stuck");
    var audio1 = document.getElementById("audio_microphone");
    var audio2 = document.getElementById("audio_program");
    $('#video').empty();
    program.stop();
    // stuck.stop();
    micro.stop();
    stuck.play();
    $('#circle1').remove();
    $('#circle2').remove();
    $('#circle3').remove();
    $('#audioplayer').append(circle2);
    $('#content').empty();
    $('#video').empty();
    $('#content').append(stuckgraph);
}

function pause_stuck(){
    var audio = document.getElementById("audio_stuck");
    $('#video').empty();
    stuck.pause();
    $('#content').empty();
    $('#content').append(offair);
}

function stop_stuck(){
    var audio = document.getElementById("audio_stuck");
    $('#video').empty();
    stuck.stop();
    // $('#circle1').remove();
    $('#circle2').remove();
    // $('#circle3').remove();
    $('#content').empty();
    $('#content').append(tv);
}

function play_program(){
    var audio = document.getElementById("audio_program");
    var audio1 = document.getElementById("audio_stuck");
    var audio2 = document.getElementById("audio_microphone");
    $('#video').empty();
    // program.stop();
    micro.stop();
    stuck.stop();
    program.play();
    $('#circle1').remove();
    $('#circle2').remove();
    $('#circle3').remove();
    $('#audioplayer').append(circle1);
    $('#content').empty();
    $('#video').empty();
    $('#content').append(scene);
}

function pause_program(){
    var audio = document.getElementById("audio_program");
    $('#video').empty();
    program.pause();
    $('#content').empty();
    $('#content').append(offair);
}

function stop_program(){
    var audio = document.getElementById("audio_program");
    program.stop();
    // $('#circle1').remove();
    // $('#circle2').remove();
    $('#circle3').remove();
    $('#content').empty();
    $('#content').append(tv);
}



// function remove_mv(){
//     $('#gel3').remove();
// }
