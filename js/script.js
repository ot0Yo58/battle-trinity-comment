$(document).ready(function() {/*関数宣言だけど、何を宣言してるかわからない[NG]*/
    /*htmlが実行された後に、実行される関数*/
    const slideshowImages = [/* スライドショーに使う画像を４つ配列として定数で宣言 */
        'images/summer1.jpg',
        'images/winter1.jpg',
        'images/summer2.jpg',
        'images/winter2.jpg'
    ];
    let currentImageIndex = 0;/* それぞれの画像に数字をあてがうために変数宣言[maybe] */
    /*currentImageIndexという名前の変数を宣言。*/
    function updateSlideshow() {/* スライドショーの関数宣言 */
        console.log('Fading out image:', slideshowImages[currentImageIndex]);/* どのスライドショーがフェードアウトされたかコンソールに表示させる。[maybe] */
        /*フェードアウトされた画像がどれかコンソールへ表示するよう指定*/
            $('.slideshow').animate({ opacity: 0 }, 2000, 'swing', function() {/* スライドショーにアニメーションを追加する関数 */
            currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;/* slideshowImages.lengthがわからない [NG]*/
            $(this).css('background', `url('${slideshowImages[currentImageIndex]}') no-repeat center/contain`);/* わからない [NG]*/
            console.log('Fading in image:', slideshowImages[currentImageIndex]);/* どのスライドショーがフェードインされたかコンソールに表示させる。いらないかも。[maybe] */
            $(this).animate({ opacity: 1 }, 2000, 'swing', function() {/* わからない [NG]*/
                setTimeout(updateSlideshow, 4000);/* 時間の概念を宣言 [maybe]*/
            });
        });
    }

    
    $('.slideshow').css({/* スライドショーのスタイルシートに変化を加えるための関数宣言 */
        'background': `url('${slideshowImages[0]}') no-repeat center/contain`,/* わからない [NG]*/
        'opacity': 1/* わからない [NG]*/
    });
    currentImageIndex = 1;/* スライドショーをimages/summer1.jpgに指定。これじゃ1が強制的に表示されちゃう？[NG]*/
    setTimeout(updateSlideshow, 4000);/* 時間の概念を宣言 [maybe]*/

    $('.btn').click(function() {/* 参加するをクリックしたときの動作について関数宣言 */
        $(this).css('box-shadow', '0 0 15px #ff4444');
        setTimeout(() => {/* ボタンをフェードアウトさせるための関数だけど、フェードアウトさせないから不要？[maybe] */
            $(this).css('box-shadow', 'none');/* ボタンを消している */
        }, 300);/* 3秒後に消す?300の単位が不明[NG] */
    });
    $('.back-to-top').click(function(e) {/* topボタンをクリックしたときの関数宣言 */
        e.preventDefault();/* わからない [NG]*/
        $('html, body').animate({ scrollTop: $('#home').offset().top }, 500);/* わからない [NG]*/
    });

function checkFormValidity() {/*フォームが関係する関数[maybe]*/

    if ($('#team-name').length === 0) {/* わからない [NG]*/
        return; /* わからない [NG]*/
    }


    const teamName = $('#team-name').val().trim();/* わからない [NG]*/
    const leaderName = $('#leader-name').val().trim();/* わからない [NG]*/
    const member1 = $('#member1').val().trim();/* わからない [NG]*/
    const member2 = $('#member2').val().trim();/* わからない [NG]*/
    const member3 = $('#member3').val().trim();/* わからない [NG]*/
    const member4 = $('#member4').val().trim();/* わからない [NG]*/


    $('#team-name').toggleClass('valid', !!teamName).toggleClass('invalid', !teamName);/* わからない [NG]*/
    $('#leader-name').toggleClass('valid', !!leaderName).toggleClass('invalid', !leaderName);/* わからない [NG]*/
    $('#member1').toggleClass('valid', !!member1).toggleClass('invalid', !member1);/* わからない [NG]*/
    $('#member2').toggleClass('valid', !!member2).toggleClass('invalid', !member2);/* わからない [NG]*/
    $('#member3').toggleClass('valid', !!member3).toggleClass('invalid', !member3);/* わからない [NG]*/
    $('#member4').toggleClass('valid', !!member4).toggleClass('invalid', !member4);/* わからない [NG]*/

    const isValid = teamName && leaderName && member1 && member2 && member3 && member4;/*全部に何かが入力されているか確認している[maybe]*/


    if (isValid) {/* 全部に文字列が入っていたかどうかの分岐文 */
        $('.form-submit').prop('disabled', false);//送信ボタンを有効化
    } else {
        $('.form-submit').prop('disabled', true);//送信ボタンを無効化
    }
}

if ($('#team-name').length > 0) {/* わからない [NG]*/
    $('#team-name, #leader-name, #member1, #member2, #member3, #member4').on('input', checkFormValidity);/* わからない [NG]*/
}

checkFormValidity();/* 関数実行 */

});