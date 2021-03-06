const express = require('express');
const router = express.Router();
const { questionDB, resultDB } = require('../config/database/database.js');

const questionTable = {
    "0" : {"1" : "99", "2" : "1"},
    "1" : {"1" : "2", "2" : "3"},
    "2" : {"1" : "22", "2" : "4"},
    "3" : {"1" : "5", "2" : "6"},
    "4" : {"1" : "10", "2" : "10"},
    "5" : {"1" : "11", "2" : "11"},
    "6" : {"1" : "11", "2" : "11"},
    "10" : {"1" : "12", "2" : "13"},
    "11" : {"1" : "14", "2" : "15"},
    "12" : {"1" : "16", "2" : "17"},
    "13" : {"1" : "18", "2" : "18"},
    "14" : {"1" : "19", "2" : "20"},
    "15" : {"1" : "21", "2" : "21"},
    "16" : {"1" : "Front-End", "2" : "Back-End"},
    "17" : {"1" : "Front-End", "2" : "Back-End"},
    "18" : {"1" : "iOS", "2" : "Android"},
    "19" : {"1" : "AI", "2" : "빅데이터"},
    "20" : {"1" : "빅데이터", "2" : "AI"},
    "21" : {"1" : "IoT", "2" : "임베디드"},
    "22" : {"1" : "25", "2" : "게임"},
    "25" : {"1" : "26", "2" : "부스트캠프 운영진"},
    "26" : {"1" : "크롱", "2" : "호눅스"},
    "99" : {"1" : "1"}
};

router.get('/', function(req, res, next) {
    const question = req.query.q;
    let pick;

    if(req.query.pick) {
        pick = req.query.pick;
        const resNum = questionTable[question][pick];

        if(checkResNum(resNum) === "result") { // resNum이 결과인 경우 결과만 반환
            resultDB.find({name: resNum}, (err, docs) => res.json(docs));
        }
        else {
            questionDB.find({num: resNum}, (err, docs) => res.json(docs));
        }
    }
    else { // pick이 없는 경우 해당 문제만 반환
        questionDB.find({num: question}, (err, docs) => res.json(docs));
    }
});

const checkResNum = (num) => {
    switch (num) {
        case "Front-End":
        case "Back-End":
        case "iOS":
        case "Android":
        case "게임":
        case "빅데이터":
        case "AI":
        case "IoT":
        case "임베디드":
        case "부스트캠프 운영진":
        case "크롱":
        case "호눅스":
            return "result";
    }

    return "question";
}

module.exports = router;
