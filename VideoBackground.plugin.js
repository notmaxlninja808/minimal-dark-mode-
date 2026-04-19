/**
 * @name Video Background
 * @author 808
 * @description Adds video background to Discord
 * @version 1.0.0
 */

module.exports = class VideoBackground {
    start() {
        // Inject video background
        const video = document.createElement('video');
        video.id = 'video-background';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        Object.assign(video.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: '-1',
            pointerEvents: 'none'
        });
        
        video.src = 'file:///c:/Users/aaron/OneDrive/dc theme/straw-hat-luffy.3840x2160.mp4';
        
        document.body.prepend(video);
        
        // Ensure video plays
        video.play().catch(e => console.log('Video autoplay failed:', e));
    }
    
    stop() {
        const video = document.getElementById('video-background');
        if (video) video.remove();
    }
};
