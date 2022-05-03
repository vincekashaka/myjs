// Errors  and Error Handling
"use strict";
const makeError = () => {
    try {
        const name = "vince";
        name = "kayz";
    } catch (err) {
        console.error(err.stack);
    }
};
makeError();