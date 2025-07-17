document.addEventListener('DOMContentLoaded', () => { 
    const quizForm = document.getElementById('quizForm');
    const questionForm = document.getElementById('questionForm'); 
    const questionsList = document.getElementById('questions'); 
    const quizSection = document.getElementById('quiz-section'); 
    const editSection = document.getElementById('edit-section'); 
    const questionsSection = document.getElementById('questions-list');
    let questions = []; 
    let editingIndex = -1; 
    
    questions = [ 
        { 
            question: 'What is the capital of France?', 
            options: ['Paris', 'Berlin', 'Madrid', 'Rome'] 
        }, 
        { 
            question: 'Which planet is known as the Red Planet?', 
            options: ['Earth', 'Mars', 'Jupiter', 'Saturn'] 
        } 
    ];
    
    renderQuiz();

    questionForm.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        const question = document.getElementById('question').value; 
        const option1 = document.getElementById('option1').value; 
        const option2 = document.getElementById('option2').value; 
        const option3 = document.getElementById('option3').value; 
        const option4 = document.getElementById('option4').value; 
        const options = [option1, option2, option3, option4]; 
        
        if (editingIndex > -1) { 
            questions[editingIndex] = { question, options }; 
            editingIndex = -1; 
        } 
        else { 
            questions.push({ question, options }); 
        } 
        
        resetForm(); 
        renderQuestions();
        renderQuiz(); 
    }); 

    function renderQuiz() { 
        const quizQuestions = document.getElementById('quiz-questions'); 
        quizQuestions.innerHTML = ''; 
        questions.forEach((q, index) => { 
            const div = document.createElement('div'); 
            div.innerHTML = ` 
                <p>${q.question}</p> 
                <ul> 
                    ${q.options.map((option, i) => `<li><input type="radio" name="question${index}" id="question${index}option${i}" value="${option}"> <label for="question${index}option${i}">${option}</label></li>`).join('')} 
                </ul> 
            `; 
            quizQuestions.appendChild(div); 
        }); 
    }

    function resetForm() { 
        questionForm.reset(); 
        document.getElementById('question').focus(); 
        editSection.style.display = 'none';
        questionsSection.style.display = 'none';
    } 

    function renderQuestions() { 
        questionsList.innerHTML = ''; 
        questions.forEach((q, index) => { 
            const li = document.createElement('li'); 
            li.innerHTML = ` 
            <div> 
                <p>${q.question}</p> 
                <ul>${q.options.map(option => `<li>${option}</li>`).join('')}</ul> 
            </div> 
            <div> 
                <button onclick="editQuestion(${index})">Edit</button> 
                <button onclick="deleteQuestion(${index})">Delete</button> 
            </div> 
            `; 
            questionsList.appendChild(li); 
        }); 
    } 

    window.submitQuiz = function() { 
        quizSection.style.display = 'none'; 
        editSection.style.display = 'block'; 
        renderQuestions(); 
    }
    
    window.editQuestion = function(index) { 
        const q = questions[index]; 
        document.getElementById('question').value = q.question; 
        document.getElementById('option1').value = q.options[0]; 
        document.getElementById('option2').value = q.options[1]; 
        document.getElementById('option3').value = q.options[2]; 
        document.getElementById('option4').value = q.options[3]; 
        editingIndex = index;
        editSection.style.display = 'block';
        questionsSection.style.display = 'none'; 
    } 
    window.deleteQuestion = function(index) { 
        questions.splice(index, 1); 
        renderQuestions();
    }
});