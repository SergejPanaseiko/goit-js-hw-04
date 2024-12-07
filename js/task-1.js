function slugify(title) {
    const lowerCase=title.toLowerCase();
    title = lowerCase.split(" ");
    title = title.join("-");
    return title;
}

console.log("------------- TASK 1 -------------------");
console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log(" ");