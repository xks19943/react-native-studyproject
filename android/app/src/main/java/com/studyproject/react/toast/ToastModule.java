package com.studyproject.react.toast;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.studyproject.activity.HomeActivity;

/**
 * Created by liaoye on 2016/8/23.
 * 学习react-native 封装原生模块
 */
public class ToastModule extends ReactContextBaseJavaModule implements ActivityEventListener{
    public static final int OPEN = 100;
    private Context mContext;
    private String result;
    private Callback callback;

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
        //注册activity的监听
        reactContext.addActivityEventListener(this);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    //创建一个方法给react-native中的ja调用,必须加上对应的注解： @ReactMethod 只有这样才能被react-native寻找到
    @ReactMethod
    public void showToast(String msg){
        Toast.makeText(mContext,msg,Toast.LENGTH_LONG).show();
    }

    //启动一个原生的界面，并且像原生界面传递信息
    @ReactMethod
    public void startActivityFromJs(String msg, Callback callback){
        Activity currentActivity = getCurrentActivity();
        this.callback = callback;
        if(currentActivity!=null){
            Intent intent = new Intent(currentActivity, HomeActivity.class);
            intent.putExtra("data",msg);
            currentActivity.startActivityForResult(intent,OPEN);
        }else{
            this.callback.invoke("当前Activity不存在");
        }
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if(requestCode==OPEN && resultCode==200){
            if(data!=null){
                result = data.getStringExtra("return_data");
                Log.i("onActivityResult",result);
                callback.invoke(result);
            }
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
