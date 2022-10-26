import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public index: number = 0;
  public userindex!: number;
  public loginRegExp: RegExp = /^[a-z]{4,16}$/i;
  public passwordRegExp: RegExp = /^[-_\w\.]{4,16}$/;
  public emailRegExp: RegExp = /^[-\w\.]{1,}@\w{1,}\.\w{1,}$/;
  public n!: string;
  public p!: string;
  public em!: string;
  public edits = true;
  public user = {
    name: '',
    pass: '',
    email: '',
  };
  public mas: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addUser(event: Event): void {
    event.preventDefault();
    if (this.loginRegExp.test(this.n) && this.passwordRegExp.test(this.p) && this.emailRegExp.test(this.em)) {
      if (this.mas.length == 0) {
        this.index = 0;
      }
      this.user.name = this.n;
      this.user.pass = this.p;
      this.user.email = this.em;
      this.mas[this.index] = Object.assign({}, this.user);
      this.index++;
      this.p = '';
      this.n = '';
      this.em = '';
      console.log(this.mas);

    }
    else {
      console.log('wrong valid');
    }
  }
 
  deleteUser(i: Number): void {
    this.mas.splice(i, 1);
  }
  editUser(i: number): void {
    this.edits = false;
    this.n = this.mas[i].name;
    this.p = this.mas[i].pass;
    this.em = this.mas[i].email;
    this.userindex = i;
  }

  saveEditUser(): void {
    if (this.loginRegExp.test(this.n) && this.passwordRegExp.test(this.p) && this.emailRegExp.test(this.em)) {
      this.mas[this.userindex] = { name: this.n, pass: this.p, email: this.em };
    }
    else {
      console.log('wrong edit');
    }
    this.edits = true;
    this.p = '';
    this.n = '';
    this.em = '';
  }
}
