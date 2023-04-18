export const teacherChecker = async (phone, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/user-by?phoneNumber=${encodeURIComponent(phone)}`), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    });
}

export const teacherPhoneCheck = async (phone, PATH, TOKEN, AUTH) => {
    const response = await teacherChecker(phone, PATH, TOKEN, AUTH);
    if (response.status === 404) {
        return true;
    } else if (response.status === 200) {
        return false;
    } else {
        return 'error';
    }
}