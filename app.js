


// Imposta la tua chiave API di OpenAI
const apiKey = '';

/* // URL dell'endpoint per il modello GPT-3.5
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions'; */

/* seleziono il pulsante */
const submitButton = document.querySelector("#button")
const content = document.querySelector("#user-input")
const botResponse = document.querySelector("#bot-response")


/* chiamata API */

async function getMessage() {
    console.log('clicked');
    botResponse.innerHTML += `<div class="user-message">${content.value}</div><br>`;
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}` ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: content.value}],
            max_tokens: 100
        })
    }
    try {
        content.value= null;
         const response = await fetch('https://api.openai.com/v1/chat/completions', options)
         const data = await response.json()
         console.log(data)
        
         botResponse.innerHTML += `<div class="bot-message">${data.choices[0].message.content}</div><br>`;
    } catch (error){
        console.error(error)
    }
}



submitButton.addEventListener('click', getMessage, )


