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

    // returns today as 'Jan 01 2022' - includes leading zero
    formatDateForSearch = () => {
        const todayDate = new Date()
        const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
        const todayDate2 = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate().toString().padStart(2, "0")}`
        const dateStringSplit = todayDate2.split('-')
        const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
        return formattedDate
    }

    // returns input date as 'Jan 01 2022' from '2022-01-01'
    formatInputDateForSearch = (input) => {
        const searchDate = input.toString()
        const dateStringSplit = searchDate.split('-')
        const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
        return formattedDate
    }

    // returns today as '2022-01-30'
    maxDateToday = () => {
        const todayDate = new Date()
        const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
        const maxDate = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate().toString().padStart(2, "0")}`
        return maxDate
    }

    


    

}

export default new DateFunctions();