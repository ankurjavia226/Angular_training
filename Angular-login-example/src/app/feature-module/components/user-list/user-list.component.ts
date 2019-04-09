import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsermanagementService } from '../../services/user-management-services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users;
  updatedUserString;
  updateUserForm: FormGroup;
  constructor(private _fb: FormBuilder,
              private _usermanagementService: UsermanagementService) { }

  ngOnInit() {
    this.getData();
    this.userUpdateFrom();
  }

   userUpdateFrom = () => {
    this.updateUserForm = this._fb.group({
      name: ['',Validators.required],
      job: ['',Validators.required]
    })
  }

  getData = () => {
    let userData ;
    this._usermanagementService.getUserList()
          .subscribe(res => {
            //alert(res['msg']);            
            userData = res;
            this.users = userData.data;
          });
  }

  updateData = () => {
    this.updatedUserString = JSON.stringify(this.updateUserForm.value);
    this._usermanagementService.updateUser(this.updatedUserString)
          .subscribe(res => alert('User Update Sucessfully.'));
  }

  loadDataInForm(user){
    let dataForUpdate;
    this._usermanagementService.getSpecifiedUser(user.id)
          .subscribe(res => {
            dataForUpdate = res;
            this.patchData(dataForUpdate);            
          });    
  }

  patchData(oldData){
    this.updateUserForm.patchValue({
      name: oldData.data.first_name,
      job: oldData.data.last_name
    });
  }

  get name (){
    return this.formControls['name'];
  }

  get job (){
    return this.formControls['job'];
  }

  get formControls (){
    return this.updateUserForm.controls;
  }
}