//条件分岐(if文)
let condition = 5
if (condition >= 5) {
    console.log("conditionは5以上です")
}
else if (condition == 0) {
    console.log("conditionは0です")
}
else {
    console.log("負の数です")
}

//引数で指定された数字によっていろんな言語でこんにちはを表示する関数
function sayHello(language) {
    let message = "";

    if (language === 0) {
        message = "Hello";
    } else if (language === 1) {
        message = "Bonjour";
    } else if (language === 2) {
        message = "こんにちわ";
    } else {
        message = "エラー";
    }

    console.log(message);

    //html側に表示
    //idがsay_Helloの要素を取得して、その中に挨拶を表示
    const p_hello=document.querySelector("#say_Hello");
    p_hello.textContent=message;
}

// sayHello(0);
// sayHello(1);
// sayHello(2);

//繰り返しwhile文
let count=0;
while(count<5){
    console.log("countの値は:"+count);

    if (count===3){
        break;
    }

    count=count+1;//countを増やす
    count++;// インクリメント
}

for(let i=0; i<10;i++){
    console.log("iの値は:"+i);
}

let playerhand=["グー","チョキ","パー"];
for(let i=0;i<3;i++){
   console.log("プレイヤーハンド:"+playerhand[i]);
}

console.log("配列の要素数:"+playerhand.length);

for(let i=0;i<playerhand.length;i++){
   console.log("プレイヤーハンド:"+playerhand[i]);
}