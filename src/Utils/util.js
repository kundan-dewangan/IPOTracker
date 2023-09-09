export const colors = {
    primaryLight: "#D6A2E8",
    primaryDark: "#82589F",
    secondaryLight: "#576574",
    secondaryDark: "#222f3e",
    errorLight: "#ff4d4d",
    errorDark: "#ff3838",
    successLight: "#A3CB38",
    successDark: "#009432",
    warningLight: "#fffa65",
    warningDark: "#fff200",
    greyLight: "#d1ccc0",
    greyDark: "#84817a",
    infoLight: "#9980FA",
    infoDark: "#5758BB",
    whiteLight: "#ffffff",
    whiteDark: "#f1f2f6",
    blackLight: "#000000",
    blackDark: "#2f3542",
}

export const padding = {
    one: 1,
    two: 2,
    four: 4,
    six: 6,
    eigth: 8,
    ten: 10,
    twelve: 12,
    fourtin: 14,
    sistin: 16,
    eightin: 18,
    twenty: 10,
}


// Generate a random 10-digit number
export const generateRandomNumber = () => {
    const min = 1000000000; // Minimum 10-digit number (inclusive)
    const max = 9999999999; // Maximum 10-digit number (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const columnHeaders = ['Name', 'GMP', 'Profit', 'Fire Rating', 'Start Date', 'Last Date', 'Allotment Date', 'Listing Date', 'Quantity', 'Price', 'S-HNI Qty', 'S-HNI Price', 'Id']