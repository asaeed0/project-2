module.exports = {

    printName(name) {
        return `${name.lastName}, ${name.firstName}`;
    },

    isVacant(arg) {
        if (arg.toString().toLowerCase() === 'vacant') {
            return true;
        } else {
            return false;
        }
    },

    incrementTill(arg, max) {
        if(arg >= max) {
            return max;
        } else {
            return arg + 1;
        }
    },

    decrementTill(arg, min=0) {
        if(arg <= min) {
            return min;
        } else {
            return arg - 1;
        }
    },
};