function groupAdultsByAgeRange(people) {
    return people
        .filter(person => person.age > 17)
        .reduce((finalObject, currentPerson) => {
            if (currentPerson.age < 21) {
                if (finalObject['20 and younger']) {
                    finalObject['20 and younger'].push(currentPerson)
                    return finalObject
                } else {
                    return finalObject = { ...finalObject, ['20 and younger']: [currentPerson] }
                }
            }

            if (currentPerson.age > 20 && currentPerson.age < 31) {
                if (finalObject['21-30']) {
                    finalObject['21-30'].push(currentPerson)
                    return finalObject
                } else {

                    return finalObject = { ...finalObject, ['21-30']: [currentPerson] }
                }
            }

            if (currentPerson.age > 30 && currentPerson.age < 41) {
                if (finalObject['31-40']) {
                    finalObject['31-40'].push(currentPerson)
                    return finalObject
                } else {
                    return finalObject = { ...finalObject, ['31-40']: [currentPerson] }
                }
            }

            if (currentPerson.age > 40 && currentPerson.age < 51) {
                if (finalObject['41-50']) {
                    finalObject['41-50'].push(currentPerson)
                    return finalObject
                } else {
                    return finalObject = { ...finalObject, ['41-50']: [currentPerson] }
                }
            }

            if (currentPerson.age > 50) {
                if (finalObject['51 and older']) {
                    finalObject['51 and older'].push(currentPerson)
                    return finalObject
                } else {
                    return finalObject = { ...finalObject, ['51 and older']: [currentPerson] }
                }
            }
        }, {})
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange