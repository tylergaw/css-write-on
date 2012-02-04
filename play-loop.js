// Using JS for two things.
// 1. To add and remove a class of "play" to the text container.
// 2. After the animation plays one time the button text changes and the description is displayed fully.
(function () {
    var playBtn = document.getElementById('play-btn'),
        loopBtn = document.getElementById('loop-btn'),
        el = document.getElementById('write-on'),
        playedOnce = false,
        playClass = 'play',
        loopClass = 'loop';
    
    playBtn.onclick = function () {
        var hasClass = el.classList.contains(playClass);
        
        el.classList.remove(loopClass);
        
        // classList is really great:
        // https://developer.mozilla.org/en/DOM/element.classList
        if (hasClass) {
            el.classList.remove(playClass);
            setTimeout(function () {
                el.classList.add(playClass);
            }, 200);
        } else {
            el.classList.add(playClass);
        }
        
        if (!playedOnce) {
            // Animation events can be super helpful:
            // https://developer.mozilla.org/en/CSS/CSS_animations#section_8
            el.addEventListener('webkitAnimationEnd', function () {
                playBtn.innerHTML = 'Replay';
                playedOnce = true;
                loopBtn.classList.remove('hide');
                document.querySelector('p').classList.add('show');
            });
        }
    };
    
    loopBtn.onclick = function () {
        el.classList.remove(playClass);
        
        if (!el.classList.contains(loopClass)) {
            setTimeout(function () {
                el.classList.add(loopClass);
            }, 200);
        } else {
            el.classList.remove(loopClass);
        }
    };
}());