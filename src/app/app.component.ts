import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'blog1';
  posts = [{
    title: 'Mon premier article',
    content: "Nam sit amet rhoncus magna. Suspendisse a nisl enim. Phasellus vehicula eros non laoreet malesuada. Quisque lobortis mauris nec rhoncus posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt metus sit amet elit congue, eget commodo leo egestas. Suspendisse vitae placerat nulla. ",
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: 'Mon second article',
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam a consectetur turpis, a mattis nisl. Phasellus et ullamcorper eros. Sed eget nisi vel odio placerat efficitur. Aliquam vehicula turpis ac orci vulputate, sed pulvinar nisl tempus. Vivamus nec justo blandit nunc lobortis dictum ut vel augue. Maecenas dictum enim dui, ac ornare dolor egestas a. Mauris sit amet volutpat felis, a mollis diam. Aliquam sed augue non lectus varius ultricies eget nec ipsum. Curabitur placerat at sem a luctus. Mauris quis magna metus. Nunc sit amet urna non ipsum rutrum malesuada. Suspendisse ullamcorper arcu et lorem fermentum egestas vitae laoreet lorem. ",
    loveIts: 1,
    created_at: new Date()
  }
    ,
  {
    title: 'Mon Troisième article',
    content: "Cras eu velit a urna tincidunt suscipit in vitae neque. Praesent non bibendum libero. Ut magna orci, commodo a nisl sed, pretium sodales nisi. Praesent vel orci volutpat, faucibus tellus sed, ultrices ex. Quisque dignissim diam vitae quam tempor hendrerit. Proin id magna suscipit, eleifend neque eu, egestas ante. In commodo lorem nec massa posuere, non porttitor libero facilisis. Morbi accumsan eleifend lacus, a tempus tortor lacinia viverra. Praesent euismod semper risus, ut pellentesque erat condimentum ac. Cras mattis fermentum ex nec congue. Phasellus ultricies metus scelerisque urna imperdiet aliquam. Praesent sit amet libero quis tellus faucibus vulputate. Praesent aliquam, lectus sit amet gravida lacinia, est lacus fermentum eros, ac faucibus dui velit et felis. Praesent eros eros, varius ",
    loveIts: -1,
    created_at: new Date()
  }
  ]

}
