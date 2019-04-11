import { ApiService } from "./api.service";
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { Observable, of } from 'rxjs';

describe('ApiService ',() => {
  let apiserviceSpy: Spy<ApiService>;
  let apiService: ApiService;
  let fakeData;

  beforeEach(() => {
    apiserviceSpy = createSpyFromClass(ApiService);

    fakeData = {
      id: 456789,
      title: 'adfdfdfaaaa',
      body: 'adfasdfasfadsfadfsaaaaaa'
    };
  })

  it('createPost should create post', () => {
    apiserviceSpy.createPost.and.returnValue(Observable);
  })

  it('getPost should get list from server', () => {
    apiserviceSpy.getPost.and.returnValue(Observable);

    // let response;
    // spyOn(apiService, 'getPost').and.returnValue(of(fakeData));

    // apiService.getPost().subscribe(res => {
    //   response = res;
    // });

    // expect(response).toEqual(fakeData);
  })

  it('updatePost should update post', () => {
    apiserviceSpy.updatePost.and.returnValue(Observable);
  })

  it('deletePost should remove post', () => {
    apiserviceSpy.deletePost.and.returnValue(Observable);
  })

})
