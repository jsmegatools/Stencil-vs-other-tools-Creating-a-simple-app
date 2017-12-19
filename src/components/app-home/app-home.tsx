import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @Prop() categories: { id: number, name: string }[];

  render() {
    return (
      <div class="app-home-container">
        <app-categories-sidebar categories={this.categories} />
        <app-popular />
      </div>
    );
  }
}
