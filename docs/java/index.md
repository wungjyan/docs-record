学习 Java 的笔记，学习版本为 `17.0.10`。

这里主要先介绍一些Java相关的概念。

## Java SE、Java EE 和 Java ME 的区别

- Java SE（Java Platform，Standard Edition 标准版）：是 Java 平台的基础部分，包含了 Java 的核心类库，如 I/O 操作、多线程支持、网络编程等等。允许在桌面和服务器上开发和部署 Java 应用程序。**主要针对开发桌面程序的**
- Java EE（Java Platform，Enterprise Edition 企业版）：是 Java SE 的企业级扩展，专注于提供企业级应用开发的解决方案。**主要针对于Web应用程序开发。**
- Java ME（Java Platform，Micro Editon 微型版）：是针对嵌入式设备和移动设备设计的 Java 平台版本。可以为资源受限的设备（如手机、PDA、机顶盒和打印机）提供 Java 应用程序的运行环境。**主要针对手机软件，嵌入式设备软件开发**

## JVM 的理解

JVM（Java Virtual Machine），即 Java 虚拟机。它为 Java 字节码提供了一个运行环境，使得 Java 代码可以跨平台运行，实现“一次编写，到处运行”的功能。在不同的系统平台，只要安装了对应的 jvm 版本，就可以实现 Java 代码在该平台运行。

> **平台无关性**：JVM 把 Java 源代码编译成字节码（.class 文件），而不是直接生成特定平台的机器码。字节码是一种中间代码，可以在任何安装了 JVM 的平台上运行，只要该 JVM 能够理解字节码。

## JDK 和 JRE

- JDK（Java Development Kit）：是 Java 开发工具包，为开发人员设计的，包含了编写、编译和调试 Java 应用程序所需的所有工具和资源。同时它包含了 JRE。
- JRE（Java Runtime Environment）：是 Java 运行时环境，主要提供一个 Java 应用程序的环境。它包含了 JVM，可以解释执行字节码。

总结就是，JDK 是一个完整的开发环境，包含了 JRE 和额外的开发工具；而 JRE 是一个运行环境，仅包含了运行 Java 程序所必需的部分。所以**开发人员，直接安装 JDK 就行**。

## 安装 JDK

一般安装 JDK 指的是安装 Java SE，因为它是语言基础。官方下载地址：https://www.oracle.com/java/technologies/downloads/archive/#JavaSE

选择对应的 Java SE 版本下载安装即可。安装后关于环境变量的设置，这里不作阐述，能搜索的资料很多。
