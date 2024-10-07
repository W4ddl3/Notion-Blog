/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '大语言模型聚合中继系统', // 英雄区文字
  STARTER_HERO_TITLE_2: '通过标准 OpenAI API 格式访问所有大语言模型', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '快速上手', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://docs.b3n.fun/quick-start', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '控制面板', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://api.b3n.fun/login', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/show.webp', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '登录',
  STARTER_NAV_BUTTON_1_URL: 'https://api.b3n.fun/login',

  STARTER_NAV_BUTTON_2_TEXT: '注册',
  STARTER_NAV_BUTTON_2_URL: 'https://api.b3n.fun/register',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '优势', // 特性
  STARTER_FEATURE_TEXT_1: '本平台的主要特性', // 特性
  STARTER_FEATURE_TEXT_2: ' ', // 特性

  STARTER_FEATURE_1_TITLE_1: '安全高性能', // 特性1
  STARTER_FEATURE_1_TEXT_1: '全站链路数据加密传输。企业级动态扩容，满足您的高并发需求！', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: '全模型支持', // 特性2
  STARTER_FEATURE_2_TEXT_1: '支持 OpenAI, Anthropic, Google, Midjourney 等主流大语言模型。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: '', // 特性2

  STARTER_FEATURE_3_TITLE_1: '无速率限制', // 特性3
  STARTER_FEATURE_3_TEXT_1: '与官方严格的 RPM、TPM 限制不同，我们不限制您的请求速率！', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: '0 使用门槛', // 特性4
  STARTER_FEATURE_4_TEXT_1: '无论您是 AI 领域的萌新、开发者，我们均提供详细的使用指导。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '简单好用的多模型聚合方案',
  STARTER_ABOUT_TEXT: '我们的愿景是帮助您的团队、产品实现人工智能赋能！<br/><br/>我们与国内外上百家企业、高校保持着长期紧密的合作关系。',
  STARTER_ABOUT_BUTTON_TEXT: '合作洽谈',
  STARTER_ABOUT_BUTTON_URL: '/kefu.webp',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '50000+',
  STARTER_ABOUT_TIPS_2: '用户',
  STARTER_ABOUT_TIPS_3: '正在使用中',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_TESTIMONIALS_TEXT_2:
    '',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '这个平台真是AI开发者的福音！无论是OpenAI还是Midjourney的模型，集成和调用都非常简单，帮助我大大提升了开发效率。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Night Owl',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '资深 AI 开发者',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '使用体验太棒了！可以轻松访问多个顶级AI模型，尤其是Google的模型，这在其他平台上很难找到。界面友好，服务稳定。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Techer123',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '科技爱好者',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '作为一个非技术背景的用户，我非常喜欢这个平台的易用性。快速上手，各种AI模型都能一键调用，非常便捷！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'r0bby',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '普通用户',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '提供的服务太全面了，支持多种大语言模型，这对我们团队来说非常重要，省去了很多整合的麻烦。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Anno',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '创业团队负责人',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '超级满意！用这个平台管理AI模型变得如此简单，我再也不需要切换多个平台，节省了大量时间。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'TexRider',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '效率狂魔',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '平台支持的AI模型种类丰富，而且操作直观，即使是新手也能很快上手，真的是开发者的好帮手！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Fox',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI初学者',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '这个平台大大简化了我使用AI模型的流程，特别是整合了多个顶级平台的模型，简直不能更方便！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'James Wu',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '技术狂热者',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: false, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'NotionNext有帮助文档吗？',
  STARTER_FAQ_1_ANSWER:
    'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '部署后要如何编写文章？',
  STARTER_FAQ_2_ANSWER:
    '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '站点部署失败，更新失败？',
  STARTER_FAQ_3_ANSWER:
    '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助',

  STARTER_FAQ_4_QUESTION: '文章没有实时同步？',
  STARTER_FAQ_4_ANSWER:
    '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: false, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于NotionNext的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: false, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，福建',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@tangly1024.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: '帮助支持',
          URL: 'https://docs.tangly1024.com/article/how-to-question'
        },
        {
          TITLE: '合作申请',
          URL: 'https://docs.tangly1024.com/article/my-service'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: '升级指南',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        {
          TITLE: 'Notion开始写作',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: '快捷键提升效率',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: '中国大陆使用Notion',
          URL: 'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: false,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIOTN:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: false, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
