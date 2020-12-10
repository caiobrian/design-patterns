import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol'
import { MealBox } from './meal-box'
import { Beans, Rice, Vegetables } from './meals'

export class VeganDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox()

  reset(): this {
    this.meal = new MealBox()
    return this
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('Feijão', 10)
    const vegetables = new Vegetables('Abobrinha', 10)
    this.meal.add(rice, beans, vegetables)
    return this
  }

  getMeal(): MealBox {
    return this.meal
  }

  getPrice(): number {
    return this.meal.getPrice()
  }
}
