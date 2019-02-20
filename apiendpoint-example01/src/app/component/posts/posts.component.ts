import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  addPostForm: FormGroup;
  idOfPosts: number;
  posts = [];
  btnTextSave = 'save';
  btnTextUpdate = 'update';
  isEditMode = false;

  constructor(private _fb: FormBuilder,
              private _apiService: ApiService) { 
  }

  ngOnInit() {
    this.addPost();
    this.getData();
  }

  addPost() {
    this.addPostForm = this._fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  onSubmit(){
    if(!this.idOfPosts){
      this.addNewPostData();
    }
    else {
      this.updatePostData();     
    }
    this.addPostForm.reset();
  }

  addNewPostData() {
    this._apiService.createPost(this.addPostForm.value)
          .subscribe(res => this.posts.push(res));
  }

  updatePostData() {
    let updatedPostData = this.addPostForm.value;
    updatedPostData.id = this.idOfPosts;

    this._apiService.updatePost(updatedPostData)
          .subscribe(res => {
            this.posts[this.idOfPosts - 1] = res;
            this.idOfPosts = null;
          });      
    this.isEditMode = false;
  }

  getData() {
    this._apiService.getPost()
          .subscribe(res => this.posts = res);
  }

  updatePost(post){
    this.idOfPosts = post.id;
    this.isEditMode = true;
    this.addPostForm.patchValue({
      userId: post.userId,
      title: post.title,
      body: post.body
    });
  }

  removePost(id){
    let msg_confirmbox = 'Are you really want to Remove the post.';
    let confirm_remove_user = confirm(msg_confirmbox);
    if(confirm_remove_user){
      this._apiService.deletePost(id)
          .subscribe(res => this.dataAfterRemoveOperation(id));
    }
  }
  
  dataAfterRemoveOperation(idForRemoveElement) {    
    this.posts = this.posts.filter(user => user.id != idForRemoveElement);
  }

  get userId (){
    return this.formControls['userId'];
  }

  get title (){
    return this.formControls['title'];
  }

  get body (){
    return this.formControls['body'];
  }

  get submitButtonText (){
    if(this.isEditMode){
      return this.btnTextUpdate;
    }
    return this.btnTextSave;
  }

  get formControls (){
    return this.addPostForm.controls;
  }
}