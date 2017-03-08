# Java的main方法相关问题
* 如果`main`方法被声明为`private`会怎么样？  
  如果是在`IDE`中运行，比如`Eclipse`中连`Java Application`按钮都没有,所以能通过编译但是不能运行，在命令行中运行应该是会提示`main`方法不是`public`.
* 说明一下`public static void main(String args[])`这段声明里每个关键字的作用
  `public`: `main`方法是`Java`程序运行时调用的第一个方法，因此它必须对`Java`环境可见。所以可见性设置为`public`.  
  `static`: `Java`平台调用这个方法时不会创建这个类的一个实例，因此这个方法必须声明为`static`。  
  `void`: `main`方法没有返回值。  
  `String`是命令行传进参数的类型，`args`是指命令行传进的字符串数组。
* 如果去掉了`main`方法的`static`修饰符会怎样？  
  程序能正常编译。运行时会抛NoSuchMethodError异常。
