function getCurrentDateTime() {
    let currentDate = new Date();
    return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
}

export default getCurrentDateTime;
