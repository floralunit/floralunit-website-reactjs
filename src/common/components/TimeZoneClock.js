import React, { useState, useEffect } from "react";

const TimezoneClock = ({ timezone }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    // Получение времени в определенной зоне
    const getTimeInTimezone = (dateTimezone) => {
        const timezoneOffset = new Date().getTimezoneOffset();
        const targetOffset = -(dateTimezone * 60) - timezoneOffset; // dateTimezone в часах, поэтому умножаем на 60 для получения минут

        const offsetTime = new Date(time.getTime() + targetOffset * 60 * 1000);

        return offsetTime.toLocaleTimeString("ru");
    };

    // Отображение времени определенной зоны
    return (
        <>
            {getTimeInTimezone(timezone)}
        </>
    );
};

export default TimezoneClock;