---
title: "latex符号对照表"
slug: "latex-symbols"
date: "2026-05-28"
category: "Markdown"
description: "LaTeX 数学符号速查表。"
draft: false
legacySlug: "工具/Markdown/工具/markdown/latex"
---

# 📑 LaTeX 数学符号全量速查手册 (完整版)

---

## 一、 函数、符号及特殊字符

### 1. 声调 / 变音符号 (Accents)

| LaTeX 代码 | 符号效果 | 说明 | LaTeX 代码 | 符号效果 | 说明 |
| --- | --- | --- | --- | --- | --- |
| `\dot{a}` | $\dot{a}$ | 上点 | `\hat{a}` | $\hat{a}$ | 尖角符 |
| `\ddot{a}` | $\ddot{a}$ | 双点 | `\widehat{abc}` | $\widehat{abc}$ | 宽尖角 |
| `\acute{a}` | $\acute{a}$ | 锐音 | `\vec{a}` | $\vec{a}$ | 向量 |
| `\grave{a}` | $\grave{a}$ | 重音 | `\widetilde{abc}` | $\widetilde{abc}$ | 宽波浪 |
| `\check{a}` | $\check{a}$ | 抑扬符 | `\utilde{AB}` | $\utilde{AB}$ | 下颚化 |
| `\breve{a}` | $\breve{a}$ | 短音符 | `\widecheck{ac}` | $\widecheck{ac}$ | 宽抑扬 |
| `\tilde{a}` | $\tilde{a}$ | 上波浪 | `\mathring{g}` | $\mathring{g}$ | 上圆圈 |
| `\bar{a}` | $\bar{a}$ | 杠符 | `\underline{X}` | $\underline{X}$ | 下划线 |

### 2. 标准函数 (Standard Functions)

| LaTeX 代码 | 符号效果 | 说明 |
| --- | --- | --- |
| `\exp_a b` | $\exp_a b$ | 指数 |
| `\ln c` | $\ln c$ | 自然对数 |
| `\lg d` | $\lg d$ | 常用对数 |
| `\log_{10} f` | $\log_{10} f$ | 底数为10的对数 |
| `\sin a` | $\sin a$ | 正弦 |
| `\cos b` | $\cos b$ | 余弦 |
| `\tan c` | $\tan c$ | 正切 |
| `\cot d` | $\cot d$ | 余切 |
| `\sec e` | $\sec e$ | 正割 |
| `\csc f` | $\csc f$ | 余割 |
| `\arcsin a` | $\arcsin a$ | 反正弦 |
| `\arccos b` | $\arccos b$ | 反余弦 |
| `\arctan c` | $\arctan c$ | 反正切 |
| `\sinh a` | $\sinh a$ | 双曲正弦 |
| `\cosh b` | $\cosh b$ | 双曲余弦 |
| `\tanh c` | $\tanh c$ | 双曲正切 |
| `\operatorname{sgn} r` | $\operatorname{sgn} r$ | 符号函数 |

### 3. 极限 (Limits)

| LaTeX 代码 | 符号效果 | LaTeX 代码 | 符号效果 |
| --- | --- | --- | --- |
| `\min x` | $\min x$ | `\max y` | $\max y$ |
| `\inf s` | $\inf s$ | `\sup t` | $\sup t$ |
| `\lim u` | $\lim u$ | `\liminf v` | $\liminf v$ |
| `\limsup w` | $\limsup w$ | `\det m` | $\det m$ |
| `\arg\max` | $\arg\max$ | `\arg\min` | $\arg\min$ |

### 4. 投射 (Injection / Projection)

| LaTeX 代码 | 符号效果 | 说明 |
| --- | --- | --- |
| `\ker\phi` | $\ker\phi$ | 核 |
| `\injlim` | $\injlim$ | 余极限 |
| `\varinjlim` | $\varinjlim$ | 归纳极限 |
| `\projlim` | $\projlim$ | 射影极限 |
| `\varprojlim` | $\varprojlim$ | 逆极限 |

### 5. 微分及导数 (Calculus & Derivatives)

| LaTeX 代码 | 符号效果 | 说明 |
| --- | --- | --- |
| `f'` | $f’$ | 一阶导 |
| `f''` | $f’’$ | 二阶导 |
| `\dot{y}` | $\dot{y}$ | 时间导数 |
| `\ddot{y}` | $\ddot{y}$ | 二阶时间导 |
| `\frac{dy}{dx}` | $\frac{dy}{dx}$ | 导数分式 |
| `\frac{\partial y}{\partial x}` | $\frac{\partial y}{\partial x}$ | 偏导数 |
| `\nabla` | $\nabla$ | 梯度/算子 |

### 6. 类字母符号及常数 (Letter-like Symbols)

| LaTeX 代码 | 符号效果 | 说明 |
| --- | --- | --- |
| `\infty` | $\infty$ | 无穷大 |
| `\partial` | $\partial$ | 偏微分 |
| `\ell` | $\ell$ | 手写体l |
| `\Im` | $\Im$ | 虚部 |
| `\Re` | $\Re$ | 实部 |
| `\aleph` | $\aleph$ | 阿列夫数 |
| `\hbar` | $\hbar$ | 普朗克常数 |

### 7. 模算数 (Modular Arithmetic)

| LaTeX 代码 | 符号效果 | 说明 |
| --- | --- | --- |
| `a \pmod n` | $a \pmod n$ | 括号模 |
| `a \bmod n` | $a \bmod n$ | 无括号模 |
| `\gcd(a,b)` | $\gcd(a,b)$ | 最大公约数 |
| `\operatorname{lcm}(a,b)` | $\operatorname{lcm}(a,b)$ | 最小公倍数 |

### 8. 根号 (Roots)

| LaTeX 代码 | 符号效果 | 说明 |
| --- | --- | --- |
| `\sqrt{x}` | $\sqrt{x}$ | 平方根 |
| `\sqrt[n]{x}` | $\sqrt[n]{x}$ | n次方根 |

### 9. 运算符 (Operators)

| 符号 | 代码 | 符号 | 代码 |
| --- | --- | --- | --- |
| $\pm$ | `\pm` | $\mp$ | `\mp` |
| $\times$ | `\times` | $\div$ | `\div` |
| $\cdot$ | `\cdot` | $\ast$ | `\ast` |
| $\star$ | `\star$ | $\circ$ | `\circ` |
| $\bullet$ | `\bullet` | $\oplus$ | `\oplus` |
| $\otimes$ | `\otimes` | $\odot$ | `\odot` |
| $\dagger$ | `\dagger` | $\uplus$ | `\uplus` |

### 10. 集合 (Sets)

| 符号 | 代码 | 符号 | 代码 |
| --- | --- | --- | --- |
| $\in$ | `\in` | $\notin$ | `\notin` |
| $\subset$ | `\subset` | $\supset$ | `\supset` |
| $\subseteq$ | `\subseteq` | $\supseteq$ | `\supseteq` |
| $\cap$ | `\cap` | $\cup$ | `\cup` |
| $\emptyset$ | `\emptyset` | $\complement$ | `\complement` |

### 11. 关系符号 (Relations)

| 符号 | 代码 | 符号 | 代码 |
| --- | --- | --- | --- |
| $\leq$ | `\leq` | $\geq$ | `\geq` |
| $\neq$ | `\neq` | $\approx$ | `\approx` |
| $\equiv$ | `\equiv` | $\sim$ | `\sim` |
| $\cong$ | `\cong` | $\propto$ | `\propto` |
| $\perp$ | `\perp` | $\parallel$ | `\parallel` |

### 12. 几何符号 (Geometry)

| 符号 | 代码 | 符号 | 代码 |
| --- | --- | --- | --- |
| $\angle$ | `\angle` | $\perp$ | `\perp` |
| $\triangle$ | `\triangle` | $\square$ | `\square` |
| $\odot$ | `\odot$ | $\parallel$ | `\parallel` |

### 13. 逻辑符号 (Logic)

| 符号 | 代码 | 符号 | 代码 |
| --- | --- | --- | --- |
| $\forall$ | `\forall` | $\exists$ | `\exists` |
| $\neg$ | `\neg` | $\because$ | `\because` |
| $\therefore$ | `\therefore` | $\wedge$ | `\wedge` |
| $\vee$ | `\vee` | $\implies$ | `\implies` |

### 14. 箭头 (Arrows)

| 符号 | 代码 | 符号 | 代码 |
| --- | --- | --- | --- |
| $\leftarrow$ | `\leftarrow` | $\rightarrow$ | `\rightarrow` |
| $\longleftarrow$ | `\longleftarrow` | $\longrightarrow$ | `\longrightarrow` |
| $\Leftarrow$ | `\Leftarrow` | $\Rightarrow$ | `\Rightarrow` |
| $\leftrightarrow$ | `\leftrightarrow` | $\Leftrightarrow$ | `\Leftrightarrow` |
| $\uparrow$ | `\uparrow$ | $\downarrow$ | `\downarrow` |

---

## 二、 字体 (Fonts)

### 1. 希腊字母 (Greek Letters)

| 小写 | 代码 | 小写 | 代码 | 大写 | 代码 |
| --- | --- | --- | --- | --- | --- |
| $\alpha$ | `\alpha` | $\beta$ | `\beta` | $\Gamma$ | `\Gamma` |
| $\gamma$ | `\gamma` | $\delta$ | `\delta` | $\Delta$ | `\Delta` |
| $\epsilon$ | `\epsilon` | $\zeta$ | `\zeta` | $\Theta$ | `\Theta` |
| $\eta$ | `\eta` | $\theta$ | `\theta` | $\Lambda$ | `\Lambda` |
| $\lambda$ | `\lambda` | $\mu$ | `\mu` | $\Xi$ | `\Xi` |
| $\pi$ | `\pi` | $\rho$ | `\rho$ | $\Pi$ | `\Pi` |
| $\sigma$ | `\sigma` | $\tau$ | `\tau` | $\Sigma$ | `\Sigma` |
| $\phi$ | `\phi` | $\psi$ | `\psi` | $\Phi$ | `\Phi` |
| $\omega$ | `\omega` |  |  | $\Omega$ | `\Omega` |

### 2. 特殊样式字体 (Special Styles)

| 样式名称 | 代码示例 | 效果演示 |
| --- | --- | --- |
| **粗体** | `\mathbf{ABC}` | $\mathbf{ABC}$ |
| **黑板报粗体** | `\mathbb{RZN}` | $\mathbb{RZN}$ |
| **粗体希腊字母** | `\boldsymbol{\alpha}` | $\boldsymbol{\alpha}$ |
| **斜体** | `\mathit{abc}` | $\mathit{abc}$ |
| **罗马体** | `\mathrm{abc}` | $\mathrm{abc}$ |
| **花体 / 手写体** | `\mathcal{ABC}` | $\mathcal{ABC}$ |
| **Fraktur体** | `\mathfrak{ABC}` | $\mathfrak{ABC}$ |
| **打字机体** | `\mathtt{abc}` | $\mathtt{abc}$ |

---

## 三、 分数、矩阵和多行列式

### 1. 分式与叠放

| 代码 | 效果演示 |
| --- | --- |
| `\frac{a}{b}` | $\frac{a}{b}$ |
| `a \over b` | $a \over b$ |
| `{n \choose k}` | ${n \choose k}$ |

### 2. 矩阵 (Matrices)

| 类型 | 代码示例 |
| --- | --- |
| **无括号** | `\begin{matrix} a & b \\ c & d \end{matrix}` |
| **方括号** | `\begin{bmatrix} a & b \\ c & d \end{bmatrix}` |
| **圆括号** | `\begin{pmatrix} a & b \\ c & d \end{pmatrix}` |
| **行列式** | `\begin{vmatrix} a & b \\ c & d \end{vmatrix}` |

---

## 四、 括号 (Brackets)

| 符号 | 代码 | 说明 |
| --- | --- | --- |
| $($ | `(` | 左圆括号 |
| $)$ | `)` | 右圆括号 |
| $[$ | `[` | 左方括号 |
| $]$ | `]` | 右方括号 |
| ${ }$ | `\{ \}` | 大括号 |
| $\langle \rangle$ | `\langle \rangle` | 尖括号 |
| $\lceil \rceil$ | `\lceil \rceil` | 上取整 |
| $\lfloor \rfloor$ | `\lfloor \rfloor` | 下取整 |
| $\left\vert x \right\vert$ | `\left\vert x \right\vert` | 绝对值 |
| $\left\Vert x \right\Vert$ | `\left\Vert x \right\Vert$ | 范数 |

---

## 五、 上标、下标及积分

| 符号 | 代码 | 说明 |
| --- | --- | --- |
| $a^b$ | `a^b` | 上标 |
| $a_b$ | `a_b` | 下标 |
| $\sum_{i=1}^n$ | `\sum_{i=1}^n` | 求和 |
| $\prod_{i=1}^n$ | `\prod_{i=1}^n` | 求积 |
| $\int_a^b$ | `\int_a^b` | 定积分 |
| $\iint_D$ | `\iint_D` | 二重积分 |
| $\oint_L$ | `\oint_L$ | 曲线积分 |

---

更多详见：[Latex符号大全](https://www.processon.com/latex-symbol#)
