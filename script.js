const coins = ['b_r', 'b_h', 'b_b', 'b_q', 'b_k', 'b_p', 'w_r', 'w_h', 'w_b', 'w_q', 'w_k', 'w_p'];
const black_coins = ['b_r', 'b_h', 'b_b', 'b_q', 'b_k', 'b_p'];
const white_coins = ['w_r', 'w_h', 'w_b', 'w_q', 'w_k', 'w_p'];
const coins_codes = {
    'w_r': '&#9814;',
    'w_h': '&#9816;',
    'w_b': '&#9815;',
    'w_q': '&#9813;',
    'w_k': '&#9812;',
    'w_p': '&#9817;',
    'b_r': '&#9820;',
    'b_h': '&#9822;',
    'b_b': '&#9821;',
    'b_q': '&#9819;',
    'b_k': '&#9818;',
    'b_p': '&#9823;'
};
var possibleposi = [];
var possibleattack = [];
var position, coin_clicked;
var movedcoin;
var lastClick = 0;
var delay = 2000;
var pre_clk;
var pre_pos;
var coin_clicked;
var position;
var move_coins = [];
var move_position = [];
var cut = false;
var undo;
var attack;
var firstmove = true;

$(document).ready(function () {
    $('.container-board').css({
        'transform': 'rotate(180deg)',
        'transition': '2s all'
    });
    $('td>p').css({
        'transform': 'rotate(180deg)',
        'transition': '3s all'
    });


    /*$('#premove').click(function () {
    let len = move_coins.length
    var last_clicked = move_coins[len - 1];
    var last_position = move_position[len - 1];
    var current_clicked = move_coins[len - 2];
    var current_position = move_position[len - 2];
    var pre_code = coins_codes[last_clicked];
    var current_code = coins_codes[current_clicked];
    $('#' + last_position).children(0).html(pre_code).data("coinname", last_clicked)
    if (!cut) {
        $('#' + position).children(0).html("").data("coinname", "");
        undo = true;
    }

    if (attack) {
        $('#' + position).children(0).html(current_code).data("coinname", current_clicked);
        attack = false;
        cut = true;
        undo = true;
    }

    return;
})*/


    $('td').click(function () {
        var a = b = c = d = e = f = g = h = j = k = l = m = n = o = p = q = r = s = t = u = v = w = x = y = z = true;
        var queen = [];
        var w_q_Att = [];
        var b_q_Att = [];
        var rook = [];
        var w_r_Att = [];
        var b_r_Att = [];
        var bishop = [];
        var w_b_Att = [];
        var b_b_Att = [];


        $('td').each(function () {
            $(this).css("background-color", "")
        })
        coin_clicked = $(this).children(0).data("coinname");
        position = $(this).data('position');
        if (firstmove == true) {

            if (white_coins.includes(coin_clicked)) {
                firstmove = false;
            }

            if (!white_coins.includes(coin_clicked)) {
                alert('White Starts First')
                return;
            }
        }
        if (black_coins.includes(coin_clicked)) {
            if (movedcoin == "b" && !possibleattack.includes(position) && !undo) {
                if (lastClick >= (Date.now() - delay)) {
                    return;
                } else {
                    lastClick = Date.now();
                    $('.warning').animate({
                        opacity: "1",
                        right: "110px",
                        bottom: "40vh"
                    }, 1500);
                    $('.warning').animate({
                        opacity: "0",
                        right: "70px",
                        bottom: "50vh"
                    }, 1);
                    undo = false;
                    return;
                }
            }
        }
        if (white_coins.includes(coin_clicked)) {
            if (movedcoin == "w" && !possibleattack.includes(position) && !undo) {
                if (lastClick >= (Date.now() - delay)) {
                    return;
                } else {
                    lastClick = Date.now();
                    $('.warning').animate({
                        opacity: "1",
                        right: "110px",
                        bottom: "60vh"
                    }, 1500);
                    $('.warning').animate({
                        opacity: "0",
                        right: "70px",
                        bottom: "50vh"
                    }, 1);
                    undo = false;
                    return;
                }
            }
        }


        if (black_coins.includes(coin_clicked)) {
            var pre_move = 'black';
        }
        if (white_coins.includes(coin_clicked)) {
            var pre_move = 'white';
        }

        for (i = 1; i <= 8; i++) {
            if (a == true) {
                var diaRigDwnIdTem = position - (9 * i);
                var value = diaRigDwnIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && g) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_b_Att.push(value)
                        g = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && h) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_b_Att.push(value)
                        h = false;
                    }
                }
                var lastNum = ((value / 10).toString().split('.')[1]);
                if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                    var diaRigDwnId = value;
                } else {
                    a = false;
                }
            }
            if (b == true) {
                var diaRigUpIdTem = position + (11 * i);
                var value = diaRigUpIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && j) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_b_Att.push(value)
                        j = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && k) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_b_Att.push(value)
                        k = false;
                    }
                }
                var lastNum = ((value / 10).toString().split('.')[1]);
                if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                    var diaRigUpId = value;
                } else {
                    b = false;
                }
            }
            if (c == true) {
                var diaLefDwnIdTem = position - (11 * i);
                var value = diaLefDwnIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && l) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_b_Att.push(value)
                        l = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && m) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_b_Att.push(value)
                        m = false;
                    }
                }
                var lastNum = ((value / 10).toString().split('.')[1]);
                if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                    var diaLefDwnId = value;
                } else {
                    c = false;
                }
            }
            if (d == true) {
                var diaLefUpIdTem = position + (9 * i);
                var value = diaLefUpIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && n) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_b_Att.push(value)
                        n = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && o) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_b_Att.push(value)
                        o = false;
                    }
                }
                var lastNum = ((value / 10).toString().split('.')[1]);
                if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                    var diaLefUpId = value;
                } else {
                    d = false;
                }
            }
            if (e == true) {
                var strUpIdTem = position + (10 * i);
                var value = strUpIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && p) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_r_Att.push(value)
                        p = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && q) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_r_Att.push(value)
                        q = false;
                    }
                }
                if (value >= 11 && value <= 88 && !flag) {
                    var strUpId = value;
                } else {
                    e = false;
                }
            }
            if (f == true) {
                var strDwnIdTem = position - (10 * i);
                var value = strDwnIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && r) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_r_Att.push(value)
                        r = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && s) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_r_Att.push(value)
                        s = false;
                    }
                }
                if (value >= 11 && value <= 88 && !flag) {
                    var strDwnId = value;
                } else {
                    f = false;
                }
            }
            if (t == true) {
                var strleftIdTem = position - i;
                var value = strleftIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && v) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_r_Att.push(value)
                        v = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && w) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_r_Att.push(value)
                        w = false;
                    }
                }
                var lastNum = ((value / 10).toString().split('.')[1]);
                if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                    var strleftId = value;
                } else {
                    t = false;
                }
            }
            if (u == true) {
                var strRightIdTem = position + i;
                var value = strRightIdTem;
                var id_in = $("#" + value).children(0).data('coinname');
                var flag = coins.includes(id_in);

                if (white_coins.includes(coin_clicked) && x) {
                    if (black_coins.includes(id_in)) {
                        w_q_Att.push(value)
                        w_r_Att.push(value)
                        x = false;
                    }
                }
                if (black_coins.includes(coin_clicked) && y) {
                    if (white_coins.includes(id_in)) {
                        b_q_Att.push(value)
                        b_r_Att.push(value)
                        y = false;
                    }
                }
                var lastNum = ((value / 10).toString().split('.')[1]);
                if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                    var strRightId = value;
                } else {
                    u = false;
                }
            }
            var queenPosi = queen.push(diaLefDwnId, diaLefUpId, diaRigDwnId, diaRigUpId, strDwnId, strUpId, strleftId, strRightId);
            var rookPosi = rook.push(strDwnId, strUpId, strleftId, strRightId);
            var bishopPosi = bishop.push(diaLefDwnId, diaLefUpId, diaRigDwnId, diaRigUpId)
        }
        if (possibleposi.includes(position)) {
            let code = coins_codes[pre_clk]
            $('#' + pre_pos).children(0).html("").data("coinname", "")
            $('#' + position).children(0).html(code).data("coinname", pre_clk)
            movedcoin = pre_clk.substr(0, 1);
            let audio = new Audio("move.wav");
            audio.play();
            possibleposi = [];
            possibleattack = [];
            move_coins.push(pre_clk);
            move_position.push(pre_pos);
            check(coin_clicked);

            if (pre_clk == 'w_p') {
                if (position < 19 && position > 10) {
                    $('.pawn-change-w').css('display', 'block');
                    pawn_pos = position;
                }
            }
            if (pre_clk == 'b_p') {
                if (position < 89 && position > 80) {
                    $('.pawn-change-b').css('display', 'block');
                    pawn_pos = position;
                }
            }

            if (movedcoin == 'w') {

                $('.container-board').css({
                    'transform': 'rotate(0deg)',
                    'transition': '0.5s all'
                });
                $('td>p').css({
                    'transform': 'rotate(0deg)',
                    'transition': '0.5s all'
                });
            }

            if (movedcoin == 'b') {

                $('.container-board').css({
                    'transform': 'rotate(180deg)',
                    'transition': '0.5s all'
                });
                $('td>p').css({
                    'transform': 'rotate(180deg)',
                    'transition': '0.5s all'
                });
            }
        }

        if (possibleattack.includes(position)) {
            let code = coins_codes[pre_clk]
            $('#' + pre_pos).children(0).html("").data("coinname", "");
            $('#' + position).children(0).html(code).data("coinname", pre_clk);
            movedcoin = pre_clk.substr(0, 1);
            let audio = new Audio("cut.wav");
            audio.play();
            possibleposi = [];
            possibleattack = [];
            check(coin_clicked);
            move_coins.push(pre_clk);
            move_position.push(pre_pos);
            attack = true;
            if (coin_clicked == 'w_k') {
                $('.black_win').show();
                $('.win_gif').show();
                let audio = new Audio("win.wav");
                audio.play();
            }

            if (coin_clicked == 'b_k') {
                $('.white_win').show();
                $('.win_gif').show();
                let audio = new Audio("win.wav");
                audio.play();
            }
            if (pre_clk == 'w_p') {
                if (position < 19 && position > 10) {
                    $('.pawn-change-w').show();
                    pawn_pos = position;
                }
            }
            if (pre_clk == 'b_p') {
                if (position < 89 && position > 80) {
                    $('.pawn-change-b').show();
                    pawn_pos = position;
                }
            }
            if (movedcoin == 'w') {

                $('.container-board').css({
                    'transform': 'rotate(0deg)',
                    'transition': '0.5s all'
                });
                $('td>p').css({
                    'transform': 'rotate(0deg)',
                    'transition': '0.5s all'
                });
            }

            if (movedcoin == 'b') {

                $('.container-board').css({
                    'transform': 'rotate(180deg)',
                    'transition': '0.5s all'
                });
                $('td>p').css({
                    'transform': 'rotate(180deg)',
                    'transition': '0.5s all'
                });
            }

        } else {
            possibleposi = [];
            possibleattack = [];
            $(this).css("background-color", "#86f37c")
            if (coin_clicked == 'w_p') {
                let id1 = position - 9;
                let id2 = position - 11;
                let id1_in = $('#' + id1).children(0).data('coinname');
                let id2_in = $('#' + id2).children(0).data('coinname');
                if (black_coins.includes(id1_in)) {
                    possibleattack.push(id1);
                }
                if (black_coins.includes(id2_in)) {
                    possibleattack.push(id2);
                }
                if (position < 79 && position > 70) {
                    let id1 = position - 10;
                    let id2 = position - 20;
                    let id1_in = $('#' + id1).children(0).data('coinname');
                    let id2_in = $('#' + id2).children(0).data('coinname');
                    if (!coins.includes(id1_in)) {
                        possibleposi.push(id1);
                    }
                    if (!coins.includes(id2_in)) {
                        possibleposi.push(id2);
                    }
                } else {
                    let id = position - 10;
                    let id_in = $('#' + id).children(0).data('coinname');
                    if (!coins.includes(id_in)) {
                        possibleposi.push(id);
                    }
                }
            } else if (coin_clicked == 'b_p') {
                let id1 = position + 9;
                let id2 = position + 11;
                let id1_in = $('#' + id1).children(0).data('coinname');
                let id2_in = $('#' + id2).children(0).data('coinname');
                if (white_coins.includes(id1_in)) {
                    possibleattack.push(id1);
                }
                if (white_coins.includes(id2_in)) {
                    possibleattack.push(id2);
                }
                if (position < 29 && position > 20) {
                    let id1 = position + 10;
                    let id2 = position + 20;
                    let id1_in = $('#' + id1).children(0).data('coinname');
                    let id2_in = $('#' + id2).children(0).data('coinname');
                    if (!coins.includes(id1_in)) {
                        possibleposi.push(id1);
                    }
                    if (!coins.includes(id2_in)) {
                        possibleposi.push(id2);
                    }
                } else {
                    let id = position + 10;
                    let id_in = $('#' + id).children(0).data('coinname');
                    if (!coins.includes(id_in)) {
                        possibleposi.push(id);
                    }
                }
            } else if (coin_clicked == 'w_q') {

                for (i = 0; i < queen.length; i++) {
                    possibleposi.push(queen[i]);
                }
                for (i = 0; i < w_q_Att.length; i++) {
                    possibleattack.push(w_q_Att[i]);
                }
            } else if (coin_clicked == 'b_q') {

                for (i = 0; i < queen.length; i++) {
                    possibleposi.push(queen[i]);
                }
                for (i = 0; i < b_q_Att.length; i++) {
                    possibleattack.push(b_q_Att[i]);
                }
            } else if (coin_clicked == 'w_r') {

                for (i = 0; i < rook.length; i++) {
                    possibleposi.push(rook[i]);
                }
                for (i = 0; i < w_r_Att.length; i++) {
                    possibleattack.push(w_r_Att[i]);
                }
            } else if (coin_clicked == 'b_r') {

                for (i = 0; i < rook.length; i++) {
                    possibleposi.push(rook[i]);
                }
                for (i = 0; i < b_r_Att.length; i++) {
                    possibleattack.push(b_r_Att[i]);
                }
            } else if (coin_clicked == 'w_b') {

                for (i = 0; i < bishop.length; i++) {
                    possibleposi.push(bishop[i]);
                }
                for (i = 0; i < w_b_Att.length; i++) {
                    possibleattack.push(w_b_Att[i]);
                }
            } else if (coin_clicked == 'b_b') {

                for (i = 0; i < bishop.length; i++) {
                    possibleposi.push(bishop[i]);
                }
                for (i = 0; i < b_b_Att.length; i++) {
                    possibleattack.push(b_b_Att[i]);
                }
            } else if (coin_clicked == 'w_k') {
                var allposi = [(position + 1), (position - 1), (position + 10), (position - 10), (position + 9), (position - 9), (position + 11), (position - 11)];
                for (i = 0; i < allposi.length; i++) {
                    var id_in = $("#" + allposi[i]).children(0).data('coinname');
                    if (black_coins.includes(id_in)) {
                        possibleattack.push(allposi[i]);
                    }
                    if (!coins.includes(id_in)) {
                        possibleposi.push(allposi[i]);
                    }
                }

            } else if (coin_clicked == 'b_k') {
                var allposi = [(position + 1), (position - 1), (position + 10), (position - 10), (position + 9), (position - 9), (position + 11), (position - 11)];
                for (i = 0; i < allposi.length; i++) {
                    var id_in = $("#" + allposi[i]).children(0).data('coinname');
                    if (white_coins.includes(id_in)) {
                        possibleattack.push(allposi[i]);
                    }
                    if (!coins.includes(id_in)) {
                        possibleposi.push(allposi[i]);
                    }
                }
            } else if (coin_clicked == 'w_h') {
                var allposi = [(position + 21), (position - 21), (position + 19), (position - 19), (position + 8), (position - 8), (position + 12), (position - 12)];
                for (i = 0; i < allposi.length; i++) {
                    var id_in = $("#" + allposi[i]).children(0).data('coinname');
                    if (black_coins.includes(id_in)) {
                        possibleattack.push(allposi[i]);
                    }
                    if (!coins.includes(id_in)) {
                        possibleposi.push(allposi[i]);
                    }
                }
            } else if (coin_clicked == 'b_h') {
                var allposi = [(position + 21), (position - 21), (position + 19), (position - 19), (position + 8), (position - 8), (position + 12), (position - 12)];
                for (i = 0; i < allposi.length; i++) {
                    var id_in = $("#" + allposi[i]).children(0).data('coinname');
                    if (white_coins.includes(id_in)) {
                        possibleattack.push(allposi[i]);
                    }
                    if (!coins.includes(id_in)) {
                        possibleposi.push(allposi[i]);
                    }
                }

            }
            for (i = 0; i < possibleposi.length; i++) {
                $('#' + possibleposi[i]).css("background-color", "#77fd8559")
            }
            for (i = 0; i < possibleattack.length; i++) {
                $('#' + possibleattack[i]).css("background-color", "#f9878780")
            }
        }

        pre_clk = coin_clicked;
        pre_pos = position;
    });


    $('.pawn-change-w td').click(function () {
        choosed_coin = $(this).data("coinname")
        let code = coins_codes[choosed_coin];
        $('#' + pawn_pos).children(0).html(code).data("coinname", choosed_coin);
        $('.pawn-change-w').hide();
    });
    $('.pawn-change-b td').click(function () {
        choosed_coin = $(this).data("coinname")
        let code = coins_codes[choosed_coin];
        $('#' + pawn_pos).children(0).html(code).data("coinname", choosed_coin);
        $('.pawn-change-b').hide();
    });

});



function blackCheck(coin_clicked) {
    //    if (black_coins.includes(coin_clicked)) {
    $('#check').css({
        display: "block"
    });
    setTimeout(function () {
        $('#check').css({
            display: "none"
        })
    }, 1500)
    let audio = new Audio("check.wav");
    audio.play();
    //    }
}

function whiteCheck(coin_clicked) {
    //    if (white_coins.includes(coin_clicked)) {
    $('#check').css({
        display: "block"
    });
    setTimeout(function () {
        $('#check').css({
            display: "none"
        })
    }, 1500)
    let audio = new Audio("check.wav");
    audio.play();
    //    }
}

function check(coin_clicked) {
    var kingArr = [];
    var kingPos = [];
    $('td').each(function () {
        var coin = $(this).children(0).data("coinname");
        var kingPlace = $(this).data('position');
        if (coin == "w_k" || coin == "b_k") {
            kingPos.push(kingPlace)
        }
    });
    var kingPos1 = kingPos[0]
    var kingPos2 = kingPos[1]
    for (var part = 0; part < 64; part++) {
        var w_q_Arr = [];
        var b_q_Arr = [];
        var w_r_Arr = [];
        var b_r_Arr = [];
        var w_b_Arr = [];
        var b_b_Arr = [];
        var w_h_Arr = [];
        var b_h_Arr = [];
        var w_p_Arr = [];
        var b_p_Arr = [];
        var selected_coin, coin_place;
        var a = b = c = d = e = f = g = h = j = k = l = m = n = o = p = q = r = s = t = u = v = w = x = y = z = aa = ab = ac = ad = ae = af = ag = ah = ai = true;
        selected_coin = $('td').eq(part).children(0).data("coinname");
        coin_place = $('td').eq(part).data('position');
        if (selected_coin == "") {
            continue;
        } else if (selected_coin == "w_h" || selected_coin == "b_h") {
            for (i = 1; i <= 8; i++) {
                var blackHorse = [(coin_place + 21), (coin_place - 21), (coin_place + 19), (coin_place - 19), (coin_place + 8), (coin_place - 8), (coin_place + 12), (coin_place - 12)];
                var value = blackHorse[i];
                var id_in = $("#" + value).children(0).data('coinname');
                if (id_in == "" || id_in == undefined) {
                    continue;
                }
                if (white_coins.includes(selected_coin)) {
                    if (black_coins.includes(id_in)) {
                        w_h_Arr.push(value)
                    }
                }
                if (black_coins.includes(selected_coin)) {
                    if (white_coins.includes(id_in)) {
                        b_h_Arr.push(value)
                    }
                }
                if (selected_coin == "w_h") {
                    if (w_h_Arr.includes(kingPos1) || w_h_Arr.includes(kingPos2)) {
                        blackCheck(coin_clicked);
                        return;
                    }
                } else if (selected_coin == "b_h") {
                    if (b_h_Arr.includes(kingPos1) || b_h_Arr.includes(kingPos2)) {
                        whiteCheck(coin_clicked);
                        return;
                    }
                }
            }
        } else if (selected_coin == "b_p") {
            for (i = 0; i < 2; i++) {
                var blackPawn = [coin_place + 11, coin_place + 9];
                var value = blackPawn[i];
                var id_in = $("#" + value).children(0).data('coinname');
                if (id_in == undefined || id_in == "") {
                    continue;
                }
                if (black_coins.includes(selected_coin)) {
                    if (white_coins.includes(id_in)) {
                        b_p_Arr.push(value)
                    }
                }
                if (selected_coin == "b_p") {
                    if (b_p_Arr.includes(kingPos1)) {
                        whiteCheck(coin_clicked);
                        return;
                    } else if (b_p_Arr.includes(kingPos2)) {
                        whiteCheck(coin_clicked);
                        return;
                    }
                }
            }
        } else if (selected_coin == "w_p") {
            for (i = 0; i < 2; i++) {
                var whitePawn = [coin_place - 11, coin_place - 9];
                var value = whitePawn[i];
                var id_in = $("#" + value).children(0).data('coinname');
                if (id_in == undefined || id_in == "") {
                    continue;
                }
                if (white_coins.includes(selected_coin)) {
                    if (black_coins.includes(id_in)) {
                        w_p_Arr.push(value)
                    }
                }
                if (selected_coin == "w_p") {
                    if (w_p_Arr.includes(kingPos1)) {
                        blackCheck(coin_clicked);
                        return;
                    } else if (w_p_Arr.includes(kingPos2)) {
                        blackCheck(coin_clicked);
                        return;
                    }
                }
            }
        } else if (selected_coin == "w_q" || selected_coin == "w_b" || selected_coin == "w_r" || selected_coin == "b_q" || selected_coin == "b_r" || selected_coin == "b_b") {
            for (i = 1; i <= 8; i++) {
                if (a == true) {
                    var diaRigDwnIdTem = coin_place - (9 * i);
                    var value = diaRigDwnIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && g) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_b_Arr.push(value)
                            g = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && h) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_b_Arr.push(value)
                            h = false;
                        }
                    }
                    var lastNum = ((value / 10).toString().split('.')[1]);
                    if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                        var diaRigDwnId = value;
                    } else {
                        a = false;
                    }
                }
                if (b == true) {
                    var diaRigUpIdTem = coin_place + (11 * i);
                    var value = diaRigUpIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && j) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_b_Arr.push(value)
                            j = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && k) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_b_Arr.push(value)
                            k = false;
                        }
                    }
                    var lastNum = ((value / 10).toString().split('.')[1]);
                    if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                        var diaRigUpId = value;
                    } else {
                        b = false;
                    }
                }
                if (c == true) {
                    var diaLefDwnIdTem = coin_place - (11 * i);
                    var value = diaLefDwnIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && l) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_b_Arr.push(value)
                            l = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && m) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_b_Arr.push(value)
                            m = false;
                        }
                    }
                    var lastNum = ((value / 10).toString().split('.')[1]);
                    if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                        var diaLefDwnId = value;
                    } else {
                        c = false;
                    }
                }
                if (d == true) {
                    var diaLefUpIdTem = coin_place + (9 * i);
                    var value = diaLefUpIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && n) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_b_Arr.push(value)
                            n = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && o) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_b_Arr.push(value)
                            o = false;
                        }
                    }
                    var lastNum = ((value / 10).toString().split('.')[1]);
                    if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                        var diaLefUpId = value;
                    } else {
                        d = false;
                    }
                }
                if (e == true) {
                    var strUpIdTem = coin_place + (10 * i);
                    var value = strUpIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && p) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_r_Arr.push(value)
                            p = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && q) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_r_Arr.push(value)
                            q = false;
                        }
                    }
                    if (value >= 11 && value <= 88 && !flag) {
                        var strUpId = value;
                    } else {
                        e = false;
                    }
                }
                if (f == true) {
                    var strDwnIdTem = coin_place - (10 * i);
                    var value = strDwnIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && r) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_r_Arr.push(value)
                            r = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && s) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_r_Arr.push(value)
                            s = false;
                        }
                    }
                    if (value >= 11 && value <= 88 && !flag) {
                        var strDwnId = value;
                    } else {
                        f = false;
                    }
                }
                if (t == true) {
                    var strleftIdTem = coin_place - i;
                    var value = strleftIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && v) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_r_Arr.push(value)
                            v = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && w) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_r_Arr.push(value)
                            w = false;
                        }
                    }
                    var lastNum = ((value / 10).toString().split('.')[1]);
                    if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                        var strleftId = value;
                    } else {
                        t = false;
                    }
                }
                if (u == true) {
                    var strRightIdTem = coin_place + i;
                    var value = strRightIdTem;
                    var id_in = $("#" + value).children(0).data('coinname');
                    var flag = coins.includes(id_in);

                    if (white_coins.includes(selected_coin) && x) {
                        if (black_coins.includes(id_in)) {
                            w_q_Arr.push(value)
                            w_r_Arr.push(value)
                            x = false;
                        }
                    }
                    if (black_coins.includes(selected_coin) && y) {
                        if (white_coins.includes(id_in)) {
                            b_q_Arr.push(value)
                            b_r_Arr.push(value)
                            y = false;
                        }
                    }
                    var lastNum = ((value / 10).toString().split('.')[1]);
                    if (lastNum <= 8 && value >= 11 && value <= 88 && !flag) {
                        var strRightId = value;
                    } else {
                        u = false;
                    }
                }
                if (selected_coin == "w_q") {
                    if (w_q_Arr.includes(kingPos1)) {
                        blackCheck(coin_clicked);
                        return;
                    } else if (w_q_Arr.includes(kingPos2)) {
                        blackCheck(coin_clicked);
                        return;
                    }
                }
                if (selected_coin == "w_r") {
                    if (w_r_Arr.includes(kingPos1)) {
                        blackCheck(coin_clicked);
                        return;
                    } else if (w_r_Arr.includes(kingPos2)) {
                        blackCheck(coin_clicked);
                        return;
                    }
                }
                if (selected_coin == "w_b") {
                    if (w_b_Arr.includes(kingPos1)) {
                        blackCheck(coin_clicked);
                        return;
                    } else if (w_b_Arr.includes(kingPos2)) {
                        blackCheck(coin_clicked);
                        return;
                    }
                }
                if (selected_coin == "b_q") {
                    if (b_q_Arr.includes(kingPos1)) {
                        whiteCheck(coin_clicked);
                        return;
                    } else if (b_q_Arr.includes(kingPos2)) {
                        whiteCheck(coin_clicked);
                        return;
                    }
                }
                if (selected_coin == "b_r") {
                    if (b_r_Arr.includes(kingPos1)) {
                        whiteCheck(coin_clicked);
                        return;
                    } else if (b_r_Arr.includes(kingPos2)) {
                        whiteCheck(coin_clicked);
                        return;
                    }
                }
                if (selected_coin == "b_b") {
                    if (b_b_Arr.includes(kingPos1)) {
                        whiteCheck(coin_clicked);
                        return;
                    } else if (b_b_Arr.includes(kingPos2)) {
                        whiteCheck(coin_clicked);
                        return;
                    }
                }
            }

        }
    }
}

function choosed(pawn_pos) {}
