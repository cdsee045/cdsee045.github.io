---
title: "matlab"
slug: "matlab-basics"
date: "2026-06-02"
category: "MATLAB"
description: "MATLAB 变量、矩阵生成与常用矩阵操作笔记。"
draft: false
legacySlug: "工具/MATLAB/工具/matlab/matlab"
---

## matlab数值计算

#### 变量、常量、字符串

变量 第一次出现时定义<br>常量 预先定义的变量<br>字符串 字符的集合

### 矩阵

#### 矩阵的生成

```
&lt;html> 
  &lt;head> 
  &lt;/head>
&lt;/html>
```

```
a=[1 2 3;4 5 6]
c=[a,b]
m=[1:2:10]
```

##### 特殊矩阵

单位矩阵 eye(m,n)<br>零矩阵 zeros(m,n)<br>一矩阵 ones(m,n)<br>对角阵 对角元素向量=[a1.a2,a3] A=diag(v)<br>随机矩阵 rand(m,n)

#### 矩阵操作

下标<br>A(m,n)<br>A(:,n) 提取第n列<br>A(m,:) 提取第m行<br>A‘ 转秩<br>inv(A) 求逆<br>det(A) 求行列式<br>A\b A*x=b<br>A/b x*b=A

### 多项式

#### 多项式表示

## matlab符号运算

符号运算无需先对变量赋值

## matlab程序设计

find()方法<br>

```
find(x)         #返回x中不等于0的元素的下标
find(0<x&x<10)  #返回x中大于0小于10的元素的下标
```

root()方法<br>

```
p=[1 -6 -72 -27]
r=roots(p)       #返回由p向量构成多项式方程的根
```
