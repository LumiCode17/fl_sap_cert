const questions = [
    {
        question: "Which of the following technological advantages (hardware) contributed to the development of SAP S/4 HANA?",
        choices: ["1. The improvement of cloud computing technology. 2. The Expansion of server landscapes (e.g processor performance).  3. Optimized cache (faster transfer)", "1. The improvement of cloud computing technology 2. The Expansion of server landscapes (e.g processor performance) 3. Use F1 help for the field and select the technical information.", "1. The improvement of cloud computing technology 2. The Expansion of server landscapes (e.g processor performance) 3. The client is the organizational unit at the highest level."],
        correct: 0
    },
    {
        question: "Which option is available to SAP customers who do not want to manage their own complex IT landscape?",
        choices: ["Analyzes and forecasts ", "Public Cloud Service (SAP S/4 HANA Cloud)", "Text-Mining"],
        correct: 1
    },
    {
        question: "Why does the SAP HANA DB have smaller memory requirements? ",
        choices: ["1. Tablea are automatically compressed 2. Numerous Tables were Exempted", "1. Tablea are automatically compressed 2. Numerous Tables were Created", "1. Tablea are automatically compressed 2. Numerous Tables were Eliminated"],
        correct: 2
    },
    {
        question: "Which of the following factors are reasons why digital world is becoming more complex rather than simpler?",
        choices: ["1. Machine Learning 2. Artificial Intelligence 3. Robotic", "1. The Internet of things 2.The Globalisation and Expansion of Corperate Network 3. The Exponential Growth of Digital data", "Programming 2. Test-Mining 3. Links to files"],
        correct: 1
    },
    {
        question: "An App that is contained in a catalog that you are assigned to will not appear in your SAP Fiori launchpad. What could that be?",
        choices: ["None", "The App is not included in any of your available tile groups", "The Programming of Test-Mining the Links to files"],
        correct: 1
    },
    {
        question: "How can you determine the technical name of a field in SAP GUI?",
        choices: ["None", "Use F1 help for the field and select the technical information.", "Use F10 help for the field and select the technical information."],
        correct: 1
    },
    {
        question: "What / Which options are available for navigation in the SAP GUI?",
        choices: ["1. Select entries from the favorites list. 2. Enter a transaction code in the command field", "1.The Globalisation and Expansion of Corperate Network 2. The Exponential Growth of Digital data", "None"],
        correct: 0
    },
    {
        question: "Which of the following elements are part of the SAP screen structure in the SAP GUI?",
        choices: ["1. Machine Learning 2. Artificial Intelligence 3. Robotic", "1. The Internet of things 2.The Globalisation and Expansion of Corperate Network 3. The Exponential Growth of Digital data", "1. System toolbar 2. Tab (RegisterKarte | Register Card) 3. Command field"],
        correct: 2
    },
    {
        question: "Which of the following information can be displayed in the SAP GUl status bar in the standard system?",
        choices: ["None of the above", "1. User ID 2. Program name 3. Response time (Antwortzeit)", "1. Programming 2. Test-Mining 3. Links to files"],
        correct: 1
    },
    {
        question: "How can you personalize the SAP GUI user interface?",
        choices: ["1. Show STATUS messages/reports in dialog windows. 2. Change the layout of the `SAP Easy Access` screen 3. Adjust colors and behavior of images and fields.", "Planning area, Version, Planning period", "Overview of all open invoices for a customer"],
        correct: 0
    },
    {
        question: "Which of the following items can be added to a favorites list in SAP GUI?",
        choices: ["1. Background color 2. background image 3. Time pattern", "1. Links to files / Data 2. Internet addresses 3. Transactions", "1. User ID 2. Client number 3. Password"],
        correct: 1
    },
    {
        question: "What are some aspects of organizational units?",
        choices: ["1. The material stocks within a plant are differentiated based on their storage location. 2. The client is the organizational unit at the highest level", "None", "1. The Document Ledger must be intentionally ommited 2. Sales records must be declared after an Order"],
        correct: 0
    },
    {
        question: "What are some characteristics of mapping master data to organizational units?",
        choices: ["1. Supplier selection 2. Payment processing ", "1. Overview of all open invoices for a customer 2. Show due date grid", "1. The parameters for inventory valuation are plant-related. 2. The views in a material master can be assigned to several organizational units."],
        correct: 2
    },
    {
        question: "Which of the following entities are business partner types?",
        choices: ["1. group 2. person 3. organization", "1. group 2. client 3. plant", "1. client 2. group 3. organisation"],
        correct: 1
    },
    {
        question: "Which application provides both service management and procurement?",
        choices: ["SAP Fiori", "SAP Ariba", "SAP Netch"],
        correct: 1
    },
    {
        question: "Which of the following features are included in the Operational Procurement solution?",
        choices: ["1. Order cooperation 2. Self-service requirement 3. Advancement", "1. Order cooperation 2. Self-service requirement 3. procurement", "1. Order operation 2. Self-service requirement 3. procurement"],
        correct: 1
    },
    {
        question: "Which of the following values is optional when creating an order?",
        choices: ["Storage location", "Storage facility", "Storage plant"],
        correct: 0
    },
    {
        question: "What do you have to select to create a planned independent requirement?",
        choices: ["Planning area, Version, Planning plant", "Planning facility, Version, Planning plant", "Planning area, Version, Planning period"],
        correct: 2
    },
    {
        question: "What are the most important aspects of inventory management?",
        choices: ["1. Smaller batch sizes can be processed as required. 2. The profitability of products is calculated in real time. 3. Since inventory management takes place in real time, buffer stocks are no longer required to compensate for inaccuracies.", " 1. Semi Smaller batch sizes can not be processed as required. 2. The profitability of products ca not be calculated in real time. 3. Since inventory management takes place in real time, buffer stocks are no longer required to compensate for inaccuracies.", "1. Bigger batch sizes can be processed as required. 2. The profitability of products is calculated in real time. 3. Since inventory management takes place in real time, buffer stocks are no longer required to compensate for accuracies."],
        correct: 0
    },
    {
        question: "What functions does the SAP Fiori app “Process receivables” offer?",
        choices: ["1. Display master data for a customer 2. Overview of all open invoices for a customer 3. Show due date grid", "1. Undisplay master data for a customer 2. Overview of all open tracts for a customer 3.Show due date grid", "1. Display master vision for a customer 2. Overview of all open invoices for a customer 3. Show undue date grid"],
        correct: 0
    },
    {
        question: "A delivery of goods should always be subjected to a quality check first. How can you take this into account when posting goods receipt?",
        choices: ["You post the goods receipt and specify the inventory order “quality expression”.", "You unpost the goods receipt and specify the inventory type “quantity inspection”.", "You post the goods receipt and specify the inventory type “quality inspection”."],
        correct: 2
    },
    {
        question: "What is the correct order of the procurement cycle?",
        choices: ["1. Order - 2. Supplier selection - 3. Goods receipt - 4. Payment processing ", "1. Supplier selection - 2. Order - 3. Payment processing - 4.Goods receipt", "1. Supplier selection - 2. Order - 3. Goods receipt - 4. Payment processing"],
        correct: 2
    },
    {
        question: "Which of the following factors are reasons why digital world is becoming more complex rather than simpler?",
        choices: ["1. Machine Learning 2. Artificial Intelligence 3. Robotic", "1. The Internet of things 2.The Globalisation and Expansion of Corperate Network 3. The Exponential Growth of Digital data", "Programming 2. Test-Mining 3. Links to files"],
        correct: 1
    },
    {
        question: "Which of the following factors are reasons why digital world is becoming more complex rather than simpler?",
        choices: ["1. Machine Learning 2. Artificial Intelligence 3. Robotic", "1. The Internet of things 2.The Globalisation and Expansion of Corperate Network 3. The Exponential Growth of Digital data", "Programming 2. Test-Mining 3. Links to files"],
        correct: 1
    },
    {
        question: "Which of the following factors are reasons why digital world is becoming more complex rather than simpler?",
        choices: ["1. Machine Learning 2. Artificial Intelligence 3. Robotic", "1. The Internet of things 2.The Globalisation and Expansion of Corperate Network 3. The Exponential Growth of Digital data", "Programming 2. Test-Mining 3. Links to files"],
        correct: 1
    },
    {
        question: "Which of the following factors are reasons why digital world is becoming more complex rather than simpler?",
        choices: ["1. Machine Learning 2. Artificial Intelligence 3. Robotic", "1. The Internet of things 2.The Globalisation and Expansion of Corperate Network 3. The Exponential Growth of Digital data", "Programming 2. Test-Mining 3. Links to files"],
        correct: 1
    },
    {
        question: "Which of the following factors are reasons why digital world is becoming more complex rather than simpler?",
        choices: ["1. Machine Learning 2. Artificial Intelligence 3. Robotic", "1. The Internet of things 2.The Globalisation and Expansion of Corperate Network 3. The Exponential Growth of Digital data", "Programming 2. Test-Mining 3. Links to files"],
        correct: 1
    },

    // Add more questions here...
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "Correct!";
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect!";
    }

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
        }
    }, 2000);
}

showQuestion();