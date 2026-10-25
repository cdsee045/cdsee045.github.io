---
title: "Python类与对象"
slug: "python-classes-and-objects"
date: "2026-06-02"
category: "Python"
description: "Python 类、对象与面向对象编程笔记。"
draft: false
legacySlug: "工具/Python/工具/python数据分析/Python类与对象"
---

# Python 类与对象

---

## 1. 什么是类和对象

在 Python 中，类和对象是面向对象编程的基础。

- **类（class）**：一类事物的“模板”或“图纸”。
- **对象（object）**：根据类创建出来的具体实例。

你可以把类理解成“设计图”，把对象理解成“按设计图造出来的实体”。

### 例子

如果我们要描述“学生”：

- 类：学生模板，规定学生有哪些信息和行为
- 对象：张三、李四这些具体学生

类通常包含两类内容：

- **属性**：描述这个对象有什么特征，比如姓名、年龄、成绩
- **方法**：描述这个对象能做什么，比如学习、考试、休息

---

## 2. 类的基本语法

定义类最常见的形式如下：

```python
class Person:
    pass
```

这里：

- `class` 是定义类的关键字
- `Person` 是类名，通常使用大驼峰命名法
- `pass` 表示暂时什么都不写，作为占位

### 创建对象

```python
p1 = Person()
```

这表示用 `Person` 类创建了一个对象 `p1`。

### 说明

- 类名一般首字母大写，如 `Student`、`Employee`、`Animal`
- 文件名通常用小写加下划线，如 `student.py`
- 类名要尽量表达清楚用途

---

## 3. `self` 和 `__init__`

这两个是类中最重要的基础。

### 3.1 `self`

`self` 表示“当前这个对象自己”。

在类的方法里，`self` 是第一个参数，Python 会自动把当前对象传进去。

```python
class Person:
    def say_hello(self):
        print("hello")
```

调用时：

```python
p = Person()
p.say_hello()
```

Python 实际上会把 `p` 作为第一个参数传入方法。

### 3.2 `__init__` 初始化方法

`__init__` 是初始化方法，也叫构造方法。<br>当你创建对象时，它会自动执行。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

创建对象：

```python
p = Person("张三", 18)
```

此时：

- `p.name` 的值是 `张三`
- `p.age` 的值是 `18`

### 作用

`__init__` 的作用就是给对象设置初始属性。

---

## 4. 属性、方法与实例

### 4.1 属性

属性是对象的数据，例如：

- 姓名
- 年龄
- 工资
- 库存

属性分为两种常见类型：

- **实例属性**：属于某个对象
- **类属性**：属于整个类，所有对象共享

### 4.2 方法

方法就是类里面定义的函数，用来描述行为。

```python
class Student:
    def study(self):
        print("正在学习")
```

### 4.3 实例

对象也可以叫实例。实例就是类的具体表现。

```python
s = Student()
```

`Student` 是类，`s` 是实例。

---

## 5. 封装

封装是面向对象三大特性之一。

### 5.1 什么是封装

封装就是：

- 把数据和操作数据的方法放在一起
- 尽量隐藏内部细节
- 对外只提供必要的使用方式

### 5.2 为什么要封装

封装的好处：

- 防止数据被随便修改
- 提高代码安全性
- 让代码更容易维护

### 5.3 私有属性

在 Python 中，属性名前面加双下划线 `__`，通常表示私有属性。

```python
class Student:
    def __init__(self, name):
        self.__name = name
```

外部通常不能直接访问 `__name`。

### 5.4 通过方法访问私有属性

通常我们会写“获取方法”：

```python
class Student:
    def __init__(self, name):
        self.__name = name

    def get_name(self):
        return self.__name
```

这样外部可以通过 `get_name()` 访问数据，而不是直接乱改。

### 5.5 常见命名习惯

- `__name`：私有属性
- `_name`：通常表示“受保护属性”或内部使用，虽然不是严格私有，但一般不建议外部直接改
- `name`：公有属性，可以直接访问

---

## 6. 继承

继承也是面向对象三大特性之一。

### 6.1 什么是继承

继承表示：一个类可以获取另一个类的属性和方法，并在此基础上扩展。

- 父类：基类、超类
- 子类：派生类

### 6.2 语法

```python
class Animal:
    def eat(self):
        print("吃东西")

class Dog(Animal):
    def bark(self):
        print("汪汪叫")
```

`Dog` 继承了 `Animal`，因此 `Dog` 对象可以使用 `eat()`。

### 6.3 `super()`

当子类需要调用父类的初始化方法时，常用 `super()`。

```python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed
```

### 6.4 继承的好处

- 减少重复代码
- 提高复用性
- 方便扩展新功能

---

## 7. 多态

多态也是面向对象三大特性之一。

### 7.1 什么是多态

多态指的是：

- 同一个方法名
- 在不同子类中有不同表现

### 7.2 例子

```python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        print("汪汪")

class Cat(Animal):
    def speak(self):
        print("喵喵")
```

虽然都叫 `speak()`，但不同动物说话方式不同。

### 7.3 多态的意义

多态让代码更灵活：

- 统一接口
- 不同实现
- 更容易扩展

---

## 8. 类变量与实例变量

### 8.1 实例变量

实例变量属于某个具体对象，每个对象可以不同。

```python
class Person:
    def __init__(self, name):
        self.name = name
```

### 8.2 类变量

类变量属于类本身，所有对象共享。

```python
class Person:
    country = "中国"
```

### 8.3 区别

- 实例变量：每个对象有自己的值
- 类变量：所有对象共用一个值

### 8.4 使用建议

如果一个数据是所有对象共有的，可以用类变量；如果是每个对象各自不同的，应该用实例变量。

---

## 9. 常见魔术方法

魔术方法是 Python 中以双下划线开头和结尾的方法，例如 `__init__`。

### 常见方法

- `__init__`：初始化对象
- `__str__`：对象转字符串时自动调用
- `__repr__`：对象的正式字符串表示
- `__len__`：调用 `len()` 时使用
- `__add__`：处理加法运算

### 例子

```python
class Student:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Student(name={self.name})"
```

调用：

```python
s = Student("张三")
print(s)
```

输出时会自动调用 `__str__`。

---

## 10. 实战示例

下面用一个员工系统的小例子把知识串起来。

### 10.1 需求

我们希望描述员工，并区分：

- 全职员工：基础工资 + 绩效奖金
- 兼职员工：基础工资 + 工时 × 时薪

### 10.2 设计思路

- `Employee`：父类，保存姓名、工号、基础工资
- `FullTime`：子类，增加绩效奖金
- `PartTime`：子类，增加工时和时薪

### 10.3 代码理解重点

- `Employee` 负责公共信息
- 子类继承公共信息
- 子类重写 `get_salary()` 实现不同薪资算法
- 使用 `try-except` 处理非法输入

### 10.4 模板

```python
class 父类:
    def __init__(self, 公共属性):
        ...

    def 公共方法(self):
        ...

class 子类(父类):
    def __init__(self, 公共属性, 子类属性):
        super().__init__(公共属性)
        ...

    def 重写方法(self):
        ...
```

## 11. 常见错误与排查

### 11.1 忘记写 `self`

错误示例：

```python
class Student:
    def say():
        print("hi")
```

正确写法：

```python
class Student:
    def say(self):
        print("hi")
```

### 11.2 把方法当变量用

如果写的是：

```python
self.get_name
```

这只是方法本身，没有执行。

如果要调用方法，应该写：

```python
self.get_name()
```

### 11.3 私有属性直接访问

如果属性写成 `__name`，一般不要直接在类外部访问。

推荐通过方法访问：

```python
obj.get_name()
```

### 11.4 子类初始化忘记调用父类

如果子类需要父类属性，一定要记得：

```python
super().__init__(...)
```

### 11.5 输出格式混乱

涉及金额、价格、小数时，推荐使用：

```python
f"{value:.2f}"
```

这样可以保留两位小数，输出更规范。

---

## 12. 小练习

1. 写一个 `Person` 类，包含姓名和年龄
2. 写一个 `Student` 类，继承 `Person`
3. 给 `Student` 增加成绩属性
4. 写一个 `speak()` 或 `show_info()` 方法
5. 用 `try-except` 处理输入错误
6. 用 `__str__` 改善打印效果
