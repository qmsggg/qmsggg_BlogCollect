# ArrayList的toArray()方法详解
## 背景
工作一年多了，似是而非的接触Java已经一年，每天忙于堆业务，改Bug，没时间去学习Java的基础知识，仅仅局限于会使用Java语言，这样子肯定是不行的。今天无意间看到一个Android开源Library，里面有这样一段代码：
```
public void notifyUpdateSkin(Object arg) {
    SkinObserver[] arrLocal;

    synchronized (this) {
        arrLocal = observers.toArray(new SkinObserver[observers.size()]);
    }

    for (int i = arrLocal.length-1; i>=0; i--)
        arrLocal[i].updateSkin(this, arg);
}
```
看了半天居然没看懂`arrLocal = observers.toArray(new SkinObserver[observers.size()]);`
这行代码，也就是没看懂`toArray()`方法。什么都别说了，赶紧努力学习。
## 知识详解
`ArrayList`提供了一个将`List`转化为数组的方法`toArray`。`toArray`有两个重载的方法:
* list.toArray();
* list.toArray(T[] a);
第一个方法是将`List`直接转化为`Object[]`数组；
第二个方法是将`List`转化为你需要类型的数组，就是直接转化为T[]类型，但是肯定和存储在列表中的类型是相同的才行。

## 问题
```
ArrayList<String> ll = new ArrayList<>();
for (int index = 0; index < 10; index++) {
	 ll.add(""+index);
}
String[] array= (String[]) ll.toArray();
```
如果我们想上面那样使用会报如下错误：
```
Exception in thread "main" java.lang.ClassCastException: [Ljava.lang.Object; cannot be cast to [Ljava.lang.String;
```
不能将`Object[]`转化为`String[]`类型，如果要转化就只能将每个元素进行逐一转化：
```
Object[] objects = ll.toArray();
for (int index = 0; index < objects.length; index++) {
    String eString = (String) objects[index];
}
```
所以第二个方法就可以直接解决上述的问题：
```
ll.toArray(new String[ll.size()]);
```
## 源码解析
* toArray()
```
public Object[] toArray() {
    return Arrays.copyOf(elementData, size);
}
```
* toArray(T[] a)
```
public <T> T[] toArray(T[] a) {
    if (a.length < size)
        // Make a new array of a's runtime type, but my contents:
        return (T[]) Arrays.copyOf(elementData, size, a.getClass());
    System.arraycopy(elementData, 0, a, 0, size);
    if (a.length > size)
        a[size] = null;
    return a;
}
```  

## 遗留问题
`System.arraycopy()`和`Arrays.copyof()`的实现和区别？
