"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _lucide = lucide,
  ArrowRight = _lucide.ArrowRight,
  Bell = _lucide.Bell,
  Bookmark = _lucide.Bookmark,
  BookOpen = _lucide.BookOpen,
  Box = _lucide.Box,
  ChartNoAxesCombined = _lucide.ChartNoAxesCombined,
  ChevronDown = _lucide.ChevronDown,
  CircleHelp = _lucide.CircleHelp,
  ClipboardList = _lucide.ClipboardList,
  FileText = _lucide.FileText,
  CheckCircle = _lucide.CheckCircle,
  Copy = _lucide.Copy,
  CreditCard = _lucide.CreditCard,
  Eye = _lucide.Eye,
  History = _lucide.History,
  Home = _lucide.Home,
  Lightbulb = _lucide.Lightbulb,
  Maximize = _lucide.Maximize,
  MessageSquareText = _lucide.MessageSquareText,
  Mic = _lucide.Mic,
  Monitor = _lucide.Monitor,
  MoreVertical = _lucide.MoreVertical,
  NotebookText = _lucide.NotebookText,
  Paperclip = _lucide.Paperclip,
  Pause = _lucide.Pause,
  Pencil = _lucide.Pencil,
  Plus = _lucide.Plus,
  Presentation = _lucide.Presentation,
  SendHorizontal = _lucide.SendHorizontal,
  Settings = _lucide.Settings,
  SlidersHorizontal = _lucide.SlidersHorizontal,
  Sparkles = _lucide.Sparkles,
  Square = _lucide.Square,
  UserCog = _lucide.UserCog,
  TrendingUp = _lucide.TrendingUp,
  Trash2 = _lucide.Trash2,
  Upload = _lucide.Upload,
  UserRound = _lucide.UserRound,
  WandSparkles = _lucide.WandSparkles;
function Icon(_ref) {
  var icon = _ref.icon,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? 1.8 : _ref$strokeWidth;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, icon.map(function (_ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 2),
      tag = _ref3[0],
      attrs = _ref3[1];
    return React.createElement(tag, _objectSpread(_objectSpread({}, attrs), {}, {
      key: index
    }));
  }));
}
var PRESENTATION_SLIDES = [{
  title: "The American Revolution",
  subtitle: "Causes, Events, and the Road to Independence",
  thumb: "The American Revolution"
}, {
  title: "Taxation Without Representation",
  subtitle: "How colonial taxes increased tensions with Britain",
  thumb: "Taxation Without Representation"
}, {
  title: "Causes of Conflict",
  subtitle: "Political, economic, and social forces behind rebellion",
  thumb: "Causes of Conflict"
}, {
  title: "Revolutionary Timeline",
  subtitle: "Key events that moved the colonies toward independence",
  thumb: "Revolutionary Timeline"
}, {
  title: "Colonist Beliefs",
  subtitle: "Liberty, self-government, and rights in the colonies",
  thumb: "Colonist Beliefs"
}, {
  title: "Changing Tensions",
  subtitle: "The conflicts that pushed both sides toward war",
  thumb: "Changing Tensions"
}, {
  title: "Boston Massacre",
  subtitle: "A turning point in colonial anger toward British troops",
  thumb: "Boston Massacre"
}, {
  title: "Boston Tea Party",
  subtitle: "A protest that challenged British control",
  thumb: "Boston Tea Party"
}, {
  title: "Intolerable Acts",
  subtitle: "Punishments that united many colonists against Britain",
  thumb: "Intolerable Acts"
}, {
  title: "The Road to Revolution",
  subtitle: "How grievances became organized resistance",
  thumb: "The Road to Revolution"
}, {
  title: "Declaring Independence",
  subtitle: "The ideas and risks behind breaking from Britain",
  thumb: "Declaring Independence"
}, {
  title: "Conclusion",
  subtitle: "The causes that sparked a new nation",
  thumb: "Conclusion"
}];
var BACKEND_MODEL_ID = "gpt-5.4-mini";
var BACKEND_MODEL_LABEL = "GPT-5.4 Mini";
function getAiprezApiUrl() {
  var configuredBase = localStorage.getItem("aiprez_api_base") || window.AIPREZ_API_BASE || "";
  if (configuredBase) {
    return "".concat(configuredBase.replace(/\/$/, ""), "/api/ai");
  }
  return "/api/ai";
}
function callAiprezAI(_x, _x2) {
  return _callAiprezAI.apply(this, arguments);
}
function _callAiprezAI() {
  _callAiprezAI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(tool, input) {
    var context,
      response,
      payload,
      _args2 = arguments;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          context = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
          _context2.n = 1;
          return fetch(getAiprezApiUrl(), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              tool: tool,
              input: input,
              context: context
            })
          });
        case 1:
          response = _context2.v;
          _context2.n = 2;
          return response.json()["catch"](function () {
            return {};
          });
        case 2:
          payload = _context2.v;
          if (response.ok) {
            _context2.n = 3;
            break;
          }
          throw new Error(payload.error || "AIPREZ AI backend is not available yet.");
        case 3:
          return _context2.a(2, payload);
      }
    }, _callee2);
  }));
  return _callAiprezAI.apply(this, arguments);
}
function getNextSlide(index) {
  return (index + 1) % PRESENTATION_SLIDES.length;
}
function getPreviousSlide(index) {
  return (index - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length;
}
function LogoBlock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "logo-block"
  }, /*#__PURE__*/React.createElement("img", {
    className: "logo-mark",
    src: "./src/assets/aiprez-logo-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "AIPREZ"), /*#__PURE__*/React.createElement("p", null, "Your AI Academic Presentation System")));
}
function SidebarConversationItem(_ref4) {
  var title = _ref4.title,
    time = _ref4.time,
    selected = _ref4.selected,
    _ref4$tone = _ref4.tone,
    tone = _ref4$tone === void 0 ? "blue" : _ref4$tone;
  return /*#__PURE__*/React.createElement("button", {
    className: "conversation-item ".concat(selected ? "selected" : ""),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "conversation-icon ".concat(tone)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: MessageSquareText,
    size: 18,
    strokeWidth: 1.7
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("small", null, time)));
}
function SidebarToolItem(_ref5) {
  var icon = _ref5.icon,
    label = _ref5.label,
    tone = _ref5.tone,
    active = _ref5.active,
    onClick = _ref5.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: "tool-item ".concat(active ? "active" : ""),
    type: "button",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "tool-item-icon ".concat(tone)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 18,
    strokeWidth: 1.7
  })), /*#__PURE__*/React.createElement("span", null, label));
}
function AccountCard() {
  return /*#__PURE__*/React.createElement("button", {
    className: "account-card glass",
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement(UserRoundIcon, null)), /*#__PURE__*/React.createElement("span", {
    className: "account-copy"
  }, /*#__PURE__*/React.createElement("strong", null, "Ava Johnson"), /*#__PURE__*/React.createElement("small", null, "Student")), /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 18,
    strokeWidth: 1.6
  }));
}
function UserRoundIcon() {
  return /*#__PURE__*/React.createElement(Icon, {
    icon: UserRound,
    size: 28,
    strokeWidth: 1.45
  });
}
function Sidebar(_ref6) {
  var onNewPresentation = _ref6.onNewPresentation,
    activeTool = _ref6.activeTool,
    onOpenHumanizer = _ref6.onOpenHumanizer,
    onOpenLiveNotes = _ref6.onOpenLiveNotes,
    onOpenAnalyzer = _ref6.onOpenAnalyzer;
  var conversations = [];
  var tools = [{
    icon: ChartNoAxesCombined,
    label: "Presentation Analyzer",
    tone: "purple"
  }, {
    icon: Sparkles,
    label: "Humanizer",
    tone: "purple"
  }, {
    icon: Mic,
    label: "Live Notes",
    tone: "cyan"
  }, {
    icon: History,
    label: "History",
    tone: "gold"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React.createElement(LogoBlock, null), /*#__PURE__*/React.createElement("button", {
    className: "new-presentation",
    type: "button",
    onClick: onNewPresentation
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Plus,
    size: 21,
    strokeWidth: 1.8
  }), /*#__PURE__*/React.createElement("span", null, "New Presentation")), /*#__PURE__*/React.createElement("section", {
    className: "sidebar-section"
  }, /*#__PURE__*/React.createElement("h2", null, "Conversations"), /*#__PURE__*/React.createElement("div", {
    className: "conversation-list"
  }, conversations.length > 0 ? conversations.map(function (conversation) {
    return /*#__PURE__*/React.createElement(SidebarConversationItem, _extends({
      key: conversation.title
    }, conversation));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "sidebar-empty-state"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Presentation,
    size: 20,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", null, "There are no presentations yet."))), conversations.length > 0 && /*#__PURE__*/React.createElement("a", {
    className: "view-all",
    href: "#"
  }, "View all conversations ", /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 16,
    strokeWidth: 1.8
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sidebar-section tools-section"
  }, /*#__PURE__*/React.createElement("h2", null, "Tools"), /*#__PURE__*/React.createElement("div", {
    className: "tool-list"
  }, tools.map(function (tool) {
    return /*#__PURE__*/React.createElement(SidebarToolItem, _extends({
      key: tool.label
    }, tool, {
      active: activeTool === tool.label,
      onClick: tool.label === "Humanizer" ? onOpenHumanizer : tool.label === "Live Notes" ? onOpenLiveNotes : tool.label === "Presentation Analyzer" ? onOpenAnalyzer : undefined
    }));
  }))), /*#__PURE__*/React.createElement(AccountCard, null));
}
function TopBar(_ref7) {
  var onBack = _ref7.onBack;
  return /*#__PURE__*/React.createElement("header", {
    className: "top-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-title"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back-dashboard-box",
    type: "button",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Home,
    size: 18,
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("span", null, "Back to Dashboard")), /*#__PURE__*/React.createElement("h2", null, "Create Presentation"), /*#__PURE__*/React.createElement("button", {
    className: "model-pill",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: WandSparkles,
    size: 17,
    strokeWidth: 1.75
  }), /*#__PURE__*/React.createElement("span", null, "AI Model:"), /*#__PURE__*/React.createElement("strong", null, BACKEND_MODEL_LABEL), /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 16,
    strokeWidth: 1.6
  }))), /*#__PURE__*/React.createElement("button", {
    className: "settings-button",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Settings,
    size: 19,
    strokeWidth: 1.7
  }), "Presentation Settings"));
}
function ChatMessageUser() {
  return /*#__PURE__*/React.createElement("article", {
    className: "message-row user-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-bubble glass"
  }, /*#__PURE__*/React.createElement("p", null, "Create a 10-slide presentation about the causes of the American Revolution. Include key events, colonist grievances, and British policies."), /*#__PURE__*/React.createElement("div", {
    className: "message-meta user-meta"
  }, /*#__PURE__*/React.createElement("span", null, "You"), /*#__PURE__*/React.createElement("time", null, "2:35 PM"))), /*#__PURE__*/React.createElement("span", {
    className: "message-avatar user-avatar"
  }, /*#__PURE__*/React.createElement(UserRoundIcon, null)));
}
function AIAvatar() {
  return /*#__PURE__*/React.createElement("span", {
    className: "ai-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./src/assets/aiprez-logo-mark.png",
    alt: ""
  }));
}
function ProgressBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-wrap",
    "aria-label": "Generating your slides with ".concat(BACKEND_MODEL_LABEL, ", 72 percent complete")
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "progress-fill"
  })), /*#__PURE__*/React.createElement("strong", null, "72%"));
}
function OutlineCard() {
  var outline = ["Title Slide - The Causes of the American Revolution", "Overview - Setting the Stage", "Colonist Grievances - Taxation Without Representation", "British Policies - Economic Control", "British Policies - Restrictive Laws", "Key Events - Boston Massacre", "Key Events - Boston Tea Party", "Key Events - Intolerable Acts", "The Road to Revolution", "Conclusion - Causes That Sparked a Nation"];
  return /*#__PURE__*/React.createElement("section", {
    className: "outline-card glass"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(Icon, {
    icon: ClipboardList,
    size: 17,
    strokeWidth: 1.7
  }), "Presentation Outline (10 slides)"), /*#__PURE__*/React.createElement("ol", null, outline.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    className: "generation-status"
  }, /*#__PURE__*/React.createElement("p", null, "Generating your slides with ", BACKEND_MODEL_LABEL, "..."), /*#__PURE__*/React.createElement(ProgressBar, null)));
}
function ChatMessageAI(_ref8) {
  var _ref8$complete = _ref8.complete,
    complete = _ref8$complete === void 0 ? false : _ref8$complete;
  return /*#__PURE__*/React.createElement("article", {
    className: "message-row ai-row"
  }, /*#__PURE__*/React.createElement(AIAvatar, null), /*#__PURE__*/React.createElement("div", {
    className: "ai-message glass ".concat(complete ? "complete" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-message-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "AIPREZ AI"), /*#__PURE__*/React.createElement("time", null, complete ? "2:36 PM" : "2:35 PM")), !complete && /*#__PURE__*/React.createElement("span", {
    className: "opus-badge"
  }, BACKEND_MODEL_LABEL)), complete ? /*#__PURE__*/React.createElement("div", {
    className: "completion-line"
  }, /*#__PURE__*/React.createElement("p", null, "Your 10-slide presentation is ready! You can preview it, edit slides, or ask me to make changes."), /*#__PURE__*/React.createElement("button", {
    className: "preview-button",
    type: "button"
  }, "Preview Slides ", /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 18,
    strokeWidth: 1.8
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "I'll create a 10-slide presentation on the causes of the American Revolution.", /*#__PURE__*/React.createElement("br", null), "I'll include key events, colonist grievances, and British policies."), /*#__PURE__*/React.createElement(OutlineCard, null))));
}
function ComposerAction(_ref9) {
  var icon = _ref9.icon,
    label = _ref9.label,
    tone = _ref9.tone;
  return /*#__PURE__*/React.createElement("button", {
    className: "composer-action ".concat(tone || ""),
    type: "button",
    "aria-label": label
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 19,
    strokeWidth: 1.75
  }), label !== "Attach" && /*#__PURE__*/React.createElement("span", null, label));
}
function ChatComposer() {
  return /*#__PURE__*/React.createElement("section", {
    className: "composer glass"
  }, /*#__PURE__*/React.createElement("p", {
    className: "composer-placeholder"
  }, "Ask me to create, edit, or improve your presentation..."), /*#__PURE__*/React.createElement("div", {
    className: "composer-controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "composer-actions"
  }, /*#__PURE__*/React.createElement(ComposerAction, {
    icon: Paperclip,
    label: "Attach"
  }), /*#__PURE__*/React.createElement(ComposerAction, {
    icon: Upload,
    label: "Upload File",
    tone: "blue"
  }), /*#__PURE__*/React.createElement(ComposerAction, {
    icon: BookOpen,
    label: "Add Rubric",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(ComposerAction, {
    icon: FileText,
    label: "Add Sources",
    tone: "cyan"
  }), /*#__PURE__*/React.createElement(ComposerAction, {
    icon: Mic,
    label: "Voice Input",
    tone: "cyan"
  })), /*#__PURE__*/React.createElement("div", {
    className: "send-controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "composer-model",
    type: "button"
  }, BACKEND_MODEL_LABEL, " ", /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 16,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("button", {
    className: "send-button",
    type: "button",
    "aria-label": "Send message"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: SendHorizontal,
    size: 23,
    strokeWidth: 1.8
  })))));
}
function DashboardPopover(_ref0) {
  var title = _ref0.title,
    items = _ref0.items,
    _ref0$align = _ref0.align,
    align = _ref0$align === void 0 ? "center" : _ref0$align;
  return /*#__PURE__*/React.createElement("div", {
    className: "dashboard-popover glass ".concat(align),
    role: "menu",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("strong", null, title), items.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      className: item.tone || "",
      type: "button",
      role: "menuitem",
      key: item.label,
      onClick: item.onClick
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: item.icon,
      size: 15,
      strokeWidth: 1.8
    }), /*#__PURE__*/React.createElement("span", null, item.label));
  }));
}
function UtilityPopoverSlot(_ref1) {
  var id = _ref1.id,
    activePanel = _ref1.activePanel,
    children = _ref1.children,
    popover = _ref1.popover;
  return /*#__PURE__*/React.createElement("span", {
    className: "utility-popover-slot"
  }, children, activePanel === id && popover);
}
function BottomUtilityBar(_ref10) {
  var _ref10$showProfile = _ref10.showProfile,
    showProfile = _ref10$showProfile === void 0 ? false : _ref10$showProfile,
    _ref10$interactive = _ref10.interactive,
    interactive = _ref10$interactive === void 0 ? false : _ref10$interactive,
    controlledActivePanel = _ref10.activePanel,
    onTogglePanel = _ref10.onTogglePanel,
    onOpenAccountSettings = _ref10.onOpenAccountSettings,
    onOpenPrivacy = _ref10.onOpenPrivacy,
    onOpenSignOut = _ref10.onOpenSignOut;
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    localActivePanel = _React$useState2[0],
    setLocalActivePanel = _React$useState2[1];
  var activePanel = controlledActivePanel === undefined ? localActivePanel : controlledActivePanel;
  var togglePanel = function togglePanel(panel) {
    if (onTogglePanel) {
      onTogglePanel(activePanel === panel ? null : panel);
      return;
    }
    setLocalActivePanel(activePanel === panel ? null : panel);
  };
  var closePanel = function closePanel() {
    if (onTogglePanel) {
      onTogglePanel(null);
    } else {
      setLocalActivePanel(null);
    }
  };
  var panelItems = {
    profile: [{
      icon: UserCog,
      label: "Account Settings"
    }, {
      icon: Settings,
      label: "Privacy & Security"
    }, {
      icon: ArrowRight,
      label: "Sign Out"
    }],
    plan: [{
      icon: Box,
      label: "Plan Details"
    }, {
      icon: CreditCard,
      label: "Billing"
    }, {
      icon: Sparkles,
      label: "Premium Benefits"
    }],
    help: [{
      icon: CircleHelp,
      label: "Help Center"
    }, {
      icon: BookOpen,
      label: "Tutorials"
    }, {
      icon: MessageSquareText,
      label: "Contact Support"
    }],
    notifications: [{
      icon: Bell,
      label: "No new notifications"
    }, {
      icon: CheckCircle,
      label: "Mark all as read"
    }],
    settings: [{
      icon: Settings,
      label: "Preferences"
    }, {
      icon: UserCog,
      label: "Account"
    }, {
      icon: SlidersHorizontal,
      label: "Workspace Options"
    }]
  };
  var accountItems = [{
    icon: UserCog,
    label: "Account Settings",
    onClick: function onClick() {
      closePanel();
      onOpenAccountSettings === null || onOpenAccountSettings === void 0 || onOpenAccountSettings();
    }
  }, {
    icon: Settings,
    label: "Privacy & Security",
    onClick: function onClick() {
      closePanel();
      onOpenPrivacy === null || onOpenPrivacy === void 0 || onOpenPrivacy();
    }
  }, {
    icon: ArrowRight,
    label: "Sign Out",
    onClick: function onClick() {
      closePanel();
      onOpenSignOut === null || onOpenSignOut === void 0 || onOpenSignOut();
    }
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "bottom-utility glass",
    "aria-label": "Utility navigation"
  }, showProfile && /*#__PURE__*/React.createElement(UtilityPopoverSlot, {
    id: "profile",
    activePanel: activePanel,
    popover: /*#__PURE__*/React.createElement(DashboardPopover, {
      title: "Account Options",
      items: accountItems,
      align: "arrow"
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "bottom-profile",
    "aria-label": "Ava Johnson account"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement(UserRoundIcon, null)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Ava Johnson"), /*#__PURE__*/React.createElement("small", null, "Student")), /*#__PURE__*/React.createElement("button", {
    className: "profile-arrow-button",
    type: "button",
    "aria-label": "Open account options",
    onClick: function onClick() {
      return interactive && togglePanel("profile");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 18,
    strokeWidth: 1.7
  })))), /*#__PURE__*/React.createElement(UtilityPopoverSlot, {
    id: "plan",
    activePanel: activePanel,
    popover: /*#__PURE__*/React.createElement(DashboardPopover, {
      title: "Premium Plan",
      items: panelItems.plan
    })
  }, /*#__PURE__*/React.createElement("button", {
    className: "plan-status",
    type: "button",
    onClick: function onClick() {
      return interactive && togglePanel("plan");
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "plan-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Box,
    size: 27,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Premium Plan"), /*#__PURE__*/React.createElement("small", null, "Valid until May 30, 2030")))), /*#__PURE__*/React.createElement("div", {
    className: "utility-actions"
  }, /*#__PURE__*/React.createElement(UtilityPopoverSlot, {
    id: "help",
    activePanel: activePanel,
    popover: /*#__PURE__*/React.createElement(DashboardPopover, {
      title: "Help",
      items: panelItems.help
    })
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return interactive && togglePanel("help");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CircleHelp,
    size: 23,
    strokeWidth: 1.55
  }), "Help")), /*#__PURE__*/React.createElement(UtilityPopoverSlot, {
    id: "notifications",
    activePanel: activePanel,
    popover: /*#__PURE__*/React.createElement(DashboardPopover, {
      title: "Notifications",
      items: panelItems.notifications
    })
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return interactive && togglePanel("notifications");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Bell,
    size: 23,
    strokeWidth: 1.55
  }), "Notifications")), /*#__PURE__*/React.createElement(UtilityPopoverSlot, {
    id: "settings",
    activePanel: activePanel,
    popover: /*#__PURE__*/React.createElement(DashboardPopover, {
      title: "Settings",
      items: panelItems.settings,
      align: "right"
    })
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return interactive && togglePanel("settings");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Settings,
    size: 24,
    strokeWidth: 1.55
  }), "Settings")))));
}
function ChatWorkspace(_ref11) {
  var onBack = _ref11.onBack;
  return /*#__PURE__*/React.createElement("main", {
    className: "workspace"
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack
  }), /*#__PURE__*/React.createElement("section", {
    className: "chat-thread",
    "aria-label": "Create Presentation chat with ".concat(BACKEND_MODEL_LABEL)
  }, /*#__PURE__*/React.createElement(ChatMessageUser, null), /*#__PURE__*/React.createElement(ChatMessageAI, null), /*#__PURE__*/React.createElement(ChatMessageAI, {
    complete: true
  })), /*#__PURE__*/React.createElement(ChatComposer, null), /*#__PURE__*/React.createElement("p", {
    className: "disclaimer"
  }, "AIPREZ AI can make mistakes. Always review important information."), /*#__PURE__*/React.createElement(BottomUtilityBar, null));
}
function DashboardHeader() {
  return /*#__PURE__*/React.createElement("header", {
    className: "dashboard-header"
  }, /*#__PURE__*/React.createElement(LogoBlock, null));
}
function NeonWave() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "dashboard-neon-wave",
    viewBox: "0 0 720 140",
    "aria-hidden": "true",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "waveBluePurple",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#005bff",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "20%",
    stopColor: "#008cff",
    stopOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "52%",
    stopColor: "#00d8ff",
    stopOpacity: "1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "78%",
    stopColor: "#7e35ff",
    stopOpacity: "1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#b42cff",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "waveGlow",
    x: "-20%",
    y: "-80%",
    width: "140%",
    height: "260%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "3.2",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    "in": "blur"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    "in": "SourceGraphic"
  })))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    strokeLinecap: "round",
    filter: "url(#waveGlow)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "wave-main",
    d: "M0 72 C95 18 178 18 270 70 S455 124 560 66 S680 18 720 34"
  }), /*#__PURE__*/React.createElement("path", {
    className: "wave-cyan",
    d: "M18 86 C118 30 190 34 288 78 S456 110 548 57 S668 26 720 44"
  }), /*#__PURE__*/React.createElement("path", {
    className: "wave-purple",
    d: "M8 58 C112 84 188 78 286 50 S452 24 552 73 S674 104 720 82"
  }), /*#__PURE__*/React.createElement("path", {
    className: "wave-faint",
    d: "M36 44 C128 58 220 62 310 42 S476 22 586 52 S684 83 720 76"
  })), /*#__PURE__*/React.createElement("g", {
    className: "wave-sparks"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "475",
    cy: "42",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "538",
    cy: "77",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "618",
    cy: "36",
    r: "1.2"
  })));
}
function DashboardInputOption(_ref12) {
  var icon = _ref12.icon,
    title = _ref12.title,
    copy = _ref12.copy,
    tone = _ref12.tone;
  return /*#__PURE__*/React.createElement("button", {
    className: "dash-input-option ".concat(tone),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 28,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("small", null, copy));
}
function DashboardHero() {
  var options = [{
    icon: Upload,
    title: "Upload File",
    copy: "PDF, DOCX, PPTX, etc.",
    tone: "blue"
  }, {
    icon: FileText,
    title: "Paste Notes",
    copy: "Type or paste your notes",
    tone: "purple"
  }, {
    icon: Mic,
    title: "Voice Input",
    copy: "Speak your topic or idea",
    tone: "cyan"
  }, {
    icon: Plus,
    title: "Drag & Drop",
    copy: "Any file or assignment",
    tone: "purple"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "dash-hero glass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-hero-copy"
  }, /*#__PURE__*/React.createElement("h2", null, "What are you", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "presenting"), " today?"), /*#__PURE__*/React.createElement("p", null, "Drop your assignment, paste your notes, or tell AI what to create."), /*#__PURE__*/React.createElement("div", {
    className: "dash-input-grid"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement(DashboardInputOption, _extends({
      key: option.title
    }, option));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dash-document",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-orbit orbit-a"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dash-orbit orbit-b"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dash-platform"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dash-doc"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))));
}
function DashboardToolCard(_ref13) {
  var icon = _ref13.icon,
    title = _ref13.title,
    description = _ref13.description,
    button = _ref13.button,
    tone = _ref13.tone,
    onClick = _ref13.onClick;
  return /*#__PURE__*/React.createElement("article", {
    className: "dash-tool-card glass ".concat(tone)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-tool-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-tool-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 58,
    strokeWidth: 1.35
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, description))), /*#__PURE__*/React.createElement("button", {
    className: "dash-tool-button",
    type: "button",
    onClick: onClick
  }, button, /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 20,
    strokeWidth: 1.75
  })));
}
function DashboardTools(_ref14) {
  var onCreatePresentation = _ref14.onCreatePresentation,
    onOpenHumanizer = _ref14.onOpenHumanizer,
    onOpenLiveNotes = _ref14.onOpenLiveNotes,
    onOpenAnalyzer = _ref14.onOpenAnalyzer;
  var cards = [{
    icon: Presentation,
    title: "Presentation Creator",
    description: "An AI tool for generating a full presentation from an assignment, notes, or uploaded file.",
    button: "Create Presentation",
    tone: "tool-blue",
    onClick: onCreatePresentation
  }, {
    icon: Sparkles,
    title: "Humanizer",
    description: "Rewrites content so it sounds natural, student-written, and less robotic.",
    button: "Humanize Text",
    tone: "tool-gold",
    onClick: onOpenHumanizer
  }, {
    icon: Mic,
    title: "Live Notes",
    description: "Records lectures and takes notes automatically.",
    button: "Start Recording",
    tone: "tool-cyan",
    onClick: onOpenLiveNotes
  }, {
    icon: TrendingUp,
    title: "Presentation Analyzer",
    description: "Analyzes a presentation and gives feedback or improvement suggestions.",
    button: "Analyze Presentation",
    tone: "tool-purple",
    onClick: onOpenAnalyzer
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "dash-tool-grid"
  }, cards.map(function (card) {
    return /*#__PURE__*/React.createElement(DashboardToolCard, _extends({
      key: card.title
    }, card));
  }));
}
function DashboardRecentCard(_ref15) {
  var title = _ref15.title,
    edited = _ref15.edited,
    variant = _ref15.variant,
    isMenuOpen = _ref15.isMenuOpen,
    onToggleMenu = _ref15.onToggleMenu,
    onOpen = _ref15.onOpen,
    onEdit = _ref15.onEdit,
    onDuplicate = _ref15.onDuplicate,
    onRemove = _ref15.onRemove;
  var menuItems = [{
    icon: Eye,
    label: "Open"
  }, {
    icon: Pencil,
    label: "Edit"
  }, {
    icon: Copy,
    label: "Duplicate"
  }, {
    icon: Trash2,
    label: "Remove",
    danger: true
  }];
  var openFromKeyboard = function openFromKeyboard(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };
  return /*#__PURE__*/React.createElement("article", {
    className: "dash-recent-card glass ".concat(isMenuOpen ? "menu-open" : ""),
    role: "button",
    tabIndex: "0",
    onClick: onOpen,
    onKeyDown: openFromKeyboard,
    "aria-label": "Open ".concat(title)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-thumb ".concat(variant)
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, edited)), /*#__PURE__*/React.createElement("button", {
    className: "dash-recent-menu-button",
    type: "button",
    "aria-label": "Open actions for ".concat(title),
    "aria-expanded": isMenuOpen,
    onClick: function onClick(event) {
      event.stopPropagation();
      onToggleMenu();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: MoreVertical,
    size: 18,
    strokeWidth: 1.8
  })), isMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dash-recent-popover glass",
    role: "menu",
    "aria-label": "".concat(title, " actions")
  }, menuItems.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      className: item.danger ? "danger" : "",
      type: "button",
      role: "menuitem",
      key: item.label,
      onClick: function onClick(event) {
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
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: item.icon,
      size: 15,
      strokeWidth: 1.8
    }), item.label);
  })));
}
function DashboardRecent(_ref16) {
  var onOpenPresentation = _ref16.onOpenPresentation,
    onEditPresentation = _ref16.onEditPresentation,
    controlledShowAll = _ref16.showAll,
    onToggleShowAll = _ref16.onToggleShowAll,
    activeDashboardPanel = _ref16.activeDashboardPanel,
    onOpenFloatingMenu = _ref16.onOpenFloatingMenu;
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    openMenu = _React$useState4[0],
    setOpenMenu = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    localShowAll = _React$useState6[0],
    setLocalShowAll = _React$useState6[1];
  var showAll = controlledShowAll === undefined ? localShowAll : controlledShowAll;
  var toggleShowAll = function toggleShowAll() {
    if (onToggleShowAll) {
      onToggleShowAll();
      return;
    }
    setLocalShowAll(!showAll);
  };
  var _React$useState7 = React.useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    presentations = _React$useState8[0],
    setPresentations = _React$useState8[1];
  var duplicatePresentation = function duplicatePresentation(title) {
    var source = presentations.find(function (presentation) {
      return presentation.title === title;
    });
    if (!source) return;
    setPresentations([_objectSpread(_objectSpread({}, source), {}, {
      title: "".concat(source.title, " Copy"),
      edited: "Created now"
    })].concat(_toConsumableArray(presentations)));
    setOpenMenu(null);
  };
  var removePresentation = function removePresentation(title) {
    setPresentations(presentations.filter(function (presentation) {
      return presentation.title !== title;
    }));
    setOpenMenu(null);
  };
  var visiblePresentations = presentations.slice(0, 4);
  React.useEffect(function () {
    if (activeDashboardPanel) {
      setOpenMenu(null);
    }
  }, [activeDashboardPanel]);
  return /*#__PURE__*/React.createElement("section", {
    className: "dash-recent-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-section-heading"
  }, /*#__PURE__*/React.createElement("h2", null, "Recent Presentations"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-expanded": showAll,
    onClick: function onClick(event) {
      event.preventDefault();
      toggleShowAll();
    }
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 17,
    strokeWidth: 1.8
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dash-recent-grid"
  }, visiblePresentations.length > 0 ? visiblePresentations.map(function (presentation, index) {
    return /*#__PURE__*/React.createElement(DashboardRecentCard, _extends({
      key: "".concat(presentation.title, "-").concat(index)
    }, presentation, {
      isMenuOpen: openMenu === presentation.title,
      onToggleMenu: function onToggleMenu() {
        onOpenFloatingMenu === null || onOpenFloatingMenu === void 0 || onOpenFloatingMenu();
        setOpenMenu(openMenu === presentation.title ? null : presentation.title);
      },
      onOpen: onOpenPresentation,
      onEdit: onEditPresentation,
      onDuplicate: duplicatePresentation,
      onRemove: removePresentation
    }));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "dash-empty-presentations glass"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Presentation,
    size: 25,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", null, "There are no presentations yet."))), showAll && /*#__PURE__*/React.createElement("div", {
    className: "recent-view-all-popover glass"
  }, /*#__PURE__*/React.createElement("strong", null, "All Recent Presentations"), presentations.length > 0 ? presentations.map(function (presentation, index) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: "".concat(presentation.title, "-").concat(index),
      onClick: onOpenPresentation
    }, /*#__PURE__*/React.createElement("span", {
      className: "dash-thumb ".concat(presentation.variant)
    }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("span", {
      className: "recent-view-copy"
    }, /*#__PURE__*/React.createElement("span", null, presentation.title), /*#__PURE__*/React.createElement("small", null, presentation.edited)));
  }) : /*#__PURE__*/React.createElement("p", {
    className: "recent-empty-copy"
  }, "There are no presentations yet.")));
}
function DashboardScreen(_ref17) {
  var onCreatePresentation = _ref17.onCreatePresentation,
    onOpenHumanizer = _ref17.onOpenHumanizer,
    onOpenLiveNotes = _ref17.onOpenLiveNotes,
    onOpenAnalyzer = _ref17.onOpenAnalyzer,
    onOpenPresentation = _ref17.onOpenPresentation,
    onOpenAccountSettings = _ref17.onOpenAccountSettings,
    onOpenPrivacy = _ref17.onOpenPrivacy,
    onOpenSignOut = _ref17.onOpenSignOut;
  var _React$useState9 = React.useState(null),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    dashboardPanel = _React$useState0[0],
    setDashboardPanel = _React$useState0[1];
  return /*#__PURE__*/React.createElement("main", {
    className: "dashboard-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-cyan"
  }), /*#__PURE__*/React.createElement(NeonWave, null), /*#__PURE__*/React.createElement(DashboardHeader, null), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-shell"
  }, /*#__PURE__*/React.createElement(DashboardHero, null), /*#__PURE__*/React.createElement(DashboardTools, {
    onCreatePresentation: onCreatePresentation,
    onOpenHumanizer: onOpenHumanizer,
    onOpenLiveNotes: onOpenLiveNotes,
    onOpenAnalyzer: onOpenAnalyzer
  }), /*#__PURE__*/React.createElement(DashboardRecent, {
    onOpenPresentation: onOpenPresentation,
    onEditPresentation: onCreatePresentation,
    showAll: dashboardPanel === "recent",
    onToggleShowAll: function onToggleShowAll() {
      return setDashboardPanel(dashboardPanel === "recent" ? null : "recent");
    },
    activeDashboardPanel: dashboardPanel,
    onOpenFloatingMenu: function onOpenFloatingMenu() {
      return setDashboardPanel(null);
    }
  })), /*#__PURE__*/React.createElement(BottomUtilityBar, {
    showProfile: true,
    interactive: true,
    activePanel: dashboardPanel,
    onTogglePanel: setDashboardPanel,
    onOpenAccountSettings: onOpenAccountSettings,
    onOpenPrivacy: onOpenPrivacy,
    onOpenSignOut: onOpenSignOut
  }));
}
function CreatePresentationScreen(_ref18) {
  var onBack = _ref18.onBack,
    onOpenHumanizer = _ref18.onOpenHumanizer,
    onOpenLiveNotes = _ref18.onOpenLiveNotes,
    onOpenAnalyzer = _ref18.onOpenAnalyzer;
  return /*#__PURE__*/React.createElement("div", {
    className: "chat-dashboard humanizer-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-cyan"
  }), /*#__PURE__*/React.createElement(Sidebar, {
    onNewPresentation: function onNewPresentation() {},
    activeTool: "Presentation Creator",
    onOpenHumanizer: onOpenHumanizer,
    onOpenLiveNotes: onOpenLiveNotes,
    onOpenAnalyzer: onOpenAnalyzer
  }), /*#__PURE__*/React.createElement(HumanizerWorkspace, {
    onBack: onBack,
    mode: "create",
    title: "Create Presentation",
    subtitle: "Preview, generate, and refine your academic presentation with ".concat(BACKEND_MODEL_LABEL, "."),
    settingsLabel: "Presentation Settings"
  }));
}
function HumanizerTopBar(_ref19) {
  var onBack = _ref19.onBack,
    _ref19$title = _ref19.title,
    title = _ref19$title === void 0 ? "Humanizer" : _ref19$title,
    _ref19$subtitle = _ref19.subtitle,
    subtitle = _ref19$subtitle === void 0 ? "Make AI-generated content sound natural, original, and undetectable." : _ref19$subtitle,
    _ref19$settingsLabel = _ref19.settingsLabel,
    settingsLabel = _ref19$settingsLabel === void 0 ? "Humanizer Settings" : _ref19$settingsLabel,
    _ref19$headingIcon = _ref19.headingIcon,
    headingIcon = _ref19$headingIcon === void 0 ? Sparkles : _ref19$headingIcon,
    _ref19$headingTone = _ref19.headingTone,
    headingTone = _ref19$headingTone === void 0 ? "gold" : _ref19$headingTone;
  return /*#__PURE__*/React.createElement("header", {
    className: "humanizer-top-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "humanizer-title-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back-dashboard-box",
    type: "button",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Home,
    size: 18,
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("span", null, "Back to Dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-heading ".concat(headingTone)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: headingIcon,
    size: 42,
    strokeWidth: 1.45
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, subtitle)))), /*#__PURE__*/React.createElement("button", {
    className: "model-pill",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: WandSparkles,
    size: 17,
    strokeWidth: 1.75
  }), /*#__PURE__*/React.createElement("span", null, "AI Model:"), /*#__PURE__*/React.createElement("strong", null, BACKEND_MODEL_LABEL), /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 16,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("button", {
    className: "settings-button",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Settings,
    size: 19,
    strokeWidth: 1.7
  }), settingsLabel));
}
function SlideThumbnail(_ref20) {
  var number = _ref20.number,
    title = _ref20.title,
    active = _ref20.active,
    tone = _ref20.tone,
    onClick = _ref20.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: "slide-thumb ".concat(active ? "active" : "", " ").concat(tone),
    type: "button",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("span", null, number)));
}
function PresentationPreview(_ref21) {
  var _ref21$mode = _ref21.mode,
    mode = _ref21$mode === void 0 ? "humanizer" : _ref21$mode;
  var isCreate = mode === "create";
  var _React$useState1 = React.useState(0),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    activeSlide = _React$useState10[0],
    setActiveSlide = _React$useState10[1];
  var slide = PRESENTATION_SLIDES[activeSlide];
  var visibleStart = Math.min(Math.max(activeSlide - 1, 0), PRESENTATION_SLIDES.length - 4);
  var visibleSlides = PRESENTATION_SLIDES.slice(visibleStart, visibleStart + 4);
  return /*#__PURE__*/React.createElement("section", {
    className: "preview-panel glass"
  }, /*#__PURE__*/React.createElement("h3", null, "Presentation Preview"), /*#__PURE__*/React.createElement("div", {
    className: "upload-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ppt-icon"
  }, "P3"), /*#__PURE__*/React.createElement("strong", null, "American Revolution Presentation.pptx"), /*#__PURE__*/React.createElement("span", {
    className: "uploaded-pill"
  }, "Uploaded ", /*#__PURE__*/React.createElement(Icon, {
    icon: CheckCircle,
    size: 15,
    strokeWidth: 1.8
  }))), /*#__PURE__*/React.createElement("div", {
    className: "main-slide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide-copy"
  }, /*#__PURE__*/React.createElement("h4", null, slide.title), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("p", null, slide.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "revolution-art"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }), /*#__PURE__*/React.createElement("span", {
    className: "soldier one"
  }), /*#__PURE__*/React.createElement("span", {
    className: "soldier two"
  }), /*#__PURE__*/React.createElement("span", {
    className: "smoke"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "slide-strip"
  }, /*#__PURE__*/React.createElement("button", {
    className: "prev-slide",
    type: "button",
    "aria-label": "Previous slide",
    onClick: function onClick() {
      return setActiveSlide(getPreviousSlide);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 25,
    strokeWidth: 1.7
  })), visibleSlides.map(function (item, index) {
    return /*#__PURE__*/React.createElement(SlideThumbnail, {
      key: item.title,
      number: visibleStart + index + 1,
      title: item.thumb,
      active: activeSlide === visibleStart + index,
      tone: index === 0 ? "warm" : index === 1 ? "city" : index === 2 ? "battle" : "church",
      onClick: function onClick() {
        return setActiveSlide(visibleStart + index);
      }
    });
  }), /*#__PURE__*/React.createElement("button", {
    className: "next-slide",
    type: "button",
    "aria-label": "Next slide",
    onClick: function onClick() {
      return setActiveSlide(getNextSlide);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 25,
    strokeWidth: 1.7
  }))), /*#__PURE__*/React.createElement("div", {
    className: "preview-controls"
  }, /*#__PURE__*/React.createElement("span", null, "Slide ", activeSlide + 1, " of ", PRESENTATION_SLIDES.length), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Monitor,
    size: 18,
    strokeWidth: 1.6
  }), "Fit"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: NotebookText,
    size: 18,
    strokeWidth: 1.6
  }), "Notes"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Full screen"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Maximize,
    size: 18,
    strokeWidth: 1.6
  }))), /*#__PURE__*/React.createElement("p", {
    className: "preview-tip"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Lightbulb,
    size: 19,
    strokeWidth: 1.65
  }), isCreate ? "Review your presentation and use the AI panel to generate or refine the deck." : "Review your presentation and use the AI panel to humanize the content."));
}
function HumanizerMessage(_ref22) {
  var children = _ref22.children,
    ai = _ref22.ai,
    time = _ref22.time,
    _ref22$aiIcon = _ref22.aiIcon,
    aiIcon = _ref22$aiIcon === void 0 ? Sparkles : _ref22$aiIcon;
  return /*#__PURE__*/React.createElement("article", {
    className: "humanizer-message ".concat(ai ? "ai" : "user")
  }, ai && /*#__PURE__*/React.createElement("span", {
    className: "spark-avatar"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: aiIcon,
    size: 26,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-bubble glass"
  }, /*#__PURE__*/React.createElement("p", null, children), time && /*#__PURE__*/React.createElement("time", null, time)));
}
function InstructionComposer(_ref23) {
  var isCreate = _ref23.isCreate,
    label = _ref23.label,
    buttonLabel = _ref23.buttonLabel,
    _ref23$icon = _ref23.icon,
    icon = _ref23$icon === void 0 ? Sparkles : _ref23$icon,
    _ref23$placeholder = _ref23.placeholder,
    placeholder = _ref23$placeholder === void 0 ? "Type your instructions here..." : _ref23$placeholder,
    _ref23$tool = _ref23.tool,
    tool = _ref23$tool === void 0 ? "humanizer" : _ref23$tool;
  var _React$useState11 = React.useState(""),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    instructions = _React$useState12[0],
    setInstructions = _React$useState12[1];
  var _React$useState13 = React.useState(""),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    aiResult = _React$useState14[0],
    setAiResult = _React$useState14[1];
  var _React$useState15 = React.useState("idle"),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    status = _React$useState16[0],
    setStatus = _React$useState16[1];
  var maxCharacters = 1000;
  var keepViewportPinned = function keepViewportPinned() {
    requestAnimationFrame(function () {
      return window.scrollTo(0, 0);
    });
    window.setTimeout(function () {
      return window.scrollTo(0, 0);
    }, 40);
  };
  var submitInstructions = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var trimmed, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            trimmed = instructions.trim();
            if (!(!trimmed || status === "loading")) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setStatus("loading");
            setAiResult("");
            _context.p = 2;
            _context.n = 3;
            return callAiprezAI(tool, trimmed, {
              app: "AIPREZ",
              model: BACKEND_MODEL_ID
            });
          case 3:
            result = _context.v;
            setAiResult(result.output || "AIPREZ AI finished, but no response text was returned.");
            setStatus("complete");
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            setAiResult("".concat(_t.message, " If this is running on GitHub Pages, deploy the repo on Vercel and set OPENAI_API_KEY there."));
            setStatus("error");
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function submitInstructions() {
      return _ref24.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "humanizer-composer"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: instructions,
    maxLength: maxCharacters,
    onFocus: keepViewportPinned,
    onInput: keepViewportPinned,
    onChange: function onChange(event) {
      setInstructions(event.target.value);
      keepViewportPinned();
    },
    placeholder: placeholder,
    "aria-label": label
  }), /*#__PURE__*/React.createElement("span", null, instructions.length, " / ", maxCharacters), aiResult && /*#__PURE__*/React.createElement("p", {
    className: "ai-result ".concat(status === "error" ? "error" : "")
  }, aiResult), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: status === "loading" || !instructions.trim(),
    onClick: submitInstructions
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 22,
    strokeWidth: 1.6
  }), status === "loading" ? "Thinking..." : buttonLabel || (isCreate ? "Create Presentation" : "Humanize Presentation")));
}
function AISpecifications(_ref25) {
  var _ref25$mode = _ref25.mode,
    mode = _ref25$mode === void 0 ? "humanizer" : _ref25$mode;
  var isCreate = mode === "create";
  return /*#__PURE__*/React.createElement("aside", {
    className: "ai-spec-panel glass"
  }, /*#__PURE__*/React.createElement("h3", null, "AI Specifications"), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-chat"
  }, /*#__PURE__*/React.createElement(HumanizerMessage, {
    ai: true
  }, isCreate ? "Hi Ava! I'm your AI presentation assistant. Tell me what you'd like to create or change in this presentation." : "Hi Ava! I'm your AI presentation assistant. Tell me how you'd like me to humanize your presentation."), /*#__PURE__*/React.createElement(HumanizerMessage, {
    time: "2:40 PM"
  }, isCreate ? "Create a presentation about the American Revolution." : "Make the slides more natural and less AI-sounding."), /*#__PURE__*/React.createElement(HumanizerMessage, {
    time: "2:41 PM"
  }, isCreate ? "Use 12 slides and include causes, events, and impact." : "Keep the wording simple and student-friendly."), /*#__PURE__*/React.createElement(HumanizerMessage, {
    time: "2:41 PM"
  }, isCreate ? "Add speaker notes and make it class-ready." : "Make it sound more conversational and engaging."), /*#__PURE__*/React.createElement(HumanizerMessage, {
    time: "2:42 PM"
  }, isCreate ? "Use a historical visual style." : "Remove overly formal language."), /*#__PURE__*/React.createElement(HumanizerMessage, {
    ai: true,
    time: "2:42 PM"
  }, isCreate ? "Got it! I'll generate and refine your presentation based on your instructions." : "Got it! I'll humanize your presentation based on your instructions.")), /*#__PURE__*/React.createElement(InstructionComposer, {
    isCreate: isCreate,
    label: isCreate ? "Create presentation instructions" : "Humanizer instructions",
    tool: isCreate ? "create-presentation" : "humanizer"
  }));
}
function HumanizerWorkspace(_ref26) {
  var onBack = _ref26.onBack,
    _ref26$mode = _ref26.mode,
    mode = _ref26$mode === void 0 ? "humanizer" : _ref26$mode,
    title = _ref26.title,
    subtitle = _ref26.subtitle,
    settingsLabel = _ref26.settingsLabel;
  return /*#__PURE__*/React.createElement("main", {
    className: "humanizer-workspace"
  }, /*#__PURE__*/React.createElement(HumanizerTopBar, {
    onBack: onBack,
    title: title,
    subtitle: subtitle,
    settingsLabel: settingsLabel
  }), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-content"
  }, /*#__PURE__*/React.createElement(PresentationPreview, {
    mode: mode
  }), /*#__PURE__*/React.createElement(AISpecifications, {
    mode: mode
  })), /*#__PURE__*/React.createElement(BottomUtilityBar, null));
}
function Waveform() {
  var bars = [16, 22, 12, 28, 18, 24, 14, 34, 20, 26, 18, 30, 12, 24, 36, 18, 28, 22, 16, 38, 46, 20, 26, 18, 14, 22, 28, 16, 20, 24, 18, 14, 16, 20, 22, 24, 18, 16];
  return /*#__PURE__*/React.createElement("div", {
    className: "waveform",
    "aria-hidden": "true"
  }, bars.map(function (height, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: "".concat(height, "-").concat(index),
      style: {
        height: height
      }
    });
  }));
}
function RecordingControl(_ref27) {
  var icon = _ref27.icon,
    label = _ref27.label,
    danger = _ref27.danger;
  return /*#__PURE__*/React.createElement("button", {
    className: "recording-control ".concat(danger ? "danger" : ""),
    type: "button",
    "aria-label": label
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 28,
    strokeWidth: 1.7
  }), label === "Bookmark" && /*#__PURE__*/React.createElement("span", null, label));
}
function TranscriptColumn(_ref28) {
  var language = _ref28.language,
    rows = _ref28.rows;
  return /*#__PURE__*/React.createElement("section", {
    className: "transcript-column glass"
  }, /*#__PURE__*/React.createElement("button", {
    className: "language-select",
    type: "button"
  }, language, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 15,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    className: "transcript-list"
  }, rows.map(function (row) {
    return /*#__PURE__*/React.createElement("div", {
      className: "transcript-row",
      key: "".concat(language, "-").concat(row.time)
    }, /*#__PURE__*/React.createElement("time", null, row.time), /*#__PURE__*/React.createElement("p", null, row.text));
  })));
}
function RecordingPanel() {
  var englishRows = [{
    time: "00:00",
    text: "Good morning everyone, today we're going to discuss the key causes of the American Revolution."
  }, {
    time: "00:08",
    text: "The first major cause was taxation without representation. The British government imposed taxes on the colonies..."
  }, {
    time: "00:18",
    text: "Another important factor was the restriction of trade through acts like the Navigation Acts..."
  }, {
    time: "00:27",
    text: "Finally, the desire for independence and self-governance played a crucial role in the colonies' decision..."
  }];
  var spanishRows = [{
    time: "00:00",
    text: "Buenos dias a todos, hoy vamos a discutir las causas clave de la Revolucion Americana."
  }, {
    time: "00:08",
    text: "La primera causa importante fue la imposicion de impuestos sin representacion. El gobierno britanico impuso impuestos a las colonias..."
  }, {
    time: "00:18",
    text: "Otro factor importante fue la restriccion del comercio a traves de leyes como las Leyes de Navegacion..."
  }, {
    time: "00:27",
    text: "Finalmente, el deseo de independencia y autogobierno jugo un papel crucial en la decision de las colonias..."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "recording-panel glass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recording-status"
  }, /*#__PURE__*/React.createElement("h3", null, "Recording"), /*#__PURE__*/React.createElement("span", {
    className: "recording-dot"
  }), /*#__PURE__*/React.createElement("time", null, "00:03:45")), /*#__PURE__*/React.createElement(Waveform, null), /*#__PURE__*/React.createElement("div", {
    className: "recording-controls"
  }, /*#__PURE__*/React.createElement(RecordingControl, {
    icon: Pause,
    label: "Pause"
  }), /*#__PURE__*/React.createElement(RecordingControl, {
    icon: Square,
    label: "Stop",
    danger: true
  }), /*#__PURE__*/React.createElement(RecordingControl, {
    icon: Bookmark,
    label: "Bookmark"
  })), /*#__PURE__*/React.createElement("div", {
    className: "notes-tabs",
    role: "tablist",
    "aria-label": "Live notes views"
  }, /*#__PURE__*/React.createElement("button", {
    className: "active",
    type: "button"
  }, "Transcription"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Translation"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Summary")), /*#__PURE__*/React.createElement("div", {
    className: "transcript-grid"
  }, /*#__PURE__*/React.createElement(TranscriptColumn, {
    language: "English (Detected)",
    rows: englishRows
  }), /*#__PURE__*/React.createElement("button", {
    className: "translate-swap",
    type: "button",
    "aria-label": "Swap languages"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 22,
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 22,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement(TranscriptColumn, {
    language: "Spanish",
    rows: spanishRows
  })));
}
function LiveNotesAction(_ref29) {
  var children = _ref29.children;
  return /*#__PURE__*/React.createElement("button", {
    className: "live-action-card",
    type: "button"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    icon: ClipboardList,
    size: 18,
    strokeWidth: 1.7
  })), children, /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 17,
    strokeWidth: 1.6
  }));
}
function LiveNotesBotMessage(_ref30) {
  var children = _ref30.children;
  return /*#__PURE__*/React.createElement("article", {
    className: "live-notes-bot-message"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-mic-avatar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mic-glyph",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-bubble glass"
  }, /*#__PURE__*/React.createElement("p", null, children)));
}
function LiveNotesSpecifications() {
  return /*#__PURE__*/React.createElement("aside", {
    className: "ai-spec-panel live-notes-spec glass"
  }, /*#__PURE__*/React.createElement("h3", null, "AI Specifications"), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-chat"
  }, /*#__PURE__*/React.createElement(LiveNotesBotMessage, null, "Hi Ava! I'm your AI live notes assistant. Tell me how you'd like me to process your recording."), /*#__PURE__*/React.createElement(LiveNotesAction, null, "Focus on key points and main ideas."), /*#__PURE__*/React.createElement(LiveNotesAction, null, "Generate a concise summary."), /*#__PURE__*/React.createElement(LiveNotesAction, null, "Identify action items and tasks."), /*#__PURE__*/React.createElement(LiveNotesAction, null, "Translate to a specific language."), /*#__PURE__*/React.createElement("span", {
    className: "live-note-time"
  }, "2:35 PM")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "live-composer-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-mic-avatar compact"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mic-glyph",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h3", null, "Create Live Notes")), /*#__PURE__*/React.createElement(InstructionComposer, {
    label: "Live notes instructions",
    buttonLabel: "Create Live Notes",
    icon: Mic,
    tool: "live-notes"
  })));
}
function LiveNotesWorkspace(_ref31) {
  var onBack = _ref31.onBack;
  return /*#__PURE__*/React.createElement("main", {
    className: "humanizer-workspace live-notes-workspace"
  }, /*#__PURE__*/React.createElement(HumanizerTopBar, {
    onBack: onBack,
    title: "Live Notes",
    subtitle: "Record, transcribe, and translate your lectures, meetings, and ideas in real time.",
    settingsLabel: "Live Notes Settings",
    headingIcon: Mic,
    headingTone: "live"
  }), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-content live-notes-content"
  }, /*#__PURE__*/React.createElement(RecordingPanel, null), /*#__PURE__*/React.createElement(LiveNotesSpecifications, null)), /*#__PURE__*/React.createElement(BottomUtilityBar, null));
}
function LiveNotesScreen(_ref32) {
  var onBack = _ref32.onBack,
    onCreatePresentation = _ref32.onCreatePresentation,
    onOpenHumanizer = _ref32.onOpenHumanizer,
    onOpenLiveNotes = _ref32.onOpenLiveNotes,
    onOpenAnalyzer = _ref32.onOpenAnalyzer;
  return /*#__PURE__*/React.createElement("div", {
    className: "chat-dashboard humanizer-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-cyan"
  }), /*#__PURE__*/React.createElement(Sidebar, {
    onNewPresentation: onCreatePresentation,
    activeTool: "Live Notes",
    onOpenHumanizer: onOpenHumanizer,
    onOpenLiveNotes: onOpenLiveNotes,
    onOpenAnalyzer: onOpenAnalyzer
  }), /*#__PURE__*/React.createElement(LiveNotesWorkspace, {
    onBack: onBack
  }));
}
function AnalyzerSlideDeck() {
  var _React$useState17 = React.useState(0),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    activeSlide = _React$useState18[0],
    setActiveSlide = _React$useState18[1];
  var slide = PRESENTATION_SLIDES[activeSlide];
  var thumbs = PRESENTATION_SLIDES.slice(0, 6);
  return /*#__PURE__*/React.createElement("section", {
    className: "analyzer-preview glass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "analyzer-file-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ppt-icon"
  }, "P"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "American Revolution Presentation.pptx"), /*#__PURE__*/React.createElement("small", null, "12 slides \u2022 8.4 MB \u2022 Uploaded May 15, 2025 10:24 AM")), /*#__PURE__*/React.createElement("span", {
    className: "uploaded-pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CheckCircle,
    size: 15,
    strokeWidth: 1.8
  }), "Uploaded")), /*#__PURE__*/React.createElement("div", {
    className: "analyzer-main-slide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "analyzer-slide-copy"
  }, /*#__PURE__*/React.createElement("h3", null, slide.title), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("p", null, slide.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "analyzer-battle-art"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }), /*#__PURE__*/React.createElement("span", {
    className: "soldier one"
  }), /*#__PURE__*/React.createElement("span", {
    className: "soldier two"
  }), /*#__PURE__*/React.createElement("span", {
    className: "smoke"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "analyzer-thumb-strip"
  }, /*#__PURE__*/React.createElement("button", {
    className: "analyzer-slide-arrow",
    type: "button",
    "aria-label": "Previous slide",
    onClick: function onClick() {
      return setActiveSlide(getPreviousSlide);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 22,
    strokeWidth: 1.7
  })), thumbs.map(function (thumb, index) {
    return /*#__PURE__*/React.createElement("button", {
      className: "analyzer-thumb ".concat(activeSlide === index ? "active" : ""),
      type: "button",
      key: thumb.title,
      onClick: function onClick() {
        return setActiveSlide(index);
      }
    }, /*#__PURE__*/React.createElement("span", null, thumb.thumb), /*#__PURE__*/React.createElement("strong", null, index + 1));
  }), /*#__PURE__*/React.createElement("button", {
    className: "analyzer-slide-arrow next",
    type: "button",
    "aria-label": "Next slide",
    onClick: function onClick() {
      return setActiveSlide(getNextSlide);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 22,
    strokeWidth: 1.7
  }))), /*#__PURE__*/React.createElement("p", {
    className: "analyzer-slide-count"
  }, "Slide ", activeSlide + 1, " of ", PRESENTATION_SLIDES.length));
}
function AnalyzerScoreCard(_ref33) {
  var icon = _ref33.icon,
    label = _ref33.label,
    score = _ref33.score,
    tone = _ref33.tone;
  return /*#__PURE__*/React.createElement("article", {
    className: "analyzer-score-card glass ".concat(tone)
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 22,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
    className: "score-ring",
    style: {
      "--score": "".concat(score, "%")
    }
  }, /*#__PURE__*/React.createElement("strong", null, score), /*#__PURE__*/React.createElement("small", null, "/100")));
}
function AnalyzerMainPanel() {
  var scores = [{
    icon: Sparkles,
    label: "Overall Score",
    score: 85,
    tone: "purple-score"
  }, {
    icon: FileText,
    label: "Content Quality",
    score: 88,
    tone: "blue-score"
  }, {
    icon: SlidersHorizontal,
    label: "Structure & Flow",
    score: 82,
    tone: "cyan-score"
  }, {
    icon: Monitor,
    label: "Visual Design",
    score: 78,
    tone: "pink-score"
  }, {
    icon: Mic,
    label: "Delivery Impact",
    score: 89,
    tone: "teal-score"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "analyzer-main-panel"
  }, /*#__PURE__*/React.createElement(AnalyzerSlideDeck, null), /*#__PURE__*/React.createElement("div", {
    className: "analyzer-score-grid"
  }, scores.map(function (score) {
    return /*#__PURE__*/React.createElement(AnalyzerScoreCard, _extends({
      key: score.label
    }, score));
  })), /*#__PURE__*/React.createElement("p", {
    className: "preview-tip analyzer-tip"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CircleHelp,
    size: 17,
    strokeWidth: 1.65
  }), "Review your presentation and use the AI panel to get suggestions and feedback."));
}
function AnalyzerActionBubble(_ref34) {
  var children = _ref34.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "analyzer-user-bubble glass"
  }, children);
}
function AnalyzerSpecifications() {
  return /*#__PURE__*/React.createElement("aside", {
    className: "ai-spec-panel analyzer-spec glass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "analyzer-spec-heading"
  }, /*#__PURE__*/React.createElement("h3", null, "AI Specifications"), /*#__PURE__*/React.createElement(Icon, {
    icon: Maximize,
    size: 17,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-chat analyzer-chat"
  }, /*#__PURE__*/React.createElement("article", {
    className: "analyzer-bot-message"
  }, /*#__PURE__*/React.createElement("span", {
    className: "analyzer-bot-avatar"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: TrendingUp,
    size: 25,
    strokeWidth: 1.55
  })), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-bubble glass"
  }, /*#__PURE__*/React.createElement("p", null, "Hi Ava! I'm your AI presentation analyzer. Tell me how you'd like me to review your presentation."))), /*#__PURE__*/React.createElement(AnalyzerActionBubble, null, "Check slide clarity and visual balance."), /*#__PURE__*/React.createElement(AnalyzerActionBubble, null, "Flag slides with too much text."), /*#__PURE__*/React.createElement(AnalyzerActionBubble, null, "Give feedback on structure and speaking flow."), /*#__PURE__*/React.createElement(AnalyzerActionBubble, null, "Suggest improvements for the conclusion."), /*#__PURE__*/React.createElement("article", {
    className: "analyzer-bot-message"
  }, /*#__PURE__*/React.createElement("span", {
    className: "analyzer-bot-avatar"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: TrendingUp,
    size: 25,
    strokeWidth: 1.55
  })), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-bubble glass"
  }, /*#__PURE__*/React.createElement("p", null, "Got it! I'll analyze your presentation and highlight strengths, weak spots, and recommendations.")))), /*#__PURE__*/React.createElement(InstructionComposer, {
    label: "Analyzer specifications",
    placeholder: "Type your specifications here...",
    buttonLabel: "Analyze Presentation",
    icon: Sparkles,
    tool: "analyzer"
  }));
}
function AnalyzerWorkspace(_ref35) {
  var onBack = _ref35.onBack;
  return /*#__PURE__*/React.createElement("main", {
    className: "humanizer-workspace analyzer-workspace"
  }, /*#__PURE__*/React.createElement(HumanizerTopBar, {
    onBack: onBack,
    title: "Presentation Analyzer",
    subtitle: "Review your presentation and get AI-powered feedback on structure, visuals, clarity, and delivery.",
    settingsLabel: "Analyzer Settings",
    headingIcon: TrendingUp,
    headingTone: "analyzer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "humanizer-content analyzer-content"
  }, /*#__PURE__*/React.createElement(AnalyzerMainPanel, null), /*#__PURE__*/React.createElement(AnalyzerSpecifications, null)), /*#__PURE__*/React.createElement(BottomUtilityBar, null));
}
function AnalyzerScreen(_ref36) {
  var onBack = _ref36.onBack,
    onCreatePresentation = _ref36.onCreatePresentation,
    onOpenHumanizer = _ref36.onOpenHumanizer,
    onOpenLiveNotes = _ref36.onOpenLiveNotes,
    onOpenAnalyzer = _ref36.onOpenAnalyzer;
  return /*#__PURE__*/React.createElement("div", {
    className: "chat-dashboard humanizer-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-cyan"
  }), /*#__PURE__*/React.createElement(Sidebar, {
    onNewPresentation: onCreatePresentation,
    activeTool: "Presentation Analyzer",
    onOpenHumanizer: onOpenHumanizer,
    onOpenLiveNotes: onOpenLiveNotes,
    onOpenAnalyzer: onOpenAnalyzer
  }), /*#__PURE__*/React.createElement(AnalyzerWorkspace, {
    onBack: onBack
  }));
}
function PresentationViewerScreen(_ref37) {
  var onBack = _ref37.onBack;
  var _React$useState19 = React.useState(0),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    activeSlide = _React$useState20[0],
    setActiveSlide = _React$useState20[1];
  var slide = PRESENTATION_SLIDES[activeSlide];
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
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
    return function () {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onBack]);
  return /*#__PURE__*/React.createElement("main", {
    className: "presentation-viewer-screen"
  }, /*#__PURE__*/React.createElement("button", {
    className: "viewer-back-button",
    type: "button",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Home,
    size: 17,
    strokeWidth: 1.7
  }), "Dashboard"), /*#__PURE__*/React.createElement("button", {
    className: "viewer-nav-button previous",
    type: "button",
    "aria-label": "Previous slide",
    onClick: function onClick() {
      return setActiveSlide(getPreviousSlide);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 30,
    strokeWidth: 1.55
  })), /*#__PURE__*/React.createElement("section", {
    className: "viewer-stage",
    "aria-label": "Presentation viewer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "viewer-slide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "viewer-slide-copy"
  }, /*#__PURE__*/React.createElement("h1", null, slide.title), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("p", null, slide.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "viewer-art"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }), /*#__PURE__*/React.createElement("span", {
    className: "soldier one"
  }), /*#__PURE__*/React.createElement("span", {
    className: "soldier two"
  }), /*#__PURE__*/React.createElement("span", {
    className: "smoke"
  })))), /*#__PURE__*/React.createElement("button", {
    className: "viewer-nav-button next",
    type: "button",
    "aria-label": "Next slide",
    onClick: function onClick() {
      return setActiveSlide(getNextSlide);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 30,
    strokeWidth: 1.55
  })), /*#__PURE__*/React.createElement("div", {
    className: "viewer-slide-status"
  }, "Slide ", activeSlide + 1, " of ", PRESENTATION_SLIDES.length));
}
function HumanizerScreen(_ref38) {
  var onBack = _ref38.onBack,
    onCreatePresentation = _ref38.onCreatePresentation,
    onOpenHumanizer = _ref38.onOpenHumanizer,
    onOpenLiveNotes = _ref38.onOpenLiveNotes,
    onOpenAnalyzer = _ref38.onOpenAnalyzer;
  return /*#__PURE__*/React.createElement("div", {
    className: "chat-dashboard humanizer-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-cyan"
  }), /*#__PURE__*/React.createElement(Sidebar, {
    onNewPresentation: onCreatePresentation,
    activeTool: "Humanizer",
    onOpenHumanizer: onOpenHumanizer,
    onOpenLiveNotes: onOpenLiveNotes,
    onOpenAnalyzer: onOpenAnalyzer
  }), /*#__PURE__*/React.createElement(HumanizerWorkspace, {
    onBack: onBack
  }));
}
function SettingsSidebar(_ref39) {
  var onBack = _ref39.onBack;
  var recent = [];
  var tools = [["Presentation Creator", Presentation, "cyan"], ["Humanizer", Sparkles, "purple"], ["Live Notes", Mic, "cyan"], ["Presentation Analyzer", ChartNoAxesCombined, "purple"], ["History", History, "gold"]];
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar settings-sidebar"
  }, /*#__PURE__*/React.createElement(LogoBlock, null), /*#__PURE__*/React.createElement("button", {
    className: "new-presentation",
    type: "button",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Plus,
    size: 21,
    strokeWidth: 1.8
  }), /*#__PURE__*/React.createElement("span", null, "New Presentation")), /*#__PURE__*/React.createElement("section", {
    className: "settings-sidebar-section"
  }, /*#__PURE__*/React.createElement("h2", null, "Recent Presentations"), /*#__PURE__*/React.createElement("div", {
    className: "settings-recent-list"
  }, recent.length > 0 ? recent.map(function (_ref40, index) {
    var _ref41 = _slicedToArray(_ref40, 4),
      title = _ref41[0],
      edited = _ref41[1],
      icon = _ref41[2],
      tone = _ref41[3];
    return /*#__PURE__*/React.createElement("button", {
      className: index === 0 ? "selected" : "",
      type: "button",
      key: title
    }, /*#__PURE__*/React.createElement("span", {
      className: "settings-row-icon ".concat(tone)
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      size: 19,
      strokeWidth: 1.7
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("small", null, edited)));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "settings-empty-state"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Presentation,
    size: 18,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", null, "There are no presentations yet."))), recent.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "settings-sidebar-link",
    type: "button"
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 15,
    strokeWidth: 1.7
  }))), /*#__PURE__*/React.createElement("section", {
    className: "settings-sidebar-section tools"
  }, /*#__PURE__*/React.createElement("h2", null, "Tools"), /*#__PURE__*/React.createElement("div", {
    className: "settings-tool-list"
  }, tools.map(function (_ref42) {
    var _ref43 = _slicedToArray(_ref42, 3),
      label = _ref43[0],
      icon = _ref43[1],
      tone = _ref43[2];
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: label
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      size: 19,
      strokeWidth: 1.7
    }), /*#__PURE__*/React.createElement("span", null, label));
  }))), /*#__PURE__*/React.createElement("button", {
    className: "settings-sidebar-account glass",
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement(UserRoundIcon, null)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Ava Johnson"), /*#__PURE__*/React.createElement("small", null, "Student")), /*#__PURE__*/React.createElement(Icon, {
    icon: ChevronDown,
    size: 18,
    strokeWidth: 1.6
  })));
}
function AccountSettingsWorkspace(_ref44) {
  var onBack = _ref44.onBack,
    _ref44$mode = _ref44.mode,
    mode = _ref44$mode === void 0 ? "settings" : _ref44$mode;
  var accountRows = [["Personal Information", "Update your name, email, and details", UserRound, "blue"], ["Security", "Password, 2FA, and login activity", Settings, "cyan"], ["Notifications", "Manage email and app notifications", Bell, "purple"], ["Privacy", "Control your data and privacy settings", UserCog, "purple"], ["Linked Accounts", "Connect Google, Microsoft, and more", BookOpen, "purple"], ["Appearance", "Choose theme and display options", Monitor, "purple"], ["Language", "Select your preferred language", CircleHelp, "purple"]];
  var recentLogins = [["MacBook Pro 14” Dover, NH", "This device", "Now"], ["iPhone 15 Pro – Dover, NH", "", "May 17, 2025"], ["iPad Air – Boston, MA", "", "May 12, 2025"]];
  return /*#__PURE__*/React.createElement("main", {
    className: "account-settings-workspace"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-neon-wave",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("header", {
    className: "account-settings-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-title-stack"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back-dashboard-box settings-back-button",
    type: "button",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Home,
    size: 18,
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("span", null, "Back to Dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "account-settings-title"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    icon: Settings,
    size: 34,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Account Settings"), /*#__PURE__*/React.createElement("p", null, "Manage your account, preferences, and plan."))))), /*#__PURE__*/React.createElement("section", {
    className: "settings-main-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "settings-profile-card glass"
  }, /*#__PURE__*/React.createElement("h3", null, "Profile"), /*#__PURE__*/React.createElement("div", {
    className: "settings-profile-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "settings-large-avatar"
  }, /*#__PURE__*/React.createElement(UserRoundIcon, null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Change profile photo"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Pencil,
    size: 17,
    strokeWidth: 1.8
  }))), /*#__PURE__*/React.createElement("div", {
    className: "settings-profile-copy"
  }, /*#__PURE__*/React.createElement("h4", null, "Ava Johnson"), /*#__PURE__*/React.createElement("p", null, "Student"), /*#__PURE__*/React.createElement("small", null, "ava.johnson@email.com"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Pencil,
    size: 17,
    strokeWidth: 1.8
  }), "Edit Profile")))), /*#__PURE__*/React.createElement("article", {
    className: "settings-billing-card glass"
  }, /*#__PURE__*/React.createElement("h3", null, "Plan & Billing"), /*#__PURE__*/React.createElement("div", {
    className: "billing-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "settings-plan-cube"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Box,
    size: 39,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Premium Plan"), /*#__PURE__*/React.createElement("small", null, "Valid until May 30, 2030")), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Manage Plan")), /*#__PURE__*/React.createElement("div", {
    className: "billing-meter wide"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "74%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "billing-stats"
  }, [["Storage Used", "12.4 GB / 100 GB", "20%", CreditCard, "purple"], ["AI Credits", "8,450 / 10,000", "78%", Sparkles, "cyan"], ["Usage This Month", "78%", "78%", ChartNoAxesCombined, "purple"]].map(function (_ref45) {
    var _ref46 = _slicedToArray(_ref45, 5),
      label = _ref46[0],
      value = _ref46[1],
      percent = _ref46[2],
      icon = _ref46[3],
      tone = _ref46[4];
    return /*#__PURE__*/React.createElement("div", {
      className: "billing-stat",
      key: label
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      size: 28,
      strokeWidth: 1.7
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, label), /*#__PURE__*/React.createElement("small", null, value), /*#__PURE__*/React.createElement("div", {
      className: "billing-meter ".concat(tone)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: percent
      }
    }))), label === "Usage This Month" && /*#__PURE__*/React.createElement(Icon, {
      icon: ArrowRight,
      size: 18,
      strokeWidth: 1.7
    }));
  }))), /*#__PURE__*/React.createElement("article", {
    className: "settings-panel settings-account-panel glass"
  }, /*#__PURE__*/React.createElement("h3", null, "Account Settings"), /*#__PURE__*/React.createElement("div", {
    className: "settings-row-list"
  }, accountRows.map(function (_ref47) {
    var _ref48 = _slicedToArray(_ref47, 4),
      title = _ref48[0],
      copy = _ref48[1],
      icon = _ref48[2],
      tone = _ref48[3];
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: title
    }, /*#__PURE__*/React.createElement("span", {
      className: "settings-row-icon ".concat(tone)
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      size: 21,
      strokeWidth: 1.7
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("small", null, copy)), /*#__PURE__*/React.createElement(Icon, {
      icon: ArrowRight,
      size: 17,
      strokeWidth: 1.7
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "settings-middle-column"
  }, /*#__PURE__*/React.createElement("article", {
    className: "settings-panel glass"
  }, /*#__PURE__*/React.createElement("h3", null, "AI Preferences", /*#__PURE__*/React.createElement(Icon, {
    icon: Sparkles,
    size: 22,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    className: "settings-preference-list"
  }, [["AI Model", BACKEND_MODEL_LABEL, Sparkles], ["Response Style", "Balanced", NotebookText], ["Default Tone", "Academic", Mic]].map(function (_ref49) {
    var _ref50 = _slicedToArray(_ref49, 3),
      label = _ref50[0],
      value = _ref50[1],
      icon = _ref50[2];
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: label
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      size: 20,
      strokeWidth: 1.7
    }), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("strong", null, value), /*#__PURE__*/React.createElement(Icon, {
      icon: ChevronDown,
      size: 15,
      strokeWidth: 1.7
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "settings-preference-toggle"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: WandSparkles,
    size: 20,
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("span", null, "Auto-Suggestions"), /*#__PURE__*/React.createElement("strong", null, "On"), /*#__PURE__*/React.createElement("button", {
    className: "account-toggle active",
    type: "button",
    "aria-label": "Auto-Suggestions"
  })))), /*#__PURE__*/React.createElement("article", {
    className: "settings-panel glass"
  }, /*#__PURE__*/React.createElement("h3", null, "Recent Login Activity"), /*#__PURE__*/React.createElement("div", {
    className: "login-list"
  }, recentLogins.map(function (_ref51) {
    var _ref52 = _slicedToArray(_ref51, 3),
      device = _ref52[0],
      badge = _ref52[1],
      date = _ref52[2];
    return /*#__PURE__*/React.createElement("div", {
      className: "login-row",
      key: device
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: Monitor,
      size: 18,
      strokeWidth: 1.55
    }), /*#__PURE__*/React.createElement("span", null, device), badge && /*#__PURE__*/React.createElement("em", null, badge), /*#__PURE__*/React.createElement("small", null, date));
  })), /*#__PURE__*/React.createElement("button", {
    className: "activity-link",
    type: "button"
  }, "View all activity ", /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 15,
    strokeWidth: 1.7
  })))), /*#__PURE__*/React.createElement("article", {
    className: "settings-panel settings-quick-card glass"
  }, /*#__PURE__*/React.createElement("h3", null, "Quick Actions"), /*#__PURE__*/React.createElement("div", {
    className: "settings-quick-list"
  }, [["Export My Data", FileText], ["Download My Presentations", Upload], ["Manage Devices", Monitor]].map(function (_ref53) {
    var _ref54 = _slicedToArray(_ref53, 2),
      label = _ref54[0],
      icon = _ref54[1];
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: label
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      size: 22,
      strokeWidth: 1.65
    }), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement(Icon, {
      icon: ArrowRight,
      size: 17,
      strokeWidth: 1.7
    }));
  }), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 22,
    strokeWidth: 1.65
  }), /*#__PURE__*/React.createElement("span", null, "Log Out"), /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowRight,
    size: 17,
    strokeWidth: 1.7
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "settings-bottom-bar glass"
  }, /*#__PURE__*/React.createElement("button", {
    className: "plan-status",
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "plan-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Box,
    size: 27,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Premium Plan"), /*#__PURE__*/React.createElement("small", null, "Valid until May 30, 2030"))), /*#__PURE__*/React.createElement("div", {
    className: "settings-bottom-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CircleHelp,
    size: 23,
    strokeWidth: 1.55
  }), "Help"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Bell,
    size: 23,
    strokeWidth: 1.55
  }), "Notifications"), /*#__PURE__*/React.createElement("button", {
    className: "active",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Settings,
    size: 25,
    strokeWidth: 1.55
  }), "Settings"))));
}
function AccountSettingsScreen(_ref55) {
  var onBack = _ref55.onBack,
    mode = _ref55.mode;
  return /*#__PURE__*/React.createElement("div", {
    className: "chat-dashboard humanizer-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ambient ambient-cyan"
  }), /*#__PURE__*/React.createElement(SettingsSidebar, {
    onBack: onBack
  }), /*#__PURE__*/React.createElement(AccountSettingsWorkspace, {
    onBack: onBack,
    mode: mode
  }));
}
function App() {
  var _React$useState21 = React.useState(function () {
      var params = new URLSearchParams(window.location.search);
      return params.get("screen") || "dashboard";
    }),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    screen = _React$useState22[0],
    setScreen = _React$useState22[1];
  React.useEffect(function () {
    var updateScale = function updateScale() {
      var isPhone = window.innerWidth <= 760;
      var scale = isPhone ? 1 : Math.min(1, window.innerWidth / 1280, window.innerHeight / 720);
      document.documentElement.style.setProperty("--app-scale", scale.toFixed(3));
      window.scrollTo(0, 0);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return function () {
      return window.removeEventListener("resize", updateScale);
    };
  }, []);
  if (screen === "create") {
    return /*#__PURE__*/React.createElement(CreatePresentationScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      },
      onOpenHumanizer: function onOpenHumanizer() {
        return setScreen("humanizer");
      },
      onOpenLiveNotes: function onOpenLiveNotes() {
        return setScreen("live-notes");
      },
      onOpenAnalyzer: function onOpenAnalyzer() {
        return setScreen("analyzer");
      }
    });
  }
  if (screen === "humanizer") {
    return /*#__PURE__*/React.createElement(HumanizerScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      },
      onCreatePresentation: function onCreatePresentation() {
        return setScreen("create");
      },
      onOpenHumanizer: function onOpenHumanizer() {
        return setScreen("humanizer");
      },
      onOpenLiveNotes: function onOpenLiveNotes() {
        return setScreen("live-notes");
      },
      onOpenAnalyzer: function onOpenAnalyzer() {
        return setScreen("analyzer");
      }
    });
  }
  if (screen === "live-notes") {
    return /*#__PURE__*/React.createElement(LiveNotesScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      },
      onCreatePresentation: function onCreatePresentation() {
        return setScreen("create");
      },
      onOpenHumanizer: function onOpenHumanizer() {
        return setScreen("humanizer");
      },
      onOpenLiveNotes: function onOpenLiveNotes() {
        return setScreen("live-notes");
      },
      onOpenAnalyzer: function onOpenAnalyzer() {
        return setScreen("analyzer");
      }
    });
  }
  if (screen === "analyzer") {
    return /*#__PURE__*/React.createElement(AnalyzerScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      },
      onCreatePresentation: function onCreatePresentation() {
        return setScreen("create");
      },
      onOpenHumanizer: function onOpenHumanizer() {
        return setScreen("humanizer");
      },
      onOpenLiveNotes: function onOpenLiveNotes() {
        return setScreen("live-notes");
      },
      onOpenAnalyzer: function onOpenAnalyzer() {
        return setScreen("analyzer");
      }
    });
  }
  if (screen === "presentation-viewer") {
    return /*#__PURE__*/React.createElement(PresentationViewerScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      }
    });
  }
  if (screen === "account-settings") {
    return /*#__PURE__*/React.createElement(AccountSettingsScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      },
      mode: "settings"
    });
  }
  if (screen === "privacy-security") {
    return /*#__PURE__*/React.createElement(AccountSettingsScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      },
      mode: "privacy"
    });
  }
  if (screen === "sign-out") {
    return /*#__PURE__*/React.createElement(AccountSettingsScreen, {
      onBack: function onBack() {
        return setScreen("dashboard");
      },
      mode: "signout"
    });
  }
  return /*#__PURE__*/React.createElement(DashboardScreen, {
    onCreatePresentation: function onCreatePresentation() {
      return setScreen("create");
    },
    onOpenHumanizer: function onOpenHumanizer() {
      return setScreen("humanizer");
    },
    onOpenLiveNotes: function onOpenLiveNotes() {
      return setScreen("live-notes");
    },
    onOpenAnalyzer: function onOpenAnalyzer() {
      return setScreen("analyzer");
    },
    onOpenPresentation: function onOpenPresentation() {
      return setScreen("presentation-viewer");
    },
    onOpenAccountSettings: function onOpenAccountSettings() {
      return setScreen("account-settings");
    },
    onOpenPrivacy: function onOpenPrivacy() {
      return setScreen("privacy-security");
    },
    onOpenSignOut: function onOpenSignOut() {
      return setScreen("sign-out");
    }
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));