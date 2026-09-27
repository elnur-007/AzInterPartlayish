document.querySelectorAll('.video_container').forEach(el => {
    el.addEventListener('click', () => {
        const videoId = el.dataset.videoId;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        el.innerHTML = '';
        el.appendChild(iframe);
    });
});