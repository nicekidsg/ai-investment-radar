// AI 融资雷达数据文件（定时任务自动重写）
// 每家企业含多个信息源（sources）便于交叉验证。请勿手动改动结构。
window.FUNDING_DATA = {
  "updated_at": "2026-07-03T18:30:00+08:00",
  "window": "2026 年 4 月 – 7 月初（近一季度；含个别更早旗舰轮次）",
  "companies": [
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
      "name": "月之暗面",
      "name_en": "Moonshot AI",
      "region": "中国",
      "industry": "基础大模型",
      "stage": "战略投资",
      "amount_usd_m": 2000,
      "amount_display": "约 20 亿美元（传闻洽谈中）",
      "valuation": "约 300 亿美元（目标，报道口径）",
      "date": "2026-06-08",
      "location": "中国北京",
      "business": "通用大模型公司，旗舰产品为 Kimi 智能助手，主打长文本与 Agent 能力。",
      "team": "创始人杨植麟",
      "investors": "新一轮投资方未官方披露",
      "advantage": "据报道为半年内第三轮融资，目标估值较半年前增长近 6 倍。金额与估值均为媒体报道、未官方披露，存在报道不一，谨慎采信。",
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
      "name": "智平方",
      "name_en": "AI² Robotics",
      "region": "中国",
      "industry": "机器人/具身智能",
      "stage": "B轮",
      "amount_usd_m": 140,
      "amount_display": "超 10 亿元人民币（B 轮系列）",
      "valuation": "突破 100 亿元人民币",
      "date": "2026-04-10",
      "location": "中国深圳",
      "business": "具身智能公司，研发通用智能机器人与具身大模型，面向工业与商用场景。",
      "team": "深圳具身智能团队（避免未经核实的人名，从略）",
      "investors": "百度战投、中车资本、沄柏资本、国泰海通及地方基金等",
      "advantage": "一年内累计完成约 12 轮融资刷新行业纪录，估值突破百亿元，产业资本与国资共同加持。",
      "sources": [
        {
          "label": "网易/量子位 报道",
          "url": "https://c.m.163.com/news/a/KMHUTO9R05199NPP.html"
        },
        {
          "label": "证券时报 具身智能融资报道",
          "url": "https://www.stcn.com/article/detail/3753646.html"
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
    }
  ]
};
