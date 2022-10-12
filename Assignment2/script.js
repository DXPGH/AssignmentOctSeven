let form = document.querySelector('#workoutPlanForm')
let list = document.getElementById('workouts')


function clearForm(id){
    document.getElementById(id).innerHTML = ""
}

function addli(event){
    
    let li = document.createElement('li')
    let text= document.createTextNode(event);
    li.appendChild(text)
    list.appendChild(li)
 
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    let select = document.getElementById('workoutday')
    let day = select.options[select.selectedIndex].value;
    console.log(day)
    switch(day){
        case 'Monday':
            clearForm('workouts')
            addli('Squat Jump 10*3')
            addli('Push Up 10*3')
            addli('Dumbell Press 6*5')
        break;
        case 'Tuesday':
            clearForm('workouts')
            addli('Cardio 45min')
        break;
        case 'Wednesday':
            clearForm('workouts')
            addli('Sit Up 20')
            addli('Dip 6*5')
            addli('Russian Twist 5*5')
        break;
        case 'Thursday':
            clearForm('workouts')
            addli('Relax')
        break;
        case 'Friday':
            clearForm('workouts')
            addli('Pull Up 6*5')
            addli('Jumping Jack 20*5')
            addli('Bicycle Crunch 2min')
        break;
        case 'Saturday':
            clearForm('workouts')
            addli('Lunge Split Jump 10*3')
            addli('Plank 60sec')
            
        break;
        case 'Sunday':
            clearForm('workouts')
            addli('Cardio 45min')
        break;
        default: console.log('what day you choose?')
        break;

    }
    const workoutList = document.createElement("div")
    
})