
export const businessDefaultPhotoURL = "https://is3.cloudhost.id/inovasiaktif-app/business/base/default.webp";
export const productDefaultPhotoURL = "https://is3.cloudhost.id/inovasiaktif-app/product/base/default.webp";
export const userDefaultPhotoURL = "https://is3.cloudhost.id/inovasiaktif-app/user/profile/default.webp";

export const getBusinessPhotoURL = (photo) => {
    if (photo) {
        return "https://is3.cloudhost.id/inovasiaktif-app/" + photo
    }

    return businessDefaultPhotoURL
}

export const getUserPhotoURL = (photo) => {
    if (photo) {
        return "https://is3.cloudhost.id/inovasiaktif-app/" + photo
    }

    return userDefaultPhotoURL
}

export const getProductPhotoURL = (photo) => {
    if (photo) {
        return "https://is3.cloudhost.id/inovasiaktif-app/" + photo
    }

    return productDefaultPhotoURL
}

export const getProductBasePhotoURL = (product) => {
    return product && product.basePhotoURL ? product.basePhotoURL : "https://assets.inovasiaktif.com/images/carousel/marketplace.png"
}

export const getBusinessBasePhotoURL = (business) => {
    return business && business.basePhotoURL ? business.basePhotoURL : "https://assets.inovasiaktif.com/images/carousel/business.png"
}

export const formatPrice = (price) => {
    return price ? rupiah(price) : 'Rp. 0'
}

export function isAndroid() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    if (isAndroid) {
        return true;
    }

    return false;
}

export function getDatetime() {
    let datetime = new Date();

    datetime.setHours(datetime.getHours() + 7);

    return datetime;
}

export function getCurrentDate() {
    let datetime = new Date();

    datetime.setHours(datetime.getHours() + 7);
    datetime.setMinutes(datetime.getMinutes() + 5);

    return datetime;
}

export function getLastActive(date) {
    let date1 = new Date();
    date1.setHours(date1.getHours() + 7);
    let date2 = new Date(date);

    let active = "";

    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    let diff_days = Math.abs(Math.round(Difference_In_Time / (1000 * 3600 * 24)));

    let diff_hours = Math.abs(Math.round(Difference_In_Time / 36e5));
    let diff_minutes = Math.abs(Math.round((Difference_In_Time / 1000) / 60));
    let diff_seconds = Math.abs(Math.round((Difference_In_Time / 1000)));

    if (diff_days > 0) {
        active = diff_days + " hari";
    } else if (diff_hours > 0) {
        active = diff_hours + " jam";
    } else if (diff_minutes > 0) {
        active = diff_minutes + " menit";
    } else if (diff_seconds > 0) {
        active = diff_seconds + " detik";
    }

    return "Aktif " + active + " yang lalu";
}

export function trimText(text, limit) {
    const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

    return truncate(text, limit, '...');
}

export default function rupiah(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return 'Rp' + parts.join(",");
}