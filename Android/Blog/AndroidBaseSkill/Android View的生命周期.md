# Android View的生命周期
## View生命周期相关方法

View是什么？官方源码注释中的定义：这个类是用户接口的基础构件。View表示屏幕上的一块矩形区域，负责绘制这个区域和事件处理。
View是所有widget类的基类，Widget类用于创建交互式UI构件（按钮，输入框等）。
View类的ViewGroup子类是layout的基类，Layout是一个不可见的容器，它保存着View（或ViewGroup）并定义这些View的layout 属性。

简单点说，View就是屏幕上的一块矩形区域，我们可以在这块区域绘制我们想让用户看到的图形。

关于View的生命周期，官方源码注释中有详细的描述，作为英语六级勉强飘过的选手，我顶着巨大的压力翻译了一下。

### Creation（创建）
Constructors（构造函数）：有一种形式的构造函数会在View在代码中被创建时调用，另一种形式的构造函数会在View从layout加载出来时被调用。
第二种形式的构造函数会解析和应用layout文件中定义的任何属性。
onFinishInflate()：该方法当View及其子View从XML文件中加载完成后会被调用。
### Layout（布局）
onMeasure(int, int)：该方法在计算当前View及其所有子View尺寸大小需求时会被调用。
onLayout(boolean, int, int, int, int)：该方法在当前View需要为其子View分配尺寸和位置时会被调用。
onSizeChanged(int, int, int, int)：该方法在当前View尺寸变化时被调用。
### Drawing（绘制）
onDraw(android.graphics.Canvas)：该方法在当前View需要呈现其内容时被调用。
### Event processing（事件处理）
* onKeyDown(int, KeyEvent)：该方法在一个物理按键事件发生时被调用。
* onKeyUp(int, KeyEvent)：该方法在一个物理按键弹起事件发生时被调用。
* onTrackballEvent(MotionEvent)：该方法在一个轨迹球运动事件发生时被调用。
* onTouchEvent(MotionEvent)：该方法在一个触摸屏幕运动事件发生时被调用。

### Focus（聚焦）
* onFocusChanged(boolean, int, android.graphics.Rect)：该方法在当前View获得或失去焦点时被调用。
* onWindowFocusChanged(boolean)：该方法在包含当前View的window获得或失去焦点时被调用。

### Attaching（附上）
* onAttachedToWindow()：该方法在当前View被附到一个window上时被调用。
* onDetachedFromWindow()：该方法在当前View从一个window上分离时被调用。
* onVisibilityChanged(View, int)：该方法在当前View或其祖先的可见性改变时被调用。
* onWindowVisibilityChanged(int)：该方法在包含当前View的window可见性改变时被调用。
上述方法是View生命周期中涉及到的比较重要的一部分，View类中包含了很多的方法和属性，有兴趣的话各位可以自己研究一下。

### View生命周期相关方法调用顺序

简单的了解了View生命周期相关的几个方法，接着我们看看这些方法调用的顺序是怎样的,我们针对View的可见性分三种情况来观察。

- android:visibility=visible
##### 创建
```
  I/TestView: TestView(Context context, AttributeSet attrs)
  I/TestView: onFinishInflate()
  I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.android.internal.policy.impl.PhoneWindow$DecorView{2192bad9 I.E..... R.....ID 0,0-0,0} visibility = 4
  I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.android.internal.policy.impl.PhoneWindow$DecorView{2192bad9 V.E..... R.....ID 0,0-0,0} visibility = 0
  I/TestView: onAttachedToWindow()
  I/TestView: onWindowVisibilityChanged(int visibility) visibility = 0
  I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743848
  I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743848
  I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073744016
  I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073744016
  I/TestView: onSizeChanged(int w, int h, int oldw, int oldh) w = 1328 h = 2192 oldw = 0 oldh0
  I/TestView: onLayout(boolean changed, int left, int top, int right, int bottom) changed = true left = 56 top = 56 right = 1384 bottom = 2248
  I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743820
  I/TestView: onSizeChanged(int w, int h, int oldw, int oldh) w = 1328 h = 1996 oldw = 1328 oldh2192
  I/TestView: onLayout(boolean changed, int left, int top, int right, int bottom) changed = true left = 56 top = 56 right = 1384 bottom = 2052
  I/TestView: onDraw(Canvas canvas)
  I/TestView: onWindowFocusChanged(boolean hasWindowFocus) hasWindowFocus = true
  I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743820
  I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743820
  I/TestView: onLayout(boolean changed, int left, int top, int right, int bottom) changed = false left = 56 top = 56 right = 1384 bottom = 2052
  I/TestView: onDraw(Canvas canvas)
```
##### 销毁
```
I/TestView: onWindowFocusChanged(boolean hasWindowFocus) hasWindowFocus = false
I/TestView: onWindowVisibilityChanged(int visibility) visibility = 8
I/TestView: onDetachedFromWindow()
```
- android:visibility=invisible
##### 创建
```
I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.example.junyizhou.rxjavademo.TestView{3ead3d52 I.ED.... ........ 0,0-0,0} visibility = 4
I/TestView: TestView(Context context, AttributeSet attrs)
I/TestView: onFinishInflate()
I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.android.internal.policy.impl.PhoneWindow$DecorView{3aeb2b95 I.E..... R.....ID 0,0-0,0} visibility = 4
I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.android.internal.policy.impl.PhoneWindow$DecorView{3aeb2b95 V.E..... R.....ID 0,0-0,0} visibility = 0
I/TestView: onAttachedToWindow()
I/TestView: onWindowVisibilityChanged(int visibility) visibility = 0
I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743848
I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743848
I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073744016
I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073744016
I/TestView: onSizeChanged(int w, int h, int oldw, int oldh) w = 1328 h = 2192 oldw = 0 oldh0
I/TestView: onLayout(boolean changed, int left, int top, int right, int bottom) changed = true left = 56 top = 56 right = 1384 bottom = 2248
I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743820
I/TestView: onSizeChanged(int w, int h, int oldw, int oldh) w = 1328 h = 1996 oldw = 1328 oldh2192
I/TestView: onLayout(boolean changed, int left, int top, int right, int bottom) changed = true left = 56 top = 56 right = 1384 bottom = 2052
I/TestView: onWindowFocusChanged(boolean hasWindowFocus) hasWindowFocus = true
I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743820
I/TestView: onMeasure(int widthMeasureSpec, int heightMeasureSpec) widthMeasureSpec = 1073743152 heightMeasureSpec = 1073743820
I/TestView: onLayout(boolean changed, int left, int top, int right, int bottom) changed = false left = 56 top = 56 right = 1384 bottom = 2052
```
##### 销毁
```
I/TestView: onWindowFocusChanged(boolean hasWindowFocus) hasWindowFocus = false
I/TestView: onWindowVisibilityChanged(int visibility) visibility = 8
I/TestView: onDetachedFromWindow()
```
- android:visibility=gone
##### 创建
```
I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.example.junyizhou.rxjavademo.TestView{3ead3d52 G.ED.... ......I. 0,0-0,0} visibility = 8
I/TestView: TestView(Context context, AttributeSet attrs)
I/TestView: onFinishInflate()
I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.android.internal.policy.impl.PhoneWindow$DecorView{3aeb2b95 I.E..... R.....ID 0,0-0,0} visibility = 4
I/TestView: onVisibilityChanged(View changedView, int visibility) changedView = com.android.internal.policy.impl.PhoneWindow$DecorView{3aeb2b95 V.E..... R.....ID 0,0-0,0} visibility = 0
I/TestView: onAttachedToWindow()
I/TestView: onWindowVisibilityChanged(int visibility) visibility = 0
I/TestView: onWindowFocusChanged(boolean hasWindowFocus) hasWindowFocus = true
```
##### 销毁
```
I/TestView: onWindowFocusChanged(boolean hasWindowFocus) hasWindowFocus = false
I/TestView: onWindowVisibilityChanged(int visibility) visibility = 8
I/TestView: onDetachedFromWindow()
```

## 总结

从中我们可以看出：

View默认为可见的，不是默认值时先调用onVisibilityChanged()，但是此时该View的尺寸、位置等信息都不知道。
可见性改变后才是调用带有两个参数的构造函数，当然，如果该View不是在layout中定义的话，会调用一个参数的构造函数。
从XMl文件中inflate完成（onFinishInflate()）。
将View加到window中（View是gone的，那么View创建生命周期也就结束）。
测量view的长宽（onMeasure()）。
定位View 在父View中的位置（onLayout()），若View是invisible，则View的创建生命周期结束。
绘制View的content（onDraw()），只有可见的View才在window中绘制。
View的销毁流程和可见性没有关系。
综上所述：View的关键生命周期为：

```
[改变可见性] --> 构造View() --> onFinishInflate() --> onAttachedToWindow() --> onMeasure() --> onSizeChanged() --> onLayout() --> onDraw() --> onDetackedFromWindow()
```
自定义View时我们不可避免的要和View生命周期相关函数打交道，可能需要重新其中的某个或某几个来满足定制的需求，因此了解View的生命周期是Android程序猿进阶的必经之路。当然，我们没必要重新所有的方法，如果我们只是单纯的想把一个Bitmap画到View上，那我们只要重写View的onDraw方法就可以了，事实上自定义View的大部分情况我们也只是关注这个方法。
