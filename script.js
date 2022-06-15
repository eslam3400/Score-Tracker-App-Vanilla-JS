let scores = []

const add = () => {
  let player1Name = document.getElementById("player1Name").value
  let player2Name = document.getElementById("player2Name").value
  let game = document.getElementById("game").value
  let player1Score = document.getElementById("player1Score").value
  let player2Score = document.getElementById("player2Score").value

  scores.push({ player1Name, player2Name, game, player1Score, player2Score, date: new Date().toGMTString() })
  player1Name = player2Name = game = player1Score = player2Score = "" // Clear Input
  save()
  render()
}

const save = () => localStorage.setItem("scores", JSON.stringify(scores))

const load = () => {
  scores = JSON.parse(localStorage.getItem("scores")) ?? []
  render()
}

const render = () => {
  let records = ``
  scores.forEach(score =>
    records += `<tr>
      <td>${score.player1Name}</td>
      <td>${score.player2Name}</td>
      <td>${score.game}</td>
      <td>${score.player1Score}</td>
      <td>${score.player2Score}</td>
      <td>${score.date ?? ""}</td>
    </tr>`
  );
  document.getElementById("table-body").innerHTML = records
}

load()