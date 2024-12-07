document.addEventListener('DOMContentLoaded', () => { 
    const questionForm = document.getElementById('questionForm'); 
    const questionsList = document.getElementById('questions'); 
    let questions = []; 
    let editingIndex = -1; 
    
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
    }); 
    function resetForm() { 
        questionForm.reset(); 
        document.getElementById('question').focus(); 
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
    
    window.editQuestion = function(index) { 
        const q = questions[index]; 
        document.getElementById('question').value = q.question; 
        document.getElementById('option1').value = q.options[0]; 
        document.getElementById('option2').value = q.options[1]; 
        document.getElementById('option3').value = q.options[2]; 
        document.getElementById('option4').value = q.options[3]; 
        editingIndex = index; 
    } 
    window.deleteQuestion = function(index) { 
        questions.splice(index, 1); renderQuestions();
    }
});