import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ShortcutInput, ShortcutEventOutput, AllowIn } from 'ng-keyboard-shortcuts';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular Router Demo';
  @ViewChild('firstname', { static: true }) firstname: ElementRef;
  @ViewChild(MatSelect, { static: true }) status: MatSelect;
  @ViewChild('lastname', { static: true }) lastname: ElementRef;
  @ViewChild('operation', { static: true }) operation: ElementRef;
  shortcuts: ShortcutInput[] = [];
  ngAfterViewInit() {
    this.shortcuts.push(
      {
        key: '?',
        label: 'Question',
        description: 'Question mark',
        command: (e) => console.log('question mark clicked', { e }),
        preventDefault: true
      },
      {
        // key: ['up up down down left right left right b a enter'],
        key: ['up up'],
        label: 'Sequences',
        description: 'Konami code!',
        command: (output: ShortcutEventOutput) =>
          console.log('Konami code!!!', output)
      },
      {
        key: ['alt + a'],
        label: 'Firstname',
        description: 'alt + a',
        preventDefault: true,
        allowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
        command: (e) => {
          this.firstname.nativeElement.focus();
        },
      },
      {
        key: ['alt + s'],
        label: 'Status',
        description: 'alt + s',
        preventDefault: true,
        allowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
        throttleTime: 250,
        command: (e) => {
          this.status.focus();
        },
      },
      {
        key: ['shift + d'],
        label: 'Lastname',
        description: 'shift + d',
        preventDefault: true,
        allowIn: [AllowIn.Input, AllowIn.Select],
        command: (e) => {
          this.lastname.nativeElement.focus();
        },
      },
      {
        key: ['shift + f'],
        label: 'Operation',
        description: 'shift + f',
        preventDefault: true,
        allowIn: [AllowIn.Input, AllowIn.Select],
        throttleTime: 250,
        command: (e) => {
          this.operation.nativeElement.focus();
        },
      },
      {
        key: ['cmd + b'],
        label: 'Help',
        description: 'Cmd + b',
        command: (e) => console.log(e),
        preventDefault: true
      }
    );
  }
}
