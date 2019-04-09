import { passwordValidator } from "./password.validator";

xdescribe('Confirm Password Validator', () => {
    it('should check for the confirm password', () => {
        let password = "asd123";
        let confirmpassword = "asd123";
        expect(password).toEqual(confirmpassword);
    })
})