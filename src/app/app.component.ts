import { Component } from '@angular/core';
import {PostsService} from './services/post.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostsService],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title: string;
  name: string;
  surname: string;
  adress: adress;
  student: string[];
  showstudent: boolean;
  posts: Posts[];

  constructor(private postService: PostsService){
  	this.title = "Title of Angular";
  	this.name = "memmed";
    this.surname = "memmedli";
  	this.adress = {
  		street:"nerimanov",
  		city: "baku"
  	}
  	this.student = ["Memmed", "Nezrin"];
  	this.showstudent = false;
  	// console.log("hello");
    this.postService.getPosts().subscribe(posts=>{
      this.posts = posts;
    });
  }

  toggleStudent(){
  	if(this.showstudent == false) {
  		this.showstudent = true;
  	}else{
  		this.showstudent = false;
  	}
  }
  addStudent(students){
    this.student.push(students);
  }
  deleteStudent(i){
    this.student.splice(i,1);
  }
}
interface adress{
	street: string;
	city: string;
}
interface Posts{
  id: number;
  title: string;
  body: string;
}