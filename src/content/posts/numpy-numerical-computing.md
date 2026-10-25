---
title: "NumPy数值计算"
slug: "numpy-numerical-computing"
date: "2026-06-02"
category: "Python"
description: "NumPy 数组创建、索引、变换和常用函数笔记。"
draft: false
legacySlug: "工具/Python/工具/python数据分析/NUmPy数值计算"
---

list列表可以当作数组来使用，但是列表的元素可以为任何对象，所以浪费了cpu运算的时间和内存，NumPy则解决了这一问题。<br>Numpy提供了两种对象：nddarry(n-dimensional array object) 存储单一数据类型的多维数组<br>和ufunc(universal function object) 对数组进行处理的函数

# 1.NumPy多维数组

## 1.1创建数组对象

ndarray是一个数据容器，其中所有的元素数据类型相同 NumPy库能将列表、元组、数组等类型的数据转换为ndarray数组

### 1.1.1使用array函数创建数组对象

`np.array(object,dtype,ndim)`

- object 要创建的数组
- dtype 制定数组的类型 默认为None
- ndmin 数组的维数 默认为None

  ```
  w1=np.array([1,3,5,7])    #列表
  w2=np.array((1,3,5,7))    #元组
  w3=np.array([[1,2,3][4,5,6]]) #多维数组
  ```


  NumPy会为数组推断合适的数组类型。当序列含有整数和浮点数时，NumPy会把dtype定义为浮点型1.2.2专门创建数组的函数使用array函数创建数组效率不高，NumPy提供了很多专门创建数组的函数<br>1) arange函数<br>arange 类似于python内置函数range<br>参数(start, stop, step) start默认0 step默认1 生成序列**不含stop**

  ```
  array1=np.array(10)         # [0 1 2 3 4 5 6 7 8 9]
  array2=np.array(0,1,0.2)    # [0. 0.2 0.4 0.6 0.8]
  ```


  2)linspace函数<br>当arange参数为浮点型时，由于浮点数精度有限，所以难以获得元素的数量。此时可以使用linspace<br>参数(start, stop, num)<br>`array1=np.linspace(0,1,5) #[0. 0.25 0.5 0.75 1]`<br><br><br>3)logspace函数<br>logspace函数与linspace函数类似，但创建的的是等比数列。起始位和终止位表示10的幂

  ```
  array1=np.logspace(0,1,5)    #生成1～10的具有五个元素的等比数列
  ```


  4)zeros函数<br>创建制定长度或形状的全0数组

  ```
  np.zeros(4)
  np.zeros([3,3])
  ```


  5)ones函数<br>创建指定长度或形状的全1数组

  ```
  np.ones(5)
  np.ones([2,3])
  ```


  6)diag函数<br>创建对角阵，指定对角线元素。

  ```
  np.diag([1,2,3,4])
  ```


## 1.2ndarray对象属性和数据转换

NumPy创建的ndarray对象属性主要有shape、size等属性

- ndim 秩 数据轴的个数
- shape 数组的维度
- size 数组元素个数
- dtype 数据类型
- itemsize 数组中每个元素的字节大小

  ```
  w1=np.array([1 2 3][ 4 5 6])
  print(w1.ndim)
  print(w1.shape)
  print(w1.size)
  print(w1.dtype)
  ```


## 1.3生成随机数

Numpy.random模块中有许多随机数的生成函数

| 方法 | 说明 |
| --- | --- |
| `np.random.rand(d0, d1, ... dn)` | 创建d0-dn维度的均匀分布的随机数数组，浮点数，范围从0-1 |
| `np.random.randn(d0, d1, ... dn)` | 创建d0-dn维度的标准正态分布随机数，浮点数，平均数0，标准差1 |
| `np.random.randint(low, high=None, size=None)` | 从给定上下限范围选取随机整数，范围是low, high，形状size |
| `np.random.uniform(low, high, size)` | 产生具有均匀分布的小数数组，下界是low，上界是high，size形状 |
| `np.random.normal(loc, scale, size)` | 从正态分布中随机取一组样本，分布中是loc(均值)，scale(标准差)，size形状 |
| `np.random.seed(s)` | 随机种子，s是给定的种子值。因为计算机生成的是伪随机数，所以通过设定相同的随机种子，可以每次生成相同的随机数 |

## 1.4数组变换

### (1)数组重塑

对定义好的数组，可以通过reshape方法改变其维度，传入参数为新维度的元组<br>

```
arr1=np.arange(8)
arr2=arr1.reshape(4,2)
arr3=np.arange(6).reshape(2,3)  #创建多维数组
```

<br>

与reshape相反的方法是散开或者扁平化flatten

<br>

```
arr1=np.arange(12).reshape(3,4)
arr2=arr1.flatten
```

### (2)数组合并

数组合并用于多个数字间的操作，Numpy使用hstack、stack完成数组合并<br>

```
arr1=np.arange(6).reshape(3,2)
arr2=arr1*2
#横向合并
arr3=np.hstack((arr1,arr2))

#纵向合并
arr34=np.vstack((arr1,arr2))
```

## (3)数组分割

NumPy提供了hsplit、split实现数组的横向、纵向分割

## (4)数组转置和轴对换

数组转置可以通过transpose方法进行转置,也可以使用数组的T属性进行转置,还可以使用swapaxes方法实现轴对换<br>

```
arr=np.arange(6).reshape(3,2)
arr1=arr.transpose()      # transpose方法
arr2=arr.T                # T方法
arr3=arr.swapaxes(0,1)    #swapaxes方法
```

# 2.数组的索引和切片

## 2.1一维数组的索引

一维数组的索引类似于Python中的列表<br>

```
arr=np.arange(10)
arr[2]
arr[-1]
arr[1:4]
```

## 2.2多维数组的索引

对于多维数组，它的每一个维度都有一个索引，各个纬度的索引之间用逗号分隔。<br>

```
arr=np.arange(12).reshape(3,4)
arr[0,1:3]
arr[:,2]
arr[:1,:1]
arr[(0,1),(1,3)]
arr[1:2,(0,2,3)]
```

# 3数组的运算

## 3.1数组和标量的运算

数组的算术运算可以直接应用到元素中<br>

```
a=[1,2,3]
b=a*2
```

## 3.2ufunc函数

ufunc函数全称为通用函数，是一种能够对数组中的所有元素进行操作的函数。

### 3.2.1常用的ufunc函数运算

常见的ufunc函数运算有四则运算、比较运算和逻辑运算<br>(1) 四则运算： 加、减、乘、除、幂 数组间的四则运算表示对每个元素分别进行四则运算，所以数组的形状必须相同。<br>(2) 比较运算： >,<,==,>=,<=,!= 比较运算返回的结果是一个布尔数组，每个元素为每个数组对应元素的比较结果。<br>(3) 逻辑运算：np.any函数表示逻辑or，np.all函数表示逻辑and，运算结果返回布尔值

### 3.2.2ufunc函数的广播机制

广播指不同形状的数组之间执行算术运算的方式，需要遵循下面的原则<br>(1) 让所有输入数组都向其中shape最长的数组看齐，shape中不足的部分都通过在前面加1补齐<br>(2) 输入数组的shape是输入数组shape的各个轴上的最大值<br>(3) 如果输入数组的某个轴和输出数组的对应轴的长度相同或者其长度为1时，这个数组能够用来计算，否则出错。<br>(4) 当输入数组的某个轴的长度为1时，沿着此轴运算时都用此轴上的第一组值。<br>

```
A=np.array([[0,0,0][1,1,1][2,2,2]]) 形状为(3,3)
B=np.array([1,2,3])                 形状为(3,)
计算A+B
# B的维度不够，会在左面补1 变成(1,3)
# B会进行复制变成(3,3)
# 在此基础上计算A+B
```
