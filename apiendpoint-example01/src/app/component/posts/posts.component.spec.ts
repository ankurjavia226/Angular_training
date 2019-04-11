import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { ApiService } from 'src/app/service/api.service';
import { IPosts } from 'src/app/model/posts';
import { DebugElement } from '@angular/core';
import { Observable, of } from 'rxjs';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let componentSpy: Spy<PostsComponent>;
  let fakeData: IPosts;
  let element: DebugElement;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostsComponent 
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule   
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.debugElement.componentInstance;
    componentSpy = createSpyFromClass(PostsComponent);
    fakeData = {
      userId: 789,
      id: 456789,
      title: 'adfdfdfaaaa',
      body: 'adfasdfasfadsfadfsaaaaaa'
    };
    element = fixture.debugElement;
    apiService = element.injector.get(ApiService);
    fixture.detectChanges();
  });

  it('should create posts component and initialize it', () => {
    expect(component.ngOnInit()).toHaveBeenCalled;
  });

  it('onSubmit function should have been called', () => {
    expect(component.onSubmit()).toHaveBeenCalled;
  })

  it('addNewPostData function should have been called', () => {
    expect(component.addNewPostData()).toHaveBeenCalled;
  });

  // it('fakeasync test', fakeAsync(() => {
  //   spyOn(apiService, 'getPost').and.returnValues(Observable.of('Data'))
  //   fixture.detectChanges();
  //   tick();
  //   fixture.detectChanges();
  //   expect(component.getData).toBe('Data');  
  // }));

  it('updatePostData function should have been called', () => {
    expect(component.updatePostData()).toHaveBeenCalled;
  });
 
  it('removePost function should have been called', () => {
    expect(componentSpy.removePost(fakeData.id)).toHaveBeenCalled;
  })

  it('updatePost function should have been called', () => {
    expect(component.updatePost(fakeData)).toHaveBeenCalled;
  })

  it('dataAfterRemoveOperation function should have been called', () => {
    expect(componentSpy.dataAfterRemoveOperation()).toHaveBeenCalled;
  })

  it('get data', () => {
    let response;
    spyOn(apiService, 'getPost').and.returnValue(of(fakeData));

    apiService.getPost().subscribe(res => {
      response = res;
    });

    expect(response).toEqual(fakeData);
  })
});
