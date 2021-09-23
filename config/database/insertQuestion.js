const database = require('nedb');

const questionDB = new database({
    filename: './config/database/databaseFile/questionDB.db',
    autoload: true
});

/*
    question { "num" : "", "answer1" : "", "answer2" : "" }
*/

questionDB.insert({ "num" : "0", "question": "미래의 개발자님, 안녕하세요!", "answer1" : "사이트 잘못 들어왔어요. 나갈래요.", "answer2" : "개발에 관심이 생겼다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "1", "question": "나는 기반기술과 신기술 중", "answer1" : "근간이 되는 기반기술이 좋다.", "answer2" : "공상과학에 나올법한 신기술이 좋다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "2", "question": "나에게 게임은?", "answer1" : "먹고 사는 것을 고민해볼 정도로 잘한다.", "answer2" : "취미일 뿐이다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "3", "question": "고양이와 강아지 중 한마리랑만 살 수 있다면?", "answer1" : "나는 고양이와 산다", "answer2" : "나는 강아지와 산다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "4", "question": "나에게 책은?", "answer1" : "마음의 양식이다.", "answer2" : "라면 받침대에 불과하다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "5", "question": "선택받지 못한 강아지가 슬퍼한다.", "answer1" : "그럼 한번 키워볼까..?", "answer2" : "그래도 강아지는 싫다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "6", "question": "나는 평균적으로 커피를", "answer1" : "하루에 한잔 아래로 마신다.", "answer2" : "세 잔 이상 마셔야 한다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "10", "question": "나에게 전자기기는?", "answer1" : "콤퓨타가 제일이다.", "answer2" : "스마트폰이 최고다. " }, function(err, newDoc) {});
questionDB.insert({ "num" : "11", "question": "고등학교 시절, 나는 수학 교과서를", "answer1" : "풀며 희열을 느꼈다.", "answer2" : "집합까지만 봤다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "12", "question": "나의 목표는?", "answer1" : "개발 왕이다.", "answer2" : "개발 평민이다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "13", "question": "나의 현재 상태는?", "answer1" : "직장인이다.", "answer2" : "백수다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "14", "question": "내가 호그와트 학생이라면?", "answer1" : "그리핀도르다.", "answer2" : "슬리데린이다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "15", "question": "죽을때까지 아침 메뉴가 고정이라면?", "answer1" : "프렌치 토스트와 커피를 선택한다.", "answer2" : "시리얼을 선택한다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "16", "question": "내가 잘하는 게임은?", "answer1" : "숨은 그림찾기", "answer2" : "부루마불" }, function(err, newDoc) {});
questionDB.insert({ "num" : "17", "question": "나는 이 그림을 보고", "answer1" : "화가 치밀어 오른다.", "answer2" : "무슨 차이가 있죠?" }, function(err, newDoc) {});
questionDB.insert({ "num" : "18", "question": "나는 퍼즐을 맞출 때", "answer1" : "준비된 퍼즐을 맞추는 것이 좋다.", "answer2" : "퍼즐 조각을 직접 만들고 싶다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "19", "question": "나는 알파고와 이세돌의 대국을 보며", "answer1" : "알파고를 응원했다.", "answer2" : "이세돌을 응원했다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "20", "question": "내가 터미네이터를 보며 든 생각은?", "answer1" : " 기계는 인간의 도구일 뿐이다.", "answer2" : "인류는 기계에게 지배당할 것이다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "21", "question": "나는 우리집 냉장고에", "answer1" : "시대가 어느땐데 인터넷은 연결되어있어야 한다.", "answer2" : "인터넷이 굳이 연결되지 않아도 된다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "22", "question": "나는 사실 게임으로", "answer1" : "고민해본 적이 없다.", "answer2" : "진지하게 고민해본 적이 있다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "25", "question": "나는 부스트캠프에서", "answer1" : "마스터가 되고 싶다.", "answer2" : "운영진이 되고 싶다." }, function(err, newDoc) {});
questionDB.insert({ "num" : "26", "question": "나는 개발자로 성장해서", "answer1" : "프론트엔드 마스터가 될것이다.", "answer2" : "백엔드 & 깃 마스터가 될것이다." }, function(err, newDoc) {});