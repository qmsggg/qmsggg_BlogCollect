# `Android`动画之`View_Animation`
`View Animation` 最简单，只支持简单的缩放、平移、旋转、透明度基本的动画。
## `xml`方式使用
### `Alpha`（渐变）
```
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">
    <alpha
        android:fromAlpha="1.0"
        android:toAlpha="0.0"
        android:startOffset="500"
        android:duration="500"/>
</set>
```
### `rotate`（旋转）
- `fromDegrees`: 开始的角度
- `toDegrees`: 结束的角度，`+`表示是正的
- `pivotX`: 用于设置旋转的`x`轴坐标
 - 当值为`50`, 表示使用绝对位置定位
 - 当值为`50%`, 表示使用相对于控件本身定位
 - 当值为`50%p`, 表示使用相对于控件的父控件定位
- `pivotY`: 用于设置旋转是的`y`轴坐标  

```
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">
    <rotate
        android:fromDegrees="0"
        android:toDegrees="+360"
        android:pivotX="50%"
        android:pivotY="50%"
        android:duration="1000"/>
</set>
```
### `scale`（缩放）
```
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">
    <scale
        android:fromXScale="1.0"
        android:toXScale="0.0"
        android:fromYScale="1.0"
        android:toYScale="0.0"
        android:pivotX="50%"
        android:pivotY="50%"
        android:duration="1000"
        />
</set>
```
### `translate`（位移）
```
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">
<translate
    android:fromXDelta="%0"
    android:toXDelta="100%"
    android:fromYDelta="0%"
    android:toYDelta="100%"
    android:duration="1000"
    />
</set>
```

代码中调用：
```
Animation animation = AnimationUtils.loadAnimation(this, R.anim.alpha_test);
menu.startAnimation(animation);
```
## 直接用代码创建动画
```
TranslateAnimation tAnim;
if (swipe_tag == SHOW_MENU) {
    tAnim = new TranslateAnimation(0, max_menu_margin - latestMargin, 0, 0);
    tAnim.setInterpolator(new DecelerateInterpolator());
    tAnim.setDuration(800);
    tAnim.setFillAfter(true);
    menu.startAnimation(tAnim);
} else {
    tAnim = new TranslateAnimation(0, min_menu_margin - latestMargin, 0, 0);
    tAnim.setDuration(800);
    tAnim.setFillAfter(true);
    menu.startAnimation(tAnim);
}
```
