document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;
    backToTopButton.style.display = 'none';
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
  });
  const button = document.getElementById('expand');
  const iframe = document.getElementById('iframehtml5');
    button.addEventListener('click', function () {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen(); 
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { 
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        } else {
        }
    });
    document.addEventListener('fullscreenchange', function () {
        if (document.fullscreenElement) {
        } else {
        }
    });