

/*
111 乾 ☰
011 兑 ☱
101 离 ☲
001 震 ☳
110 巽 ☴
010 坎 ☵
100 艮 ☶
000 坤 ☷
*/





//相生相克
function 生克(一, 二){
    let 生 = {
        "金": "水",
        "水": "木",
        "木": "火",
        "火": "土",
        "土": "金"
    };
    let 克 = {
        "金": "木",
        "木": "土",
        "土": "水",
        "水": "火",
        "火": "金"
    };
    // if(生[一] == 二) return 1; //一生二
    // else if(克[一] == 二) return 2; //一克二
    // else if(生[二] == 一) return 3; //二生一
    // else if(克[二] == 一) return 4; //二克一
    // else if(一 == 二) return 5; //同位
    // else return 0;
    if(生[一] == 二) return "上生下";
    else if(克[一] == 二) return "上克下";
    else if(生[二] == 一) return "下生上";
    else if(克[二] == 一) return "下克上";
    else if(一 == 二) return "同位";
    else return 0;
}

function show(){
    document.querySelector("#result").removeAttribute("hidden");    
    
    let 五行 = {
        "111": "金",
        "011": "金",
        "000": "土",
        "100": "土",
        "001": "木",
        "110": "木",
        "010": "水",
        "101": "火"
    };
    let 主卦上卦 = document.querySelector('#main_up').value;
    let 主卦下卦 = document.querySelector('#main_down').value;
    let 动爻 = parseInt(document.querySelector('#change').value);

    let 主卦 = 主卦上卦 + 主卦下卦;
    let 互卦上卦 = 主卦[1] + 主卦[2] + 主卦[3];
    let 互卦下卦 = 主卦[2] + 主卦[3] + 主卦[4];

    let 变卦上卦 = 主卦上卦;
    let 变卦下卦 = 主卦下卦;
    let 变卦 = 变卦上卦 + 变卦下卦;
    //将 变卦 变为数组
    let 变卦数组 = [];
    for(let i = 0; i < 变卦.length; i++){
        变卦数组.push(变卦[i]);
    }


    if(变卦[动爻] == '0') 变卦数组.splice(动爻, 1, '1');
    else 变卦[动爻] = 变卦数组.splice(动爻, 1, '0');;

    变卦 = 变卦数组.join('');
    变卦上卦 = 变卦.substr(0, 3);
    变卦下卦 = 变卦.substr(3, 3);

    let 八卦 = {
        "111": "☰",
        "011": "☱",
        "101": "☲",
        "001": "☳",
        "110": "☴",
        "010": "☵",
        "100": "☶",
        "000": "☷"
    };
    let 主 = document.querySelector("#main_hex");
    let 互 = document.querySelector("#mutual_hex");
    let 变 = document.querySelector("#changed_hex");

    let 主卦生克显示 = document.querySelector("#main_live");
    let 互卦生克显示 = document.querySelector("#mutual_live");
    let 变卦生克显示 = document.querySelector("#changed_live");
    
    let 主卦生克 = 生克(五行[主卦上卦], 五行[主卦下卦]);
    let 互卦生克 = 生克(五行[互卦上卦], 五行[互卦下卦]);
    let 变卦生克 = 生克(五行[变卦上卦], 五行[变卦下卦]);

    主.innerHTML = '<span class="hex">' + 八卦[主卦上卦] + '&nbsp;<small>' + 五行[主卦上卦] + '</small></span><br><span class="hex">' + 八卦[主卦下卦] + '&nbsp;<small>' + 五行[主卦下卦] + '</small></span>';
    互.innerHTML = '<span class="hex">' + 八卦[互卦上卦] + '&nbsp;<small>' + 五行[互卦上卦] + '</small></span><br><span class="hex">' + 八卦[互卦下卦] + '&nbsp;<small>' + 五行[互卦下卦] + '</small></span>';
    变.innerHTML = '<span class="hex">' + 八卦[变卦上卦] + '&nbsp;<small>' + 五行[变卦上卦] + '</small></span><br><span class="hex">' + 八卦[变卦下卦] + '&nbsp;<small>' + 五行[变卦下卦] + '</small></span>';

    主卦生克显示.innerHTML = 主卦生克;
    互卦生克显示.innerHTML = 互卦生克;
    变卦生克显示.innerHTML = 变卦生克;



}