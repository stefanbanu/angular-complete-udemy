import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test.', 'https://www.simplyrecipes.com/thmb/2cLydgR2kWyktf7JpKu7ro-gH5M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Sauteed-Spinach-LEAD-13-0822e33a30f74624a3664f46eee2f4a7.jpg'),
     new Recipe('A Test Recipe', 'This is just a test.', 'https://www.simplyrecipes.com/thmb/2cLydgR2kWyktf7JpKu7ro-gH5M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Sauteed-Spinach-LEAD-13-0822e33a30f74624a3664f46eee2f4a7.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
