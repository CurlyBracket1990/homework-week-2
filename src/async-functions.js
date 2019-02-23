function giveItBackLater(value, callback) {
    function onload() {
        callback(value)
    }
    setTimeout(onload, 100);
}

function promiseToGiveItBackLater(value) {

    return new Promise((resolve) => {
        giveItBackLater(value, resolve(value))
    })
}

function addSomePromises(somePromise) {

    return new Promise((resolve) => {
        resolve(somePromise)
    }).then(function (result) {
        return result + result;
    }).catch(function (value) {
        return value + value + value;
    });

}


module.exports.giveItBackLater = giveItBackLater
module.exports.addSomePromises = addSomePromises
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater