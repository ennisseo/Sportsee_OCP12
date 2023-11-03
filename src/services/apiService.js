import DataModel from './formatData.js';
import {
    mockedUserData,
    mockedUserActivityData,
    mockedUserSessionLengthData,
    mockedUserPerformanceData,
} from './mockedData.js';

const API_BASE_URL = 'http://localhost:3000';

async function handleErrors(response) {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Une erreur est survenue.');
    }
    return response.json();
}

// if useMockdata value is set to false, it will use the API data
// set useMockData value to true to use mocked data
async function getUser(userId, useMockData = false) {
    if (useMockData) {
        return DataModel.formatUserData(mockedUserData);
    }

    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    const userData = await handleErrors(response);
    return DataModel.formatUserData(userData);
}

async function getUserActivity(userId, useMockData = false) {
    if (useMockData) {
        return DataModel.formatUserActivity(mockedUserActivityData);
    }

    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
    const userData = await handleErrors(response);
    return DataModel.formatUserActivity(userData);
}

async function getUserSessions(userId, useMockData = false) {
    if (useMockData) {
        return DataModel.formatUserSessionLength(mockedUserSessionLengthData);
    }

    const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
    const userData = await handleErrors(response);
    return DataModel.formatUserSessionLength(userData);
}

async function getUserPerformance(userId, useMockData = false) {
    if (useMockData) {
        return DataModel.formatUserPerformance(mockedUserPerformanceData);
    }

    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
    const userData = await handleErrors(response);
    return DataModel.formatUserPerformance(userData);
}

export {
    getUser,
    getUserActivity,
    getUserSessions,
    getUserPerformance,
};
