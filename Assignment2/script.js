let form = document.querySelector('#workoutPlanForm')
let list = document.getElementById('workouts')


function clearForm(id){
    document.getElementById(id).innerHTML = ""
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    let select = document.getElementById('workoutday')
    let day = select.options[select.selectedIndex].value;
    console.log(day)
    switch(day){
        case 'Monday':
            clearForm('workouts')
            let li1 = document.createElement('li')
            let text1= document.createTextNode('Running');
            li1.appendChild(text1)
            list.appendChild(li1)


        break;
        case 'Tuesday':
            clearForm('workouts')
            let li2 = document.createElement('li')
            let text2= document.createTextNode('Lower Body');
            li2.appendChild(text2)
            list.appendChild(li2)
        break;
        case 'Wednesday':
            clearForm('workouts')
            let li3 = document.createElement('li')
            let text3= document.createTextNode('Upper Body');
            li3.appendChild(text3)
            list.appendChild(li3)
        break;
        case 'Thursday':console.log('Relax ')
        break;
        case 'Friday':console.log('Upper Body')
        break;
        case 'Saturday':console.log('Lower Body')
        break;
        case 'Sunday':console.log('Relax')
        break;
        default: console.log('what day you choose?')
        break;

    }
    const workoutList = document.createElement("div")
    
})