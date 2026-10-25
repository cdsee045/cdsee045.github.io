---
title: "控制系统建模"
slug: "control-system-modeling"
date: "2026-05-28"
category: "MATLAB"
description: "控制系统传递函数与状态方程建模笔记。"
draft: false
legacySlug: "工具/MATLAB/工具/matlab/控制系统建模"
---

# 控制系统的数学模型

线性系统理论中，常用的数学模型有传递函数模型(系统外部模型)、状态方程模型(系统内部模型)

## 1.传递函数模型

传递函数模型有多种形式：一般形式 多项式乘积形式 零极点增益形式 部分分式

### 1.1一般形式

#### tf() 方法

<br>

传递函数可以提取分子分母的系数而唯一的确定<br>

```
num=[b1,b2...bm,bm+1]      #分子
den=[a1,a2...an,an+1]      #分母  均按s降幂进行排列，缺位补0
G=tf(num,den)
```

#### tfdata()方法

从传递函数模型提取分子分母多项式系数<br>`[tt ff]=tfdata(G,'v') #以行向量的形式返回系数`

---

### 1.2 多项式乘积形式

分子分母是多项式乘积的形式

传递函数模型提取分子分母的多项式系数

#### 法一 s算子

```
s=tf('s')      #声明变量s代表拉普拉斯算子,之后传递函数可以按函数表达式的形式写入
G=5*(s+2.4)/(s+1)^2*(s^2+3*s+4)*(s^2+1)
```

#### 法二 conv()

```
num=5*[1 2.4]
den=conv([1 1],conv(conv([1 1],conv([1 3 4],[1 0 1])))    #conv()是二元运算符  多个因式相乘要嵌套使用
G=tf(num,den)
```

<br>

---

### 1.3 零极点增益模型

#### zpk()方法 和pzamp()方法

K为系统增益，$z_i$为零点，$p_i$为极点<br>

```
z=[z1,z2...zm]
p=[p1,p2...pn]新
k=[k]
G=zpk(z,p,k)          #零极点传递函数
pzmap(G)              #绘制零极点图
```

#### zpkdata()方法

`[z p k]=zpkdata(G,'v') 提取传递函数的零极点和系统增益`

---

### 1.4 部分分式展开模型

#### residue()方法

```
#一般形式展为部分分式
[r,p,k]=residue(b,a)  #参数： 零点系数  极点系数   #返回值： 各极点留数  极点  展开余项
#部分分式转为一般形式
[b,a]=residue(r,p,k)
```

如求系统的单位阶跃响应<br>传递函数为<br>

```
num=[1 7 24 24]
den=[1 10 35 50 24]
[R P K]=residue(num,[den,0])

输出: R=[-1;2;-1;-1;1]  P=[-4;-3;-2;-1;0]
```

<br>

得到结果为 $Y(s)=\frac{-1}{s+4}+\frac{2}{s+3}+\frac{-1}{s+1}+\frac{1}{s}$

---

## 2. 状态空间描述

#### ss()方法

系统状态空间用(A,B,C,D)矩阵组表示<br>`G=ss(A,B,C,D)`

## 3. 模型的转换

| 方法 | 介绍 |
| --- | --- |
| residue | 系数比值转化为部分分式 |
| ss2tf | 状态空间模型转化为传递函数模型 |
| ss2zp | 状态空间模型转化为零极点增益模型 |
| tf2ss | 传递函数模型转化为状态空间模型 |
| tf2zp | 传递函数模型转化为零极点增益模型 |
| zp2ss | 零极点增益模型转化为状态空间模型 |
| zp2tf | 零极点增益模型转化为传递函数模型 |

---

## 4. 模型的连接

### 4.1 并联

#### parallel()方法

- 并联两个状态空间系统<br>`[a,b,c,d]=parallel(a1,b1,c1,d1,a2,b2,c2,d2)`<br>`[a,b,c,d]=parallel(a1,b1,c1,d1,a2,b2,c2,d2,inp1,inp2,out1,out2) #多出来的参数表明第一个系统和第二个系统的连接关系，没有默认全连接`
- 并联传递函数<br>‵[num,den]=parallel(num1,den1,num2,den2)‵4.2 串联series()方法
- 串联两个状态空间系统<br>`[a,b,c,d]=series(a1,b1,c1,d1,a2,b2,c2,d2)`<br>`[a,b,c,d]=series(a1,b1,c1,d1,a2,b2,c2,d2,inp1,inp2,out1,out2) #多出来的参数表明第一个系统和第二个系统的连接关系，没有默认全连接`
- 串联传递函数<br>`[num,den]=series(num1,den1,num2,den2)`4.3 反馈feedback()方法
- 系统1为对象，系统2为反馈控制器<br>`[a,b,c,d]=series(a1,b1,c1,d1,a2,b2,c2,d2)`<br>`[a,b,c,d]=series(a1,b1,c1,d1,a2,b2,c2,d2,sign) #sign默认为1,表示负反馈`
- 传递函数形式<br>`[num,den]=feedback(num1,den1,num2,den2,sign)`4.4 闭环cloop()方法 单位反馈`[ac,bc,cc,dc]=cloop(a,b,c,d,sign)`<br>`[numc,denc]=cloop(num,den,sign)`
