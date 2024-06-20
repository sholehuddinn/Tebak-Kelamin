const baseApi = "https://api.genderize.io";


async function show (name, gender, probability) {
  const out = document.getElementById('hasil');
  if (gender == "male") {
    gender = 'Laki-laki';
  }else if (gender == "female") {
    gender = 'Perempuan';
  }
  const PredictionText = `Halo <span class="font-bold">${name}</span> , Jenis Kelamin Kamu Kemungkinan Adalah ${probability * 100}% ${gender}`;
  out.innerHTML = PredictionText;
}

async function predict(event) {
  if (event.key == "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${baseApi}/?name=${firstName}`;

    const response = await fetch(queryUrl);
    const data = await response.json();
    show(data.name, data.gender, data.probability);
  }
}