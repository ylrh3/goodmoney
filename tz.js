package com.gzz.whyinzi;
import android.net.Uri;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.Menu;
import android.view.View;
public class MainActivity extends Activity {
    private static final String TAG = "ActivityDemo"; 

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        
        Intent intent = new Intent();        
        intent.setAction("android.intent.action.VIEW");    
        Uri content_url = Uri.parse(https://ylrh3.github.io/zhifu/);   
        intent.setData(content_url);  
        startActivity(intent);

        
    }

        @Override  
        protected void onResume() {  
            super.onResume(); 
            Intent intent = new Intent();        
            intent.setAction("android.intent.action.VIEW");    
            Uri content_url = Uri.parse("https://ylrh3.github.io/zhifu/");   
            intent.setData(content_url);  
            startActivity(intent);
            Log.e(TAG, "start onResume~~~");  
        }  

        @Override  
        protected void onStop() {  
            super.onStop();  
            this.finish();
            Log.e(TAG, "start onStop~~~");  
        }  
}
