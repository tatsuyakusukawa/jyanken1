



// 使用する変数を定義するよ～
const hand_img=""
const cpu_hands=""
const player_hand = "" ;
let count_battle = 0;
let count_win = 0;
let count_lose = 0;
let count_draw = 0;
let count_win_continue = 0;
const cpu_name =$(".cpu_name").html(); // テキストボックスのvalue値を取得するよ

function audio_enter() {
    document.getElementById('overSound').currentTime = 0; //連続クリックに対応
    document.getElementById('overSound').play(); //クリックしたら音を再生
}

function audio_cpu_select() {
    document.getElementById('cpu_select_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('cpu_select_audio').play(); //クリックしたら音を再生
}

function clear_audio() {
    document.getElementById('clear_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('clear_audio').play(); //クリックしたら音を再生
}

// エントランスでの挙動の設定をするよ

$(".cpu_hide").on("click",function(){
    $(".cpu4_hide").show(500);
})

$(".enter").on("click",function(){
    const player_name =$("#player_name").val(); 

    if(player_name===""){
        alert("プレイヤーネームを入力してください！")
        return false;
    }
    else{
        alert("お名前は"+player_name+"さんですね！ようこそじゃんけん道場へ！")
        audio_enter();
        localStorage.setItem('player_name',player_name);
        $("#entrance").fadeOut(800);
        $("#setting").fadeIn(400);

    }
})

$('.cpu').hover(function(){
    document.getElementById("cpu_select_audio").currentTime = 0;
    document.getElementById("cpu_select_audio").play();
});



// ボタンを押したときにCPUの手が変わる挙動を設定するよ

// 一戦目

function R1_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];
    let janken_r = Math.floor( Math.random() * 3);


        if (janken_r === p_janken_r) {
            Result_end = "あいこです";
            $("#cpu1").fadeOut(800);
            $(".if_draw1").fadeIn(800);
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");
        } else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】";
            $("#cpu1").fadeOut(800);
            $(".if_win1").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");

        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】";
            $("#cpu1").fadeOut(800);
            $(".if_win1").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");

        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】";
            $("#cpu1").fadeOut(800);
            $(".if_win1").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");

        }else {
            Result_end = "あなたの【負け】";
            $("#cpu1").fadeOut(800);
            $(".if_lose1").fadeIn(800);
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");

        }

}

$(".furidashi").on("click",function(){
    location.reload();
})

$(".next1").on("click",function(){
    $(".if_win1").fadeOut(2000);
    window.location.href ="cpu2.html";
})


// 2戦目

function R2_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];
    let janken_r = Math.floor( Math.random() * 3);


    count_battle ++
    console.log(count_battle)
        if (janken_r === p_janken_r) {
            Result_end = "あいこです";
            count_draw ++
        } else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】";
            count_win ++
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】";
            count_win ++
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】";
            count_win ++
        }else {
            Result_end = "あなたの【負け】";
            count_lose ++
        }
        $(".cpu2_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！")
        $(".count_battle").html(count_battle);
        $(".count_win").html(count_win);
        $(".count_lose").html(count_lose);
        $(".count_draw").html(count_draw);

        if(count_battle <= 5 && count_win ===3){
            $("#cpu2").fadeOut(800);
            $(".if_win2").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
        }
        else if(count_battle === 5){
            $("#cpu2").fadeOut(800);
            $(".if_lose2").fadeIn(800);
        }
    }


$(".furidashi").on("click",function(){
    location.reload();
})

$(".next2").on("click",function(){
    $(".if_win2").fadeOut(800);
    window.location.href ="cpu3.html";
})

// 3戦目！！

function R3_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];
    let janken_r = Math.floor( Math.random() * 3);


        if (janken_r === p_janken_r) {
            Result_end = "あいこです";
        } else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】";
            count_win_continue ++
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】";
            count_win_continue ++
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】";
            count_win_continue ++
        }else {
            Result_end = "あなたの【負け】";
            count_lose ++
        }
        $(".cpu3_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！")
        $(".Result_end").html(Result_end)
        $(".count_win_continue").html(count_win_continue);


        if(count_win_continue === 3){
            $("#cpu3").fadeOut(800);
            $(".if_win3").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            clear_audio();

        }
        else if(count_lose === 1){
            $("#cpu3").fadeOut(800);
            $(".if_lose3").fadeIn(800);
        }
    }


$(".furidashi").on("click",function(){
    location.reload();
})

$(".home").on("click",function(){
    $(".if_win3").fadeOut(800);
    window.location.href ="index.html";
})

// 4戦目

function R4_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];
    let janken_r = Math.floor( Math.random() * 3);

        if (p_janken_r === janken_r) {
            Result_end = "あなたの【負け】";
            $("#cpu4").fadeOut(800);
            $(".if_draw4").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");
        } else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】";
            $("#cpu4").fadeOut(800);
            $(".if_win4").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");
            clear_audio();
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】";
            $("#cpu4").fadeOut(800);
            $(".if_win4").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");
            clear_audio();
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】";
            $("#cpu4").fadeOut(800);
            $(".if_win4").fadeIn(800);
            $(".player_name").html(localStorage.getItem('player_name'))
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");
            clear_audio();
        }else {
            Result_end = "あなたの【負け】";
            $("#cpu4").fadeOut(800);
            $(".if_lose4").fadeIn(800);
            $("#cpu_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！");
        }
        $(".cpu4_hand").html(cpu_name+"は"+janken[janken_r]+"を出した！")
        $(".Result_end").html(Result_end)
        $(".count_win_continue").html(count_win_continue);



        }
    


$(".furidashi").on("click",function(){
    location.reload();
})

$(".tweet").on("click",function(){
    const tweet ="https://twitter.com/intent/tweet?text="+encodeURIComponent(cpu_name + 'を倒した！')+'&hashtags=ジーズアカデミー';
    window.open(tweet);
})
