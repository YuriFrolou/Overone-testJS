const questions = [
    {
        description: "Какое значение выведет alert:<br><code>let num = 0;<br>\n" +
            "alert(num++);<br>\n" +
            "console.log(num);</code>",
        answer: 0
    },
    {
        description: "Какое значение выведет console:<br><code>let num = 0;<br>\n" +
            "alert(num++);<br>\n" +
            "console.log(num);</code>",
        answer: 1
    },
    {
        description: "Какое значение выведет console:<br><code>let num = 0;<br>\n" +
            "++num;<br>\n" +
            "num++;<br>\n" +
            "console.log(num);</code>",
        answer: 2
    },
    {
        description: "Какое значение выведет первый console.log:<br>" +
            "<code>let num1 = 3;<br>\n" +
            "num1++;<br>\n" +
            "let num2 = num1--;<br>\n" +
            "console.log(num1++);<br>\n" +
            "console.log(--num);</code>",
        answer: 3
    },
    {
        description: "Какое значение выведет второй console.log:<br>" +
            "<code>let num1 = 3;<br>\n" +
            "num1++;<br>\n" +
            "let num2 = num1--;<br>\n" +
            "console.log(num1++);<br>\n" +
            "console.log(--num);</code>",
        answer: 3
    },
];