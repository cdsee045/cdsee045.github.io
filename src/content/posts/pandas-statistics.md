---
title: "Pandas统计分析"
slug: "pandas-statistics"
date: "2026-06-04"
category: "Python"
description: "Pandas 的 Series、DataFrame、索引与常用数据处理笔记。"
draft: false
legacySlug: "工具/Python/工具/python数据分析/Pandas统计分析"
---

# 1.Pandas中的数据结构

Pandas有三种数据结构：Series、DataFrame和Panel。Series类似于数组；Datarame类似于表格；Panel可视为Excel的多表单Sheet。

## 1.1Series的创建

1) 通过列表创建<br>

```
obj=pd.Series([1,2,3])
#结果
0  1
1  2
2  3
```

<br>

输出第一列为index，第二列为数据value。创建Series时不指定index会采用整型数据作为index

<br>

```
i=["a","c","d","a"]
v=[2,4,5,7]
t=pd.Series(v,index=i,name="col")
print(t)

#输出
a  2
c  4
d  5
a  7
Name:col, dtype: int64
```

<br>

值得一提的是，创建Series时虽然指定了index参数，实际上Pandas还是哟隐藏的index位置标签

<br>

在此例中，仍可以使用t[0]来得到数据。如果index为整数标签，不能通过位置索引，因为会产生歧义。

<br>

2) 通过字典床价

<br>

数据存放在Python字典中，可以通过字典来创建Series

<br>

```
sdata={'Ohio':35000,'Texas':71000,'Oregon':16000,'Utah:8000'}
obj=pd.Series(sdata)
print(obj)

#输出
Ohio:    35000
Texas:   71000
Oregon:  16000
Utah:    8000
```

<br>

如果没有指定index，那么字典的键作为Series的索引。

<br>

如果键和指定的index不匹配，对应的值为NaN(浮点型)，对应的

<br>

```
sdata={"a":100,"b":200,"e":300}
letter=["a","b","c","e"]
obj=pd.Series(sdata,index=letter)
print(obj)

#输出
a    100.0
b    200.0
c    NaN
e    300.0
dtype: float64
```

## 1.2DataFrame

DataFrame是一个表格型的数据结构，它含有一组有序的列，每列可以是不同类型的值(数值、字符串、布尔值等)。DataFrame既有行索引也有列索引，它可被看作由Series组成的字典。

### DataFrame创建

常用的构建DataFrame的方法是直接传入一个由等长列表或NumPy数组组成的字典<br>

```
data={'name':['张三'，'李四','王五','小明']
      'sex':['female','female','male','male']  
      'year':['2001','2001','2003','2002']
      'city':['北京','上海','广州','北京']}
df=pd.DataFrame(data)

#输出
    name    sex     year    city
0   张三   female    2001    北京
1   李四   female    2001    上海
2   王五    male     2003    广州
3   小明    male     2002    北京     
```

<br>

DataFrame会自动加上索引，且有序排列。如果指定列名，那么会按照指定顺序排列

<br>

```
data={'name':['张三'，'李四','王五','小明']
      'sex':['female','female','male','male']  
      'year':['2001','2001','2003','2002']
      'city':['北京','上海','广州','北京']}
df1=pd.DataFrame(data,columns=['name','year','sex','city'])
print(df1)

#结果
     name  year   sex    city
0    张三   2001   female  北京
1    李四   2001   female  上海
2    王五   2003    male   广州 
3    小明   2002    male   北京
```

### 1.3索引对象

构建Series和DataFrame时，所用到的任何数组或其他序列的标签都会被转换成一个 Index<br>索引对象不能被单独修改

### 1.4DataFrame的常用属性

DataFrame的基础属性由values、index、columns、dtypes、ndim和shape。分别得到DataFrame的元素、索引、列名、、类型、维度和形状

# 2.Pandas索引操作

## 2.1重建索引

索引对象无法修改，因此重建索引是指对索引对象重新排序而不是重新命名，当索引值不存在时，会引入缺失值。<br>

```
obj=pd.Series([7.2,-4.3,4.5,3.6],index=['b','a','d','c'])
print(obj)
obj.reindex(['a','b','c','d','e'])

#输出
b   7.2
a  -4.3
d   4.5
c   3.6

a   -4.3
b    7.2
c    3.6
d    4.5
e    NaN
```

<br>

重建索引引入的缺失值，可以使用fill_value参数补充

<br>

```
obj.reindex(['a','b','c','d','e'],fill_value=0)
a   -4.3
b    7.2
c    3.6
d    4.5
e    0.0
```

<br>

也可以使用method进行插值处理

<br>

method=’ffill’ 前向值填充 method=’bfill’ 后向值填充

## 2.2更换索引

使用set_index方法实现将列数据作为索引<br>

```
data={'name':['张三'，'李四','王五','小明']
      'sex':['female','female','male','male']  
      'year':['2001','2001','2003','2002']
      'city':['北京','上海','广州','北京']}
df1=pd.DataFrame(data,columns=['name','year','sex','city'])
df5=df1.set_index('city')

#输出
city   name   year   sex
北京    张三    2001  female
上海    李四    2001  female
广州    王五    2003   male
北京    小明    2002   male
```

# 3DataFrame数据查询与编辑

## 3.1DataFrame数据查询

### 选取列

通过列索引标签或者属性的方式获取列数据<br>

```
df['name']
df[['name','year']]
```

### 选取行

通过行索引或者位置切片的形式来选取行<br>

```
df[:2]
df[1:3]
```

### 选取行和列

切片的方法无法获取单独的几行，可以使用loc和iloc方法实现<br>loc[start,stop] 基于标签<br>iloc[start,stop] 基于位置 左闭右开<br>

```
df.loc[['北京','上海'],['name','year']]
df.iloc[[1,3],[1,2]]
```

## DataFrame数据的编辑

### 增加数据

使用append方法传入字典 增加一行<br>

```
data1=[]'city':'兰州' ,'name':'李红','year':'2005','sex':'female'}
df.append(data1)
```

<br>

增加列只需要直接赋值即可

<br>

```
df5['age']=20

#输出
city   name   year   sex     C
北京    张三    2001  female  20
上海    李四    2001  female  20
广州    王五    2003   male   20
北京    小明    2002   male   20
```

### 删除数据

使用drop方法，通过axis参数确定删除行还是列<br>

```
df5.drop('广州')
df5.drop('age',axis=1)
```

# 4.Pandas数据运算

# 5.Pandas数据载入与预处理

## 5.1数据载入

### 5.1.1读/写文本文件

#### 1.文本文件读取

read_csv函数读取csv文件<br>pandas.read_csv(filepath_or_buffer, sep=’, ‘, delimiter=None, header=’infer’, names=None, …)

- `filepath_or_buffer`：文件路径
- `sep=','`：默认以 `,` 为数据分隔符
- `skiprows`：跳过前几行
- `nrows`：只读前几行
- `parse_dates = ['col_name']`：指定某行读取为日期格式
- `index_col = ['col_1'/'col_2']`：读取指定的几列
- `error_bad_lines = False`：当某行数据有问题时，不报错，直接跳过，处理脏数据时使用
- `na_values = 'NULL'`：将NULL识别为空值
- `header = 0`：表示以数据的第一行为列索引
- `encoding = "utf-8"`：表明以utf-8为编码规则
- `names = range(0,50))`：表示以[0…49]为列索引的名字

（1）读取csv文件<br>

```python
>>> import pandas as pd
>>> 
>>> df = pd.read_csv(r"E:\Python学习\test.csv")
>>> print(df)
    name  age
0   小红   10
1   小明   20
2   小白   30
>>> print(type(df))
<class 'pandas.core.frame.DataFrame'>
>>> # 行和列
>>> print(df.shape)
(3, 2)
>>> print(list(df.columns))
['name', 'age']
```

（2）读取txt文件<br>

```python
>>> df = pd.read_csv(r"E:\Python学习\test.txt")
>>> print(df)
    北京
0   上海
1   成都
2   深圳
3   广州
4   广东
```

---

skiprows<br>跳过前n行<br>

```python
>>> df = pd.read_csv(r"E:\Python学习\test.csv", skiprows=2)
>>> print(df)
    小明  20
0   小白  30
>>> df = pd.read_csv(r"E:\Python学习\test.csv", skiprows=2)
>>> print(df)
    小明  20
0   小白  30
```

nrows<br>只读前几行<br>

```python
>>> df = pd.read_csv(r"E:\Python学习\test.csv", nrows =2)
>>> print(df)
    name  age
0   小红   10
1   小明   20
```

index_col<br>`index_col = ['col_1';'col_2']`：读取指定的几列。整数或者字符串或者整数/字符串列表。指定用作行标签的列。<br>

```python
>>> df = pd.read_csv(r"E:\Python学习\test.csv", index_col =['name'])
>>> print(df)
        age
name       
小红     10
小明     20
小白     30
>>> df = pd.read_csv(r"E:\Python学习\test.csv", index_col=1)
>>> print(df)
      name
age      
10    小红
20    小明
30    小白
```

names<br>`names = range(0,50)`：表示以[0…49]为列索引的名字

不与 `header=0` 共同使用<br>

```python
>>> df = pd.read_csv(r"E:\Python学习\test.csv", names=['姓名', '年龄'])
>>> print(df)
    姓名  年龄
0  name  age
1   小红   10
2   小明   20
3   小白   30
```

与 `header=0` 共同使用<br>

```python
>>> df = pd.read_csv(r"E:\Python学习\test.csv", header=0, names=['姓名', '年龄'])
>>> print(df)
   姓名  年龄
0  小红  10
1  小明  20
2  小白  30
```

#### 2.文本文件写入

to_csv函数村文csv文件<br>pd.to_csv(path_or_buf, sep, na_rep, columns, header, index)

- `path_or_buf`：str: 放文件名、相对路径、文件流等。
- `sep`：分隔符。与`read_csv()`中`sep`参数意思一样。
- `na_rep`：将NaN转换为特定值。
- `columns`：指定哪些列写进去。
- `header`：默认`header=0`，如果没有表头，设置`header=None`。
- `index`：关于索引的，默认`True`，写入索引。

（1）写入csv文件<br>

```python
>>> import pandas as pd
>>> data = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
>>> df = pd.DataFrame(data)
>>> print(df)
   A  B    C
0  1  2  NaN
1  3  4  5.0
>>> print(type(df))
<class 'pandas.core.frame.DataFrame'>
>>> df.to_csv('test1.csv')
```

可以看到生成了新文件：`test1.csv`

读取看看：<br>

```python
>>> df1 = pd.read_csv(r"test1.csv", header=0, encoding="utf-8")
>>> print(df1)
   0  A  B  C
0  1  1  2 NaN
1  2  3  4  5.0
```

（2）写入txt文件<br>

```python
>>> data = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
>>> df = pd.DataFrame(data)
>>> df.to_csv('test1.txt')
```

生成新文件：`test1.txt`<br>

```text
文件内容：
,A,B,C
0,1,2,
1,3,4,5.0
```

sep<br>设置分隔符<br>

```python
>>> data = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
>>> df = pd.DataFrame(data)
>>> df.to_csv('test2.csv', sep=';') # 设置;为分割符
>>> print(df)
```

<br>

生成文件：

<br>

```text
文件内容：
;A;B;C
0;1;2;
1;3;4;5.0
```

na_rep：将NaN转换为特定值<br>

```python
>>> data = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
>>> df = pd.DataFrame(data)
>>> df.to_csv('test3.csv', na_rep='100') # 空值替换为100
>>> print(df1)
   Unnamed: 0  A  B      C
0           0  1  2  100.0
1           1  3  4    5.0
```

columns：指定哪些列写进去<br>

```python
>>> data = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
>>> df = pd.DataFrame(data)
>>> df.to_csv('test4.csv', columns=['A', 'B']) # 只写入A、B列
>>> df1 = pd.read_csv('test4.csv')
>>> print(df1)
   Unnamed: 0  A  B
0           0  1  2
1           1  3  4
```

header<br>默认`header=0`，如果没有表头，设置`header=None`<br>

```python
>>> data = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
>>> df = pd.DataFrame(data)
>>> df.to_csv('test5.csv', header=None)
>>> df1 = pd.read_csv('test5.csv')
>>> print(df1)
   0  1  2    3
0  0  1  2  NaN
1  1  3  4  5.0
```

index<br>关于索引的，默认`True`，写入索引

不保留索引<br>

```python
>>> data = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
>>> df = pd.DataFrame(data)
>>> df.to_csv('test6.csv', index=False)
>>> df1 = pd.read_csv('test6.csv')
>>> print(df1)
   A  B    C
0  1  2  NaN
1  3  4  5.0
```

### 5.1.2读写excel文件

#### 1excel文件读取

read_excel(io,sheetname,header=0,index_col=None,names=None,dtype)<br>| 参数名 | 说明 |<br>| :—- | :—- |<br>| `io` | 文件路径 |<br>| `sheet_name` | 默认是`sheetname`为0（第一个sheet表）；`sheet_name="Sheet1"`（指定表名）；返回多表使用`sheetname=[0,1]`，若`sheetname=None`返回全表。 |<br>| `header` | 指定作为列名的行，默认0，即取第一行，数据为列名行以下的数据；若数据不含列名，则设定`header = None`。 |<br>| `names` | 指定列的名字，传入一个`list`数据 |<br>| `index_col` | 指定列为索引列，默认`None`列（0索引）用作`DataFrame`的行标签。 |

```python
>>> import pandas as pd
>>> df = pd.read_excel(r'E:\Python学习\test.xls')
>>> print(df)
   姓名  年龄 性别
0  小白  20  男
1  小黑  21  男
2  小红  20  女
```

#### 2excel文件存储

to_excel(excel_writer=None,sheetname=None,na_rep=’’,header=True,index=True,index_label=None,mode=’w’,encoding=None)
