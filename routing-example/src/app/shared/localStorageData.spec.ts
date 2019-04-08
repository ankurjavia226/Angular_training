import { checkLocalStorage } from './localStorageData';

describe('LocalStorageData', () => {
    it('should called localstorageData function', () => {
        expect(checkLocalStorage()).toHaveBeenCalled;
    })
})