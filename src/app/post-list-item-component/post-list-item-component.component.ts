import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.less']
})
export class PostListItemComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() title:"coucou";
  @Input() content:"coucou";
  @Input() loveIts:0;
  @Input() created_at:Date;

  doLoveIt(){
    this.loveIts++;
  }
  doDislikeIt(){
    this.loveIts--;
  }
}
