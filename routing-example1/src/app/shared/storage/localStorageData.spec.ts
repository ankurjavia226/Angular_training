import { checkLocalStorage } from "./localStorageData";

describe('localStorageData', () => {
    it('checkLocalStorage function should be called and return data', () => {
        expect(checkLocalStorage()).toHaveBeenCalled;
    })
})