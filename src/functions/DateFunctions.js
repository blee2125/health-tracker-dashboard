const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

class DateFunctions {

    // convert 1994-02-24 to Feb 24 2022
    convertYMDtoMwordDY(input) {
        const dateString = input.toString()
        const splitDate = dateString.split('-')
        return (monthArray[splitDate[1]-1]+" "+splitDate[2]+" "+splitDate[0])
    }

    // returns current date in 'Jan 01 2022' format
    createDateStringSplit() {
        const dateString = new Date().toString().split(' ')
        const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()
        return dateStringSplit
    }
    
    // convert createdAt to 'Jan 1 2022'
    processCreatedAt = (input) => {
        const removeTime = input.split('T')
        const newDate = removeTime[0].split('-')
        return monthArray[newDate[1]-1]+" "+newDate[2]+" "+newDate[0]
    }

    



}

export default new DateFunctions();