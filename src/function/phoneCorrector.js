export default function phoneCorrector(phoneNumber) {
    return phoneNumber.replace(/[^+\d]/g, '');
}