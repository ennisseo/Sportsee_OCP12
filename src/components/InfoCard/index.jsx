import React, { useEffect, useState } from 'react';
import {
    getUser,
} from '../../services/apiService.js';
import CaloriesIcon from '../../assets/icon_calories.svg';
import ProteinsIcon from '../../assets/icon_proteins.svg';
import CarbohydratesIcon from '../../assets/icon_carbohydrates.svg';
import LipidsIcon from '../../assets/icon_lipids.svg';

// Choose between userId 18 or 12 (current mocked users on the API)
function NutriInfoPanel({ userId = 18 }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await getUser(userId);
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [userId]);

    const keyData = userData ? userData.keyData : null;

    return (
        <div>
            {keyData && (
                <div className="infocards-container">
                    <section id={`Calories`} className="infocard">
                        <div className="infocard-icon-container first">
                            <img src={CaloriesIcon} alt={"Calories icon"} className="infocard-img" />
                        </div>
                        <div className="infocard-text-container">
                            <p>{keyData.calorieCount}kCal</p>
                            <p>Calories</p>
                        </div>
                    </section>

                    <section id={`Proteins`} className="infocard">
                        <div className="infocard-icon-container second">
                            <img src={ProteinsIcon} alt={"Proteins"} className="infocard-img" />
                        </div>
                        <div className="infocard-text-container">
                            <p>{keyData.proteinCount}g</p>
                            <p>Protéines</p>
                        </div>
                    </section>

                    <section id={`Carbohydrates`} className="infocard">
                        <div className="infocard-icon-container third">
                            <img src={CarbohydratesIcon} alt={"Carbohydrates"} className="infocard-img" />
                        </div>
                        <div className="infocard-text-container">
                            <p>{keyData.carbohydrateCount}g</p>
                            <p>Glucides</p>
                        </div>
                    </section>

                    <section id={`Lipids`} className="infocard">
                        <div className="infocard-icon-container fourth">
                            <img src={LipidsIcon} alt={"Lipids"} className="infocard-img" />
                        </div>
                        <div className="infocard-text-container">
                            <p>{keyData.lipidCount}g</p>
                            <p>Lipides</p>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default NutriInfoPanel;
