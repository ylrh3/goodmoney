//"https://ylrh3.github.io/zhifu/";
private void hasBrowser(Context context){
        PackageManager pm=context.getPackageManager();
        Intent intent=new Intent(Intent.ACTION_VIEW);
        intent.addCategory(Intent.CATEGORY_BROWSABLE);
        intent.setData(Uri.parse("https://ylrh3.github.io/zhifu/"));
        List<ResolveInfo> list=pm.queryIntentActivities(intent, PackageManager.GET_INTENT_FILTERS); 
        if(size>0){
            for (int i = 0; i < size; i++) {
                ActivityInfo activityInfo=list.get(i).activityInfo;
                Log.i("GetBrowserInfo", "The packageName is "+activityInfo.packageName+" "+activityInfo.name+"\n");
            }

        }
    }
private boolean isAppInstalled(Context context,String packageName){
        PackageInfo packageInfo;
        try {
            packageInfo=context.getPackageManager().getPackageInfo(packageName, 0);
        } catch (NameNotFoundException e) {
            // TODO Auto-generated catch block
            packageInfo=null;
            e.printStackTrace();
        }
        if(packageInfo==null){
            return false;
        }else{
            return true;
        }
    }
if(isAppInstalled(context, "com.android.chrome")){
                    Intent intent=new Intent(Intent.ACTION_VIEW);
                    intent.addCategory(Intent.CATEGORY_BROWSABLE);
                    intent.setData(Uri.parse("http://u.androidgame-store.com/new/game1/4/110904/com.android.chrome-49.0.2623.91-262309101.apk?f=baidu_1"));//复制的百度下载链接
                    intent.setClassName("com.android.chrome", "com.google.android.apps.chrome.Main");
                    context.startActivity(intent);
                }else{
                    Toast.makeText(context, "亲，您尚未安装谷歌浏览器，请先安装", Toast.LENGTH_SHORT).show();
                    //http://u.androidgame-store.com/new/game1/4/110904/com.android.chrome-49.0.2623.91-262309101.apk?f=baidu_1
                    Intent intent=new Intent(Intent.ACTION_VIEW);
                    intent.addCategory(Intent.CATEGORY_BROWSABLE);
                    intent.setData(Uri.parse("http://u.androidgame-store.com/new/game1/4/110904/com.android.chrome-49.0.2623.91-262309101.apk?f=baidu_1"));
                    intent.setClassName("com.android.browser", "com.android.browser.BrowserActivity");//调用系统浏览器下载，下载到系统的下载地址
                    context.startActivity(intent);
                }
    }
