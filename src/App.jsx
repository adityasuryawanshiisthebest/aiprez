const {
  ArrowRight,
  Bell,
  Bookmark,
  BookOpen,
  Box,
  ChartNoAxesCombined,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  FileText,
  CheckCircle,
  Copy,
  CreditCard,
  Eye,
  History,
  Home,
  Lightbulb,
  Maximize,
  MessageSquareText,
  Mic,
  Monitor,
  MoreVertical,
  NotebookText,
  Paperclip,
  Pause,
  Pencil,
  Plus,
  Presentation,
  SendHorizontal,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Square,
  UserCog,
  TrendingUp,
  Trash2,
  Upload,
  UserRound,
  WandSparkles,
} = lucide;

function Icon({ icon, size = 20, strokeWidth = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon.map(([tag, attrs], index) => React.createElement(tag, { ...attrs, key: index }))}
    </svg>
  );
}

const PRESENTATION_SLIDES = [
  {
    title: "The American Revolution",
    subtitle: "Causes, Events, and the Road to Independence",
    thumb: "The American Revolution",
  },
  {
    title: "Taxation Without Representation",
    subtitle: "How colonial taxes increased tensions with Britain",
    thumb: "Taxation Without Representation",
  },
  {
    title: "Causes of Conflict",
    subtitle: "Political, economic, and social forces behind rebellion",
    thumb: "Causes of Conflict",
  },
  {
    title: "Revolutionary Timeline",
    subtitle: "Key events that moved the colonies toward independence",
    thumb: "Revolutionary Timeline",
  },
  {
    title: "Colonist Beliefs",
    subtitle: "Liberty, self-government, and rights in the colonies",
    thumb: "Colonist Beliefs",
  },
  {
    title: "Changing Tensions",
    subtitle: "The conflicts that pushed both sides toward war",
    thumb: "Changing Tensions",
  },
  {
    title: "Boston Massacre",
    subtitle: "A turning point in colonial anger toward British troops",
    thumb: "Boston Massacre",
  },
  {
    title: "Boston Tea Party",
    subtitle: "A protest that challenged British control",
    thumb: "Boston Tea Party",
  },
  {
    title: "Intolerable Acts",
    subtitle: "Punishments that united many colonists against Britain",
    thumb: "Intolerable Acts",
  },
  {
    title: "The Road to Revolution",
    subtitle: "How grievances became organized resistance",
    thumb: "The Road to Revolution",
  },
  {
    title: "Declaring Independence",
    subtitle: "The ideas and risks behind breaking from Britain",
    thumb: "Declaring Independence",
  },
  {
    title: "Conclusion",
    subtitle: "The causes that sparked a new nation",
    thumb: "Conclusion",
  },
];

const BACKEND_MODEL_ID = "gpt-5.4-mini";
const BACKEND_MODEL_LABEL = "GPT-5.4 Mini";

function getAiprezApiUrl() {
  const configuredBase = localStorage.getItem("aiprez_api_base") || window.AIPREZ_API_BASE || "";
  if (configuredBase) {
    return `${configuredBase.replace(/\/$/, "")}/api/ai`;
  }
  return "/api/ai";
}

async function callAiprezAI(tool, input, context = {}) {
  const response = await fetch(getAiprezApiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tool, input, context }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "AIPREZ AI backend is not available yet.");
  }
  return payload;
}

function getNextSlide(index) {
  return (index + 1) % PRESENTATION_SLIDES.length;
}

function getPreviousSlide(index) {
  return (index - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length;
}

function LogoBlock() {
  return (
    <div className="logo-block">
      <img className="logo-mark" src="./src/assets/aiprez-logo-mark.png" alt="" />
      <div>
        <h1>AIPREZ</h1>
        <p>Your AI Academic Presentation System</p>
      </div>
    </div>
  );
}

function SidebarConversationItem({ title, time, selected, tone = "blue" }) {
  return (
    <button className={`conversation-item ${selected ? "selected" : ""}`} type="button">
      <span className={`conversation-icon ${tone}`}>
        <Icon icon={MessageSquareText} size={18} strokeWidth={1.7} />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{time}</small>
      </span>
    </button>
  );
}

function SidebarToolItem({ icon, label, tone, active, onClick }) {
  return (
    <button className={`tool-item ${active ? "active" : ""}`} type="button" onClick={onClick}>
      <span className={`tool-item-icon ${tone}`}>
        <Icon icon={icon} size={18} strokeWidth={1.7} />
      </span>
      <span>{label}</span>
    </button>
  );
}

function AccountCard() {
  return (
    <button className="account-card glass" type="button">
      <span className="avatar">
        <UserRoundIcon />
      </span>
      <span className="account-copy">
        <strong>Ava Johnson</strong>
        <small>Student</small>
      </span>
      <Icon icon={ChevronDown} size={18} strokeWidth={1.6} />
    </button>
  );
}

function UserRoundIcon() {
  return <Icon icon={UserRound} size={28} strokeWidth={1.45} />;
}

function EmptyPresentationsMessage({ className = "" }) {
  return <div className={`empty-presentations-message ${className}`}>There are no presentations yet.</div>;
}

function Sidebar({ onNewPresentation, activeTool, onOpenHumanizer, onOpenLiveNotes, onOpenAnalyzer }) {
  const conversations = [];

  const tools = [
    { icon: ChartNoAxesCombined, label: "Presentation Analyzer", tone: "purple" },
    { icon: Sparkles, label: "Humanizer", tone: "purple" },
    { icon: Mic, label: "Live Notes", tone: "cyan" },
    { icon: History, label: "History", tone: "gold" },
  ];

  return (
    <aside className="sidebar">
      <LogoBlock />
      <button className="new-presentation" type="button" onClick={onNewPresentation}>
        <Icon icon={Plus} size={21} strokeWidth={1.8} />
        <span>New Presentation</span>
      </button>

      <section className="sidebar-section">
        <h2>Conversations</h2>
        <div className="conversation-list">
          {conversations.length > 0 ? (
            conversations.map((conversation) => (
              <SidebarConversationItem key={conversation.title} {...conversation} />
            ))
          ) : (
            <div className="sidebar-empty-state">
              <EmptyPresentationsMessage />
            </div>
          )}
        </div>
        {conversations.length > 0 && (
          <a className="view-all" href="#">
            View all conversations <Icon icon={ArrowRight} size={16} strokeWidth={1.8} />
          </a>
        )}
      </section>

      <section className="sidebar-section tools-section">
        <h2>Tools</h2>
        <div className="tool-list">
          {tools.map((tool) => (
            <SidebarToolItem
              key={tool.label}
              {...tool}
              active={activeTool === tool.label}
              onClick={
                tool.label === "Humanizer"
                  ? onOpenHumanizer
                  : tool.label === "Live Notes"
                    ? onOpenLiveNotes
                    : tool.label === "Presentation Analyzer"
                      ? onOpenAnalyzer
                      : undefined
              }
            />
          ))}
        </div>
      </section>

      <AccountCard />
    </aside>
  );
}

function TopBar({ onBack }) {
  return (
    <header className="top-bar">
      <div className="top-title">
        <button className="back-dashboard-box" type="button" onClick={onBack}>
          <Icon icon={Home} size={18} strokeWidth={1.7} />
          <span>Back to Dashboard</span>
        </button>
        <h2>Create Presentation</h2>
        <button className="model-pill" type="button">
          <Icon icon={WandSparkles} size={17} strokeWidth={1.75} />
          <span>AI Model:</span>
          <strong>{BACKEND_MODEL_LABEL}</strong>
          <Icon icon={ChevronDown} size={16} strokeWidth={1.6} />
        </button>
      </div>
      <button className="settings-button" type="button">
        <Icon icon={Settings} size={19} strokeWidth={1.7} />
        Presentation Settings
      </button>
    </header>
  );
}

function ChatMessageUser() {
  return (
    <article className="message-row user-row">
      <div className="user-bubble glass">
        <p>
          Create a 10-slide presentation about the causes of the American Revolution. Include key events, colonist
          grievances, and British policies.
        </p>
        <div className="message-meta user-meta">
          <span>You</span>
          <time>2:35 PM</time>
        </div>
      </div>
      <span className="message-avatar user-avatar">
        <UserRoundIcon />
      </span>
    </article>
  );
}

function AIAvatar() {
  return (
    <span className="ai-avatar">
      <img src="./src/assets/aiprez-logo-mark.png" alt="" />
    </span>
  );
}

function ProgressBar() {
  return (
    <div className="progress-wrap" aria-label={`Generating your slides with ${BACKEND_MODEL_LABEL}, 72 percent complete`}>
      <div className="progress-track">
        <span className="progress-fill"></span>
      </div>
      <strong>72%</strong>
    </div>
  );
}

function OutlineCard() {
  const outline = [
    "Title Slide - The Causes of the American Revolution",
    "Overview - Setting the Stage",
    "Colonist Grievances - Taxation Without Representation",
    "British Policies - Economic Control",
    "British Policies - Restrictive Laws",
    "Key Events - Boston Massacre",
    "Key Events - Boston Tea Party",
    "Key Events - Intolerable Acts",
    "The Road to Revolution",
    "Conclusion - Causes That Sparked a Nation",
  ];

  return (
    <section className="outline-card glass">
      <h4>
        <Icon icon={ClipboardList} size={17} strokeWidth={1.7} />
        Presentation Outline (10 slides)
      </h4>
      <ol>
        {outline.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <div className="generation-status">
        <p>Generating your slides with {BACKEND_MODEL_LABEL}...</p>
        <ProgressBar />
      </div>
    </section>
  );
}

function ChatMessageAI({ complete = false }) {
  return (
    <article className="message-row ai-row">
      <AIAvatar />
      <div className={`ai-message glass ${complete ? "complete" : ""}`}>
        <div className="ai-message-header">
          <div>
            <strong>AIPREZ AI</strong>
            <time>{complete ? "2:36 PM" : "2:35 PM"}</time>
          </div>
          {!complete && <span className="opus-badge">{BACKEND_MODEL_LABEL}</span>}
        </div>
        {complete ? (
          <div className="completion-line">
            <p>Your 10-slide presentation is ready! You can preview it, edit slides, or ask me to make changes.</p>
            <button className="preview-button" type="button">
              Preview Slides <Icon icon={ArrowRight} size={18} strokeWidth={1.8} />
            </button>
          </div>
        ) : (
          <>
            <p>
              I&apos;ll create a 10-slide presentation on the causes of the American Revolution.
              <br />
              I&apos;ll include key events, colonist grievances, and British policies.
            </p>
            <OutlineCard />
          </>
        )}
      </div>
    </article>
  );
}

function ComposerAction({ icon, label, tone }) {
  return (
    <button className={`composer-action ${tone || ""}`} type="button" aria-label={label}>
      <Icon icon={icon} size={19} strokeWidth={1.75} />
      {label !== "Attach" && <span>{label}</span>}
    </button>
  );
}

function ChatComposer() {
  return (
    <section className="composer glass">
      <p className="composer-placeholder">Ask me to create, edit, or improve your presentation...</p>
      <div className="composer-controls">
        <div className="composer-actions">
          <ComposerAction icon={Paperclip} label="Attach" />
          <ComposerAction icon={Upload} label="Upload File" tone="blue" />
          <ComposerAction icon={BookOpen} label="Add Rubric" tone="gold" />
          <ComposerAction icon={FileText} label="Add Sources" tone="cyan" />
          <ComposerAction icon={Mic} label="Voice Input" tone="cyan" />
        </div>
        <div className="send-controls">
          <button className="composer-model" type="button">
            {BACKEND_MODEL_LABEL} <Icon icon={ChevronDown} size={16} strokeWidth={1.6} />
          </button>
          <button className="send-button" type="button" aria-label="Send message">
            <Icon icon={SendHorizontal} size={23} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}

function DashboardPopover({ title, items, align = "center" }) {
  return (
    <div className={`dashboard-popover glass ${align}`} role="menu" aria-label={title}>
      <strong>{title}</strong>
      {items.map((item) => (
        <button className={item.tone || ""} type="button" role="menuitem" key={item.label} onClick={item.onClick}>
          <Icon icon={item.icon} size={15} strokeWidth={1.8} />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

function UtilityPopoverSlot({ id, activePanel, children, popover }) {
  return (
    <span className="utility-popover-slot">
      {children}
      {activePanel === id && popover}
    </span>
  );
}

function BottomUtilityBar({
  showProfile = false,
  interactive = false,
  activePanel: controlledActivePanel,
  onTogglePanel,
  onOpenAccountSettings,
  onOpenPrivacy,
  onOpenSignOut,
}) {
  const [localActivePanel, setLocalActivePanel] = React.useState(null);
  const activePanel = controlledActivePanel === undefined ? localActivePanel : controlledActivePanel;
  const togglePanel = (panel) => {
    if (onTogglePanel) {
      onTogglePanel(activePanel === panel ? null : panel);
      return;
    }
    setLocalActivePanel(activePanel === panel ? null : panel);
  };
  const closePanel = () => {
    if (onTogglePanel) {
      onTogglePanel(null);
    } else {
      setLocalActivePanel(null);
    }
  };

  const panelItems = {
    profile: [
      { icon: UserCog, label: "Account Settings" },
      { icon: Settings, label: "Privacy & Security" },
      { icon: ArrowRight, label: "Sign Out" },
    ],
    plan: [
      { icon: Box, label: "Plan Details" },
      { icon: CreditCard, label: "Billing" },
      { icon: Sparkles, label: "Premium Benefits" },
    ],
    help: [
      { icon: CircleHelp, label: "Help Center" },
      { icon: BookOpen, label: "Tutorials" },
      { icon: MessageSquareText, label: "Contact Support" },
    ],
    notifications: [
      { icon: Bell, label: "No new notifications" },
      { icon: CheckCircle, label: "Mark all as read" },
    ],
    settings: [
      { icon: Settings, label: "Preferences" },
      { icon: UserCog, label: "Account" },
      { icon: SlidersHorizontal, label: "Workspace Options" },
    ],
  };
  const accountItems = [
    { icon: UserCog, label: "Account Settings", onClick: () => { closePanel(); onOpenAccountSettings?.(); } },
    { icon: Settings, label: "Privacy & Security", onClick: () => { closePanel(); onOpenPrivacy?.(); } },
    { icon: ArrowRight, label: "Sign Out", onClick: () => { closePanel(); onOpenSignOut?.(); } },
  ];

  return (
    <React.Fragment>
      <nav className="bottom-utility glass" aria-label="Utility navigation">
        {showProfile && (
          <UtilityPopoverSlot
            id="profile"
            activePanel={activePanel}
            popover={<DashboardPopover title="Account Options" items={accountItems} align="arrow" />}
          >
            <div className="bottom-profile" aria-label="Ava Johnson account">
              <span className="avatar">
                <UserRoundIcon />
              </span>
              <span>
                <strong>Ava Johnson</strong>
                <small>Student</small>
              </span>
              <button className="profile-arrow-button" type="button" aria-label="Open account options" onClick={() => interactive && togglePanel("profile")}>
                <Icon icon={ChevronDown} size={18} strokeWidth={1.7} />
              </button>
            </div>
          </UtilityPopoverSlot>
        )}
      <UtilityPopoverSlot
        id="plan"
        activePanel={activePanel}
        popover={<DashboardPopover title="Premium Plan" items={panelItems.plan} />}
      >
        <button className="plan-status" type="button" onClick={() => interactive && togglePanel("plan")}>
          <span className="plan-icon">
            <Icon icon={Box} size={27} strokeWidth={1.5} />
          </span>
          <span>
            <strong>Premium Plan</strong>
            <small>Valid until May 30, 2030</small>
          </span>
        </button>
      </UtilityPopoverSlot>
      <div className="utility-actions">
        <UtilityPopoverSlot
          id="help"
          activePanel={activePanel}
          popover={<DashboardPopover title="Help" items={panelItems.help} />}
        >
          <button type="button" onClick={() => interactive && togglePanel("help")}>
            <Icon icon={CircleHelp} size={23} strokeWidth={1.55} />
            Help
          </button>
        </UtilityPopoverSlot>
        <UtilityPopoverSlot
          id="notifications"
          activePanel={activePanel}
          popover={<DashboardPopover title="Notifications" items={panelItems.notifications} />}
        >
          <button type="button" onClick={() => interactive && togglePanel("notifications")}>
            <Icon icon={Bell} size={23} strokeWidth={1.55} />
            Notifications
          </button>
        </UtilityPopoverSlot>
        <UtilityPopoverSlot
          id="settings"
          activePanel={activePanel}
          popover={<DashboardPopover title="Settings" items={panelItems.settings} align="right" />}
        >
          <button type="button" onClick={() => interactive && togglePanel("settings")}>
            <Icon icon={Settings} size={24} strokeWidth={1.55} />
            Settings
          </button>
        </UtilityPopoverSlot>
      </div>
      </nav>
    </React.Fragment>
  );
}

function ChatWorkspace({ onBack }) {
  return (
    <main className="workspace">
      <TopBar onBack={onBack} />
      <section className="chat-thread" aria-label={`Create Presentation chat with ${BACKEND_MODEL_LABEL}`}>
        <ChatMessageUser />
        <ChatMessageAI />
        <ChatMessageAI complete />
      </section>
      <ChatComposer />
      <p className="disclaimer">AIPREZ AI can make mistakes. Always review important information.</p>
      <BottomUtilityBar />
    </main>
  );
}

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <LogoBlock />
    </header>
  );
}

function NeonWave() {
  return (
    <svg className="dashboard-neon-wave" viewBox="0 0 720 140" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveBluePurple" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#005bff" stopOpacity="0" />
          <stop offset="20%" stopColor="#008cff" stopOpacity="0.9" />
          <stop offset="52%" stopColor="#00d8ff" stopOpacity="1" />
          <stop offset="78%" stopColor="#7e35ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#b42cff" stopOpacity="0" />
        </linearGradient>
        <filter id="waveGlow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" strokeLinecap="round" filter="url(#waveGlow)">
        <path className="wave-main" d="M0 72 C95 18 178 18 270 70 S455 124 560 66 S680 18 720 34" />
        <path className="wave-cyan" d="M18 86 C118 30 190 34 288 78 S456 110 548 57 S668 26 720 44" />
        <path className="wave-purple" d="M8 58 C112 84 188 78 286 50 S452 24 552 73 S674 104 720 82" />
        <path className="wave-faint" d="M36 44 C128 58 220 62 310 42 S476 22 586 52 S684 83 720 76" />
      </g>
      <g className="wave-sparks">
        <circle cx="475" cy="42" r="2" />
        <circle cx="538" cy="77" r="1.4" />
        <circle cx="618" cy="36" r="1.2" />
      </g>
    </svg>
  );
}

function DashboardInputOption({ icon, title, copy, tone }) {
  return (
    <button className={`dash-input-option ${tone}`} type="button">
      <span>
        <Icon icon={icon} size={28} strokeWidth={1.6} />
      </span>
      <strong>{title}</strong>
      <small>{copy}</small>
    </button>
  );
}

function DashboardHero() {
  const options = [
    { icon: Upload, title: "Upload File", copy: "PDF, DOCX, PPTX, etc.", tone: "blue" },
    { icon: FileText, title: "Paste Notes", copy: "Type or paste your notes", tone: "purple" },
    { icon: Mic, title: "Voice Input", copy: "Speak your topic or idea", tone: "cyan" },
    { icon: Plus, title: "Drag & Drop", copy: "Any file or assignment", tone: "purple" },
  ];

  return (
    <section className="dash-hero glass">
      <div className="dash-hero-copy">
        <h2>
          What are you
          <br />
          <span>presenting</span> today?
        </h2>
        <p>Drop your assignment, paste your notes, or tell AI what to create.</p>
        <div className="dash-input-grid">
          {options.map((option) => (
            <DashboardInputOption key={option.title} {...option} />
          ))}
        </div>
      </div>
      <div className="dash-document" aria-hidden="true">
        <span className="dash-orbit orbit-a"></span>
        <span className="dash-orbit orbit-b"></span>
        <span className="dash-platform"></span>
        <div className="dash-doc">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

function DashboardToolCard({ icon, title, description, button, tone, onClick }) {
  return (
    <article className={`dash-tool-card glass ${tone}`}>
      <div className="dash-tool-main">
        <div className="dash-tool-icon">
          <Icon icon={icon} size={58} strokeWidth={1.35} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <button className="dash-tool-button" type="button" onClick={onClick}>
        {button}
        <Icon icon={ArrowRight} size={20} strokeWidth={1.75} />
      </button>
    </article>
  );
}

function DashboardTools({ onCreatePresentation, onOpenHumanizer, onOpenLiveNotes, onOpenAnalyzer }) {
  const cards = [
    {
      icon: Presentation,
      title: "Presentation Creator",
      description: "An AI tool for generating a full presentation from an assignment, notes, or uploaded file.",
      button: "Create Presentation",
      tone: "tool-blue",
      onClick: onCreatePresentation,
    },
    {
      icon: Sparkles,
      title: "Humanizer",
      description: "Rewrites content so it sounds natural, student-written, and less robotic.",
      button: "Humanize Text",
      tone: "tool-gold",
      onClick: onOpenHumanizer,
    },
    {
      icon: Mic,
      title: "Live Notes",
      description: "Records lectures and takes notes automatically.",
      button: "Start Recording",
      tone: "tool-cyan",
      onClick: onOpenLiveNotes,
    },
    {
      icon: TrendingUp,
      title: "Presentation Analyzer",
      description: "Analyzes a presentation and gives feedback or improvement suggestions.",
      button: "Analyze Presentation",
      tone: "tool-purple",
      onClick: onOpenAnalyzer,
    },
  ];

  return (
    <section className="dash-tool-grid">
      {cards.map((card) => (
        <DashboardToolCard key={card.title} {...card} />
      ))}
    </section>
  );
}

function DashboardRecentCard({ title, edited, variant, isMenuOpen, onToggleMenu, onOpen, onEdit, onDuplicate, onRemove }) {
  const menuItems = [
    { icon: Eye, label: "Open" },
    { icon: Pencil, label: "Edit" },
    { icon: Copy, label: "Duplicate" },
    { icon: Trash2, label: "Remove", danger: true },
  ];

  const openFromKeyboard = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      className={`dash-recent-card glass ${isMenuOpen ? "menu-open" : ""}`}
      role="button"
      tabIndex="0"
      onClick={onOpen}
      onKeyDown={openFromKeyboard}
      aria-label={`Open ${title}`}
    >
      <div className={`dash-thumb ${variant}`}>
        <span></span>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{edited}</p>
      </div>
      <button
        className="dash-recent-menu-button"
        type="button"
        aria-label={`Open actions for ${title}`}
        aria-expanded={isMenuOpen}
        onClick={(event) => {
          event.stopPropagation();
          onToggleMenu();
        }}
      >
        <Icon icon={MoreVertical} size={18} strokeWidth={1.8} />
      </button>
      {isMenuOpen && (
        <div className="dash-recent-popover glass" role="menu" aria-label={`${title} actions`}>
          {menuItems.map((item) => (
            <button
              className={item.danger ? "danger" : ""}
              type="button"
              role="menuitem"
              key={item.label}
              onClick={(event) => {
                event.stopPropagation();
                if (item.label === "Open") {
                  onOpen();
                }
                if (item.label === "Edit") {
                  onEdit();
                }
                if (item.label === "Duplicate") {
                  onDuplicate(title);
                }
                if (item.label === "Remove") {
                  onRemove(title);
                }
              }}
            >
              <Icon icon={item.icon} size={15} strokeWidth={1.8} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </article>
  );
}

function DashboardRecent({
  onOpenPresentation,
  onEditPresentation,
  showAll: controlledShowAll,
  onToggleShowAll,
  activeDashboardPanel,
  onOpenFloatingMenu,
}) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [localShowAll, setLocalShowAll] = React.useState(false);
  const showAll = controlledShowAll === undefined ? localShowAll : controlledShowAll;
  const toggleShowAll = () => {
    if (onToggleShowAll) {
      onToggleShowAll();
      return;
    }
    setLocalShowAll(!showAll);
  };
  const [presentations, setPresentations] = React.useState([]);

  const duplicatePresentation = (title) => {
    const source = presentations.find((presentation) => presentation.title === title);
    if (!source) return;
    setPresentations([
      { ...source, title: `${source.title} Copy`, edited: "Created now" },
      ...presentations,
    ]);
    setOpenMenu(null);
  };

  const removePresentation = (title) => {
    setPresentations(presentations.filter((presentation) => presentation.title !== title));
    setOpenMenu(null);
  };

  const visiblePresentations = presentations.slice(0, 4);

  React.useEffect(() => {
    if (activeDashboardPanel) {
      setOpenMenu(null);
    }
  }, [activeDashboardPanel]);

  return (
    <section className="dash-recent-section">
      <div className="dash-section-heading">
        <h2>Recent Presentations</h2>
        <a
          href="#"
          aria-expanded={showAll}
          onClick={(event) => {
            event.preventDefault();
            toggleShowAll();
          }}
        >
          View all <Icon icon={ArrowRight} size={17} strokeWidth={1.8} />
        </a>
      </div>
      <div className="dash-recent-grid">
        {visiblePresentations.length > 0 ? (
          visiblePresentations.map((presentation, index) => (
            <DashboardRecentCard
              key={`${presentation.title}-${index}`}
              {...presentation}
              isMenuOpen={openMenu === presentation.title}
              onToggleMenu={() => {
                onOpenFloatingMenu?.();
                setOpenMenu(openMenu === presentation.title ? null : presentation.title);
              }}
              onOpen={onOpenPresentation}
              onEdit={onEditPresentation}
              onDuplicate={duplicatePresentation}
              onRemove={removePresentation}
            />
          ))
        ) : (
          <div className="dash-empty-presentations">
            <EmptyPresentationsMessage />
          </div>
        )}
      </div>
      {showAll && (
        <div className="recent-view-all-popover glass">
          <strong>All Recent Presentations</strong>
          {presentations.length > 0 ? (
            presentations.map((presentation, index) => (
              <button type="button" key={`${presentation.title}-${index}`} onClick={onOpenPresentation}>
                <span className={`dash-thumb ${presentation.variant}`}>
                  <span></span>
                </span>
                <span className="recent-view-copy">
                  <span>{presentation.title}</span>
                  <small>{presentation.edited}</small>
                </span>
              </button>
            ))
          ) : (
            <p className="recent-empty-copy">There are no presentations yet.</p>
          )}
        </div>
      )}
    </section>
  );
}

function DashboardScreen({
  onCreatePresentation,
  onOpenHumanizer,
  onOpenLiveNotes,
  onOpenAnalyzer,
  onOpenPresentation,
  onOpenAccountSettings,
  onOpenPrivacy,
  onOpenSignOut,
}) {
  const [dashboardPanel, setDashboardPanel] = React.useState(null);

  return (
    <main className="dashboard-screen">
      <div className="ambient ambient-blue"></div>
      <div className="ambient ambient-purple"></div>
      <div className="ambient ambient-cyan"></div>
      <NeonWave />
      <DashboardHeader />
      <div className="dashboard-shell">
        <DashboardHero />
        <DashboardTools
          onCreatePresentation={onCreatePresentation}
          onOpenHumanizer={onOpenHumanizer}
          onOpenLiveNotes={onOpenLiveNotes}
          onOpenAnalyzer={onOpenAnalyzer}
        />
        <DashboardRecent
          onOpenPresentation={onOpenPresentation}
          onEditPresentation={onCreatePresentation}
          showAll={dashboardPanel === "recent"}
          onToggleShowAll={() => setDashboardPanel(dashboardPanel === "recent" ? null : "recent")}
          activeDashboardPanel={dashboardPanel}
          onOpenFloatingMenu={() => setDashboardPanel(null)}
        />
      </div>
      <BottomUtilityBar
        showProfile
        interactive
        activePanel={dashboardPanel}
        onTogglePanel={setDashboardPanel}
        onOpenAccountSettings={onOpenAccountSettings}
        onOpenPrivacy={onOpenPrivacy}
        onOpenSignOut={onOpenSignOut}
      />
    </main>
  );
}

function CreatePresentationScreen({ onBack, onOpenHumanizer, onOpenLiveNotes, onOpenAnalyzer }) {
  return (
    <div className="chat-dashboard humanizer-dashboard">
      <div className="ambient ambient-blue"></div>
      <div className="ambient ambient-purple"></div>
      <div className="ambient ambient-cyan"></div>
      <Sidebar
        onNewPresentation={() => {}}
        activeTool="Presentation Creator"
        onOpenHumanizer={onOpenHumanizer}
        onOpenLiveNotes={onOpenLiveNotes}
        onOpenAnalyzer={onOpenAnalyzer}
      />
      <HumanizerWorkspace
        onBack={onBack}
        mode="create"
        title="Create Presentation"
        subtitle={`Preview, generate, and refine your academic presentation with ${BACKEND_MODEL_LABEL}.`}
        settingsLabel="Presentation Settings"
      />
    </div>
  );
}

function HumanizerTopBar({
  onBack,
  title = "Humanizer",
  subtitle = "Make AI-generated content sound natural, original, and undetectable.",
  settingsLabel = "Humanizer Settings",
  headingIcon = Sparkles,
  headingTone = "gold",
}) {
  return (
    <header className="humanizer-top-bar">
      <div className="humanizer-title-wrap">
        <button className="back-dashboard-box" type="button" onClick={onBack}>
          <Icon icon={Home} size={18} strokeWidth={1.7} />
          <span>Back to Dashboard</span>
        </button>
        <div className={`humanizer-heading ${headingTone}`}>
          <Icon icon={headingIcon} size={42} strokeWidth={1.45} />
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
      <button className="model-pill" type="button">
        <Icon icon={WandSparkles} size={17} strokeWidth={1.75} />
        <span>AI Model:</span>
        <strong>{BACKEND_MODEL_LABEL}</strong>
        <Icon icon={ChevronDown} size={16} strokeWidth={1.6} />
      </button>
      <button className="settings-button" type="button">
        <Icon icon={Settings} size={19} strokeWidth={1.7} />
        {settingsLabel}
      </button>
    </header>
  );
}

function SlideThumbnail({ number, title, active, tone, onClick }) {
  return (
    <button className={`slide-thumb ${active ? "active" : ""} ${tone}`} type="button" onClick={onClick}>
      <div>
        <strong>{title}</strong>
        <span>{number}</span>
      </div>
    </button>
  );
}

function PresentationPreview({ mode = "humanizer" }) {
  return (
    <section className="preview-panel glass empty-tool-preview">
      <h3>Presentation Preview</h3>
      <EmptyPresentationsMessage className="tool-empty-message" />
    </section>
  );
}

function HumanizerMessage({ children, ai, time, aiIcon = Sparkles }) {
  return (
    <article className={`humanizer-message ${ai ? "ai" : "user"}`}>
      {ai && (
        <span className="spark-avatar">
          <Icon icon={aiIcon} size={26} strokeWidth={1.5} />
        </span>
      )}
      <div className="humanizer-bubble glass">
        <p>{children}</p>
        {time && <time>{time}</time>}
      </div>
    </article>
  );
}

function InstructionComposer({
  label,
  placeholder = "Type your instructions here...",
  tool = "humanizer",
}) {
  const [instructions, setInstructions] = React.useState("");
  const [aiResult, setAiResult] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const maxCharacters = 1000;
  const keepViewportPinned = () => {
    requestAnimationFrame(() => window.scrollTo(0, 0));
    window.setTimeout(() => window.scrollTo(0, 0), 40);
  };
  const submitInstructions = async () => {
    const trimmed = instructions.trim();
    if (!trimmed || status === "loading") return;
    setStatus("loading");
    setAiResult("");
    try {
      const result = await callAiprezAI(tool, trimmed, {
        app: "AIPREZ",
        model: BACKEND_MODEL_ID,
      });
      setAiResult(result.output || "AIPREZ AI finished, but no response text was returned.");
      setStatus("complete");
    } catch (error) {
      setAiResult(`${error.message} Make sure the local AIPREZ backend is running at http://localhost:4173.`);
      setStatus("error");
    }
  };

  return (
    <div className="humanizer-composer">
      <textarea
        value={instructions}
        maxLength={maxCharacters}
        onFocus={keepViewportPinned}
        onInput={keepViewportPinned}
        onChange={(event) => {
          setInstructions(event.target.value);
          keepViewportPinned();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            submitInstructions();
          }
        }}
        placeholder={placeholder}
        aria-label={label}
      />
      <div className="composer-meta">
        <span>{instructions.length} / {maxCharacters}</span>
        {status === "loading" && <small>Thinking...</small>}
      </div>
      {aiResult && <p className={`ai-result ${status === "error" ? "error" : ""}`}>{aiResult}</p>}
    </div>
  );
}

function AISpecifications({ mode = "humanizer" }) {
  const isCreate = mode === "create";

  return (
    <aside className="ai-spec-panel glass">
      <h3>AI Specifications</h3>
      <div className="humanizer-chat">
        <HumanizerMessage ai>
          {isCreate
            ? "Hi Ava! I'm your AI presentation assistant. Tell me what you'd like to create or change in this presentation."
            : "Hi Ava! I'm your AI presentation assistant. Tell me how you'd like me to humanize your presentation."}
        </HumanizerMessage>
      </div>
      <InstructionComposer
        isCreate={isCreate}
        label={isCreate ? "Create presentation instructions" : "Humanizer instructions"}
        tool={isCreate ? "create-presentation" : "humanizer"}
      />
    </aside>
  );
}

function HumanizerWorkspace({ onBack, mode = "humanizer", title, subtitle, settingsLabel }) {
  return (
    <main className="humanizer-workspace">
      <HumanizerTopBar onBack={onBack} title={title} subtitle={subtitle} settingsLabel={settingsLabel} />
      <div className="humanizer-content">
        <PresentationPreview mode={mode} />
        <AISpecifications mode={mode} />
      </div>
      <BottomUtilityBar />
    </main>
  );
}

function Waveform() {
  const bars = [16, 22, 12, 28, 18, 24, 14, 34, 20, 26, 18, 30, 12, 24, 36, 18, 28, 22, 16, 38, 46, 20, 26, 18, 14, 22, 28, 16, 20, 24, 18, 14, 16, 20, 22, 24, 18, 16];

  return (
    <div className="waveform" aria-hidden="true">
      {bars.map((height, index) => (
        <span key={`${height}-${index}`} style={{ height }}></span>
      ))}
    </div>
  );
}

function RecordingControl({ icon, label, danger }) {
  return (
    <button className={`recording-control ${danger ? "danger" : ""}`} type="button" aria-label={label}>
      <Icon icon={icon} size={28} strokeWidth={1.7} />
      {label === "Bookmark" && <span>{label}</span>}
    </button>
  );
}

function TranscriptColumn({ language, rows = [] }) {
  return (
    <section className="transcript-column glass">
      <button className="language-select" type="button">
        {language}
        <Icon icon={ChevronDown} size={15} strokeWidth={1.6} />
      </button>
      <div className="transcript-list">
        {rows.length > 0 ? (
          rows.map((row) => (
            <div className="transcript-row" key={`${language}-${row.time}`}>
              <time>{row.time}</time>
              <p>{row.text}</p>
            </div>
          ))
        ) : (
          <EmptyPresentationsMessage />
        )}
      </div>
    </section>
  );
}

function RecordingPanel() {
  return (
    <section className="recording-panel glass">
      <div className="recording-status">
        <h3>Recording</h3>
        <span className="recording-dot"></span>
        <time>00:03:45</time>
      </div>
      <Waveform />
      <div className="recording-controls">
        <RecordingControl icon={Pause} label="Pause" />
        <RecordingControl icon={Square} label="Stop" danger />
        <RecordingControl icon={Bookmark} label="Bookmark" />
      </div>
      <div className="notes-tabs" role="tablist" aria-label="Live notes views">
        <button className="active" type="button">Transcription</button>
        <button type="button">Translation</button>
        <button type="button">Summary</button>
      </div>
      <div className="transcript-grid">
        <TranscriptColumn language="English (Detected)" />
        <button className="translate-swap" type="button" aria-label="Swap languages">
          <Icon icon={ArrowRight} size={22} strokeWidth={1.5} />
          <Icon icon={ArrowRight} size={22} strokeWidth={1.5} />
        </button>
        <TranscriptColumn language="Spanish" />
      </div>
    </section>
  );
}

function LiveNotesAction({ children }) {
  return (
    <button className="live-action-card" type="button">
      <span>
        <Icon icon={ClipboardList} size={18} strokeWidth={1.7} />
      </span>
      {children}
      <Icon icon={ArrowRight} size={17} strokeWidth={1.6} />
    </button>
  );
}

function LiveNotesBotMessage({ children }) {
  return (
    <article className="live-notes-bot-message">
      <span className="live-mic-avatar">
        <span className="mic-glyph" aria-hidden="true"></span>
      </span>
      <div className="humanizer-bubble glass">
        <p>{children}</p>
      </div>
    </article>
  );
}

function LiveNotesSpecifications() {
  return (
    <aside className="ai-spec-panel live-notes-spec glass">
      <h3>AI Specifications</h3>
      <div className="humanizer-chat">
        <LiveNotesBotMessage>
          Hi Ava! I'm your AI live notes assistant. Tell me how you'd like me to process your recording.
        </LiveNotesBotMessage>
      </div>
      <div>
        <div className="live-composer-title">
          <span className="live-mic-avatar compact">
            <span className="mic-glyph" aria-hidden="true"></span>
          </span>
          <h3>Create Live Notes</h3>
        </div>
        <InstructionComposer label="Live notes instructions" tool="live-notes" />
      </div>
    </aside>
  );
}

function LiveNotesWorkspace({ onBack }) {
  return (
    <main className="humanizer-workspace live-notes-workspace">
      <HumanizerTopBar
        onBack={onBack}
        title="Live Notes"
        subtitle="Record, transcribe, and translate your lectures, meetings, and ideas in real time."
        settingsLabel="Live Notes Settings"
        headingIcon={Mic}
        headingTone="live"
      />
      <div className="humanizer-content live-notes-content">
        <RecordingPanel />
        <LiveNotesSpecifications />
      </div>
      <BottomUtilityBar />
    </main>
  );
}

function LiveNotesScreen({ onBack, onCreatePresentation, onOpenHumanizer, onOpenLiveNotes, onOpenAnalyzer }) {
  return (
    <div className="chat-dashboard humanizer-dashboard">
      <div className="ambient ambient-blue"></div>
      <div className="ambient ambient-purple"></div>
      <div className="ambient ambient-cyan"></div>
      <Sidebar
        onNewPresentation={onCreatePresentation}
        activeTool="Live Notes"
        onOpenHumanizer={onOpenHumanizer}
        onOpenLiveNotes={onOpenLiveNotes}
        onOpenAnalyzer={onOpenAnalyzer}
      />
      <LiveNotesWorkspace onBack={onBack} />
    </div>
  );
}

function AnalyzerSlideDeck() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slide = PRESENTATION_SLIDES[activeSlide];
  const thumbs = PRESENTATION_SLIDES.slice(0, 6);

  return (
    <section className="analyzer-preview glass">
      <div className="analyzer-file-row">
        <span className="ppt-icon">P</span>
        <span>
          <strong>American Revolution Presentation.pptx</strong>
          <small>12 slides • 8.4 MB • Uploaded May 15, 2025 10:24 AM</small>
        </span>
        <span className="uploaded-pill">
          <Icon icon={CheckCircle} size={15} strokeWidth={1.8} />
          Uploaded
        </span>
      </div>
      <div className="analyzer-main-slide">
        <div className="analyzer-slide-copy">
          <h3>{slide.title}</h3>
          <span></span>
          <p>{slide.subtitle}</p>
        </div>
        <div className="analyzer-battle-art">
          <span className="flag"></span>
          <span className="soldier one"></span>
          <span className="soldier two"></span>
          <span className="smoke"></span>
        </div>
      </div>
      <div className="analyzer-thumb-strip">
        <button
          className="analyzer-slide-arrow"
          type="button"
          aria-label="Previous slide"
          onClick={() => setActiveSlide(getPreviousSlide)}
        >
          <Icon icon={ChevronDown} size={22} strokeWidth={1.7} />
        </button>
        {thumbs.map((thumb, index) => (
          <button
            className={`analyzer-thumb ${activeSlide === index ? "active" : ""}`}
            type="button"
            key={thumb.title}
            onClick={() => setActiveSlide(index)}
          >
            <span>{thumb.thumb}</span>
            <strong>{index + 1}</strong>
          </button>
        ))}
        <button
          className="analyzer-slide-arrow next"
          type="button"
          aria-label="Next slide"
          onClick={() => setActiveSlide(getNextSlide)}
        >
          <Icon icon={ChevronDown} size={22} strokeWidth={1.7} />
        </button>
      </div>
      <p className="analyzer-slide-count">Slide {activeSlide + 1} of {PRESENTATION_SLIDES.length}</p>
    </section>
  );
}

function AnalyzerScoreCard({ icon, label, score, tone }) {
  return (
    <article className={`analyzer-score-card glass ${tone}`}>
      <header>
        <Icon icon={icon} size={22} strokeWidth={1.6} />
        <span>{label}</span>
      </header>
      <div className="score-ring" style={{ "--score": `${score}%` }}>
        <strong>{score}</strong>
        <small>/100</small>
      </div>
    </article>
  );
}

function AnalyzerMainPanel() {
  const scores = [
    { icon: Sparkles, label: "Overall Score", score: 100, tone: "purple-score" },
    { icon: FileText, label: "Content Quality", score: 100, tone: "blue-score" },
    { icon: SlidersHorizontal, label: "Structure & Flow", score: 100, tone: "cyan-score" },
    { icon: Monitor, label: "Visual Design", score: 100, tone: "pink-score" },
    { icon: Mic, label: "Delivery Impact", score: 100, tone: "teal-score" },
  ];

  return (
    <div className="analyzer-main-panel">
      <section className="empty-analyzer-panel glass">
        <EmptyPresentationsMessage className="tool-empty-message" />
      </section>
      <div className="analyzer-score-grid">
        {scores.map((score) => (
          <AnalyzerScoreCard key={score.label} {...score} />
        ))}
      </div>
    </div>
  );
}

function AnalyzerActionBubble({ children }) {
  return <div className="analyzer-user-bubble glass">{children}</div>;
}

function AnalyzerSpecifications() {
  return (
    <aside className="ai-spec-panel analyzer-spec glass">
      <div className="analyzer-spec-heading">
        <h3>AI Specifications</h3>
        <Icon icon={Maximize} size={17} strokeWidth={1.6} />
      </div>
      <div className="humanizer-chat analyzer-chat">
        <article className="analyzer-bot-message">
          <span className="analyzer-bot-avatar">
            <Icon icon={TrendingUp} size={25} strokeWidth={1.55} />
          </span>
          <div className="humanizer-bubble glass">
            <p>Hi Ava! I'm your AI presentation analyzer. Tell me how you'd like me to review your presentation.</p>
          </div>
        </article>
      </div>
      <InstructionComposer
        label="Analyzer specifications"
        placeholder="Type your specifications here..."
        tool="analyzer"
      />
    </aside>
  );
}

function AnalyzerWorkspace({ onBack }) {
  return (
    <main className="humanizer-workspace analyzer-workspace">
      <HumanizerTopBar
        onBack={onBack}
        title="Presentation Analyzer"
        subtitle="Review your presentation and get AI-powered feedback on structure, visuals, clarity, and delivery."
        settingsLabel="Analyzer Settings"
        headingIcon={TrendingUp}
        headingTone="analyzer"
      />
      <div className="humanizer-content analyzer-content">
        <AnalyzerMainPanel />
        <AnalyzerSpecifications />
      </div>
      <BottomUtilityBar />
    </main>
  );
}

function AnalyzerScreen({ onBack, onCreatePresentation, onOpenHumanizer, onOpenLiveNotes, onOpenAnalyzer }) {
  return (
    <div className="chat-dashboard humanizer-dashboard">
      <div className="ambient ambient-blue"></div>
      <div className="ambient ambient-purple"></div>
      <div className="ambient ambient-cyan"></div>
      <Sidebar
        onNewPresentation={onCreatePresentation}
        activeTool="Presentation Analyzer"
        onOpenHumanizer={onOpenHumanizer}
        onOpenLiveNotes={onOpenLiveNotes}
        onOpenAnalyzer={onOpenAnalyzer}
      />
      <AnalyzerWorkspace onBack={onBack} />
    </div>
  );
}

function PresentationViewerScreen({ onBack }) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slide = PRESENTATION_SLIDES[activeSlide];

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setActiveSlide(getNextSlide);
      }
      if (event.key === "ArrowLeft") {
        setActiveSlide(getPreviousSlide);
      }
      if (event.key === "Escape") {
        onBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  return (
    <main className="presentation-viewer-screen">
      <button className="viewer-back-button" type="button" onClick={onBack}>
        <Icon icon={Home} size={17} strokeWidth={1.7} />
        Dashboard
      </button>
      <button
        className="viewer-nav-button previous"
        type="button"
        aria-label="Previous slide"
        onClick={() => setActiveSlide(getPreviousSlide)}
      >
        <Icon icon={ChevronDown} size={30} strokeWidth={1.55} />
      </button>
      <section className="viewer-stage" aria-label="Presentation viewer">
        <div className="viewer-slide">
          <div className="viewer-slide-copy">
            <h1>{slide.title}</h1>
            <span></span>
            <p>{slide.subtitle}</p>
          </div>
          <div className="viewer-art">
            <span className="flag"></span>
            <span className="soldier one"></span>
            <span className="soldier two"></span>
            <span className="smoke"></span>
          </div>
        </div>
      </section>
      <button
        className="viewer-nav-button next"
        type="button"
        aria-label="Next slide"
        onClick={() => setActiveSlide(getNextSlide)}
      >
        <Icon icon={ChevronDown} size={30} strokeWidth={1.55} />
      </button>
      <div className="viewer-slide-status">
        Slide {activeSlide + 1} of {PRESENTATION_SLIDES.length}
      </div>
    </main>
  );
}

function HumanizerScreen({ onBack, onCreatePresentation, onOpenHumanizer, onOpenLiveNotes, onOpenAnalyzer }) {
  return (
    <div className="chat-dashboard humanizer-dashboard">
      <div className="ambient ambient-blue"></div>
      <div className="ambient ambient-purple"></div>
      <div className="ambient ambient-cyan"></div>
      <Sidebar
        onNewPresentation={onCreatePresentation}
        activeTool="Humanizer"
        onOpenHumanizer={onOpenHumanizer}
        onOpenLiveNotes={onOpenLiveNotes}
        onOpenAnalyzer={onOpenAnalyzer}
      />
      <HumanizerWorkspace onBack={onBack} />
    </div>
  );
}

function SettingsSidebar({ onBack }) {
  const recent = [];
  const tools = [
    ["Presentation Creator", Presentation, "cyan"],
    ["Humanizer", Sparkles, "purple"],
    ["Live Notes", Mic, "cyan"],
    ["Presentation Analyzer", ChartNoAxesCombined, "purple"],
    ["History", History, "gold"],
  ];

  return (
    <aside className="sidebar settings-sidebar">
      <LogoBlock />
      <button className="new-presentation" type="button" onClick={onBack}>
        <Icon icon={Plus} size={21} strokeWidth={1.8} />
        <span>New Presentation</span>
      </button>

      <section className="settings-sidebar-section">
        <h2>Recent Presentations</h2>
        <div className="settings-recent-list">
          {recent.length > 0 ? (
            recent.map(([title, edited, icon, tone], index) => (
              <button className={index === 0 ? "selected" : ""} type="button" key={title}>
                <span className={`settings-row-icon ${tone}`}>
                  <Icon icon={icon} size={19} strokeWidth={1.7} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{edited}</small>
                </span>
              </button>
            ))
          ) : (
            <div className="settings-empty-state">
              <EmptyPresentationsMessage />
            </div>
          )}
        </div>
        {recent.length > 0 && (
          <button className="settings-sidebar-link" type="button">
            View all <Icon icon={ArrowRight} size={15} strokeWidth={1.7} />
          </button>
        )}
      </section>

      <section className="settings-sidebar-section tools">
        <h2>Tools</h2>
        <div className="settings-tool-list">
          {tools.map(([label, icon, tone]) => (
            <button type="button" key={label}>
              <Icon icon={icon} size={19} strokeWidth={1.7} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </section>

      <button className="settings-sidebar-account glass" type="button">
        <span className="avatar">
          <UserRoundIcon />
        </span>
        <span>
          <strong>Ava Johnson</strong>
          <small>Student</small>
        </span>
        <Icon icon={ChevronDown} size={18} strokeWidth={1.6} />
      </button>
    </aside>
  );
}

function AccountSettingsWorkspace({ onBack, mode = "settings" }) {
  const accountRows = [
    ["Personal Information", "Update your name, email, and details", UserRound, "blue"],
    ["Security", "Password, 2FA, and login activity", Settings, "cyan"],
    ["Notifications", "Manage email and app notifications", Bell, "purple"],
    ["Privacy", "Control your data and privacy settings", UserCog, "purple"],
    ["Linked Accounts", "Connect Google, Microsoft, and more", BookOpen, "purple"],
    ["Appearance", "Choose theme and display options", Monitor, "purple"],
    ["Language", "Select your preferred language", CircleHelp, "purple"],
  ];
  const recentLogins = [
    ["MacBook Pro 14” Dover, NH", "This device", "Now"],
    ["iPhone 15 Pro – Dover, NH", "", "May 17, 2025"],
    ["iPad Air – Boston, MA", "", "May 12, 2025"],
  ];

  return (
    <main className="account-settings-workspace">
      <div className="settings-neon-wave" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header className="account-settings-topbar">
        <div className="settings-title-stack">
          <button className="back-dashboard-box settings-back-button" type="button" onClick={onBack}>
            <Icon icon={Home} size={18} strokeWidth={1.7} />
            <span>Back to Dashboard</span>
          </button>
          <div className="account-settings-title">
            <span>
              <Icon icon={Settings} size={34} strokeWidth={1.75} />
            </span>
            <div>
              <h2>Account Settings</h2>
              <p>Manage your account, preferences, and plan.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="settings-main-grid">
        <article className="settings-profile-card glass">
          <h3>Profile</h3>
          <div className="settings-profile-content">
            <span className="settings-large-avatar">
              <UserRoundIcon />
              <button type="button" aria-label="Change profile photo">
                <Icon icon={Pencil} size={17} strokeWidth={1.8} />
              </button>
            </span>
            <div className="settings-profile-copy">
              <h4>Ava Johnson</h4>
              <p>Student</p>
              <small>ava.johnson@email.com</small>
              <button type="button">
                <Icon icon={Pencil} size={17} strokeWidth={1.8} />
                Edit Profile
              </button>
            </div>
          </div>
        </article>

        <article className="settings-billing-card glass">
          <h3>Plan & Billing</h3>
          <div className="billing-top">
            <span className="settings-plan-cube">
              <Icon icon={Box} size={39} strokeWidth={1.5} />
            </span>
            <div>
              <strong>Premium Plan</strong>
              <small>Valid until May 30, 2030</small>
            </div>
            <button type="button">Manage Plan</button>
          </div>
          <div className="billing-meter wide">
            <span style={{ width: "74%" }}></span>
          </div>
          <div className="billing-stats">
            {[
              ["Storage Used", "12.4 GB / 100 GB", "20%", CreditCard, "purple"],
              ["AI Credits", "8,450 / 10,000", "78%", Sparkles, "cyan"],
              ["Usage This Month", "78%", "78%", ChartNoAxesCombined, "purple"],
            ].map(([label, value, percent, icon, tone]) => (
              <div className="billing-stat" key={label}>
                <Icon icon={icon} size={28} strokeWidth={1.7} />
                <div>
                  <strong>{label}</strong>
                  <small>{value}</small>
                  <div className={`billing-meter ${tone}`}>
                    <span style={{ width: percent }}></span>
                  </div>
                </div>
                {label === "Usage This Month" && <Icon icon={ArrowRight} size={18} strokeWidth={1.7} />}
              </div>
            ))}
          </div>
        </article>

        <article className="settings-panel settings-account-panel glass">
          <h3>Account Settings</h3>
          <div className="settings-row-list">
            {accountRows.map(([title, copy, icon, tone]) => (
              <button type="button" key={title}>
                <span className={`settings-row-icon ${tone}`}>
                  <Icon icon={icon} size={21} strokeWidth={1.7} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
                <Icon icon={ArrowRight} size={17} strokeWidth={1.7} />
              </button>
            ))}
          </div>
        </article>

        <div className="settings-middle-column">
          <article className="settings-panel glass">
            <h3>
              AI Preferences
              <Icon icon={Sparkles} size={22} strokeWidth={1.6} />
            </h3>
            <div className="settings-preference-list">
              {[
                ["AI Model", BACKEND_MODEL_LABEL, Sparkles],
                ["Response Style", "Balanced", NotebookText],
                ["Default Tone", "Academic", Mic],
              ].map(([label, value, icon]) => (
                <button type="button" key={label}>
                  <Icon icon={icon} size={20} strokeWidth={1.7} />
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <Icon icon={ChevronDown} size={15} strokeWidth={1.7} />
                </button>
              ))}
              <div className="settings-preference-toggle">
                <Icon icon={WandSparkles} size={20} strokeWidth={1.7} />
                <span>Auto-Suggestions</span>
                <strong>On</strong>
                <button className="account-toggle active" type="button" aria-label="Auto-Suggestions"></button>
              </div>
            </div>
          </article>

          <article className="settings-panel glass">
            <h3>Recent Login Activity</h3>
            <div className="login-list">
              {recentLogins.map(([device, badge, date]) => (
                <div className="login-row" key={device}>
                  <Icon icon={Monitor} size={18} strokeWidth={1.55} />
                  <span>{device}</span>
                  {badge && <em>{badge}</em>}
                  <small>{date}</small>
                </div>
              ))}
            </div>
            <button className="activity-link" type="button">
              View all activity <Icon icon={ArrowRight} size={15} strokeWidth={1.7} />
            </button>
          </article>
        </div>

        <article className="settings-panel settings-quick-card glass">
          <h3>Quick Actions</h3>
          <div className="settings-quick-list">
            {[
              ["Export My Data", FileText],
              ["Download My Presentations", Upload],
              ["Manage Devices", Monitor],
            ].map(([label, icon]) => (
              <button type="button" key={label}>
                <Icon icon={icon} size={22} strokeWidth={1.65} />
                <span>{label}</span>
                <Icon icon={ArrowRight} size={17} strokeWidth={1.7} />
              </button>
            ))}
            <button className="danger" type="button">
              <Icon icon={ArrowRight} size={22} strokeWidth={1.65} />
              <span>Log Out</span>
              <Icon icon={ArrowRight} size={17} strokeWidth={1.7} />
            </button>
          </div>
        </article>
      </section>

      <div className="settings-bottom-bar glass">
        <button className="plan-status" type="button">
          <span className="plan-icon">
            <Icon icon={Box} size={27} strokeWidth={1.5} />
          </span>
          <span>
            <strong>Premium Plan</strong>
            <small>Valid until May 30, 2030</small>
          </span>
        </button>
        <div className="settings-bottom-actions">
          <button type="button"><Icon icon={CircleHelp} size={23} strokeWidth={1.55} />Help</button>
          <button type="button"><Icon icon={Bell} size={23} strokeWidth={1.55} />Notifications</button>
          <button className="active" type="button"><Icon icon={Settings} size={25} strokeWidth={1.55} />Settings</button>
        </div>
      </div>
    </main>
  );
}

function AccountSettingsScreen({ onBack, mode }) {
  return (
    <div className="chat-dashboard humanizer-dashboard">
      <div className="ambient ambient-blue"></div>
      <div className="ambient ambient-purple"></div>
      <div className="ambient ambient-cyan"></div>
      <SettingsSidebar onBack={onBack} />
      <AccountSettingsWorkspace onBack={onBack} mode={mode} />
    </div>
  );
}

function App() {
  const [screen, setScreen] = React.useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("screen") || "dashboard";
  });

  React.useEffect(() => {
    const updateScale = () => {
      const isPhone = window.innerWidth <= 760;
      const scale = isPhone ? 1 : Math.min(1, window.innerWidth / 1280, window.innerHeight / 720);
      document.documentElement.style.setProperty("--app-scale", scale.toFixed(3));
      window.scrollTo(0, 0);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  if (screen === "create") {
    return (
      <CreatePresentationScreen
        onBack={() => setScreen("dashboard")}
        onOpenHumanizer={() => setScreen("humanizer")}
        onOpenLiveNotes={() => setScreen("live-notes")}
        onOpenAnalyzer={() => setScreen("analyzer")}
      />
    );
  }

  if (screen === "humanizer") {
    return (
      <HumanizerScreen
        onBack={() => setScreen("dashboard")}
        onCreatePresentation={() => setScreen("create")}
        onOpenHumanizer={() => setScreen("humanizer")}
        onOpenLiveNotes={() => setScreen("live-notes")}
        onOpenAnalyzer={() => setScreen("analyzer")}
      />
    );
  }

  if (screen === "live-notes") {
    return (
      <LiveNotesScreen
        onBack={() => setScreen("dashboard")}
        onCreatePresentation={() => setScreen("create")}
        onOpenHumanizer={() => setScreen("humanizer")}
        onOpenLiveNotes={() => setScreen("live-notes")}
        onOpenAnalyzer={() => setScreen("analyzer")}
      />
    );
  }

  if (screen === "analyzer") {
    return (
      <AnalyzerScreen
        onBack={() => setScreen("dashboard")}
        onCreatePresentation={() => setScreen("create")}
        onOpenHumanizer={() => setScreen("humanizer")}
        onOpenLiveNotes={() => setScreen("live-notes")}
        onOpenAnalyzer={() => setScreen("analyzer")}
      />
    );
  }

  if (screen === "presentation-viewer") {
    return <PresentationViewerScreen onBack={() => setScreen("dashboard")} />;
  }

  if (screen === "account-settings") {
    return <AccountSettingsScreen onBack={() => setScreen("dashboard")} mode="settings" />;
  }

  if (screen === "privacy-security") {
    return <AccountSettingsScreen onBack={() => setScreen("dashboard")} mode="privacy" />;
  }

  if (screen === "sign-out") {
    return <AccountSettingsScreen onBack={() => setScreen("dashboard")} mode="signout" />;
  }

  return (
    <DashboardScreen
      onCreatePresentation={() => setScreen("create")}
      onOpenHumanizer={() => setScreen("humanizer")}
      onOpenLiveNotes={() => setScreen("live-notes")}
      onOpenAnalyzer={() => setScreen("analyzer")}
      onOpenPresentation={() => setScreen("presentation-viewer")}
      onOpenAccountSettings={() => setScreen("account-settings")}
      onOpenPrivacy={() => setScreen("privacy-security")}
      onOpenSignOut={() => setScreen("sign-out")}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
