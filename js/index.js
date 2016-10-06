$(function(){
    var database=[{'name':"不醉不会", 'src':"music/不醉不会-田馥甄-1771908208.mp3", 'geshou':"田馥甄",gcurl:"lrc/buzuibuhui.lrc",
        geci:[
        {time:"[0:00]",lrc:"不醉不会"},
        {time:"[0:00]",lrc:"作词：林夕"},
        {time:"[0:01]",lrc:"作曲：刘大江"},
        {time:"[0:03]",lrc:"演唱：田馥甄"},
        {time:"[0:04]",lrc:"...."},
        {time:"[0:05]",lrc:"歌词搜索www.lrc99.com"},
        {time:"[0:06]",lrc:"...."},
        {time:"[0:07]",lrc:"迷茫茫的天地没那么多对不对"},
        {time:"[0:10]",lrc:"错不错只看心境怎么描绘"},
        {time:"[0:14]",lrc:"我流我的汗水 华丽如天花乱坠"},
        {time:"[0:18]",lrc:"甜不甜美 谁能代我去品味"},
        {time:"[0:22]",lrc:"..."},
        {time:"[0:30]",lrc:"oh 不醉 就学不会"},
        {time:"[0:36]",lrc:"看得很琐碎 都没有所谓"},
        {time:"[0:40]",lrc:"看得很琐碎 都没有所谓"},
        {time:"[0:44]",lrc:"只看到绝色 看不到绝对"},
        {time:"[0:48]",lrc:"最好的滋味就是耐人寻味"},
        {time:"[1:08]",lrc:"不到命运 只看到滋味"},
        {time:"[1:11]",lrc:"不到命运 只看到滋味"},
        {time:"[1:15]",lrc:"只看到绝色 看不到绝对"},
        {time: "[1:19]",lrc:"最好的滋味就是耐人寻味"},
        {time:"[1:25]",lrc:"....."},
        {time:"[1:53]",lrc:"乱纷纷像一首朦胧诗"},
        {time:"[2:01]",lrc:"懵懂懂才懂得朦胧美"},
        {time:"[2:06]",lrc:"......"},
        {time:"[2:08]",lrc:"不到命运 只看到滋味"},
        {time:"[2:11]",lrc:"不到命运 只看到滋味"},
        {time:"[2:15]",lrc:"只看到绝色 看不到绝对"},
        {time: "[2:19]",lrc:"最好的滋味就是耐人寻味"},
        {time:"[2:25]",lrc:"....."},
        {time:"[2:53]",lrc:"乱纷纷像一首朦胧诗"},
        {time:"[3:01]",lrc:"懵懂懂才懂得朦胧美"},
        {time:"[3:06]",lrc:"......"},
        {time:"[3:11]",lrc:"不到命运 只看到滋味"},
        {time:"[3:15]",lrc:"只看到绝色 看不到绝对"},
        {time:"[3:19]",lrc:"最好的滋味就是耐人寻味"},
        {time:"[3:25]",lrc:"....."},
        {time:"[3:51]",lrc:"....."},
    ]},
        {'name':"至少还有你", 'src':"music/至少还有你-Super JuniorM-2075996.mp3", 'geshou':"Super JuniorM",gcurl:"lrc/zhishaohuanyouni.lrc",
            geci:""},
        {'name':"爱情不是荷尔蒙", 'src':"music/吴若萱-爱情不是荷尔蒙.mp3", 'geshou':"吴若萱",gcurl:"lrc/aiqingbushiheermeng.lrc",
            geci:[
           {time:"[0:00]",lrc:"爱情不是荷尔蒙"},
           {time:"[0:01]",lrc:"爱情不是荷尔蒙"},
          {time:"[0:04]",lrc:"演唱：吴若萱"},
          {time:"[0:07]",lrc:"作词：冯伟"},
          {time:"[0:10]",lrc:"作曲：酒疯"},
          {time:"[0:12]",lrc:"制作人：李虹强"},
          {time:"[0:15]",lrc:"推广发行：星光艺声文化"},
          {time:"[0:21]",lrc:"爱情不是冲动 是怦然心动"},
          {time:"[0:26]",lrc:"爱情需要我们用心去经营"},
          {time:"[0:30]",lrc:"爱情不是占领 爱情是牺牲"},
          {time:"[0:34]",lrc:"爱情需要我们 患难与共"},
          {time:"[0:39]",lrc:"爱情不是放纵 是默默包容"},
          {time:"[0:43]",lrc:"爱情需要我们彼此的忠诚"},
          {time:"[0:48]",lrc:"爱情很不容易 爱情不轻松"},
          {time:"[0:52]",lrc:"爱情是让我们 相守一生"},
          {time:"[0:58]",lrc:"爱情不是荷尔蒙 是美好的感情"},
          {time:"[1:03]",lrc:"懂得付出和珍惜 白头不是梦"},
          {time:"[1:07]",lrc:"爱情不是荷尔蒙 是心与心相拥"},
          {time:"[1:12]",lrc:"相拥天荒到地老 爱情美如梦"},
          {time:"[1:16]",lrc:"爱情不是荷尔蒙 是灵魂的触碰"},
          {time:"[1:20]",lrc:"世上最美是爱情 简单却神圣"},
          {time:"[1:25]",lrc:"爱情不是荷尔蒙 是灵魂的交融"},
          {time:"[1:29]",lrc:"世上最美的爱情 相爱到来生"},
          {time:"[1:33]",lrc:"RAP：爱情不是冲动 是怦然心动"},
          {time:"[1:36]",lrc:"爱情需要我们用心去经营"},
          {time:"[1:38]",lrc:"爱情不是占领 爱情是牺牲"},
          {time:"[1:40]",lrc:"爱情需要我们 患难与共"},
          {time:"[1:42]",lrc:"爱情不是放纵 是默默包容"},
          {time:"[1:44]",lrc:"爱情需要我们彼此的忠诚"},
          {time:"[1:47]",lrc:"爱情很不容易 爱情不轻松"},
          {time:"[1:49]",lrc:"爱情是让我们 相守一生"},
          {time:"[1:51.]",lrc:"爱情不是冲动 是怦然心动"},
          {time:"[1:55]",lrc:"爱情需要我们用心去经营"},
          {time:"[2:00]",lrc:"爱情不是占领 爱情是牺牲"},,
          {time:"[2:04]",lrc:"爱情需要我们 患难与共"},
          {time:"[2:08]",lrc:"爱情不是放纵 是默默包容"},
          {time:"[2:13]",lrc:"爱情需要我们彼此的忠诚"},
          {time:"[2:17]",lrc:"爱情很不容易 爱情不轻松"},
          {time:"[2:21]",lrc:"爱情是让我们 相守一生"},
          {time:"[2:28]",lrc:"爱情不是荷尔蒙 是美好的感情"},
          {time:"[2:32]",lrc:"懂得付出和珍惜 白头不是梦"},
         {time:"[2:37]",lrc:"爱情不是荷尔蒙 是心与心相拥"},
         {time:"[2:40]",lrc:"相拥天荒到地老 爱情美如梦"},
         {time:"[2:45]",lrc:"爱情不是荷尔蒙 是灵魂的触碰"},
         {time:"[2:50]",lrc:"世上最美是爱情 简单却神圣"},
        {time:"[2:54]",lrc:"爱情不是荷尔蒙 是灵魂的交融"},
         {time:"[2:58]",lrc:"世上最美的爱情 相爱到来生"},
        {time:"[3:07]",lrc:"爱情不是荷尔蒙 是美好的感情"},
        {time:"[3:12]",lrc:"懂得付出和珍惜 白头不是梦"},
        {time:"[3:16]",lrc:"爱情不是荷尔蒙 是心与心相拥"},
        {time:"[3:20]",lrc:"相拥天荒到地老 爱情美如梦"},
        {time:"[3:25]",lrc:"爱情不是荷尔蒙 是灵魂的触碰"},
        {time:"[3:29]",lrc:"世上最美是爱情 简单却神圣"},
        {time:"[3:33]",lrc:"爱情不是荷尔蒙 是灵魂的交融"},
        {time:"[3:38]",lrc:"世上最美的爱情 相爱到来生"},
        {time:"[3:42]",lrc:"世上最美的爱情 相爱.。。。。。。"},
        {time:"[3:47]",lrc:"相爱到来生"},
      ]},
        {'name':"相爱容易相处难", 'src':"music/宋熙铭-青蛙王子-相爱容易相处难.mp3", geshou:"宋熙铭",gcurl:"lrc/xiangai.lrc",geci:"等了你一夜心中真的好累<br/> 经过这些年还是被你忽略<br/> 你给我的爱是真心是敷衍<br/> 教我如何来分别<br/> 常听朋友说两个人的世界<br/> 相爱和相处不如想像的美<br/> 这些我了解可是真要面对<br/> 却又不能无所谓<br/> 难道真的相爱容易相处难<br/> 可是真要分手却又分不开<br/> 感情的纠缠谁也不能明白<br/> 又何必在乎地久天长<br/> 难道真的相爱容易相处难<br/> 就像多情的人总是多受伤<br/> 付出的情爱若已不能释怀<br/> 是否还依然等待 <br/>女人的爱情是等一种永远 <br/>男人的世界爱是一种火焰<br/> 彼此的感觉如果不能相连<br/> 如何勉强再相对"},
        {'name':"终于等到你", 'src':"music/小坠-终于等到你.mp3", geshou:"小坠",gcurl:"lrc/zhongyu.lrc",'geci':"到了某个年纪你就会知道<br/> 一个人的日子真的难熬<br/> 渐渐开始尝到孤单的味道<br/> 时间在敲打着你的骄傲<br/> 过了某个路口你就会感到<br/> 彻夜陪你聊天的越来越少<br/> 厌倦了被寂寞追着跑<br/> 找个爱你的人就想托付终老<br/> 能陪我走一程的人有多少<br/> 愿意走完一生的更是寥寥<br/> 是否刻骨铭心并没那么重要<br/> 只想在平淡中体会爱的味道<br/> 终于等到你<br/> 还好我没放弃 幸福来得好不容易 <br/>才会让人更加珍惜<br/> 终于等到你  <br/>差点要错过你<br/> 在最好的年纪遇到你<br/> 才算没有辜负自己 <br/>终于等到你<br/> 能陪我走一程的人有多少愿意 <br/>走完一生的更是寥寥<br/> 是否刻骨铭心并没那么重要<br/> 只想在平淡中体会爱的味道<br/> 终于等到你<br/> 还好我没放弃<br/> 幸福来得好不容易<br/> 才会让人更加珍惜<br/> 终于等到你<br/>  差点要错过你<br/> 在最好的年纪遇到你 <br/>才算没有辜负自己<br/> 终于等到你<br/> 终于等到你<br/> 还好我没放弃<br/> 幸福来得好不容易<br/> 才会让人更加珍惜<br/> 终于等到你<br/>  差点要错过你<br/> 在最好的年纪遇到你<br/> 才算没有辜负自己<br/> 终于等到你"},
        {'name':"我爱你你却爱着她", 'src':"music/我爱你你却爱着她-孙露-1770074464.mp3", geshou:"孙露",gcurl:"lrc/woaini.lrc",geci:"我把我心都交给了你<br/> 而你在梦中却喊着他<br/> 就在你梦醒的时分<br/> 眼里还在含着泪花<br/> 是什么让你爱上了他<br/> 难道他比我对你好吗<br/> 如果真的会是这样<br/> 我也会把你放心地爱<br/> 我爱你你却爱着他<br/> 我的为你的心都碎了<br/>是不是只有忘记我自己<br/> 我的泪才不会如雨下<br/> 我爱你你却爱着他 <br/>这场游戏我真的累了<br/>你可曾想过我的感受<br/> 这样地对我公平吗<br/> 我把我心都交给了你<br/> 而你在梦中却喊着他<br/> 就在你梦醒的时分<br/> 眼里还在含着泪花 <br/>是什么让你爱上了他<br/> 难道他比我对你好吗<br/> 如果真的会是这样<br/> 我也会把你放心地爱<br/> 我爱你你却爱着他<br/> 我的为你的心都碎了<br/>是不是只有忘记我自己<br/> 我的泪才不会如雨下<br/> 我爱你你却爱着他<br/> 这场游戏我真的累了<br/>你可曾想过我的感受<br/> 这样地对我公平吗<br/> 我爱你你却爱着他<br/> 我的为你的心都碎了<br/> 是不是只有忘记我自己<br/> 我的泪才不会如雨下<br/> 我爱你你却爱着他<br/> 如果他能给你幸福啊<br/> 我情愿忍心伤了我自己<br/> 默默地祝福你和他<br/> 默默地祝福你和他<br/> 我爱你你却爱着他 <br/>我的为你的心都碎了 <br/>是不是只有忘记我自己<br/> 我的泪才不会如雨下<br/> 我爱你你却爱着他<br/> 如果他能给你幸福啊 <br/>我情愿忍心伤了我自己<br/> 默默地祝福你和他<br/> 我爱你你却爱着他<br/> 我的为你的心都碎了<br/> 是不是只有忘记我自己<br/> 我的泪才不会如雨下<br/> 我爱你你却爱着他<br/> 如果他能给你幸福啊<br/> 我情愿忍心伤了我自己<br/> 默默地祝福你和他<br/> 我爱你你却爱着他<br/> 我的为你的心都碎了"},
        {'name':"奔跑在孤傲的路上", 'src':"music/旅行团-奔跑在孤傲的路上（电视剧“旋风十一人”插曲）.mp3", geshou:"旅行团",gcurl:"lrc/benpao.lrc",geci:"太阳走在天上<br/> 我们走在路上<br/> 走在各自走的方向<br/> 去不到的远方<br/> 不住的地方<br/> 相遇在未知的路上<br/> 你要去哪你知道吗为此不计代价<br/> 带着所有还是放下去寻找答案吧<br/> 我奔跑在我孤傲的路上<br/> 使然看不见终点和希望<br/> 有太多火焰冷却我的理想<br/> 依然燃烧我仍在信仰<br/> 说什么冰山一角 <br/>说什么兵败如山倒<br/> 就算我把整个世界给输掉<br/> 也希望你能看到<br/> 我们不曾一样 却又如此一样 贪婪的追求着理想<br/> 生命不会太长 <br/>思想它会生长<br/> 丢不掉也无法隐藏<br/> 你要去哪你知道吗<br/> 为此不计代价<br/> 带着所有还是放下<br/> 会留下遗憾吗 <br/>我奔跑在我孤傲的路上<br/> 使然看不见终点和希望<br/> 有太多火焰冷却我的理想<br/> 依然燃烧我仍在信仰<br/> 说什么冰山一角<br/> 说什么兵败如山倒<br/> 就算我把整个世界给输掉 也希望你能看到<br/> 谁有在为你祈祷<br/> 谁又会为你而骄傲<br/> 就算我把整个世界给输掉<br/> 只希望你能看到<br/> 我奔跑在我孤傲的路上<br/> 使然看不见终点和希望<br/> 有太多火焰冷却我的理想<br/> 我依然燃烧我仍在信仰 <br/>说什么冰山一角 <br/>说什么兵败如山倒<br/> 就算我把整个世界给输掉<br/> 也希望你能看到"},
        {'name':"忘了你的承诺-忘了你的承诺",'src':"music/杨枫-忘了你的承诺-忘了你的承诺.mp3", geshou:"杨枫",gcurl:"lrc/wangle.lrc",geci:"别再说你多么的爱我<br/>别再说你多么的想我<br/> 收回你这多余的请求<br/> 再来几次也是无味的结果<br/> 没有你我一样很快乐<br/> 没有你我生活更自由<br/> 爱不爱了已经无所谓<br/> 反正我的心已经碎了<br/> 也不想再回头<br/> 我会忘了你的笑容<br/> 忘了你的承诺<br/> 忘了你曾经对我说<br/>不会再让我心难过<br/> 忘了你的笑容 <br/>忘了你的承诺 <br/>忘了你做过的一切 <br/>不会再对你舍不得<br/> 别再说你多么的爱我<br/> 别再说你多么的想我<br/> 收回你这多余的请求 再来几次也是无味的结果<br/> 没有你我一样很快乐<br/> 没有你我生活更自由<br/> 爱不爱了已经无所谓<br/> 反正我的心已经碎了<br/> 也不想再回头<br/> 我会忘了你的笑容<br/> 忘了你的承诺<br/> 忘了你曾经对我说 <br/>不会再让我心难过<br/> 忘了你的笑容<br/> 忘了你的承诺<br/> 忘了你做过的一切<br/> 不会再对你舍不得<br/> 我们之间的感情<br/> 就这样散了<br/> 我会忘了你的笑容<br/> 忘了你的承诺<br/> 忘了你曾经对我说<br/> 不会再让我心难过 忘了你的笑容<br/> 忘了你的承诺<br/> 忘了你做过的一切<br/> 不会再对你舍不得 <br/>我们之间的感情<br/> 就这样散了<br/> 忘了你的笑容<br/> 忘了你的承诺<br/> 忘了你做过的一切<br/> 不会再对你舍不得<br/> 我们之间的感情<br/> 就这样散了<br/>"},
        {'name':"找一个不伤心的理由", 'src':"music/祁隆-找一个不伤心的理由-找一个不伤心的理由.mp3", geshou:"祁隆",gcurl:"lrc/zhaoyige.lrc",geci:"我不知是否该想起你<br/> 也不知是否该忘记你<br/> 在无数个夜里总在导演我自已<br/> 厌倦了爱情的游戏<br/> 我不知是否应该恨你<br/> 明知道过去已是回忆<br/> 一颗受伤的心被你伤害了几回<br/> 走在寒风里从此忘记你<br/> 就让风儿带走我的思念<br/> 就让雨水带走我的眼泪<br/> 从此不再有你的心碎 <br/>我一个人体会<br/> 不再去想为了什么分手<br/> 给自己找个不伤心的理由 <br/>多想永远停在这一刻 <br/>享受孤独的寂寞<br/> 我不知是否应该恨你 明知道过去已是回忆 <br/>一颗受伤的心被你伤害了几回<br/> 走在寒风里从此忘记你<br/> 就让风儿带走我的思念<br/> 就让雨水带走我的眼泪<br/> 从此不再有你的心碎<br/> 我一个人体会<br/> 不再去想为了什么分手<br/> 给自己找个不伤心的理由 <br/>多想永远停在这一刻 享受孤独的寂寞 <br/>就让风儿带走我的思念<br/> 就让雨水带走我的眼泪<br/> 从此不再有你的心碎<br/> 我一个人体会<br/> 不再去想为了什么分手<br/> 给自己找个不伤心的理由<br/> 多想永远停在这一刻<br/> 享受孤独的寂寞 <br/>多想永远停在这一刻<br/> 享受孤独的寂寞"},
        {'name':"阴天", 'src':"music/阴天-莫文蔚-136056-1.mp3", geshou:"莫文蔚",gcurl:"lrc/yintian.lrc",
            geci:[
            {time:"0:02",lrc:"阴天"},
            {time:"0:04",lrc:"莫文蔚"},
            {time:"0:06",lrc:"作品李"},
            {time:"0:08",lrc:"Amin"},
            {time:"0:12",lrc:"李宗盛"},
            {time:"0:19",lrc:"阴天在不开灯的房间"},
            {time:"0:23",lrc:"当所有思绪都一点一点沉淀"},
            {time:"0:26",lrc:"爱情究竟是精神鸦片"},
            {time:"0:29",lrc:"还是世纪末的无聊消遣"},
            {time:"0:34",lrc:"香烟氲成一摊光圈"},
            {time:"0:37",lrc:"和他的照片就摆在手边"},
            {time:"0:41",lrc:"傻傻两个人笑得多甜"},
            {time:"0:47",lrc:"开始总是分分钟都妙不可言"},
            {time:"0:51",lrc:"谁都认为热情它永不会减"},
            {time:"0:54",lrc:"除了激情褪去后的那一点点倦"},
            {time:"1:01",lrc:"也许像谁说过的贪得无厌"},
            {time:"1:05",lrc:"活该应了谁说过的不知检点"},
            {time:"1:09",lrc:"总之那几年感性赢了理性那一面"},
            {time:"1:31",lrc:"阴天在不开灯的房间"},
            {time:"1:34",lrc:"当所有思绪都一点一点沉淀"},
            {time:"1:38",lrc:"爱恨情欲里的疑点盲点"},
            {time:"1:41",lrc:"呼之欲出那么明显"},
            {time:"1:45",lrc:"女孩通通让到一边"},
            {time:"1:48",lrc:"这歌里的细微末节就算都体验"},
            {time:"1:52",lrc:"若想真明白真要好几年"},
            {time:"2:27",lrc:"回想那一天喧闹的喜宴"},
            {time:"2:35",lrc:"耳边想起的究竟是序曲或完结篇?"},
            {time:"2:42",lrc:"感情不就是你情我愿"},
            {time:"2:45",lrc:"最好爱狠扯平俩不相欠"},
            {time:"2:49",lrc:"感情说穿了一人挣脱的一人去捡"},
            {time:"2:55",lrc:"男人大可不必百口莫辨"},
            {time:"3:00",lrc:"女人实在无须楚楚可怜"},
            {time:"3:03",lrc:"总之那几年你们俩个没有缘"},
            {time:"3:13",lrc:"阴天在不开灯的房间"},
            {time:"3:16",lrc:"当所有思绪都一点一点沉淀"},
            {time:"3:20",lrc:"爱情究竟是精神鸦"},
            {time:"3:23",lrc:"还是世纪末的无聊消遣"},
            {time:"3:27",lrc:"香烟氲成一摊光圈"},
            {time:"3:31",lrc:"和他的照片就摆在手边"},
            {time:"3:34",lrc:"傻傻两个人笑得多甜"},
            {time:"3:41",lrc:"傻傻两个人笑得多甜"}]
        },
        {'name':"陪你度过漫长岁月", 'src':"music/陈奕迅-陪你度过漫长岁月-陪你度过漫长岁月.mp3", geshou:"陈奕迅",gcurl:"lrc/peini.lrc",geci:"走过了人来人往<br/> 不喜欢也得欣赏 我是沉默的存在<br/> 不当你世界<br/> 只作你肩膀<br/> 拒绝成长到成长<br/> 变成想要的模样<br/> 在举手投降以前<br/> 让我再陪你一段<br/> 陪你把沿路感想活出了答案<br/> 陪你把独自孤单变成了勇敢<br/> 一次次失去又重来<br/> 我没离开 陪伴是<br/> 最长情的告白 <br/>陪你把想念的酸 <br/>拥抱成温暖 陪你把彷徨<br/> 写出情节来<br/> 未来多漫长 再漫长 <br/>还有期待 陪伴你 <br/>一直到 故事给说完 让我们静静分享 此刻难得的坦白 <br/>只是无声地交谈 都感觉幸福 <br/>感觉不孤单<br/> 陪你把沿路感想<br/> 活出了答案<br/> 陪你把独自孤单<br/> 变成了勇敢 一次次失去<br/> 又重来<br/> 我没离开<br/> 陪伴是 最长情的告白<br/> 陪你把想念的酸 拥抱成温暖<br/> 陪你把彷徨 <br/>写出情节来<br/> 未来多漫长 再漫长<br/> 还有期待 陪伴你<br/> 一直到 故事给说完<br/> 陪你把沿路感想<br/> 活出了答案<br/> 陪你把独自孤单<br/> 变成了勇敢<br/> 一次次失去<br/> 又重来<br/> 我没离开<br/> 陪伴是 最长情的告白<br/> 陪你把想念的酸 拥抱成温暖<br/> 陪你把彷徨 写出情节来<br/> 未来多漫长<br/> 再漫长 还有期待<br/> 陪伴你 一直到 这故事说完"},
        {'name':"一万个舍不得", 'src':"music/庄心妍-一万个舍不得-错爱.mp3", geshou:"庄心妍",gcurl:"lrc/yiwan.lrc",geci:"不要追问对与错<br/> 毕竟我们深爱过<br/> 有你陪的日子里<br/> 我真的好快乐<br/> 你总是小心翼翼的<br/> 因为你怕我难过<br/> 而我却不能给你<br/> 给你想要的结果<br/> 一万个舍不得<br/> 不能回到从前了<br/> 爱你没有后悔过<br/> 只是应该结束了<br/> 一万个舍不得<br/> 我是永远爱你的<br/> 爱你我觉得值得<br/> 只是不能再爱了 <br/>不要追问对与错 <br/>毕竟我们深爱过 <br/>有你陪的日子里 <br/>我真的真的好快乐 <br/>你总是小心翼翼的<br/> 因为你怕我难过<br/> 而我却不能给你想要的结果 <br/>你永远都是最好的<br/> 分开了<br/> 不代表不爱你了<br/> 我心里<br/> 你永远都是最好的"},]
    var audio=$('audio').get(0);
    var kaiguan=$('.start-stop');
    var index=0;
    var imglist=['image/8.png','image/9.png','image/10.png','image/11.png','image/12.png','image/13.png','image/14.png','image/15.png','image/16.png','image/17.png','image/18.png','image/19.png'];
    //添加歌曲
    function drawlist(){
        $(database).each(function(i,v){
            // $('.song-list').empty();
            if(i===index){
                $('<li id='+ i +'><div class="name">'+ v.name+'</div><div class="geming">'+v.geshou+'</div><div class="libiao"><div class="li-load"></div><div class="li-del"></div>' + '<div class="li-col"></div></div></div>').appendTo('.lis');
                $('.geci-title').text(database[index].name);
                $('.tou img').attr('src',imglist[index]);
                $('.lis li').first().addClass('active');
            }else{
                $('<li id='+ i +'><div class="name">'+ v.name+'</div><div class="geming">'+v.geshou+'</div><div class="libiao"><div class="li-load"></div><div class="li-del"></div>' + '<div class="li-col"></div></div></div>').appendTo('.lis');

            }
        })
    }
   drawlist();
     //切换下一首
    $('.xiayishou').on('click',function(){
        index++;
        if(index==database.length){index=0;}
        audio.src=database[index].src;
        $('.geci-title').text(database[index].name);
        $('.tou img').attr('src',imglist[index]);
        audio.play();
        $('.lis li').removeClass('active');
        $('.lis li').eq(index).addClass('active');
        $('.geci div').removeClass('shangyi');
        $('.geci div').eq(index).addClass('shangyi');
    })
    function geci(){
        var gh=$('.geci div').height();
        $('.geci div').css({
            top:-(gh*(audio.currentTime/audio.duration)),
        })
    }
    //切换上一首
    $('.shangyishou').on('click',function(){
        $('.lis li').removeClass('active');
        $('.lis li').eq(index).addClass('active');
        index-=1;
        if(index>=0){
        audio.src=database[index].src;
        $('.geci-title').text(database[index].name);
        // $('<div>' +database[index].geci+'</div>').appendTo('.geci');
        $('.tou img').attr('src',imglist[index]);
        audio.play();
        }else{
            alert('目前已到第一首歌,不可再点击');
        }
    })
    //点击切换其中一首播放
    $('.song-list').on('click', 'li',function(){
        var flag=false;
        if(flag){
            $(this).addClass('active');
        }else{
            $('.lis li').removeClass('active');
            $(this).addClass('active');
        }
       audio.src=database[$(this).index()].src;
        $('.geci-title').text(database[$(this).index()].name);
        $('.tou img').attr('src',imglist[$(this).index()]);
        audio.play();
    })

    //开始与结束播放
    kaiguan.on('click',function(){
            // $(this).toggleClass('bg');
        if(audio.paused){
            audio.play();
            kaiguan
        }else{
            audio.pause();
        }
    })
    $('audio').on('play',function(){
        kaiguan.addClass('bg')
        $('.tou img').addClass('dong');

    })
    $('audio').on('pause',function(){
        kaiguan.removeClass('bg')
        $('.tou img').removeClass('dong')
        $('.geci div').css('display','none');
    })
    //函数变分钟数
    function format(v){
        var m = parseInt(v/ 60)
        var s=(parseInt(v) % 60 ) >=10 ? (parseInt(v) % 60 ) : "0"+(parseInt(v) % 60 );
        return m + ":" +s
        // console.log()
        // return v.toFixed(0)
    }
    $('audio').on('timeupdate',function () {
        $('.current-time').text(format(audio.currentTime));
        $('.all-time').text(format(audio.duration));
        $('.jindu .yuan').css({
            left:audio.currentTime/audio.duration*$('.jindu').width()
        })
        $(database[index].geci).each(function(i,v){
            if(format(audio.currentTime) == v.time){
                console.log(i)
                var a=i;
                $(".lyric").empty()
                if(i -3<=0){
                    i= 0;
                }else{
                    i= i-3
                }
                for(var j=i;j<database[index].geci.length;j++){
                    $("<p class="+ j +">"+database[index].geci[j].lrc+"</p>").appendTo(".geci .lyric")
                }
                $("."+a).addClass("active");
            }
        })
    })
    // $('audio').on('timeupdate',function () {
    //     $('.current-time').text(format(audio.currentTime));
    //     $('.jindu .yuan').css({
    //         left:audio.currentTime/audio.duration*$('.jindu').width()
    //     })
    //     $(database[index].geci).each(function(i,v){
    //         if(format(audio.currentTime) == v.time){
    //             var a=i;
    //             $(".lyric").empty()
    //             if(i -3<=0){
    //                 i= 0;
    //             }else{
    //                 i= i-3
    //             }
    //             for(var j=i;j<database[index].geci.length;j++){
    //                 $("<p class="+ j +">"+database[index].geci[j].lrc+"</p>").appendTo(".geci .lyric")
    //             }
    //             $("."+a).addClass("active")
    //         }
    //     })
    //
    // })
    $('audio').on('canplay',function (){
        $('audio').triggerHandler('timeupdate');
    })
    //进度条点击事件
    $('.jindu').on('click',function (e) {
        audio.currentTime=audio.duration* ((e.offsetX-$(this).find('.yuan').width()/2)/$(this).width());
        $('.jindu .yuan').css({
            left:audio.currentTime/audio.duration*$('.jindu').width()
        })
    })
    //静音的点击事件
    $('.jinyin-btn').on('click',function(){
        // audio.volume=0;
        $('.voices .yuan').css({
            left:0
        })
        if(!(audio.volume===0)){
            audio.volume=0;
            $('.jinyin-btn').addClass('jinyin');
        }else{
            $('.jinyin-btn').removeClass('jinyin');
            audio.volume=$('.voices').attr('pre-v');
            $('.voices .yuan').css({
                left:audio.volume * $('.voices').width(),
            })
        }

    })
    $('.voices').on('volumechange',function () {
        if(audio.volume===0){
            $('.jinyin-btn').addClass('jinyin');
        }else{
            $('.jinyin-btn').removeClass('jinyin');
        }
    })
    //音量点击事件
    $('.voices').on('click',function(e){
        //让audio的音量也在变化
        audio.volume=(e.offsetX - $(this).find('.yuan').width() / 2) / $(this).width();
        $('.voices .yuan').css({
            left:e.offsetX,
        })
        if($(this).attr('pre-v')){
            audio.volume=$(this).attr('pre-v');
            $(this).removeAttr('pre-v');
        }else{
            $(this).attr('pre-v',audio.volume)
            audio.volume=0;
        }
    })
    ////////////循环播放、下一曲  上一曲////////////
    var s=0
    $(".style").on("click",function(){
        $(this).removeClass();
        s +=1;
        if(s > 2){
            s=0;
        }
        if(s == 0){
            $(this).addClass("style")
        }else if(s == 1){
            $(this).addClass("random")
        }else if(s == 2){
            $(this).addClass("Loop-once")
        }
    })
    //一首歌曲播放完继续播放
    $('audio').on('ended',function(){
        if($("#style").hasClass("style")){
            index += 1;
        }else if($("#style").hasClass("random")){
            // console.log(Math.random()*(database.length-1))
            index = parseInt( Math.random()*(database.length-1) );
        }else if($("#style").hasClass("Loop-once")){
            index=index;
        }
        audio.src=database[index].src;
        // $('.lis li').eq(index).addClass('active').delay(1000).queue(function () {
        //     $(this).removeClass('active').dequeue();
        // })
        $('.geci-title').text(database[index].name);
        $('.tou img').attr('src',imglist[index]);
        audio.play();
    })
    /////////////////收藏所有///////////////////////////
    $('.collect').on('click',function(){
        alert('已收藏');
    })
    /////////////////删除所有///////////////////////
    $('.del').on('click',function(){
        $('.lis li').remove();
    })
    //单个删除
     $('.li-del').on('click',function(){
         // var liid=$(this).parent().attr('id');
         // database.splice('liid',1);
         // audio.pause();
         $(this).parent().remove()
     })

    ///////////////////////////move拖动/////////////////////////////////
    $('.jindu.voices').on('mousedown',false);
    $(".jindu .yuan").on("mousedown",function(e){
        var px=$(this).offsetParent().offset().left;
        // console.log(px)
        var w=e.offsetX
        $(document).on("mousemove",function(e){
            var ow=e.clientX;
            // console.log(ow)
            if( (ow-px-w) >$(".jindu").width() ){
                return
            }
            audio.currentTime =audio.duration* (( ow-px-w )/$(".jindu").width())
            $(document).on("mouseup",function(){
                $(document).off("mousemove")
                $(document).off("mouseup")
            })
        })
    })
    $(".voices .yuan").on("mousedown",function(e){
        var px=$(this).offsetParent().offset().left;
        var w=e.offsetX;
        $(document).on("mousemove",function(e){
            var ow=e.clientX;
            if( (ow-px-w ) >= $(".voices").width()){
                audio.colume=1;
            }else if((ow-px-w )<=0) {
                audio.volume=0;
            }else{
                audio.volume = ( ow-px-w )/$(".voices").width()
            }
            $(document).on("mouseup",function(){
                $(document).off("mousemove")
                $(document).off("mouseup")
            })
        })
    })
    
    /////////////背景闪动//////////
    setInterval(function(){$('.float div').height(function(){
        return parseInt(Math.random()*280+75);
    })},1000)
    ////////////////鼠标移入显示//////////////////////////////////////////
    $('.song-list li').on('mouseenter',function () {
        $(this).find('.libiao').css({
            visibility:"visible",
        })
    })
    $('.song-list li').on('mouseleave',function () {
        $(this).find('.libiao').css({
            visibility:"hidden",
        })
    })
    ///////////////////搜索/////////////////////////////
    var search=$('#search');
    search.on('keyup',function(){
        // var arr=[];
        // var key=$(this).val().trim();
            $('input').on('blur',function(){
                var key=$(this).val().trim();
                $(database).each(function(i,v){
                    if(!(v.name===key||v.geshou===key)){
                        alert('没有此歌曲或歌手');
                    }else{
                        alert('有此歌曲或歌手');
                        console.log(i);
                        audio.src=database[i].src;
                        $('.geci-title').text(database[i].name);
                        $('.tou img').attr('src',imglist[i]);
                        audio.play();
                  }
            })
        })
    })
    var gcflag=true;
    $('.song-list li').on('click',function(){
        if(gcflag){
            $('.play-list').addClass('ani fade-out-right')
            $('.hid-play .lyric-box').css('display','block')
            gcflag=false;
        }else{
            $('.play-list').removeClass('ani fade-out-right')
            $('.hid-play .lyric-box').css('display','none')
            gcflag=true;
        }


    })

//////////////////////////////更多歌词////////////////////////////
    $('.song-list').on('click','li',function(){
        $('.geci').css('display','block');
        $('.song-list').css('display','none');
        $('.float').css('display','none');
        $(".geci").append("</div><div class=lyric-box><div class=lyric></div></div>");
        $(database[$(this).index()].geci).each(function(i,v){
            $("<p class="+ i +">"+v.lrc+"</p>").appendTo(".geci .lyric");
        })
    })
})
