import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items=[
    {pageurl:"/first",
     name:"first",
     specifications:["!!!","@@@@@","#####","$$$$$$$$"],
     imageurl:"imageurl1",
     href:"https://api.whatsapp.com/send?phone=918217860187&text=Hello%20first!"
    },
    {pageurl:"/two",
      name:"two",
      specifications:["!!!","@@@@@","#####","$$$$$$$$"],
      imageurl:"imageurl2",
      href:"https://api.whatsapp.com/send?phone=918217860187&text=Hello%20two!"
    },
    {pageurl:"/three",
      name:"three",
      specifications:["!!!","@@@@@","#####","$$$$$$$$"],
      imageurl:"imageurl3",
      href:"https://api.whatsapp.com/send?phone=918217860187&text=Hello%20three"
    }
  ]

}
