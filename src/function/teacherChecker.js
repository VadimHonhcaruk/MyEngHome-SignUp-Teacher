const teacherChecker = async (phone, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/users-by?phoneNumber=${encodeURIComponent(phone)}`), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    }) || undefined;
}

const teacherCheckerMail = async (email, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/users-by?email=${encodeURIComponent(email)}`), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    }) || undefined;
}

export const teacherPhoneCheck = async (phone, PATH, TOKEN, AUTH) => {
    try {
        const response = await teacherChecker(phone, PATH, TOKEN, AUTH);
        if (response.status === 404) {
            return true;
        } else if (response.status === 200) {
            return false;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
}

export const teacherEmailCheck = async (email, PATH, TOKEN, AUTH) => {
    try {
        const response = await teacherCheckerMail(email, PATH, TOKEN, AUTH);
        if (response.status === 404) {
            return true;
        } else if (response.status === 200) {
            return false;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
}

export const teacherPOST = async (teacher, PATH, TOKEN, AUTH, user) => {
    return (await fetch((`${PATH}/${user}`), {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH,
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(teacher)
    })
    )
}