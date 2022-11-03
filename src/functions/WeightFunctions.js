
class WeightFunctions {

    // calculate BMI - weight(pounds), height(inches)
    calcBMI = (weight, height) => {
        const bmiFormula = (weight/(height*height))*703
        if (bmiFormula > 0) {
          return (bmiFormula.toFixed(1))
        } else {
          return ('Missing Data')    
        }
    }


    



}

export default new WeightFunctions();