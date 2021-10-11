function pl() {
    let str = document.getElementById("str").value;
    let ot = document.getElementById("ot");

    let vowels = ["a", "e", "i", "o", "u"];

    let newStr = "";
    let stra = str.split(" ");

    for (s of stra) {

        if (vowels.indexOf(s[0]) > -1) {
            newStr = str + "way";

        } else {
            let firstMatch = s.match(/[aeiou]/g) || 0;
            let vowel = s.indexOf(firstMatch[0]);
            newStr = s.substring(vowel) + str.substring(0, vowel) + "ay";
        }
    }
    ot.innerHTML = newStr;
}