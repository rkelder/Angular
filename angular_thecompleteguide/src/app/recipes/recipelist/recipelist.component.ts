import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Massaman-Curry-1.jpg'), 
  ]

  constructor() {}

  ngOnInit() {
  }

}
