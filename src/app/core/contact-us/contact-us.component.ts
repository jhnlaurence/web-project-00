import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  
  contactUsForm: FormGroup;
  
  eMail = "something";
  subject = "";
  message = "";

  sentMail:string;
  sentSubject:string;
  sentMessage:string;

  constructor(){}

  ngOnInit(){
    this.contactUsForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'userMessage': new FormGroup({
        'subject': new FormControl(null, Validators.required),
        'message': new FormControl(null, Validators.required)})
    });
  }

  onSubmit(){
    // this.sentMail = this.contactUsForm;
    // this.sentSubject = this.contactUsForm;
    // this.sentMessage = this.contactUsForm;
    console.log(this.contactUsForm);
  }

}
