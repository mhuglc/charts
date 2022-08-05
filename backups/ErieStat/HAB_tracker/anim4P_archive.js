/*** FRAME BY FRAME ANIMATION SCRIPT ***
**** BASED ON GLCFS SCRIPTS ***
**** USES JQUERY http://www.jquery.com ***/

/*** ASSUMING YOU HAVE A CONTAINER NAMED 'habsLoop'
	 AND YOU HAVE onload="initAnim()"
	 IN YOUR BODY TAG.
	 
	 THIS ALSO ASSUMES YOU HAVE A FRAME MANIPULATION CONTROL 
	 ***INSIDE*** THE habsLoop CONTAINER:
	 
	 <div id="habsLoop" style="position: absolute; top: 550px; right: 5px; width: 566px; height: 446px; border: 1px solid #00AAFF;">
		<div id="habsLoopButtonSet" style="position: absolute; top: 5px; left: 5px;	width: auto; height: 32px; z-index: 99;">
			<button class="loopManip" title="First" id="firstFrameButton">&lt;&lt;</button>
			<button class="loopManip" title="Previous" id="prevFrameButton">&lt;</button>
			<button class="loopManip" title="Pause" id="pauseButton">||</button>
			<button class="loopManip" title="Play" id="playButton">&#9658;</button>
			<button class="loopManip" title="Next" id="nextFrameButton">&gt;</button>
			<button class="loopManip" title="Last" id="lastFrameButton">&gt;&gt;</button>
		</div>
	</div>
	
	RENAME AND ADJUST THE CODE AS DESIRED... 
***/

var threeDigitStr = function(n){
	if(n < 10){
		return('00'+n.toString());		
	}
	else if(n < 100){
		return('0'+n.toString());
	}
	else{
		return(n.toString());
	}
}

var fourDigitStr = function(n){
	if(n < 10){
		return('000'+n.toString());		
	}
	else if(n < 100){
		return('00'+n.toString());
	}
	else if(n < 1000){
		return('0'+n.toString());
	}
	else{
		return(n.toString());
	}
}

// Preload the images as page loads

var firstImage = 1;
var lastImage = 145;
var increment = 1; //can be negative

var imageSet_hab = [];
var imageSet_wnd = [];
var imageSet_wav = [];

var imageDirAndPrefix_hab = currentForecastFolder+'/cast';
var imageDirAndPrefix_wnd = currentForecastFolder+'/ewn';
var imageDirAndPrefix_wav = currentForecastFolder+'/ewv';

var imageExt_hab = 'png';
var imageExt_wnd = 'gif';
var imageExt_wav = 'gif';

var animationContainerID_hab = 'habsLoop';
var animationContainerID_wnd = 'windLoop';
var animationContainerID_wav = 'waveLoop';

var currFrame = 1;
var currInterval = 500; //Milliseconds

var jsTimer;

var startAnim = function(){
	$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
	$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
	$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);
	
 	$('.loopManip').click(animationInteraction);
	
	jsTimer = setInterval(playFunction, currInterval);
}

var playFunction = function(e){
	if(currFrame != lastImage){
		$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
		$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
		$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
		
		currFrame++;
		
		$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
		$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
		$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);		
	}
	else{
		$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
		$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
		$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
		
		currFrame = firstImage;
		
		$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
		$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
		$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);		
	}
	$('#habsLoopSlider').slider("value", currFrame);
}

var animationInteraction = function(b){
	switch($(this).attr('id')){
		case 'firstFrameButton':
			clearInterval(jsTimer);
			
			$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
			$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
			$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
			
			currFrame = firstImage;
			
			$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
			$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
			$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);						
			
			break;
		case 'prevFrameButton':
			clearInterval(jsTimer);
			if(currFrame != firstImage){
				$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
				$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
				$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
				
				currFrame--;
				
				$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
				$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
				$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);			
			}
			break;
		case 'pauseButton':
			clearInterval(jsTimer);
			break;
		case 'playButton':
			clearInterval(jsTimer);
			jsTimer = setInterval(playFunction, currInterval);
			break;
		case 'nextFrameButton':
			clearInterval(jsTimer);
			
			if(currFrame != lastImage){
				$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
				$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
				$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
				
				currFrame++;
				
				$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
				$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
				$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);			
			}
			
			break;
		case 'lastFrameButton':
			clearInterval(jsTimer);
			
			$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
			$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
			$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
			
			currFrame = lastImage;
			
			$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
			$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
			$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);	
			
			break;
		default:
			break;
	}
	$('#habsLoopSlider').slider("value", currFrame);
}

var initFunction = function(e){
	if(currFrame != lastImage){
		$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
		$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
		$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
		
		currFrame++;
		
		$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
		$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
		$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);		
	}
	else{
		$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
		$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
		$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
		
		currFrame = firstImage;
		clearInterval(jsTimer);
		startAnim();
	}
	$('#habsLoopSlider').slider("value", currFrame);
}


var initAnim = function(){
	
	for(var j = firstImage; j <= lastImage; j = j + increment){
		
		if(imageSet_hab[j].naturalHeight == 0){
			if((j-1) < 100){
				continue;
			}
			lastImage = j-1;
			break;
		}
		
		if(imageSet_wnd[j].naturalHeight == 0){
			if((j-1) < 100){
				continue;
			}
			lastImage = j-1;
			break;
		}
		
		if(imageSet_wav[j].naturalHeight == 0){
			if((j-1) < 100){
				continue;
			}
			lastImage = j-1;
			break;
		}
		
	}
	
	$('#habsLoopSlider').slider({
		animate: "fast",
		max: lastImage,
		min: 1,
		slide: function(event, ui){
			clearInterval(jsTimer);
			currFrame = ui.value;
			
			$('#'+animationContainerID_hab).children().remove('.loopFrame_hab');
			$('#'+animationContainerID_wnd).children().remove('.loopFrame_wnd');
			$('#'+animationContainerID_wav).children().remove('.loopFrame_wav');
			
			$('#'+animationContainerID_hab).append(imageSet_hab[currFrame]);
			$('#'+animationContainerID_wnd).append(imageSet_wnd[currFrame]);
			$('#'+animationContainerID_wav).append(imageSet_wav[currFrame]);			
		}
	});
	jsTimer = setInterval(initFunction, 1);
}

var loadImages = function(){
	firstImage = 1;
	lastImage = 145;
	
	imageSet_hab = [];
	imageSet_wnd = [];
	imageSet_wav = [];
	
	for(var i = firstImage; i <= lastImage; i = i + increment){
		imageSet_hab[i] = new Image(460, 363);
		imageSet_wnd[i] = new Image(460, 363);
		imageSet_wav[i] = new Image(460, 363);
		
		imageSet_hab[i].src = imageDirAndPrefix_hab + threeDigitStr(i) + '.' + imageExt_hab;
		imageSet_wnd[i].src = imageDirAndPrefix_wnd + fourDigitStr(i-1) + '.' + imageExt_wnd;
		imageSet_wav[i].src = imageDirAndPrefix_wav + fourDigitStr(i-1) + '.' + imageExt_wav;
		
		imageSet_hab[i].className = 'loopFrame_hab';
		imageSet_wnd[i].className = 'loopFrame_wnd';
		imageSet_wav[i].className = 'loopFrame_wav';
		
		imageSet_hab[i].alt = 'HAB Frame ' + i.toString() + ' for animation';
		imageSet_wnd[i].alt = 'Wind Frame ' + i.toString() + ' for animation';
		imageSet_wav[i].alt = 'Wave Frame ' + i.toString() + ' for animation';
	}	
	
	initAnim();
	
}

