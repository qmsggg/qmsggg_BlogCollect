# `ListView`悬浮头部实现
[参考项目](http://www.cnblogs.com/xqxacm/p/5642063.html)
## 实现效果
在添加头部的情况下，当`ListView`中的头部视图滑动到顶端时不消失，停留在页面的顶部，固定住。
## 实现原理
* `ListView`提供方法`addHeadView(View)`可以在`ListView`的头部添加一个视图，这个视图可以和`ListView`一起滚动
* 用`FrameLayout`布局，在`ListView`的上方放一个和头部一样的视图，默认设置为不显示，当滑动时 `firstVisibleItem`>=要悬浮的`item`的`position`时,让在`ListView`上方的视图显示 ，否则隐藏

## 实现代码
#### 第一个头部的布局代码:
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:gravity="center">
    <ImageView
        android:layout_width="match_parent"
        android:layout_height="90dp"
        android:src="@mipmap/ic_launcher"
        android:scaleType="fitXY"/>
</LinearLayout>
```  
#### 悬浮头部的布局代码:  
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="horizontal"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:gravity="center">

    <ImageView
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:src="@mipmap/ic_launcher_round"
        android:scaleType="fitXY"/>

</LinearLayout>
```
#### 整个布局代码:
```
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    >

    <TextView
        android:id="@+id/personCenter"
        android:layout_width="match_parent"
        android:layout_height="30dp"
        android:gravity="center"
        android:text="个人中心"
        android:textSize="20dp"
        />

    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        >

        <ListView
            android:id="@+id/listviews"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        <!--这个是和悬浮头部相同的布局视图，事先隐藏-->
        <LinearLayout
            android:id="@+id/header_false"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:visibility="gone"
            >

            <ImageView
                android:layout_width="match_parent"
                android:layout_height="50dp"
                android:src="@mipmap/ic_launcher_round"
                android:scaleType="fitXY"
                />
        </LinearLayout>
    </FrameLayout>


</LinearLayout>
```
#### `Activity`里面的代码:
```
package com.example.hankcoder.completequitapp;

import android.os.Bundle;
import android.view.View;
import android.widget.AbsListView;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.ListView;

import com.example.hankcoder.completequitapp.base.BaseActivity;

public class MainActivity extends BaseActivity {

    private LinearLayout mLlFalseHeader;
    private ListView mLvContent;

    private String[] mContent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.linearlayout_listview);
        generateData();
        initView();
    }

    private void initView() {
        mLlFalseHeader = (LinearLayout) findViewById(R.id.header_false);
        mLvContent = (ListView) findViewById(R.id.listviews);
        View header = View.inflate(this, R.layout.linearlayout_listview_header2, null);
        mLvContent.addHeaderView(header);
        mLvContent.addHeaderView(View.inflate(this, R.layout.linearlayout_listview_header, null));
        mLvContent.setAdapter(new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, mContent));
        mLvContent.setOnScrollListener(new AbsListView.OnScrollListener() {
            @Override
            public void onScrollStateChanged(AbsListView view, int scrollState) {

            }

            @Override
            public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {
                if (firstVisibleItem >= 1) {
                    mLlFalseHeader.setVisibility(View.VISIBLE);
                } else {
                    mLlFalseHeader.setVisibility(View.GONE);
                }
            }
        });
    }

    private void generateData() {
        mContent = new String[100];
        for (int index = 0; index < mContent.length; index++) {
            mContent[index] = "data" + " " + index;
        }
    }
}
```

## 感悟
下次用这个原理来实现一个有很多不同头部的`ListView`，每次滑动到当前头部时就自动悬浮当前的头部？
