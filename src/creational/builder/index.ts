import { MainDishBuilder } from './classes/main-dish-builder'
import { VeganDishBuilder } from './classes/vegan-dish-builder'

const mainDishBuilder = new MainDishBuilder()
mainDishBuilder.makeMeal().makeDessert().makeBeverage()
console.log(mainDishBuilder.getMeal())
console.log(mainDishBuilder.getPrice())

mainDishBuilder.reset()

const meal2 = mainDishBuilder.makeBeverage().getMeal()
console.log(meal2)

const veganDishBuilder = new VeganDishBuilder()
veganDishBuilder.makeMeal()
console.log(veganDishBuilder.getMeal())
console.log(veganDishBuilder.getPrice())
