import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
  })

export class ResultComponent implements OnInit {
    title = 'Here you go...';
    ngOnInit(): void {
        console.log('coming into result component');

    }
}