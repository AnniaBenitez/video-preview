
console.log("page loaded...");

function playVideo(element){    
    element.currentTime = 0
    element.volume = 0.5
}

function preview(element){
    element.volume = 0
    element.play()    
}

function endPreview(element){
    element.pause()
    element.currentTime = 0
}

