const makeBtn = document.getElementById("makeBtn");
const farst = document.getElementById("farst");
const secand = document.getElementById("secand");
const not = document.getElementById("not");
const nots = document.getElementById("nots");
const backBtn = document.getElementById("backBtn");
const notBac = document.getElementById("notBac");


backBtn.addEventListener("click",() => {
    farst.classList.remove('hidden');
    secand.classList.add('hidden');
});

notBac.addEventListener("click",() => {
    farst.classList.remove('hidden');
    nots.classList.add('hidden');
});

const syozokuse = () => {
    var randomsyo = Math.floor( Math.random() * 10);
    switch(randomsyo) {
        case 0:
        case 1:
            zokuse.innerText = "メガネ"
            console.log("メガネ");
            break;
        case 2:
        case 3:
            zokuse.innerText = "元気系（運動系）"
            console.log("元気（運動）");
            break;
        case 4:
        case 5:
            zokuse.innerText = "おとなしい"
            console.log("おとなしい");
            break;
        case 6:
            zokuse.innerText = "厨二病"
            console.log("厨二病");
            break;
        case 7:
            zokuse.innerText = "お兄ちゃんっ子"
            console.log("お兄ちゃんっ子");
            break;
        case 8:
            zokuse.innerText = "メスガキ"
            console.log("メスガキ");
            break;
        case 9:
            zokuse.innerText = "ボクっ娘"
            console.log("ボクっ娘");
            break;
    }
};

const kouzokuse = () => {
    var randomsyo = Math.floor( Math.random() * 20);
    switch(randomsyo) {
        case 0:
        case 1:
            zokuse.innerText = "普通"
            console.log("普通");
            break;
        case 2:
        case 3:
            zokuse.innerText = "ギャル"
            console.log("ギャル");
            break;
        case 4:
            zokuse.innerText = "メガネ（委員長タイプ）"
            console.log("メガネ（委員長タイプ）");
            break;
        case 5:
        case 6:
        case 7:
            zokuse.innerText = "おとなしい"
            console.log("おとなしい");
            break;
        case 8:
        case 9:
            zokuse.innerText = "元気系（運動系）"
            console.log("元気系（運動系）");
            break;
        case 10:
            zokuse.innerText = "クール"
            console.log("クール");
            break;
        case 11:
            zokuse.innerText = "ツンデレ"
            console.log("ツンデレ");
            break;
        case 12:
            zokuse.innerText = "ヤンデレ"
            console.log("ヤンデレ");
            break;
        case 13:
            zokuse.innerText = "厨二病"
            console.log("厨二病");
            break;
        case 14:
            zokuse.innerText = "アイドル"
            console.log("アイドル");
            break;
        case 15:
            zokuse.innerText = "ドジっ娘"
            console.log("ドジっ娘");
            break;
        case 16:
            zokuse.innerText = "ボクっ娘"
            console.log("ボクっ娘");
            break;
        case 17:
            zokuse.innerText = "理系"
            console.log("理系");
            break;
        case 18:
            zokuse.innerText = "帰国子女"
            console.log("帰国子女");
            break;
        case 19:
            zokuse.innerText = "幼馴染"
            console.log("幼馴染");
            break;
    }
};

const daizokuse = () => {
    var randomsyo = Math.floor( Math.random() * 10);
    switch(randomsyo) {
        case 0:
        case 1:
            zokuse.innerText = "ギャル"
            console.log("ギャル");
            break;
        case 2:
        case 3:
            zokuse.innerText = "就活生"
            console.log("就活生");
            break;
        case 4:
            zokuse.innerText = "メガネ"
            console.log("メガネ");
            break;
        case 5:
            zokuse.innerText = "ギャル(ビッ)"
            console.log("ギャル（ビッ）");
            break;
        case 6:
            zokuse.innerText = "クール"
            console.log("クール");
            break;
        case 7:
            zokuse.innerText = "ヤンデレ"
            console.log("ヤンデレ");
            break;
        case 8:
            zokuse.innerText = "理系"
            console.log("理系");
            break;
        case 9:
            zokuse.innerText = "お姉さん系"
            console.log("お姉さん系");
            break;
    }
};

const OLzokuse = () => {
    var randomsyo = Math.floor( Math.random() * 5);
    switch (randomsyo) {
        case 0:
            zokuse.innerText = "メガネ"
            console.log("メガネ");
            break;
        case 1:
            zokuse.innerText = "お姉さん系"
            console.log("お姉さん系");
            break;
        case 2:
            zokuse.innerText = "お姉さん系(養ってくれる)"
            console.log("お姉さん系（養ってくれる）");
            break;
        case 3:
            zokuse.innerText = "酒弱い"
            console.log("酒弱い");
            break;
        case 4:
            zokuse.innerText = "ムチームチ"
            console.log("ムチームチ");
            break;
    }
};

const cm = document.getElementById("cm");
const syocms = () => {
    var randomcm = Math.floor( Math.random() *35)+125;
    console.log(randomcm);
    cm.innerHTML = randomcm;
};

const koucms = () => {
    var randomcm = Math.floor( Math.random() *30)+140;
    console.log(randomcm);
    cm.innerHTML = randomcm;
};

const OLcms = () => {
    var randomcm = Math.floor( Math.random() *25)+145;
    console.log(randomcm);
    cm.innerHTML = randomcm;
};

const alltxt = document.getElementById("alltxt");
const old = document.getElementById("old");
const member = document.getElementById("member");
const zokuse = document.getElementById("zokuse");
const nottxt1 = document.getElementById("nottxt1");
const nottxt2 = document.getElementById("nottxt2");
makeBtn.addEventListener("click",() => {
    farst.classList.add('hidden');
    secand.classList.remove('hidden');
var random = Math.floor( Math.random() * 21 )+8;
console.log(random)
switch (random) {
    case 8:
    case 9:
    farst.classList.add('hidden');
    secand.classList.add('hidden');
    nots.classList.remove('hidden');
    not.innerText = "彼女はできなかった...";
    break;
    default:
        old.innerHTML = random;
        switch (random) {
            case 10:
            case 11:
                member.innerText = "小学生";
                console.log("小学生");
                syozokuse();
                syocms();
                break;
                
            case 13:
            case 14:
                member.innerText = "中学生";
                console.log("中学生");
                syozokuse();
                syocms();
                break;
            case 16:
            case 17:
                member.innerText = "高校生";
                console.log("高校生");
                kouzokuse();
                koucms();
                break;
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
                member.innerText = "大学生";
                console.log("大学生");
                daizokuse();
                OLcms();
                break;
            case 26:
            case 27:
            case 28:
                member.innerText = "OL";
                console.log("OL");
                OLzokuse();
                OLcms();
                break;
            case 12:
                var random12 = Math.floor( Math.random() * 3);
                console.log(random12)
                switch (random12) {
                    case 0:
                        member.innerText = "小学生";
                        console.log("小学生");
                        syozokuse();
                        syocms();
                    break;
                    case 1:
                        member.innerText = "小学生";
                        console.log("小学生");
                        syozokuse();
                        syocms();
                    break;
                    case 2:
                        member.innerText = "中学生";
                        console.log("中学生");
                        syozokuse();
                        syocms();
                break;
                }
                break;
            case 15:
                var random16 = Math.floor( Math.random() * 3);
                console.log(random16);
                switch (random16) {
                    case 0:
                        member.innerText = "中学生";
                        console.log("中学生");
                        syozokuse();
                        syocms();
                    break;
                    case 1:
                        member.innerText = "中学生";
                        console.log("中学生");
                        syozokuse();
                        syocms();
                    break;
                    case 2:
                        member.innerText = "高校生";
                        console.log("高校生");
                        kouzokuse();
                        koucms();
                break;
                }
            case 18:
                var random18 = Math.floor( Math.random() * 3);
                console.log(random18);
                switch (random18) {
                    case 0:
                        member.innerText = "高校生";
                        console.log("高校生");
                        kouzokuse();
                        koucms();
                    break;
                    case 1:
                        member.innerText = "高校生";
                        console.log("高校生");
                        kouzokuse();
                        koucms();
                    break;
                    case 2:
                        member.innerText = "大学生";
                        console.log("大学生");
                        daizokuse();
                        OLcms();
                break;
                }
                break;
}
};
const kami = document.getElementById("kami");
var randomkami = Math.floor( Math.random() * 14);
switch (randomkami) {
    case 0 :
        kami.innerText = "ツインテール"
        console.log("ツインテール");
        break;
    case 1 :
        kami.innerText = "ポニーテール"
        console.log("ポニーテール");
        break;
    case 2 :
        kami.innerText = "縦ロール"
        console.log("縦ロール");
        break;
    case 3 :
        kami.innerText = "ツインドリル"
        console.log("ツインドリル");
        break;
    case 4 :
        kami.innerText = "ドリル"
        console.log("ドリル");
        break;
    case 5 :
        kami.innerText = "お団子結び"
        console.log("お団子結び");
        break;
    case 6 :
        kami.innerText = "外ハネ髪"
        console.log("外ハネ髪");
        break;
    case 7 :
        kami.innerText = "ワンサイドアップ"
        console.log("ワンサイドアップ");
        break;
    case 8 :
        kami.innerText = "三つ編み"
        console.log("三つ編み");
        break;
    case 9 :
        kami.innerText = "ハーフアップ"
        console.log("ハーフアップ");
        break;
    case 10 :
        kami.innerText = "ウェーブロングヘアー"
        console.log("ロングヘアー");
        break;
    case 11 :
        kami.innerText = "ストレートロングヘアー"
        console.log("ストレートロングヘアー");
        break;
    case 12:
        kami.innerText = "ボブカット"
        console.log("ボブカット");
        break;
    case 13:
        kami.innerText = "ツーサイドアップ"
        console.log("ツーサイドアップ");
        break;
};
const color = document.getElementById("color");
var randomcolr = Math.floor( Math.random() * 13);
switch (randomcolr) {
    case 0 :
        color.innerText = "赤"
        console.log("赤");
        break;
    case 1 :
        color.innerText = "青"
        console.log("青");
        break;
    case 2 :
        color.innerText = "黄色"
        console.log("黄色");
        break;
    case 3 :
        color.innerText = "緑"
        console.log("緑");
        break;
    case 4 :
        color.innerText = "オレンジ"
        console.log("オレンジ");
        break;
    case 5 :
        color.innerText = "水色"
        console.log("水色");
        break;
    case 6 :
        color.innerText = "茶色"
        console.log("茶色");
        break;
    case 7 :
        color.innerText = "白"
        console.log("白");
        break;
    case 8 :
        color.innerText = "桃"
        console.log("桃");
        break;
    case 9 :
        color.innerText = "金"
        console.log("金");
        break;
    case 10 :
    case 11 :
    case 12 :
        color.innerText = "黒"
        console.log("黒");
        break;
};

const long = document.getElementById("long");
var randomlong = Math.floor( Math.random() * 7);
switch (randomlong) {
    case 0:
        long.innerText = "short"
        console.log("short");
        break;
    case 1:
    case 2:
        long.innerText = "肩"
        console.log("肩");
        break;
    case 3:
    case 4:
        long.innerText = "腰"
        console.log("腰");
        break;
    case 5:
        long.innerText = "太ももあたり"
        console.log("太ももあたり");
        break;
    case 6:
        long.innerText = "long"
        console.log("long");
        break;
};
console.log("--------------")
});