function changeVideo(videoUrl) {
    const autoplayUrl = `${videoUrl}?autoplay=1`;
    document.getElementById('mainVideo').src = autoplayUrl;
}