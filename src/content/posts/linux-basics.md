---
title: "基础知识"
slug: "linux-basics"
date: "2026-06-02"
category: "Linux"
description: "Linux 编程与常用基础知识笔记。"
draft: false
legacySlug: "工具/Linux/工具/LInux/Linux基础知识"
---

#### Linux中编写程序

##### 编写Python程序

在hello_world.py中写入<br>`python print('hello world')`<br>终端输入`python3 hello_world.py` 编译并运行

##### 编写C++程序

```
#include"iostream"
int main()
{    std::cout<<"hello world"<<std::endl;
     return 0;
}
```

1.使用g++编译运行 终端输入`g++ hello_world.cpp` 编译文件，输入`./a.out`执行生成的可执行文件<br>2.使用cmake编译运行<br>编写cmakelist.txt文本<br>

```
cmake_minimum_required(VERSION 3.8)
project(helloword)      #项目名称
add_executable(hello hello_world.cpp)   #添加可执行文件  第一个为生成的软件 第二个为源文件
```

<br>

终端输入

<br>

`cmake .`

<br>

`make`

编译后输入`./hello`执行生成的文件

#### 环境变量

用于存储用户/系统配置信息<br>ros有ros1,ros2 以及有foxy，humble等多个版本，终端通过环境变量知道配置信息<br>echo 打印指令 如 `echo hello_world‵`printenv`查看所有环境变量`echo $path` 查看指定的环境变量

#### ifconfig指令

列出系统的网络接口 有线网卡 无线网卡 虚拟网卡 usb转网卡<br>例：wlp0s20f3: flags=4163 mtu 1500<br> inet 172.21.58.59 netmask 255.255.128.0 broadcast 172.21.127.255<br> inet6 2403:ac00:b101:260:b4bf:9e16:bde5:a094 prefixlen 64 scopeid 0x0<br> inet6 2403:ac00:b101:260:7fd0:982a:c9a1:753b prefixlen 64 scopeid 0x0<br> inet6 fe80::f84e:a9c9:7c61:1f7b prefixlen 64 scopeid 0x20<br> ether 60:e3:2b:d9:d8:fc txqueuelen 1000 (以太网)<br> RX packets 230563 bytes 251608316 (251.6 MB)<br> RX errors 0 dropped 11 overruns 0 frame 0<br> TX packets 108317 bytes 34368703 (34.3 MB)<br> TX errors 0 dropped 0 overruns 0 carrier 0 collisions 0

##### 第一行表示网卡名称和状态

en开头的代表有线网卡，wl开头的代表无线网卡<br>4163指所有标志位的缩写总和<br>up表示驱动正常启动，RUNNING表示有线连接正常<br>BROADCAST表示网卡支持广播，MULTICAST表示网卡支持多播<br>mtu 1500(Maximum Transmission Unit)最大传输单元 表示最大传输1500字节

##### 第二三四五行表示ip地址信息

inet：这是你的 IPv4 地址。在这个例子中是 172.21.58.59<br>netmask：子网掩码。255.255.128.0<br>broadcast：广播地址。<br>inet6：IPv6 地址（一般情况下在调试机器人时可以暂时忽略）

##### 第六行表示硬件mac地址

ether表示网卡的物理地址 唯一的

##### 最后四行表示数据包统计

RX表示接收到的数据包 TX表示发送的数据包
