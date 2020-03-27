# scanner

## 创建Scanner对象语法

```java
Scanner scan = new Scanner(System.in);
```

## 使用next()获取输入的字符串

```
import java.util.Scanner;

public class ScanTest1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (scanner.hasNext()) {
            String str1 = scanner.next();
            System.out.println("Input:" + str1);
        }
        scanner.close();
    }
}
```

## 使用nextLine()获取字符串

```
public class ScanTest2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (scanner.hasNextLine()) {
            String str1 = scanner.nextLine();
            System.out.println("Input:" + str1);
        }
        scanner.close();
    }
}
```

以上二者区别

nextLine()见到回车就结束，而next()必须得到有效字符

next()获取第一个空格前数据（比如，输入a b c得到a，输入 a b得到a）

## 用nextInt()获取整数

```
public class ScanTest3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (scanner.hasNextInt()) {
            int str1 = scanner.nextInt();
            System.out.println("Input:" + str1);
        }
        scanner.close();
    }
}
```

同样，还有nextShort, nextFloat, nextDouble, nextBoolean, nextByte, nextChar, nextBigInteger, nextBigDecimal...

# 字符串

## String

## StringBuilder

## StringBuffer

# 继承、抽象、接口、多态等实例

# Date

# 泛型

```java
class DataHolder<T>{
    T item;
    
    public void setData(T t) {
    	this.item=t;
    }
    
    public T getData() {
    	return this.item;
    }
    
    /**
     * 泛型方法
     * @param e
     */
    public <E> void PrinterInfo(E e) {
    	System.out.println(e);
    }
}
```

## 通配符

- <T>，<?>...

？ 表示不确定的java类型
T (type) 表示具体的一个java类型
K V (key value) 分别代表java键值中的Key Value
E (element) 代表Eleme

- 上界通配符<? entends T>
- 下界通配符<? super T>

<a href="https://juejin.im/post/5b614848e51d45355d51f792#heading-11">深入理解java泛型</a>

# 异常

# 注解

# Lamda

# File

# 函数式接口

# Stream

# 反射

# JDBC