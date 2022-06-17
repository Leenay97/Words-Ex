let wordText = "無観客 異例の形 影響 閉会式 開会式 競技（選手） 選手団 旗手 開催(都市) 感動する 課題になる 感染者 感染対策 身体障害者 知事 会長 差別 開会／閉会を宣言する ～に心が震えた ～倍 土砂災害 上陸 見込み 横断する 見通し 暴風 高潮 気象庁 海上 中心気圧 最大瞬間風速 発達する 雨雲 流れ込む 激しい雨 「土砂災害警戒情報」 発表されている 氾濫危険水位を超えている 湿った空気 広い範囲 おそれがある 雨量 予想される 浸水 増水 落雷 竜巻 暴風 高波 高潮 潮位 避難行動を心がける 崖 暮らす 体の不自由な人 ハザードマップ 余裕を持って 移動する 被害 停電に備える 充電を済ませる 接近する 砂 崩れ落ちる 災害をもたらす 水面 災害 あふれる 大勢 崖 割れ目 逃げる 「大雨注意報」 「大雨警報」 「大雨特別警報」 看板 電柱 植木鉢 缶詰 懐中電灯 ノーベル平和賞 政権 強権的な姿勢を批判する 編集長 受賞 圧力に屈せず 報道 報道関係者 決意を語る 批判する 選考委員会 民主主義 理想的な世界 代表 会見 闘いを続ける 抑圧に屈する 殺害される 同僚 国連 不可欠を襲う 行方不明者 堤防が決壊した 復興の支援を行う 豪雨 泥 調査 明らかにする 自宅療養中 感染 急拡大 過去最多 対策 緊急性 症状 感染を防ぐ 発信 救急車　（を要請する） 患者自身 唇 紫色 呼吸 息苦しい 息をする 意識 脈のリズムが乱れる 同居者 反応が弱い 診断する 保健所 自治体 相談窓口 換気 手がよく触れる 共用部分 消毒 外務大臣 国際テロリズムとの闘いに関する包括条約 〜の戦略的関心 (クリル諸島)北方領土問題 調印 国境 北方領土 国交 占領 未解決 締結 国境 提案 問題解決 具体的な 協議 協力 せねばならない 拒否 方策 会談 割合 一生 人口 不足 死亡率 生活水準 下回る 上回る　 国勢調査 平均寿命 生活水準一生 達成する 出生数／率 予想する、予測する、 推計する 死亡数／率 (平均)寿命 増える・増加する・伸びる 上昇・向上 減る・減少する、縮小する 低下 到達する、〜を達成する 労働力不足 人口減少社会 人口統計 数値 割合 総務省 ～年連続 国勢調査";
let wordArray = wordText.split(' ');
let wordCounter = document.querySelector('.word-counter')

let wordContainer = document.querySelector('.word-container__word')
let button = document.querySelector('.next');
let leave = document.querySelector('.leave');
let prev = '1000';

button.addEventListener('click', (e)=>{
    if (wordArray.length == 0) {
        wordContainer.innerHTML = "Теперь можно спать.";
        return;
    }
     wordArray.splice(prev, 1);
    let random = Math.floor(Math.random() * wordArray.length);
   
    wordContainer.innerHTML = wordArray[random];
    wordCounter.innerHTML = `Осталось слов: ${wordArray.length}`;
    prev = random;
    console.log(wordArray);
});
leave.addEventListener('click', (e)=>{
    if (wordArray.length == 0) {
        wordContainer.innerHTML = "Теперь можно спать.";
        return;
    }
    let random = Math.floor(Math.random() * wordArray.length);
    wordContainer.innerHTML = wordArray[random];
    console.log(wordArray);
});