---
title: "控制系统分析"
slug: "control-system-analysis"
date: "2026-05-28"
category: "MATLAB"
description: "控制系统稳定性与分析方法笔记。"
draft: false
legacySlug: "工具/MATLAB/工具/matlab/控制系统分析"
---

# 控制系统分析

## 1. 稳定性分析

对于线性系统而言，如果一个连续系统的所有极点都位于左半s平面，那么该系统稳定；如果一个离散系统的所有极点都位于单位圆内，那么系统稳定。

### 1.1 传递函数利用极点判断系统稳定性

分析思路：使用roots()方法求特征方程的全部根，或者用tf2zp得到极点所有极点，然后使用判断根的实部与0的大小<br>例 已知闭环系统的传递函数为判断系统的稳定性<br>

```
num=[3 2 1 4 2]; den=[3 5 1 2 2 1]
[z,p,k]=tf2zp(num,den)  #转换成零极点的形式求出所有极点
pzmap(num,den)
num=find(real(p)>0);    #返回实部大于0的极点的下标，构成一个新向量
n=length(num)
if (n>0)
    disp("系统不稳定")
else
    disp("系统稳定")
end
```

<br>

例 已知离散系统的开环脉冲传递函数为

判断单位负反馈系统的稳定性<br>

```
num=[5 4 1 0.6 -3 0.5];den=[1 0 0 0 0 0];
[numc,denc]=cloop(num,den);
r=roots(denc)                #roots()求多项式方程的根
num=find(r>1)                #离散系统稳定的条件 根在单位圆内
n=length(num)
if (n>0)
    disp("系统不稳定")
else
    disp("系统稳定")
end
```

### 1.2 状态空间方程利用特征值判断系统稳定性

特征方程$f(s)=det\left\vert sI-A\right\vert=s^n+a*1s^{n-1}+…+a*{n-1}s+a_n=0$<br>由此得到的根即为系统闭环极点

### 1.3 状态空间方程利用李雅普诺夫第二法判断稳定性

对于线性连续系统 李雅普诺夫方程求解函数为lyap()<br>对于线性离散系统 李雅普诺夫方程求解函数为dlyap()

---

## 2. 时域分析

需要下载”Statistics and Machine Learning Toolbox”<br>|函数名|功能|函数名|功能|<br>|:—-:|:—-:|:—-:|:—-:|<br>|gensig()|输入信号|initial()|求连续系统的零输入响应|<br>|step()|求连续系统的单位阶跃响应|dinitial()|求离散系统的零输入响应|<br>|dstep()|求离散系统的单位脉冲响应|lsim()|求连续系统对任意输入响应|<br>|impulse()|求连续系统的单位脉冲响应|dlsim()|求离散系统对任意输入响应<br>|dimpulse()|求离散系统的单位脉冲响应

### 2.1任意信号函数

```
type:信号类型 sin 正弦波 square 方波 pluse 脉冲序列
Ta周期  Tf采样时间  T采样时间
[u,t]=gensig(type,Ta)
[u,t]=gensig(type,Ta,Tf,T)
```

`[u,t]=gensig('square',5,30,0.1) #生成一个周期为5s 持续时间为30s，采样时间为0.1s的方波`

### 2.2系统的单位阶跃响应

#### 连续系统step()

```
t 仿真时间向量 y输出响应 x 状态变量 仅在状态空间模型下有效
[y,x,t]=step(num,den,t)
[y,x,t]=step(A,B,C,D,iu,t)
step(num,den,t)  无返回值调用时直接绘制图像
```

例 系统开环传递函数为

求该系统在单位负反馈下的阶跃响应曲线和最大超调量<br>

```
num=20;den=[1 8 36 40 0];
[numc denc]=cloop[num0,den0]
t=0:0.1:10;
[y,x,t]=step(numc,denc,t)
M=(max(y)-1)/1)*100
```

#### 离散系统dstep()

```
t 仿真时间向量 y输出响应 x 状态变量 仅在状态空间模型下有效
[y,x]=step(num,den,n)
[y,x]=step(A,B,C,D,iu,n)
step(num,den,t)  无返回值调用时直接绘制图像
```

### 2.3系统的单位脉冲响应

impulse()和dimpulse()调用格式与step()完全一致

### 2.4系统的零输入响应

### 2.5任意输入函数的响应

#### 连续系统lsim()

```
u 给定输入序列
[y,x]=lsim(num,den,u,t)
```

#### 离散系统dlsim(num,den,u,n)

## `[y,x]=dlsim(num,den,u,n)`

## 3. 根轨迹法

根轨迹指 开环系统的某一参数从0变化到无穷大时，闭环系统的特征方程的根在s平面所形成的轨迹。一般将开环增益K作为该参数。<br>|函数|说明|<br>|:—-:|:—-:|<br>|pzmap()|绘制零极点图|<br>|rlocus()|绘制根轨迹|<br>|rlocfind()|求给定根的根轨迹增益,需要先绘制根轨迹|<br>|sgrid()|绘制连续系统的阻尼系数和自然频率网络根轨迹|<br>|zgrid()|绘制离散系统的阻尼系数和自然频率网络根轨迹|

例 某负反馈系统的开环传递函数为

绘制根轨迹和栅格线，并分析系统稳定的K值范围<br>

```
num=,;den=[1 3 2 0];
rlocus(num,den);
[K,poles]=rlocusfind(num,den) #找根轨迹上点对应的开环增益
sgrid
```

---

## 4. 频域分析

线性系统受到频率为$\omega$的正弦信号激励时，输出仍为同频率的正弦信号，但幅值M与输入信号成比例，相位有一个相位差$\phi$<br>| 函数名 | 功能 | 函数名 | 功能 |<br>| :—- | :—- | :—- | :—- |<br>| **logspace()** | 产生频率向量 | **ngrid()** | 绘制等 M、N 圆网格线 |<br>| **bode()** | 连续系统的伯德图 | **sigma()** | 连续系统的奇异值频率图 |<br>| **dbode()** | 离散系统的伯德图 | **dsigma()** | 离散系统的奇异值频率图 |<br>| **nyquist()** | 连续系统的奈奎斯特图 | **freqresp()** | 求取频率响应值 |<br>| **dnyquist()** | 离散系统的奈奎斯特图 | **evalfr()** | 求取单个复数频率点处的频率响应值 |<br>| **nichols()** | 连续系统的尼科尔斯曲线 | **margin()** | 求取幅值裕量、相位裕量及对应的穿越频率 |<br>| **dnichols()** | 离散系统的尼科尔斯曲线 | | |

---

## 5. 能控型能观型分析
