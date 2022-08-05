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

var cFirstImage = 40;
var cLastImage = 112;
var cIncrement = 6;

var imageSet_c1 = [];
var imageSet_c2 = [];
var imageSet_c3 = [];

// var imageDirAndPrefix_c1 = 'https://www.glerl.noaa.gov/res/HABs_and_Hypoxia/data/erie-clv/hws_archive/'+currentForecastFolder+'/change_map_1_';
// var imageDirAndPrefix_c2 = 'https://www.glerl.noaa.gov/res/HABs_and_Hypoxia/data/erie-clv/hws_archive/'+currentForecastFolder+'/change_map_2_';
// var imageDirAndPrefix_c3 = 'https://www.glerl.noaa.gov/res/HABs_and_Hypoxia/data/erie-clv/hws_archive/'+currentForecastFolder+'/change_map_3_';

var imageDirAndPrefix_c1 = currentForecastFolder+'/change_map_1_';
var imageDirAndPrefix_c2 = currentForecastFolder+'/change_map_2_';
var imageDirAndPrefix_c3 = currentForecastFolder+'/change_map_3_';

var imageExt_c1 = 'png';
var imageExt_c2 = 'png';
var imageExt_c3 = 'png';

var animationContainerID_c1 = 'c1Loop';
var animationContainerID_c2 = 'c2Loop';
var animationContainerID_c3 = 'c3Loop';

var cCurrFrame = 40;
var cCurrInterval = 500; //Milliseconds

var cjsTimer;

var cStartAnim = function(){
	$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
	$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
	$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);	
	
	$('.cLoopManip').click(cAnimationInteraction);
	
	cjsTimer = setInterval(cPlayFunction, cCurrInterval);
}

var cPlayFunction = function(e){
	if(cCurrFrame != cLastImage){
		$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
		$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
		$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
		
		cCurrFrame = cCurrFrame + cIncrement;
		
		$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
		$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
		$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);		
	}
	else{
		$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
		$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
		$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
		
		cCurrFrame = cFirstImage;
		
		$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
		$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
		$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);				
	}
	$('#changeMapSlider').slider("value", cCurrFrame);
}

var cAnimationInteraction = function(b){
	switch($(this).attr('id')){
		case 'firstFrameButton':
			clearInterval(cjsTimer);
			
			$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
			$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
			$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
			
			cCurrFrame = cFirstImage;
			
			$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
			$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
			$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);						
			
			break;
		case 'prevFrameButton':
			clearInterval(cjsTimer);
			if(cCurrFrame != cFirstImage){
				$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
				$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
				$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
				
				cCurrFrame = cCurrFrame - cIncrement;
				
				$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
				$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
				$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);			
			}
			break;
		case 'pauseButton':
			clearInterval(cjsTimer);
			break;
		case 'playButton':
			clearInterval(cjsTimer);
			cjsTimer = setInterval(cPlayFunction, cCurrInterval);
			break;
		case 'nextFrameButton':
			clearInterval(cjsTimer);
			
			if(cCurrFrame != cLastImage){
				$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
				$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
				$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
				
				cCurrFrame = cCurrFrame + cIncrement;
				
				$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
				$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
				$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);			
			}
			
			break;
		case 'lastFrameButton':
			clearInterval(cjsTimer);
			
			$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
			$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
			$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
			
			cCurrFrame = cLastImage;
			
			$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
			$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
			$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);	
			
			break;
		default:
			break;
	}
	$('#changeMapSlider').slider("value", cCurrFrame);
}

var cInitFunction = function(e){
	if(cCurrFrame != cLastImage){
		$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
		$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
		$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
		
		cCurrFrame = cCurrFrame + cIncrement;
		
		$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
		$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
		$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);		
	}
	else{
		$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
		$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
		$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
		
		cCurrFrame = cFirstImage;
		clearInterval(cjsTimer);
		cStartAnim();
	}
	$('#changeMapSlider').slider("value", cCurrFrame);
}

var initAnim = function(){
	
	//for(var j = cFirstImage; j <= cLastImage; j = j + cIncrement){
	//	
	//	if(imageSet_c1[j].naturalHeight == 0){
	//		if((j-1) < 100){
	//			continue;
	//		}
	//		cLastImage = j-cIncrement;
	//		break;
	//	}
	//	
	//	if(imageSet_c2[j].naturalHeight == 0){
	//		cLastImage = j-cIncrement;
	//		break;
	//	}
	//	
	//	if(imageSet_c3[j].naturalHeight == 0){
	//		cLastImage = j-cIncrement;
	//		break;
	//	}		
	//}
	
	$('#changeMapSlider').slider({
		animate: "fast",
		max: cLastImage,
		min: cFirstImage,
		step: cIncrement,
		slide: function(event, ui){
			clearInterval(cjsTimer);
			cCurrFrame = ui.value;
			
			$('#'+animationContainerID_c1).children().remove('.loopFrame_c1');
			$('#'+animationContainerID_c2).children().remove('.loopFrame_c2');
			$('#'+animationContainerID_c3).children().remove('.loopFrame_c3');
			
			$('#'+animationContainerID_c1).append(imageSet_c1[cCurrFrame]);
			$('#'+animationContainerID_c2).append(imageSet_c2[cCurrFrame]);
			$('#'+animationContainerID_c3).append(imageSet_c3[cCurrFrame]);			
		}
	});
	cjsTimer = setInterval(cInitFunction, 1);
}

var loadImages = function(){
	
	cFirstImage = 40;
	cLastImage = 112;
	cIncrement = 6;
	
	imageSet_c1 = [];
	imageSet_c2 = [];
	imageSet_c3 = [];
	
	for(var i = cFirstImage; i <= cLastImage; i = i + cIncrement){
		imageSet_c1[i] = new Image(760, 760);
		imageSet_c2[i] = new Image(760, 760);
		imageSet_c3[i] = new Image(760, 760);
		
		imageSet_c1[i].src = imageDirAndPrefix_c1 + fourDigitStr(i) + '.' + imageExt_c1;
		imageSet_c2[i].src = imageDirAndPrefix_c2 + fourDigitStr(i) + '.' + imageExt_c2;
		imageSet_c3[i].src = imageDirAndPrefix_c3 + fourDigitStr(i) + '.' + imageExt_c3;
		
		imageSet_c1[i].className = 'loopFrame_c1';
		imageSet_c2[i].className = 'loopFrame_c2';
		imageSet_c3[i].className = 'loopFrame_c3';
		
		imageSet_c1[i].alt = 'Synoptic change map frame ' + i.toString() + ' for animation';
		imageSet_c2[i].alt = 'Southwest Erie change map frame ' + i.toString() + ' for animation';
		imageSet_c3[i].alt = 'Southeast Erie change map frame ' + i.toString() + ' for animation';
	}
	
	initAnim();
	
}

