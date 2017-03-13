# `Android`动画之`Property_Animation`
属性动画，顾名思义就是：沿着一定的时间顺序，通过改变`View`的属性，从而得到的动画的效果。引入属性动画最大的作用就是为了“眼见为实”，对于`ViewAnimation`，动画的移动和缩放并没有真正的改变控件的位置和热区，而属性动画则可以做到这一点。而同样重要的一点则是他的灵活性，属性动画几乎可以定义出你想要的所有动效。

`ValueAnimator`是整个属性动画机制当中最核心的一个类，前面我们已经提到了，属性动画的运行机制是通过不断地对值进行操作来实现的，而初始值和结束值之间的动画过渡就是由`ValueAnimator`这个类来负责计算的。它的内部使用一种时间循环的机制来计算值与值之间的动画过渡，我们只需要将初始值和结束值提供给`ValueAnimator`，并且告诉它动画所需运行的时长，那么`ValueAnimator`就会自动帮我们完成从初始值平滑地过渡到结束值这样的效果。除此之外，`ValueAnimator`还负责管理动画的播放次数、播放模式、以及对动画设置监听器等，确实是一个非常重要的类。
首先来认识下他的相关类。

`Interface`
- `Animator.AnimatorListener`:	动画监听器从一个动画接收通知消息。
- `Animator.AnimatorPauseListener`:`	A pause listener receives notifications from an animation when the animation is paused or resumed.`
- `LayoutTransition.TransitionListener`:	此接口用来监听转变的开始事件与结束事件。
- `TimeAnimator.TimeListener`:	此接口实现可将自身设置为`TimeAnimator`实例的更新监听器并接受回调，在每一帧上获得自动画开始以来的时间和自上一帧以来的时间间隔。
- `TimeInterpolator`: 时间内插器定义了一个动画的变化的速率。
- `TypeEvaluator`:	使用setEvaluator(TypeEvaluator)功能需要的接口。
- `ValueAnimator.AnimatorUpdateListener`:	动画每一帧都会对此接口进行回调
- `ValueAnimator`:	实例的更新监听器并接受回调， 当已经为该ValueAnimator计算出当前帧的值以后。

`Class`

- `Animator`:	是那些具有启动、结束且包含`AnimatorListeners`的基础支持功能的类的超级类。
- `AnimatorInflater`:	此类用来将Animator XML文件实例化并注入`Animator`类。
- `AnimatorListenerAdapter`:	此适配器为`Animator.AnimatorListener`的方法提供了空的实现。
- `AnimatorSet`:	此类将一组Animator对象按指定的顺序播放。
- `AnimatorSet.Builder`:	为方便向`AnimatorSet`加入`animation`对象（连同不同`animation`对象之间的关系）工具类。
- `ArgbEvaluator`:	此计算器可作为类型内插器，于代表`ARGB`颜色的整型值之间。
- `FloatEvaluator`:	此计算器可作为类型内插器，于浮点型数值之间。
- `IntEvaluator`:	此计算器可作为类型内插器，于整型数值之间。
- `Keyframe`:	该类包含了一个`animation`类的`time/value`值对。
- `LayoutTransition`:	该类在 `ViewGroup`类中使得背景可以是自动的动画。
- `ObjectAnimator`:	`ValueAnimator`的子类，提供了对目标对象的属性动画的支持。
-` PropertyValuesHolder`:	该类载有一个属性的信息，以及此属性在动画过程需要用到的值。
- `RectEvaluator`:	`This evaluator can be used to perform type interpolation between Rect values`.
- `TimeAnimator`:	该类为已经与系统中所有其他动画对象同步的监听器提供一个简单的回调机制。
- `ValueAnimator`:	该类为运行中的动画对象提供一个简单的时间引擎，以便计算动画的值并将结果设置于目标对象。  

这里要着重记录的是这几个类：
- `ValueAnimator`  属性动画的核心类
- `ObjectAnimator`  继承 `ValueAnimator` 对`ValueAnimator`进行了一层封装
- `AnimatorSet`  可以同时运行一组动画
- `PropertyValuesHolder`  他代表一个在动画运行中需要过度到的值。
- `TypeEvaluator`  实现此接口的实例，将决定`AnimatorUpdateListener`接收到的值。

这里有必要说明一下，上面对动画的描述是“运行”，而不是“播放”。因为属性动画的本质是在指定的时间内于指定的值之间过度。这就意味着他并不仅限于`View`控件。举例来说，他可以是一个不断运动的看不见的点，而你在需要的时候可以通过回调知道在某一时间点对应的值，从而进行`canvas`的绘制。
