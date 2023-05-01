"use strict";
(() => {
var exports = {};
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
;// CONCATENATED MODULE: ./src/firebase/FirebaseAdmin.js

const serviceAccount = __webpack_require__(545);
if (external_firebase_admin_namespaceObject.apps.length == 0) {
    external_firebase_admin_namespaceObject.initializeApp({
        credential: external_firebase_admin_namespaceObject.credential.cert(serviceAccount)
    });
}


;// CONCATENATED MODULE: ./src/pages/api/sendNotification.js

async function handler(req, res) {
    const { title , notificationBody , topic  } = req.body;
    const topicFormatted = topic.split(" ").join("_");
    const message = {
        notification: {
            title: title,
            body: notificationBody
        },
        android: {
            notification: {
                image: "logo192.png"
            }
        },
        topic: topicFormatted
    };
    external_firebase_admin_namespaceObject.messaging().send(message).then((response)=>{
        res.status(200).json({
            message: response
        });
    }).catch((error)=>{
        console.log(error);
        res.status(400).end();
    });
}


/***/ }),

/***/ 545:
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"just-in-time-5698c","private_key_id":"979b9cb7a8cfb0fd41ac4b87134195210d1c97af","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1dfFdGxAoUvqK\\nKAfnNKpcrIWpThKz4oij+Kud3SKAbm/8CaJFU8j07nMMYwnMFd+B+iJfjKfVfhmT\\nqLE+nnTE7NDAGQz/FZMGOoR7Mm33xp2RzzxaCF64+kWvtf27wwKauICdN13Qvb8K\\n7InZjg5ynzZfob6FCgHAYsdj8GpwZ4/cQEbnIJaPlHxR2E2YHcyamqEwTRfJX500\\nZei1tVeOMdCErzBnr2cKp9HNz0YJTdQMmPPKI8K51sd/NGhDrjO0KyFpAs5XuOpT\\nteOiCA4nFpmCL+niDrTQJ/mQ0KZ+2NtSvZ64ORjhhwTsBpp1zHPQ05vmcPOFCWC2\\nYvPDODMvAgMBAAECggEACK6BYzp5vewmZ3i91A59fhyU8oI1O90BO5MYpt9fGLTv\\n76eIV3fIPAuyfmu4msaLIH1WqqqglwLG930RKdVL8eYAoMgyCnw+QgSHtRs3Dq02\\nebToBsiyu3fh4KO85YBRfhSItrzg5K1HWB70A3Ab+djrMY0b/+J4Lfur3XixpvoA\\njTwDRluic+1kFZNnTHVMvnEkPYjMDWbkDcz0VNubXMidBh+tEZjrvblBxt2++Enq\\nQHE5nK6m9D3HfjskzdX/Wws0IW2VxGSru6UX5106Chge+AoTkxF7rr2vHpsyuNnU\\n6NKDHjCy5ZNJMRk20VsFMb+r9SlHl+ds7josYfk0QQKBgQD+EQd9ZejVRlTdfcrz\\n7z7hvYV2N0PCI81qXgryIrgXLBv0z+H1e9bILD93xoRcngs1XmPeKJameQZ7JARx\\nOoI8Dt5QLOnqn2G06gJ/uPVW8rC8T2ZIq8ZjI/T7wiaEaYw2w4pzRQuQNX17Ttoz\\nDj9PqHBa/1heUhTCaAgLb6lyQQKBgQC213aiCiUdS7XsjsbcBKxcvVT1hXbGBAou\\nNW5X3s1jn0fhxP30+Czu1DO7Is4rq+7ZHBBCA1dV51oOYuRGzih7VjitbCDLEJrN\\nC0A5nxdrCzxCq73x8qJlAR8fQiBeve8jI28aPzmxJVkJ44TVQMhpc/Yy6gQRpyLC\\n/ksEuiNpbwKBgQDaLxOoi9EE/u44fCPDkq0EvXYUzGcDHS3176ckw84mEDo95hyd\\nbWlI5D7pBHF8/DiR72qCSYb+laaML6Uk++MF4prmbXvAgnktHV1iBBulPKusO9+R\\n/vpS/3kOj2/2fJHuIcUPMrc4c8c8Er5t5AlYxkUe0HQ6I/Ex9pcaAx2YQQKBgQCT\\nS6iqiXm0zBVW6P6SqMEiRPR4hnhUtVRuPWUTLM5RfzOtUcE04+luzUyPaU6mJ/BW\\nvyDpzT9CWQpXpJs530MFeURXkVApxsqufG3U/bEj7v0wyKJQk6L3s5ua1u605FYN\\n/LG4d07GwsukB8Iu+e155o1kHtoATqDWbX2J5Vo5yQKBgDA0GYNpVf+WzRhoqNRh\\n34B/hLpzxfla8J6NEBLsPfu4e+3BdPRNGPh7KHENC8Z6l6CPLPLhBZFLbjdjgHrL\\nsVzEglbsPLKFAMhCD8LghJ+7MHRZR8ZugJMQ2OnBdQa7zAhHqbaitg6oAKi//atC\\nZOBDo1ZYDaxhLPna2FFrdKTg\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-lfl9t@just-in-time-5698c.iam.gserviceaccount.com","client_id":"104890952766105802144","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lfl9t%40just-in-time-5698c.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(141));
module.exports = __webpack_exports__;

})();