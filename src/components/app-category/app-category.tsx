import { Component, State, Prop, PropWillChange } from '@stencil/core';
import Categories from '../../mock_categories';
import Items from '../../mock_recipes';

@Component({
  tag: 'app-category',
  styleUrl: 'app-category.scss'
})
export class AppCategory {

  @State() category: { id: number, name: string }
  @State() items: { id: number, name: string, photo: string, description: string }[]
  @Prop() match: any
  @State() categories: { id: number, name: string }[];

  componentWillLoad() {
    this.categories = Categories;
    this.updateState(+this.match.params.id);
  }

  updateState(categoryId) {
    this.category = Categories.find(category => category.id === +categoryId);
    this.items = Items.filter(item =>
      item.categories.find(category => category === +categoryId)
    );
  }

  @PropWillChange('match')
  categoryChanger(newVal: any) {
    this.updateState(+newVal.params.id);
  }

  render() {
    return (
      <div class="app-category-container" >
        <app-categories-sidebar categories={this.categories} />
        <ul class="category-items">
          {this.items.map(item =>
            <li class="category-item-container">
              <div class="card">
                <stencil-route-link url={`/recipe/${item.id}`}>
                  <div class="category-item-image">
                    <div class="card-image">
                      <img src={`/images/${item.photo}`} />
                      <span class="card-title">{item.name}</span>
                    </div>
                  </div>
                </stencil-route-link>
                <div class="card-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                  orci turpis, viverra quis gravida a, fringilla in arcu. Aliquam placerat.</p>
                </div>
                  <div class="card-action">
                    <stencil-route-link url={`/recipe/${item.id}`}>
                      View
                    </stencil-route-link>
                  </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
