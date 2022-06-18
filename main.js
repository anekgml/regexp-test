let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

// const regexp = new RegExp('the', 'gi');
const regexp = /the/;

console.log(str.match(regexp));
console.log(regexp.test(str));
console.log(str.replace(regexp, 'AAA')); // 원본데이터 손상 X
// str = str.replace(regexp, 'AAA'); // 값 재할당
// console.log(str);

console.log(str.match(/\.$/gim));
// 이스케이프 문자(Escape Character)란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.

const h = `     the hello   world   !

`

console.log(
    str.match(/d$/gm),
    str.match(/^t/gim),
    str.match(/h..p/g),
    str.match(/fox|dog/),
    str.match(/fox|dog/g),
    str.match(/https?/g),
    str.match(/d{2,3}/g),
    str.match(/\b\w{2,3}\b/g),
    str.match(/[fox]/g),
    str.match(/[0-9]{1,}/g),
    str.match(/[가-힣]{1,}/g),
    str.match(/\w/g),
    str.match(/\b/g),
    str.match(/\bf\w{1,}\b/g),
    str.match(/\d{1,}/g),
    h.replace(/\s/g, '')
);



const str2 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

console.log(
    str2.match(/.{1,}(?=@)/g),
    str2.match(/(?<=@).{1,}/g)
);