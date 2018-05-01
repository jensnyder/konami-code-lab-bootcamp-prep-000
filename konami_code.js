const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init(e) {
  const key = parseInt(e.detail || e.which);
  document.body.addEventListener('keydown', function(e) {
    if (e.which === 38) {
    alert('You did it!')
    }
  })
}