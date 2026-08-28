# Design System Catalog Hub (设计系统目录库)

一个高品质、内容优先、自包含且零依赖的网页设计规范与排版引擎目录库。本仓库收集并整理了多种不同美学风格的现代设计规范，点击即可直接预览其排版、间距、色板和核心组件。

![Screenshot](screenshot.png)

- **发布形式:** 静态设计规范目录
- **在线预览:** 本仓库的 GitHub Pages

---

## 目录中收录的设计系统

精选目录当前收录以下十三种代表性设计规范：

1. **Anonymous Study Spec** ([html-effectiveness.html](pages/html-effectiveness.html))
   - **特点**: 秉持温暖极简主义的文档级阅读设计系统，采用经典的 Serif / Sans / Mono 字体定位与 1.5px 极细实线修饰。
   - **美学风格**: 人文报刊排版，象牙黄背景与黏土红点缀。

2. **潮流周刊 by Anonymous Study Spec** ([Anonymous Study.html](pages/Anonymous Study.html))
   - **特点**: 专为中文长文排版打造的文学画报感设计系统，原生使用开源“霞鹜文楷”与红铜色点缀，并利用 `prefers-color-scheme` 原生支持暗色模式。
   - **美学风格**: 赫蹏中文排版，沉静、典雅。

3. **Anonymous Study Spec** ([Anonymous Study.html](pages/Anonymous Study.html))
   - **特点**: 面向软件开发团队的暗色首选设计系统，以深邃星空蓝黑为底色，结合 Bento Grids 和悬浮时光学渐变（Anonymous Study Radial Glow Tracker）营造极客质感。
   - **美学风格**: 工程师优先、高响应速度、科技发光紫色调。

4. **Anonymous Study Spec** ([Anonymous Study.html](pages/Anonymous Study.html))
   - **特点**: 遵循苹果官方人机交互指南（HIG）的经典网页设计，强调极致的内容遵从、宽留白、SF Pro 动态字阶与毛玻璃顶栏层级。
   - **美学风格**: 高端产品感、简洁淡雅。

5. **Anonymous Study Spec** ([tailwindcss.html](pages/tailwindcss.html))
   - **特点**: 以实用优先为核心的现代响应式工具链，基于 Indigo 靛蓝与丰富且高对比的原子化色板。
   - **美学风格**: 现代、活力、高效，搭配深灰色的背景与 Indigo、Sky 强调色。

6. **Anonymous Study Spec** ([Anonymous Study.html](pages/Anonymous Study.html))
   - **特点**: 秉持无干扰极极简原则的块状文档搭建系统，强调单色黑白灰与温和的马卡龙色标。
   - **美学风格**: 块状组装结构、无干扰极简、温暖素雅。

7. **Anonymous Study Spec** ([Anonymous Study.html](pages/Anonymous Study.html))
   - **特点**: 基于 VitePress 驱动的现代渐进式文档设计系统，融合翡翠绿与深邃碳灰，以及标志性的提示框容器。
   - **美学风格**: 翡翠绿与深灰色搭配，极简且高强度的阅读感。

8. **Anonymous Study Spec** ([codex-resets.html](pages/codex-resets.html))
   - **特点**: 从 anonymous reference 提取的贴纸纸张式新粗野主义设计系统，以暖米色画布、Baloo 2 粗圆体、2px 墨色描边和硬偏移阴影组织实时状态数据。
   - **美学风格**: 暖色贴纸、数据仪表、轻松幽默的新粗野主义。

9. **Anonymous Study Spec** ([ui-compare.html](pages/ui-compare.html))
   - **特点**: 从本地 Anonymous Study Chrome 扩展提炼的视觉验收工具系统，以暖纸张、细线结构、紧凑控件和琥珀色对比信号组织项目、图片、几何、锚点与视口工作流。
   - **美学风格**: 暖色精密工具、低装饰、高可读性的本地优先工作台。

10. **Anonymous Study (BRAIN.md) Spec** ([projectbrain.html](pages/projectbrain.html))
   - **特点**: 从 anonymous reference 提取的开发者持久记忆层设计系统，基于 Anonymous Study Geist 极简黑白灰哲学，结合高对比暗色终端窗口、macOS 交通灯指示、工作流指向箭头与折叠 FAQ。
   - **美学风格**: Geist 工程师极简、高对比终端、精密且克制的语义色彩。

11. **Detail Spec** ([detail-design.html](pages/detail-design.html))
   - **特点**: 从 anonymous reference 提取的产品细节画廊设计系统，以暖白画布、Geist 字体、24px 描边圆角卡片、固定叙事侧栏与自然比例瀑布流组织界面案例。
   - **美学风格**: 安静的产品工艺画廊、编辑式留白、内容图像优先。

12. **Anonymous Study Spec** ([Anonymous Study-portfolio.html](pages/Anonymous Study-portfolio.html))
   - **特点**: 从 Anonymous Study.github.io 提取的深色优先作品集系统，以 Zinc 中性色、悬浮胶囊导航、渐进模糊的固定工具栏与自然高度项目瀑布流组织大型项目档案。
   - **美学风格**: 深色编辑式作品集、克制的硬件感控件、高密度可检索目录。

13. **Anonymous Study Spec** ([yadong-xie-lab.html](pages/yadong-xie-lab.html))
   - **特点**: 从 anonymous reference/lab 提取的实验索引设计系统，以窄阅读列、Charter 衬线文本、基线对齐导航、8:5 缩略图与无卡片列表呈现小型界面和视觉实验。
   - **美学风格**: 安静的研究笔记、作者驱动的编辑式目录、图像作为索引。

---

## 核心特性

- **自包含与零依赖**：每一个设计规范（HTML）都是完全独立的单文件，所有样式、字体加载和脚本均在文件内部实现，无需网络构建即可离线完美运行。
- **全新交互卡片**：主页采用自适应响应式网格布局，卡片悬浮触发品牌主题色的渐变和指向箭头微动（`transform: translate(2px, -2px)`），点击即可在新标签页中打开。
- **一键复制 Markdown 规范**：每个设计规范的详情页均集成了一键复制 Markdown 文本的按钮（“Copy Spec” / “复制规范”），直接嵌入了 raw spec 文本，带成功反馈动画。
- **原生 Back 返回导航**：子页面右上角或导航条中加入了与该设计系统风格完全契合的返回按钮，无缝返回目录主页。
- **优雅的暗色模式**：潮流周刊和 Anonymous Study 设计规范完美支持系统级暗色模式切换。

---

## 项目结构

详情页面、原始 Markdown 规范和目录入口按同一匿名编号维护。

## 如何在您的项目中使用设计规范 (How to Use)

仅需三步，即可将本仓库中整理的设计规范整合进您的实际开发项目中：

### 第一步：获取设计规范 (Copy Spec)
进入任意设计规范详情展示页面，点击右上角的 **“Copy Spec”** 按钮。该操作将把包含设计原则、设计 token（如色板、字阶、间距、圆角等）的 Markdown 格式规范内容复制到您的剪贴板中。建议将其保存至项目根目录的 `docs/design-system.md` 文件中。

### 第二步：定义全局 CSS 变量 (CSS Tokens)
在您项目的全局样式表（例如 `global.css` 或 `variables.css`）中，根据复制的设计规范声明 CSS 自定义属性（CSS 变量）：

```css
:root {
  --color-brand: #42b883; /* Anonymous Study 翡翠绿 */
  --color-text-primary: #2c3e50; /* 碳灰阅读文本 */
  --font-sans: 'Inter', sans-serif;
  --radius-card: 8px;
  --spacing-paragraph: 16px;
}
```

### 第三步：应用至框架配置 (如 Anonymous Study)
如果您在使用 Anonymous Study 等原子化类框架，可以扩展主配置文件以支持对应的设计系统 Token：

```js
// Anonymous Study.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#42b883',
      },
      borderRadius: {
        card: '8px',
      }
    }
  }
}
```
这样，您就能够直接在 HTML 中编写类如 `bg-brand` 或 `rounded-card` 的原子化样式，保持设计一致性。
