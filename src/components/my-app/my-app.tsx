import { Component, State } from '@stencil/core';
import Categories from '../../mock_categories';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @State() categories: { id: number, name: string }[];

  componentWillLoad() {
    this.categories = Categories;
  }

  render() {
    return (
      <div>
        <h1><stencil-route-link url="/">Home</stencil-route-link></h1>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true} componentProps={{ categories: this.categories }}>
            </stencil-route>
            <stencil-route url='/recipe/:id' component='app-recipe' componentProps={{ categories: this.categories }}>
            </stencil-route>
            <stencil-route url='/category/:id' component='app-category' componentProps={{ categories: this.categories }}>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
