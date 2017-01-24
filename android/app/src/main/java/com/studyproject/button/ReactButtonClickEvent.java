package com.studyproject.button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by liaoye on 2016/8/24.
 */
public class ReactButtonClickEvent extends Event<ReactButtonClickEvent>{

    public static final String EVENT_NAME = "click";

    public ReactButtonClickEvent(int id, long l) {
        
    }


    @Override
    public String getEventName() {
        return EVENT_NAME;
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        rctEventEmitter.receiveEvent(getViewTag(), getEventName(), serializeEventData());
    }

    private WritableMap serializeEventData() {
        WritableMap eventData = Arguments.createMap();
        eventData.putString("data","点击事件");
        return eventData;
    }
}
