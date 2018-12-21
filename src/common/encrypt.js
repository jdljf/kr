import CryptoJS from 'crypto-js'
var settings={
    key : CryptoJS.enc.Utf8.parse("2123a6cdef342431"),  //十六位十六进制数作为密钥
    iv : CryptoJS.enc.Utf8.parse('ABCDEF1234123412')   //十六位十六进制数作为密钥偏移量
}
export const encrypt={
    Decrypt(word) {
        let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        let decrypt = CryptoJS.AES.decrypt(srcs, settings.key, { iv: settings.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    },
    //加密方法
    Encrypt(word) {
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, settings.key, { iv: settings.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.ciphertext.toString().toUpperCase();
    }
}