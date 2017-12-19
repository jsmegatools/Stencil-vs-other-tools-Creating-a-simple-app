import { Component, State } from '@stencil/core';
import Items from '../../mock_recipes';

@Component({
  tag: 'app-popular',
  styleUrl: 'app-popular.scss'
})
export class AppPopular {

  @State() items: {
    id: number,
    name: string,
    photo: string,
    description: string,
    categories: number[]
  }[];

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
                <stencil-route-link url={`/recipe/${item.id}`}>
                  <div class="popular-item-image">
                    <div class="card-image">
                      <img src={`/images/${item.photo}`} />
                      <span class="card-title">{item.name}</span>
                    </div>
                  </div>
                </stencil-route-link>
                <div class="card-content">
                  <p>{item.description}</p>
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
