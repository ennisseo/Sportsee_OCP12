// mockedData.js

const mockedUserData = {
    data: {
        id: 1,
        userInfos: {
            firstName: "Thomas",
            lastName: "Smith",
            age: 25,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
        },
    },
};

const mockedUserActivityData = {
    data: {
        userId: 1,
        sessions: [
            { day: 1, kilogram: 65, calories: 302 },
            { day: 2, kilogram: 71, calories: 320 },
            { day: 3, kilogram: 68, calories: 356 },
            { day: 4, kilogram: 65, calories: 302 },
            { day: 5, kilogram: 67, calories: 300 },
            { day: 6, kilogram: 67, calories: 288 },
            { day: 7, kilogram: 64, calories: 297 },
            { day: 8, kilogram: 73, calories: 347 },
            { day: 9, kilogram: 66, calories: 306 },
            { day: 10, kilogram: 65, calories: 320 },
        ],
    },
};

const mockedUserSessionLengthData = {
    data: {
        userId: 1,
        sessions: [
            { day: 1, sessionLength: 40 },
            { day: 2, sessionLength: 55 },
            { day: 3, sessionLength: 60 },
            { day: 4, sessionLength: 70 },
            { day: 5, sessionLength: 60 },
            { day: 6, sessionLength: 55 },
            { day: 7, sessionLength: 60 },
        ],
    },
};

const mockedUserPerformanceData = {
    data: {
        userId: 1,
        kind: "weekly",
        data: [
            { value: 90, kind: 1 },
            { value: 85, kind: 2 },
            { value: 45, kind: 3 },
            { value: 30, kind: 4 },
            { value: 105, kind: 5 },
            { value: 85, kind: 6 },
        ],
    },
};

export {
    mockedUserData,
    mockedUserActivityData,
    mockedUserSessionLengthData,
    mockedUserPerformanceData,
};
