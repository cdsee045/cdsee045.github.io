---
title: "Python编程基础"
slug: "python-programming-basics"
date: "2026-06-02"
category: "Python"
description: "Python 语法与数据分析基础笔记。"
draft: false
legacySlug: "工具/Python/工具/python数据分析/Python与数据分析"
---

## 1.基础语法详解（标识符、保留字、注释与代码结构）

Python 作为一门简洁优雅的编程语言，其基础语法设计充分考虑了可读性和易用性。本文将深入介绍 Python 编程中的核心基础概念，包括标识符命名规则、保留字使用规范、注释方法、引号介绍、多行语句处理、print 输出以及模块导入机制。

### 一、标识符（Identifiers）

标识符是开发者为变量、函数、类、模块等元素自定义的名称，遵循以下规则：

#### 1. 命名规则：

- 必须以字母（a-z, A-Z）或下划线 _ 开头
- 后续字符可以是字母、数字（0-9）或下划线
- 区分大小写（age 和 Age 是不同标识符）

#### 2. 有效示例：

```python
# 有效标识符示例
name = "Python"
_age = 25
user_123 = "test"
ClassName = "Demo"
```

#### 3. 无效示例：

```python
# 无效标识符示例
123name = "error"  # 以数字开头
name@test = "error" # 包含特殊字符
class = "error"    # 使用保留字
```

#### 4. 命名建议：

- 使用小写字母和下划线组合（蛇形命名法）：calculate_average()
- 类名采用驼峰命名法：ClassName
- 避免使用单字符（除临时变量外）

### 二、保留字（Keywords）

Python 预定义了具有特殊含义的保留字，不可用作标识符。可通过以下代码查看所有保留字：

```python
# 查看Python所有保留字
import keyword
print(keyword.kwlist)
```

#### 常用保留字分类：

- 逻辑控制：if, else, elif, for, while, break, continue
- 定义相关：def, class, lambda, return, yield
- 逻辑运算：and, or, not, in, is
- 异常处理：try, except, finally, raise

### 三、注释（Comments）

注释是提高代码可读性的重要手段，Python 支持两种注释方式：

#### 1. 单行注释：以 # 开头

```python
# 这是单行注释
age = 18  # 注释也可以写在代码行末尾
```

#### 2. 多行注释：使用三引号（实际是多行字符串，但未赋值时被视为注释）

```python
"""
这是多行注释
可以跨越多行
用于详细说明代码功能
"""
'''
单引号形式的多行注释
效果与双引号一致
'''
```

#### 最佳实践：

- 复杂算法前添加功能说明
- 关键变量添加用途说明
- 避免过度注释显而易见的代码

### 四、引号规则详解

Python 中引号用于定义字符串，有三种形式：

#### 1. 字符串定义：

```python
# 三种引号定义字符串
str1 = '单引号字符串'
str2 = "双引号字符串"
str3 = """三引号多行字符串"""
str4 = '''单引号三引号多行字符串'''
```

#### 2. 嵌套引号：

- 同类型引号需转义：

  ```
  str = 'He said: \'Hello Python!\''
  str = "She said: \"Hello World!\""
  ```

- 混合引号更简洁：

  ```
  str = 'He said: "Hello Python!"'
  str = "She said: 'Hello World!'"
  ```


#### 3. 原始字符串（Raw String）：

- 前面加 r 或 R，忽略转义字符：

  ```python
  # 普通字符串（转义）
  print("C:\test\new.txt")
  # 原始字符串（不转义）
  print(r"C:\test\new.txt")
  ```


#### 4. 多行字符串：

```python
multi_line = """
这是第一行
这是第二行
这是第三行
"""
print(multi_line)
```

### 五、多行语句

当语句过长时，可采用以下方式换行：

#### 1. 显式换行：使用反斜杠 \

```python
total = num1 + num2 + \
        num3 + num4 + \
        num5
```

#### 2. 隐式换行：在括号（圆括号、方括号、花括号）内自动换行

```python
# 列表换行
my_list = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
]

# 函数调用换行
result = calculate(
    param1, param2,
    param3, param4
)
```

### 六、print 输出

print() 是 Python 最常用的输出函数，具有以下特性：

#### 1. 基本用法：

```python
print("Hello Python")
print(123)
print(True)
```

#### 2. 多参数输出：

```python
name = "Python"
version = 3.10
print("语言：", name, "版本：", version)
```

#### 3. 格式化输出：

- f-string（Python 3.6+ 推荐）：

  ```python
  name = "Python"
  version = 3.10
  print(f"语言：{name} 版本：{version}")
  ```

- format() 方法：

  ```python
  print("语言：{} 版本：{}".format(name, version))
  print("语言：{0} 版本：{1}".format(name, version))
  print("语言：{lang} 版本：{ver}".format(lang=name, ver=version))
  ```

- 百分号格式化：

  ```python
  print("语言：%s 版本：%.2f" % (name, version))
  ```


#### 4. 控制分隔符和结尾：

```python
# 自定义分隔符（默认空格）
print(1, 2, 3, sep="-")

# 自定义结尾（默认换行）
print("第一行", end="")
print("第二行")

# 输出到文件
with open("output.txt", "w") as f:
    print("写入文件内容", file=f)
```

### 七、模块导入机制

Python 通过模块化设计实现代码复用，主要有两种导入方式：

#### 1. import 语句：

```python
# 导入整个模块
import math
print(math.pi)

# 导入模块并指定别名
import numpy as np
print(np.array([1,2,3]))

# 导入多个模块
import os, sys, json
```

#### 2. from…import 语句：

```python
# 导入模块中的指定函数/变量
from math import pi, sqrt
print(pi)
print(sqrt(16))

# 导入模块中的所有内容（不推荐）
from math import *
print(cos(0))

# 导入并指定别名
from pandas import DataFrame as df
data = df({"name": ["Python"], "version": [3.10]})
```

#### 3. 相对导入（包内使用）：

```python
from .submodule import func  # 当前包的子模块
from ..sibling import class_  # 上级包的同级模块
```

#### 最佳实践：

- 优先使用完整导入（import math）避免命名冲突
- 为长模块名创建合理别名（如 import pandas as pd）
- 避免使用 from…import * 导致命名空间污染

### 总结

- 标识符：遵循字母/下划线开头、区分大小写规则，推荐蛇形/驼峰命名法
- 保留字：Python预定义的特殊关键字，不可用作标识符，可通过keyword模块查看
- 注释：单行用#、多行用三引号，注释需简洁且有意义
- 引号规则：单/双/三引号均可定义字符串，嵌套时可混用或转义，原始字符串加r前缀
- 多行语句：长语句可用\显式换行，括号内可隐式换行
- print 输出：支持多参数、格式化、自定义分隔符/结尾，灵活处理字符串输出
- 模块导入：优先使用import完整导入，避免from…import *，合理使用别名

## 2.运算符

Python 提供了丰富的运算符集合，用于执行各种数学计算、逻辑判断和变量操作。本文将系统介绍五大类运算符：算术运算符、比较运算符、逻辑运算符、赋值运算符及其优先级规则，帮助构建坚实的编程基础。

### 一、算术运算符（Arithmetic Operators）

算术运算符用于执行基本数学运算，支持整数和浮点数操作：<br>| 运算符 | 名称 | 示例 | 结果 |<br>|————|————|—————-|———-|<br>| `+` | 加法 | `5 + 3` | 8 |<br>| `-` | 减法 | `10 - 4` | 6 |<br>| `*` | 乘法 | `3 * 7` | 21 |<br>| `/` | 除法 | `15 / 4` | 3.75 |<br>| `//` | 整除 | `15 // 4` | 3 |<br>| `%` | 取模 | `15 % 4` | 3 |<br>| `**` | 幂运算 | `2 ** 3` | 8 |

**特殊用法：**<br>

```
# 字符串重复
print("Hi" * 3)  # 输出 "HiHiHi"

# 负数取模（结果符号与除数一致）
print(-10 % 3)   # 输出 2 (因为 3*(-4)=-12, -10-(-12)=2)​
```

### 二、比较运算符（Comparison Operators）

比较运算符用于比较两个值，返回布尔值 `True` 或 `False`：<br>| 运算符 | 名称 | 示例 | 结果 |<br>|————|—————|——————|———-|<br>| `==` | 等于 | `5 == 5` | True |<br>| `!=` | 不等于 | `10 != 20` | True |<br>| `>` | 大于 | `7 > 3` | True |<br>| `<` | 小于 | `2 < 5` | True |<br>| `>=` | 大于等于 | `4 >= 4` | True |<br>| `<=` | 小于等于 | `10 <= 7` | False |

**进阶用法：**<br>

```
# 对象身份比较（非值比较）
a = [1, 2]
b = a
c = [1, 2]
print(a is b)  # True (同一对象)
print(a is c)  # False (不同对象)

# 成员检测
print(2 in [1, 2, 3])  # True
```

### 三、逻辑运算符（Logical Operators）

| 运算符 | 名称 | 示例 | 结果 |
| --- | --- | --- | --- |
| `and` | 逻辑与 | `True and False` | False |
| `or` | 逻辑或 | `True or False` | True |
| `not` | 逻辑非 | `not True` | False |

---

💡 **补充说明**：

- **逻辑与 (`and`)**：只有当两边的表达式都为 `True` 时，结果才是 `True`；只要有一个为 `False`，结果就是 `False`。
- **逻辑或 (`or`)**：只要有一边的表达式为 `True`，结果就是 `True`；只有两边都为 `False` 时，结果才是 `False`。
- **逻辑非 (`not`)**：对表达式的结果取反，`True` 变 `False`，`False` 变 `True`。
- **短路特性**：`and` 遇到第一个 `False` 就停止判断；`or` 遇到第一个 `True` 就停止判断，这可以用来优化代码。

**短路特性：**<br>

```
def check():
    print("Function called")
    return True

# or 短路：第一个为True时不执行第二个
False or check()  # 输出 "Function called" 并返回 True
# and 短路：第一个为False时不执行第二个
False and check()  # 直接返回 False，不输出
```

<br>

例

<br>

age = 25

<br>

is_student = False

# 检查是否符合优惠条件

if age < 18 or (age >= 60 and not is_student):<br> print(“享受折扣”)<br>else:<br> print(“不享受折扣”)

### 四、赋值运算符（Assignment Operators）

赋值运算符用于给变量赋值，支持复合运算：

#### Python 赋值运算符速查表

| 运算符 | 等价表达式 | 示例（初始 x=10） | 执行后结果 |
| --- | --- | --- | --- |
| `=` | 直接赋值 | `x = 10` | `x = 10` |
| `+=` | `x = x + y` | `x += 5` | `x = 15` |
| `-=` | `x = x - y` | `x -= 3` | `x = 7` |
| `*=` | `x = x * y` | `x *= 2` | `x = 20` |
| `/=` | `x = x / y` | `x /= 4` | `x = 2.5` |
| `//=` | `x = x // y` | `x //= 3` | `x = 3` |
| `%=` | `x = x % y` | `x %= 4` | `x = 2` |
| `**=` | `x = x ** y` | `x **= 3` | `x = 1000` |

---

#### 核心特性与使用要点

1. **运算效率优化**<br> 增强赋值运算符（如 `+=`、`*=`）在底层实现中会直接操作变量的内存地址，避免了临时变量的创建与销毁，比手动写 `x = x + y` 更高效，尤其适用于循环中的计数、累加等场景。
2. **数据类型适配性**<br> 运算结果的类型由运算本身决定：
  - 除法赋值 `/=` 始终返回浮点数（即使能整除，如 `10 /= 2` 结果为 `5.0`）；
  - 整除赋值 `//=`、取模赋值 `%=` 仅针对整数运算，结果为整数；
  - 幂运算赋值 `**=` 会根据指数快速计算，支持整数、浮点数指数。
3. **结合性规则**<br> 赋值运算符均为**右结合性**，且优先级低于所有算术、比较、逻辑运算符。例如 `x *= 3 + 2` 会先计算 `3 + 2 = 5`，再执行 `x = x * 5`。
4. **常见易错点**<br> 需严格区分赋值运算符 `=` 与比较运算符 `==`，前者用于给变量赋值，后者用于判断相等性，在 `if` 条件判断中极易混淆。

**链式赋值：**<br>

```
a = b = c = 0  # 所有变量指向同一整数对象
print(a, b, c)  # 输出 0 0 0

x, y, z = 1, 2, 3  # 多个变量同时赋值
a,b = 10, 5
a, b = b, a        # 交换变量值（无需临时变量）
print(x,y,z)
print(f'a={a},b={b}')
```

#### Python运算符优先级与结合性对照表

| 优先级 | 运算符类型 | 具体运算符 | 结合性 | 说明 |
| --- | --- | --- | --- | --- |
| 1 | 括号 | `()` | 无 | 最高优先级，强制改变运算顺序 |
| 2 | 索引/属性/切片 | `[]`, `.`, `[:]` | 从左到右 | 如 `list[0]`、`obj.attr` |
| 3 | 幂运算 | `**` | 从右到左 | 如 `2**3**2` = `2^(3^2)` = 512 |
| 4 | 一元运算符（正负） | `+`, `-` | 从右到左 | 如 `-3`、`+5` |
| 5 | 乘除取模整除 | `*`, `/`, `//`, `%` | 从左到右 | 如 `10/2*3` = 15 |
| 6 | 加减 | `+`, `-` | 从左到右 | 如 `10-5+3` = 8 |
| 7 | 比较运算符 | `>`, `<`, `>=`, `<=`, `==`, `!=` | 从左到右 | 如 `3<5<7` = True |
| 8 | 逻辑非 | `not` | 从右到左 | 如 `not True` = False |
| 9 | 逻辑与 | `and` | 从左到右 | 如 `True and False` = False |
| 10 | 逻辑或 | `or` | 从左到右 | 如 `True or False` = True |
| 11 | 赋值运算符 | `=`, `+=`, `-=`, `*=` 等 | 从右到左 | 如 `a += 1` 等价于 `a = a+1` |

```
# 示例1：幂运算的右结合性
print(2 ** 3 ** 2)  # 先算3**2=9，再算2**9=512（不是(2**3)**2=64）

# 示例2：优先级混合运算
print(10 + 5 * 2)   # 先乘后加，结果=20
print((10 + 5) * 2) # 括号改变优先级，结果=30

# 示例3：比较运算符的左结合性
print(3 < 5 < 7)    # 等价于 (3<5) and (5<7)，结果=True
print(3 < 5 > 2)    # 等价于 (3<5) and (5>2)，结果=True

# 示例4：逻辑运算符优先级（not > and > or）
print(True or False and False)  # 先算and，结果=True
print((True or False) and False)# 括号改变，结果=False
```

**记忆技巧：**

- 先算 PEMDAS（括号、指数、乘除、加减）
- 逻辑运算符 and 优先级高于 or
- 比较运算符优先级高于逻辑运算符但低于算术运算符

### 总结

1. **优先级核心**：括号 > 幂运算 > 乘除 > 加减 > 比较 > 逻辑 > 赋值，记不住时用括号最稳妥。
2. **结合性关键**：幂运算、一元运算符、赋值运算符是**右结合**，其余多数为**左结合**。
3. **实用技巧**：写复杂表达式时，不用死记优先级，直接加`()`明确运算顺序，代码可读性更高。

### 综合应用实例

#### 计算折扣价格

price = 100<br>discount_rate = 0.2<br>is_member = True

#### 应用运算符优先级规则

final_price = price * (1 - discount_rate) if is_member else price​<br>print(f”最终价格: {final_price}”) # 输出 80.0

#### 复杂条件判断

age = 25<br>has_ticket = True<br>can_enter = (age >= 18 or has_ticket) and not (age < 13 and not has_ticket)​<br>print(f”是否可以进入: {can_enter}”) # 输出 True

## 3.数据类型

Python的数据类型可以分为以下几大类：

1. 数字类型（Number）：包括整数、浮点数、复数等
2. 序列类型：
  - 字符串（String）：不可变的字符序列
  - 列表（List）：可变的有序序列
  - 元组（Tuple）：不可变的有序序列
3. 映射类型：字典（Dictionary）：键值对的无序集合
4. 集合类型：集合（Set）：无序不重复元素的集合
5. 布尔类型（Boolean）：True/False（实际上是int的子类）
6. None类型：表示空值的特殊类型

其中，最常用且核心的是数字、字符串、元组、列表、字典和集合这六种类型。

### 一、Number（数字类型）

Python支持三种数值类型：

#### 1. 整数（int）

```python
# 整数示例
age = 25
count = 100
negative_num = -5
big_num = 12345678901234567890  # Python支持大整数
```

#### 2. 浮点数（float）

```python
# 浮点数示例
height = 1.75
pi = 3.1415926
scientific = 1.23e5  # 科学计数法，等价于123000.0
```

#### 3. 复数（complex）

```python
# 复数示例
c1 = 3 + 4j
c2 = complex(2, 5)  # 等价于2+5j
print(c1.real)  # 获取实部：3.0
print(c1.imag)  # 获取虚部：4.0
```

#### 数字运算示例

```python
# 基本运算
a = 10
b = 3
print(a + b)  # 加法：13
print(a - b)  # 减法：7
print(a * b)  # 乘法：30
print(a / b)  # 除法：3.3333333333333335
print(a // b) # 整除：3
print(a % b)  # 取模：1
print(a **b) # 幂运算：1000

# 浮点数运算
x = 2.5
y = 1.5
print(x * y)  # 3.75
print(x / y)  # 1.6666666666666667
```

### 二、String（字符串类型）

字符串是不可变的字符序列，使用单引号、双引号或三引号定义：

#### 1. 字符串创建

```python
# 字符串创建方式
s1 = '单引号字符串'
s2 = "双引号字符串"
s3 = """三引号多行字符串
可以换行
保留格式"""
s4 = '''单引号三引号字符串'''
empty_str = ""  # 空字符串
```

#### 2. 字符串索引与切片

```python
# 字符串索引与切片
text = "Python Programming"

# 索引（从0开始）
print(text[0])   # P
print(text[-1])  # g（倒数第一个字符）

# 切片 [起始:结束:步长]，左闭右开
print(text[0:6])     # Python
print(text[7:])      # Programming
print(text[:6])      # Python
print(text[::2])     # Pto rgamn（隔一个取一个）
print(text[::-1])    # gnimmargorP nohtyP（反转字符串）
```

#### 3. 常用字符串方法

```bash
# 常用字符串方法示例
text = "  Hello Python!  "

# 去除空格
print(text.strip())   # Hello Python!（去除两端空格）
print(text.lstrip())  # Hello Python!  （去除左侧空格）
print(text.rstrip())  #   Hello Python!（去除右侧空格）

# 大小写转换
print(text.upper())   #   HELLO PYTHON!  
print(text.lower())   #   hello python!  
print(text.capitalize()) #   Hello python!  

# 替换与分割
print(text.replace("Python", "World"))  #   Hello World!  
print("a,b,c".split(","))               # ['a', 'b', 'c']

# 长度与判断
print(len(text))      # 14（包含空格）
print(text.startswith("Hello"))  # False
print(text.strip().endswith("!")) # True
```

#### 4. 字符串格式化

```python
# 字符串格式化方式
name = "Python"
version = 3.10

# f-string（推荐）
print(f"语言：{name}，版本：{version}")

# format方法
print("语言：{}，版本：{:.1f}".format(name, version))

# 百分号格式化
print("语言：%s，版本：%.2f" % (name, version))
```

### 三、Tuple（元组类型）

元组是不可变的有序序列，使用圆括号定义：

#### 1. 创建元组

```python
# 创建元组
t1 = (1, 2, 3, 4)
t2 = ("a", "b", "c")
t3 = (1, "hello", 3.14)  # 混合类型
t4 = ()  # 空元组
t5 = (5,) # 单个元素的元组（必须加逗号）
t6 = tuple([1,2,3]) # 从列表转换
```

#### 2. 元组操作

```python
# 元组操作
t = (10, 20, 30, 40)

# 索引与切片（同字符串）
print(t[1])     # 20
print(t[1:3])   # (20, 30)

# 元组拼接与重复
t1 = (1,2)
t2 = (3,4)
print(t1 + t2)  # (1, 2, 3, 4)
print(t1 * 3)   # (1, 2, 1, 2, 1, 2)

# 成员判断
print(20 in t)  # True
print(50 in t)  # False

# 长度与最值
print(len(t))   # 4
print(max(t))   # 40
print(min(t))   # 10
```

#### 3. 元组特点

- 不可变性：创建后不能修改元素
- 安全性：适合存储不应被修改的数据
- 性能：比列表更高效，适合作为字典键

### 四、List（列表类型）

列表是可变的有序序列，使用方括号定义：

#### 1. 创建列表

```python
# 创建列表
l1 = [1, 2, 3, 4]
l2 = ["apple", "banana", "orange"]
l3 = [1, "hello", 3.14, True]  # 混合类型
l4 = []  # 空列表
l5 = list((1,2,3))  # 从元组转换
l6 = [i for i in range(10)]  # 列表推导式
```

#### 2. 列表操作

```python
# 列表操作
fruits = ["apple", "banana", "orange"]

# 添加元素
fruits.append("grape")  # 末尾添加：['apple', 'banana', 'orange', 'grape']
fruits.insert(1, "pear") # 指定位置插入：['apple', 'pear', 'banana', 'orange', 'grape']

# 修改元素
fruits[0] = "cherry"  # ['cherry', 'pear', 'banana', 'orange', 'grape']

# 删除元素
fruits.remove("banana")  # 删除指定元素：['cherry', 'pear', 'orange', 'grape']
del fruits[1]            # 删除指定索引元素：['cherry', 'orange', 'grape']
last_fruit = fruits.pop()# 弹出末尾元素：grape，列表变为['cherry', 'orange']

# 排序与反转
nums = [3, 1, 4, 2]
nums.sort()  # 升序排序：[1, 2, 3, 4]
nums.reverse() # 反转：[4, 3, 2, 1]
```

#### 3. 列表推导式

```python
# 列表推导式：[ 结果运算 | 循环 | 过滤条件 ]
# 基本形式：[表达式 for 变量 in 可迭代对象 if 条件]
```

nums = [1, 2, 3, 4, 5, 6]<br>result = [x * 2 for x in nums if x % 2 == 0]<br>[4, 8, 12]<br>

```


# 生成1-10的平方列表
squares = [x*x for x in range(1, 11)]
print(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 筛选偶数
evens = [x for x in range(1, 21) if x % 2 == 0]
print(evens)    # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# 嵌套推导式
matrix = [[1,2,3], [4,5,6], [7,8,9]]
flatten = [num for row in matrix for num in row]
print(flatten)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 五、Dictionary（字典类型）

字典是可变的无序键值对集合，使用花括号定义：

#### 1. 创建字典

```python
# 创建字典
d1 = {"name": "Python", "version": 3.10, "popular": True}
d2 = {}  # 空字典
d3 = dict(name="Java", version=17)  # 使用dict函数
d4 = dict([("a", 1), ("b", 2)])     # 从键值对列表创建
```

#### 2. 字典操作

```python
# 字典操作
person = {"name": "Alice", "age": 25, "city": "Beijing"}

# 访问值
print(person["name"])  # Alice
print(person.get("age"))  # 25
print(person.get("gender", "Unknown"))  # Unknown（键不存在时返回默认值）

# 添加/修改键值对
person["gender"] = "Female"  # 添加
person["age"] = 26           # 修改

# 删除键值对
del person["city"]  # 删除指定键
age = person.pop("age")  # 弹出指定键的值
person.clear()      # 清空字典

# 遍历字典
person = {"name": "Alice", "age": 25}
for k, v in person.items():
    print(f"{k}: {v}")
```

#### 3. 字典推导式

```python
# 字典推导式
# 基本形式：{键表达式: 值表达式 for 变量 in 可迭代对象 if 条件}

# 生成数字到平方的映射
square_dict = {x: x*x for x in range(1, 6)}
print(square_dict)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# 筛选值大于10的项
nums = {"a": 5, "b": 12, "c": 8, "d": 15}
filtered = {k: v for k, v in nums.items() if v > 10}
print(filtered)  # {'b': 12, 'd': 15}
```

### 六、Set（集合类型）

集合是无序不重复元素的集合，使用花括号或set()创建：

#### 1. 创建集合

```python
# 创建集合
s1 = {1, 2, 3, 4}
s2 = {"apple", "banana", "orange"}
s3 = set([1,2,2,3,3,3])  # 自动去重：{1,2,3}
s4 = set()  # 空集合（不能用{}，{}是空字典）
```

#### 2. 集合操作

```python
# 集合操作
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# 基本操作
print(a | b)  # 并集：{1,2,3,4,5,6,7,8}
print(a & b)  # 交集：{4,5}
print(a - b)  # 差集：{1,2,3}
print(a ^ b)  # 对称差集：{1,2,3,6,7,8}

# 添加/删除元素
a.add(6)      # 添加元素：{1,2,3,4,5,6}
a.remove(3)   # 删除元素（不存在会报错）
a.discard(10) # 删除元素（不存在不报错）
a.pop()       # 随机删除一个元素
#列表使用append在尾部添加，而集合是无序，并不知道元素添加在哪个位置用add

# 成员判断
print(4 in a) # True
print(10 in a) # False
```

### 七、数据类型转换函数

Python提供了多种内置函数用于数据类型转换：

#### 1. 转换为数字

```python
# 转换为数字
# 转整数
print(int("123"))    # 123
print(int(3.9))      # 3（向下取整）
print(int(True))     # 1
print(int(False))    # 0

# 转浮点数
print(float("3.14")) # 3.14
print(float(10))     # 10.0
print(float("1e3"))  # 1000.0

# 转复数
print(complex(3,4))  # (3+4j)
print(complex("3+4j")) # (3+4j)
```

#### 2. 转换为字符串

```python
# 转换为字符串
print(str(123))      # "123"
print(str(3.14))     # "3.14"
print(str(True))     # "True"
print(str([1,2,3]))  # "[1, 2, 3]"
print(str({"a":1}))  # "{'a': 1}"

# 格式化转换
num = 123.456
print(f"{num:.2f}")  # "123.46"
print(format(num, "%.1f")) # "123.5"
```

#### 3. 转换为序列类型

```python
# 转换为序列类型
# 转列表
print(list("hello")) # ['h', 'e', 'l', 'l', 'o']
print(list((1,2,3))) # [1, 2, 3]
print(list({1,2,3})) # [1, 2, 3]（顺序不确定）

# 转元组
print(tuple("hello")) # ('h', 'e', 'l', 'l', 'o')
print(tuple([1,2,3])) # (1, 2, 3)

# 转集合
print(set([1,2,2,3])) # {1, 2, 3}
print(set("hello"))   # {'h', 'e', 'l', 'o'}
```

#### 4. 转换为字典

```python
# 转换为字典
print(dict([("a",1), ("b",2)]))  # {'a': 1, 'b': 2}
print(dict(a=1, b=2))            # {'a': 1, 'b': 2}
print(dict(zip(["a","b"], [1,2]))) # {'a': 1, 'b': 2}

# 从字符串转换（需符合格式）
import json
json_str = '{"name":"Python","version":3.10}'
print(json.loads(json_str))      # {'name': 'Python', 'version': 3.10}
```

#### 5. 类型判断函数

```python
# 类型判断函数
x = 123
y = "hello"
z = [1,2,3]

# type()：返回精确类型
print(type(x))       # <class 'int'>
print(type(y))       # <class 'str'>
print(type(z))       # <class 'list'>

# isinstance()：判断是否为指定类型（支持继承）
print(isinstance(x, int))    # True
print(isinstance(y, (str, int))) # True（y是str类型，在元组指定的类型中）
print(isinstance(z, list))   # True
print(isinstance(True, int)) # True（bool是int的子类）
```

### 八、类型转换实战示例

```python
# 基础类型转换
age_str = " 25 "
height_str = "175.5 "

age = int(age_str.strip())
height = float(height_str.strip())
print(f"年龄: {age}岁, 身高: {height}cm")

# 数据清洗与转换
data = ["1", "2", "three", "4", "5.5", ""]
cleaned_data = []
for item in data:
    if item.isdigit():
        cleaned_data.append(int(item))
    else:
        try:
            cleaned_data.append(float(item))
        except ValueError:
            cleaned_data.append(0)  # 无法转换的设为0
print(cleaned_data)  # [1, 2, 0, 4, 5.5, 0]
```

### 总结

1. 六大数据类型：数字、字符串、元组、列表、字典、集合是Python最常用的数据类型
2. 不可变类型：数字、字符串、元组（创建后不能修改）
3. 可变类型：列表、字典、集合（可以修改内容）
4. 类型转换：使用int(), float(), str(), list(), tuple(), set(), dict()等函数灵活转换类型
5. 选择依据：根据数据是否需要修改、是否需要有序、是否需要键值对等特性选择合适类型

## 4.Python数据类型与常用操作详解

### 知识点回顾

- Python 中数据类型可以分为 **数字型** 和 **非数字型**
- 数字型
  - 整型 (int)
  - 浮点型（float）
  - 布尔型（bool）
    - 真 True：非 0 数 —— 非零即真
    - 假 False：0
  - 复数型 (complex)
    - 主要用于科学计算，例如：平面场问题、波动问题、电感电容等问题
- 非数字型
  - 字符串
  - 列表
  - 元组
  - 字典
- 在 Python 中，所有 **非数字型变量** 都支持以下特点：<br>a. 都是一个 **序列（sequence）**，也可以理解为 **容器**<br>b. 取值 `[]`<br>c. 遍历 `for in`<br>d. 计算长度、最大/最小值、比较、删除<br>e. 链接 `+` 和 重复 `*`<br>f. 切片

### 一、列表

#### 1.1 列表的定义

- List（列表） 是 Python 中使用 **最频繁** 的数据类型，在其他语言中通常叫做 **数组**
- 专门用于存储 **一串** 信息
- 列表用 `[]` 定义，数据 之间使用 `,` 分隔
- 列表的 **索引** 从 0 开始
  - 索引 就是数据在 列表 中的位置编号，索引 又可以被称为 下标

> 注意：从列表中取值时，如果 超出索引范围，程序会报错

[原文图片缺失：007-001.jpeg]

```python
# 列表定义示例
name_list = ["张三", "李四", "王五"]
# 通过索引取值
print(name_list[0])  # 输出：张三
print(name_list[2])  # 输出：王五
```

#### 1.2 列表常用操作

- 在 ipython3 中定义一个 列表，例如：`name_list = []`
- 输入 `name_list.` 按下 TAB 键，ipython 会提示 列表 能够使用的 方法 如下：

| 序号 | 分类 | 关键字 / 函数 / 方法 | 说明 |
| --- | --- | --- | --- |
| 1 | 增加 | `列表.insert(索引, 数据)` | 在指定位置插入数据 |
|  |  | `列表.append(数据)` | 在末尾追加数据 |
|  |  | `列表.extend(列表2)` | 将列表2 的数据追加到列表 |
| 2 | 修改 | `列表[索引] = 数据` | 修改指定索引的数据 |
| 3 | 删除 | `del 列表[索引]` | 删除指定索引的数据 |
|  |  | `列表.remove(数据)` | 删除第一个出现的指定数据 |
|  |  | `列表.pop()` | 删除末尾数据 |
|  |  | `列表.pop(索引)` | 删除指定索引数据 |
|  |  | `列表.clear()` | 清空列表 |
| 4 | 统计 | `len(列表)` | 列表长度 |
|  |  | `列表.count(数据)` | 数据在列表中出现的次数 |
| 5 | 排序 | `列表.sort()` | 升序排序 |
|  |  | `列表.sort(reverse=True)` | 降序排序 |
|  |  | `列表.reverse()` | 逆序、反转 |

---

要不要我再帮你把**字典、字符串、元组**的常用操作也整理成同样格式的 Markdown 表格？

```python
# 列表常用方法示例
name_list = ["张三", "李四", "王五"]

# 增加元素
name_list.append("赵六")  # 末尾添加
name_list.insert(1, "孙七")  # 指定位置插入

# 修改元素
name_list[0] = "张三三"

# 查询元素
print(name_list.index("李四"))  # 获取元素索引

# 删除元素
name_list.remove("李四")  # 删除指定元素
name_list.pop()  # 删除末尾元素
name_list.pop(0)  # 删除指定索引元素
```

##### del 关键字（科普）

- 使用 `del` 关键字(delete) 同样可以删除列表中元素
- `del` 关键字本质上是用来 将一个变量从内存中删除的
- 如果使用 `del` 关键字将变量从内存中删除，后续的代码就不能再使用这个变量了

```python
name_list = ["张三", "李四", "王五"]
del name_list[1]  # 删除索引为1的元素
print(name_list)  # 输出：["张三", "王五"]

# 慎用：删除整个列表
del name_list
# print(name_list)  # 报错：name 'name_list' is not defined
```

> 在日常开发中，要从列表删除数据，建议 使用列表提供的方法

##### 关键字、函数和方法（科普）

- **关键字** 是 Python 内置的、具有特殊意义的标识符

```python
# 查看Python关键字
import keyword
print(keyword.kwlist)
print(len(keyword.kwlist))
```

> 关键字后面不需要使用括号

- **函数** 封装了独立功能，可以直接调用

```python
# 函数调用示例
print(len([1,2,3]))  # len()是内置函数，计算长度
print(max([1,2,3]))  # max()是内置函数，获取最大值
```

> 函数需要理解记忆

- **方法** 和函数类似，同样是封装了独立的功能
- 方法 需要通过 **对象** 来调用，表示针对这个 **对象** 要做的操作

```python
# 方法调用示例
name_list = ["张三", "李四"]
name_list.append("王五")  # append()是列表的方法
print(name_list.count("张三"))  # count()是列表的方法
```

> 在变量后面输入 `.`，然后选择针对这个变量要执行的操作，记忆起来比函数要简单很多

#### 1.3 循环遍历

- 遍历 就是 **从头到尾** 依次 从 列表 中获取数据
  - 在 循环体内部 针对 每一个元素，执行相同的操作
- 在 Python 中为了提高列表的遍历效率，专门提供的 **迭代（iteration）** 遍历
- 使用 `for` 就能够实现迭代遍历

```
# 列表遍历示例
name_list = ["张三", "李四", "王五"]

for name in name_list:
    print(f"姓名：{name}")

# 输出：
# 姓名：张三
# 姓名：李四
# 姓名：王五
```

#### 1.4 应用场景

- 尽管 Python 的 列表 中可以 存储不同类型的数据
- 但是在开发中，更多的应用场景是：<br>a. 列表 存储相同类型的数据<br>b. 通过 迭代遍历，在循环体内部，针对列表中的每一项元素，执行相同的操作

### 二、元组

#### 2.1 元组的定义

- Tuple（元组）与列表类似，不同之处在于元组的 **元素不能修改**
  - 元组 表示多个元素组成的序列
  - 元组 在 Python 开发中，有特定的应用场景
- 用于存储 **一串** 信息，数据 之间使用 `,` 分隔
- 元组用 `()` 定义
- 元组的 **索引** 从 0 开始
  - 索引 就是数据在 元组 中的位置编号

```
# 元组定义示例
info_tuple = ("张三", 18, 1.75)
print(info_tuple[0])  # 输出：张三
```

##### 创建空元组

```
empty_tuple = ()
print(type(empty_tuple))  # 输出：<class 'tuple'>
```

##### 元组中 只包含一个元素 时，需要 在元素后面添加逗号

```
single_tuple = (50,)
print(type(single_tuple))  # 输出：<class 'tuple'>

# 不加逗号会被识别为其他类型
not_tuple = (50)
print(type(not_tuple))  # 输出：<class 'int'>
```

#### 2.2 元组常用操作

- 在 ipython3 中定义一个 元组，例如：`info = ()`
- 输入 `info.` 按下 TAB 键，ipython 会提示 元组 能够使用的函数如下：

```
# 元组常用方法示例
info_tuple = ("张三", 18, 1.75, "张三")

# 统计元素出现次数
print(info_tuple.count("张三"))  # 输出：2

# 获取元素索引
print(info_tuple.index(18))  # 输出：1

# 计算元组长度
print(len(info_tuple))  # 输出：4
```

#### 2.3 循环遍历

- 取值 就是从 元组 中获取存储在指定位置的数据
- 遍历 就是 从头到尾 依次 从 元组 中获取数据

```
info_tuple = ("张三", 18, 1.75)

# 直接遍历元素
for item in info_tuple:
    print(item)

# 通过索引遍历
for i in range(len(info_tuple)):
    print(info_tuple[i])
```

> 提示：在实际开发中，除非 能够确认元组中的数据类型，否则针对元组的循环遍历需求并不是很多

#### 2.4 应用场景

- 尽管可以使用 `for in` 遍历 元组
- 但是在开发中，更多的应用场景是：
  - 函数的 **参数** 和 **返回值**，一个函数可以接收 任意多个参数，或者 一次返回多个数据
    - 有关 函数的参数 和 返回值，在后续 函数高级 给大家介绍
  - 格式字符串，格式化字符串后面的 `()` 本质上就是一个元组
  - 让列表不可以被修改，以保护数据安全

```
# 格式化字符串使用元组
name = "张三"
age = 18
print("姓名：%s，年龄：%d" % (name, age))

# 保护数据安全（将列表转为元组）
num_list = [1, 2, 3]
num_tuple = tuple(num_list)
# num_tuple[0] = 100  # 报错：元组不可修改
```

##### 元组和列表之间的转换

- 使用 `list` 函数可以把元组转换成列表

```
info_tuple = ("张三", 18, 1.75)
info_list = list(info_tuple)
print(type(info_list))  # 输出：<class 'list'>
```

- 使用 `tuple` 函数可以把列表转换成元组

```
info_list = ["张三", 18, 1.75]
info_tuple = tuple(info_list)
print(type(info_tuple))  # 输出：<class 'tuple'>
```

### 三、字典

#### 3.1 字典的定义

- dictionary（字典） 是 除列表以外 Python 之中 **最灵活** 的数据类型
- 字典同样可以用来 存储多个数据
  - 通常用于存储 描述一个 **物体** 的相关信息
- 和列表的区别
  - 列表 是 **有序** 的对象集合
  - 字典 是 **无序** 的对象集合
- 字典用 `{}` 定义
- 字典使用 **键值对** 存储数据，键值对之间使用 `,` 分隔
  - 键 (key) 是索引
  - 值 (value) 是数据
  - 键 和 值 之间使用 `:` 分隔
  - 键必须是唯一的
  - 值 可以取任何数据类型，但 键 只能使用 字符串、数字或 元组

```
# 字典定义示例
xiaoming = {
    "name": "小明",
    "age": 18,
    "gender": True,
    "height": 1.75
}
print(xiaoming["name"])  # 输出：小明
```

#### 3.2 字典常用操作

- 在 ipython3 中定义一个 字典，例如：`xiaoming = {}`
- 输入 `xiaoming.` 按下 TAB 键，ipython 会提示 字典 能够使用的函数如下：

```
# 字典常用方法示例
xiaoming = {"name": "小明", "age": 18}

# 增加/修改键值对
xiaoming["height"] = 1.75  # 增加
xiaoming["age"] = 19       # 修改

# 查询
print(xiaoming.get("name"))  # 获取值
print(xiaoming.keys())       # 获取所有键
print(xiaoming.values())     # 获取所有值
print(xiaoming.items())      # 获取所有键值对

# 删除
xiaoming.pop("height")       # 删除指定键值对
```

> 有关 字典 的 常用操作 可以参照上图练习

#### 3.3 循环遍历

- 遍历 就是 依次 从 字典 中获取所有键值对

```
xiaoming = {"name": "小明", "age": 18, "height": 1.75}

# 遍历键
for key in xiaoming:
    print(f"{key}: {xiaoming[key]}")

# 遍历键值对（推荐）
for key, value in xiaoming.items():
    print(f"{key}: {value}")
```

> 提示：在实际开发中，由于字典中每一个键值对保存数据的类型是不同的，所以针对字典的循环遍历需求并不是很多

#### 3.4 应用场景

- 尽管可以使用 `for in` 遍历 字典
- 但是在开发中，更多的应用场景是：
  - 使用 多个键值对，存储 描述一个 **物体** 的相关信息 —— 描述更复杂的数据信息
  - 将 多个字典 放在 一个列表 中，再进行遍历，在循环体内部针对每一个字典进行 相同的处理

```
# 多个字典放在列表中
students = [
    {"name": "小明", "age": 18},
    {"name": "小红", "age": 17},
    {"name": "小刚", "age": 19}
]

for student in students:
    print(f"姓名：{student['name']}，年龄：{student['age']}")
```

### 四、字符串

#### 4.1 字符串的定义

- 字符串 就是 一串字符，是编程语言中表示文本的数据类型
- 在 Python 中可以使用 一对双引号 `"` 或者 一对单引号 `'` 定义一个字符串
  - 虽然可以使用 `\"` 或者 `\'` 做字符串的转义，但是在实际开发中：
    - 如果字符串内部需要使用 `"`，可以使用 `'` 定义字符串
    - 如果字符串内部需要使用 `'`，可以使用 `"` 定义字符串
- 可以使用 索引 获取一个字符串中 指定位置的字符，索引计数从 0 开始
- 也可以使用 `for` 循环遍历 字符串中每一个字符

> 大多数编程语言都是用 `"` 来定义字符串

```
# 字符串定义示例
str1 = "Hello Python"
str2 = 'Hello "Python"'
str3 = "Hello 'Python'"

# 通过索引取值
print(str1[0])  # 输出：H

# 遍历字符串
for char in str1:
    print(char)
```

#### 4.2 字符串的常用操作

- 在 ipython3 中定义一个 字符串，例如：`hello_str = ""`
- 输入 `hello_str.` 按下 TAB 键，ipython 会提示 字符串 能够使用的 方法 如下：

```
# 字符串常用方法示例
hello_str = "  Hello Python!  "

# 1. 判断类型
print(hello_str.isdigit())    # 是否全为数字
print(hello_str.startswith("Hello"))  # 是否以指定字符串开头
print(hello_str.endswith("!"))        # 是否以指定字符串结尾

# 2. 查找和替换
print(hello_str.find("Python"))  # 查找子串位置
print(hello_str.replace("Python", "World"))  # 替换子串

# 3. 大小写转换
print(hello_str.upper())  # 转大写
print(hello_str.lower())  # 转小写

# 4. 文本对齐
print(hello_str.center(20))  # 居中对齐
print(hello_str.ljust(20))   # 左对齐
print(hello_str.rjust(20))   # 右对齐

# 5. 去除空白字符
print(hello_str.strip())  # 去除两端空格
print(hello_str.lstrip()) # 去除左侧空格
print(hello_str.rstrip()) # 去除右侧空格

# 6. 拆分和连接
print(hello_str.split())  # 按空格拆分
print("-".join(["a", "b", "c"]))  # 连接字符串
```

> 提示：正是因为 python 内置提供的方法足够多，才使得在开发时，能够针对字符串进行更加灵活的操作！应对更多的开发需求！

#### 4.3 字符串的切片

- 切片 方法适用于 字符串、列表、元组
  - 切片 使用 索引值 来限定范围，从一个大的 字符串 中 切出 小的 字符串
  - 列表 和 元组 都是 有序 的集合，都能够 通过索引值 获取到对应的数据
  - 字典 是一个 无序 的集合，是使用 键值对 保存数据

```
# 切片语法：[起始索引:结束索引:步长]
num_str = "0123456789"
```

> 注意：
>
> 1. 指定的区间属于 **左闭右开** 型 `[开始索引, 结束索引)` => 开始索引 >= 范围 < 结束索引
>   - 从 起始 位开始，到 结束位的前一位 结束（不包含结束位本身)
> 2. 从头开始，开始索引 数字可以省略，冒号不能省略
> 3. 到末尾结束，结束索引 数字可以省略，冒号不能省略
> 4. 步长默认为 1，如果连续切片，数字和冒号都可以省略

##### 索引的顺序和倒序

- 在 Python 中不仅支持 顺序索引，同时还支持 倒序索引
- 所谓倒序索引就是 从右向左 计算索引
  - 最右边的索引值是 -1，依次递减

##### 演练需求

1. 截取从 2 ~ 5 位置 的字符串
2. 截取从 2 ~ 末尾 的字符串
3. 截取从 开始 ~ 5 位置 的字符串
4. 截取完整的字符串
5. 从开始位置，每隔一个字符截取字符串
6. 从索引 1 开始，每隔一个取一个
7. 截取从 2 ~ 末尾 - 1 的字符串
8. 截取字符串末尾两个字符
9. 字符串的逆序（面试题）

##### 答案

```python
num_str = "0123456789"

# 1. 截取从 2 ~ 5 位置 的字符串
print(num_str[2:6])  # 输出：2345

# 2. 截取从 2 ~ 末尾 的字符串
print(num_str[2:])   # 输出：23456789

# 3. 截取从 开始 ~ 5 位置 的字符串
print(num_str[:6])   # 输出：012345

# 4. 截取完整的字符串
print(num_str[:])    # 输出：0123456789

# 5. 从开始位置，每隔一个字符截取字符串
print(num_str[::2])  # 输出：02468

# 6. 从索引 1 开始，每隔一个取一个
print(num_str[1::2]) # 输出：13579

# 7. 截取从 2 ~ 末尾 - 1 的字符串
print(num_str[2:-1]) # 输出：2345678

# 8. 截取字符串末尾两个字符
print(num_str[-2:])  # 输出：89

# 9. 字符串的逆序
print(num_str[::-1]) # 输出：9876543210
```

### 五、公共方法

#### 5.1 Python 内置函数

Python 包含了以下内置函数（适用于列表、元组、字符串等序列类型）：

| 函数 | 描述 |
| --- | --- |
| `len(item)` | 计算容器中元素个数 |
| `max(item)` | 返回容器中元素最大值 |
| `min(item)` | 返回容器中元素最小值 |
| `del(item)` | 删除变量 |

> 注意：字符串 比较符合以下规则： `"0" < "A" < "a"`

#### 5.2 切片

| 描述 | Python 表达式 | 结果 | 支持的数据类型 |
| --- | --- | --- | --- |
| 切片 | `"0123456789"[::-2]` | `"97531"` | 字符串、列表、元组 |

- 切片 使用 索引值 来限定范围，从一个大的 字符串 中 切出 小的 字符串
- 列表 和 元组 都是 有序 的集合，都能够 通过索引值 获取到对应的数据
- 字典 是一个 无序 的集合，是使用 键值对 保存数据

#### 5.3 运算符

| 运算符 | 描述 | 支持的数据类型 |
| --- | --- | --- |
| `+` | 合并 | 字符串、列表、元组 |
| `*` | 重复 | 字符串、列表、元组 |
| `in` | 元素是否存在 | 字符串、列表、元组、字典 |
| `not in` | 元素是否不存在 | 字符串、列表、元组、字典 |

> 注意：
>
> - `in` 在对 字典 操作时，判断的是 字典的键
> - `in` 和 `not in` 被称为 成员运算符

##### 成员运算符

成员运算符用于 测试 序列中是否包含指定的 成员

```
# 成员运算符示例
# 字符串
print("P" in "Python")  # True

# 列表
print(3 in [1,2,3])     # True

# 字典
print("name" in {"name": "小明"})  # True（判断键）
```

#### 5.4 完整的 for 循环语法

- 在 Python 中完整的 `for` 循环 的语法如下：

```
for 变量 in 集合:
    循环体代码
else:
    循环正常结束后执行的代码
```

##### 应用场景

- 在 迭代遍历 嵌套的数据类型时，例如 一个列表包含了多个字典
- 需求：要判断 某一个字典中 是否存在 指定的 值
  - 如果 存在，提示并且退出循环
  - 如果 不存在，在 循环整体结束 后，希望 得到一个统一的提示

```python
students = [
    {"name": "阿土",
     "age": 20,
     "gender": True,
     "height": 1.7,
     "weight": 75.0},
    {"name": "小美",
     "age": 19,
     "gender": False,
     "height": 1.6,
     "weight": 45.0},
]

find_name = "阿土"

for stu_dict in students:

    print(stu_dict)

    # 判断当前遍历的字典中姓名是否为find_name
    if stu_dict["name"] == find_name:
        print("找到了")

        # 如果已经找到，直接退出循环，就不需要再对后续的数据进行比较
        break

else:
    print("没有找到")

print("循环结束")
```

#### 总结

1. Python数据类型分为数字型（int/float/bool/complex）和非数字型（字符串/列表/元组/字典），非数字型均支持序列通用操作；
2. 列表可变、有序，元组不可变、有序，字典无序键值对，字符串不可变字符序列，各类型有专属操作方法；
3. 切片是序列类型通用操作，遵循左闭右开规则，支持正/倒序索引和步长；for…else语法可判断循环是否正常结束（未被break中断）。

## 5.Python流程控制语句详解

Python的流程控制语句是编程的核心基础，通过条件判断和循环结构可以实现复杂的业务逻辑。本文将系统介绍Python中的条件语句、循环语句及控制关键字，帮助您构建坚实的编程基础。

### 一、条件语句（if、elif、else）

#### 1. 基本语法结构

```python
# 单条件判断
if 条件表达式:
    条件满足时执行的代码块

# 双条件判断
if 条件表达式:
    条件满足时执行的代码块
else:
    条件不满足时执行的代码块

# 多条件判断
if 条件表达式1:
    条件1满足时执行的代码块
elif 条件表达式2:
    条件2满足时执行的代码块
else:
    所有条件都不满足时执行的代码块
```

#### 2. 多条件判断示例

```python
# 成绩等级判断
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 70:
    print("中等")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

#### 3. 嵌套条件语句

```python
# 嵌套条件判断示例
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("可以进入网吧")
    else:
        print("年满18岁但无身份证，无法进入")
else:
    print("未满18岁，禁止进入")
```

#### 4. 条件表达式（三目运算符）

```python
# 三目运算符：条件为真时的值 if 条件 else 条件为假时的值
a = 10
b = 20

# 常规写法
if a > b:
    max_num = a
else:
    max_num = b

# 三目运算符简化写法
max_num = a if a > b else b
print(f"较大值：{max_num}")  # 输出：较大值：20

# 嵌套三目运算符
score = 75
result = "优秀" if score >= 90 else "良好" if score >= 80 else "及格" if score >= 60 else "不及格"
print(result)  # 输出：及格
```

### 二、循环语句：while 和 while…else

#### 1. while 循环基础

```python
# while循环基本结构：满足条件时重复执行代码块
count = 0
while count < 5:
    print(f"当前计数：{count}")
    count += 1  # 计数器自增，避免无限循环
```

#### 2. while…else 结构

```python
# while...else：循环正常结束（未被break中断）时执行else块
count = 0
while count < 3:
    print(f"循环执行中，count={count}")
    count += 1
else:
    print("循环正常结束")

# 对比：被break中断时不执行else
count = 0
while count < 3:
    print(f"循环执行中，count={count}")
    if count == 1:
        break
    count += 1
else:
    print("循环正常结束")  # 这行不会执行
```

#### 3. 无限循环与中断

```python
# 无限循环（需配合break终止）
while True:
    user_input = input("请输入指令（输入q退出）：")
    if user_input.lower() == "q":
        print("退出程序")
        break  # 终止无限循环
    print(f"你输入的指令是：{user_input}")

# 带条件的无限循环
import time
seconds = 0
while True:
    print(f"程序运行了{seconds}秒")
    seconds += 1
    time.sleep(1)  # 暂停1秒
    if seconds >= 5:
        print("运行时间达到5秒，退出")
        break
```

### 三、循环语句：for 和 for…else

#### 1. for 循环遍历序列

```python
# for循环遍历字符串
text = "Python"
for char in text:
    print(char)

# for循环遍历列表
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"水果：{fruit}")

# for循环遍历数字序列（range）
# range(起始, 结束, 步长)，左闭右开
for i in range(1, 6):  # 1到5（不包含6）
    print(i)

for i in range(0, 10, 2):  # 0到8，步长2
    print(i)
```

#### 2. 遍历索引与值

```python
# 使用enumerate获取索引和值
fruits = ["apple", "banana", "orange"]

# 常规写法（通过索引遍历）
for i in range(len(fruits)):
    print(f"索引{i}：{fruits[i]}")

# 推荐写法（enumerate）
for index, fruit in enumerate(fruits):
    print(f"索引{index}：{fruit}")

# 指定起始索引
for index, fruit in enumerate(fruits, start=1):
    print(f"序号{index}：{fruit}")
```

#### 3. for…else 结构

```python
# for...else：循环正常遍历完所有元素时执行else块
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(f"当前数字：{num}")
    if num == 10:  # 条件不满足，不会触发break
        break
else:
    print("遍历完所有数字")

# 被break中断时不执行else
for num in numbers:
    print(f"当前数字：{num}")
    if num == 3:
        break
else:
    print("遍历完所有数字")  # 这行不会执行
```

#### 4. 遍历字典

```python
# 遍历字典
person = {"name": "Alice", "age": 25, "city": "Beijing"}

# 遍历键
for key in person:
    print(f"键：{key}，值：{person[key]}")

# 遍历键值对（推荐）
for key, value in person.items():
    print(f"{key}：{value}")

# 只遍历值
for value in person.values():
    print(value)

# 只遍历键
for key in person.keys():
    print(key)
```

### 四、循环控制关键字：break 和 continue

#### 1. break 语句

- 用于终止整个循环
- 常用于条件满足时提前退出循环

```python
# break终止循环示例
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for num in numbers:
    if num == 5:
        print(f"找到数字5，终止循环")
        break  # 终止整个for循环
    print(f"当前数字：{num}")
```

#### 2. continue 语句

- 用于跳过当前迭代，继续下一次循环
- 常用于过滤特定条件

```python
# continue跳过当前迭代示例
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for num in numbers:
    if num % 2 == 0:  # 过滤偶数
        continue  # 跳过偶数，执行下一次循环
    print(f"奇数：{num}")

# 输出：
# 奇数：1
# 奇数：3
# 奇数：5
# 奇数：7
```

#### 3. 嵌套循环中的控制

```python
# 嵌套循环中的break和continue
# 外层循环控制行数，内层循环控制列数
for i in range(1, 4):
    for j in range(1, 4):
        if j == 2:
            continue  # 跳过内层循环的j=2
        print(f"i={i}, j={j}")
    if i == 2:
        break  # 终止外层循环

# 输出：
# i=1, j=1
# i=1, j=3
# i=2, j=1
# i=2, j=3
```

### 五、pass 语句：占位符与空操作

#### 1. 基本用法

- 作为空语句占位符
- 用于语法上需要语句但逻辑上不需要操作的情况

```python
# pass基本用法：语法占位符
if 10 > 5:
    pass  # 暂时不想写逻辑，用pass避免语法错误

for i in range(5):
    pass  # 循环体暂时为空

def my_function():
    pass  # 函数体暂时未实现
```

#### 2. 实际应用场景

```python
# pass实际应用场景
# 1. 开发中的临时占位
def calculate_average(numbers):
    # 待实现：计算平均值
    pass

# 2. 异常处理中的占位（谨慎使用）
try:
    num = int("abc")
except ValueError:
    pass  # 静默处理异常（生产环境不推荐，至少记录日志）

# 3. 条件分支的占位
user_role = "guest"
if user_role == "admin":
    # 管理员逻辑待实现
    pass
elif user_role == "user":
    # 普通用户逻辑待实现
    pass
else:
    print("未知角色")
```

### 六、综合示例：猜数字游戏

```python
import random

# 猜数字游戏
def guess_number():
    # 生成1-100之间的随机数
    secret_number = random.randint(1, 100)
    max_attempts = 7  # 最大尝试次数
    attempt = 0

    print("欢迎来到猜数字游戏！")
    print(f"我已经生成了一个1-100之间的数字，你有{max_attempts}次机会猜对它！")

    while attempt < max_attempts:
        try:
            # 获取用户输入
            guess = int(input(f"\n第{attempt+1}次尝试，请输入你猜的数字："))
            attempt += 1

            # 判断猜测结果
            if guess == secret_number:
                print(f"恭喜你！第{attempt}次就猜对了，正确数字是{secret_number}！")
                break
            elif guess < secret_number:
                print("太小了！")
            else:
                print("太大了！")

            # 检查是否用完所有机会
            if attempt == max_attempts:
                print(f"\n游戏结束！正确数字是 {secret_number}。")
        except ValueError:
            print("请输入有效的数字！")
            continue  # 跳过剩余代码，继续下一次循环

# 运行游戏
guess_number()
```

### 七、最佳实践与注意事项

1. 缩进规则：Python严格依赖缩进，保持一致的缩进风格（建议4空格）
2. 避免过度嵌套：超过3层的条件/循环嵌套应考虑重构
3. 循环优化：
  - 在for循环中优先使用内置函数（如enumerate(), zip())
  - 避免在循环中修改被遍历的列表（推荐创建新列表）
4. else的合理使用：
  - for…else 在需要检测”是否完成遍历”时非常有用
  - while…else 常用于输入验证场景
5. 谨慎使用pass：
  - 仅在开发初期作为占位符
  - 避免在异常处理中滥用pass（可能隐藏错误）

### 总结

1. 条件语句：使用if-elif-else结构实现多分支逻辑，三目运算符可简化简单条件判断
2. 循环语句：
  - while 适用于次数不确定的循环，while…else 可处理循环正常完成的场景
  - for 适用于遍历序列/集合，for…else 可检测是否完整遍历
3. 控制关键字：
  - break 终止整个循环，continue 跳过当前迭代
  - pass 作为占位符满足语法要求，避免滥用
4. 应用场景：通过猜数字游戏等实例可综合运用条件判断、循环、异常处理等核心语法
