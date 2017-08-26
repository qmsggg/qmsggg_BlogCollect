# 用EventBus实现完全退出App实战
## 背景
通过简单的使用`EventBus`来实现完全退出一个`App`，通过`EventBus`的事件通知机制，在需要退出的时候发送消息，就不用通过`Activity`自定义栈来管理和实现。（别人已实现，自己写一遍，纪录一下加深印象）
## 具体实现
* `AppEventApp`
首先定义一个`AppEventApp`类，用`EventBus`事件传输
* `BaseActivity`
其次定义一个`BaseActivity`类，继承于`Activity`在其`onCreate()`方法中调用:
```
EventBus.getDefault().register(this);
```
在`onDestroy()`方法中调用:
```
EventBus.getDefault().unregister(this);
```
同时实现事件接收的方法:
```
@Subscribe(threadMode = ThreadMode.MAIN)
public void onMessageEvent(AppExitEvent event) {
    finish();
    System.exit(0);
}
```
这个方法主要是接收消息后去退出`Acitivity`
*  最后让每个`Activity`去继承于`BaseActivity`,在需要退出的地方调用以下代码:
```
EventBus.getDefault().post(new AppExitEvent());
```

## 感悟
在接收到退出消息之前其实还是可以做很多事情，比如发个广播等。
