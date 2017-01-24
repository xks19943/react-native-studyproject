package com.studyproject.activity;

import android.os.Bundle;

import com.studyproject.wechat.WeChatModule;

/**
 * Created by liaoye on 2016/10/20.
 */
public class WXEntryActivity extends MainActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WeChatModule.handleIntent(getIntent());
        finish();
    }
}
