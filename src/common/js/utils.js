import CryptoJS from 'crypto-js';
var key = CryptoJS.enc.Utf8.parse('e5b40d286cxfca34');
var iv = CryptoJS.enc.Utf8.parse('Con-ere-ceD-cumt');

function AESCrypto(target) {
    if(!target) return "";
    target = target.toString();
    var result = CryptoJS.AES.encrypt(target, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return result.toString();
}


function AESDecrypt(target) {
    if(!target) return "";
    var decrypted = CryptoJS.AES.decrypt(target, key,{
        iv:iv,
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

function MD5(target) {
    var result = CryptoJS.MD5(target).toString();
    return result;
} 

export default {
    AESCrypto,
    AESDecrypt,
    MD5
}