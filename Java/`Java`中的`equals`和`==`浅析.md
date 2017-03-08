# `Java`中的`equals`和`==`浅析
先看一段`Java`代码：
```
package test;

public class HelloWorld {
	public static void main(String[] args) {
		 String str1 = new String("hello");
		 String str2 = new String("hello");

		 System.out.println(str1==str2);
		 System.out.println(str1.equals(str2));
	}
}
```
输出结果：
```
false
true
```
输出结果不一样？==和equals方法之间的区别是什么？

## 关系操作符“==”到底比较的是什么？
`eg`:
```
public class Main {

    /**
     * @param args
     */
    public static void main(String[] args) {
        // TODO Auto-generated method stub

        int n=3;
        int m=3;

        System.out.println(n==m);

        String str = new String("hello");
        String str1 = new String("hello");
        String str2 = new String("hello");

        System.out.println(str1==str2);

        str1 = str;
        str2 = str;
        System.out.println(str1==str2);
    }

}
```
输出结果为 `true false true`

`n==m`结果为`true`，这个很容易理解，变量`n`和变量`m`存储的值都为`3`，肯定是相等的。而为什么`str1`和`str2`两次比较的结果不同？要理解这个其实只需要理解基本数据类型变量和非基本数据类型变量的区别。

在`Java`中游`8`种基本数据类型：

　　浮点型：`float(4 byte), double(8 byte)``

　　整型：`byte(1 byte), short(2 byte), int(4 byte) , long(8 byte)``

　　字符型: `char(2 byte)``

　　布尔型: `boolean`(`JVM`规范没有明确规定其所占的空间大小，仅规定其只能够取字面值`"true"`和`"false"`)

对于这`8`种基本数据类型的变量，变量直接存储的是“值”，因此在用关系操作符==来进行比较时，比较的就是 “值” 本身。要注意浮点型和整型都是有符号类型的，而`char`是无符号类型的（`char`类型取值范围为`0~2^16-1`).

也就是说比如：
```
　　int n=3;

　　int m=3;　
```
变量`n`和变量`m`都是直接存储的`"3"`这个数值，所以用`==`比较的时候结果是`true`。

而对于非基本数据类型的变量，在一些书籍中称作为 引用类型的变量。比如上面的`str1`就是引用类型的变量，引用类型的变量存储的并不是 “值”本身，而是于其关联的对象在内存中的地址。比如下面这行代码：
```
　　String str1;
```

这句话声明了一个引用类型的变量，此时它并没有和任何对象关联。

而通过`new String("hello")`来产生一个对象（也称作为类`String`的一个实例），并将这个对象和`str1`进行绑定：
```
　　str1= new String("hello");
```
那么`str1`指向了一个对象（很多地方也把`str1`称作为对象的引用），此时变量`str1`中存储的是它指向的对象在内存中的存储地址，并不是“值”本身，也就是说并不是直接存储的字符串`"hello"`。这里面的引用和`C/C++`的指针很类似。

因此在用`==`对`str1`和`str2`进行第一次比较时，得到的结果是`false`。因此它们分别指向的是不同的对象，也就是说它们实际存储的内存地址不同。

而在第二次比较时，都让`str1`和`str2`指向了`str`指向的对象，那么得到的结果毫无疑问是`true`。
## equals比较的又是什么？
`equals`方法是基类`Object`中的方法，因此对于所有的继承于`Object`的类都会有该方法。为了更直观地理解`equals`方法的作用，直接看`Object`类中`equals`方法的实现。
源码：
```
public boolean equals(Object obj) {
    return (this == obj);
}
```
很显然，在`Object`类中，`equals`方法是用来比较两个对象的引用是否相等，即是否指向同一个对象。

但是有些朋友又会有疑问了，为什么下面一段代码的输出结果是`true`？
```
String str1 = new String("hello");
String str2 = new String("hello");  
System.out.println(str1.equals(str2));
```
要知道究竟，可以看一下`String`类的`equals`方法的具体实现，同样在该路径下，`String.java`为`String`类的实现。

下面是`String`类中`equals`方法的具体实现：
```
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```
可以看出，`String`类对`equals`方法进行了重写，用来比较指向的字符串对象所存储的字符串是否相等。

## 总结
其他的一些类诸如`Double，Date，Integer`等，都对`equals`方法进行了重写用来比较指向的对象所存储的内容是否相等。

　　总结来说：

　　1）对于`==`，如果作用于基本数据类型的变量，则直接比较其存储的 “值”是否相等；

　　　　如果作用于引用类型的变量，则比较的是所指向的对象的地址

　　2）对于`equals`方法，注意：`equals`方法不能作用于基本数据类型的变量

　　　　如果没有对`equals`方法进行重写，则比较的是引用类型的变量所指向的对象的地址；

　　　　诸如`String、Date`等类对`equals`方法进行了重写的话，比较的是所指向的对象的内容。
