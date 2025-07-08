const divData = document.querySelector('.content');
const headDiv = document.querySelector('.container');

async function main(diff,part,focuus) {
  const res = await fetch(`http://localhost:5000/api/${diff}/${focuus}/${part}`)
  const data = await res.json()
  const html_div = `
      <div class="text-section">
        <div class="description">
          <h3>Description:</h3>
            <p>
              ${data[0]["Exercise Steps"]}
            </p>
        </div>
        <div class="benefits">
          <h3>Benefits:</h3>
          <ul>
            <li>${data[0]["Benefit"]}</li>
          </ul>
        </div>
      </div>`

  const head_data = `<h1>${data[0]["Exercise Name"]}</h1>`

  divData.innerHTML = html_div + divData.innerHTML
  headDiv.innerHTML = head_data + headDiv.innerHTML

  window.id = data[0]["_id"]
}

const params = new URLSearchParams(window.location.search)
const diff = params.get('diff')
const part = params.get('part')
const focuus = params.get('focuus')

main(diff,part,focuus)

//fetch("http://localhost:5000/api/Simple").then(response => response.json()).then(data => console.log(data))

//<button onclick="window.location.href=`http://127.0.0.1:5500/mongo-tut/public/data.html?diff=${diff}`">All</button>

async function startExercise() {
  const res = await fetch(`http://localhost:5000/api/exer/${window.id}`)

  const count = await res.text()
  alert(`Number of times exercise done is: ${count}`,) 
  //alert("Exercise started! Get ready!");
}
async function stopExercise() {
  const res = await fetch(`http://localhost:5000/api/exer/${window.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  alert("Exercise count reset");
}