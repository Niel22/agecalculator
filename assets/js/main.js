const dobinput = document.getElementById("date");
const calculateBtn = document.getElementById('calculateAge');
const age = document.getElementById('age');

calculateBtn.addEventListener('click', function(){
    const dob = new Date(dobinput.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age1 = Math.abs(ageDate.getUTCFullYear()- 1970);

    age.innerHTML = `Your age is ${age1} years`;
})