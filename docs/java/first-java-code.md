对于初学者，我们先不着急写代码，要搞清楚编写 Java 代码的流程。

## 写 Java 代码的三个步骤

1. **创建**：首先需要创建一个`.java` 结尾的文件，这就是 Java 源代码文件；
2. **编译**：Java 源代码是不能直接运行的，它需要先编译成字节码文件。使用命令 `javac xxx.java` 来编译源代码，会生成一个同名的 `.class` 结尾的文件，编译功能是 JVM 提供的，不同的平台需要实现各自的 JVM 功能；
3. **运行**：使用命令 `java class文件名` 可以运行 Java 程序。注意命令中的 class 文件不要带后缀名，否则会运行报错。

## 基础代码

这是一段最基础的 Java 代码：

```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

作为初学者，看不懂这段代码是正常的，而有其他语言基础的，大概能看懂这段代码的含义。我先解释一下这段代码，哪怕不懂，也要留一个印象。

`public class Demo` 是定义了一个公众的**类** `Demo`，而**类**是 Java 语言中最基本的组成单元，`Demo` 就是类名。

`public static void main(String[] args)` 这是定义了一个 `main` 方法，在 Java 中，`main` 方法是程序的入口，JVM 执行代码，也会从 `main` 方法开始执行。

`System.out.println("Hello World")` 是打印语句，将想要输出的内容打印到控制台。

如果学过 `Typescript`，你会发现这段代码很容易看懂，包括名词的含义，只是 Java 有一些固定写法上的差异。

## 关于文件名和类名一致问题

一般来说，代码中的类名必须和 Java 文件名保持一致。其实也可以不一致，如果不一致，在定义类时要去掉 `public` 关键字；反之，如果 `class` 前面用了 `public`，此时类名必须要和文件名一致。

按照上面说法，文件代码中应该只有一个类，但实际可以写多个类，重要的是**只能有一个类要用 `public` 定义**。不建议在一个 Java 文件中写多个 `class`，一个文件中就写一个 `class`，且带 `public`。

在一个就是 `main` 方法必须写在带 `public` 的类中。
