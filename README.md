# Design System Catalog Hub (设计系统目录库)

一个高品质、内容优先、自包含且零依赖的网页设计规范与排版引擎目录库。本仓库收集并整理了七种不同美学风格的现代设计规范，点击即可直接预览其排版、间距、色板和核心组件。

![Screenshot](screenshot.png)

- **GitHub 仓库:** [holynova/my-design-system](https://github.com/holynova/my-design-system)
- **在线预览:** [holynova.github.io/my-design-system](https://holynova.github.io/my-design-system/)

---

## 目录中收录的设计系统

本目录库收录了以下七种极具代表性的设计规范：

1. **HTML Effectiveness Spec** ([html-effectiveness.html](pages/html-effectiveness.html))
   - **特点**: 秉持温暖极简主义的文档级阅读设计系统，采用经典的 Serif / Sans / Mono 字体定位与 1.5px 极细实线修饰。
   - **美学风格**: 人文报刊排版，象牙黄背景与黏土红点缀。

2. **潮流周刊 by Tw93 Spec** ([tw93.html](pages/tw93.html))
   - **特点**: 专为中文长文排版打造的文学画报感设计系统，原生使用开源“霞鹜文楷”与红铜色点缀，并利用 `prefers-color-scheme` 原生支持暗色模式。
   - **美学风格**: 赫蹏中文排版，沉静、典雅。

3. **Linear Spec** ([linear.html](pages/linear.html))
   - **特点**: 面向软件开发团队的暗色首选设计系统，以深邃星空蓝黑为底色，结合 Bento Grids 和悬浮时光学渐变（Cursor Radial Glow Tracker）营造极客质感。
   - **美学风格**: 工程师优先、高响应速度、科技发光紫色调。

4. **Apple HIG Spec** ([apple.html](pages/apple.html))
   - **特点**: 遵循苹果官方人机交互指南（HIG）的经典网页设计，强调极致的内容遵从、宽留白、SF Pro 动态字阶与毛玻璃顶栏层级。
   - **美学风格**: 高端产品感、简洁淡雅。

5. **Tailwind CSS Spec** ([tailwindcss.html](pages/tailwindcss.html))
   - **特点**: 以实用优先为核心的现代响应式工具链，基于 Indigo 靛蓝与丰富且高对比的原子化色板。
   - **美学风格**: 现代、活力、高效，搭配深灰色的背景与 Indigo、Sky 强调色。

6. **Notion Spec** ([notion.html](pages/notion.html))
   - **特点**: 秉持无干扰极极简原则的块状文档搭建系统，强调单色黑白灰与温和的马卡龙色标。
   - **美学风格**: 块状组装结构、无干扰极简、温暖素雅。

7. **Vue.js Spec** ([vue.html](pages/vue.html))
   - **特点**: 基于 VitePress 驱动的现代渐进式文档设计系统，融合翡翠绿与深邃碳灰，以及标志性的提示框容器。
   - **美学风格**: 翡翠绿与深灰色搭配，极简且高强度的阅读感。

---

## 核心特性

- **自包含与零依赖**：每一个设计规范（HTML）都是完全独立的单文件，所有样式、字体加载和脚本均在文件内部实现，无需网络构建即可离线完美运行。
- **全新交互卡片**：主页采用自适应响应式网格布局，卡片悬浮触发品牌主题色的渐变和指向箭头微动（`transform: translate(2px, -2px)`），点击即可在新标签页中打开。
- **一键复制 Markdown 规范**：每个设计规范的详情页均集成了一键复制 Markdown 文本的按钮（“Copy Spec” / “复制规范”），直接嵌入了 raw spec 文本，带成功反馈动画。
- **原生 Back 返回导航**：子页面右上角或导航条中加入了与该设计系统风格完全契合的返回按钮，无缝返回目录主页。
- **优雅的暗色模式**：潮流周刊和 Linear 设计规范完美支持系统级暗色模式切换。

---

## 项目结构

为了保持仓库整洁，项目的文件结构进行了分层优化：

```
.
├── index.html                  # 主目录 Hub 页面
├── package.json                # 项目依赖及截图脚本
├── README.md                   # 项目文档
├── screenshot.png              # 仓库自动生成的最新预览截图
├── pages/                      # 详情展示页面 (HTML)
│   ├── html-effectiveness.html
│   ├── tw93.html
│   ├── linear.html
│   ├── apple.html
│   ├── tailwindcss.html
│   ├── notion.html
│   └── vue.html
└── specs/                      # 原始设计系统规范 (Markdown 纯文本)
    ├── html-effectiveness.md
    ├── tw93.md
    ├── linear.md
    ├── apple.md
    ├── tailwindcss.md
    ├── notion.md
    └── vue.md
```
