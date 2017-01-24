package com.studyproject.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.studyproject.R;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        String data = getIntent().getStringExtra("data");
        Toast.makeText(HomeActivity.this,"从react-native界面传递过来的:"+data,Toast.LENGTH_LONG).show();
        Button btn_close =  (Button) findViewById(R.id.btn_close);
        btn_close.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.putExtra("return_data","天天向上");
                setResult(200,intent);
                finish();
            }
        });
    }
}
