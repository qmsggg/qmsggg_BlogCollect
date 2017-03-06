# 获取未安装的APK图标、版本、包名、名称、是否安装、安装、打开
## 获取APK图标
```
public static Drawable getApkIcon(Context context, String apkPath) {
		PackageManager pm = context.getPackageManager();
		PackageInfo info = pm.getPackageArchiveInfo(apkPath,
				PackageManager.GET_ACTIVITIES);
		if (info != null) {
  			ApplicationInfo appInfo = info.applicationInfo;
  			appInfo.sourceDir = apkPath;
  			appInfo.publicSourceDir = apkPath;
  			try {
  			     return appInfo.loadIcon(pm);
  			} catch (OutOfMemoryError e) {
  				   Log.e("ApkIconLoader", e.toString());
  			}
		}
		return null;
	}
```
以下代码段中PackageManager、PackageInfo、ApplicationInfo均同上面一致。
##  获取APK名称
```
String label = appInfo.loadLabel(mPackManager).toString();
```
##  获取APK包名
```
String packageName = appInfo.packageName;
```
##  获取APK版本
```
String version = info.versionName==null?"0":info.versionName
```
##  判断APK是否安装
```
private boolean isApkInstalled(String packagename)
{
    PackageManager localPackageManager = getPackageManager();
    try
    {
        PackageInfo localPackageInfo = localPackageManager.getPackageInfo(packagename, PackageManager.GET_UNINSTALLED_PACKAGES);
        return true;
      } catch (PackageManager.NameNotFoundException localNameNotFoundException)
      {
          return false;
      }
}
```
##  安装APK
```
private void installAPK(String apkPath)
{
     Intent intent = new Intent();
     intent.setAction(Intent.ACTION_VIEW);
     intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
     intent.setDataAndType(Uri.parse("file://" + apkPath),
    			"application/vnd.android.package-archive");
     mContext.startActivity(intent);
}
```
##  打开APK
```
private void openAPK(String packagename)
{
    PackageManager packageManager = mContext.getPackageManager();
    Intent intent=new Intent();
    intent =packageManager.getLaunchIntentForPackage(packagename);
    mContext.startActivity(intent);
}
```
## 静默安装
