import { Component, Prop, PropDidChange } from '@stencil/core';

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
          <stencil-route-link url={`/category/${category.id}`} activeClass="category-sidebar-active">
            <li>{category.name}</li>
          </stencil-route-link>)
        }
      </ul>
    );
  }
}
