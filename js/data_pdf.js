/* ============ 素材库：Everyday Conversations（美国国务院 AEF 教材）============
   来源：americanenglish.state.gov《Everyday Conversations: Learning American English》
   30 组对话，官方授权公开资源（公有领域出版）。中文译文为翻译注释。 */

const PDF_UNITS = [
  {
    id: "social",
    name: "社交与寒暄",
    icon: "👋",
    desc: "打招呼、介绍、闲聊（译自 Everyday Conversations 第 1 单元）",
    topics: [
      {
        id: "d11",
        name: "正式寒暄",
        icon: "🤝",
        desc: "Dialogue 1-1 · Formal Greetings",
        words: [
          { en: "How are you doing?", zh: "近来怎么样？（口语常用问候）" },
          { en: "would you mind (doing)", zh: "你介意…吗（礼貌请求）" },
          { en: "Don't mention it", zh: "别客气（=You're welcome）" },
        ],
        sentences: [
          { en: "Good morning, Professor Austin, how are you doing?", zh: "早上好，Austin 教授，您近来好吗？" },
          { en: "It's a pleasure to meet you.", zh: "很高兴见到您。" },
          { en: "Thank you so much for helping us.", zh: "非常感谢您帮助我们。" },
        ],
        dialogs: [
          {
            title: "Formal Greetings 正式寒暄",
            lines: [
              { en: "Good morning, Professor Austin, how are you doing?", zh: "早上好，Austin 教授，您近来好吗？", who: "A" },
              { en: "Good morning, James. I am doing well. And you?", zh: "早上好，James。我很好，你呢？", who: "B" },
              { en: "I'm great, thank you. This is my friend Emma. She is thinking about applying to this college. She has a few questions. Would you mind telling us about the process, please?", zh: "我很好，谢谢。这位是我的朋友 Emma。她在考虑申请这所大学，有几个问题。您方便给我们讲讲申请流程吗？", who: "A" },
              { en: "Hello, Emma! It's a pleasure to meet you. I'm more than happy to speak with you. Please stop by my office next week.", zh: "你好，Emma！很高兴见到你。我很乐意和你聊聊。下周请到我的办公室来坐坐。", who: "B" },
              { en: "It's a pleasure to meet you, professor. Thank you so much for helping us.", zh: "很高兴见到您，教授。非常感谢您帮助我们。", who: "A" },
              { en: "Don't mention it. Hopefully, I will be able to answer your questions!", zh: "别客气。希望我能解答你的疑问！", who: "B" },
            ],
            words: [
              { en: "apply to", zh: "v. 申请（学校/职位）" },
              { en: "stop by", zh: "顺路拜访、到访" },
            ],
          },
        ],
      },
      {
        id: "d12",
        name: "熟人叙旧",
        icon: "🙋",
        desc: "Dialogue 1-2 · Informal Greetings and Farewells",
        words: [
          { en: "How's it going?", zh: "最近怎么样？（非正式问候）" },
          { en: "Where are you off to?", zh: "你去哪儿啊？（口语）" },
          { en: "See you later", zh: "回头见" },
        ],
        sentences: [
          { en: "Hi, Helen! How's it going?", zh: "嗨，Helen！最近怎么样？" },
          { en: "Fine, thanks — and you?", zh: "挺好的，谢谢——你呢？" },
          { en: "Where are you off to?", zh: "你这是要去哪儿？" },
          { en: "Good luck!", zh: "祝你好运！" },
        ],
        dialogs: [
          {
            title: "Informal Greetings 朋友偶遇",
            lines: [
              { en: "Hi, Helen! How's it going?", zh: "嗨，Helen！最近怎么样？", who: "A" },
              { en: "Fine, thanks — and you?", zh: "挺好的，谢谢——你呢？", who: "B" },
              { en: "Just fine. Where are you off to?", zh: "也挺好。你这是要去哪儿？", who: "A" },
              { en: "To the library. I've got a history exam next week and need to start studying. Ugh.", zh: "去图书馆。下周有历史考试，得开始复习了。唉。", who: "B" },
              { en: "Oh, no. Well, I'll see you later then. Good luck!", zh: "唉，真不容易。那回头见，祝你顺利！", who: "A" },
              { en: "Thanks. See you later.", zh: "谢谢，回头见。", who: "B" },
            ],
            words: [
              { en: "off to", zh: "去…的路上" },
              { en: "exam", zh: "n. 考试" },
            ],
          },
        ],
      },
      {
        id: "d13",
        name: "正式引荐",
        icon: "👔",
        desc: "Dialogue 1-3 · Formal Introductions",
        words: [
          { en: "I'd like you to meet…", zh: "请允许我介绍…" },
          { en: "economist", zh: "n. 经济学家" },
          { en: "by any chance", zh: "会不会恰好是…" },
        ],
        sentences: [
          { en: "It's nice to meet you.", zh: "很高兴认识您。" },
          { en: "That's my field, too.", zh: "那也是我的专业领域。" },
          { en: "How did you guess?", zh: "您怎么猜到的？" },
          { en: "I've read your articles. They're excellent.", zh: "我读过您的文章，写得非常好。" },
        ],
        dialogs: [
          {
            title: "Formal Introductions 正式引荐",
            lines: [
              { en: "Mr. Wilson, I'd like you to meet Dr. Edward Smith.", zh: "Wilson 先生，请允许我介绍 Edward Smith 博士。", who: "A" },
              { en: "It's nice to meet you, Dr. Smith.", zh: "很高兴认识您，Smith 博士。", who: "B" },
              { en: "Pleasure to meet you, too.", zh: "我也很高兴认识您。", who: "A" },
              { en: "Dr. Smith is an economist. He just finished writing a book on international trade.", zh: "Smith 博士是位经济学家，他刚写完一本关于国际贸易的书。", who: "A" },
              { en: "Oh? That's my field, too. I work for the United Nations.", zh: "哦？那也是我从事的领域。我在联合国工作。", who: "B" },
              { en: "In the Development Program, by any chance?", zh: "会不会恰好是在发展计划署工作？", who: "A" },
              { en: "Yes. How did you guess?", zh: "是啊，您怎么猜到的？", who: "B" },
              { en: "I've read your articles on technical assistance. They're excellent.", zh: "我读过您关于技术援助的文章，写得非常出色。", who: "A" },
            ],
            words: [
              { en: "field", zh: "n. 领域、行业" },
              { en: "technical assistance", zh: "技术援助" },
            ],
          },
        ],
      },
      {
        id: "d14",
        name: "非正式介绍",
        icon: "🥤",
        desc: "Dialogue 1-4 · Informal Introductions",
        words: [
          { en: "let me introduce you", zh: "让我给你介绍一下" },
          { en: "Nice to meet you", zh: "很高兴认识你" },
          { en: "Sure", zh: "当然好啊（口语=欣然同意）" },
        ],
        sentences: [
          { en: "Who's the tall woman next to Barbara?", zh: "Barbara 旁边那位高个子女士是谁？" },
          { en: "Didn't you meet her at Steve's party?", zh: "你在 Steve 的派对上不是见过她吗？" },
          { en: "Let me introduce you to her now.", zh: "那我现在给你们介绍一下。" },
          { en: "Would you like a drink?", zh: "要来一杯喝的吗？" },
        ],
        dialogs: [
          {
            title: "Informal Introductions 聚会上认识新朋友",
            lines: [
              { en: "Who's the tall woman next to Barbara?", zh: "Barbara 旁边那位高个子女士是谁？", who: "A" },
              { en: "That's her friend Mary. Didn't you meet her at Steve's party?", zh: "那是她的朋友 Mary。你在 Steve 的派对上不是见过她吗？", who: "B" },
              { en: "No, I wasn't at Steve's party.", zh: "没有，我没去 Steve 的派对。", who: "A" },
              { en: "Oh! Then let me introduce you to her now. Mary, this is my friend Jim.", zh: "哦！那我现在带你认识一下。Mary，这是我朋友 Jim。", who: "B" },
              { en: "Hi, Jim. Nice to meet you.", zh: "嗨，Jim，很高兴认识你。", who: "A" },
              { en: "You, too. Would you like a drink?", zh: "我也很高兴。想喝点什么吗？", who: "B" },
              { en: "Sure, let's go get one.", zh: "好啊，走去拿一杯。", who: "A" },
            ],
            words: [
              { en: "introduce … to …", zh: "把…介绍给…" },
              { en: "drink", zh: "n. 一杯饮料" },
            ],
          },
        ],
      },
      {
        id: "d15",
        name: "几点了？",
        icon: "⏰",
        desc: "Dialogue 1-5 · What Time Is It?",
        words: [
          { en: "a quarter after seven", zh: "七点一刻（7:15）" },
          { en: "rush hour", zh: "高峰时段" },
          { en: "Don't panic", zh: "别慌" },
        ],
        sentences: [
          { en: "What time is it? We're going to be late!", zh: "几点了？我们要迟到了！" },
          { en: "It's a quarter after seven. We're on time.", zh: "七点一刻，我们不会迟到。" },
          { en: "Rush hour is almost over.", zh: "高峰期马上就过了。" },
        ],
        dialogs: [
          {
            title: "What Time Is It? 赴约路上看时间",
            lines: [
              { en: "What time is it? We're going to be late!", zh: "几点了？我们要迟到了！", who: "A" },
              { en: "It's a quarter after seven. We're on time. Don't panic.", zh: "现在七点一刻，来得及，别慌。", who: "B" },
              { en: "But I thought we had to be at the restaurant by 7:30 for the surprise party. We'll never make it there with all this evening traffic.", zh: "可我以为是 7 点半就要到餐厅参加惊喜派对，晚上这么多车我们根本赶不到。", who: "A" },
              { en: "Sure we will. Rush hour is almost over. Anyway, the party starts at 8:00. But I do need help with directions. Can you call the restaurant and ask them where we park our car?", zh: "能赶到的，高峰期快结束了。反正派对 8 点才开始。不过我确实需要指路帮忙，你能给餐厅打个电话问问我们在哪儿停车吗？", who: "B" },
            ],
            words: [
              { en: "make it", zh: "来得及、成功到达" },
              { en: "directions", zh: "n. 路线指引" },
            ],
          },
        ],
      },
      {
        id: "d16",
        name: "电话邀约",
        icon: "📞",
        desc: "Dialogue 1-6 · A Telephone Call",
        words: [
          { en: "It's John", zh: "我是 John（电话里报身份用 it's）" },
          { en: "I was wondering if…", zh: "不知道你是否…（委婉提议）" },
          { en: "pick you up", zh: "开车来接你" },
        ],
        sentences: [
          { en: "Hi, Alice, it's John. How are you?", zh: "嗨，Alice，我是 John。你好吗？" },
          { en: "I was wondering if you'd like to go to a movie tonight.", zh: "不知道你今晚想不想一起去看场电影。" },
          { en: "Sure, I'd love to! What's playing?", zh: "好啊，我很乐意！放什么电影？" },
          { en: "I'll pick you up around 7:30.", zh: "我七点半左右去接你。" },
        ],
        dialogs: [
          {
            title: "A Telephone Call 电话约看电影",
            lines: [
              { en: "Hi, Alice, it's John. How are you?", zh: "嗨，Alice，我是 John。你好吗？", who: "A" },
              { en: "Oh, hi, John! I was just thinking about you.", zh: "哦，嗨 John！我刚好正想起你呢。", who: "B" },
              { en: "That's nice. I was wondering if you'd like to go to a movie tonight.", zh: "真巧。不知道你今晚有没有兴趣一起去看场电影？", who: "A" },
              { en: "Sure, I'd love to! What's playing?", zh: "当然好啊，我很乐意！上演什么片子？", who: "B" },
              { en: "I was thinking about that new comedy Lights Out. What do you think?", zh: "我想看那部新喜剧《 Lights Out》，你觉得怎么样？", who: "A" },
              { en: "Sounds great!", zh: "听起来不错！", who: "B" },
              { en: "OK, I'll pick you up around 7:30. The movie starts at 8:00.", zh: "好，那我七点半左右去接你。电影八点开场。", who: "A" },
              { en: "See you then. Bye!", zh: "到时见，拜拜！", who: "B" },
            ],
            words: [
              { en: "comedy", zh: "n. 喜剧" },
              { en: "What's playing?", zh: "现在上映什么？（影院语境）" },
            ],
          },
        ],
      },
      {
        id: "d17",
        name: "电话听不清",
        icon: "📵",
        desc: "Dialogue 1-7 · Can You Say That Again?",
        words: [
          { en: "cutting out", zh: "（信号）断断续续" },
          { en: "Can you repeat that?", zh: "能再说一遍吗？" },
          { en: "reception", zh: "n. 手机信号" },
        ],
        sentences: [
          { en: "Can you repeat that, please?", zh: "麻烦你再说一遍好吗？" },
          { en: "Sorry, the phone is cutting out.", zh: "不好意思，电话信号断断续续的。" },
          { en: "Can you hear me now?", zh: "现在能听清我说话吗？" },
          { en: "My phone has really bad reception here.", zh: "我这儿手机信号特别差。" },
        ],
        dialogs: [
          {
            title: "Can You Say That Again? 信号差听不清",
            lines: [
              { en: "Hello? Hi, Stephanie, how are things at the office?", zh: "喂？嗨，Stephanie，办公室里一切可好？", who: "A" },
              { en: "Hi, Luke! How are you? Can you please stop and pick up extra paper for the computer printer?", zh: "嗨，Luke！你好吗？你顺路能停下来买点打印机的备用纸回来吗？", who: "B" },
              { en: "What did you say? Can you repeat that, please? Did you say to pick up ink for the printer? Sorry, the phone is cutting out.", zh: "你说什么？麻烦再说一遍好吗？你是说去买打印机墨水？抱歉，信号断断续续的。", who: "A" },
              { en: "Can you hear me now? No, I need more computer paper. Listen, I'll text you exactly what I need. Thanks, Luke. Talk to you later.", zh: "现在听得清吗？不是的，我需要更多打印纸。这样吧，我把需要的东西用短信发你。多谢了 Luke，回聊。", who: "B" },
              { en: "Thanks, Stephanie. Sorry, my phone has really bad reception here.", zh: "好的谢谢，Stephanie。不好意思，我这边信号真的很差。", who: "A" },
            ],
            words: [
              { en: "reception", zh: "n. （信号）接收" },
              { en: "text you", zh: "给你发短信" },
            ],
          },
        ],
      },
      {
        id: "d18",
        name: "街头重逢",
        icon: "😲",
        desc: "Dialogue 1-8 · Coincidences",
        words: [
          { en: "Long time no see!", zh: "好久不见！" },
          { en: "What a coincidence!", zh: "真巧啊！" },
          { en: "What a small world", zh: "世界真小（巧遇感叹）" },
        ],
        sentences: [
          { en: "Long time no see!", zh: "好久不见！" },
          { en: "What a coincidence! I haven't seen you in ages!", zh: "真巧！咱们好久没见了！" },
          { en: "What a small world.", zh: "世界真小啊。" },
        ],
        dialogs: [
          {
            title: "Coincidences 意外偶遇老友",
            lines: [
              { en: "Well, hello there, Julia! Long time no see!", zh: "哎呀，你好啊 Julia！好久不见！", who: "A" },
              { en: "Meg! Hi! What a coincidence! I haven't seen you in ages! What are you doing here?", zh: "Meg！嗨！太巧了吧！我们好多年没见了！你怎么会在这儿？", who: "B" },
              { en: "I just got a new job in the city, so I'm shopping for some clothes. Hey, what do you think of this shirt?", zh: "我刚在城里找了份新工作，所以来逛逛买几件衣服。嘿，你觉得这件衬衫怎么样？", who: "A" },
              { en: "Hmmm … well, you know how much I love blue. See? I've got the same shirt!", zh: "嗯……你也知道我多喜欢蓝色。看？我有一件一模一样的！", who: "B" },
              { en: "You always did have good taste! What a small world.", zh: "你品味一直这么好！世界真小啊。", who: "A" },
            ],
            words: [
              { en: "in ages", zh: "很久（=in a long time）" },
              { en: "taste", zh: "n. 品味" },
            ],
          },
        ],
      },
      {
        id: "d19",
        name: "聊聊天气",
        icon: "❄️",
        desc: "Dialogue 1-9 · Weather Report",
        words: [
          { en: "cold front", zh: "n. 冷锋、寒流" },
          { en: "wind chill", zh: "风寒效应（风大显得更冷）" },
          { en: "go numb", zh: "冻麻了" },
        ],
        sentences: [
          { en: "It's freezing outside!", zh: "外面太冷了！" },
          { en: "I thought this cold front was supposed to pass.", zh: "我还以为这股寒潮该过去了。" },
          { en: "That's what I read online this morning.", zh: "我今早网上就是这么看的。" },
          { en: "The wind chill is really driving down the temperature.", zh: "风寒效应把气温拉得更低了。" },
        ],
        dialogs: [
          {
            title: "Weather Report 出门遇寒潮",
            lines: [
              { en: "It's freezing outside! What happened to the weather report? I thought this cold front was supposed to pass.", zh: "外面冻死了！天气预报怎么搞的？我原以为这股寒潮就要过去了。", who: "A" },
              { en: "Yeah, I thought so too. That's what I read online this morning.", zh: "是啊，我也这么觉得。我今早网上看到的就是这个说法。", who: "B" },
              { en: "I guess the wind chill is really driving down the temperature.", zh: "我猜是风寒效应把温度压得更低了。", who: "A" },
              { en: "Can we go inside? I feel like my toes are starting to go numb.", zh: "咱们能进屋里去吗？我感觉脚趾都快冻麻了。", who: "B" },
            ],
            words: [
              { en: "freezing", zh: "adj. 冰冷的（口语：冷极了）" },
              { en: "numb", zh: "adj. 麻木的" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "town",
    name: "城市生活",
    icon: "🏙️",
    desc: "点餐、就医、问路、购物、办事（译自 Everyday Conversations 第 2 单元）",
    topics: [
      {
        id: "d21",
        name: "餐厅点餐",
        icon: "🍽️",
        desc: "Dialogue 2-1 · Ordering a Meal",
        words: [
          { en: "Are you ready to order?", zh: "可以点餐了吗？" },
          { en: "rare / medium / well done", zh: "牛排熟度：一分/五分/全熟" },
          { en: "lemonade", zh: "n. 柠檬水" },
        ],
        sentences: [
          { en: "Can I start you off with something to drink?", zh: "要不要先来点喝的？" },
          { en: "I'll have iced tea, please.", zh: "我要一杯冰茶，谢谢。" },
          { en: "Are you ready to order, or do you need a few minutes?", zh: "现在点餐还是要再看看？" },
          { en: "Well done, please.", zh: "要全熟的，谢谢。" },
        ],
        dialogs: [
          {
            title: "Ordering a Meal 服务员帮你点餐",
            lines: [
              { en: "Hello, I'll be your waiter today. Can I start you off with something to drink?", zh: "您好，今天由我为您服务。要先来点什么喝的吗？", who: "A" },
              { en: "Yes. I'll have iced tea, please.", zh: "好，来一杯冰茶。", who: "B" },
              { en: "And I'll have lemonade.", zh: "我要一杯柠檬水。", who: "B" },
              { en: "OK. Are you ready to order, or do you need a few minutes?", zh: "好的。现在可以点餐了吗，还是需要再等几分钟？", who: "A" },
              { en: "I think we're ready. I'll have the tomato soup to start, and the roast beef with mashed potatoes and peas.", zh: "我们可以点了。先来一份番茄汤，然后要烤牛肉，配土豆泥和豌豆。", who: "B" },
              { en: "How do you want the beef — rare, medium, or well done?", zh: "牛肉要几分熟——一分、五分还是全熟？", who: "A" },
              { en: "Well done, please.", zh: "要全熟的，谢谢。", who: "B" },
              { en: "And I'll just have the fish, with potatoes and a salad.", zh: "我只要一份鱼，配土豆和沙拉。", who: "B" },
            ],
            words: [
              { en: "roast beef", zh: "烤牛肉" },
              { en: "mashed potatoes", zh: "土豆泥" },
            ],
          },
        ],
      },
      {
        id: "d22",
        name: "看医生",
        icon: "🩺",
        desc: "Dialogue 2-2 · At the Doctor's Office",
        words: [
          { en: "What seems to be the problem?", zh: "哪里不舒服？（医生开场）" },
          { en: "sore throat", zh: "n. 嗓子痛" },
          { en: "flu", zh: "n. 流感" },
        ],
        sentences: [
          { en: "What seems to be the problem?", zh: "您哪里不舒服？" },
          { en: "I have a bad cough and a sore throat.", zh: "我咳嗽得很厉害，嗓子也疼。" },
          { en: "How long have you had these symptoms?", zh: "这些症状持续多久了？" },
          { en: "Make sure you drink lots of fluids.", zh: "一定要多喝水补足水分。" },
        ],
        dialogs: [
          {
            title: "At the Doctor's Office 感冒看医生",
            lines: [
              { en: "What seems to be the problem?", zh: "您哪里不舒服？", who: "A" },
              { en: "Well, I have a bad cough and a sore throat. I also have a headache.", zh: "呃……我咳嗽得厉害，嗓子疼，头也痛。", who: "B" },
              { en: "How long have you had these symptoms?", zh: "这些症状持续多久了？", who: "A" },
              { en: "About three days now. And I'm really tired, too.", zh: "大概三天了。而且我还特别容易累。", who: "B" },
              { en: "Hmm. It sounds like you've got the flu. Take aspirin every four hours and get plenty of rest. Make sure you drink lots of fluids. Call me if you're still sick next week.", zh: "嗯，听起来像流感。每四小时吃一次阿司匹林，多休息。记得多喝水。下周还不见好就给我打电话。", who: "A" },
              { en: "OK, thanks.", zh: "好的，谢谢您。", who: "B" },
            ],
            words: [
              { en: "symptom", zh: "n. 症状" },
              { en: "fluids", zh: "n. 水分、流质" },
            ],
          },
        ],
      },
      {
        id: "d23",
        name: "问路",
        icon: "🧭",
        desc: "Dialogue 2-3 · Asking Directions",
        words: [
          { en: "Could you tell me where… is?", zh: "您能告诉我…在哪儿吗（间接问路）" },
          { en: "turn right", zh: "右转" },
          { en: "across from", zh: "在…对面" },
        ],
        sentences: [
          { en: "Excuse me. Could you tell me where the library is?", zh: "打扰一下，请问图书馆怎么走？" },
          { en: "You go three blocks, then turn right. It's on the corner.", zh: "走三个路口然后右转，就在拐角处。" },
          { en: "I really don't know my way around yet.", zh: "我还没摸清这边的路。" },
          { en: "Oh, I know how you feel.", zh: "哦，我懂你的感受。" },
        ],
        dialogs: [
          {
            title: "Asking Directions 街头问图书馆",
            lines: [
              { en: "Excuse me. Could you tell me where the library is?", zh: "打扰一下，能告诉我图书馆在哪儿吗？", who: "A" },
              { en: "Yes, it's that way. You go three blocks to Washington Street, then turn right. It's on the corner, across from the bank.", zh: "好的，往那边走。走三个路口到华盛顿街，然后右转。就在拐角处，银行对面。", who: "B" },
              { en: "Thanks! I've only been in town a few days, so I really don't know my way around yet.", zh: "谢谢！我来这座城市没几天，还不太认路。", who: "A" },
              { en: "Oh, I know how you feel. We moved here a year ago, and I still don't know where everything is!", zh: "哦，我懂你的感受。我们一年前才搬来，我到现在还搞不清东南西北呢！", who: "B" },
            ],
            words: [
              { en: "block", zh: "n. 街区" },
              { en: "know my way around", zh: "熟悉周边道路" },
            ],
          },
        ],
      },
      {
        id: "d24",
        name: "紧急报警",
        icon: "🚨",
        desc: "Dialogue 2-4 · Calling for Help",
        words: [
          { en: "run a red light", zh: "闯红灯" },
          { en: "I'd like to report…", zh: "我要报告一起…（报警用语）" },
          { en: "ambulance", zh: "n. 救护车" },
        ],
        sentences: [
          { en: "That car just ran a red light and hit that truck!", zh: "那辆车刚闯了红灯，撞上了那辆卡车！" },
          { en: "Is anyone hurt?", zh: "有人受伤吗？" },
          { en: "I'd like to report a car accident.", zh: "我要报告一起车祸。" },
          { en: "They're going to send an ambulance right away.", zh: "他们马上派一辆救护车过来。" },
        ],
        dialogs: [
          {
            title: "Calling for Help 目击车祸打 911",
            lines: [
              { en: "Hey! That car just ran a red light and hit that truck!", zh: "嘿！那辆车刚闯了红灯撞上那辆卡车！", who: "A" },
              { en: "Is anyone hurt?", zh: "有人受伤吗？", who: "B" },
              { en: "I don't know … let's call 911. Hello? I'd like to report a car accident near the post office on Charles Street. It looks like a man is hurt. Yes, it just happened. OK, thanks. Bye.", zh: "不清楚……咱们打 911 吧。喂？我要报告一起车祸，在 Charles 街邮局附近。看上去有位男士受伤了。是的，刚刚发生。好的，谢谢，再见。", who: "A" },
              { en: "What did they say?", zh: "他们怎么说？", who: "B" },
              { en: "They're going to send an ambulance and a police car right away.", zh: "他们马上会派一辆救护车和一辆警车过来。", who: "A" },
              { en: "Good, they're here. I hope the man is OK.", zh: "好，他们到了。希望那位先生没事。", who: "B" },
              { en: "I know. You have to be so careful when you're driving.", zh: "是啊，开车真的得格外小心。", who: "A" },
            ],
            words: [
              { en: "car accident", zh: "车祸、交通事故" },
              { en: "right away", zh: "立刻、马上" },
            ],
          },
        ],
      },
      {
        id: "d25",
        name: "逛超市",
        icon: "🛒",
        desc: "Dialogue 2-5 · At the Supermarket",
        words: [
          { en: "How about…? /-ing", zh: "要不要…？（提议句型）" },
          { en: "recipe calls for", zh: "食谱需要…（材料）" },
          { en: "aisle", zh: "n. 货架通道（s 不发音）" },
        ],
        sentences: [
          { en: "How about baking some cookies today?", zh: "今天烤点饼干怎么样？" },
          { en: "Let's pick up the ingredients.", zh: "咱们顺便把材料买了吧。" },
          { en: "The recipe calls for flour, sugar and butter.", zh: "食谱上需要面粉、糖和黄油。" },
          { en: "Let's meet at the checkout.", zh: "我们在收银台碰头吧。" },
        ],
        dialogs: [
          {
            title: "At the Supermarket 超市里备烘焙材料",
            lines: [
              { en: "Hey, Julia … Look at those desserts! How about baking some cookies today?", zh: "嘿，Julia……看那些甜点！今天要不要烤点曲奇？", who: "A" },
              { en: "Hmm … Yeah, that's a great idea! While we're here, let's pick up the ingredients.", zh: "嗯……好啊，这主意不错！既然来了，咱们就把材料顺手买了。", who: "B" },
              { en: "OK, what do we need?", zh: "好，我们都需要什么？", who: "A" },
              { en: "The recipe calls for flour, sugar and butter. Oh, and we also need eggs and chocolate chips.", zh: "食谱需要面粉、糖和黄油。哦对，还要鸡蛋和巧克力豆。", who: "B" },
              { en: "Why don't you get the dairy ingredients? You'll find those in the refrigerated section in the back of the store. I'll get the dry ingredients — they're in aisle 10.", zh: "你去拿乳制品食材吧，在店后面冷藏区。我去拿干货——在第 10 条货架通道。", who: "B" },
              { en: "Great! Let's meet at the checkout.", zh: "好嘞！咱们收银台碰头。", who: "A" },
              { en: "OK. See you there.", zh: "好，那儿见。", who: "B" },
            ],
            words: [
              { en: "ingredient", zh: "n. （烹饪）原料" },
              { en: "checkout", zh: "n. 收银台" },
            ],
          },
        ],
      },
      {
        id: "d26",
        name: "酒店前台问事",
        icon: "🛎️",
        desc: "Dialogue 2-6 · Running Errands",
        words: [
          { en: "get my hair cut", zh: "去理发（get/have + 物 + 过去分词）" },
          { en: "have my pants hemmed", zh: "把裤子改褶边" },
          { en: "errand", zh: "n. 差事、杂事" },
        ],
        sentences: [
          { en: "How can I help you?", zh: "有什么能帮您的？" },
          { en: "I need to get my hair cut.", zh: "我需要去理个发。" },
          { en: "Is there anything else?", zh: "还需要什么吗？" },
          { en: "There's a good mechanic a few blocks away.", zh: "几个街区外有家不错的修车行。" },
        ],
        dialogs: [
          {
            title: "Running Errands 前台帮忙找修理理发的地方",
            lines: [
              { en: "Hi, there. How can I help you?", zh: "您好，有什么可以帮您的？", who: "A" },
              { en: "Well, I'm in town visiting for a few days, and I need to get some things done while I'm here.", zh: "我最近在这座城市玩几天，想趁在这里把一些事情办了。", who: "B" },
              { en: "Sure. What do you need?", zh: "没问题，您需要什么？", who: "A" },
              { en: "I need to get my hair cut. I also need to have my new pants hemmed.", zh: "我得理发，还要把一条新裤子改改褶边。", who: "B" },
              { en: "OK. Here's a map of the city. There's a good hair salon here, which is just a block away. And there's a tailor right here. Is there anything else?", zh: "好的，这是市区地图。这儿有家不错的理发店，就隔一个街区。裁缝店也就在这儿。还有别的需要吗？", who: "A" },
              { en: "Yes. I'll need to have my car serviced before my long drive home!", zh: "有。回家要开长途之前，我得先把车保养一下！", who: "B" },
              { en: "No problem. There's a good mechanic a few blocks away.", zh: "没问题，几个街区外就有一家很棒的修理厂。", who: "A" },
            ],
            words: [
              { en: "hair salon", zh: "理发店" },
              { en: "serviced", zh: "v. 保养、检修" },
            ],
          },
        ],
      },
      {
        id: "d27",
        name: "寄快递邮局",
        icon: "📦",
        desc: "Dialogue 2-7 · At the Post Office",
        words: [
          { en: "express", zh: "n./adj. 快递、加急" },
          { en: "priority", zh: "n. 优先投递（比express慢）" },
          { en: "your total comes to…", zh: "总价是…（结账用语）" },
        ],
        sentences: [
          { en: "What can I do for you today?", zh: "今天有什么能为您效劳的？" },
          { en: "I need to mail this package to New York.", zh: "我要把这个包裹寄到纽约。" },
          { en: "How much will that be?", zh: "那要多少钱？" },
          { en: "Your total comes to $20.35.", zh: "您一共消费 20.35 美元。" },
        ],
        dialogs: [
          {
            title: "At the Post Office 邮局寄包裹",
            lines: [
              { en: "What can I do for you today?", zh: "今天有什么可以帮您？", who: "A" },
              { en: "I need to mail this package to New York, please.", zh: "我要把这个包裹寄到纽约，麻烦您。", who: "B" },
              { en: "OK, let's see how much it weighs … it's about five pounds. If you send it express, it will get there tomorrow. Or you can send it priority and it will get there by Saturday.", zh: "好，我称一下重量……大约五磅。走加急快件明天就能到；或者走优先件，周六之前到。", who: "A" },
              { en: "Saturday is fine. How much will that be?", zh: "周六到可以，那要多少钱？", who: "B" },
              { en: "$11.35. Do you need anything else?", zh: "11.35 美元。还需要别的吗？", who: "A" },
              { en: "Oh, yeah! I almost forgot. I need a book of stamps, too.", zh: "哦对了，差点忘了。我还要一本邮票。", who: "B" },
              { en: "OK, your total comes to $20.35.", zh: "好，您总共消费 20.35 美元。", who: "A" },
            ],
            words: [
              { en: "package", zh: "n. 包裹" },
              { en: "a book of stamps", zh: "一本邮票（多张连）" },
            ],
          },
        ],
      },
      {
        id: "d28",
        name: "课后叙旧",
        icon: "📚",
        desc: "Dialogue 2-8 · Catching Up After Class",
        words: [
          { en: "How did your exam go?", zh: "你考得怎么样？" },
          { en: "do you feel like doing", zh: "你想不想做…（=want to）" },
          { en: "come over", zh: "来我家坐坐" },
        ],
        sentences: [
          { en: "How did your physics exam go?", zh: "你物理考得怎么样？" },
          { en: "I'm just glad it's over!", zh: "我太高兴终于考完了！" },
          { en: "Do you feel like studying tomorrow?", zh: "你明天想不想一起复习？" },
          { en: "Come over around 10:00.", zh: "十点左右来我家吧。" },
        ],
        dialogs: [
          {
            title: "Catching Up After Class 课间聊聊考试",
            lines: [
              { en: "Hey! How did your physics exam go?", zh: "嘿！你物理考得怎么样？", who: "A" },
              { en: "Not bad, thanks. I'm just glad it's over! How about you … how'd your presentation go?", zh: "还不错，谢谢。我太开心终于结束了！你呢……你的课堂展示怎么样？", who: "B" },
              { en: "Oh, it went really well. Thanks for helping me with it!", zh: "哦，进行得特别顺利。多谢你帮我准备！", who: "A" },
              { en: "No problem. So … do you feel like studying tomorrow for our math exam?", zh: "不客气。那你明天想不想一起来复习数学考试？", who: "B" },
              { en: "Yeah, sure! Come over around 10:00, after breakfast.", zh: "想啊，当然！十点左右来我家，吃过早饭来。", who: "A" },
              { en: "All right. I'll bring my notes.", zh: "好，我把我的笔记带过来。", who: "B" },
            ],
            words: [
              { en: "presentation", zh: "n. 课堂展示、演讲" },
              { en: "notes", zh: "n. 课堂笔记" },
            ],
          },
        ],
      },
      {
        id: "d29",
        name: "买衣服",
        icon: "🧶",
        desc: "Dialogue 2-9 · Shopping",
        words: [
          { en: "size medium", zh: "中码（S/M/L）" },
          { en: "try it on", zh: "试穿" },
          { en: "I'll take it", zh: "我要买下它" },
        ],
        sentences: [
          { en: "I'm looking for a sweater in a size medium.", zh: "我想买一件中码的毛衣。" },
          { en: "I'd rather have it in blue.", zh: "我更想要蓝色的。" },
          { en: "Would you like to try it on?", zh: "要试穿一下吗？" },
          { en: "Perfect! I'll take it.", zh: "太好啦！我要这件。" },
        ],
        dialogs: [
          {
            title: "Shopping 服装店买毛衣",
            lines: [
              { en: "Can I help you?", zh: "需要帮忙吗？", who: "A" },
              { en: "Yes, I'm looking for a sweater — in a size medium.", zh: "我想买件毛衣——中码的。", who: "B" },
              { en: "Let's see … here's a nice white one. What do you think?", zh: "我看看……这件白色挺不错，您觉得怎么样？", who: "A" },
              { en: "I think I'd rather have it in blue.", zh: "我更想要蓝色的。", who: "B" },
              { en: "OK … here's blue, in a medium. Would you like to try it on?", zh: "好……这件蓝色，中码。要试穿一下吗？", who: "A" },
              { en: "OK … yes, I love it. It fits perfectly. How much is it?", zh: "行……我真喜欢，特别合身。多少钱？", who: "B" },
              { en: "It's $50. It will be $53, with tax.", zh: "50 美元，含税 53 美元。", who: "A" },
              { en: "Perfect! I'll take it.", zh: "好！我要了。", who: "B" },
            ],
            words: [
              { en: "sweater", zh: "n. 毛衣" },
              { en: "with tax", zh: "含税价" },
            ],
          },
        ],
      },
      {
        id: "d210",
        name: "挤公交",
        icon: "🚌",
        desc: "Dialogue 2-10 · Transportation",
        words: [
          { en: "Should we take … or …?", zh: "我们是…还是…？（征求意见）" },
          { en: "catch it", zh: "赶上（车）" },
          { en: "just missed it", zh: "刚好没赶上" },
        ],
        sentences: [
          { en: "Should we take a taxi or a bus to the mall?", zh: "咱们去商场是打车还是坐公交？" },
          { en: "It's impossible to get a taxi during rush hour.", zh: "高峰期根本打不到车。" },
          { en: "We'll have to run to catch it.", zh: "咱们得跑着才能赶上。" },
          { en: "There'll be another one in 10 minutes.", zh: "十分钟后会再来一趟车。" },
        ],
        dialogs: [
          {
            title: "Transportation 打车还是坐公交",
            lines: [
              { en: "Should we take a taxi or a bus to the mall?", zh: "去商场咱们打车还是坐公交？", who: "A" },
              { en: "Let's take a bus. It's impossible to get a taxi during rush hour.", zh: "坐公交吧。高峰期根本打不到出租车。", who: "B" },
              { en: "Isn't that a bus stop over there?", zh: "那边不是有个公交站吗？", who: "A" },
              { en: "Yes … Oh! There's a bus now. We'll have to run to catch it.", zh: "对……哦！正好来辆公交，咱们得赶紧跑过去赶上了。", who: "B" },
              { en: "Oh, no! We just missed it.", zh: "哎呀！还是没赶上。", who: "A" },
              { en: "No problem. There'll be another one in 10 minutes.", zh: "没关系，十分钟后还会有一班。", who: "B" },
            ],
            words: [
              { en: "impossible", zh: "adj. 不可能的" },
              { en: "there'll be", zh: "会有（there will be）" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fun",
    name: "休闲娱乐",
    icon: "🎬",
    desc: "看电影、运动、旅行、聊爱好（译自 Everyday Conversations 第 3 单元）",
    topics: [
      {
        id: "d31",
        name: "生日惊喜",
        icon: "🎂",
        desc: "Dialogue 3-1 · How Old Are You?",
        words: [
          { en: "Aren't you?", zh: "难道你不…？（期待肯定回答）" },
          { en: "She'll be 55", zh: "她将满 55 岁（年龄表达）" },
          { en: "surprise", zh: "n. 惊喜" },
        ],
        sentences: [
          { en: "I'm really excited for the birthday party this afternoon!", zh: "想起今天下午的生日聚会我就超兴奋！" },
          { en: "How old is she?", zh: "她多大年纪了？" },
          { en: "She's going to be so surprised!", zh: "她一定会大吃一惊的！" },
        ],
        dialogs: [
          {
            title: "How Old Are You? 筹备惊喜生日会",
            lines: [
              { en: "I'm really excited for Aunt Mary's surprise birthday party this afternoon! Aren't you?", zh: "想到今天下午 Mary 阿姨的惊喜生日派对，我可太激动了！你不激动吗？", who: "A" },
              { en: "Yeah! How old is she?", zh: "是啊！她今年多大？", who: "B" },
              { en: "She'll be 55 on May 14.", zh: "她 5 月 14 号就满 55 岁啦。", who: "A" },
              { en: "Wow! I didn't know that my mom was older — she's going to be 57 on September 2. Anyway, Aunt Mary's going to be so surprised to see us all here!", zh: "哇！我还不知道她比我妈妈小呢——我妈妈 9 月 2 号都要 57 岁了。不管怎样，Mary 阿姨看到我们都在这儿，肯定惊喜坏了！", who: "B" },
              { en: "I know! But we still have to get all the food set up before she gets here … OK! We're all ready now. Shh! She's here!", zh: "可不是嘛！不过在她进门之前，我们得把所有食物摆好……好了！全都准备好了。嘘——她来了！", who: "A" },
              { en: "Surprise!", zh: "惊喜！", who: "B" },
            ],
            words: [
              { en: "be excited for", zh: "为…感到兴奋" },
              { en: "set up", zh: "布置、准备好" },
            ],
          },
        ],
      },
      {
        id: "d32",
        name: "去电影院",
        icon: "🎟️",
        desc: "Dialogue 3-2 · At the Movies",
        words: [
          { en: "Would you mind doing…?", zh: "能否麻烦您…？（礼貌请求）" },
          { en: "move over one", zh: "往旁边挪一个位子" },
          { en: "Not at all", zh: "完全不介意" },
        ],
        sentences: [
          { en: "We'd like two tickets for the 3:30 show, please.", zh: "麻烦给我们两张三点半那场的票。" },
          { en: "Enjoy the movie!", zh: "祝观影愉快！" },
          { en: "Would you mind moving over one?", zh: "能麻烦您往旁边挪一个位子吗？" },
          { en: "No, not at all.", zh: "当然不介意。" },
        ],
        dialogs: [
          {
            title: "At the Movies 电影院购票落座",
            lines: [
              { en: "We'd like two tickets for the 3:30 show, please.", zh: "您好，我们要两张三点半场次的票。", who: "A" },
              { en: "Here you go. Enjoy the movie!", zh: "给您票，祝你们观影愉快！", who: "B" },
              { en: "Would you mind moving over one, so my friend and I can sit together?", zh: "麻烦您往那边挪一个位子好吗？让我和朋友能坐在一起。", who: "A" },
              { en: "No, not at all.", zh: "一点也不介意。", who: "B" },
              { en: "Thanks a lot!", zh: "太感谢了！", who: "A" },
            ],
            words: [
              { en: "show", zh: "n. 场次（电影放映）" },
              { en: "sit together", zh: "坐在一起" },
            ],
          },
        ],
      },
      {
        id: "d33",
        name: "你擅长什么",
        icon: "🎨",
        desc: "Dialogue 3-3 · What Are You Good At?",
        words: [
          { en: "I'm really good at", zh: "我特别擅长…（good at + 名词/-ing）" },
          { en: "arts and crafts", zh: "手工艺术" },
          { en: "board game", zh: "棋盘游戏" },
        ],
        sentences: [
          { en: "So … what should we do?", zh: "那么……我们该干点什么好呢？" },
          { en: "What do you think?", zh: "你觉得怎么样？" },
          { en: "How about playing a board game?", zh: "要不要玩桌游？" },
          { en: "Let's play Scrabble! I'm really good at spelling, too!", zh: "我们玩拼字游戏吧！我拼写也特别在行！" },
          { en: "Oh, yeah? We'll see about that!", zh: "是吗？那就走着瞧！", who: "A" },
        ],
        dialogs: [
          {
            title: "What Are You Good At? 一起玩点什么",
            lines: [
              { en: "So … what should we do?", zh: "那……我们该干点什么好呢？", who: "A" },
              { en: "Well, I like to do arts and crafts, and I'm really good at drawing. What do you think?", zh: "呃，我喜欢手工，画画也特别拿手。你觉得呢？", who: "B" },
              { en: "Hmm … how about playing a board game? That would be more fun.", zh: "嗯……要不要玩桌游？那更有意思。", who: "A" },
              { en: "OK. Let's play Scrabble! I'm really good at spelling, too!", zh: "行呀，那就玩拼字游戏！我拼单词也很在行！", who: "B" },
              { en: "Oh, yeah? We'll see about that!", zh: "哦，是嘛？那咱们试过才知道！", who: "A" },
            ],
            words: [
              { en: "drawing", zh: "n. 绘画" },
              { en: "spelling", zh: "n. 拼写" },
            ],
          },
        ],
      },
      {
        id: "d34",
        name: "最爱运动",
        icon: "🏀",
        desc: "Dialogue 3-4 · What's Your Favorite Sport?",
        words: [
          { en: "I much prefer…", zh: "我更喜欢…（强调偏爱）" },
          { en: "I'm a big fan of", zh: "我是…的铁杆粉丝" },
          { en: "shoot some hoops", zh: "打打篮球（俚语）" },
        ],
        sentences: [
          { en: "What time is that soccer game on?", zh: "那场足球比赛几点播？" },
          { en: "Soccer's not my favorite sport anyway.", zh: "不过足球本来就不是我最爱的运动。" },
          { en: "How about a game sometime?", zh: "改天来比一场怎么样？" },
          { en: "Sure thing! Let's go.", zh: "没问题！走吧。" },
        ],
        dialogs: [
          {
            title: "What's Your Favorite Sport? 聊聊运动偏好",
            lines: [
              { en: "What time is that soccer game on? I thought it started at noon.", zh: "那场足球赛几点开始？我记得是中午开球。", who: "A" },
              { en: "We must have had the wrong time. Oh, well … soccer's not my favorite sport anyway. I much prefer basketball.", zh: "咱们肯定记错时间了。算了……反正足球也不是我最喜欢的运动，我更爱篮球。", who: "B" },
              { en: "Oh, really? I thought your favorite sport was tennis! I'm a big fan of basketball, too.", zh: "哦，是吗？我以为你最喜欢网球呢！我也特别爱打篮球。", who: "A" },
              { en: "How about a game sometime?", zh: "改天来打一场怎么样？", who: "B" },
              { en: "Sure thing! Why don't we go shoot some hoops now since the soccer game isn't on?", zh: "好啊！既然足球赛也没播，那咱们现在就出门投几个篮吧！", who: "A" },
              { en: "Excellent idea. Let's go.", zh: "好主意，走吧。", who: "B" },
            ],
            words: [
              { en: "soccer", zh: "n. 英式足球（美式说法）" },
              { en: "no doubt", zh: "毫无疑问" },
            ],
          },
        ],
      },
      {
        id: "d35",
        name: "剧院之夜",
        icon: "🎭",
        desc: "Dialogue 3-5 · A Night at the Theater",
        words: [
          { en: "performance", zh: "n. 演出" },
          { en: "choreography", zh: "n. 舞蹈编排" },
          { en: "That's very kind of you", zh: "您真会说话（回应夸赞）" },
        ],
        sentences: [
          { en: "What a fantastic performance!", zh: "演出太精彩了！" },
          { en: "Thank you for inviting me to the musical.", zh: "谢谢你约我看音乐剧。" },
          { en: "I'm happy you enjoyed the show.", zh: "你看得开心我很高兴。" },
        ],
        dialogs: [
          {
            title: "A Night at the Theater 剧院之夜散场聊",
            lines: [
              { en: "What a fantastic performance! Thank you for inviting me to the musical.", zh: "演出真是精彩绝伦！谢谢你邀我来看这部音乐剧。", who: "A" },
              { en: "You are welcome. I'm happy you enjoyed the show. The choreography of the dancers was incredible. It reminds me of when I used to dance.", zh: "不客气，你能喜欢这场演出我很高兴。舞者的编舞真是绝了。让我想起自己从前跳舞的日子。", who: "B" },
              { en: "I know! You were such a talented ballerina. Do you miss dancing?", zh: "是啊！你曾经是那么有天赋的芭蕾舞者。你还想念跳舞的时光吗？", who: "A" },
              { en: "Oh, that's very kind of you, Shannon. I do miss it sometimes. But I will always be a fan of the arts. That's why I love going to musicals because it's the perfect combination of song, dance and theater.", zh: "哦，Shannon 你真会说话。我的确偶尔会想念那段时光。不过我永远是艺术的忠实粉丝，所以我特别爱看音乐剧——它是歌、舞、剧的完美结合。", who: "B" },
              { en: "Absolutely! I'm glad you are still an art fan too. Thank you for the invitation. It's always a pleasure to attend an arts event with you and learn something new.", zh: "完全同意！你依然如此热爱艺术，太好了。谢谢你的邀请。和你一起参加艺术活动、每次都能学到新东西，真是享受。", who: "A" },
            ],
            words: [
              { en: "musical", zh: "n. 音乐剧" },
              { en: "ballerina", zh: "n. 芭蕾舞者" },
            ],
          },
        ],
      },
      {
        id: "d36",
        name: "计划度假",
        icon: "🌟",
        desc: "Dialogue 3-6 · Taking a Vacation",
        words: [
          { en: "red eye", zh: "n. 红眼航班（夜间飞行）" },
          { en: "Good for you!", zh: "真为你高兴！（夸赞语）" },
          { en: "look forward to", zh: "期待…（后接名词/-ing）" },
        ],
        sentences: [
          { en: "I just bought a ticket to New York City.", zh: "我刚买了去纽约的机票。" },
          { en: "When are you leaving?", zh: "你什么时候出发？" },
          { en: "I'm taking the red eye. It was cheaper.", zh: "我订的是红眼航班，便宜一些。" },
          { en: "I'm looking forward to a week at the beach.", zh: "我盼着去海边玩一星期呢。" },
        ],
        dialogs: [
          {
            title: "Taking a Vacation 分享旅行计划",
            lines: [
              { en: "I just bought a ticket to New York City. I'm so excited to see the city!", zh: "我刚买了去纽约的机票，特别期待去看那座城市！", who: "A" },
              { en: "Good for you! Traveling is so much fun. I love discovering new places and new people. When are you leaving?", zh: "真棒！旅行多有意思啊。我喜欢探索新地方、认识新朋友。你什么时候出发？", who: "B" },
              { en: "Next week. I'm taking the red eye. It was cheaper. Hopefully, I'll be able to sleep on the plane.", zh: "下周走，订的是红眼航班，便宜一点。希望飞机上能睡着。", who: "A" },
              { en: "I wish I could go with you! New York City is a magical place. You will have so much fun.", zh: "真想跟你一起去！纽约是个很有魔力的城市，你一定会玩得很尽兴。", who: "B" },
              { en: "I hope so. I'm going to visit my brother who lives there. I will stay for a week and then take the train down to Washington, D.C.", zh: "希望如此。我是去看望住在纽约的哥哥，先待一周，然后坐火车去华盛顿。", who: "A" },
              { en: "That sounds like a great vacation. I'm looking forward to a week at the beach for my summer vacation. I just want to relax.", zh: "听起来是很棒的假期安排。我暑假盼着去海边住上一周，只想好好放松。", who: "B" },
            ],
            words: [
              { en: "discover", zh: "v. 发现、探索" },
              { en: "magical", zh: "adj. 有魔力的、迷人的" },
            ],
          },
        ],
      },
      {
        id: "d37",
        name: "挑只宠物",
        icon: "🐕",
        desc: "Dialogue 3-7 · At the Pet Store",
        words: [
          { en: "loyal", zh: "adj. 忠诚的" },
          { en: "take care of", zh: "照料、照顾" },
          { en: "Good point", zh: "有道理" },
        ],
        sentences: [
          { en: "What a beautiful cat!", zh: "这只猫太好看了！" },
          { en: "Dogs are more loyal than cats.", zh: "狗比猫更忠诚。" },
          { en: "We're obviously not ready to get a pet yet.", zh: "很明显咱们还没做好准备养宠物。" },
        ],
        dialogs: [
          {
            title: "At the Pet Store 养猫还是养狗",
            lines: [
              { en: "Oh! What a beautiful cat. What do you think?", zh: "哇！这只猫真漂亮。你觉得呢？", who: "A" },
              { en: "I think I'd rather get a dog. Dogs are more loyal than cats.", zh: "我觉得还是养狗好，狗比猫更忠诚。", who: "B" },
              { en: "Yes, but they're so much work! Would you be willing to walk it every single day? And clean up after it?", zh: "话是这么说，但狗要多费工夫啊！你愿意每天带它出去遛，还跟在后面捡便便吗？", who: "A" },
              { en: "Hmm. Good point. What about a bird? Or a fish?", zh: "嗯，有道理。那养鸟呢？或者养鱼？", who: "B" },
              { en: "We'd have to invest a lot of money in a cage or a fish tank. And I don't really know how to take care of a bird or a fish!", zh: "那得花不少钱买笼子或鱼缸，况且我也不知道怎么照顾鸟和鱼！", who: "A" },
              { en: "Well, we're obviously not ready to get a pet yet.", zh: "呃，很明显咱们还没准备好养宠物。", who: "B" },
              { en: "Yeah, you're right. Let's go grab some coffee and talk about it.", zh: "嗯你说得对。咱们先去喝杯咖啡，慢慢聊。", who: "A" },
            ],
            words: [
              { en: "willing to", zh: "愿意做…" },
              { en: "invest in", zh: "投入（钱）买…/在…上投资" },
            ],
          },
        ],
      },
      {
        id: "d38",
        name: "商量去哪玩",
        icon: "🗺️",
        desc: "Dialogue 3-8 · Giving Your Opinion",
        words: [
          { en: "make up my mind", zh: "拿定主意、决定" },
          { en: "compromise", zh: "n. 折中方案" },
          { en: "How about…?", zh: "…怎么样？（提供选项）" },
        ],
        sentences: [
          { en: "Where should we take a vacation this year?", zh: "咱们今年去哪儿度假？" },
          { en: "How about the beach?", zh: "去海边怎么样？" },
          { en: "I need to do some research first.", zh: "我得先做点功课。" },
          { en: "That will help me make up my mind.", zh: "这会帮我下定决心的。" },
        ],
        dialogs: [
          {
            title: "Giving Your Opinion 商量度假目的地",
            lines: [
              { en: "Where should we take a vacation this year? Let's decide soon.", zh: "咱们今年去哪儿度假？早点定下来吧。", who: "A" },
              { en: "Well, I'd like to go somewhere warm. How about the beach? Or we could rent a cabin on the lake.", zh: "我想去个暖和的地方。海边怎么样？或者咱们也可以在湖边租间小木屋。", who: "B" },
              { en: "You want to go to the beach, again? I want to ski this winter. How about a compromise? What about traveling to the Alps in Europe next April? We can find a ski resort on a lake.", zh: "又想去海边？我今年冬天想滑雪呀。要不折中一下？明年四月去欧洲的阿尔卑斯山旅行怎么样？咱们可以找一家湖畔的滑雪场。", who: "A" },
              { en: "Oh, we've never been to Europe before! But I don't know if it will be sunny and warm then. I need to do some research first. That will help me make up my mind.", zh: "哇，欧洲咱们可从来没去过！不过那时候不知道够不够晴朗暖和，我得先查查资料，才好拿主意。", who: "B" },
            ],
            words: [
              { en: "rent a cabin", zh: "租间小木屋" },
              { en: "resort", zh: "n. 度假村" },
            ],
          },
        ],
      },
      {
        id: "d39",
        name: "周末爱好",
        icon: "🛶",
        desc: "Dialogue 3-9 · Hobbies",
        words: [
          { en: "look forward to doing", zh: "盼着做…（+ -ing）" },
          { en: "gonna", zh: "= going to（口语写法）" },
          { en: "awesome", zh: "adj. 太棒了（口语）" },
        ],
        sentences: [
          { en: "I'm looking forward to relaxing in the mountains.", zh: "我盼着去山里放松放松。" },
          { en: "I've planned a little hike in the woods.", zh: "我安排了一次林间徒步。" },
          { en: "It will be awesome.", zh: "一定会特别棒。" },
        ],
        dialogs: [
          {
            title: "Hobbies 分享假期计划",
            lines: [
              { en: "I'm so happy this week of midterm exams is finished.", zh: "期中考那一周总算结束了，我高兴坏了。", who: "A" },
              { en: "Same here. I'm looking forward to relaxing in the mountains this weekend. I've planned a little hike in the woods. And I'm gonna take a canoe trip down the river if the weather cooperates.", zh: "我也是。就盼着周末去山里放松。我计划了林间徒步，天气配合的话，还要划独木舟顺流而下一趟。", who: "B" },
              { en: "Oh, fun! I'm going to Michigan. I'm taking my camera because fall is coming fast. The leaves are already turning all shades of red and orange. It will be awesome.", zh: "哇，好有趣！我要去密歇根，会带上相机，因为秋天来得很快。树叶已经红橙相染了，一定会特别美。", who: "A" },
              { en: "Next time you go there, I'll join you. I've heard Michigan is a great place to go canoeing.", zh: "下次你去，我也加入。听说密歇根是划独木舟的绝好去处。", who: "B" },
            ],
            words: [
              { en: "midterm", zh: "n. 期中考试" },
              { en: "cooperate", zh: "v. 配合（天气 cooperates=天气好）" },
            ],
          },
        ],
      },
      {
        id: "d310",
        name: "婚礼闲聊",
        icon: "💍",
        desc: "Dialogue 3-10 · Weddings",
        words: [
          { en: "get engaged", zh: "订婚" },
          { en: "tie the knot", zh: "喜结连理（口语）" },
          { en: "honeymoon", zh: "n. 蜜月" },
        ],
        sentences: [
          { en: "Doesn't the bride look beautiful?", zh: "新娘是不是特别美？" },
          { en: "He proposed to her during a candlelight dinner.", zh: "他在烛光晚餐时向她求婚的。" },
          { en: "This is the best wedding I've ever been to.", zh: "这是我参加过最棒的一场婚礼。" },
        ],
        dialogs: [
          {
            title: "Weddings 婚礼上的闲聊",
            lines: [
              { en: "Doesn't the bride look beautiful in that wedding dress?", zh: "新娘穿着婚纱，是不是美极了？", who: "A" },
              { en: "Yes. She looks amazing. And the groom is so romantic. I just heard the story of how they got engaged! He proposed to her during a candlelight dinner in London. Did you know that was where they went to school?", zh: "是啊，她美呆了。新郎也特别浪漫。我刚听说他们订婚的故事——他是在伦敦一顿烛光晚餐时求婚的。你知道吗，那也是他们当年念书的地方。", who: "B" },
              { en: "Oh? Wonderful. And the honeymoon! What a great idea! Most people just go to the beach for a week after they tie the knot. But they plan on heading to California and cruising the coast on their motorcycle.", zh: "哦？真好。还有他们的蜜月，多妙的主意！大多数人结婚后就随便去海边待一星期，他们却打算骑摩托沿加州海岸兜风之旅。", who: "A" },
              { en: "Really! What a fantastic idea. This is by far the best wedding I've ever been to.", zh: "真的！多妙的主意。这是迄今为止我参加过的最棒的婚礼。", who: "B" },
            ],
            words: [
              { en: "propose to", zh: "向…求婚" },
              { en: "by far", zh: "迄今为止（强调）" },
            ],
          },
        ],
      },
      {
        id: "d311",
        name: "给点建议",
        icon: "💡",
        desc: "Dialogue 3-11 · Giving Advice",
        words: [
          { en: "What's going on?", zh: "怎么了？（问近况）" },
          { en: "I know so", zh: "我可完全确定（比 I think so 更笃定）" },
          { en: "Trust me", zh: "相信我" },
        ],
        sentences: [
          { en: "Thanks for meeting with me. I appreciate it.", zh: "谢谢你抽时间见我，非常感激。" },
          { en: "Should I take this new job?", zh: "我该接受这份新工作吗？" },
          { en: "I think it's time for a change, don't you?", zh: "我觉得是时候换换了，你说呢？" },
          { en: "What do you have to lose?", zh: "你能损失什么呢？（放手去试呗）" },
        ],
        dialogs: [
          {
            title: "Giving Advice 午饭时间聊换工作",
            lines: [
              { en: "Thanks for meeting with me during your lunch hour. I appreciate it.", zh: "谢谢你午饭时间抽空见我，我很感激。", who: "A" },
              { en: "No problem. I'm happy to help. What's going on?", zh: "没关系，乐意帮忙。怎么了？", who: "B" },
              { en: "Oh you know, the usual. Should I take this new job? Or do I stick with my current one?", zh: "哦，你知道的，老话题。我该接受这份新工作吗？还是继续留在现在的岗位上？", who: "A" },
              { en: "Well, I think it's time for a change, don't you? They pay you late and you are unhappy.", zh: "嗯，我觉得你到了该换的时候了，你不觉得吗？他们拖工资，你也不开心。", who: "B" },
              { en: "Do you really think so?", zh: "你真的这么觉得吗？", who: "A" },
              { en: "I know so. And I've been listening to you complain for over a year now. Trust me. Take the job. What do you have to lose?", zh: "我很确定。何况你已经抱怨一年多了。相信我，接受那份工作吧，你又不会损失什么。", who: "B" },
            ],
            words: [
              { en: "appreciate it", zh: "非常感激" },
              { en: "stick with", zh: "继续坚持用/留在…" },
            ],
          },
        ],
      },
    ],
  },
];

/* 合并进主 SCENES（前缀 d 话题 id 不与内置冲突） */
SCENES.push(...PDF_UNITS);

/* ============ 资源夹（首页“选择资源”层）============
   后续新增资源（如 TED、新概念、自定义库）时：
   往 SCENES push 新场景，并在 RESOURCES 里再登记一个文件夹即可 */
const RESOURCES = [
  {
    id: "ae",
    name: "American English",
    icon: "🇺🇸",
    desc: "美国国务院《Everyday Conversations》日常对话教材",
    sceneIds: ["social", "town", "fun", "life", "work", "travel"],
  },
];
