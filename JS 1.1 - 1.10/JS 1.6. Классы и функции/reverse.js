class ReverseName {
    constructor(inputId, outputId) {
        this.input = document.getElementById(inputId);
        this.output = document.getElementById(outputId);
    }

    reverseName() {
        const name = this.input.value;
        const reversedName = name.split("").reverse().join("");
        this.output.innerText = `Ваше имя наоборот: ${reversedName}`;
    }
}

function reverseName() {
    const reverseNameObj = new ReverseName("name-input", "output");
    reverseNameObj.reverseName();
}
