import { Component, State } from '@stencil/core';
import Categories from '../../mock_categories';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @State() categories: { id: number, name: string }[];

  componentWillLoad() {
    this.categories = Categories;
  }

  render() {
    return (
      <div class="app-home-container">
        <app-categories-sidebar categories={this.categories} />
        <app-popular />
      </div>
    );
  }
}
