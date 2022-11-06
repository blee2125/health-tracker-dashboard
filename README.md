# Health Tracker Dashboard

An app to track personal health data.

Built using the React.js framework and Redux for state management.

Backend built using Express.js and MongoDB - [Github Link](https://github.com/blee2125/health-tracker-dashboard-backend)

## Features

* Users
    - Allows for multiple users via accounts
    - All data is connected to individual accounts for privacy
    - Options to delete all data by category
    - Ability to change password

* Track Exercise
    - Data: Name, Duration, Time, Date, Type
    - Add, View, Edit, Delete
    - View exercises by day
    - Bar graph displaying minutes of exercise per day (currently limited to 30 days)

* Track Food Consumption
    - Data: Name, Calories, Meal, Amount, Carbs, Fat, Protein
    - Add, View, Edit, Delete
    - Search for food from ninja-api and transfer to add form
    - Bar graph displaying food consumed per day (currently limited to 30 days)
    - Bar graph data is dynamic and can be sorted by meal or calories/macros

![foodbargraph](https://github.com/blee2125/health-tracker-dashboard/blob/main/public/images/foodbargraph.png)

* Track Water Consumption
    - Data: Glasses per day, Date
    - View bar graph of water in the last week
    - Update count from anywhere via the SideBar

![watersidebar](https://github.com/blee2125/health-tracker-dashboard/blob/main/public/images/watersidbar.png)


* Track Weight
    - Add daily weight
    - View graph of weight or BMI
    - BMI relies on weight and height. If either are missing, a button will appear to add the missing data.

![bmigraph](https://github.com/blee2125/health-tracker-dashboard/blob/main/public/images/bmigraph.png)

* Health Goals
    - Add by category (Exercise, Food, Water, Weight, General)
    - Sort by completion

* Notifications
    - Displays notifications when data is added or deleted


## Future improvements

* Body Stats - Heart Rate, Blood Pressure
* Daily Supplements - Vitamins and Minerals
* Daily Health Journal
* Sleep Tracking
* Medications
* And More...


