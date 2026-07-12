// AI 融资雷达数据文件（定时任务自动重写）
// 每家企业含多个信息源（sources）便于交叉验证。请勿手动改动结构。
window.FUNDING_DATA = {
  "updated_at": "2026-07-12T14:32:27+08:00",
  "window": "2026 年 4 月 – 7 月（近一季度）",
  "companies": [
    {
      "name": "Gradium",
      "name_en": "Gradium",
      "region": "欧洲",
      "industry": "基础大模型",
      "stage": "种子/天使",
      "amount_usd_m": 100,
      "amount_display": "种子轮累计超 1 亿美元（最新扩展约 3000 万美元）",
      "valuation": "未披露",
      "date": "2026-07-09",
      "location": "法国巴黎",
      "business": "从巴黎非营利 AI 实验室 Kyutai 分拆的语音 AI 公司，研发超低延迟实时语音大模型，客户包括雷诺等大型企业",
      "team": "联合创始人 Neil Zeghidour（曾任职 Google Brain、DeepMind、Meta）",
      "investors": "FirstMark、Eurazeo 领投前期；扩展轮新增 Nvidia，另有 Eric Schmidt、Xavier Niel、Rodolphe Saadé 等",
      "advantage": "团队源自打造开源语音模型 Moshi 的 Kyutai 实验室，是欧洲语音 AI 底层技术的代表力量。成立仅 7 个月即完成超 1 亿美元种子轮并获 Nvidia 战略入股，超低延迟语音交互直击 AI 语音助手最大痛点。",
      "sources": [
        {
          "label": "TechCrunch",
          "url": "https://techcrunch.com/2026/07/09/paris-based-ai-voice-startup-gradium-raises-100m-seed-backed-by-nvidia/"
        },
        {
          "label": "Sifted",
          "url": "https://sifted.eu/articles/gradium-nvidia-30m-extension-seed"
        }
      ]
    },
    {
      "name": "SambaNova",
      "name_en": "SambaNova Systems",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "D轮及以后",
      "amount_usd_m": 1000,
      "amount_display": "10 亿美元（F 轮首次交割）",
      "valuation": "约 110 亿美元",
      "date": "2026-07-08",
      "location": "美国加州帕洛阿尔托",
      "business": "AI 推理芯片与系统公司，自研 RDU 架构芯片，面向企业与主权客户提供高速 AI 推理基础设施与全栈平台。",
      "team": "由斯坦福背景的芯片与系统团队创立（人名以公开报道为准，从略）",
      "investors": "General Atlantic 领投",
      "advantage": "距上一轮大额融资仅约 5 个月再获 10 亿美元，估值升至约 110 亿美元；在 AI 推理需求爆发背景下，是英伟达之外少数具备量产级推理芯片与系统能力的独立厂商之一。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/"
        },
        {
          "label": "CNBC 报道",
          "url": "https://www.cnbc.com/2026/07/08/sambanova-ai-chip-funding-valuation.html"
        },
        {
          "label": "SiliconANGLE 报道",
          "url": "https://siliconangle.com/2026/07/08/inference-chip-startup-sambanova-valued-11b-1b-funding-round/"
        }
      ]
    },
    {
      "name": "Prime Intellect",
      "name_en": "Prime Intellect",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "A轮",
      "amount_usd_m": 130,
      "amount_display": "1.3 亿美元（A 轮）",
      "valuation": "约 10 亿美元",
      "date": "2026-07-08",
      "location": "美国旧金山",
      "business": "开源去中心化 AI 训练与强化学习基础设施平台，帮助企业在分布式算力上训练自有模型与 AI 智能体（Prime-RL 等开源工具链）。",
      "team": "开源分布式训练团队（人名以公开报道为准，从略）",
      "investors": "Radical Ventures 领投，NVIDIA Ventures、Intel Capital、戴尔资本等跟投，Perplexity/Box/Harvey/Cognition 等创始人以天使身份参投",
      "advantage": "年化收入据报道已超 1 亿美元；开源 RL/分布式训练栈在企业自建智能体浪潮中卡位，产业资本（英伟达、英特尔、戴尔）集体入局。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/"
        },
        {
          "label": "SiliconANGLE 报道",
          "url": "https://siliconangle.com/2026/07/08/prime-intellect-raises-130m-1b-valuation-ai-training-platform/"
        },
        {
          "label": "FinSMEs 报道",
          "url": "https://www.finsmes.com/2026/07/prime-intellect-raises-130m-in-series-a-funding.html"
        }
      ]
    },
    {
      "name": "灵境智源",
      "name_en": "Lingjing Zhiyuan",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "种子/天使",
      "amount_usd_m": 15,
      "amount_display": "超亿元人民币（天使轮及天使+轮，部分报道称 Pre-A）",
      "valuation": "未披露",
      "date": "2026-07-08",
      "location": "上海",
      "business": "具身智能全栈计算底座（\"具身智脑\"）服务商，自研\"神经-关节\"协同架构，将机器人动态响应延迟压缩至 5 毫秒以内，已对接超 300 家具身智能企业。",
      "team": "由上海人工智能研究院孵化，成立于 2025 年 7 月",
      "investors": "经纬创投（连续领投）、上海闵行国资（战略跟投），诚一资本担任长期财务顾问",
      "advantage": "成立不到一年即覆盖行业超 70% 具身智能企业，超 200 家客户批量装机。突破 20 毫秒生理延迟瓶颈的底层控制技术构成差异化壁垒。资金投向具身原生芯片研发与行业标准生态。",
      "sources": [
        {
          "label": "36氪",
          "url": "https://36kr.com/newsflashes/3887623484062213"
        },
        {
          "label": "央广网",
          "url": "https://tech.cnr.cn/techph/20260708/t20260708_527698050.shtml"
        },
        {
          "label": "新浪财经",
          "url": "https://finance.sina.com.cn/tech/2026-07-12/doc-inihnwye6085096.shtml"
        }
      ]
    },
    {
      "name": "Norm Ai",
      "name_en": "Norm Ai",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "C轮",
      "amount_usd_m": 120,
      "amount_display": "1.2 亿美元（C 轮）",
      "valuation": "约 12 亿美元",
      "date": "2026-07-07",
      "location": "美国纽约",
      "business": "「智能体化法律 / 合规」平台，把法规转化为可执行的 AI 智能体，为受监管企业提供合规审查与监督型智能体，并通过关联律所 Norm Law 以 AI 原生方式提供法律服务。",
      "team": "AI 工程师与执业律师混合团队，成立不到三年（人名以公开报道为准，从略）",
      "investors": "Khosla Ventures 领投，Blackstone、Bain Capital Ventures、Coatue、Craft Ventures、Vanguard、纽约人寿、TIAA 等跟投",
      "advantage": "客户合计管理资产超 30 万亿美元；成立不足三年累计融资超 2.6 亿美元并晋升独角兽，是法律/合规 AI 赛道估值最高的公司之一。",
      "sources": [
        {
          "label": "官方新闻稿（PR Newswire）",
          "url": "https://www.prnewswire.com/news-releases/norm-ai-raises-120-million-at-a-1-2-billion-valuation-led-by-khosla-ventures-to-deliver-the-full-stack-model-for-legal-ai-302819152.html"
        },
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/07/07/ai-law-startup-norm-raises-120m-hits-unicorn-valuation/"
        },
        {
          "label": "LawSites 报道",
          "url": "https://www.lawnext.com/2026/07/norm-ai-hits-unicorn-status-with-120m-series-c-at-1-2-billion-valuation.html"
        }
      ]
    },
    {
      "name": "Monogram",
      "name_en": "Monogram",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "种子/天使",
      "amount_usd_m": 40,
      "amount_display": "4000 万美元种子轮",
      "valuation": "未披露",
      "date": "2026-07-07",
      "location": "美国",
      "business": "消费级 AI 应用，围绕视觉界面从零构建：对任意提问实时生成可交互的可视化界面，而非文字回答",
      "team": "联合创始人 Eren Bali（Udemy、Carbon Health 联合创始人）、Edouard Tabet、Murat Akbal",
      "investors": "DST Global、Lux Capital 领投，Conviction、SOMA Capital、Gradient Ventures 及 Arthur Mensch、Garry Tan 等天使参投",
      "advantage": "连续成功创业者带队，出隐身即获顶级基金 4000 万美元种子轮。「生成式 UI」代表 AI 交互界面从纯文本向可视化演进的新方向，天使阵容覆盖多位 AI 公司创始人。",
      "sources": [
        {
          "label": "Monogram 官方博客",
          "url": "https://www.monogram.ai/blog/introducing-monogram"
        },
        {
          "label": "RuntimeWire",
          "url": "https://runtimewire.com/article/eren-bali-monogram-40m-seed-visual-ai-interface"
        },
        {
          "label": "Wilson Sonsini",
          "url": "https://www.wsgr.com/en/insights/wilson-sonsini-advises-monogram-on-dollar40-million-seed-round-as-company-emerges-from-stealth.html"
        }
      ]
    },
    {
      "name": "智推时代",
      "name_en": "GenOptima",
      "region": "中国",
      "industry": "智能体与企业应用",
      "stage": "种子/天使",
      "amount_usd_m": 7,
      "amount_display": "数千万元人民币天使轮",
      "valuation": "未披露",
      "date": "2026-07-07",
      "location": "中国上海",
      "business": "AI 搜索营销 / GEO（生成式答案优化）服务商，自研 GENO 系统帮助品牌进入 DeepSeek、豆包、ChatGPT 等 AI 平台给出的答案",
      "team": "CEO 陈缪喆（前三七互娱营销副总裁），联合创始人茹立云（搜狗前 COO、百川智能联合创始人）、于大川等",
      "investors": "上海知识产权基金、天图投资、个人投资人魏巍等，老股东三七互娱继续跟投",
      "advantage": "成立一年即服务近 400 家 KA 客户、累计 ARR 破亿元，是国内 GEO 赛道跑得最快的公司之一。艾瑞预计国内 GEO 市场 2030 年将突破 500 亿元，AI 答案入口的营销基础设施价值正在被资本确认。",
      "sources": [
        {
          "label": "投资界",
          "url": "https://news.pedaily.cn/202607/565918.shtml"
        },
        {
          "label": "36氪",
          "url": "https://36kr.com/p/3884852687319303"
        },
        {
          "label": "新浪科技",
          "url": "https://finance.sina.com.cn/tech/roll/2026-07-07/doc-inifxtra1443975.shtml"
        }
      ]
    },
    {
      "name": "Bespoke Labs",
      "name_en": "Bespoke Labs",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "A轮",
      "amount_usd_m": 40,
      "amount_display": "4000 万美元 A 轮",
      "valuation": "未披露",
      "date": "2026-07-06",
      "location": "美国加州山景城",
      "business": "AI 智能体训练与评估基础设施公司，模拟企业真实环境（代码库、邮件、Slack 记录）作为强化学习环境，让智能体在部署前安全地测试和迭代。",
      "team": "2024 年由 Mahesh Sathiamoorthy 与 Alex Dimakis 创立",
      "investors": "Wing Venture Capital 领投，Mayfield、The House Fund 及来自 Anthropic/OpenAI/Meta 的天使投资人参投",
      "advantage": "卡位智能体可靠性这一企业落地关键瓶颈，自研 GEPA 优化器自动搜索提示与策略；RL 环境赛道是 2026 年智能体基础设施新热点。",
      "sources": [
        {
          "label": "citybiz 报道",
          "url": "https://www.citybiz.co/article/869997/bespoke-labs-raises-40m-to-boost-infrastructure-for-ai-agents/"
        },
        {
          "label": "Tech Startups 报道",
          "url": "https://techstartups.com/2026/07/06/venture-capital-startup-funding-roundup-july-6-2026/"
        },
        {
          "label": "Ventureburn 报道",
          "url": "https://ventureburn.com/bespoke-labs-raises-40m-ai-agent-training/"
        }
      ]
    },
    {
      "name": "逸文科技",
      "name_en": "Even Realities",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "B轮",
      "amount_usd_m": 150,
      "amount_display": "1.5 亿美元 Pre-B 轮（约 10.2 亿元人民币）",
      "valuation": "投后超 10 亿美元",
      "date": "2026-07-06",
      "location": "中国深圳",
      "business": "高端 AI 智能眼镜公司（端侧 AI 硬件），核心产品 Even G2 约 37 克、无摄像头设计主打隐私，均价超千美元，已实现盈利。",
      "team": "创始人王骁逸曾任 Apple Watch 工程师",
      "investors": "美团龙珠、美团战投、腾讯领投",
      "advantage": "成立不到三年即成为估值破 10 亿美元的 AI 眼镜独角兽且已盈利；走「先做好眼镜、再加智能」的差异化高端路线，直接对标 Meta 智能眼镜。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/07/06/smart-glasses-maker-even-realities-hits-1b-valuation-with-150m-funding-led-by-meituan-tencent/"
        },
        {
          "label": "新浪科技报道",
          "url": "https://finance.sina.com.cn/tech/roll/2026-07-07/doc-inifxxxe8341877.shtml"
        },
        {
          "label": "Yahoo Finance 报道",
          "url": "https://finance.yahoo.com/technology/articles/even-realities-raises-150m-hits-132518787.html"
        }
      ]
    },
    {
      "name": "影智XBOT",
      "name_en": "XBOT",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "B轮",
      "amount_usd_m": 42,
      "amount_display": "连续两轮数亿元人民币（B 轮约 3–5 亿元，报道不一/未官方披露）",
      "valuation": "未披露（报道称估值领先同赛道）",
      "date": "2026-07-03",
      "location": "中国深圳",
      "business": "餐饮场景商用机器人公司，产品包括咖啡机器人 C3、冰淇淋机器人 I3 及人形机器人 X1，已与京东达成战略合作并在七鲜咖啡门店试点。",
      "team": "创始人唐沐为小米前生态链副总裁；天使投资人包括张小龙、黎万强、林斌等（据公开报道）",
      "investors": "多支政府基金、美元基金与产业投资方共同参与；早期获腾讯、小米系高管个人投资",
      "advantage": "设备落地全球 100 余城、超 1000 台，累计出杯超 400 万；2025 年营收破亿元，2026 年在手订单约 3–5 亿元，是餐饮机器人赛道商业化最快的公司之一。",
      "sources": [
        {
          "label": "36氪报道",
          "url": "https://36kr.com/p/3882361033322755"
        },
        {
          "label": "凤凰网科技报道",
          "url": "https://tech.ifeng.com/c/8uShXwkDwBj"
        },
        {
          "label": "新浪新闻报道",
          "url": "https://www.sina.cn/news/detail/5316658675843498.html"
        }
      ]
    },
    {
      "name": "自变量机器人",
      "name_en": "X Square Robot",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "C轮",
      "amount_usd_m": 280,
      "amount_display": "B+/B++/C 三轮连续融资（单轮金额未完全披露，据报道半年累计约 20 亿元）",
      "valuation": "投后超 200 亿元人民币",
      "date": "2026-07-03",
      "location": "中国深圳",
      "business": "通用具身智能公司，走端到端统一大模型路线，自研 WALL-A 具身大模型与轮式双臂机器人「量子 2 号」，面向商业服务与工业场景。",
      "team": "创始团队具备大模型与机器人交叉背景（不列未经核实人名）",
      "investors": "中国移动、国家人工智能产业投资基金、红杉中国、IDG资本、源码资本、中金资本等 30 余家；美团、阿里、字节、小米曾分别领投",
      "advantage": "两个多月连续完成 B+/B++/C 四轮融资并全部交割，成为粤港澳大湾区首家估值破 200 亿元的具身智能公司；四大互联网厂商均领投过，是资本共识度最高的具身智能标的之一。",
      "sources": [
        {
          "label": "爱范儿报道",
          "url": "https://www.ifanr.com/1670322"
        },
        {
          "label": "新浪财经报道",
          "url": "https://finance.sina.com.cn/tob/2026-06-29/doc-iniezxay2302062.shtml"
        },
        {
          "label": "中国日报网报道",
          "url": "https://cn.chinadaily.com.cn/a/202606/30/WS6a43779ea310d709c2fbb137.html"
        }
      ]
    },
    {
      "name": "可灵AI",
      "name_en": "Kling AI",
      "region": "中国",
      "industry": "AI内容生成",
      "stage": "战略投资",
      "amount_usd_m": 3000,
      "amount_display": "近 30 亿美元（增资扩股）",
      "valuation": "投后约 180 亿美元",
      "date": "2026-07-02",
      "location": "中国北京",
      "business": "快手旗下独立运营的视频生成大模型公司，旗舰产品可灵（Kling）覆盖文生视频、图生视频与 AI 创作工具，服务电商、短剧、视频广告等场景。",
      "team": "快手可灵 AI 团队（避免未经核实的人名，从略）",
      "investors": "CPE源峰、国方创新、腾讯、中关村科学城基金、中信证券等联合领投；阿里云、百度、华策影视、芒果产业投资等 36 家机构参投",
      "advantage": "创全球视频/多模态大模型公司单轮融资纪录，腾讯、阿里、百度罕见同时入股。2025 年收入约 11 亿元人民币，电商、短剧与视频广告为三大收入来源；本轮为独立分拆并为后续上市铺路。",
      "sources": [
        {
          "label": "新浪科技报道",
          "url": "https://finance.sina.com.cn/tech/roll/2026-07-03/doc-inifntfe2385521.shtml"
        },
        {
          "label": "投资界（pedaily）报道",
          "url": "https://news.pedaily.cn/202607/565819.shtml"
        },
        {
          "label": "网易/界面：BAT 全上车",
          "url": "https://www.163.com/dy/article/L0TISH9905198NMR.html"
        }
      ]
    },
    {
      "name": "乐享科技",
      "name_en": "Lexiang Technology (Zeroth)",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "A轮",
      "amount_usd_m": 70,
      "amount_display": "近 5 亿元人民币（Pre-A 轮，约 0.7 亿美元）",
      "valuation": "未披露",
      "date": "2026-07-02",
      "location": "中国苏州",
      "business": "消费级/家庭具身智能机器人公司，发布家庭具身智能品牌「元点 Zeroth」，定位陪伴生活与家庭服务的通用小型具身机器人。",
      "team": "成立约一年半的家庭具身智能团队（避免未经核实的人名，从略）",
      "investors": "蚂蚁集团领投，吉利资本、三七互娱、元禾璞华跟投，老股东 Monolith 超额跟投",
      "advantage": "成立一年半累计融资约 10 亿元人民币；公司称在手订单超 3 万台、2026 上半年营收同比增长 600%（公司口径，未经审计）。蚂蚁集团领投彰显产业方对家庭具身智能赛道的押注。",
      "sources": [
        {
          "label": "新浪科技报道",
          "url": "https://finance.sina.com.cn/tech/roll/2026-07-02/doc-inifmmmw4087044.shtml"
        },
        {
          "label": "光明网报道",
          "url": "https://tech.gmw.cn/2026-07/02/content_38864263.htm"
        }
      ]
    },
    {
      "name": "Quantum Systems",
      "name_en": "Quantum Systems",
      "region": "欧洲",
      "industry": "机器人/具身智能",
      "stage": "D轮及以后",
      "amount_usd_m": 1200,
      "amount_display": "12 亿美元 D 轮",
      "valuation": "投后约 80 亿美元",
      "date": "2026-07-02",
      "location": "德国慕尼黑",
      "business": "AI 自主无人系统公司，产品覆盖空、陆、海军用无人机/无人载具，自研 MOSAIC UXS 软件让多域无人系统共享数据协同作战，2025 年在乌克兰执行超 1.9 万次任务。",
      "team": "创始团队来自德国无人机与航空工业（不列未经核实人名）",
      "investors": "Blackstone、Noteus、Airbus、Advent 联合领投，Bond、Fidelity、Balderton、HV Capital 等参投",
      "advantage": "估值半年多从 35 亿美元翻倍至约 80 亿美元，公司已盈利；欧洲防务 AI 龙头，2026 年防务科技融资已创纪录，资本密集涌入 AI 自主作战系统。",
      "sources": [
        {
          "label": "CNBC 报道",
          "url": "https://www.cnbc.com/2026/07/02/autonomous-defense-startup-quantum-systems.html"
        },
        {
          "label": "The Robot Report 报道",
          "url": "https://www.therobotreport.com/quantum-systems-raises-1-2b-expand-drone-production-deployments/"
        },
        {
          "label": "Tech Startups 报道",
          "url": "https://techstartups.com/2026/07/02/german-drone-startup-quantum-systems-raises-1-2b-at-8b-valuation-as-investors-pour-billions-into-ai-defense/"
        }
      ]
    },
    {
      "name": "Tripo AI（VAST）",
      "name_en": "Tripo AI",
      "region": "中国",
      "industry": "AI内容生成",
      "stage": "A轮",
      "amount_usd_m": 150,
      "amount_display": "1.5 亿美元（A3 轮；此前 6 月初另完成近 2 亿美元 A+/A++ 轮）",
      "valuation": "未披露",
      "date": "2026-07-02",
      "location": "北京",
      "business": "3D 生成基础模型与世界模型公司，产品 Tripo 系列可从文本/图像生成高质量 3D 资产，已发布 Tripo H3.1、P1.0 及 8K 纹理生成等能力。",
      "team": "VAST 团队，聚焦 3D 基础模型核心算法与数据基础设施",
      "investors": "吉利资本、4399、巨人网络、复星资本、基石资本、毅达资本、探湾网络、INCE Capital、Genesis Capital（老股东加注）等",
      "advantage": "全球 3D 生成赛道头部玩家，一个多月内连续完成近 3.5 亿美元融资。投资方横跨汽车、游戏、互联网产业，商业化生态协同强。3D 与世界模型路线契合具身智能与内容生产双重需求。",
      "sources": [
        {
          "label": "GlobeNewswire",
          "url": "https://www.globenewswire.com/news-release/2026/07/02/3321436/0/en/Tripo-AI-Raises-150-Million-in-Series-A3-Financing-Backed-by-Investors-Across-Automotive-Gaming-Internet-and-Technology-Sectors.html"
        },
        {
          "label": "SiliconANGLE",
          "url": "https://siliconangle.com/2026/07/02/tripo-ai-secures-additional-150m-funding-enhance-3d-world-models/"
        },
        {
          "label": "DEVELOP3D",
          "url": "https://develop3d.com/ai/tripo-ai-150-million-funding-for-3d-foundation-models/"
        }
      ]
    },
    {
      "name": "Together AI",
      "name_en": "Together AI",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "C轮",
      "amount_usd_m": 800,
      "amount_display": "8 亿美元（Series C）",
      "valuation": "约 83 亿美元",
      "date": "2026-07-01",
      "location": "美国旧金山",
      "business": "AI「新云」基础设施平台，出租 Nvidia GPU 集群，帮助企业训练与部署 DeepSeek、MiniMax、Kimi 等开源模型，成本较闭源方案低数倍至数十倍。",
      "team": "2022 年由 Vipul Ved Prakash 与斯坦福、苏黎世联邦理工学者共同创立（避免未经核实的其他人名，从略）",
      "investors": "Aramco Ventures 领投，Vista Equity Partners、General Catalyst、Emergence Capital、Nvidia、March Capital、Pegatron、SentinelOne S Ventures 等跟投",
      "advantage": "一季度年化合同金额（ACV）超 1.15 亿美元，客户使用开源模型可节省 6–60 倍成本；计划未来五年算力规模扩大约 50 倍，是开源模型云基础设施的头部玩家。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/07/01/neocloud-together-ai-raises-800m-leaps-to-8-3b-valuation/"
        },
        {
          "label": "Business Wire 官方公告",
          "url": "https://www.businesswire.com/news/home/20260701243402/en/Together-AI-Raises-$800-Million-at-$8.3-Billion-Valuation-to-Make-Frontier-AI-Accessible-to-All"
        }
      ]
    },
    {
      "name": "TwelveLabs",
      "name_en": "TwelveLabs",
      "region": "美国",
      "industry": "AI内容生成",
      "stage": "B轮",
      "amount_usd_m": 100,
      "amount_display": "1 亿美元（Series B）",
      "valuation": "未披露",
      "date": "2026-07-01",
      "location": "美国旧金山 / 韩国首尔",
      "business": "视频理解与生成式智能体平台，Marengo 3.0 视频嵌入模型可理解画面中的声音、文字与动作，Pegasus 1.5 将视频转化为结构化数据（场景边界、实体、时间片段）。",
      "team": "视频 AI 团队，总部旧金山与首尔并设（避免未经核实的人名，从略）",
      "investors": "NEA、NAVER Ventures 联合领投，Amazon、Radical Ventures、Korea Investment Partners、Index Ventures、Quadrille Capital、Red Bull Ventures 等参投",
      "advantage": "累计融资超 2.07 亿美元，从视频理解模型扩展为全栈视频智能体系统，客户涵盖体育、媒体与安防等多行业。",
      "sources": [
        {
          "label": "GlobeNewswire 官方公告",
          "url": "https://www.globenewswire.com/news-release/2026/07/01/3320545/0/en/twelvelabs-raises-100-million-in-series-b-funding-to-build-video-superintelligence.html"
        },
        {
          "label": "SiliconANGLE 报道",
          "url": "https://siliconangle.com/2026/07/01/twelvelabs-raises-100m-bring-superintelligence-ai-video-models/"
        }
      ]
    },
    {
      "name": "Venice",
      "name_en": "Venice",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "A轮",
      "amount_usd_m": 65,
      "amount_display": "6500 万美元（Series A，首轮外部融资）",
      "valuation": "约 10 亿美元",
      "date": "2026-07-01",
      "location": "美国西雅图",
      "business": "隐私优先的 AI 聚合平台，接入 200 余个文本、图像、视频、音频模型，用户请求经外部代理加密路由、不留存于自有系统，主打「无审查」私密 AI 体验。",
      "team": "由 Erik Voorhees 与 Jesse Proudman 于 2024 年创立（避免未经核实的其他人名，从略）",
      "investors": "Dragonfly 领投，Coinbase Ventures、North Island Ventures 等参投",
      "advantage": "成立即盈利，年化收入超 7000 万美元，4 月用户数达 300 万，首轮外部融资即跃升独角兽，是隐私向消费级 AI 赛道的代表企业。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/07/01/venice-ai-becomes-a-unicorn-with-65m-series-a-as-its-privacy-first-ai-platform-takes-off/"
        },
        {
          "label": "GeekWire 报道",
          "url": "https://www.geekwire.com/2026/private-ai-venice-ai-led-by-crypto-vet-erik-voorhees-and-seattles-jesse-proudman-raises-65m/"
        }
      ]
    },
    {
      "name": "Etched",
      "name_en": "Etched",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "C轮",
      "amount_usd_m": 500,
      "amount_display": "5 亿美元（Stripes 领投）",
      "valuation": "投后 50 亿美元",
      "date": "2026-07-01",
      "location": "美国加州",
      "business": "Transformer 专用推理芯片（ASIC）公司，旗舰芯片 Sohu 专为大模型推理设计，宣称单台 8 芯片服务器跑 Llama 70B 可达约 50 万 token/秒。",
      "team": "2022 年由哈佛辍学生创立（避免未经核实的具体人名，从略）",
      "investors": "Stripes 领投，Peter Thiel、Ribbit Capital 等参投",
      "advantage": "芯片尚未大规模交付已锁定约 10 亿美元订单，累计融资约 8 亿美元；TSMC 已流片成功，2026 年夏季开始出货，是专用推理芯片挑战英伟达的代表。",
      "sources": [
        {
          "label": "Data Center Dynamics 报道",
          "url": "https://www.datacenterdynamics.com/en/news/etchedai-raises-500m-for-a-5bn-valuation-report/"
        },
        {
          "label": "Crypto Briefing 报道",
          "url": "https://cryptobriefing.com/etched-5b-valuation-ai-chip-sales/"
        },
        {
          "label": "Asia Business Outlook 报道",
          "url": "https://www.asiabusinessoutlook.com/news/etched-raises-500m-valued-at-5b-for-ai-chip-sohu-nwid-11065.html"
        }
      ]
    },
    {
      "name": "Higharc",
      "name_en": "Higharc",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "C轮",
      "amount_usd_m": 95,
      "amount_display": "9500 万美元（C 轮）",
      "valuation": "未披露",
      "date": "2026-06-30",
      "location": "美国北卡罗来纳州达勒姆",
      "business": "住宅建筑 AI 平台，将房屋生成为 3D 空间数据，覆盖设计、算量、销售到施工全流程；并推出面向建材分销商的 AI Estimating 自动算料产品。",
      "team": "Higharc 团队（避免未经核实的人名，从略）",
      "investors": "Insight Partners 领投，Wellington Management、Fifth Wall、Spark Capital、Lux Capital 等跟投",
      "advantage": "累计融资超 1.7 亿美元，入选 Deloitte Fast 500 前 50。与美国最大私营建材分销商 US LBM 达成合作，把平台从建筑商延伸到建材供应链，卡位住宅建造垂直 AI。",
      "sources": [
        {
          "label": "Crunchbase News 本周十大融资",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-energy-biotech-joulent/"
        },
        {
          "label": "公司官方公告（PR Newswire）",
          "url": "https://www.prnewswire.com/news-releases/higharc-raises-95m-series-c-to-scale-ai-for-homebuilding-302814598.html"
        },
        {
          "label": "SiliconANGLE 报道",
          "url": "https://siliconangle.com/2026/07/01/homebuilding-ai-startup-higharc-bags-90m-series-c-funding/"
        }
      ]
    },
    {
      "name": "LeapXpert",
      "name_en": "LeapXpert",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "战略投资",
      "amount_usd_m": 180,
      "amount_display": "1.8 亿美元（成长期融资）",
      "valuation": "未披露",
      "date": "2026-06-30",
      "location": "美国纽约",
      "business": "AI 驱动的合规通信治理平台，将 WhatsApp、iMessage 等消息渠道纳入企业级合规留痕与治理，并用 AI 将客户对话转化为可执行的业务智能。",
      "team": "LeapXpert 团队（避免未经核实的人名，从略）",
      "investors": "Riverwood Capital 领投，Portage Ventures 等跟投",
      "advantage": "连续两年入选 Gartner 数字通信治理魔力象限「远见者」，服务金融机构与公共部门；本轮将加码 AI 对话理解能力并拓展企业市场。",
      "sources": [
        {
          "label": "公司官方公告",
          "url": "https://www.leapxpert.com/leapxpert-raises-180-million-to-lead-ai-powered-governed-communications/"
        },
        {
          "label": "Riverwood Capital 公告",
          "url": "https://www.riverwoodcapital.com/rwcm_news/riverwood-capital-leads-180-million-growth-round-investment-in-leapxpert/"
        },
        {
          "label": "PR Newswire 通稿",
          "url": "https://www.prnewswire.com/news-releases/leapxpert-raises-180-million-to-lead-ai-powered-governed-communications-302814485.html"
        }
      ]
    },
    {
      "name": "智平方",
      "name_en": "AI² Robotics",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 690,
      "amount_display": "近 50 亿元人民币（约 6.9 亿美元，一系列新融资）",
      "valuation": "超 200 亿元人民币",
      "date": "2026-06-29",
      "location": "深圳",
      "business": "通用具身智能公司，研发 AlphaBot 系列生产力型人形机器人，半自动化产线年产能突破 2000 台，正推动产品从项目制交付转向批量化标准品。",
      "team": "核心团队来自 AI 与智能制造领域（公司为大湾区首个估值超 200 亿元的具身智能独角兽）",
      "investors": "国家中小企业基金、广东省人工智能基金、南山战新投、招商局资本、茅台集团、中国生物制药、康龙化成、中贝通信 等",
      "advantage": "大湾区估值最高的具身智能企业，已实现生产力型机器人常态化批量交付。计划 2026 下半年启动数万台产线建设，商业化交付节奏领先同行。政策基金与产业资本共同加持，产业落地场景丰富。",
      "sources": [
        {
          "label": "新浪财经",
          "url": "https://finance.sina.com.cn/jjxw/2026-06-29/doc-inieznpe2397601.shtml"
        },
        {
          "label": "财联社",
          "url": "https://www.cls.cn/detail/2411316"
        },
        {
          "label": "福布斯中国",
          "url": "https://www.forbeschina.com/investment/71797"
        }
      ]
    },
    {
      "name": "AppsFlyer",
      "name_en": "AppsFlyer",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "D轮及以后",
      "amount_usd_m": 1000,
      "amount_display": "超 10 亿美元（Series E，含二级）",
      "valuation": "约 27 亿美元（投后）",
      "date": "2026-06-26",
      "location": "美国旧金山 / 以色列",
      "business": "移动归因与营销数据分析平台，以 AI 驱动数字营销度量与增长分析。",
      "team": "成立于 2011 年的数据分析团队（避免未经核实的人名，从略）",
      "investors": "据报道 Unity、Meta、Moloco、Google 等参投",
      "advantage": "营销度量赛道龙头，AI 化数据分析需求旺盛；本轮含一级与二级股权。估值与金额为报道口径，未完全官方披露。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Silicon Valley Invest Club",
          "url": "https://siliconvalleyinvestclub.substack.com/p/appsflyer-raises-over-1-billion-at"
        }
      ]
    },
    {
      "name": "Groq",
      "name_en": "Groq",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "D轮及以后",
      "amount_usd_m": 650,
      "amount_display": "6.5 亿美元",
      "valuation": "未披露",
      "date": "2026-06-26",
      "location": "美国旧金山",
      "business": "自研 LPU 推理芯片与 AI 推理云，主打超低延迟、高吞吐的大模型推理服务。",
      "team": "创始人 Jonathan Ross（前 Google TPU 团队）",
      "investors": "Infinitum、Disruptive 领投",
      "advantage": "本轮发生在英伟达 acquihire 式挖角创始团队约半年后，资本仍押注其推理云扩张，专用推理硬件路线差异化明显。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Yahoo Finance / PYMNTS 报道",
          "url": "https://www.pymnts.com/news/investment-tracker/2026/baseten-nears-1-5-billion-funding-round-as-inference-demand-surges/"
        }
      ]
    },
    {
      "name": "General Intuition",
      "name_en": "General Intuition",
      "region": "美国",
      "industry": "基础大模型",
      "stage": "A轮",
      "amount_usd_m": 320,
      "amount_display": "3.2 亿美元（Series A）",
      "valuation": "约 23 亿美元",
      "date": "2026-06-26",
      "location": "美国纽约",
      "business": "基于海量游戏画面训练的「世界模型」基础 AI，目标让智能体理解空间与物理交互。",
      "team": "新成立的世界模型研究团队（避免未经核实的人名，从略）",
      "investors": "Khosla Ventures 领投，Jeff Bezos、General Catalyst 等参投",
      "advantage": "A 轮即 23 亿美元估值，押注「世界模型」这一前沿方向；以游戏数据训练空间智能，路线独特。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "钛媒体 世界模型报道",
          "url": "https://www.tmtpost.com/8037833.html"
        }
      ]
    },
    {
      "name": "Mirendil",
      "name_en": "Mirendil",
      "region": "美国",
      "industry": "基础大模型",
      "stage": "种子/天使",
      "amount_usd_m": 200,
      "amount_display": "2 亿美元（种子轮）",
      "valuation": "未披露",
      "date": "2026-06-26",
      "location": "美国旧金山",
      "business": "前沿实验室，构建在「AI 研发自动化」上表现卓越的系统，目标用 AI 加速 AI 研究。",
      "team": "新成立的前沿实验室团队（避免未经核实的人名，从略）",
      "investors": "Andreessen Horowitz、Kleiner Perkins 领投，Nvidia 参投",
      "advantage": "2 亿美元种子轮规模罕见，顶级 VC 加英伟达背书；瞄准「用 AI 做 AI 研发」的自我加速路径。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Crunchbase 大额种子轮分析",
          "url": "https://news.crunchbase.com/venture/data-largest-seed-rounds-ai-startups/"
        }
      ]
    },
    {
      "name": "Upscale AI",
      "name_en": "Upscale AI",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "A轮",
      "amount_usd_m": 190,
      "amount_display": "1.9 亿美元（Series A 追加）",
      "valuation": "约 20 亿美元",
      "date": "2026-06-26",
      "location": "美国圣克拉拉（加州）",
      "business": "AI 网络基础设施，为大规模 AI 集群提供高性能网络互联方案。",
      "team": "新成立的网络基础设施团队（避免未经核实的人名，从略）",
      "investors": "Premji Invest 领投",
      "advantage": "A 轮追加后累计融资达 5 亿美元，估值 20 亿美元；AI 算力集群规模化带动网络互联需求爆发。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Crunchbase News AI 板块",
          "url": "https://news.crunchbase.com/sections/ai/"
        }
      ]
    },
    {
      "name": "Quantifind",
      "name_en": "Quantifind",
      "region": "美国",
      "industry": "AI金融/保险",
      "stage": "D轮及以后",
      "amount_usd_m": 200,
      "amount_display": "2 亿美元（成长轮）",
      "valuation": "未披露",
      "date": "2026-06-26",
      "location": "美国帕洛阿尔托（加州）",
      "business": "面向金融犯罪侦测与国家安全的风险情报平台，用 AI 识别欺诈、洗钱与制裁风险。",
      "team": "成立多年的风险情报团队（避免未经核实的人名，从略）",
      "investors": "Summit Partners 领投",
      "advantage": "金融犯罪合规与风险情报刚需赛道，AI 实体识别与图谱分析能力构成壁垒。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Crunchbase News AI 板块",
          "url": "https://news.crunchbase.com/sections/ai/"
        }
      ]
    },
    {
      "name": "Peregrine Technologies",
      "name_en": "Peregrine Technologies",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "D轮及以后",
      "amount_usd_m": 250,
      "amount_display": "2.5 亿美元（Series D）",
      "valuation": "约 68 亿美元",
      "date": "2026-06-26",
      "location": "美国旧金山",
      "business": "面向公共安全机构与政府部门的数据整合与分析平台，用 AI 打通多源数据辅助决策。",
      "team": "成立于 2017 年的政府软件团队（避免未经核实的人名，从略）",
      "investors": "Fifth Down Capital、Sequoia Capital、Goldcrest Capital、XYZ Ventures 等",
      "advantage": "政府与公共安全数据中台稀缺供应商，估值升至 68 亿美元；合规与数据壁垒高、续约稳定。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Crunchbase News Venture 板块",
          "url": "https://news.crunchbase.com/sections/venture/"
        }
      ]
    },
    {
      "name": "Alan",
      "name_en": "Alan",
      "region": "欧洲",
      "industry": "AI金融/保险",
      "stage": "D轮及以后",
      "amount_usd_m": 546,
      "amount_display": "约 5.46 亿美元（含二级，约 4.6 亿美元一级）",
      "valuation": "未披露",
      "date": "2026-06-26",
      "location": "法国巴黎",
      "business": "数字健康保险与健康管理平台，结合 AI 提供保险、健康咨询与就医服务。",
      "team": "成立于 2016 年的健康保险团队（避免未经核实的人名，从略）",
      "investors": "Prosus 领投（一级与二级股权）",
      "advantage": "欧洲数字健康险代表，AI 健康助理叠加保险闭环；金额含二级，口径以报道为准。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Crunchbase News Venture 板块",
          "url": "https://news.crunchbase.com/sections/venture/"
        }
      ]
    },
    {
      "name": "无界动力",
      "name_en": "Unbounded Dynamics",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "种子/天使",
      "amount_usd_m": 200,
      "amount_display": "超 2 亿美元（天使轮累计）",
      "valuation": "未披露",
      "date": "2026-06-26",
      "location": "中国",
      "business": "通用具身智能机器人公司，聚焦具身「通用大脑」与「操作智能」，技术路线为「隐空间世界模型 + 强化学习」。",
      "team": "成立于 2025 年的具身智能团队（避免未经核实的人名，从略）",
      "investors": "京东关联基金、C 资本、弘毅投资、盛宇投资、丰源投资等联合投资；据报道近 2 亿美元 Pre-A 轮亦接近完成",
      "advantage": "成立约一年天使轮累计融资超 2 亿美元，已拿下远景、ZF LIFETEC 等近 1 亿美元全球订单，京东系产业资本加持。金额为报道口径，未完全官方披露。",
      "sources": [
        {
          "label": "投资界(pedaily) 报道",
          "url": "https://news.pedaily.cn/202606/565576.shtml"
        },
        {
          "label": "第一财经 报道",
          "url": "https://www.yicai.com/brief/103154141.html"
        }
      ]
    },
    {
      "name": "深度机智",
      "name_en": "Deepwise Robotics",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 50,
      "amount_display": "数亿元人民币（最新一轮）",
      "valuation": "未披露",
      "date": "2026-06-26",
      "location": "中国",
      "business": "聚焦具身智能的 AI 公司，采用「人类第一视角」技术路线，做人类学习路线全栈，全产品线已落地商业订单。",
      "team": "兼具科研与产业落地的核心团队（避免未经核实的人名，从略）",
      "investors": "国寿长三角科创基金领投，普华资本、诚通科创基金、蓝湖资本、磐谷创投等十余家机构参与",
      "advantage": "「人类第一视角」数据路线差异化，全产品线已签约数千万元商业订单，下一轮融资已进入收尾阶段。金额为报道口径，未完全官方披露。",
      "sources": [
        {
          "label": "腾讯新闻 芯报",
          "url": "https://news.qq.com/rain/a/20260626A0AB9H00"
        },
        {
          "label": "知乎 独家报道",
          "url": "https://zhuanlan.zhihu.com/p/2038559923043296165"
        }
      ]
    },
    {
      "name": "8090 Solutions",
      "name_en": "8090",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "A轮",
      "amount_usd_m": 135,
      "amount_display": "1.35 亿美元（Series A）",
      "valuation": "未披露",
      "date": "2026-06-26",
      "location": "美国",
      "business": "「Software Factory」平台，让企业工程团队与 AI 智能体协同，将业务需求转化为生产级、可审计代码，并提供面向医疗、保险、生命科学、航空航天、能源、制造、金融、政府等受监管行业的托管开发服务。",
      "team": "2024 年 1 月由 Chamath Palihapitiya 与联合创始人兼 CTO Sina Sojoodi 创立",
      "investors": "Salesforce Ventures 领投，WndrCo、Craft Ventures、The Production Board、LAUNCH 等参投",
      "advantage": "定位「人机协同软件工厂」，切入受监管行业的定制软件与托管开发市场，创始人转为全职 CEO 后加速商业化。",
      "sources": [
        {
          "label": "Business Wire 官方公告",
          "url": "https://www.businesswire.com/news/home/20260626795833/en/8090-Raises-$135M-Series-A-to-Accelerate-Their-Rollout-of-Software-Factory"
        },
        {
          "label": "SiliconANGLE 报道",
          "url": "https://siliconangle.com/2026/06/29/ai-software-development-startup-8090-nabs-135m-funding-round/"
        }
      ]
    },
    {
      "name": "临界点",
      "name_en": "Critical Point",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 140,
      "amount_display": "数亿元人民币（最新一轮约 10 亿元）",
      "valuation": "约 10 亿美元",
      "date": "2026-06-25",
      "location": "中国上海",
      "business": "从智元机器人拆分独立的灵巧手与夹爪研发商，产品包括自适应夹爪 OmniPicker、全能作业灵巧手 OmniHand Pro 等。",
      "team": "由智元机器人 2026 年初出资孵化（避免未经核实的人名，从略）",
      "investors": "蓝驰创投、高瓴创投、百度风投、云锋基金、未来资产、京铭资本等（成立 5 个月内密集完成四轮）",
      "advantage": "成立不足 5 个月估值破 10 亿美元，灵巧手累计交付超 8000 台、夹爪出货超万台，据透露首季已实现盈利。金额为报道口径，未完全官方披露。",
      "sources": [
        {
          "label": "36氪 氪星晚报",
          "url": "https://36kr.com/p/3869884559332356"
        },
        {
          "label": "新浪财经 报道",
          "url": "https://finance.sina.com.cn/jjxw/2026-05-20/doc-inhypaen2653823.shtml"
        }
      ]
    },
    {
      "name": "Patronus AI",
      "name_en": "Patronus AI",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "B轮",
      "amount_usd_m": 50,
      "amount_display": "5000 万美元 B 轮",
      "valuation": "未披露",
      "date": "2026-06-25",
      "location": "美国旧金山",
      "business": "AI 智能体评测与压力测试平台，推出首个「数字世界模型」，在模拟环境中提前发现 AI 智能体的失败模式",
      "team": "创始人 Anand Kannappan、Rebecca Qian（均为前 Meta AI 研究员）",
      "investors": "Greenfield Partners 领投，Notable Capital、Lightspeed、Datadog、三星、Factorial Capital 等参投",
      "advantage": "过去一年收入增长约 15 倍，几乎所有头部 AI 实验室都是其客户。随着企业大规模部署智能体，部署前仿真测试正成为刚需环节，Patronus 卡位这一新基础设施层。",
      "sources": [
        {
          "label": "TechCrunch",
          "url": "https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/"
        },
        {
          "label": "SiliconANGLE",
          "url": "https://siliconangle.com/2026/06/25/patronus-ai-grabs-50m-funding-stress-test-ai-agents-simulated-environments/"
        },
        {
          "label": "PR Newswire",
          "url": "https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html"
        }
      ]
    },
    {
      "name": "Assort Health",
      "name_en": "Assort Health",
      "region": "美国",
      "industry": "AI医疗健康",
      "stage": "C轮",
      "amount_usd_m": 120,
      "amount_display": "1.2 亿美元（Series C）",
      "valuation": "未披露",
      "date": "2026-06-24",
      "location": "美国",
      "business": "面向医疗机构的 AI 语音/通信平台，自动处理患者来电、预约与分诊等前台流程。",
      "team": "医疗 AI 创业团队（避免未经核实的人名，从略）",
      "investors": "Menlo Ventures、Lightspeed、Felicis、First Round Capital 等，累计融资超 2.22 亿美元",
      "advantage": "切入医院前台人力短缺痛点，AI 语音代理可显著降本增效；累计融资超 2.22 亿美元，商业化进展快。",
      "sources": [
        {
          "label": "Tech Startups 融资综述（2026-06-24）",
          "url": "https://techstartups.com/2026/06/24/venture-capital-startup-funding-roundup-june-24-2026/"
        },
        {
          "label": "AI Funding Tracker 医疗榜",
          "url": "https://aifundingtracker.com/top-ai-healthcare-startups/"
        }
      ]
    },
    {
      "name": "xCures",
      "name_en": "xCures",
      "region": "美国",
      "industry": "AI医疗健康",
      "stage": "B轮",
      "amount_usd_m": 46,
      "amount_display": "4600 万美元（Series B）",
      "valuation": "约 1.27 亿美元（投后）",
      "date": "2026-06-24",
      "location": "美国",
      "business": "用 AI 自动归集、结构化并清洗分散的患者病历与医疗记录，服务临床研究与诊疗决策。",
      "team": "医疗数据 AI 团队（避免未经核实的人名，从略）",
      "investors": "Innovius Capital 领投，iGrow、GKCC、Spring Mountain Capital 等",
      "advantage": "解决医疗数据「脏、散、乱」的底层难题，结构化病历对临床试验和真实世界研究价值高。",
      "sources": [
        {
          "label": "Crunchbase News 独家报道",
          "url": "https://news.crunchbase.com/venture/xcures-lands-seriesb-medical-records-ai/"
        },
        {
          "label": "Tech Startups 融资综述（2026-06-24）",
          "url": "https://techstartups.com/2026/06/24/venture-capital-startup-funding-roundup-june-24-2026/"
        }
      ]
    },
    {
      "name": "Taktile",
      "name_en": "Taktile",
      "region": "美国",
      "industry": "AI金融/保险",
      "stage": "C轮",
      "amount_usd_m": 110,
      "amount_display": "1.1 亿美元（Series C）",
      "valuation": "未披露",
      "date": "2026-06-24",
      "location": "美国纽约 / 德国柏林",
      "business": "面向金融机构的 AI 决策引擎，帮助银行与信贷机构搭建和迭代风控、授信等自动化决策流。",
      "team": "金融科技工程团队（避免未经核实的人名，从略）",
      "investors": "Goldman Sachs 领投，累计融资达 1.84 亿美元",
      "advantage": "高盛领投强化金融客户背书；低代码决策编排让金融机构快速上线 AI 风控，替换传统规则引擎。",
      "sources": [
        {
          "label": "Tech Startups 融资综述（2026-06-24）",
          "url": "https://techstartups.com/2026/06/24/venture-capital-startup-funding-roundup-june-24-2026/"
        },
        {
          "label": "Crunchbase News AI 板块",
          "url": "https://news.crunchbase.com/sections/ai/"
        }
      ]
    },
    {
      "name": "TensorX",
      "name_en": "TensorX",
      "region": "欧洲",
      "industry": "AI开发工具/基础设施",
      "stage": "种子/天使",
      "amount_usd_m": 9,
      "amount_display": "约 800 万欧元（种子轮）",
      "valuation": "未披露",
      "date": "2026-06-24",
      "location": "欧洲",
      "business": "主权算力（sovereign compute）公司，为区域客户提供自主可控的 AI 算力与基础设施。",
      "team": "主权算力创业团队（避免未经核实的人名，从略）",
      "investors": "Darius Cubed Ventures",
      "advantage": "顺应各国「算力主权」与数据本地化趋势，定位区域自主 AI 基础设施，早期切入差异化赛道。",
      "sources": [
        {
          "label": "Tech Startups 融资综述（2026-06-24）",
          "url": "https://techstartups.com/2026/06/24/venture-capital-startup-funding-roundup-june-24-2026/"
        },
        {
          "label": "Crunchbase News AI 板块",
          "url": "https://news.crunchbase.com/sections/ai/"
        }
      ]
    },
    {
      "name": "RunPod",
      "name_en": "RunPod",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "A轮",
      "amount_usd_m": 100,
      "amount_display": "1 亿美元",
      "valuation": "约 10 亿美元",
      "date": "2026-06-24",
      "location": "美国新泽西州纽瓦克",
      "business": "面向 AI 开发者的云平台，提供模型训练、微调、推理与多节点扩展一体化基础设施，平台开发者用户超 100 万。",
      "team": "由前 Comcast 工程师团队创立（避免未经核实的人名，从略）",
      "investors": "Summit Partners 领投",
      "advantage": "拒绝逾 5 亿美元收购要约选择独立发展；估值较 2024 年种子轮的约 1 亿美元大幅跃升，是 AI 开发者云赛道成长最快的公司之一。",
      "sources": [
        {
          "label": "PR Newswire 官方公告",
          "url": "https://www.prnewswire.com/news-releases/runpod-raises-100m-led-by-summit-partners-to-accelerate-the-ai-developer-cloud-302808689.html"
        },
        {
          "label": "The Information 报道",
          "url": "https://www.theinformation.com/newsletters/ai-agenda/cloud-startup-runpod-raises-100-million-says-turned-buyout-offers"
        }
      ]
    },
    {
      "name": "Trase",
      "name_en": "Trase",
      "region": "美国",
      "industry": "AI医疗健康",
      "stage": "种子/天使",
      "amount_usd_m": 107,
      "amount_display": "1.07 亿美元（种子轮）",
      "valuation": "未披露",
      "date": "2026-06-24",
      "location": "美国",
      "business": "面向医疗、国防等高监管行业的智能体操作系统 Trase Origin，提供患者接入导航、临床研究、资源优化、临床支持、护理路径自动化、收入周期管理等专用智能体，按客户效率提升计费、不上收数据。",
      "team": "面向受监管行业的智能体团队（避免未经核实的人名，从略）",
      "investors": "ARCH Venture Partners 领投，Red Cell Partners 等参投",
      "advantage": "在杜克大学医疗系统心内科单科每月处理超 5000 份传真，客户还包括美国海军，是少数聚焦高合规壁垒场景的智能体公司，种子轮融资规模罕见地达 1 亿美元级别。",
      "sources": [
        {
          "label": "Axios 报道",
          "url": "https://www.axios.com/pro/health-tech-deals/2026/06/24/trase-107-million-health-care-defense-ai"
        },
        {
          "label": "MobiHealthNews 报道",
          "url": "https://www.mobihealthnews.com/news/trase-lands-107m-scale-ai-agents-healthcare-and-high-stakes-industries"
        }
      ]
    },
    {
      "name": "Baseten",
      "name_en": "Baseten",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "D轮及以后",
      "amount_usd_m": 1500,
      "amount_display": "15 亿美元（Series F）",
      "valuation": "约 130 亿美元",
      "date": "2026-06-22",
      "location": "美国旧金山",
      "business": "AI 推理基础设施平台，帮助企业在多云环境部署、运行和扩展 AI 模型推理工作负载，号称日处理超 10 亿次推理调用。",
      "team": "成立于 2019 年的工程团队（避免未经核实的人名，从略）",
      "investors": "Altimeter Capital、Conviction、Spark Capital、Sands Capital、Wellington Management 共同领投，IVP、Greylock、D.E. Shaw Ventures 等跟投",
      "advantage": "18 个月内第四次融资，营收同比增长约 20 倍。覆盖 18 个云、87 个集群，是当前最受资本追捧的 AI 推理基础设施供应商之一。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-26 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/"
        },
        {
          "label": "Business Wire 官方公告",
          "url": "https://www.businesswire.com/news/home/20260622645563/en/Baseten-Raises-$1.5-Billion-to-Power-the-Next-Era-of-AI-Inference"
        }
      ]
    },
    {
      "name": "Odyssey",
      "name_en": "Odyssey",
      "region": "美国",
      "industry": "基础大模型",
      "stage": "B轮",
      "amount_usd_m": 310,
      "amount_display": "3.1 亿美元（Series B）",
      "valuation": "约 14.5 亿美元",
      "date": "2026-06-17",
      "location": "美国",
      "business": "「世界模型」AI 创业公司，构建可模拟与预测人、物体与环境交互的生成式世界模型，应用于机器人、自动驾驶、科学与游戏等领域。",
      "team": "由自动驾驶领域资深团队创立（避免未经核实的人名，从略）",
      "investors": "Natural Capital 领投，Amazon、GV、AMD Ventures、EQT、IQT 等参投",
      "advantage": "B 轮即 14.5 亿美元估值，押注前沿「世界模型」方向；与 AWS 达成战略合作并部署 Trainium 芯片，巨头与明星天使阵容豪华。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/06/17/world-model-maker-odyssey-nabs-1-45b-valuation-backed-by-amazon-and-other-big-names/"
        },
        {
          "label": "Odyssey 官方公告",
          "url": "https://odyssey.ml/our-series-b"
        }
      ]
    },
    {
      "name": "深度求索",
      "name_en": "DeepSeek",
      "region": "中国",
      "industry": "基础大模型",
      "stage": "战略投资",
      "amount_usd_m": 7400,
      "amount_display": "约 500 亿元人民币（约 74 亿美元，成立以来首轮外部融资）",
      "valuation": "约 3300–3500 亿元人民币（约 500–590 亿美元，报道口径不一）",
      "date": "2026-06-16",
      "location": "中国杭州",
      "business": "开源大模型公司，以高性价比训练与推理著称，模型在全球开发者社区广泛使用。",
      "team": "创始人梁文锋",
      "investors": "腾讯（拟投约 100 亿元）、宁德时代（拟投约 50 亿元）为主要外部投资方；创始人梁文锋个人出资约 200 亿元为最大出资方；国家人工智能产业投资基金关联主体保留投票权，外部投资人无投票权、五年锁定期",
      "advantage": "成立以来首次引入外部融资，打破此前坚持自有资金的原则；3 周内估值四次改写，跻身全球 AI 独角兽第一梯队；融资结构特殊，创始人通过关联有限合伙企业保持控制权。",
      "sources": [
        {
          "label": "IT之家报道",
          "url": "https://www.ithome.com/0/964/772.htm"
        },
        {
          "label": "证券时报报道",
          "url": "https://www.stcn.com/article/detail/3904065.html"
        }
      ]
    },
    {
      "name": "阶跃星辰",
      "name_en": "StepFun",
      "region": "中国",
      "industry": "基础大模型",
      "stage": "战略投资",
      "amount_usd_m": 2500,
      "amount_display": "近 25 亿美元（Pre-IPO）",
      "valuation": "约 100 亿美元（基石定价目标）",
      "date": "2026-06-15",
      "location": "中国上海",
      "business": "多模态基础大模型公司，研发文本、语音、视觉等多模态模型并布局终端智能。",
      "team": "上海基础模型团队（避免未经核实的人名，从略）",
      "investors": "终端硬件产业链资本集体入场（Pre-IPO 轮，机构名单以披露为准）",
      "advantage": "叠加年初超 50 亿元 B+ 轮，年内融资总额超 200 亿元；计划 6 月底前递表港交所，预期年底上市。金额/估值为报道口径，未完全官方披露。",
      "sources": [
        {
          "label": "财联社 报道",
          "url": "https://m.cls.cn/detail/2365829"
        },
        {
          "label": "DoNews 报道",
          "url": "https://www.donews.com/news/detail/4/6552997.html"
        }
      ]
    },
    {
      "name": "世航智能",
      "name_en": "Shihang Intelligent",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "A轮",
      "amount_usd_m": 140,
      "amount_display": "超 10 亿元人民币（约 1.4 亿美元，A 轮）",
      "valuation": "未披露",
      "date": "2026-06-15",
      "location": "中国苏州",
      "business": "海洋具身智能机器人研发商，「虎鲸」等型号具备 0–10000 米全海深、全自由度作业能力，是目前唯一在真实海洋环境中实现全海深稳定商业部署的产品，今年以来订单金额已超 10 亿元。",
      "team": "海洋机器人研发团队（避免未经核实的人名，从略）",
      "investors": "摩尔线程/昆仑芯关联的上河动量基金、淡马锡旗下 Vertex Growth、中信集团旗下农业产业基金、誉尊资本、大洋电机等新股东，金沙江创投、祥峰中国、华映资本、长石资本、盛景嘉成资本、鞍羽资本等老股东超额追投",
      "advantage": "创全球海洋机器人赛道单轮融资纪录，将具身智能从陆地拓展至全海深场景，是稀缺的「海洋+具身智能」标的。",
      "sources": [
        {
          "label": "投资界报道",
          "url": "https://news.pedaily.cn/202606/565212.shtml"
        },
        {
          "label": "东方财富网报道",
          "url": "https://wap.eastmoney.com/a/202606153771444027.html"
        }
      ]
    },
    {
      "name": "Prometheus",
      "name_en": "Prometheus",
      "region": "美国",
      "industry": "机器人/具身智能",
      "stage": "B轮",
      "amount_usd_m": 12000,
      "amount_display": "120 亿美元（B轮）",
      "valuation": "投后约 410 亿美元",
      "date": "2026-06-11",
      "location": "美国",
      "business": "由 Jeff Bezos 与前 Google 高管 Vik Bajaj 共同领导的工业 AI 公司，打造面向物理世界的“通用人工工程师”（artificial general engineer），用 AI 自动化喷气发动机、医疗器械、消费电子等复杂物理系统的设计与制造流程。",
      "team": "Jeff Bezos（联合 CEO）、Vik Bajaj（联合 CEO，前 Google/Verily 高管）",
      "investors": "JPMorgan、BlackRock、Goldman Sachs、DST Global、ARCH Venture Partners 等",
      "advantage": "含 2025 年底 62 亿美元启动轮在内累计融资超 180 亿美元，是物理 AI/工业 AI 领域迄今最大押注。Bezos 亲自出任联合 CEO 并罕见公开阐述“压缩工程师 dream-build 循环 10 倍以上”的愿景，顶级金融机构集体入局。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/"
        },
        {
          "label": "Axios 报道",
          "url": "https://www.axios.com/2026/06/11/prometheus-bezos-industrial-ai"
        },
        {
          "label": "CNBC 报道",
          "url": "https://www.cnbc.com/2026/06/11/project-prometheus-bezos-bajaj-live-updates.html"
        }
      ]
    },
    {
      "name": "TensorWave",
      "name_en": "TensorWave",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "B轮",
      "amount_usd_m": 350,
      "amount_display": "3.5 亿美元（Series B）",
      "valuation": "约 15.5 亿美元",
      "date": "2026-06-10",
      "location": "美国",
      "business": "全栈基于 AMD 芯片的 AI 云，专注大模型训练与高吞吐推理等内存密集型工作负载，主打不依赖英伟达的算力路线。",
      "team": "成立的 AI 云基础设施团队（避免未经核实的人名，从略）",
      "investors": "Magnetar、AMD Ventures 共同领投，Maverick Silicon、Nexus Venture Partners、Western Frontier 等跟投",
      "advantage": "运营北美最大 AMD AI 训练集群之一（8192 张 MI325X），锁定超 2GW 长期数据中心容量；AMD 路线为算力市场提供英伟达之外的差异化选择。",
      "sources": [
        {
          "label": "Business Wire 官方公告",
          "url": "https://www.businesswire.com/news/home/20260610650010/en/TensorWave-Raises-$350-Million-Series-B-at-$1.55B-Valuation-to-Expand-Global-AMD-Powered-AI-Infrastructure"
        },
        {
          "label": "Data Center Dynamics 报道",
          "url": "https://www.datacenterdynamics.com/en/news/amd-based-ai-cloud-tensorwave-secures-350m-series-b-funding/"
        }
      ]
    },
    {
      "name": "月之暗面",
      "name_en": "Moonshot AI",
      "region": "中国",
      "industry": "基础大模型",
      "stage": "战略投资",
      "amount_usd_m": 2000,
      "amount_display": "约 20 亿美元（传闻洽谈中）",
      "valuation": "上一轮投后约 200 亿美元已交割；新一轮投前估值报道约 315 亿美元（未官方披露）",
      "date": "2026-06-08",
      "location": "中国北京",
      "business": "通用大模型公司，旗舰产品为 Kimi 智能助手，主打长文本与 Agent 能力。",
      "team": "创始人杨植麟",
      "investors": "新一轮投资方未官方披露",
      "advantage": "据 2026 年 7 月初报道，上一轮 200 亿美元估值融资完成交割，新一轮融资已启动、投前估值升至约 315 亿美元。金额与估值均为媒体报道口径，存在报道不一，谨慎采信。",
      "sources": [
        {
          "label": "36氪 / ZAKER 报道",
          "url": "https://app.myzaker.com/news/article.php?pk=6a2b70ba8e9f096cb2581cf6"
        },
        {
          "label": "财联社 大模型第一股报道",
          "url": "https://www.cls.cn/detail/2227664"
        }
      ]
    },
    {
      "name": "宇树科技",
      "name_en": "Unitree",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 580,
      "amount_display": "科创板 IPO 拟募资 42.02 亿元人民币",
      "valuation": "约 420 亿元人民币",
      "date": "2026-06-07",
      "location": "中国杭州",
      "business": "四足机器人与人形机器人厂商，产品覆盖消费、工业与科研市场。",
      "team": "创始人王兴兴",
      "investors": "公开市场（科创板 IPO，过会）",
      "advantage": "从受理到过会仅 73 天，创 2026 年迄今最快 IPO 纪录，整体估值约 420 亿元，是人形机器人量产与资本化的标杆。",
      "sources": [
        {
          "label": "证券时报 报道",
          "url": "https://www.stcn.com/article/detail/3753646.html"
        },
        {
          "label": "腾讯新闻 融资日报",
          "url": "https://news.qq.com/rain/a/20260601A087VN00"
        }
      ]
    },
    {
      "name": "Supabase",
      "name_en": "Supabase",
      "region": "美国",
      "industry": "AI开发工具/基础设施",
      "stage": "D轮及以后",
      "amount_usd_m": 500,
      "amount_display": "5 亿美元",
      "valuation": "约 105 亿美元",
      "date": "2026-06-05",
      "location": "美国旧金山",
      "business": "开源后端即服务（BaaS）平台，为开发者与 AI 应用构建者提供数据库、身份认证与向量存储等能力。",
      "team": "成立于 2020 年的开源团队（避免未经核实的人名，从略）",
      "investors": "GIC 领投",
      "advantage": "AI 应用开发热潮的核心基础设施之一，开源生态与开发者口碑突出，估值一年内大幅跃升。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-05 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/"
        },
        {
          "label": "Tech Startups 融资综述",
          "url": "https://techstartups.com/2026/06/03/venture-capital-startup-funding-roundup-june-3-2026/"
        }
      ]
    },
    {
      "name": "Flourish",
      "name_en": "Flourish",
      "region": "美国",
      "industry": "基础大模型",
      "stage": "种子/天使",
      "amount_usd_m": 500,
      "amount_display": "5 亿美元（初始轮）",
      "valuation": "未披露",
      "date": "2026-06-05",
      "location": "美国纽约",
      "business": "研发受人脑启发的新型人工智能模型，探索区别于主流 Transformer 的类脑架构。",
      "team": "新成立的研究型团队（避免未经核实的人名，从略）",
      "investors": "Jeff Bezos、Lux Capital、Google Ventures 等",
      "advantage": "5 亿美元初始轮在种子阶段极为罕见，明星投资人背书；类脑架构若跑通有望突破现有大模型的能耗与泛化瓶颈。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-05 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/"
        },
        {
          "label": "Crunchbase 大额种子轮分析",
          "url": "https://news.crunchbase.com/venture/data-largest-seed-rounds-ai-startups/"
        }
      ]
    },
    {
      "name": "Suno",
      "name_en": "Suno",
      "region": "美国",
      "industry": "AI内容生成",
      "stage": "D轮及以后",
      "amount_usd_m": 400,
      "amount_display": "4 亿美元（Series D）",
      "valuation": "约 54 亿美元",
      "date": "2026-06-05",
      "location": "美国剑桥（马萨诸塞）",
      "business": "AI 音乐生成工具，用户用文本提示即可生成完整歌曲与配乐。",
      "team": "成立于 2022 年的音乐 AI 团队（避免未经核实的人名，从略）",
      "investors": "Bond 领投",
      "advantage": "消费级 AI 音乐生成的领跑者，付费用户增长迅速；同时面临多家唱片公司就版权训练数据提起的诉讼，存在法律不确定性。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-05 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/"
        },
        {
          "label": "Tech Startups 融资综述",
          "url": "https://techstartups.com/2026/06/03/venture-capital-startup-funding-roundup-june-3-2026/"
        }
      ]
    },
    {
      "name": "Generalist AI",
      "name_en": "Generalist AI",
      "region": "美国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 400,
      "amount_display": "4 亿美元",
      "valuation": "约 20 亿美元",
      "date": "2026-06-05",
      "location": "美国圣马特奥（加州）",
      "business": "用通用 AI 让机器人完成复杂任务，研发跨形态的机器人基础模型。",
      "team": "成立约 2 年的机器人 AI 团队（避免未经核实的人名，从略）",
      "investors": "Radical Ventures 领投",
      "advantage": "成立两年即获 4 亿美元与 20 亿美元估值，押注具身智能通用基础模型，是海外具身赛道明星新贵。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-05 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/"
        },
        {
          "label": "Crunchbase News AI 板块",
          "url": "https://news.crunchbase.com/sections/ai/"
        }
      ]
    },
    {
      "name": "AlphaSense",
      "name_en": "AlphaSense",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "D轮及以后",
      "amount_usd_m": 350,
      "amount_display": "3.5 亿美元",
      "valuation": "约 75 亿美元",
      "date": "2026-06-05",
      "location": "美国纽约",
      "business": "AI 市场情报与工作流编排平台，服务金融、咨询与企业研究人员的信息检索与分析。",
      "team": "成立于 2011 年的金融信息团队（避免未经核实的人名，从略）",
      "investors": "Vitruvian Partners、Accenture Ventures、J.P. Morgan Asset Management、D.E. Shaw Ventures、Pinegrove 等",
      "advantage": "企业级 AI 研究/情报赛道头部，客户黏性高、数据壁垒强，估值持续抬升。",
      "sources": [
        {
          "label": "Crunchbase News（2026-06-05 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/"
        },
        {
          "label": "Crunchbase News AI 板块",
          "url": "https://news.crunchbase.com/sections/ai/"
        }
      ]
    },
    {
      "name": "Ramp",
      "name_en": "Ramp",
      "region": "美国",
      "industry": "AI金融/保险",
      "stage": "D轮及以后",
      "amount_usd_m": 750,
      "amount_display": "7.5 亿美元（Series F）",
      "valuation": "约 440 亿美元",
      "date": "2026-06-04",
      "location": "美国纽约",
      "business": "企业财务运营与支出管理平台，新推出 AI 驱动的「AI 支出管理」产品，帮助 CFO 管控企业在 AI 等新增项目上的开支。",
      "team": "成立于 2019 年的金融科技团队（避免未经核实的人名，从略）",
      "investors": "ICONIQ、GIC、安大略教师退休基金领投，高盛 Alternatives、D.E. Shaw、摩根士丹利投资管理、Insight Partners 等参投",
      "advantage": "估值较 7 个月前的 320 亿美元上涨约 38%、较一年前 160 亿美元上涨约 175%；年化营收超 10 亿美元、年化交易额约 2000 亿美元，借 AI 支出管理切入企业 AI 预算失控痛点。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/06/04/ramp-raises-750m-at-44b-valuation-as-investors-hunger-for-fintechs-with-an-ai-story/"
        },
        {
          "label": "Crunchbase News（2026-06-05 十大融资）",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/"
        }
      ]
    },
    {
      "name": "智谱",
      "name_en": "Zhipu AI",
      "region": "中国",
      "industry": "基础大模型",
      "stage": "战略投资",
      "amount_usd_m": 550,
      "amount_display": "港股 IPO 募资超 43 亿港元；拟科创板募资不超 150 亿元",
      "valuation": "港股市值一度超 3200 亿港元",
      "date": "2026-06-01",
      "location": "中国北京",
      "business": "以 AGI 基座模型为核心的大模型公司，提供 GLM 系列模型与企业服务。",
      "team": "清华系大模型团队（避免未经核实的人名，从略）",
      "investors": "公开市场投资人（港股已上市，拟回 A 登陆科创板）",
      "advantage": "全球首家以 AGI 基座模型为核心业务的上市公司，6 月发布科创板上市公告拟募资不超 150 亿元，A+H 双重资本化领先同业。",
      "sources": [
        {
          "label": "财联社 大模型第一股报道",
          "url": "https://www.cls.cn/detail/2227664"
        },
        {
          "label": "知乎 极新月报",
          "url": "https://zhuanlan.zhihu.com/p/2001758790966595845"
        }
      ]
    },
    {
      "name": "天机智能",
      "name_en": "Tianji Intelligent (T-Motion)",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "B轮",
      "amount_usd_m": 140,
      "amount_display": "10 亿元人民币（B 轮及 B+ 轮，约 1.4 亿美元）",
      "valuation": "投后近百亿元人民币",
      "date": "2026-05-25",
      "location": "中国广东",
      "business": "聚焦运动控制、MEMS 传感器、一体化关节模组等底层技术，为具身智能提供力控人形双臂等核心「肢体」部件，服务全球整机厂商与具身智能公司。",
      "team": "广东天机智能系统团队（避免未经核实的人名，从略）",
      "investors": "高瓴创投、美团战投联合领投；腾讯、高榕创投、光合创投、纪源资本等跟投，高鹄资本担任独家财务顾问",
      "advantage": "全球首家实现力控人形双臂量产交付且出货量最大的厂商：2025 年 4 个月交付超 2000 台，2026 年一季度在手订单突破 1 万台，覆盖全球 45 家头部整机厂商。本轮跻身独角兽，将加速北美等海外本地化布局。",
      "sources": [
        {
          "label": "投资界（pedaily）报道",
          "url": "https://news.pedaily.cn/202605/564328.shtml"
        },
        {
          "label": "创业邦报道",
          "url": "https://www.cyzone.cn/article/834464.html"
        },
        {
          "label": "21经济网报道",
          "url": "https://www.21jingji.com/article/20260525/herald/c2fa6f2c59c7410cfe58f5cc2504c5e5.html"
        }
      ]
    },
    {
      "name": "地瓜机器人",
      "name_en": "D-Robotics",
      "region": "中国",
      "industry": "AI开发工具/基础设施",
      "stage": "B轮",
      "amount_usd_m": 140,
      "amount_display": "约 10 亿元人民币级（近一季度）",
      "valuation": "未披露",
      "date": "2026-05-25",
      "location": "中国上海",
      "business": "机器人计算平台与边缘 AI 芯片公司，为机器人/具身智能提供算力底座与开发工具链。",
      "team": "边缘 AI 芯片团队（避免未经核实的人名，从略）",
      "investors": "多家产业与机构投资人（以披露为准）",
      "advantage": "为机器人提供「大脑」算力与软件栈，卡位具身智能基础设施。金额为近一季度区间估计，具体以官方披露为准。",
      "sources": [
        {
          "label": "投资界 具身智能融资盘点",
          "url": "https://news.pedaily.cn/202606/565245.shtml"
        },
        {
          "label": "证券时报 具身智能融资报道",
          "url": "https://www.stcn.com/article/detail/3753646.html"
        }
      ]
    },
    {
      "name": "千寻智能",
      "name_en": "Spirit AI",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "A轮",
      "amount_usd_m": 70,
      "amount_display": "约 5 亿元人民币级（近一季度）",
      "valuation": "未披露",
      "date": "2026-05-20",
      "location": "中国杭州",
      "business": "具身智能公司，研发通用人形机器人与具身操作模型。",
      "team": "具身智能创业团队（避免未经核实的人名，从略）",
      "investors": "多家机构（以披露为准）",
      "advantage": "上半年中国具身智能融资热潮中的活跃头部之一，聚焦操作智能与本体一体化。金额为近一季度区间估计，具体以官方披露为准。",
      "sources": [
        {
          "label": "投资界 具身智能融资盘点",
          "url": "https://news.pedaily.cn/202606/565245.shtml"
        },
        {
          "label": "证券时报 具身智能融资报道",
          "url": "https://www.stcn.com/article/detail/3753646.html"
        }
      ]
    },
    {
      "name": "Anthropic",
      "name_en": "Anthropic",
      "region": "美国",
      "industry": "基础大模型",
      "stage": "战略投资",
      "amount_usd_m": 65000,
      "amount_display": "约 650 亿美元（旗舰轮，早于本季度）",
      "valuation": "约 9000 亿美元（报道口径）",
      "date": "2026-05-15",
      "location": "美国旧金山",
      "business": "前沿大模型公司，开发 Claude 系列模型与企业级 AI 平台。",
      "team": "创始人 Dario Amodei、Daniela Amodei 等",
      "investors": "多家主权基金与战略投资人（报道口径）",
      "advantage": "全球前沿大模型双雄之一，企业级与编程场景份额领先。金额/估值为报道口径，存在不一与未官方披露，列为旗舰参照。",
      "sources": [
        {
          "label": "Crunchbase News（Anthropic 主导周）",
          "url": "https://news.crunchbase.com/ai/biggest-funding-rounds-ai-anthropic-65b-dominates/"
        },
        {
          "label": "Crunchbase News AI 板块",
          "url": "https://news.crunchbase.com/sections/ai/"
        }
      ]
    },
    {
      "name": "心智机器人",
      "name_en": "Mind Robotics",
      "region": "美国",
      "industry": "机器人/具身智能",
      "stage": "B轮",
      "amount_usd_m": 400,
      "amount_display": "4 亿美元（新一轮，Kleiner Perkins 领投）",
      "valuation": "投后约 34 亿美元",
      "date": "2026-05-13",
      "location": "美国加州帕洛阿尔托",
      "business": "Rivian 分拆的工业机器人公司，开发面向制造业的 AI 模型与专用机器人，利用 Rivian 工厂车间作为真实训练环境，Rivian 为首个客户。",
      "team": "由 Rivian 创始人兼 CEO RJ Scaringe 于 2025 年 11 月分拆创立",
      "investors": "Kleiner Perkins 领投，Meritech Capital、Redpoint Ventures、SV Angel、A-Star Capital 等跟投",
      "advantage": "成立不到一年累计融资超 10 亿美元，估值两个月内升至 34 亿美元；以真实工厂产线为训练场，是「物理 AI」赛道最快跻身独角兽的公司之一。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/05/13/rivian-spinoff-mind-robotics-raises-another-400m/"
        },
        {
          "label": "The Robot Report 报道",
          "url": "https://www.therobotreport.com/mind-robotics-raises-400m-scale-ai-powered-robots-in-manufacturing/"
        },
        {
          "label": "Crunchbase News 周报",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-anduril-voltagrid-mind-robotics/"
        }
      ]
    },
    {
      "name": "Exaforce",
      "name_en": "Exaforce",
      "region": "美国",
      "industry": "智能体与企业应用",
      "stage": "B轮",
      "amount_usd_m": 125,
      "amount_display": "1.25 亿美元（B 轮）",
      "valuation": "7.25 亿美元",
      "date": "2026-05-12",
      "location": "美国加州圣何塞",
      "business": "AI 原生安全运营（SOC）平台，以实时安全知识图谱结合 AI 智能体「Exabots」自动完成威胁检测、分诊、调查与响应，并配套 MDR 服务。",
      "team": "Exaforce 团队（避免未经核实的人名，从略）",
      "investors": "HarbourVest、Peak XV、Mayfield、Khosla Ventures、Seligman Ventures 等",
      "advantage": "距 7500 万美元 A 轮仅一年再获大额融资，累计融资 2 亿美元；实时知识图谱使调查可在一分钟内完成，主打对抗 AI 驱动的新型攻击。",
      "sources": [
        {
          "label": "TechCrunch 报道",
          "url": "https://techcrunch.com/2026/05/12/exaforce-raises-125m-series-b-to-build-ai-for-catching-and-stopping-cyberattacks-as-they-happen/"
        },
        {
          "label": "BusinessWire 官方通稿",
          "url": "https://www.businesswire.com/news/home/20260512993333/en/Exaforce-Raises-%24125M-Series-B-to-Combat-AI-Powered-Attacks-with-Real-Time-Security-Reasoning"
        },
        {
          "label": "Crunchbase News 周报",
          "url": "https://news.crunchbase.com/venture/biggest-funding-rounds-anduril-voltagrid-mind-robotics/"
        }
      ]
    },
    {
      "name": "星尘智能",
      "name_en": "Astribot",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "A轮",
      "amount_usd_m": 60,
      "amount_display": "数亿元人民币（近一季度）",
      "valuation": "未披露",
      "date": "2026-05-10",
      "location": "中国深圳",
      "business": "具身智能公司，研发面向家庭与商用场景的高自由度协作机器人。",
      "team": "深圳具身智能团队（避免未经核实的人名，从略）",
      "investors": "多家机构（以披露为准）",
      "advantage": "高自由度本体与灵巧操作演示出圈，是具身赛道高关注度新锐。金额为近一季度区间估计，具体以官方披露为准。",
      "sources": [
        {
          "label": "投资界 具身智能融资盘点",
          "url": "https://news.pedaily.cn/202606/565245.shtml"
        },
        {
          "label": "腾讯新闻 融资日报",
          "url": "https://news.qq.com/rain/a/20260601A087VN00"
        }
      ]
    },
    {
      "name": "星海图",
      "name_en": "Galaxea AI",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 280,
      "amount_display": "约 20 亿元人民币（再融资）",
      "valuation": "约 200 亿元人民币",
      "date": "2026-04-25",
      "location": "中国北京",
      "business": "具身智能公司，研发具身基础模型与一体化机器人本体，推动数据-模型-本体闭环。",
      "team": "具身智能研究团队（避免未经核实的人名，从略）",
      "investors": "多家头部机构（以披露为准）",
      "advantage": "再融约 20 亿元将头部具身门槛抬升至约 200 亿元估值，数据与本体一体化布局领先。",
      "sources": [
        {
          "label": "量子位 报道",
          "url": "https://www.qbitai.com/2026/04/394626.html"
        },
        {
          "label": "证券时报 具身智能融资报道",
          "url": "https://www.stcn.com/article/detail/3753646.html"
        }
      ]
    },
    {
      "name": "普渡机器人",
      "name_en": "Pudu Robotics",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 150,
      "amount_display": "近 10 亿元人民币（约 1.5 亿美元）",
      "valuation": "突破百亿元人民币（约 15 亿美元）",
      "date": "2026-04-23",
      "location": "中国深圳",
      "business": "全球商用服务机器人厂商，清洁、配送机器人全球市场份额约 23% 居第一，海外营收占比连续多年超八成，正拓展工业配送与具身智能技术。",
      "team": "2016 年成立的商用服务机器人团队（避免未经核实的人名，从略）",
      "investors": "龙岗金控、亚投资本联合领投，北汽产投、蓝思科技、弘晖基金及珠三角、长三角多地政府引导基金等参投",
      "advantage": "累计融资超 20 亿元，晋升国内具身智能百亿估值独角兽，正筹备港股上市，是全球商用服务机器人出货量与市场份额双第一的公司。",
      "sources": [
        {
          "label": "新浪财经报道",
          "url": "https://finance.sina.com.cn/roll/2026-04-23/doc-inhvnhrk3817008.shtml"
        },
        {
          "label": "36氪报道",
          "url": "https://36kr.com/p/3786490420878344"
        }
      ]
    },
    {
      "name": "银河通用",
      "name_en": "Galbot",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "战略投资",
      "amount_usd_m": 350,
      "amount_display": "约 25 亿元人民币",
      "valuation": "约 210 亿元人民币",
      "date": "2026-04-20",
      "location": "中国北京",
      "business": "通用具身智能机器人公司，研发轮式人形机器人与具身大模型，落地零售、工业等场景。",
      "team": "北京具身智能团队（避免未经核实的人名，从略）",
      "investors": "国家人工智能产业基金（大基金三期）、中国石化、中信集团、中国银行等国家队与产业巨头",
      "advantage": "国家队与产业资本密集加持，自称当时估值最高的未上市机器人公司，约 210 亿元。",
      "sources": [
        {
          "label": "财新 报道",
          "url": "https://m.caixin.com/m/2026-03-02/102418619.html"
        },
        {
          "label": "证券时报 具身智能融资报道",
          "url": "https://www.stcn.com/article/detail/3753646.html"
        }
      ]
    },
    {
      "name": "它石智航",
      "name_en": "TARS",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "A轮",
      "amount_usd_m": 455,
      "amount_display": "4.55 亿美元",
      "valuation": "未披露",
      "date": "2026-04-15",
      "location": "中国",
      "business": "具身智能公司，研发具身「大脑」与机器人通用模型，强调大规模真机数据驱动。",
      "team": "创始团队强调具身智能需千万小时级数据（避免未经核实的人名，从略）",
      "investors": "美团战投、北京机器人产业发展投资基金、上海国投先导等 20 余家机构",
      "advantage": "被称为当时中国具身智能最大单笔融资，产业与国资资本阵容豪华，数据驱动路线清晰。",
      "sources": [
        {
          "label": "量子位 报道",
          "url": "https://www.qbitai.com/2026/04/402388.html"
        },
        {
          "label": "EET-China 报道",
          "url": "https://www.eet-china.com/mp/a488901.html"
        }
      ]
    },
    {
      "name": "极佳视界",
      "name_en": "GigaAI",
      "region": "中国",
      "industry": "基础大模型",
      "stage": "B轮",
      "amount_usd_m": 210,
      "amount_display": "15 亿元人民币（B1 轮，约 2.1 亿美元；一个月内累计融资 25 亿元）",
      "valuation": "超百亿元人民币",
      "date": "2026-04-14",
      "location": "中国北京（海淀）",
      "business": "世界模型 + 物理 AI 公司，自研 GigaWorld-1 世界模型（WorldArena 评测全球第一），并推出全栈自研双臂移动机器人 Maker H01，已启动规模化量产交付。",
      "team": "创始人黄冠为清华大学自动化系博士，曾任地平线视觉感知技术负责人、鉴智机器人合伙人",
      "investors": "多家机构参与（含产业方与财务投资人；3 月曾完成 10 亿元 Pre-B 轮）",
      "advantage": "被称为国内首个世界模型「百亿独角兽」：3 月至 4 月一个月内连续融资 25 亿元；世界模型与具身本体双轮驱动，2026 年冲刺千台机器人交付。",
      "sources": [
        {
          "label": "投资界（pedaily）报道",
          "url": "https://news.pedaily.cn/202604/562806.shtml"
        },
        {
          "label": "证券时报报道",
          "url": "https://stcn.com/article/detail/3754115.html"
        },
        {
          "label": "新浪科技报道",
          "url": "https://finance.sina.com.cn/tech/roll/2026-04-16/doc-inhuryef7850324.shtml"
        }
      ]
    }
  ]
};
