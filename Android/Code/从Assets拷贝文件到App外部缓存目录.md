```
private String copySkinFromAssets(String name) {
    String skinDir = SkinFileUtils.getSkinDir(mAppContext);
    String skinPath = skinDir + File.separator + name;
    try {
        InputStream is = mAppContext.getAssets().open(
                SkinConstants.SKIN_DEPLOY_PATH
                        + File.separator
                        + name);
        File fileDir = new File(skinDir);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        OutputStream os = new FileOutputStream(skinPath);
        int byteCount;
        byte[] bytes = new byte[1024];

        while ((byteCount = is.read(bytes)) != -1) {
            os.write(bytes, 0, byteCount);
        }
        os.close();
        is.close();

    } catch (IOException e) {
        e.printStackTrace();
    }
    return skinPath;
}
```
