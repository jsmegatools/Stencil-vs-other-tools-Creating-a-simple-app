import { Component, State, Prop } from '@stencil/core';
import Items from '../../mock_recipes';

@Component({
  tag: 'app-recipe',
  styleUrl: 'app-recipe.scss'
})
export class AppRecipe {

  @State() recipe: { id: number, name: string, photo: string, description: string }
  @Prop() match: any
  @Prop() categories: { id: number, name: string }[];

  componentWillLoad() {
    this.recipe = Items.find(item => item.id === +this.match.params.id);
  }

  render() {
    return (
      <div class="app-recipe-container">
        <app-categories-sidebar categories={this.categories} />
        <div>
          <img src={`/images/${this.recipe.photo}`} alt={this.recipe.name} />
          <h1>
            {this.recipe.name}
          </h1>
          <p>
            {this.recipe.description}
          </p>
        </div>
      </div>
    );
  }
}
