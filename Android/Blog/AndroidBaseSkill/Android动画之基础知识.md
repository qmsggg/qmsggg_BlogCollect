# `Android`动画之基础知识
`Android`动画主要分为三大类
- `View Animation`
- `Drawable Animation`
- `Property Animation`

其中`Drawable Animations`对大多数人来说是三者中最容易理解的，其实它就是很多书籍中提到的逐帧动画(`frame-by-frame animation`)。而`Property Animation`和`View Animation`是相对比较容易混淆的，下面先讲解二者的区别。

`View Animation`有两个缺点：（1）`View Animation`一般只能修改组件（`View Object`）的部分属性,比如：`scaling`(大小)和`rotation`(旋转)，但是无法修改组件的背景颜色。（2）`View Animation`使某个组件产生动画效果移动一段距离后，比如从屏幕左侧移动到右侧，其实整个过程是绘制出来的效果，该组件真正的位置依然保留在左侧，只有点击左侧位置才能触发该组件。所以想真正移动某组件，需要在动画结束后添加代码实现。

`Property Animation`则没有以上`View Animation`的两个限制，`Property Animation`可以修改任何对象（`View Object` 或者 `non-view Object`）的任何属性，比如大小，旋转，颜色。并且，移动后的组件，位置也回跟随着改变。

`Android`官网推荐使用`Property Animation`，但是`View Animation`也有其优点：使用方便简单，所以当`View Animation`能方便快速地解决需求时，选择它也是不错的选择。
