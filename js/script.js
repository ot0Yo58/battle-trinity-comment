$(document).ready(function() {
    const slideshowImages = [
        'images/summer1.jpg',
        'images/winter1.jpg',
        'images/summer2.jpg',
        'images/winter2.jpg'
    ];
    let currentImageIndex = 0;

    function updateSlideshow() {
        console.log('Fading out image:', slideshowImages[currentImageIndex]);
        $('.slideshow').animate({ opacity: 0 }, 2000, 'swing', function() {
            currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
            $(this).css('background', `url('${slideshowImages[currentImageIndex]}') no-repeat center/contain`);
            console.log('Fading in image:', slideshowImages[currentImageIndex]);
            $(this).animate({ opacity: 1 }, 2000, 'swing', function() {
                setTimeout(updateSlideshow, 4000);
            });
        });
    }

    // 初期画像設定
    $('.slideshow').css({
        'background': `url('${slideshowImages[0]}') no-repeat center/contain`,
        'opacity': 1
    });
    currentImageIndex = 1;
    setTimeout(updateSlideshow, 4000);

    $('.btn').click(function() {
        $(this).css('box-shadow', '0 0 15px #ff4444');
        setTimeout(() => {
            $(this).css('box-shadow', 'none');
        }, 300);
    });
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#home').offset().top }, 500);
    });
});