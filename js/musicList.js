/**************************************************
 * MKOnlinePlayer v2.32
 * 播放列表配置模块
 * 编写：mengkun(http://mkblog.cn)
 * 时间：2017-9-15
 *************************************************/
// 建议修改前先备份一下
// 获取 歌曲的网易云音乐ID 或 网易云歌单ID 的方法：
// 先在 js/player.js 中开启调试模式，然后按 F12 打开浏览器的控制台。播放歌曲或点开歌单即可看到相应信息

var musicList = [
    // 以下三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    // 预留列表：搜索结果
    {
        name: "Search Result",   // 播放列表名字
        cover: "images/searchresult.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：正在播放
    {
        name: "Now Playing",   // 播放列表名字
        cover: "images/nowplaying.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：播放历史
    {
        name: "History",   // 播放列表名字
        cover: "images/history.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },  
    // 以上三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    //*********************************************
    // 自定义列表开始，您可以自由添加您的自定义列表
    // {
    //     id: 3778678     // 云音乐热歌榜
    // },
    // {
    //     id: 3779629     // 云音乐新歌榜
    // },
    // {
    //     id: 4395559     // 华语金曲榜
    // },
    // {
    //     id: 64016     // 中国TOP排行榜（内地榜）
    // },
    // {
    //     id: 112504     // 中国TOP排行榜（港台榜）
    // },
    // {
    //     id: 19723756     // 云音乐飙升榜
    // },
    // {
    //     id: 2884035     // "网易原创歌曲榜"
    // },
    // 自定义列表教程开始！
    // 方式一：手动创建列表并添加歌曲信息
    // 温馨提示：各大音乐平台获取到的外链有效期均较短，因此 url 值应该设置为空，以让程序临时抓取
    {
        name: "My Karaoke",   // 播放列表名字
        cover: "images/myk.png", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "",  // 音乐ID
                name: "突然好想你(cover: 许飞)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0%EF%BC%88cover%E8%AE%B8%E9%A3%9E%EF%BC%89.m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "",  // 音乐ID
                name: "路过人间(cover: 郁可唯)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E8%B7%AF%E8%BF%87%E4%BA%BA%E9%97%B4%EF%BC%88cover%E9%83%81%E5%8F%AF%E5%94%AF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "",  // 音乐ID
                name: "遇见(cover: 孙燕姿)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E9%81%87%E8%A7%81%EF%BC%88cover%E5%AD%99%E7%87%95%E5%A7%BF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }
            // {
            //     id: "81175",
            //     name: "让我欢喜让我忧",
            //     artist: "周华健",
            //     album: "让我欢喜让我忧",
            //     source: "xiami",    // 虾米
            //     url_id: "81175",
            //     pic_id: "81175",
            //     lyric_id: "81175",
            //     pic: "https://pic.xiami.net/images/album/img58/1258/66271400572139.jpg@300h_300w_100q_1c.jpg",
            //     url: ""     // 虾米的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            // },
            // {
            //     id: "2a24dea6c74884195fe5b9732fd95ca8",
            //     name: "小幸运",
            //     artist: "金玟岐",
            //     album: "金玟岐翻唱作品集",
            //     source: "kugou",        // 酷狗
            //     url_id: "2a24dea6c74884195fe5b9732fd95ca8",
            //     pic_id: "2a24dea6c74884195fe5b9732fd95ca8",
            //     lyric_id: "2a24dea6c74884195fe5b9732fd95ca8",
            //     pic: "http://singerimg.kugou.com/uploadpic/softhead/400/20161226/20161226105135733.jpg",
            //     url: ""     // 酷狗的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            // },
            // {
            //     id: "121004737",
            //     name: "难忘今宵",
            //     artist: "李谷一",
            //     album: "难忘今宵",
            //     source: "baidu",        // 百度
            //     url_id: "121004737",
            //     pic_id: "121004737",
            //     lyric_id: "121004737",
            //     pic: "http://musicdata.baidu.com/data2/pic/2733cd9816b8618afd3038d5d9444940/266105319/266105319.jpg@s_0,w_150",
            //     url: ""         // 百度的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            // }  // 列表中最后一首歌大括号后面不要加逗号
        ]
    },
    {
        name: "This is Anpu",   // 播放列表名字
        cover: "images/thisisanpu.png", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "",  // 音乐ID
                name: "最好的时光",  // 音乐名字
                artist: "Anpu", // 艺术家名字
                album: "Compilation",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/anpu.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Anpu/%E5%AE%89%E6%BA%A5-%E6%9C%80%E5%A5%BD%E7%9A%84%E6%99%82%E5%85%89.mp3&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "",  // 音乐ID
                name: "艳火",  // 音乐名字
                artist: "Anpu", // 艺术家名字
                album: "Compilation",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/anpu.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Anpu/%E5%AE%89%E6%BA%A5-%E8%B1%94%E7%81%AB.mp3&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "",  // 音乐ID
                name: "关于我爱你",  // 音乐名字
                artist: "Anpu", // 艺术家名字
                album: "Compilation",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/anpu.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Anpu/%E5%BC%B5%E6%87%B8-%E9%97%9C%E6%96%BC%E6%88%91%E6%84%9B%E4%BD%A0.mp3&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }
        ]
    },
    {
        name: "the way to you (Disk 1)",   // 播放列表名字
        cover: "images/the_way_to_u_1.png", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "",  // 音乐ID
                name: "突然好想你(cover: 许飞)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0%EF%BC%88cover%E8%AE%B8%E9%A3%9E%EF%BC%89.m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "",  // 音乐ID
                name: "路过人间(cover: 郁可唯)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E8%B7%AF%E8%BF%87%E4%BA%BA%E9%97%B4%EF%BC%88cover%E9%83%81%E5%8F%AF%E5%94%AF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "",  // 音乐ID
                name: "遇见(cover: 孙燕姿)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E9%81%87%E8%A7%81%EF%BC%88cover%E5%AD%99%E7%87%95%E5%A7%BF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }
        ]
    },
    {
        name: "the way to you (Disk 2)",   // 播放列表名字
        cover: "images/the_way_to_u_2.png", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "",  // 音乐ID
                name: "突然好想你(cover: 许飞)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0%EF%BC%88cover%E8%AE%B8%E9%A3%9E%EF%BC%89.m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "",  // 音乐ID
                name: "路过人间(cover: 郁可唯)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E8%B7%AF%E8%BF%87%E4%BA%BA%E9%97%B4%EF%BC%88cover%E9%83%81%E5%8F%AF%E5%94%AF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "",  // 音乐ID
                name: "遇见(cover: 孙燕姿)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E9%81%87%E8%A7%81%EF%BC%88cover%E5%AD%99%E7%87%95%E5%A7%BF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }
        ]
    },
    {
        name: "the way to you (Disk 3)",   // 播放列表名字
        cover: "images/the_way_to_u_3.png", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "",  // 音乐ID
                name: "突然好想你(cover: 许飞)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0%EF%BC%88cover%E8%AE%B8%E9%A3%9E%EF%BC%89.m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "",  // 音乐ID
                name: "路过人间(cover: 郁可唯)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E8%B7%AF%E8%BF%87%E4%BA%BA%E9%97%B4%EF%BC%88cover%E9%83%81%E5%8F%AF%E5%94%AF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "",  // 音乐ID
                name: "遇见(cover: 孙燕姿)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E9%81%87%E8%A7%81%EF%BC%88cover%E5%AD%99%E7%87%95%E5%A7%BF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }
        ]
    },
    {
        name: "the way to you (Disk 4)",   // 播放列表名字
        cover: "images/the_way_to_u_4.png", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "",  // 音乐ID
                name: "突然好想你(cover: 许飞)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0%EF%BC%88cover%E8%AE%B8%E9%A3%9E%EF%BC%89.m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "",  // 音乐ID
                name: "路过人间(cover: 郁可唯)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E8%B7%AF%E8%BF%87%E4%BA%BA%E9%97%B4%EF%BC%88cover%E9%83%81%E5%8F%AF%E5%94%AF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "",  // 音乐ID
                name: "遇见(cover: 孙燕姿)",  // 音乐名字
                artist: "John", // 艺术家名字
                album: "John's Karaoke",    // 专辑名字
                source: "",     // 音乐来源
                url_id: "",  // 链接ID
                pic_id: "",  // 封面ID
                lyric_id: "",  // 歌词ID
                pic: "images/johnsk.png",    // 专辑图片
                url: "https://onedriveofzihao.vercel.app/api?path=/Entertain/Karaok/%E9%81%87%E8%A7%81%EF%BC%88cover%E5%AD%99%E7%87%95%E5%A7%BF).m4a&raw=true"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }
        ]
    }
    // // 方式二：直接提供网易云歌单ID
    // {
    //     id: 440103454   // 网易云歌单ID
    // }   // 播放列表的最后一项大括号后面不要加逗号
];