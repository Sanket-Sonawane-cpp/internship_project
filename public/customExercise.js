function clearForm() {
    document.getElementById("CustomExercise").reset();
}


document.getElementById('CustomExercise').addEventListener('submit', async function (e) {
  e.preventDefault();

  const Exercise_Name = document.getElementById('exerciseName').value;
  const Focus_Area = document.getElementById('focusArea').value;
  const Exercise_Type = document.getElementById('difficulty').value;
  const Target_Body_Part = document.getElementById('targetPart').value;
  const number = document.getElementById('numberOfTimes').value;
  const unit = document.getElementById('uom').value;
  const Duration = `${number} ${unit}`;
  const Exercise_Steps = document.getElementById('exerciseSteps').value;
  const Exercise_Benefit = document.getElementById('exerciseBenefit').value;
  const Is_Custom = true;
  const Created_By = "user";

  console.log('Submitting:', { Exercise_Name, Focus_Area, Exercise_Type, Target_Body_Part, Duration, Exercise_Steps, Exercise_Benefit, Is_Custom, Created_By });
  const res = await fetch('/submit/exercise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Exercise_Name, Focus_Area, Exercise_Type, Target_Body_Part, Duration, Exercise_Steps, Exercise_Benefit, Is_Custom, Created_By })
  });

  //Debuuging message
  const msg = await res.text();
});
