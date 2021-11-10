var _0xa8a2 = ['audioPlayer1', 'audioDrag', 'audioDragContainer', 'audioDragger', 'offsetWidth', '#myCarousel', 'next', '.backBtn', 'disabled', 'carousel', 'click', '.reloadBtnScreen', '.showAnsBtn', '.helpBtn', '.helpPopup', 'show', '.resourseBtn', 'pause', '.resoursePopup', '.resoursePopup\x20.closeBtn', 'play', 'hide', '.helpPopup\x20.closeBtn', 'body', 'unselectable', 'user-select', 'selectstart\x20dragstart', '.pageContent,\x20.resourseContainer,\x20.helpContainer', 'css', 'height', '.pageBg', '.page_content', 'resize', 'debounce', '#container', 'width', 'scaleX', 'scaleY', 'scale', 'attr', 'style', '-webkit-transform:scale(', ');left:', 'px;top:', 'px;', 'getElementById'];
(function(_0x481822, _0x2f8439) {
    var _0x1a11bf = function(_0x219858) {
        while (--_0x219858) {
            _0x481822['push'](_0x481822['shift']());
        }
    };
    _0x1a11bf(++_0x2f8439);
}(_0xa8a2, 0x101));
var _0x388d = function(_0x121e6a, _0x55ba13) {
    _0x121e6a = _0x121e6a - 0x0;
    var _0x4b2675 = _0xa8a2[_0x121e6a];
    return _0x4b2675;
};
$(_0x388d('0x0'))[_0x388d('0x1')](_0x388d('0x2'), 0x3c0 * 0x4a / 0x64 + 0xf + 'px');
$(_0x388d('0x3'))[_0x388d('0x1')](_0x388d('0x2'), 0x3c0 * 0x4a / 0x64 + 'px');
$('.header,\x20.footer')[_0x388d('0x1')](_0x388d('0x2'), 0x3c0 * 0xd / 0x64 + 'px');
var pageWidth, pageHeight;
var basePage = {
    'width': 0x500,
    'height': 0x3c0,
    'scale': 0x1,
    'scaleX': 0x1,
    'scaleY': 0x1
};
$(function() {
    var _0x48c414 = $(_0x388d('0x4'));
    _0x13bcfe();
    _0x11605a(_0x48c414, pageWidth, pageHeight);
    $(window)[_0x388d('0x5')](_[_0x388d('0x6')](function() {
        _0x13bcfe();
        _0x11605a(_0x48c414, pageWidth, pageHeight);
    }, 0x96));
    function _0x13bcfe() {
        pageHeight = $(_0x388d('0x7'))[_0x388d('0x2')]();
        pageWidth = $(_0x388d('0x7'))['width']();
    }
    function _0x11605a(_0x35b31b, _0x3165af, _0x5dadfa) {
        var _0x534f4d = 0x1
          , _0x543ddf = 0x1;
        _0x534f4d = _0x3165af / basePage[_0x388d('0x8')];
        _0x543ddf = _0x5dadfa / basePage[_0x388d('0x2')];
        basePage[_0x388d('0x9')] = _0x534f4d;
        basePage[_0x388d('0xa')] = _0x543ddf;
        basePage[_0x388d('0xb')] = _0x534f4d > _0x543ddf ? _0x543ddf : _0x534f4d;
        var _0x30f2c7 = Math['abs'](Math['floor']((basePage['width'] * basePage['scale'] - _0x3165af) / 0x2));
        var _0x36dacc = 0x0;
        _0x35b31b[_0x388d('0xc')](_0x388d('0xd'), _0x388d('0xe') + basePage['scale'] + _0x388d('0xf') + _0x30f2c7 + _0x388d('0x10') + _0x36dacc + _0x388d('0x11'));
    }
});
var courseDetails;
var currPage = 0x0;
var music1 = document[_0x388d('0x12')](_0x388d('0x13'));
var audioDuration;
var pButton = document[_0x388d('0x12')]('pButton');
var playhead = document[_0x388d('0x12')](_0x388d('0x14'));
var timeline = document['getElementById'](_0x388d('0x15'));
var dragArea = document[_0x388d('0x12')](_0x388d('0x16'));
var timelineWidth = timeline[_0x388d('0x17')] - playhead[_0x388d('0x17')];
var onplayhead = !![];
function fnNext() {
    if ($('.nextBtn')['hasClass']('disabled')) {
        return ![];
    }
    $(_0x388d('0x18'))['carousel'](_0x388d('0x19'));
}
function fnBack() {
    if ($(_0x388d('0x1a'))['hasClass'](_0x388d('0x1b'))) {
        return ![];
    }
    $(_0x388d('0x18'))[_0x388d('0x1c')]('prev');
}
$(function() {
    $(_0x388d('0x1a'))['on'](_0x388d('0x1d'), fnBack);
    $('.nextBtn')['on']('click', fnNext);
    $('.reloadBtnAll')['on'](_0x388d('0x1d'), fnReloadAll);
    $(_0x388d('0x1e'))['on'](_0x388d('0x1d'), fnReloadScreen);
    $(_0x388d('0x1f'))['on'](_0x388d('0x1d'), showAns);
    $(_0x388d('0x20'))['on'](_0x388d('0x1d'), function() {
        if (lastAudio == 0x1) {
            $audio1[0x0]['pause']();
        }
        if (lastAudio == 0x2) {
            $audio2[0x0]['pause']();
        }
        $(_0x388d('0x21'))[_0x388d('0x22')]();
    });
    $(_0x388d('0x23'))['on'](_0x388d('0x1d'), function() {
        if (lastAudio == 0x1) {
            $audio1[0x0][_0x388d('0x24')]();
        }
        if (lastAudio == 0x2) {
            $audio2[0x0][_0x388d('0x24')]();
        }
        $(_0x388d('0x25'))[_0x388d('0x22')]();
    });
    $(_0x388d('0x26'))['on']('click', function() {
        if (lastAudio == 0x1 && !isMusic1Playing) {
            $audio1[0x0][_0x388d('0x27')]();
        }
        if (lastAudio == 0x2) {
            $audio2[0x0][_0x388d('0x27')]();
        }
        $(_0x388d('0x25'))[_0x388d('0x28')]();
    });
    $(_0x388d('0x29'))['on'](_0x388d('0x1d'), function() {
        if (lastAudio == 0x1 && !isMusic1Playing) {
            $audio1[0x0][_0x388d('0x27')]();
        }
        if (lastAudio == 0x2) {
            $audio2[0x0][_0x388d('0x27')]();
        }
        $(_0x388d('0x21'))['hide']();
    });
    $(_0x388d('0x2a'))[_0x388d('0xc')](_0x388d('0x2b'), 'on')['css'](_0x388d('0x2c'), 'none')['on'](_0x388d('0x2d'), ![]);
});
