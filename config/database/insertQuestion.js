const database = require('nedb');

const questionDB = new database({
    filename: './config/database/databaseFile/questionDB.db',
    autoload: true
});

/*
    question { "num" : "", "answer1" : "", "answer2" : "" }
*/

questionDB.insert({ "num" : "0", "answer1" : "사이트 잘못 들어왔어요. 나갈래요.", "answer2" : "나는 개발에 관심이 생겼다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "1", "answer1" : "나는 지금 나온 기술을 잘 활용하는게 재밌다.", "answer2" : "나는 공상 과학 영화 속 기술에 더 흥미가 있다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "2", "answer1" : "나는 게임으로 먹고 사는 것을 고민해본 적이 있다.", "answer2" : "나는 게임은 취미로만 즐긴다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "3", "answer1" : "나는 고양이를 더 좋아한다.", "answer2" : "나는 강아지를 더 좋아한다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "4", "answer1" : "나는 책을 자주 읽는다.", "answer2" : "나는 책을 라면 받침대로 사용한다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "5", "answer1" : "나는 그렇다고 강아지가 싫진 않다.", "answer2" : "나는 강아지가 싫다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "6", "answer1" : "커피는 하루에 한 잔이면 충분하다.", "answer2" : "커피는 세 잔 이상 마셔야한다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "10", "answer1" : "나는 콤퓨타가 짱이다.", "answer2" : "나는 스마트폰이 짱이다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "11", "answer1" : "나는 수학의 정석을 풀며 희열을 느껴본적이 있다.", "answer2" : "나는 수학의 정석을 집합까지만 읽어봤다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "12", "answer1" : "나는 개발왕이 될거다.", "answer2" : "나는 개발에 목숨걸 생각은 없다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "13", "answer1" : "나는 직장인이다.", "answer2" : "나는 백수다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "14", "answer1" : "나는 마법사다.", "answer2" : "나는 머글이다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "15", "answer1" : "나는 아침에 일어나서 프렌치 토스트와 커피를 마신다.", "answer2" : "나는 아침에 일어나서 시리얼을 먹는다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "16", "answer1" : "나는 숨은 그림찾기를 잘한다.", "answer2" : "나는 부루마불을 잘한다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "17", "answer1" : "나는 이 그림이 불편하다.", "answer2" : "나는 이 그림이 아무렇지 않다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "18", "answer1" : "나는 준비된 퍼즐을 맞추는 것이 좋다.", "answer2" : "나는 퍼즐을 직접 제작하는 것이 좋다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "19", "answer1" : "나는 알파고가 이기길 바랬다.", "answer2" : "나는 이세돌이 이기길 바랬다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "20", "answer1" : "기계는 인간의 도구이다.", "answer2" : "인간은 기계의 도구이다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "21", "answer1" : "내가 만든 제품에 인터넷 따윈 필요 없다.", "answer2" : "내가 만든 제품에 인터넷이 연결되면 좋겠다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "22", "answer1" : "사실 게임으로 먹고 사는 것을 고민해본적 없다.", "answer2" : "진짜 게임으로 먹고 사는 것을 고민해본적이 있다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "25", "answer1" : "나는 부스트캠프 마스터가 되고 싶다.", "answer2" : "나는 부스트캠프 운영진이 되고 싶다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "26", "answer1" : "나는 프론트엔드 마스터가 되고 싶다.", "answer2" : "나는 깃 마스터가 되고 싶다." }, function(err, newDoc) {});