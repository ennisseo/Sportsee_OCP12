// dataModel.js

class DataModel {
    static formatUserData(userData) {
        const { data } = userData;

        return {
            id: data.id,
            userInfos: {
                firstName: data.userInfos.firstName,
                lastName: data.userInfos.lastName,
                age: data.userInfos.age,
            },
            todayScore: data.todayScore * 100 || data.score * 100,
            keyData: {
                calorieCount: data.keyData.calorieCount,
                proteinCount: data.keyData.proteinCount,
                carbohydrateCount: data.keyData.carbohydrateCount,
                lipidCount: data.keyData.lipidCount,
            },
        };
    }

    static formatUserActivity(sessionData) {
        const { data } = sessionData;

        return {
            userId: data.userId,
            sessions: data.sessions.map(session => ({
                day: session.day,
                kilogram: session.kilogram,
                calories: session.calories,
            })),
        };
    }

    static formatUserSessionLength(sessionLengthData) {
        const { data } = sessionLengthData;

        const dayInitials = ["L", "M", "M", "J", "V", "S", "D"];

        return {
            userId: data.userId,
            sessions: data.sessions.map(session => ({
                day: dayInitials[session.day - 1],
                sessionLength: session.sessionLength,
            })),
        };
    }

    static formatUserPerformance(performanceData) {
        const { data } = performanceData;

        const frenchTranslations = {
            1: "Cardio",
            2: "Énergie",
            3: "Endurance",
            4: "Force",
            5: "Vitesse",
            6: "Intensité",
        };

        const reversedPerformance = data.data.slice().reverse();

        return {
            userId: data.userId,
            kind: data.kind,
            performance: reversedPerformance.map(item => ({
                value: item.value,
                kind: frenchTranslations[item.kind],
            })),
        };
    }
}

export default DataModel;
