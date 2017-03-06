# Android屏幕适配及DisplayMetrics解析
[参考文章](http://blog.csdn.net/hp910315/article/details/48501197)
# 背景
在自己的项目开发中一直用的都是别人写好的屏幕尺寸单位转换函数，都没有自己去专门看看其中的原理，以及各个单位之间的区别及用法，其实在上面的参考文章中已经写的很好了，我这里相当于记录一下，自己写一遍加深理解并加入自己的理解。
# 基本概念
* 屏幕尺寸  
屏幕尺寸指屏幕的对角线的长度，单位是英寸(`in`)，`1`英寸=`2.54`厘米
* px  
是英文单词`pixel`的缩写，意为像素，屏幕上的点。我们通常所说的分辨率如`480X800`就是指的像素，一般以纵向像素`*`横向像素。
* dpi  
`dpi`是`Dots Per Inch`的缩写, 每英寸点数，即每英寸包含像素个数。
* density  
屏幕密度，`density`和`dpi`的关系为 `density = dpi/160`
* dp和dip  
设备独立像素，`device independent pixels`的缩写，`Android`特有的单位，在屏幕密度`dpi = 160`屏幕上，`1dp = 1px`
* sp   
和`dp`很类似，一般用来设置字体大小，和`dp`的区别是它可以根据用户的字体大小偏好来缩放。
#### 问题
 * 为什么我们需要推荐使用`dp`而不推荐使用`px`  
不使用`px`的原因是由于不同的手机分辨率是不同的，相同的像素对应的尺寸是不同的。  
推荐使用`dp`的原因是我们可以通过`dp`设置指定的尺寸，这个不受像素的影响，是像素无关的。从上面可以看出`dp`就是等于屏幕密度，从而可以得到`1dp`对应设备的像素，这样我们就可以设置真实的尺寸大小，这个大小跟像素是无关的。就是说`dp`能够让同一数值在不同的分辨率展示出大致相同的尺寸大小。
 * 为什么dp还是不能解决屏幕适配的问题  
`dp`可以用来设置指定尺寸，这个不受像素的影响，这样对不同的手机我们可以指定相同的尺寸，但还有一个问题就是市面上的手机尺寸并不是相同的,常见的屏幕尺寸有`2.4、2.8、3.5、3.7、4.2、5.0、5.5、6.0`等,对于这么多尺寸，我们在为布局设置宽高的时候，的确可以使用dp来给定一个固定的大小，但是我们却不知道用户手机的尺寸是多少，如果设置尺寸太大，可能屏幕容纳不小，如果设置的尺寸太小，屏幕可能留出许多的空白区域。

# Android Drawable适配
* 普通drawable  
新建一个`Android`项目后应该可以看到很多`drawable`文件夹，分别对应不同的`dpi`
  ```
  drawable-ldpi (dpi=120, density=0.75)

  drawable-mdpi (dpi=160, density=1)

  drawable-hdpi (dpi=240, density=1.5)

  drawable-xhdpi (dpi=320, density=2)

  drawable-xxhdpi (dpi=480, density=3)
  ```
  对于五种主流的像素密度`（MDPI、HDPI、XHDPI、XXHDPI 和 XXXHDPI）`应按照 `2:3:4:6:8` 的比例进行缩放。  
  我们一般的做法是以高分辨率作为设计大小，然后按照倍数对应缩小到小分辨率的图片。因为小分辨率在生成高分辨率图片的时候，会出现像素丢失。

# 布局的适配
对于不同的屏幕，如果差别太大，我们就需要使用不同的布局文件，我们可以通过使用配置限定符，在运行时根据当前的设备配置自动选择合适的资源了，例如根据各种屏幕尺寸选择不同的布局。
根据物理尺寸的大小准备`5`套布局:   
`layout`(放一些通用布局`xml`文件，比如界面顶部和底部的布局，不会随着屏幕大小变化，类似`windos`窗口的`title bar`)  
`layout-small`(屏幕尺寸小于3英寸左右的布局）  
`layout-normal`(屏幕尺寸小于4.5英寸左右）  
`layout-large`(4英寸-7英寸之间）  
`layout-xlarge`(7-10英寸之间）  
# 百分比布局
这是最理想的一种布局方案，使用百分比就可以完全不用担心适配的问题。`android-percent-support`这个库
用法可以看下面博客：[`Android` 百分比布局库``(percent-support-lib`) 解析与扩展；`Android` 增强版百分比布局库 为了适配而扩展](http://blog.csdn.net/lmj623565791/article/details/46695347)
.
另外，还有另外一种方案，根据一个基准,比如`480*320`的分辨率为基准，对各种不同手机的像素按照这个标准将垂直像素和水平像素分别均分成`480`份和`320`份。这样就可以得到每一份的像素，我们在设置的时候，直接使用份数就可以了，这也相当于是百分比，具体参照下面文章：[`Android` 屏幕适配方案](http://blog.csdn.net/lmj623565791/article/details/45460089)
# 注意点
* 使用wrap_content、match_parent、weight  
`weight`的计算方法：设置宽度(`android:layout_width`) + 剩余宽度的占位比
* 使用相对布局，禁用绝对布局
* 使用限定符
* 使用自动拉伸位图

# DisplayMetrics解析
* 获取屏幕分辨率信息的三种方法  
```
DisplayMetrics metrics = new DisplayMetrics();
Display display = activity.getWindowManager().getDefaultDisplay();
display.getMetrics(metrics);
```
```
DisplayMetrics metrics=activity.getResources().getDisplayMetrics();
```
```
Resources.getSystem().getDisplayMetrics();
```
* 上面所有的单位到px的转换
`android.util.TypedValue`类提供了一个函数，支持把所有的单位换算到px，实现代码如下：
```
public static float applyDimension(int unit, float value,  
                                   DisplayMetrics metrics)  
{  
    switch (unit) {
    //px：pixel
    case COMPLEX_UNIT_PX:  
        return value;  
    //dp（dip）
    case COMPLEX_UNIT_DIP:  
        return value * metrics.density;
    //sp  
    case COMPLEX_UNIT_SP:  
        return value * metrics.scaledDensity;  
    //pt ： 1/72英寸
    case COMPLEX_UNIT_PT:  
        return value * metrics.xdpi * (1.0f/72);
    //in： inch 英寸
    case COMPLEX_UNIT_IN:  
        return value * metrics.xdpi;  
    //mm ： 毫米  1英寸=25.4毫米
    case COMPLEX_UNIT_MM:  
        return value * metrics.xdpi * (1.0f/25.4f);  
    }  
    return 0;  
}
```
 从上面我们可以看到`dp、sp、pt、in、mm`转换为`px`的方法。

 在上面用到了`DisplayMetrics`对象，在这个对象中有哪些内容，我们来看看这个类。
 ```
  //设备的绝对宽度，单位是px
  public int widthPixels;
  //设备的绝对高度，单位是px
  public int heightPixels;
  //屏幕密度，它的计算方法在上面的概念中已经给出了
  public float density;
  //dpi 上面的概念已经给出，单位尺寸的像素点
  public int densityDpi;
  //字体显示的缩放因子，跟上面的density是一样
  public float scaledDensity;
  //水平方向的dpi
  public float xdpi;
  //竖直方向的dpi
  public float ydpi;
 ```
* 运用
 在`TextView`里面有个`setTextSize`方法，它可以指定设置字体的单位。
 ```
 mTestText1 = (TextView) findViewById(R.id.test1);
 mTestText1.setTextSize(TypeValue.COMPLEX_UNIT_SP, 18);
 ```
 上面就是将TextView对象的字体设置为`18sp`.
 我们来看看它内部的实现源码:
 ```
 public void setTextSize(float size) {
      setTextSize(TypedValue.COMPLEX_UNIT_SP, size);
 }
 public void setTextSize(int unit, float size) {
    Context c = getContext();
    Resources r;
    if (c == null)
        r = Resources.getSystem();
    else
        r = c.getResources();
    setRawTextSize(TypedValue.applyDimension(
        unit, size, r.getDisplayMetrics()));
 }
 ```
 从上面可以看到，它默认单位就是`TypedValue.COMPLEX_UNIT_SP`，最终调用的其实就是上面我们讲到的`TypedValue.applyDimension`方法，其实它就是把`sp`转成了`px`.

# 相关文章
[`Android`屏幕适配全攻略(最权威的官方适配指导)](http://blog.csdn.net/zhaokaiqiang1992/article/details/45419023)

[`Android` 屏幕适配](http://blog.csdn.net/wangqing830414/article/details/26214959)

[`android`屏幕适配详解](http://www.cnblogs.com/error404/p/3815739.html)

# 官方链接

[`Supporting Multiple Screens`](http://developer.android.com/guide/practices/screens_support.html)
