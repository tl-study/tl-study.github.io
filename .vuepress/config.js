module.exports = {
  "title": "鱼来",
  "description": "一个普普通通的摸鱼人罢了",
  "dest": "public",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      // title: 'vuepress',
      // description: ''
    },
    // '/en': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator'
    // },
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/recoluan",
        "icon": "reco-github"
      }
    ],
    'subSidebar': 'auto' ,//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "sidebar": 'auto',
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/avatar.jpeg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "T",
    "authorAvatar ": "/avatar.jpeg",
    // "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    // 看板娘
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'blackCat', 'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'z16'
        ],
        messages: { 
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        clean: true,
        messageStyle: { right: '68px', bottom: '290px' },
        width: 150,
        height: 220
      }
    ],
    // 公告
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   title: '公告',
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加我的QQ/vx 🎉🎉🎉',
    //       style: 'text-aligin: center;',
    //     },
    //     {
    //       type: 'text',
    //       content: '友链或疑问均可在留言板给我留言',
    //       style: 'text-align: center;'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/blog/donate'
    //     },
    //   ]
    // }],
    // 音乐播放器
    // [
    //   "@vuepress-reco/vuepress-plugin-bgm-player",{
    //     audios: [
    //       // 本地文件示例
    //       // {
    //       //   name: '장가갈 수 있을까',
    //       //   artist: '咖啡少年',
    //       //   url: '/bgm/1.mp3',
    //       //   cover: '/bgm/1.jpg'
    //       // },
    //       // 网络文件示例
    //       {
    //         name: '강남역 4번 출구',
    //         artist: 'Plastic / Fallin` Dild',
    //         url: 'https://assets.smallsunnyfox.com/music/2.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    //       },
    //       {
    //         name: '用胳膊当枕头',
    //         artist: '최낙타',
    //         url: 'https://assets.smallsunnyfox.com/music/3.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
    //       }
    //     ]  
    //   }
    // ],
  // 鼠标点击特效
  [
    "vuepress-plugin-cursor-effects",
    {
      size: 2,                    // size of the particle, default: 2
      shape: 'circle',  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }
  ],
  // 彩带背景
  ["ribbon-animation", {
    size: 90,   // 默认数据
    opacity: 0.3,  //  透明度
    zIndex: -1,   //  层级
    opt: {
      // 色带HSL饱和度
      colorSaturation: "80%",
      // 色带HSL亮度量
      colorBrightness: "60%",
      // 带状颜色不透明度
      colorAlpha: 0.65,
      // 在HSL颜色空间中循环显示颜色的速度有多快
      colorCycleSpeed: 6,
      // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
      verticalPosition: "center",
      // 到达屏幕另一侧的速度有多快
      horizontalSpeed: 200,
      // 在任何给定时间，屏幕上会保留多少条带
      ribbonCount: 2,
      // 添加笔划以及色带填充颜色
      strokeSize: 0,
      // 通过页面滚动上的因子垂直移动色带
      parallaxAmount: -0.5,
      // 随着时间的推移，为每个功能区添加动画效果
      animateSections: true
    },
    ribbonShow: false, //  点击彩带  true显示  false为不显示
    ribbonAnimationShow: true  // 滑动彩带
  }],
  [
    //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)摸鱼最快乐了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)鱼又咸了！",
      recoverTime: 2000
    }
  ],

  ],
}