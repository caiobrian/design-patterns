import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol'
import { MealBox } from './meal-box'
import { Beans, Beverage, Dessert, Meat, Rice } from './meals'

export class MainDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox()

  reset(): this {
    this.meal = new MealBox()
    return this
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('Feijão', 10)
    const meat = new Meat('Carne', 20)
    this.meal.add(rice, beans, meat)
    return this
  }

  makeBeverage(): this {
    const beverage = new Beverage('Suco', 8)
    this.meal.add(beverage)
    return this
  }

  makeDessert(): this {
    const dessert = new Dessert('Pudim', 12)
    this.meal.add(dessert)
    return this
  }

  getMeal(): MealBox {
    return this.meal
  }

  getPrice(): number {
    return this.meal.getPrice()
  }
}
