import { Component, State } from '@stencil/core';
import Items from '../../mock_recipes';

@Component({
  tag: 'app-popular',
  styleUrl: 'app-popular.scss'
})
export class AppPopular {

  @State() items: { id: number, name: string, photo: string, categories: string[] }[];

  componentWillLoad() {
    this.items = Items;
  }

  render() {
    return (
      <div>
        <ul class="popular-items">
          {this.items.map(item =>
            <li class="popular-item-container">
              <div class="card">
                <div class="popular-item-image">
                  <div class="card-image">
                    <img src={`images/${item.photo}`} />
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
