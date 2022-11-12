class FoodFunctions {

    // array= food array, sumKey= key to get sum of- example: proteing, filterValue= meal
    calcTotalByMeal(array, sumKey, filterValue) {
        const filteredArray = array.filter(obj => {
            if (obj.meal === filterValue) {
                return obj
            } else {
                return null
            } 
        })
        const total = filteredArray.reduce((accumulator, food) => {
            const something = food[sumKey] > 0 ? food[sumKey] : 0
            return accumulator + something
        }, 0)
        return Math.round(total)
    }

    // calculates total calories
    calcTotalCalories(array) {
        const totalCals = array.reduce((accumulator, food) => {
            const cal = food.calories > 0 ? food.calories : 0
            return accumulator + Math.round(cal);
        }, 0);
        return totalCals
    }

    // calculates total carbs
    calcTotalCarbs(array) {
        const totalCarbs = array.reduce((accumulator, food) => {
            const carbs = food.carbsg > 0 ? food.carbsg : 0
            return accumulator + Math.round(carbs);
        }, 0);
        return totalCarbs
    }

    // calculates total fat
    calcTotalFat(array) {
        const totalFat = array.reduce((accumulator, food) => {
            const fat = food.fatg > 0 ? food.fatg : 0
            return accumulator + Math.round(fat);
        }, 0);
        return totalFat
    }

    // calculates total protein
    calcTotalProtein(array) {
        const totalProtein = array.reduce((accumulator, food) => {
            const protein = food.proteing > 0 ? food.proteing : 0
            return accumulator + Math.round(protein);
        }, 0);
        return totalProtein
    }

}

export default new FoodFunctions();