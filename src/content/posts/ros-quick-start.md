---
title: "快速上手"
slug: "ros-quick-start"
date: "2026-06-02"
category: "ROS"
description: "ROS 2 节点与功能包的入门记录。"
draft: false
legacySlug: "工具/ROS/工具/ROS/ROS"
---

### Node

#### 创建节点

#### 1.python示例

新建python文件”node.py”

```python
import rclpy
from rclpy.node import Node
def main():
    rclpy.init()    #初始化
    node=Node("Python_node")     #创建节点
    node.get_logger().info("python节点")
    rclpy.spin(node)
    rclpy.shutdown()

if __name__=="__main__":
    main()
```

终端输入`python3 node.py`

#### 2.C++示例

```cpp
#include"rclcpp/rclcpp.hpp"  
int main(int argc,char**argv)   #程序入口参数 argc表示参数数量 argv表示参数数组
{
    rclcpp::init(argc,argv);
    auto node=std::make_shared<rclcpp::Node>("cpp_node");
    RCLCPP_INFO(node->get_logger(),"c++节点");
    rclcpp::spin(node);
    rclcpp::shutdown();
    return 0;    
}
```

在编译时经常会遇到找不到对应库的问题，在cmakelist文件里需要添加依赖项目<br>

```cpp
set(CMAKE_CXX_STANDARD 17)    #ros2大量使用了 C++17,需要指定使用c++17编译
cmake_minimum_required(VERSION 3.8)
project(ros2_cpp)
add_executable(ros2_cpp_node cpp_node.cpp)

find_package(rclcpp REQUIRED)      
message(STATUS ${rclcpp_INCLUDE_DIRS})   #头文件及依赖的头文件
target_include_directories(ros2_cpp_node PUBLIC $(rclcpp_INCLUDE_DIRS))  #包含头文件
target_link_libraries(ros2_cpp_node ${rclcpp_LIBRARIES}) #链接库文件
```

<br>

find_package() #查找依赖库的位置，找不到会报错，找到后会生成一系列标准后缀的变量

<br>

_INCLUDE_DIRS（头文件包含路径）_LIBRARIES（需要链接的库文件）_VERSION（包的版本号）

<br>

message()向终端输出信息

### Package

#### 创建和使用package

##### python示例

1.`ros2 pkg create --build-type ament_python demo_python_pkg #创建功能包`<br>在demo_python_pkg目录下有以下文件<br>[原文图片缺失：image-4.png]

demo*python*pkg文件夹下放置节点代码，__init**.py标识这是python包<br>resource文件夹下放置功能包的标识 不用操作<br>test文件夹放置单元测试文件<br>package.xml该文件声明功能包的信息<br>setup.cfg 文本文件 放置配置选项<br>setup.py 构建脚本文件

2.在pkg文件夹下按照之前的方法创建节点，然后在setup.py中修改entry_points的内容”‘exe的名字’=’功能包名.节点文件名.函数名’,”如下<br>[原文图片缺失：image-3.png]<br>3.在package.xml文件中添加依赖`<depend>rclpy</depend>`<br>4.构建功能包 `colcon build`<br>在当前目录下产生build install log三个文件夹。build存放构建过程中文件，install存放构建的结果 log存放构建日志

注：编译生成的可执行文件在install-xxx.pkg-lib-xxx.pkg下 直接运行会提示找不到包 需要添加环境变量 ros2提供了一个脚本<br>终端输入`source install/setup.bash` 把编译好的工作环境也加到环境变量中<br>再输入`ros2 run 包名 节点名`即可启动节点

#### C++示例

### 工作空间

在workspace文件夹下创建src文件夹用来存放所有的功能包<br>`colcon build #构建src下所有的功能包` ws文件夹下有src build install log四个文件夹<br>`colcon build --packages-select xxx #只构建指定的功能包`
