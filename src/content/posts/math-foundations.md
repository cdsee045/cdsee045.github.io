---
title: "前言：数学基础"
slug: "math-foundations"
date: "2026-05-19"
category: "控制理论"
description: "拉普拉斯变换、Z 变换等数学基础笔记。"
draft: false
legacySlug: "理论/控制理论/理论/控制理论/数学基础"
---

## 拉普拉斯变换

### 定义

其中$s=i+\sigma\omega$

### 常见函数的拉氏变换

|  | 时域 | 频域 |
| --- | --- | --- |
| 脉冲函数 | $\delta$ | $1$ |
| 阶跃函数 | $u(t)$ | $\frac{1}{s} $ |
| 斜坡函数 | $t$ | $\frac{1}{s^2} $ |
| 抛物线函数 | $\frac{1}{2} t^2$ | $\frac{1}{s^3}$ |
| 指数函数 | $e^{-at}$ | $\frac{1}{s+a}$ |
| 正弦函数 | $\sin(\omega x)$ | $\frac{w}{s^2+\omega ^2}$ |
| 余弦函数 | $\cos(\omega x)$ | $\frac{s}{s^2+\omega ^2}$ |

### 性质

线性性质<br>微分性质<br>积分性质<br>位移定理<br>初值定理<br>**终值定理**<br>卷积定理

## $\delta$函数

### 性质

- $f(t)\delta(t-a)=f(a)\delta(t-a)$<br><br>
- $\int_{-\infty}^{\infty}f(t)\delta(t-a)=f(t-a)$

## Z变换

### 从拉普拉斯到Z变换

连续信号经过采样得到离散信号

同取拉普拉斯变换后有

记$z=e^{Ts}$<br>得到

![](https://cdn.jsdelivr.net/gh/cdsee045/blog-images/img/2026.5.26.21.14.jpeg)<br>线性连续系统 用微分方程描述，用拉氏变换分析系统动态和稳态特性。<br>线性离散系统 用差分方程描述，用Z变换分析系统的动态和稳态特性。<br>Z变换可由拉氏变换导出，可看成是拉氏变换的变形 ,二者的关系为$Z=e^{sT}$

### Z变换的求解方法

#### 定义法（级数求和）

#### 部分分式法

#### 留数法
