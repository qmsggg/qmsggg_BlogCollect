# Android 开发之旅

## 进阶

### 高级UI绘制

- UI流程绘制分享
- UI源码级分析
  - View的测量
  - View的布局
  - View的绘制过程
- 绘图及特效制作
  - Paint画笔高级技能（Paint的方法使用技巧、高级渲染（BitmapShader位图渲染、LinearGradient线性渲染、RadialGradient环形渲染、SweepGradient扫描渐变渲染、ComposeShader组合渲染））
  - Xfermode、滤镜效果（BlurMaskFilter滤镜、EmbossMaskFilter滤镜）
  - 颜色通道过滤（ColorMatrixColorFilter 颜色矩阵过滤、LightingColorFilter曝光颜色过滤、PorterDuffColorFilter图层混合颜色过滤）
  - Canvas画板高级技能（Canvas基础使用技巧、Canvas区域切割技巧（实例：android实现IOS Reveal特效））
  - Canvas变换使用技巧（translate、scale、rotate、skew斜拉画布）
  - Canvas图层与状态方法使用技巧（通过save和restore解决图层绘制技术、离屏缓冲技术、PorterDuffColorFilter图层混合颜色过滤）
  - 超强辅助英雄-Path工具类的使用
  - 超强ADC英雄-PathMeasure牛叉辅助类的使用
- 自定义控件
  - 自绘控件
  - 继承控件
  - 组合控件Scroller详解及源码浅析
  - ViewDragHelper详解及源码浅析
  - 自定义View触摸工具类解析（ViewConfiguration基础参数工具类、VelocityTracker手势速率工具类、GestureDetector手势工具类）
  - 大量自定义控件实践（滑动选择价格区间标签控件、热门标签--流式布局、腾讯内部技术-QQ空间之打造个性化可拉伸头部控件、个性化滑动指示器、Material  Design---RecyclerView实现时光轴效果、android实现IOS Reveal特效）
- 事件相关
  - 事件传递机制（深入源码分析）
  - 事件冲突解决
  - 高级动画及特效
  - 属性动画完全解析、MaterialDesign动画（Touch feedback（触摸反馈）、Reveal effect（揭露效果）、Activity transitions（Activity转换效果）、Curved motion（曲线运动）、View state changes （视图状态改变）、Animate Vector Drawables（矢量动画））、SVG（SVG概述、SVG图片使用实例、SVG动画使用实例）、GIF动画引擎框架、自定义动画框架）
- Material Design原材料设计开发
  - NavigationView+DrawerLayout主流侧滑实现、TextInputLayout、Snackbar、Toolbar、Material Design样式属性开发、百分比布局、沉浸式设计、TabLayout、Palette调色板、FloatingActionButton悬浮按钮及联动动画效果、CardView、CoordinatorLayout、AppBarLayout、CollapsingToolbarLayout、Behavior、CollapsingToolbarLayout、自定义Behavior及源码分析

### 性能优化
- 内存泄露分析
  - 发生OOM的条件分析
  - 避免内存泄漏（如何使用更高效的ArrayMap容器、如何避免不经意的“自动装箱”、Lint，StictMode等工具的使用技巧）、
  - 内存管理机制（共享内存、分配与回收内存、限制应用的内存、应用切换操作）、
  - OOM（查看内存使用情况）、onLowMemory与onTrimMemory的回调
  - 性能优化工具的使用
    - MAT、LeakCanary、Memory Monitor、Allocation Tracking、Heap Tool、TraceView、hierarchyviewer布局检测工具
- 第三方分析工具
    - MemoryAnalyzer、GT Home、iTest
- Android的渲染机制分析
  - 渲染性能问题的根源
  - 渲染优化（UI卡顿分析、过度渲染问题、布局优化）
  - 内存优化（内存抖动问题）
  - 计算优化
- 电量优化
  - 分析电量的流失
  - 分析电量消耗数据
  - 分析充电状态和电池管理
  - battery-historian工具的使用
  - 窝信号对电量消耗
  - Job Schedule
- 网络优化
  - Batching批处理技术
  - Prefetching预取技术
  - GCMNetworkManager高级实践
  - Network Traffic Tool工具的使用
- View的性能
  - 自定义View的性能优化
  - 提升View的渲染性能
  - 处理重复layout操作的性能问题
- Bitmap内存优化
  - 缩放性能优化
  - 缓存性能优化
  - 重用性能优化
  - PNG压缩性能优化
  - 微信图片终极压缩方案问题
- 安装包性能优化
  - 打包流程分析
  - aapt资源文件打包原理
  - resources_arsc二进制机构分析
  - 资源文件压缩
  - 资源动态加载
  - Lint工具优化
  - 极限压缩
  - Proguard混淆
- 数据传输的效率优化
  - FlatBuffers
  - WEBP格式图片使用
  - 7Zip极限压缩
- server
  - 隐形内存杀手Service的调优
  - 如何优化后台服务的内存消耗；如何保障服务的常驻内存、双进程守护

- 设计线程池优化性能
  - 多线程并发的性能问题
  - 线程间通讯
  - AsyncTask源码级分析及注意
  - HandlerThread的处理
  - IntentService使用场景分析和实践
  - ThreadPool使用场景和注意
- 程序启动
  - 程序调优提高应用启动速度
  - 线分析程序启动流程、优化启动流程和提速
  - Splash页面优化设计的窍门
  - 缓存加载设计、如何提升主界面响应速度
  
### 音视频
- 手写shell脚本编译FFmpeg（编译动态库和静态库，ffmpeg模块依赖关系详解）
- AndroidStudio搭建音视频开发环境（cmkaeList.txt语法详解）
- 帧内压缩与帧间压缩区别与原理（I帧，P帧，B帧的概念）
- FFmpeg、音频解码、视频解码、音视频同步处理
- OpenSl ES对象生命周期详解及音频播放
- 用ffmpeg手写电视台直播app（直播cctv，凤凰卫视）

### 企业级热门核心技术
- 手写阿里云andfix热修复与Sophix原理分析（class字节码在虚拟机加载流程，探索起源之java方法调用底层分析）
- java方法在Dalvik和Art虚拟机运行原理
- 今日头条双进程实现原理（linux层socket实现进程拉起）
- 微信斗图中带文字的gif动态图合成原理及其手写实现
- 利用系统源码打造gif图的播放
- Bsdiff实现实时更新（服务端linux生成patch）

### OpenCV
- opencv原理详解，结构体 颜色通道使用
- AndroidStudio cmake配置OpenCV开发环境
- OpenCV打造人脸识别
- Opencv打造实时换脸，美女与野兽的新定义
- 利用opencv和OCR打造身份证识别，让你的手机变成公安局
- OpenCV人工智能应用揭秘——车牌号码检测与识别
- 人工智能神经网络在分类器中的运用——android 与人工智能

### 斗鱼视频直播
- 斗鱼直播解决方案（nginx流媒体服务器部署）
- 音视频采集与编码（faac编译到音频推流）
- 视频编码与根据pts和系统计时实现音频同步（X264混合编译和h264编码原理）
- 生产者与消费者实在推流中应用

### 抖音小视频
- opencv人脸跟踪与定位
- 人脸磨皮算法与美白
- 用ARToolkit打造立体甩狗脸趣味功能（增强现实技术）
- 识别嘴型以及变换与放大（图形变化与持续跟踪）
- 视频与音频合成原理分析以及手写实现

### 美颜相机
- 人脸动态贴纸 (opengl FBO与PBO、着色器GLSL语言、OpenCv人脸定位)
- 大眼瘦脸(图像局部缩放、平移，人脸关键点检测)
- 优酷核心技术opengl 打造高性能播放器

### 视频通话
- 腾讯QQ视频通话核心技术-WebRTC
- webrtc实现点对点通信原理
- 实现内网之间直接通信的穿透原理与机制
- 房间服务器、信令服务器、ICE服务器部署配置，Android客户端so库编译
- 手写QQ视频通话-打造无延时高质量的p2p通话以及多人视频会议
- QQ语音变声-让你秒变成萌妹大汉大叔叔

## 4移动架构师
- UML建模
- 图的详解（用例图，类图,序列图,状态图,活动图,组件图,流程图）
- 关系（依赖、泛化 、关联 、实现 ）画法与注意事项
- 代码的结构实现图形化展示（架构初探）
- 正向工程与逆向工程在UML图中的应用
- AOP面向切面架构设计
- OOC,AOP设计思想由来，Aspect、Joint point、Pointcut、Advice、用户行为统计场景、性能监控场景及其应用，Aspect源码分析
- 面向切面思想之用户权限的架构设计

### 源码分析
- Android Handler源码分析
- Message链表原理与重用机制
- Binder核心原理与架构设计
- PackageManagerService源码解析及其apk安装原理
- ActivityManagerService架构设计和揭秘Activity夸进程跳转
- App启动流程源码全解析及Android App应用本质揭秘
- RecyclerView架构与适配器模式原理

### Android事件总线框架设计
- EventBus3.0源码详解与架构分析
- 手写实现EventBus3.0事件总线框架（跨线程调用）
- 手写饿了么进程通信框架Hermes（单例跨进程调用）
- fastjson打造对象在多进程共享桥梁（一个aidl文件解决所有进程通讯需求）
- 进阶之路--手写Hermes与EventBus完美结合框架(适合插件，多app通信)

### 换肤架构设计
- 高德地图，今日头条 编译式换肤详解
- QQ,美团，网易云 动态式换肤架构分析
- 手写网易云可动态替换的换肤框架(字体，状态栏换肤，自定义控件，fragment换肤)
- 项目实战之高可扩展性换肤应用(多种动态皮肤之加载与切换)

### 组件化框架设计
- 组件化之集中式路由--阿里巴巴ARouter原理（无Intent式）
- 手写ARouter 组件化路（应用AbstractProcessor编译时技术实现,Path与Activity编译时映射）
- 终结篇--项目实战手写组件化式路由（重定向，跳转前预处理--登录，统一跳转入口，支持多类型参数传递，多Moudle跳转）

### 插件化框架设计（插桩式）
- 大众点评核心技术揭秘-AndroidDynamicLoader架构分析
- 支付宝是如何集成共享单车功能于一身的占坑式插件解决方案
- Activity,Service ,四大组件无缝插桩。生命周期标准制定与接入
- 宿主和插件之间组件的通信，以及宿主和插件的调用
- 插件内页面之间Activity自由跳转（无注册式）

### 插件化框架设计（Hook式）
- 手写360式插件化架构
- Activity启动流程原理详解 及hook点寻找
- 进程管理，插件进程详解及设计
- 在项目实战中检验插件化架构稳定性(可靠性，稳定性)
- 手写360式插件架构--支持在不安装商业应用内直接跳转

### 插件化升级之路
- APK运行机制原理详解（伪造虚拟AMS，PMS，欺骗系统加载分身）
- 手写微信多开项目（通过aidl打造系统运行沙箱环境）

### 数据库框架设计
- 开源技术之ORMLite核心架构分析
- 华为核心技术-面向对象式手写数据库架构设计（增删改查，自动建表设计）
- 大型项目之实现数据库分库（多用户，多角色，多权限数据库架构设计）
- xml脚本打造数据库版本全量升级架构（xml脚本结构定义，支持数据库单独升级）

### OKHttp网络访问框架设计
- OKHttp网络框架请求队列解析及高并发机制揭秘
- 使用泛型完成手写高扩展的OKHttp网络访问框架设计(支持高并发，请求队列和批量断点下载)

### Glide加载框架设计
- Glide架构思维分析与源码详解
- 手写Glide图片加载框架
- 手写Glide注入内部生命周期(打造不一样的缓存方式)
- 建造者模式打造手写Glide架构的高扩展性
- 请求队列、请求转发、加载器、加载策略、缓存策略详解
- LruCache和DiskLruCache解析
- 完结篇--手写Glide图片加载框架设计

### RXJava响应式编程框架设计
- Rxjava架构分析与源码详解
- 高阶泛型详解 和泛型变换应用
- 手写RxJava响应式架构(链式调度，事件变换，线程切换)
- 深入递归式实现Rxjava订阅链（观察者模式变种）

### IOC框架设计
- 运行时：
  - XUtils3.0源码详解
  - 手写Xutils核心模块IOC注入式框架设计
  - 注解的注解解决事件三要素（扩展Android20种事件注入）
  - 静态代理和动态代理模式详解与应用
  - 完结篇--手写Xutil动态注入架构（注入布局、视图、事件）
- 编译时：
  - ButterKnife详解与原理分析
  - Java文件结构化文本详解（TypeElement,VariableElement,ExecuteableElement,ExecuteableElement）
  - 手写ButterKnife架构实现无性能损耗的编译时框架
  - Dagger2核心原理分析
  - APT实现手写Dagger注入式框架
  - 注解实现依赖注入（让你的类依赖 变得更简单）
  - 手写Component 完成被依赖对象到依赖者的绑定

### 架构师必备技能
- 面向对象思想构建万能interface
- 阿里巴巴FastJSON原理分析与手写实现
- 手写Android全版本编译时权限申请框架（含8.0 动态申请）
- 动态代理打造高可替换的网络库隔离

### 设计模式
- MVC架构设计与经典的三层模型详解
- MVP思想精髓与解耦View与Mode的巧妙设计详解
- 架构提升之路 MVP思想实现项目基础框架搭建
- 更节省的设计模式之MVVM实现数据双向绑定
- DataBinding原理和编译时绑定布局与对象

### 架构篇之项目实战
- 项目基础框架搭建
- 基类与业务逻辑详解
- 主流架构集成与解耦
- 项目中数据库架构设计
- 项目实战之注入式模块集成
- 项目实战之网络请求，图片加载，内存集中式管理，路由跳转
- 打造以MVP,Rxjava,OkHttp,EventBus,Dragger2,greenDao项目
