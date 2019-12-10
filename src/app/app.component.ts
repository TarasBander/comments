import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = '';
  searchText = '';
  i;
  j;
  comments = [
    {
      comment: 'test commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest commenttest comment',
      subcomments: ['test sub comment test sub comment test sub comment test sub commentv test sub comment v vtest sub commentv vvtest sub commentv vtest sub comment test sub commenttest sub comment']
    },
    {
      comment: 'test comment2, test comment2 test comment2 test comment2 test comment2 vv v vv test comment2test comment2vtest comment2v vv test comment2 v v vv vtest comment2test comment2v vtest comment2v vv',
      subcomments: []
    }
  ]

  addComment(comment: string): void{
    if (comment) {
      this.comments.push({comment: comment, subcomments: []});
      this.value = '';
    }
  }

  addSubComment(subComment: string, i: any): void {
    if (subComment) {
      this.comments[i].subcomments.push(subComment);
    }
  }

  removeComment(i: any): void {
    this.comments.splice(i, 1);
  }

  removeSubComment(i: any, j: any): void {
    this.comments[i].subcomments.splice(j, 1);
  }
}
