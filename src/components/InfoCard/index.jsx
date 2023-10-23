const SampleBlockKeyData = () => {
    const data = [
        {
            keyDataIcon: 'sample_icon1.png',
            keyDataName: 'Calories',
            keyDataValue: 1930,
            keyDataUnit: 'kCal',
        },
        {
            keyDataIcon: 'sample_icon2.png',
            keyDataName: 'Protéines',
            keyDataValue: 155,
            keyDataUnit: 'g',
        },
        {
            keyDataIcon: 'sample_icon3.png',
            keyDataName: 'Glucides',
            keyDataValue: 290,
            keyDataUnit: 'g',
        },
        {
            keyDataIcon: 'sample_icon4.png',
            keyDataName: 'Lipides',
            keyDataValue: 50,
            keyDataUnit: 'g',
        },
    ];

    return (
        <div>
            {data.map((item, index) => (
                <section key={index} id={`KeyData-${index}`} className="infocard">
                    <img src={item.keyDataIcon} alt={"image " + item.keyDataName} />
                    <div>
                        <p>{item.keyDataValue}{item.keyDataUnit}</p>
                        <p>{item.keyDataName}</p>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default SampleBlockKeyData;
