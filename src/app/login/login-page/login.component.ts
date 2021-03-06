import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentificationService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private authentificationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.user = new User();
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.user.login = this.userForm.controls.user.value;
    this.user.password = this.userForm.controls.password.value;
    this.authentificationService.login(this.user.login, this.user.password);
  }

  onClickSignUp() {
    this.router.navigate(['loginAdd']);
  }
}
