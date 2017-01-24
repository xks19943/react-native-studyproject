package com.studyproject.react.popup;

import android.app.Activity;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.TranslateAnimation;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.GridView;
import android.widget.ImageView;
import android.widget.PopupWindow;
import android.widget.TextView;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.studyproject.R;

import java.util.ArrayList;

/**
 * Created by liaoye on 2016/9/1.
 */
public class PopupModule extends ReactContextBaseJavaModule implements View.OnClickListener{

    private Callback mCallback;
    private Button btn_one;
    private Button btn_two;
    private Button btn_three;
    private PopupWindow popupWindow;
    private ArrayList<String> list;
    private Activity activity;
    private ButtonAdapter adapter;

    public PopupModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PopupModule";
    }

    @ReactMethod
    public void showPopup(Callback callback) {
        list = new ArrayList<>();
        list.add("交强险");
        list.add("车损险");
        list.add("三者险");
        list.add("车主险");
        list.add("乘客险");
        mCallback = callback;
        activity = getCurrentActivity();
        View contentView = View.inflate(activity, R.layout.layout_pop, null);
        ImageView iv_close = (ImageView) contentView.findViewById(R.id.iv_close);
        iv_close.setOnClickListener(this);
        GridView gv_desc = (GridView) contentView.findViewById(R.id.gv_desc);
        adapter = new ButtonAdapter();
        gv_desc.setAdapter(adapter);
        popupWindow = new PopupWindow(contentView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT, true);
        View decorView = activity.getWindow().getDecorView();
        popupWindow.showAtLocation(decorView, Gravity.BOTTOM,0,0);
        contentView.startAnimation(getTranslateAnimation(250*2,0,300));
        mCallback.invoke("显示成功");
    }


    public void closePopup(){
        if(popupWindow!=null && popupWindow.isShowing()){
            popupWindow.dismiss();
        }
    }

    @Override
    public void onClick(View v) {
        closePopup();
    }


    /**
     * 生成TranslateAnimation
     *
     * @param durationMillis 动画显示时间
     * @param start 初始位置
     */
    protected Animation getTranslateAnimation(int start, int end, int durationMillis) {
        Animation translateAnimation = new TranslateAnimation(0, 0, start, end);
        translateAnimation.setDuration(durationMillis);
        translateAnimation.setFillEnabled(true);
        translateAnimation.setFillAfter(true);
        return translateAnimation;
    }

    class ButtonAdapter extends BaseAdapter{

        @Override
        public int getCount() {
            return list.size();
        }

        @Override
        public Object getItem(int position) {
            return list.get(position);
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            ViewHolder viewHolder = null;
            if(convertView == null) {
                convertView = LayoutInflater.from(activity).inflate(R.layout.item_button,null);
                viewHolder = new ViewHolder();
                viewHolder.btn_desc = (Button) convertView.findViewById(R.id.btn_desc);
                convertView.setTag(viewHolder);
            }else{
                viewHolder = (ViewHolder) convertView.getTag();
            }
            viewHolder.btn_desc.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    v.setSelected(true);
                }
            });
            return convertView;
        }
    }

    class ViewHolder {
        private Button btn_desc;
    }
}