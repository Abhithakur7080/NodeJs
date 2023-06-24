const add = (a,b) => {
    return a+b;
};

const sub = (a,b) => {
    return a-b;
};

const multi = (a,b) => {
    return a*b;
};

const div = (a,b) => {
    return a/b;
};

const modulo = (a,b) => {
    return a%b;
};

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// module.exports.div = div;
// module.exports.modulo = modulo;

module.exports = {add, sub, multi, div, modulo};