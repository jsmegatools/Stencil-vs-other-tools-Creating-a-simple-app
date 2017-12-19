import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-categories-sidebar',
  styleUrl: 'app-categories-sidebar.scss'
})
export class AppCategoriesSidebar {

  @Prop() categories: { id: number, name: string }[]

  render() {
    return (
      <ul>
        {
          this.categories.map(category =>
          <li>{category.name}</li>)
        }
      </ul>
    );
  }
}
