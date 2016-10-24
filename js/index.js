$(function(){
    var database=[
        {'name': "不醉不会", 'src': "music/不醉不会-田馥甄-1771908208.mp3", 'geshou': "田馥甄", gcurl: "lrc/buzuibuhui.lrc",
        geci:[
            {time:"00:00",lrc:"不醉不会"},
            {time:"00:00",lrc:"作词：林夕"},
            {time:"00:01",lrc:"作曲：刘大江"},
            {time:"00:03",lrc:"演唱：田馥甄"},
            {time:"00:04",lrc:"...."},
            {time:"00:05",lrc:"歌词搜索www.lrc99.com"},
            {time:"00:06",lrc:"...."},
            {time:"00:07",lrc:"迷茫茫的天地没那么多对不对"},
            {time:"00:10",lrc:"错不错只看心境怎么描绘"},
            {time:"00:14",lrc:"我流我的汗水 华丽如天花乱坠"},
            {time:"00:18",lrc:"甜不甜美 谁能代我去品味"},
            {time:"00:22",lrc:"..."},
            {time:"00:30",lrc:"oh 不醉 就学不会"},
            {time:"00:36",lrc:"看得很琐碎 都没有所谓"},
            {time:"00:40",lrc:"看得很琐碎 都没有所谓"},
            {time:"00:44",lrc:"只看到绝色 看不到绝对"},
            {time:"00:48",lrc:"最好的滋味就是耐人寻味"},
            {time:"01:08",lrc:"不到命运 只看到滋味"},
            {time:"01:11",lrc:"不到命运 只看到滋味"},
            {time:"01:15",lrc:"只看到绝色 看不到绝对"},
            {time: "01:19",lrc:"最好的滋味就是耐人寻味"},
            {time:"01:25",lrc:"....."},
            {time:"01:53",lrc:"乱纷纷像一首朦胧诗"},
            {time:"02:01",lrc:"懵懂懂才懂得朦胧美"},
            {time:"02:06",lrc:"......"},
            {time:"02:08",lrc:"不到命运 只看到滋味"},
            {time:"02:11",lrc:"不到命运 只看到滋味"},
            {time:"02:15",lrc:"只看到绝色 看不到绝对"},
            {time: "02:19",lrc:"最好的滋味就是耐人寻味"},
            {time:"02:25",lrc:"....."},
            {time:"02:53",lrc:"乱纷纷像一首朦胧诗"},
            {time:"03:01",lrc:"懵懂懂才懂得朦胧美"},
            {time:"03:06",lrc:"......"},
            {time:"03:11",lrc:"不到命运 只看到滋味"},
            {time:"03:15",lrc:"只看到绝色 看不到绝对"},
            {time:"03:19",lrc:"最好的滋味就是耐人寻味"},
            {time:"03:25",lrc:"....."},
            {time:"03:51",lrc:"....."},
         ]},
        {'name':"至少还有你", 'src':"music/至少还有你-Super JuniorM-2075996.mp3", 'geshou':"Super JuniorM",gcurl:"lrc/zhishaohuanyouni.lrc",
            geci:["目前没有搜索到歌词"]},
        {'name':"爱情不是荷尔蒙", 'src':"music/吴若萱-爱情不是荷尔蒙.mp3", 'geshou':"吴若萱",gcurl:"lrc/aiqingbushiheermeng.lrc",
          geci:[
           {time:"00:00",lrc:"爱情不是荷尔蒙"},
           {time:"00:01",lrc:"爱情不是荷尔蒙"},
          {time:"00:04",lrc:"演唱：吴若萱"},
          {time:"00:07",lrc:"作词：冯伟"},
          {time:"00:10",lrc:"作曲：酒疯"},
          {time:"00:12",lrc:"制作人：李虹强"},
          {time:"00:15",lrc:"推广发行：星光艺声文化"},
          {time:"00:21",lrc:"爱情不是冲动 是怦然心动"},
          {time:"00:26",lrc:"爱情需要我们用心去经营"},
          {time:"00:30",lrc:"爱情不是占领 爱情是牺牲"},
          {time:"00:34",lrc:"爱情需要我们 患难与共"},
          {time:"00:39",lrc:"爱情不是放纵 是默默包容"},
          {time:"00:43",lrc:"爱情需要我们彼此的忠诚"},
          {time:"00:48",lrc:"爱情很不容易 爱情不轻松"},
          {time:"00:52",lrc:"爱情是让我们 相守一生"},
          {time:"00:58",lrc:"爱情不是荷尔蒙 是美好的感情"},
          {time:"01:03",lrc:"懂得付出和珍惜 白头不是梦"},
          {time:"01:07",lrc:"爱情不是荷尔蒙 是心与心相拥"},
          {time:"01:12",lrc:"相拥天荒到地老 爱情美如梦"},
          {time:"01:16",lrc:"爱情不是荷尔蒙 是灵魂的触碰"},
          {time:"01:20",lrc:"世上最美是爱情 简单却神圣"},
          {time:"01:25",lrc:"爱情不是荷尔蒙 是灵魂的交融"},
          {time:"01:29",lrc:"世上最美的爱情 相爱到来生"},
          {time:"01:33",lrc:"RAP：爱情不是冲动 是怦然心动"},
          {time:"01:36",lrc:"爱情需要我们用心去经营"},
          {time:"01:38",lrc:"爱情不是占领 爱情是牺牲"},
          {time:"01:40",lrc:"爱情需要我们 患难与共"},
          {time:"01:42",lrc:"爱情不是放纵 是默默包容"},
          {time:"01:44",lrc:"爱情需要我们彼此的忠诚"},
          {time:"01:47",lrc:"爱情很不容易 爱情不轻松"},
          {time:"01:49",lrc:"爱情是让我们 相守一生"},
          {time:"01:51",lrc:"爱情不是冲动 是怦然心动"},
          {time:"01:55",lrc:"爱情需要我们用心去经营"},
          {time:"02:00",lrc:"爱情不是占领 爱情是牺牲"},
          {time:"02:04",lrc:"爱情需要我们 患难与共"},
          {time:"02:08",lrc:"爱情不是放纵 是默默包容"},
          {time:"02:13",lrc:"爱情需要我们彼此的忠诚"},
          {time:"02:17",lrc:"爱情很不容易 爱情不轻松"},
          {time:"02:21",lrc:"爱情是让我们 相守一生"},
          {time:"02:28",lrc:"爱情不是荷尔蒙 是美好的感情"},
          {time:"02:32",lrc:"懂得付出和珍惜 白头不是梦"},
         {time:"02:37",lrc:"爱情不是荷尔蒙 是心与心相拥"},
         {time:"02:40",lrc:"相拥天荒到地老 爱情美如梦"},
         {time:"02:45",lrc:"爱情不是荷尔蒙 是灵魂的触碰"},
         {time:"02:50",lrc:"世上最美是爱情 简单却神圣"},
        {time:"02:54",lrc:"爱情不是荷尔蒙 是灵魂的交融"},
         {time:"02:58",lrc:"世上最美的爱情 相爱到来生"},
        {time:"03:07",lrc:"爱情不是荷尔蒙 是美好的感情"},
        {time:"03:12",lrc:"懂得付出和珍惜 白头不是梦"},
        {time:"03:16",lrc:"爱情不是荷尔蒙 是心与心相拥"},
        {time:"03:20",lrc:"相拥天荒到地老 爱情美如梦"},
        {time:"03:25",lrc:"爱情不是荷尔蒙 是灵魂的触碰"},
        {time:"03:29",lrc:"世上最美是爱情 简单却神圣"},
        {time:"03:33",lrc:"爱情不是荷尔蒙 是灵魂的交融"},
        {time:"03:38",lrc:"世上最美的爱情 相爱到来生"},
        {time:"03:42",lrc:"世上最美的爱情 相爱.。。。。。。"},
         {time:"03:47",lrc:"相爱到来生"},
      ]},
        {'name':"相爱容易相处难", 'src':"music/宋熙铭-青蛙王子-相爱容易相处难.mp3", geshou:"宋熙铭",gcurl:"lrc/xiangai.lrc",
            geci:[
                {time:"00:05",lrc:"鞍安 - 相爱容易相处难"},
                {time:"00:10",lrc:"词：李安修/林利南 曲：陈耀川"},
                {time:"00:15",lrc:"www.qq190.com ★ noni99"},
                {time:"00:20",lrc:"--------"},
                {time:"00:30",lrc:"等了你一夜"},
                {time:"00:32",lrc:"心中真的好累"},
                {time:"00:34",lrc:"经过这些年"},
                {time:"00:37",lrc:"还是被你忽略"},
                {time:"00:39",lrc:"你给我的爱"},
                {time:"00:42",lrc:"是真心是敷衍"},
                {time:"00:44",lrc:"教我如何来分别"},
                {time:"00:48",lrc:"......"},
                {time:"00:49",lrc:"常听朋友说"},
                {time:"00:51",lrc:"两个人的世界"},
                {time:"00:53",lrc:"相爱和相处"},
                {time:"00:56",lrc:"不如想像的美"},
                {time:"00:58",lrc:"这些我了解"},
                {time:"01:00",lrc:"可是真要面对"},
                {time:"01:03",lrc:"却又不能无所谓"},
                {time:"01:07",lrc:"......"},
                {time:"01:09",lrc:"难道真的"},
                {time:"01:12",lrc:"相爱容易相处难"},
                {time:"01:15",lrc:"可是真要分手"},
                {time:"01:17",lrc:"却又分不开"},
                {time:"01:19",lrc:"感情的纠缠"},
                {time:"01:22",lrc:"谁也不能明白"},
                {time:"01:24",lrc:"又何必在乎地久天长"},
                {time:"01:28",lrc:"....."},
                {time:"01:29",lrc:"难道真的"},
                {time:"01:31",lrc:"相爱容易相处难"},
                {time:"01:34",lrc:"就像多情的人"},
                {time:"01:36",lrc:"总是多受伤"},
                {time:"01:38",lrc:"付出的情爱"},
                {time:"01:41",lrc:"若已不能释怀"},
                {time:"01:43",lrc:"是否还依然等待"},
                {time:"01:47",lrc:"----"},
                {time:"02:12",lrc:"女人的爱情"},
                {time:"02:14",lrc:"是等一种永远"},
                {time:"02:16",lrc:"男人的世界"},
                {time:"02:18",lrc:"爱是一种火焰"},
                {time:"02:21",lrc:"彼此的感觉"},
                {time:"02:23",lrc:"如果不能相连"},
                {time:"02:26",lrc:"如何勉强再相对"},
                {time:"02:29",lrc:"......"},
                {time:"02:32",lrc:"难道真的"},
                {time:"02:34",lrc:"相爱容易相处难"},
                {time:"02:37",lrc:"可是真要分手"},
                {time:"02:40",lrc:"却又分不开"},
                {time:"02:42",lrc:"感情的纠缠"},
                {time:"02:44",lrc:"谁也不能明白"},
                {time:"02:47",lrc:"又何必在乎地久天长"},
                {time:"02:51",lrc:"....."},
                {time:"02:52",lrc:"难道真的"},
                {time:"02:53",lrc:"相爱容易相处难"},
                {time:"02:56",lrc:"就像多情的人"},
                {time:"02:59",lrc:"总是多受伤"},
                {time:"03:01",lrc:"付出的情爱"},
                {time:"03:03",lrc:"若已不能释怀"},
                {time:"03:06",lrc:"是否还依然等待"},
                {time:"03:10",lrc:"----"},
                {time:"03:13",lrc:"难道真的"},
                {time:"03:15",lrc:"相爱容易相处难"},
                {time:"03:18",lrc:"可是真要分手"},
                {time:"03:20",lrc:"却又分不开"},
                {time:"03:22",lrc:"感情的纠缠"},
                {time:"03:25",lrc:"谁也不能明白"},
                {time:"03:27",lrc:"又何必在乎地久天长"},
                {time:"03:31",lrc:"....."},
                {time:"03:32",lrc:"难道真的"},
                {time:"03:33",lrc:"相爱容易相处难"},
                {time:"03:36",lrc:"就像多情的人"},
                {time:"03:39",lrc:"总是多受伤"},
                {time:"03:41",lrc:"付出的情爱"},
                {time:"03:44",lrc:"若已不能释怀"},
                {time:"03:46",lrc:"是否还依然等待"},
                {time:"03:50",lrc:"----"},
            ]},
        {'name':"终于等到你", 'src':"music/小坠-终于等到你.mp3", geshou:"小坠",gcurl:"lrc/zhongyu.lrc",geci:["目前没有搜索到歌词"]},
        {'name':"我爱你你却爱着她", 'src':"music/我爱你你却爱着她-孙露-1770074464.mp3", geshou:"孙露",gcurl:"lrc/woaini.lrc",geci:["目前没有搜索到歌词"]},
        {'name':"奔跑在孤傲的路上", 'src':"music/旅行团-奔跑在孤傲的路上（电视剧“旋风十一人”插曲）.mp3", geshou:"旅行团",gcurl:"lrc/benpao.lrc",geci:["目前没有搜索到歌词"]},
        {'name':"忘了你的承诺-忘了你的承诺",'src':"music/杨枫-忘了你的承诺-忘了你的承诺.mp3", geshou:"杨枫",gcurl:"lrc/wangle.lrc",geci:["目前没有搜索到歌词"]},
        {'name':"找一个不伤心的理由", 'src':"music/祁隆-找一个不伤心的理由-找一个不伤心的理由.mp3", geshou:"祁隆",gcurl:"lrc/zhaoyige.lrc",geci:["目前没有搜索到歌词"]},
        {'name':"阴天", 'src':"music/阴天-莫文蔚-136056-1.mp3", geshou:"莫文蔚",gcurl:"lrc/yintian.lrc",
            geci: [
            {time:"00:02",lrc:"阴天"},
            {time:"00:04",lrc:"莫文蔚"},
            {time:"00:06",lrc:"作品李"},
            {time:"00:08",lrc:"Amin"},
            {time:"00:12",lrc:"李宗盛"},
            {time:"00:19",lrc:"阴天在不开灯的房间"},
            {time:"00:23",lrc:"当所有思绪都一点一点沉淀"},
            {time:"00:26",lrc:"爱情究竟是精神鸦片"},
            {time:"00:29",lrc:"还是世纪末的无聊消遣"},
            {time:"00:34",lrc:"香烟氲成一摊光圈"},
            {time:"00:37",lrc:"和他的照片就摆在手边"},
            {time:"00:41",lrc:"傻傻两个人笑得多甜"},
            {time:"00:47",lrc:"开始总是分分钟都妙不可言"},
            {time:"00:51",lrc:"谁都认为热情它永不会减"},
            {time:"00:54",lrc:"除了激情褪去后的那一点点倦"},
            {time:"01:01",lrc:"也许像谁说过的贪得无厌"},
            {time:"01:05",lrc:"活该应了谁说过的不知检点"},
            {time:"01:09",lrc:"总之那几年感性赢了理性那一面"},
            {time:"01:31",lrc:"阴天在不开灯的房间"},
            {time:"01:34",lrc:"当所有思绪都一点一点沉淀"},
            {time:"01:38",lrc:"爱恨情欲里的疑点盲点"},
            {time:"01:41",lrc:"呼之欲出那么明显"},
            {time:"01:45",lrc:"女孩通通让到一边"},
            {time:"01:48",lrc:"这歌里的细微末节就算都体验"},
            {time:"01:52",lrc:"若想真明白真要好几年"},
            {time:"02:27",lrc:"回想那一天喧闹的喜宴"},
            {time:"02:35",lrc:"耳边想起的究竟是序曲或完结篇?"},
            {time:"02:42",lrc:"感情不就是你情我愿"},
            {time:"02:45",lrc:"最好爱狠扯平俩不相欠"},
            {time:"02:49",lrc:"感情说穿了一人挣脱的一人去捡"},
            {time:"02:55",lrc:"男人大可不必百口莫辨"},
            {time:"03:00",lrc:"女人实在无须楚楚可怜"},
            {time:"03:03",lrc:"总之那几年你们俩个没有缘"},
            {time:"03:13",lrc:"阴天在不开灯的房间"},
            {time:"03:16",lrc:"当所有思绪都一点一点沉淀"},
            {time:"03:20",lrc:"爱情究竟是精神鸦"},
            {time:"03:23",lrc:"还是世纪末的无聊消遣"},
            {time:"03:27",lrc:"香烟氲成一摊光圈"},
            {time:"03:31",lrc:"和他的照片就摆在手边"},
            {time:"03:34",lrc:"傻傻两个人笑得多甜"},
            {time:"03:41",lrc:"傻傻两个人笑得多甜"},
            ]},
        {'name':"陪你度过漫长岁月", 'src':"music/陈奕迅-陪你度过漫长岁月-陪你度过漫长岁月.mp3", geshou:"陈奕迅",gcurl:"lrc/peini.lrc",geci:["目前没有搜索到歌词"]},
        {'name':"一万个舍不得", 'src':"music/庄心妍-一万个舍不得-错爱.mp3", geshou:"庄心妍",gcurl:"lrc/yiwan.lrc",geci:["目前没有搜索到歌词"]},]
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
            // kaiguan
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
        var m=(parseInt(v/ 60 ) )>=10 ? (parseInt(v/60 ) ): "0"+(parseInt(v /60) );
        // var m = parseInt(v/ 60)
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
        console.log(b)
        $(database[b].geci).each(function(i,v){
            // console.log(v)
            // console.log(v.time)
            // console.log(format(audio.currentTime))
            if(format(audio.currentTime) ==v.time){
                // alert(1)
                var a=i;
                $(".lyric").empty();
                if(i -3<=0){
                    i= 0;
                }else{
                    i= i-3;
                }
                for(var j=i ; j<database[b].geci.length;j++){
                    // console.log(index)
                    $("<p class="+ j +">"+database[b].geci[j].lrc+"</p>").appendTo(".geci .lyric")
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
    // $('.voices').on('click',function(){
    //     if( $(this).attr('pre-v') ){
    //         audio.volume=$(this).attr('pre-v');
    //         $(this).removeAttr('pre-v');
    //     }else{
    //         $(this).attr('pre-v',audio.volume)
    //         audio.volume=0;
    //     }
    // });
    $('.jinyin-btn').on('click',function(){
        // // audio.volume=0;
        // $('.voices .yuan').css({
        //     left:0
        // })
        if( $(this).attr('pre-v') ){
                    audio.volume=$(this).attr('pre-v');
                    $(this).removeAttr('pre-v');
            $('.jinyin-btn').removeClass('jinyin');
                }else{
                    $(this).attr('pre-v',audio.volume)
                    audio.volume=0;
                  $('.jinyin-btn').addClass('jinyin');
                }
        // if(!(audio.volume===0)){
        //     audio.volume=0;
        //     $('.jinyin-btn').addClass('jinyin');
        // }else{
        //     $('.jinyin-btn').removeClass('jinyin');
        //     audio.volume=$('.voices').attr('pre-v');
        //     $('.voices .yuan').css({
        //         left:audio.volume * $('.voices').width(),
        //     })
        // }

    })
    //音量改变调用这个函数
    audio.onvolumechange=function(){
        if(audio.volume===0){
            $('.voices').addClass('jinyin')
        }else{
            $('.voices').removeClass('jinyin')

        }
        $('.voices .yuan').css({left: $('.voices').width()*audio.volume});
    }

    //音量点击事件
    $('.voices').on('click',function(e){
        //让audio的音量也在变化
        audio.volume=(e.offsetX - $(this).find('.yuan').width()/2)/$(this).width();
        $('.voices .yuan').css({
            left:e.offsetX,
        })
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
         // console.log($(this).parent().parent().parent())
         $(this).parent().parent().remove();
     })

    ///////////////////////////move拖动/////////////////////////////////
    $('.jindu').on('mousedown',false);
    $(".jindu .yuan").on("mousedown",function(e){
        var px=$(this).offsetParent().offset().left;
        var w=e.offsetX
        $(document).on("mousemove",function(e){
            var ow=e.clientX;
            if( (ow-px-w) >$(".jindu").width() ){
                return;
            }
            audio.currentTime =audio.duration* (( ow-px-w )/$(".jindu").width())
            $(document).on("mouseup",function(){
                $(document).off("mousemove")
                $(document).off("mouseup")
            })
        })
    })
    //音量拖动
    $('.voices .yuan').on('mousedown',function(e){
        $(document).on('mousemove',function(e){
            var v=(e.pageX-$('.voices').offset().left)/$('.voices').width();
            v=(v>1)?1:v;
            v=(v<0)?0:v;
            audio.volume=v
        })
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
            $(document).off('mouseup');
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
                    if(v.name===key||v.geshou===key){
                        alert('有此歌曲或歌手');
                        audio.src=database[i].src;
                        $('.geci-title').text(database[i].name);
                        $('.tou img').attr('src',imglist[i]);
                        audio.play();
                    }else{
                        alert('没有此歌曲或歌手');
                        return;
                  }
            })
        })
    })
    // var gcflag=true;
    // $('.song-list li').on('click',function(){
    //     if(gcflag){
    //         $('.play-list').addClass('ani fade-out-right')
    //         $('.hid-play .lyric-box').css('display','block')
    //         gcflag=false;
    //     }else{
    //         $('.play-list').removeClass('ani fade-out-right')
    //         $('.hid-play .lyric-box').css('display','none')
    //         gcflag=true;
    //     }
    //
    //
    // })
var b=0;
//////////////////////////////更多歌词////////////////////////////
    $('.song-list').on('click','li',function(){
        $('.geci').css('display','block');
        $('.song-list').css('display','none');
        $('.float').css('display','block');
        $(".geci").append("</div><div class=lyric-box><div class=lyric></div></div>");
        // console.log(database[$(this).index()])
        b=$(this).index();
        $(database[$(this).index()].geci).each(function(i,v){
            $("<p class="+ i +">"+v.lrc+"</p>").appendTo(".geci .lyric");
        })
    })

})
