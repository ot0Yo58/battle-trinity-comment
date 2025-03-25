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

/* フォームの入力チェック（フォームが存在するページでのみ実行） */
function checkFormValidity() {
    // フォーム要素が存在するかチェック
    if ($('#team-name').length === 0) {
        return; // フォーム要素がないページでは何もしない
    }

    // 必須項目（テキスト入力のみ）をチェック
    const teamName = $('#team-name').val().trim();
    const leaderName = $('#leader-name').val().trim();
    const member1 = $('#member1').val().trim();
    const member2 = $('#member2').val().trim();
    const member3 = $('#member3').val().trim();
    const member4 = $('#member4').val().trim();

    // 各入力欄の状態を更新
    $('#team-name').toggleClass('valid', !!teamName).toggleClass('invalid', !teamName);
    $('#leader-name').toggleClass('valid', !!leaderName).toggleClass('invalid', !leaderName);
    $('#member1').toggleClass('valid', !!member1).toggleClass('invalid', !member1);
    $('#member2').toggleClass('valid', !!member2).toggleClass('invalid', !member2);
    $('#member3').toggleClass('valid', !!member3).toggleClass('invalid', !member3);
    $('#member4').toggleClass('valid', !!member4).toggleClass('invalid', !member4);

    // すべての必須項目が入力されているか
    const isValid = teamName && leaderName && member1 && member2 && member3 && member4;

    // 送信ボタンの状態を更新
    if (isValid) {
        $('.form-submit').prop('disabled', false);
    } else {
        $('.form-submit').prop('disabled', true);
    }
}

// テキスト入力が変更されるたびにチェック（フォームが存在する場合のみ）
if ($('#team-name').length > 0) {
    $('#team-name, #leader-name, #member1, #member2, #member3, #member4').on('input', checkFormValidity);
}

// ページ読み込み時に初期チェック
checkFormValidity();

});