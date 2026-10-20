"use client";

import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  FileCheck2,
  LayoutDashboard,
  Mail,
  Menu,
  Moon,
  Radar,
  Search,
  Settings2,
  Sparkles,
  Target,
  Users,
  X,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

type Opportunity = {
  id: number;
  title: string;
  angle: string;
  score: number;
  evidence: number;
  trend: string;
  image: string;
  status: "approved" | "pending";
  platform: string;
};

const initialOpportunities: Opportunity[] = [
  {
    id: 1,
    title: "老房翻新预算最容易漏掉的五项",
    angle: "用真实增项清单拆解杭州老房预算盲区",
    score: 92,
    evidence: 6,
    trend: "+34%",
    image: "/images/renovation-plan.jpg",
    status: "pending",
    platform: "抖音 · 小红书",
  },
  {
    id: 2,
    title: "梅雨季开工前要先做哪三项检查",
    angle: "从杭州气候切入，建立本地施工专业感",
    score: 89,
    evidence: 5,
    trend: "+27%",
    image: "/images/interior-check.jpg",
    status: "approved",
    platform: "公众号 · 小红书",
  },
  {
    id: 3,
    title: "全屋定制报价为什么能差六万元",
    angle: "拆开板材、五金、设计与安装的成本结构",
    score: 86,
    evidence: 7,
    trend: "+22%",
    image: "/images/cabinet-detail.jpg",
    status: "pending",
    platform: "抖音 · 公众号",
  },
  {
    id: 4,
    title: "西湖区二手房翻新先改动线还是先定风格",
    angle: "用户型案例回答高意向业主的决策问题",
    score: 82,
    evidence: 4,
    trend: "+18%",
    image: "/images/floor-plan.jpg",
    status: "approved",
    platform: "小红书 · 公众号",
  },
  {
    id: 5,
    title: "装修合同里最该逐字确认的七句话",
    angle: "以风险清单建立可信度并承接咨询",
    score: 79,
    evidence: 5,
    trend: "+15%",
    image: "/images/contract-table.jpg",
    status: "pending",
    platform: "三平台适配",
  },
];

const channels = [
  { name: "抖音", coverage: 96, items: 184, state: "正常" },
  { name: "小红书", coverage: 91, items: 136, state: "正常" },
  { name: "微信", coverage: 88, items: 72, state: "正常" },
  { name: "趋势数据", coverage: 63, items: 24, state: "覆盖偏低" },
];

export function RadarDashboard() {
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [mobileNav, setMobileNav] = useState(false);
  const [view, setView] = useState<"score" | "heat">("score");
  const [approvingId, setApprovingId] = useState<number | null>(null);
  const [deliveryState, setDeliveryState] = useState<"locked" | "ready" | "sending" | "sent" | "error">("locked");
  const [darkMode, setDarkMode] = useState(false);
  const pending = opportunities.filter((item) => item.status === "pending").length;

  useEffect(() => {
    setDarkMode(window.localStorage.getItem("hotsearch-theme") === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("hotsearch-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  async function approve(id: number) {
    setApprovingId(id);
    await new Promise((resolve) => window.setTimeout(resolve, 180));
    setOpportunities((items) => {
      const updated = items.map((item) => (item.id === id ? { ...item, status: "approved" as const } : item));
      if (updated.every((item) => item.status === "approved")) setDeliveryState("ready");
      return updated;
    });
    setApprovingId(null);
  }

  async function sendReport() {
    setDeliveryState("sending");
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      setDeliveryState("sent");
    } catch {
      setDeliveryState("error");
    }
  }

  const sortedOpportunities = [...opportunities].sort((a, b) =>
    view === "score" ? b.score - a.score : Number.parseInt(b.trend) - Number.parseInt(a.trend),
  );

  return (
    <main className="app-shell">
      <header className="topbar" aria-label="全局导航">
        <a className="brand" href="#overview" aria-label="砺选首页">
          <span className="brand-mark"><Radar size={19} strokeWidth={2.2} /></span>
          <span>砺选</span>
          <small>TOPIC RADAR</small>
        </a>
        <div className="topbar-center">
          <button className="merchant-switch" type="button" disabled title="多商家切换将在试点后开放">
            <span className="merchant-avatar">森</span>
            <span><strong>森屿空间设计</strong><small>杭州 · 旧房翻新</small></span>
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="topbar-actions">
          <button className="icon-button" type="button" aria-label="搜索" disabled title="搜索将在数据接入后开放"><Search size={18} /></button>
          <button className="icon-button" type="button" aria-label="设置" disabled title="设置将在试点后开放"><Settings2 size={18} /></button>
          <button className="icon-button theme-toggle" type="button" aria-label={darkMode ? "切换浅色模式" : "切换深色模式"} title={darkMode ? "切换浅色模式" : "切换深色模式"} onClick={() => setDarkMode((value) => !value)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button" type="button" aria-label="打开导航" onClick={() => setMobileNav(true)}><Menu size={20} /></button>
          <span className="reviewer">LY</span>
        </div>
      </header>

      <aside className={`sidebar ${mobileNav ? "sidebar-open" : ""}`} aria-label="工作台导航" role="region">
        <button className="close-nav" type="button" aria-label="关闭导航" onClick={() => setMobileNav(false)}><X size={20} /></button>
        <nav aria-label="主要功能">
          <a className="nav-item active" href="#overview"><LayoutDashboard size={17} />工作台</a>
          <a className="nav-item" href="#signals"><Activity size={17} />趋势信号</a>
          <a className="nav-item" href="#opportunities"><Sparkles size={17} />核心机会<span>5</span></a>
          <a className="nav-item" href="#review"><FileCheck2 size={17} />审核队列<span>{pending}</span></a>
          <a className="nav-item" href="#profile"><Users size={17} />商家档案</a>
        </nav>
        <div className="sidebar-note">
          <p>下次交付</p>
          <strong>10 月 26 日 09:00</strong>
          <span><Clock3 size={14} /> 距离审核截止 5 天</span>
        </div>
        <div className="sidebar-footer"><span className="status-dot" /> Monid 数据源已连接</div>
      </aside>

      <div className="workspace">
        <section className="overview" id="overview" aria-label="本周概览" role="region">
          <div className="overview-heading">
            <div>
              <h1>本周选题勘验</h1>
              <p>10 月 20 日至 10 月 26 日 · 演示数据</p>
            </div>
            <div className="heading-actions">
              <button className="secondary-button" type="button" disabled title="全部审核后可预览"><Mail size={16} />预览周报</button>
              <a className="primary-button button-link" href="#review"><FileCheck2 size={16} />进入审核</a>
            </div>
          </div>
          <div className="brief-strip">
            <div className="brief-lead">
              <span className="pulse-mark"><Target size={18} /></span>
              <div><strong>5 个核心机会已形成</strong><p>其中 3 项等待人工审核，所有机会均满足双证据门槛。</p></div>
            </div>
            <dl className="brief-metrics">
              <div><dt>公开证据</dt><dd>27</dd></div>
              <div><dt>新增内容</dt><dd>416</dd></div>
              <div><dt>覆盖来源</dt><dd>4/4</dd></div>
              <div><dt>预计节省</dt><dd>3.4h</dd></div>
            </dl>
          </div>
        </section>

        <section className="collection-band" aria-label="采集状态" role="region">
          <div className="section-heading compact">
            <div><h2>采集状态</h2><p>最后更新 20:42</p></div>
            <span className="live-label"><span /> 正在监听</span>
          </div>
          <div className="channel-table">
            {channels.map((channel) => (
              <div className="channel-row" key={channel.name}>
                <strong>{channel.name}</strong>
                <div className="coverage-track" aria-label={`${channel.name}覆盖率 ${channel.coverage}%`}><span style={{ width: `${channel.coverage}%` }} /></div>
                <span>{channel.items} 条</span>
                <span className={channel.state === "正常" ? "source-ok" : "source-warn"}>{channel.state}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="trend-section" id="signals" aria-label="趋势脉搏" role="region">
          <div className="section-heading">
            <div><h2>趋势脉搏</h2><p>五个关键词近 7 天公开信号变化</p></div>
            <span className="sample-label">演示样本</span>
          </div>
          <div className="trend-layout">
            <div className="trend-chart" aria-label="关键词趋势条形图">
              {[
                ["老房翻新预算", 92, "+34%"],
                ["梅雨季装修", 78, "+27%"],
                ["全屋定制报价", 66, "+22%"],
                ["二手房动线", 51, "+18%"],
                ["装修合同", 43, "+15%"],
              ].map(([label, width, value]) => (
                <div className="trend-bar" key={label}>
                  <span>{label}</span><div><i style={{ width: `${width}%` }} /></div><strong>{value}</strong>
                </div>
              ))}
            </div>
            <blockquote className="editor-note">
              <span>编辑判断</span>
              <p>预算与合同话题正在同时上升。建议本周先讲清费用，再用施工专业度承接信任。</p>
              <cite>系统聚类结论，待人工确认</cite>
            </blockquote>
          </div>
        </section>

        <section className="opportunity-section" id="opportunities" aria-label="核心机会" role="region">
          <div className="section-heading opportunity-heading">
            <div><h2>核心机会</h2><p>按证据、商业意图与执行难度综合排序</p></div>
            <div className="segmented" aria-label="排序方式">
              <button className={view === "score" ? "selected" : ""} type="button" onClick={() => setView("score")}>综合分</button>
              <button className={view === "heat" ? "selected" : ""} type="button" onClick={() => setView("heat")}>升温值</button>
            </div>
          </div>
          <ol className="opportunity-list" aria-label="核心机会列表">
            {sortedOpportunities.map((item, index) => (
              <li className="opportunity-row" key={item.id}>
                <span className="rank">{String(index + 1).padStart(2, "0")}</span>
                <div className="opportunity-image">
                  <Image src={item.image} alt="家装公开证据示意图" fill sizes="(max-width: 720px) 88px, 132px" />
                  <span>{item.evidence} 证据</span>
                </div>
                <div className="opportunity-copy">
                  <div className="opportunity-meta"><span>{item.platform}</span><span className="trend-up">↗ {item.trend}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.angle}</p>
                  <div className="evidence-line"><span /> 抖音 2 · 小红书 3 · 微信 1</div>
                </div>
                <div className="score-block"><span>综合评分</span><strong>{item.score}</strong><small>/100</small></div>
                <div className="row-actions">
                  {item.status === "approved" ? (
                    <span className="approved-stamp"><Check size={15} />已批准</span>
                  ) : (
                    <button className="approve-button" type="button" disabled={approvingId !== null} aria-label={approvingId === item.id ? `正在批准 ${item.title}` : `批准 ${item.title}`} onClick={() => approve(item.id)}>{approvingId === item.id ? <Activity className="spin-icon" size={16} /> : <Check size={16} />}{approvingId === item.id ? "保存中" : "批准"}</button>
                  )}
                  <button className="icon-button row-more" type="button" aria-label={`查看 ${item.title}`} disabled title="详情页将在下一版开放"><ArrowUpRight size={17} /></button>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="lower-grid">
          <section className="review-section" id="review" aria-label="审核队列" role="region">
            <div className="section-heading compact"><div><h2>审核队列</h2><p>周一 08:30 前完成</p></div><span className="pending-count">{pending} 项待审核</span></div>
            <div className="review-timeline">
              <div className="timeline-row done"><span><Check size={14} /></span><div><strong>数据归集</strong><small>已完成 · 周日 17:42</small></div></div>
              <div className="timeline-row active"><span><FileCheck2 size={14} /></span><div><strong>人工审核</strong><small>进行中 · {pending} 项待处理</small></div></div>
              <div className="timeline-row"><span><Mail size={14} /></span><div><strong>邮件交付</strong><small>计划 · 周一 09:00</small></div></div>
            </div>
            <a className="wide-button button-link" href="#opportunities">继续审核 <ArrowUpRight size={16} /></a>
          </section>

          <section className="coverage-section" aria-label="证据覆盖" role="region">
            <div className="section-heading compact"><div><h2>证据覆盖</h2><p>本周来源完整性</p></div><strong className="coverage-number">84%</strong></div>
            <div className="source-matrix">
              <div><span>抖音</span><i className="full" /><i className="full" /><i className="full" /><i className="full" /><i className="full" /></div>
              <div><span>小红书</span><i className="full" /><i className="full" /><i className="full" /><i className="full" /><i /></div>
              <div><span>微信</span><i className="full" /><i className="full" /><i className="full" /><i className="full" /><i /></div>
              <div><span>趋势</span><i className="full" /><i className="full" /><i className="full" /><i /><i /></div>
            </div>
            <div className="coverage-alert"><CircleAlert size={17} /><p><strong>趋势数据覆盖偏低</strong><span>不影响本周交付，报告将明确标注。</span></p></div>
          </section>
        </div>

        <section className="profile-section" id="profile" aria-label="商家档案" role="region">
          <div className="profile-identity">
            <span className="merchant-avatar large">森</span>
            <div><h2>森屿空间设计</h2><p>杭州 · 旧房翻新 · 试点第 2 周</p></div>
          </div>
          <dl className="profile-facts">
            <div><dt>核心关键词</dt><dd>老房翻新、预算、全屋定制、动线、合同</dd></div>
            <div><dt>重点区域</dt><dd>西湖区、拱墅区、滨江区</dd></div>
            <div><dt>竞品档案</dt><dd>6 个主页 · 周四更新</dd></div>
          </dl>
          <button className="secondary-button" type="button" disabled title="档案编辑将在接入数据存储后开放">编辑档案</button>
        </section>

        <section className="next-action-section" aria-label="本周动作" role="region">
          <div>
            <h2>把判断变成下周内容</h2>
            <p>完成 3 项审核后生成只读周报。系统不会自动发送，最终交付仍由你确认。</p>
          </div>
          <div className="next-action-status">
            <span><Check size={15} /> 双证据门槛已满足</span>
            <span><Clock3 size={15} /> 周一 08:30 截止</span>
          </div>
          <div className="delivery-control">
            <button className="primary-button" type="button" aria-label="发送周报" disabled={pending > 0 || deliveryState === "sending" || deliveryState === "sent"} onClick={sendReport}>
              {deliveryState === "sending" ? <Activity className="spin-icon" size={16} /> : deliveryState === "sent" ? <Check size={16} /> : <Mail size={16} />}
              {deliveryState === "sending" ? "发送中" : deliveryState === "sent" ? "已发送" : pending > 0 ? `还需审核 ${pending} 项` : "发送周报"}
            </button>
            {deliveryState === "error" && <p className="delivery-error" role="alert">发送失败，请检查邮件配置后重试。</p>}
          </div>
        </section>

        <footer className="app-footer">
          <span>砺选 Topic Radar · 演示工作台</span>
          <span>公开证据优先 · 人工审核后交付</span>
        </footer>
      </div>
    </main>
  );
}
