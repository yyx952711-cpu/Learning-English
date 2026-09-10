/* ============ 内置素材数据 ============ */
/* 三大场景：生活 / 工作 / 旅行
   每个 topic：入门短句 sentences + 进阶对话 dialogs
   附难点词汇 words */

const SCENES = [
  {
    id: "life",
    name: "生活场景",
    icon: "🍚",
    desc: "点餐、购物、就医、闲聊",
    topics: [
      {
        id: "life-eat",
        name: "点餐",
        icon: "🍔",
        desc: "快餐店、餐厅里的常用表达",
        words: [
          { en: "order", zh: "v. 点餐；订购" },
          { en: "recommend", zh: "v. 推荐" },
          { en: "takeaway", zh: "n. 外带（美式 takeout）" },
          { en: "bill", zh: "n. 账单（美式 check）" },
        ],
        sentences: [
          { en: "Could I see the menu, please?", zh: "能看一下菜单吗？" },
          { en: "I'd like to order a hamburger and a coke.", zh: "我想点一个汉堡和一杯可乐。" },
          { en: "What would you recommend?", zh: "你有什么推荐的吗？" },
          { en: "For here or to go?", zh: "在这吃还是带走？" },
          { en: "Could I have the bill, please?", zh: "请给我买单好吗？" },
        ],
        dialogs: [
          {
            title: "餐厅点餐",
            lines: [
              { en: "Good evening. Are you ready to order?", zh: "晚上好，可以点餐了吗？", who: "A" },
              { en: "Yes, could I have the grilled chicken, please?", zh: "是的，我要一份烤鸡，谢谢。", who: "B" },
              { en: "Sure. Would you like a starter with that?", zh: "好的。要来一份开胃小食吗？", who: "A" },
              { en: "Yes, a small salad. And water, please.", zh: "好的，来一份小沙拉。再要杯水。", who: "B" },
              { en: "Anything for dessert? Our cheesecake is popular.", zh: "要甜点吗？我们的芝士蛋糕很受欢迎。", who: "A" },
              { en: "That sounds great. One cheesecake, please!", zh: "听起来不错，来一份芝士蛋糕！", who: "B" },
            ],
            words: [
              { en: "grilled", zh: "adj. 烤的" },
              { en: "dessert", zh: "n. 甜点" },
              { en: "cheesecake", zh: "n. 芝士蛋糕" },
            ],
          },
        ],
      },
      {
        id: "life-shop",
        name: "购物",
        icon: "🛍️",
        desc: "买东西、试穿、砍价、退换货",
        words: [
          { en: "fit", zh: "v. 合身" },
          { en: "on sale", zh: "打折中" },
          { en: "refund", zh: "n. 退款" },
        ],
        sentences: [
          { en: "Do you have this in a larger size?", zh: "这个有更大的码数吗？" },
          { en: "Can I try this on?", zh: "我能试穿一下吗？" },
          { en: "How much is this shirt?", zh: "这件衬衫多少钱？" },
          { en: "It doesn't fit. Can I get a refund?", zh: "不合身，能退款吗？" },
          { en: "I'm just looking, thanks.", zh: "我只是随便看看，谢谢。" },
        ],
        dialogs: [
          {
            title: "买鞋",
            lines: [
              { en: "Hi, looking for anything in particular?", zh: "您好，想找点什么？", who: "A" },
              { en: "I'm looking for running shoes, size 42.", zh: "我想买跑鞋，42码。", who: "B" },
              { en: "We have a few styles on sale. Why don't you try these?", zh: "有几款在打折，试试这双？", who: "A" },
              { en: "OK. Do you have them in black?", zh: "好，有黑色的吗？", who: "B" },
              { en: "Yes, here you are. The fitting room is over there.", zh: "有的，给您。试衣间在那边。", who: "A" },
              { en: "Great, I'll take them. Do you accept Alipay?", zh: "太好了，就买这双。能用支付宝吗？", who: "B" },
            ],
            words: [
              { en: "fitting room", zh: "n. 试衣间" },
              { en: "accept", zh: "v. 接受；支持（支付方式）" },
            ],
          },
        ],
      },
      {
        id: "life-chat",
        name: "闲聊 & 打招呼",
        icon: "💬",
        desc: "日常寒暄、聊爱好、聊天气",
        words: [
          { en: "how's it going", zh: "怎么了；最近怎么样（非正式问候）" },
          { en: "hobby", zh: "n. 爱好" },
          { en: "catch up", zh: "聊近况" },
        ],
        sentences: [
          { en: "Long time no see! How's it going?", zh: "好久不见！最近怎么样？" },
          { en: "What do you do in your free time?", zh: "你空闲时间都做什么？" },
          { en: "It's a lovely day, isn't it?", zh: "今天天气真好，不是吗？" },
          { en: "Sounds great! We should hang out sometime.", zh: "听起来不错！有空一起玩啊。" },
          { en: "I have to run. Talk to you later!", zh: "我得走了，回头聊！" },
        ],
        dialogs: [
          {
            title: "认识新朋友",
            lines: [
              { en: "Hi, I'm Tom. Nice to meet you.", zh: "嗨，我是 Tom。很高兴认识你。", who: "A" },
              { en: "Nice to meet you too. I'm Li Ming.", zh: "我也很高兴认识你，我是李明。", who: "B" },
              { en: "Are you from around here?", zh: "你是这附近的人吗？", who: "A" },
              { en: "No, I just moved here last month.", zh: "不是，我上个月才搬过来。", who: "B" },
              { en: "Cool! What do you like to do on weekends?", zh: "真好！你周末喜欢做什么？", who: "A" },
              { en: "I like hiking and taking photos.", zh: "我喜欢爬山和拍照。", who: "B" },
            ],
            words: [
              { en: "around here", zh: "在这附近" },
              { en: "hiking", zh: "n. 徒步旅行" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "work",
    name: "工作场景",
    icon: "💼",
    desc: "会议、汇报、面试、接待",
    topics: [
      {
        id: "work-meeting",
        name: "会议沟通",
        icon: "📊",
        desc: "会上简短发言、表达意见",
        words: [
          { en: "agenda", zh: "n. 议程" },
          { en: "action item", zh: "行动事项" },
          { en: "on the same page", zh: "达成共识" },
        ],
        sentences: [
          { en: "Sorry, can I jump in here?", zh: "抱歉，我可以插一句吗？" },
          { en: "Just to confirm, are we meeting at ten?", zh: "确认一下，我们是十点开会吗？" },
          { en: "I think that makes sense.", zh: "我觉得有道理。" },
          { en: "Could you speak up a little?", zh: "能稍微大声一点吗？" },
          { en: "Let's wrap it up in five minutes.", zh: "我们五分钟内结束吧。" },
        ],
        dialogs: [
          {
            title: "线上周会",
            lines: [
              { en: "Let's start. Any updates from your side?", zh: "开始吧。你那边有什么进展？", who: "A" },
              { en: "The report is done. I'll send it after the meeting.", zh: "报告好了，会后我就发出去。", who: "B" },
              { en: "Great. Did you hear back from the client?", zh: "很好。客户那边有回复吗？", who: "A" },
              { en: "Yes, they want to move the deadline to Friday.", zh: "有回复，他们想提前到周五。", who: "B" },
              { en: "OK, that works. I'll email them to confirm.", zh: "可以，那我发邮件跟他们确认。", who: "A" },
              { en: "Thanks. Anything else from me?", zh: "好的，我这边还有别的事吗？", who: "B" },
            ],
            words: [
              { en: "hear back from", zh: "收到…的回复" },
              { en: "deadline", zh: "n. 截止日期" },
            ],
          },
        ],
      },
      {
        id: "work-interview",
        name: "面试",
        icon: "🎯",
        desc: "自我介绍、问答、表达优势",
        words: [
          { en: "strength", zh: "n. 优势、长处" },
          { en: "teamwork", zh: "n. 团队协作" },
          { en: "notice period", zh: "离职通知期" },
        ],
        sentences: [
          { en: "Thank you for having me today.", zh: "感谢您今天给我面试机会。" },
          { en: "I have three years of experience in this field.", zh: "我在这个领域有三年经验。" },
          { en: "My strength is solving problems quickly.", zh: "我的优势是能快速解决问题。" },
          { en: "Why do you want to join us?", zh: "您为什么想加入我们？" },
          { en: "When can I expect to hear back?", zh: "大概什么时候能有回复？" },
        ],
        dialogs: [
          {
            title: "面试问答",
            lines: [
              { en: "Tell me a little about yourself.", zh: "简单介绍一下你自己。", who: "A" },
              { en: "I'm a project assistant with two years of experience.", zh: "我是一名有两年经验的项目助理。", who: "B" },
              { en: "What's your biggest strength?", zh: "你最大的优势是什么？", who: "A" },
              { en: "I'm organized and good with deadlines.", zh: "我做事有条理，能按时完成任务。", who: "B" },
              { en: "Do you have any questions for us?", zh: "你有什么要问我们的吗？", who: "A" },
              { en: "Yes, what does a typical day look like here?", zh: "有的，请问这里一天的工作是什么样的？", who: "B" },
            ],
            words: [
              { en: "organized", zh: "adj. 有条理的" },
              { en: "typical", zh: "adj. 典型的、典型的" },
            ],
          },
        ],
      },
      {
        id: "work-visitor",
        name: "同事交流 & 接待访客",
        icon: "🤝",
        desc: "请求帮忙、接待客户",
        words: [
          { en: "to be honest", zh: "说实话" },
          { en: "make it", zh: "赶到；做到" },
          { en: "show around", zh: "带…参观" },
        ],
        sentences: [
          { en: "Could you help me with this file?", zh: "能帮我处理一下这个文件吗？" },
          { en: "Are you free for a quick chat?", zh: "有空简短聊两句吗？" },
          { en: "Would you like something to drink?", zh: "您想喝点什么？" },
          { en: "Let me show you around the office.", zh: "我带您参观一下办公室。" },
          { en: "Sorry, I can't make it to the meeting.", zh: "抱歉，我参加不了这个会了。" },
        ],
        dialogs: [
          {
            title: "接待客户来访",
            lines: [
              { en: "Welcome! You must be Ms. Wang.", zh: "欢迎！您一定是王女士吧。", who: "A" },
              { en: "Yes, it's nice to finally meet you in person.", zh: "是的，终于见到您本人了，很开心。", who: "B" },
              { en: "Likewise. How was your trip?", zh: "我也是。旅途还顺利吗？", who: "A" },
              { en: "Quite smooth, thank you.", zh: "挺顺利的，谢谢。", who: "B" },
              { en: "Let me show you around, and then we can talk business.", zh: "我先带您参观一下，然后我们再谈正事。", who: "A" },
              { en: "That sounds perfect.", zh: "听起来太好了。", who: "B" },
            ],
            words: [
              { en: "in person", zh: "当面、本人" },
              { en: "talk business", zh: "谈正事" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "travel",
    name: "旅行场景",
    icon: "✈️",
    desc: "机场、酒店、问路、求助",
    topics: [
      {
        id: "travel-airport",
        name: "机场",
        icon: "🛫",
        desc: "值机、安检、登机",
        words: [
          { en: "boarding pass", zh: "n. 登机牌" },
          { en: "aisle seat", zh: "靠走道的座位（window seat 靠窗）" },
          { en: "gate", zh: "n. 登机口" },
        ],
        sentences: [
          { en: "Here's my passport and ticket.", zh: "这是我的护照和机票。" },
          { en: "Could I get an aisle seat, please?", zh: "能给我一个靠走道的座位吗？" },
          { en: "How many bags can I check in?", zh: "我能托运几件行李？" },
          { en: "Where is gate 22?", zh: "22号登机口在哪里？" },
          { en: "I missed my flight. What should I do?", zh: "我错过航班了，该怎么办？" },
        ],
        dialogs: [
          {
            title: "值机托运",
            lines: [
              { en: "Good morning. May I see your passport?", zh: "早上好，请出示您的护照。", who: "A" },
              { en: "Sure, here you are. One suitcase to check in.", zh: "好的，给您。托运一件行李。", who: "B" },
              { en: "Window or aisle seat?", zh: "靠窗还是靠走道？", who: "A" },
              { en: "Aisle, please. Is the flight on time?", zh: "靠走道，航班准点吗？", who: "B" },
              { en: "It's on time. Boarding starts at 9:40 at gate 15.", zh: "准点。9点40在15号登机口开始登机。", who: "A" },
              { en: "Great, thanks a lot!", zh: "好的，多谢！", who: "B" },
            ],
            words: [
              { en: "check in", zh: "托运；办理登机" },
              { en: "on time", zh: "准点" },
            ],
          },
        ],
      },
      {
        id: "travel-hotel",
        name: "酒店",
        icon: "🏨",
        desc: "入住、退房、问服务",
        words: [
          { en: "reservation", zh: "n. 预订" },
          { en: "check out", zh: "退房（check in 入住）" },
          { en: "deposit", zh: "n. 押金" },
        ],
        sentences: [
          { en: "I have a reservation under the name Li.", zh: "我用“李”的名字订了房。" },
          { en: "What time is check-out?", zh: "几点退房？" },
          { en: "Is there a gym in the hotel?", zh: "酒店里有健身房吗？" },
          { en: "Can I get an extra blanket, please?", zh: "能给我加一条毯子吗？" },
          { en: "Could you call a taxi for me?", zh: "能帮我叫一辆出租车吗？" },
        ],
        dialogs: [
          {
            title: "前台入住",
            lines: [
              { en: "Good afternoon. How can I help you?", zh: "下午好，有什么可以帮您的？", who: "A" },
              { en: "Hi, I have a reservation for tonight, under Lin.", zh: "你好，我订了今晚的房，姓林。", who: "B" },
              { en: "Yes, a double room for two nights. May I see an ID?", zh: "好的，双人间住两晚。请出示证件。", who: "A" },
              { en: "Here's my passport. Is breakfast included?", zh: "这是我的护照。含早餐吗？", who: "B" },
              { en: "Yes, from 7 to 10 on the second floor.", zh: "含的，7点到10点，在二楼。", who: "A" },
              { en: "Perfect. What's the Wi-Fi password?", zh: "太好了，Wi-Fi 密码是多少？", who: "B" },
            ],
            words: [
              { en: "included", zh: "adj. 包含在内的" },
              { en: "under the name", zh: "用…的名字（预订）" },
            ],
          },
        ],
      },
      {
        id: "travel-help",
        name: "问路 & 突发求助",
        icon: "🆘",
        desc: "迷路、求助、买票",
        words: [
          { en: "around the corner", zh: "拐角处" },
          { en: "lost", zh: "adj. 迷路的" },
          { en: "pharmacy", zh: "n. 药店" },
        ],
        sentences: [
          { en: "Excuse me, how do I get to the train station?", zh: "打扰一下，火车站怎么走？" },
          { en: "Is it within walking distance?", zh: "走过去远吗？" },
          { en: "Can I buy tickets here?", zh: "能在这里买票吗？" },
          { en: "I'm lost. Could you help me?", zh: "我迷路了，能帮帮我吗？" },
          { en: "Where's the nearest pharmacy?", zh: "最近的药店在哪里？" },
        ],
        dialogs: [
          {
            title: "街上问路",
            lines: [
              { en: "Excuse me, could you help me find a bank?", zh: "打扰一下，能帮我找一家银行吗？", who: "A" },
              { en: "Sure. There's one around the corner.", zh: "可以。拐角就有一家。", who: "B" },
              { en: "Is it far from here?", zh: "离这儿远吗？", who: "A" },
              { en: "No, just two minutes' walk.", zh: "不远，走两分钟就到。", who: "B" },
              { en: "Thanks! And do you know when it opens?", zh: "谢谢！它几点开门您知道吗？", who: "A" },
              { en: "It opens at 9. You've got plenty of time.", zh: "九点开门，时间还充裕着呢。", who: "B" },
            ],
            words: [
              { en: "plenty of", zh: "充足的、大量的" },
              { en: "two minutes' walk", zh: "两分钟步行距离" },
            ],
          },
        ],
      },
    ],
  },
];
