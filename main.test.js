describe("Morse to english", () => {
    it("Should return correct character given it's morse coed", () => {
        expect(convertMorseCode(".-").toBe("a"));
        expect(convertMorseCode("---...").toBe(":"));
        expect(convertMorseCode("..---").toBe("2"));
    })
    it("Should handle multiple charcters", () => {
        expect(convertMorseCode("-.-. --- --- .-..").toBe("cool"));
        expect(convertMorseCode("-.-.-- -.. . -..- - . .-. ..--..").toBe("!dexter?"));
    })
    it("Should handle sentences", () => {
        expect(convertMorseCode("...- . .-. -.-- / -.-. --- --- .-..").toBe("very cool"));
        expect(convertEnglish("..--- / -- .- -. -.-- / -. ..- -- -... ...-- .-. ...").toBe("2 many numb3rs"));
    })
})


describe("English to morse", () => {
    it("Should return correct morse code given a character", () => {
        expect(convertEnglish("a").toBe(".-"));
        expect(convertEnglish("9").toBe("----."));
        expect(convertEnglish("(").toBe("-.--."));
    })
    it("Should handle multiple charcters", () => {1
        expect(convertEnglish("cool").toBe("-.-. --- --- .-.."));
        expect(converEnglish("!dexter?").toBe("-.-.-- -.. . -..- - . .-. ..--.."));
    })
    it("Should handle sentences", () => {
        expect(convertEnglish("very cool").toBe("...- . .-. -.-- / -.-. --- --- .-.."));
        expect(convertEnglish("2 many numb3rs").toBe("..--- / -- .- -. -.-- / -. ..- -- -... ...-- .-. ..."));
    })
})


describe("Invalid inputs", () => {
    it("Should return nothing is nothing is inputted", () => {
        expect(convertEnglish("").toBe(""));
        expect(convertMorseCode("").toBe(""));
    })
    it("Should give the user an 'Unknown characters' error if the input doesn't match with any of the data", () => {
        expect(convertEnglish("شفرتك سيئة").toBe("Error: Unknown characters"));
        expect(convertEnglish("あなたのコードは最悪です").toBe("Error: Unknown characters"));
        expect(convertEnglish("Codul tău e nasol").toBe("Error: Unknown charcters"));
    })
    it("Should correctly handle extra space in sentences", () => {
        expect(converEnglish("this   is    a  lot of              space").toBe("- .... .. ... / .. ... / .- / .-.. --- - / --- ..-. / ... .--. .- -.-. ."));
        expect(convertMorseCode("- ....      .. ... / ..            ...          / .- / .-.. --- - / ---        ..-. / ... .--. .- -.-. .").toBe("this is a lot of space"));
    })
    it("Should accept uppercase and lowercase letters", () => {
        expect(convertEnglish("THIS should WoRK fiNe").toBe("- .... .. ... / ... .... --- ..- .-.. -.. / .-- --- .-. -.- / ..-. .. -. ."))
    })
})

