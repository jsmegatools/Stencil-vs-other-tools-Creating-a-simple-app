import { Component, State, Prop } from '@stencil/core';
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

  componentWillLoad() {
    this.category = Categories.find(category => category.id === +this.match.params.id);
    this.items = Items.filter(item =>
      item.categories.find(category => category === +this.match.params.id)
    );
  }

  render() {
    return (
      <div>
        <ul class="category-items">
          {this.items.map(item =>
            <li class="category-item-container">
              <div class="card">
                <div class="category-item-image">
                  <div class="card-image">
                    <img src={`/images/${item.photo}`} />
                    <span class="card-title">{item.name}</span>
                  </div>
                </div>
                <div class="card-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                  orci turpis, viverra quis gravida a, fringilla in arcu. Aliquam placerat.</p>
                </div>
                <div class="card-action">
                  <a href="#">View</a>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
