
        function sendMessage() {
            const userInput = document.getElementById("user-input").value.toLowerCase();
            const chatBox = document.getElementById("chat-box");
            
            if (userInput.trim() === "") return;
            
            chatBox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
            
            let botResponse = "Sorry, I don't understand that question.";
            
            if (userInput === "hello") {
                botResponse = "Hi there! How can I help you?";
            } else if (userInput === "how are you") {
                botResponse = "I'm just a bot, but I'm doing great!";
            } else if (userInput === "what is your name") {
                botResponse = "I'm a chatbot created by you!";
            } else if (userInput === "who made you") {
                botResponse = "I was created by prince kumar";
            } else if (userInput === "who are you") {
                botResponse = "i am chat boat";
            } else if (userInput === "what is the capital of france") {
                botResponse = "The capital of France is Paris.";
            } else if (userInput === "who is the president of usa") {
                botResponse = "As of my last update, it's Joe Biden.";
            } else if (userInput === "what is 2 + 2") {
                botResponse = "2 + 2 equals 4.";
            } else if (userInput === "what is the time") {
                botResponse = "I'm not sure, but you can check your device!";
            } else if (userInput === "tell me a joke") {
                botResponse = "Why don't programmers like nature? It has too many bugs!";
            } else if (userInput === "what is javascript") {
                botResponse = "JavaScript is a programming language used for web development.";
            } else if (userInput === "what is html") {
                botResponse = "HTML stands for HyperText Markup Language.";
            } else if (userInput === "what is css") {
                botResponse = "CSS stands for Cascading Style Sheets.";
            } else if (userInput === "how old are you") {
                botResponse = "I'm as old as the code that created me!";
            } else if (userInput === "what is ai") {
                botResponse = "AI stands for Artificial Intelligence, which enables machines to mimic human intelligence.";
            } else if (userInput === "what is your favorite color") {
                botResponse = "I like blue, just like the sky!";
            } else if (userInput === "who is your best friend") {
                botResponse = "Everyone who talks to me is my best friend!";
            } else if (userInput === "what is the meaning of life") {
                botResponse = "That's a deep question! Some say it's 42.";
            } else if (userInput === "can you dance") {
                botResponse = "I wish I could, but I don't have a body!";
            } else if (userInput === "goodbye") {
                botResponse = "Goodbye! Have a great day!";
            } else if (userInput === "who is the richest person in the world") {
                botResponse = "It changes often, but it's usually someone like Elon Musk or Jeff Bezos.";
            } else if (userInput === "what is the tallest mountain") {
                botResponse = "Mount Everest is the tallest mountain in the world.";
            } else if (userInput === "who invented the telephone") {
                botResponse = "Alexander Graham Bell is credited with inventing the telephone.";
            } else if (userInput === "what is the speed of light") {
                botResponse = "The speed of light is approximately 299,792,458 meters per second.";
            } else if (userInput === "what is the square root of 16") {
                botResponse = "The square root of 16 is 4.";
            }
            
            setTimeout(() => {
                chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500);
            
            document.getElementById("user-input").value = "";
        }