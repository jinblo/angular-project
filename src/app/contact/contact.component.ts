import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted: Boolean = false; // Lisätty tyyppi Boolean
  success: Boolean = false; // Lisätty tyyppi Boolean

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid){
      return;
    } else {
      this.success = true;
    }  
  }

}
