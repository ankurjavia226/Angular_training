import { ApiService } from "./api.service";
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { Observable } from 'rxjs';

describe('ApiService ',() => {
  let apiserviceSpy: Spy<ApiService>;

  beforeEach(() => {
    apiserviceSpy = createSpyFromClass(ApiService);
  })

  it('createPost should create post', () => {
    apiserviceSpy.createPost.and.returnValue(Observable);
  })

  it('getPost should get list from server', () => {
    apiserviceSpy.getPost.and.returnValue(Observable);
  })

  it('updatePost should update post', () => {
    apiserviceSpy.updatePost.and.returnValue(Observable);
  })

  it('deletePost should remove post', () => {
    apiserviceSpy.deletePost.and.returnValue(Observable);
  })

})
