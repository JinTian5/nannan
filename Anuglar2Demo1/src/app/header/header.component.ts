import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name ='我是绑定的姓名';
  public obj ={};
  constructor(public http:HttpClient) { 
    var api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api,'callback').subscribe(response => {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",response);
    }); 
  }

  public peopleInfo:any={

    username:'',
    sex:'2',
    cityList:['北京','上海','深圳'],
    city:'上海',

    hobby:[{

          title:'吃饭',
          checked:false
      },{

            title:'睡觉',
            checked:false
        },{

          title:'敲代码',
          checked:true
      }],

      mark:''

  }

  ngOnInit(): void {
  }
  doSubmit(){

    /*    
    jquery  dom操作

      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value);    
    */


    console.log(this.peopleInfo);


  }

}
