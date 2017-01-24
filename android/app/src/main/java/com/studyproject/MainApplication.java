package com.studyproject;

import android.app.Activity;
import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;


import com.studyproject.button.ReactButtonPackage;
import com.studyproject.jpush.JPushPackage;
import com.studyproject.react.camera.RCTCameraPackage;
import com.studyproject.react.datetime.RCTDateTimePickerPackage;
import com.studyproject.react.imagepicker.ImagePickerPackage;
import com.studyproject.react.picker.PickerViewPackage;
import com.studyproject.react.popup.PopupPackage;
import com.studyproject.react.toast.ToastPackage;
import com.studyproject.react.vector.VectorIconsPackage;
import com.studyproject.wechat.WeChatPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ImagePickerPackage(),
          new ToastPackage(),
          new ReactButtonPackage(),
          new RCTCameraPackage(),
          new PopupPackage(),
          new RCTDateTimePickerPackage(),
          new VectorIconsPackage(),
          new WeChatPackage(),
          new PickerViewPackage(),
          new JPushPackage(false,false)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
