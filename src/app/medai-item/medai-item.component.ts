import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit, PipeTransform } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { pipe } from 'rxjs';
// import { WatchPipe } from '../watch.pipe';





@Component({
  selector: 'app-medai-item',
  standalone: false,
  // imports: [CommonModule, RouterLink],
templateUrl: './medai-item.component.html',
  styleUrl: './medai-item.component.css'
})
export class MedaiItemComponent implements OnInit
{

  @Input() item: any;
  constructor (){}

  ngOnInit ()
  {

  }

}
