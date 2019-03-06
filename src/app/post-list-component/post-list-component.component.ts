import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.less']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //récupération de l'array posts
  @Input() posts:string[];

}
