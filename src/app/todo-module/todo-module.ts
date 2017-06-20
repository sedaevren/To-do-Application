import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo-component/todo.component';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';



import { CompletedTodoLengthPipe, CompletedTodoPipe, OpenTodoLengthPipe, OpenTodoPipe, CancelledTodoPipe, cancelledLengthPipe , ToReadableDate,ToReadableTime } from './todo-pipes';

@NgModule({
  imports: [BrowserModule, FormsModule, DatePickerModule,FormsModule,ButtonsModule.forRoot(),TimepickerModule.forRoot()],
  exports: [TodoComponent],
  declarations: [TodoComponent, CompletedTodoLengthPipe, CompletedTodoPipe, OpenTodoLengthPipe, OpenTodoPipe, CancelledTodoPipe, cancelledLengthPipe, ToReadableDate,ToReadableTime],
  providers: [],
})
export class TodoModule { }