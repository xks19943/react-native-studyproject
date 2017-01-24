package com.studyproject.button;

import android.view.ViewGroup;
import android.widget.Button;

import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by liaoye on 2016/8/24.
 * //控件视图继承对应的原生的控件
 */
public class ReactButton extends Button{
    public ReactButton(ThemedReactContext reactContext) {
        super(reactContext);
        setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT
        ));
    }

    private final Runnable mLayoutRunnable = new Runnable() {
        @Override
        public void run() {
            measure(MeasureSpec.makeMeasureSpec(getWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getHeight(), MeasureSpec.EXACTLY));
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };

    @Override
    public void requestLayout() {
        super.requestLayout();
        post(mLayoutRunnable);
    }

}
