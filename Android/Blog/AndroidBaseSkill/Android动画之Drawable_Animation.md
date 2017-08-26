# `Android`动画之`Drawable_Animation`
```
<?xml version="1.0" encoding="UTF-8"?>
<animation-list xmlns:android="http://schemas.android.com/apk/res/android"
 	android:oneshot="false">
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_00" />
            <item android:drawable="@drawable/login_loading_10" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_01" />
            <item android:drawable="@drawable/login_loading_11" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_02" />
            <item android:drawable="@drawable/login_loading_12" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_03" />
            <item android:drawable="@drawable/login_loading_13" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_04" />
            <item android:drawable="@drawable/login_loading_14" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_05" />
            <item android:drawable="@drawable/login_loading_15" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_06" />
            <item android:drawable="@drawable/login_loading_16" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_07" />
            <item android:drawable="@drawable/login_loading_17" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_08" />
            <item android:drawable="@drawable/login_loading_18" />
        </layer-list>
    </item>
    <item android:duration="100">
        <layer-list>
            <item android:drawable="@drawable/login_loading_09" />
            <item android:drawable="@drawable/login_loading_19" />
        </layer-list>
    </item>
</animation-list>
```
其中`android:oneshot=“true”`表示该动画只播放一次，等于`false`时则循环播放。`<item/>`标签定义各个帧显示的图片。显示顺序依照`<item/>`定义顺序。

代码中使用:
```
public class MainActivity extends Activity {  

    private AnimationDrawable loadingAnimation;  

    @Override  
    protected void onCreate(Bundle savedInstanceState) {  
        super.onCreate(savedInstanceState);  
        requestWindowFeature(Window.FEATURE_NO_TITLE);  
        setContentView(R.layout.activity_main);  
        //将该逐帧xml文件设置为ImageView的背景  
        ImageView loadingImg = (ImageView) findViewById(R.id.loading);  
        loadingImg.setBackgroundResource(R.drawable.loading);  
        loadingAnimation = (AnimationDrawable) loadingImg.getBackground();  
    }  

    /**
     * 触摸屏幕，结束动画
     */  
    public boolean onTouchEvent(MotionEvent event) {  
        if (event.getAction() == MotionEvent.ACTION_DOWN) {  
            loadingAnimation.stop();  
            return true;  
        }  
        return super.onTouchEvent(event);  
    }  

    /**
     * activity显示到屏幕则开启动画
     */  
    @Override  
    public void onWindowFocusChanged(boolean hasFocus) {  
        // TODO Auto-generated method stub  
        super.onWindowFocusChanged(hasFocus);  
        if (hasFocus)  
            loadingAnimation.start();  
    }  

}  
```
[借鉴学习](http://blog.csdn.net/chziroy/article/details/40424343)
