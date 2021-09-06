export const baseURL = "http://localhost:8080";


//to format dates on diffferent components
export function formattedDate(timeDate) {
    const dateObj = new Date(timeDate);

    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

    return +month + "/" + date + "/" + year;
}