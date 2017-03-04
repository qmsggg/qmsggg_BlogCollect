# TabLayout+ViewPager_简单实现app底部Tab布局
[参考项目1](http://www.jianshu.com/p/adf7a994613a)  
[参考项目2](http://blog.csdn.net/m190607070/article/details/51852068)  

# 背景
这个不是什么项目需求推动，只是自己在这方面使用的少，以前也不喜欢写博客，没有什么技术积累，自己参照网上的例子动手实践一下，加深印象。
# 实践过程
### 引入所需要的包
因为`TabLayout`和`ViewPager`分别是属于`design`和`v4`包下的，所以我们先在`app`的`build.gradle`中添加：
```
compile 'com.android.support:design:25.1.0'
compile 'com.android.support:support-v4:25.1.0'
```
### 编写布局文件
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"s
    tools:context=".MainActivity">

    <android.support.v4.view.ViewPager
        android:id="@+id/viewPager"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:scrollbars="none">
    </android.support.v4.view.ViewPager>

    <android.support.design.widget.TabLayout
        android:id="@+id/tabLayout"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        app:tabGravity="fill"
        app:tabIndicatorHeight="0dp"
        app:tabMode="fixed"
        app:tabSelectedTextColor="#FF4081"
        app:tabTextColor="#000">
    </android.support.design.widget.TabLayout>

</LinearLayout>
```

`TabLayout`中`app:tabIndicatorHeight="0dp"`是为了不显示`tab`底部的横线，`app:tabMode="fixed"`是让底部`tab`布局不可滑动。

### `Acitivity` 源代码:
```
package com.example.hankcoder.completequitapp;

import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;

import com.example.hankcoder.completequitapp.Fragment.FragmentItem;

public class Main3Activity extends AppCompatActivity {

    private TabLayout mTlayout;
    private ViewPager mViewPager;
    private String[] mTitle;

    private TabLayout.Tab mOne;
    private TabLayout.Tab mTwo;
    private TabLayout.Tab mThree;
    private TabLayout.Tab mFour;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.linearlayout_tab_vg);
        initDatas();
        initViews();
        initEvents();
    }

    private void initDatas() {
        mTitle = new String[]{"首页", "分类", "设置", "关于"};
    }

    private void initViews() {
        mTlayout = (TabLayout) findViewById(R.id.tabLayout);
        mViewPager = (ViewPager) findViewById(R.id.viewPager);

        mViewPager.setAdapter(new FragmentPagerAdapter(getSupportFragmentManager()) {
            @Override
            public Fragment getItem(int position) {

                if (position == 1) {
                    return new FragmentItem();
                } else if (position == 2) {
                    return new FragmentItem();
                } else if (position == 3) {
                    return new FragmentItem();
                }
                return new FragmentItem();
            }

            @Override
            public int getCount() {
                return mTitle.length;
            }

            @Override
            public CharSequence getPageTitle(int position) {
                return mTitle[position];
            }
        });

        mTlayout.setupWithViewPager(mViewPager);
        mOne = mTlayout.getTabAt(0);
        mTwo = mTlayout.getTabAt(1);
        mThree = mTlayout.getTabAt(2);
        mFour = mTlayout.getTabAt(3);

        mOne.setIcon(getResources().getDrawable(R.mipmap.ic_launcher_round));
        mTwo.setIcon(getResources().getDrawable(R.mipmap.ic_launcher));
        mThree.setIcon(getResources().getDrawable(R.mipmap.ic_launcher));
        mFour.setIcon(getResources().getDrawable(R.mipmap.ic_launcher));
    }

    private void initEvents() {
        mTlayout.setOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                if (tab == mTlayout.getTabAt(0)) {
                    tab.setIcon(getResources().getDrawable(R.mipmap.ic_launcher_round));
                    mViewPager.setCurrentItem(0);
                } else if (tab == mTlayout.getTabAt(1)) {
                    tab.setIcon(getResources().getDrawable(R.mipmap.ic_launcher_round));
                    mViewPager.setCurrentItem(1);
                } else if (tab == mTlayout.getTabAt(2)) {
                    tab.setIcon(getResources().getDrawable(R.mipmap.ic_launcher_round));
                    mViewPager.setCurrentItem(2);
                } else if (tab == mTlayout.getTabAt(3)) {
                    tab.setIcon(getResources().getDrawable(R.mipmap.ic_launcher_round));
                    mViewPager.setCurrentItem(3);
                }
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {
                if (tab == mTlayout.getTabAt(0)) {
                    mOne.setIcon(getResources().getDrawable(R.mipmap.ic_launcher));
                } else if (tab == mTlayout.getTabAt(1)) {
                    mTwo.setIcon(getResources().getDrawable(R.mipmap.ic_launcher));
                } else if (tab == mTlayout.getTabAt(2)) {
                    mThree.setIcon(getResources().getDrawable(R.mipmap.ic_launcher));
                }else if (tab == mTlayout.getTabAt(3)){
                    mFour.setIcon(getResources().getDrawable(R.mipmap.ic_launcher));
                }
            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });
    }
}
```

# 遗留问题
直接左右滑动没问题，但是点击时，会有两个`tab`显示为红色？
