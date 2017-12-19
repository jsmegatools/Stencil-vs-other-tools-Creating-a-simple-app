import { Component, State, Prop } from '@stencil/core';
import Items from '../../mock_recipes';

@Component({
  tag: 'app-recipe',
  styleUrl: 'app-recipe.scss'
})
export class AppRecipe {

  @State() recipe: { id: number, name: string, photo: string, description: string }
  @Prop() match: any

  componentWillLoad() {
    this.recipe = Items.find(item => item.id === +this.match.params.id);
  }

  render() {
    return (
      <div>
        <img src={`/images/${this.recipe.photo}`} alt={this.recipe.name} />
        <h1>
          {this.recipe.name}
        </h1>
        <p>
          {this.recipe.description}
        </p>
      </div>
    );
  }
}
