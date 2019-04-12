import { ApiService } from "./api.service";
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { get } from 'http';

describe('ApiService ',() => {
  let apiserviceSpy: Spy<ApiService>;
  let apiService: ApiService;
  let backend: HttpTestingController;
  let fakeData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  beforeEach(() => {
    fakeData = {
      id: 456789,
      title: 'adfdfdfaaaa',
      body: 'adfasdfasfadsfadfsaaaaaa'
    };

    apiserviceSpy = createSpyFromClass(ApiService);
    apiService = TestBed.get(ApiService);
    backend = TestBed.get(HttpTestingController);
  })

  it('createPost should create post', () => {
    apiserviceSpy.createPost.and.returnValue(Observable);

    apiService.createPost(fakeData).subscribe();
    const call: TestRequest = backend.
      expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(call.request.method).toEqual('POST');
    backend.verify();
  })

  it('getPost should get list from server', () => {
    //apiserviceSpy.getPost.and.returnValue(Observable);
    //jasmine.createSpy('getpost').and.returnValue(of(fakeData));

    apiService.getPost().subscribe();
    const call: TestRequest = backend.
      expectOne('https://jsonplaceholder.typicode.com/posts');

    let response;
    spyOn(apiService, 'getPost').and.returnValue(of(fakeData));
     apiService.getPost().subscribe(res => {
      response = res;
    });

    expect(call.request.method).toEqual('GET');
    backend.verify();
    expect(response).toEqual(fakeData);
  })

  it('updatePost should update post', () => {
    apiserviceSpy.updatePost.and.returnValue(Observable);
  })

  it('deletePost should remove post', () => {
    apiserviceSpy.deletePost.and.returnValue(Observable);
  })

})
