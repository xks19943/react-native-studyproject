package com.studyproject.button;



import android.os.SystemClock;
import android.text.TextUtils;
import android.view.View;


import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by liaoye on 2016/8/24.
 * 创建对应的控件视图管理类
 */
public class ReactButtonManager extends SimpleViewManager<ReactButton> {

    @Override
    public String getName() {
        return "RCTButton";
    }

    //创建对应的控件视图
    @Override
    protected ReactButton createViewInstance(final ThemedReactContext reactContext) {
        return new ReactButton(reactContext);
    }

    //给javaScript提供调用的方法
    @ReactProp(name = "text")
    public void setText(ReactButton view,String text){
        if(!TextUtils.isEmpty(text)){
            view.setText(text);
        }
    }

     //获取导出的绑定事件常量参数
    @Nullable
    @Override
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put(
                        "click",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onClick")))
                .put(
                        "longClick",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onLongClick")))
                .build();
    }

    //添加事件发送器
    @Override
    protected void addEventEmitters(final ThemedReactContext reactContext, final ReactButton view) {
        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher()
                        .dispatchEvent(new ReactButtonClickEvent(view.getId(), SystemClock.uptimeMillis()));
            }
        });
        view.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View v) {
                reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher()
                        .dispatchEvent(new ReactButtonLongClickEvent(view.getId(), SystemClock.uptimeMillis()));
                return true;
            }
        });
    }
}
