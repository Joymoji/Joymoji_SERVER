var express = require('express');
var router = express.Router();

const upload = require('../config/multer');

/*
    파일 전송 시 content-type은 form-data로 지정합니다.
    form-data로 오는 모든 데이터는 string으로 들어오니 적절하게 형변환해서 사용하세요.
    파일 전송할 때 upload 모듈로 받지 않으면 body 값을 인식 못합니다! 빼먹지 말고 꼭 쓰셔야해요!!
*/

router.post('/single', upload.single('img'), (req, res) => {
    /*
        파일이 하나만 전송할 때 single 메소드 쓰임
        file.location으로 전송된 파일 경로 접근
    */
    const img = req.file.location;
    console.log(img);
});

module.exports = router;