function getSecret(file, secretPassword) {
    _.opened = _.opened + 1;
    if (secretPassword == _.password) {
        return _.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == _.password) {
        _.opened = 0;
        _.contents = secret;
    }
}

let superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
}

let secret = getSecret(_,_);
console.log(secret);

setSecret(_,_, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(_,_);
console.log(secret);