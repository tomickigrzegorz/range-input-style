
window.addEventListener('DOMContentLoaded', event => {
  // https://codegolf.stackexchange.com/a/150252
  const hsl2rgb = (H, S, L) => [5, 3, 1].map(i => A(L * 2) * S * ([1, Y, 0, 0, Y, 1][(i - ~H) % 6] - .5) + L, Y = (A = n => n > 1 ? 2 - n : n)((H /= 60) % 2));

  document.querySelector('#range > input').oninput = event => {
    const rgb = hsl2rgb(event.target.value, 0.897, 0.541);
    document.body.style.setProperty('--pure-material-primary-rgb', `${Math.round(rgb[0] * 255)}, ${Math.round(rgb[1] * 255)}, ${Math.round(rgb[2] * 255)}`);
  };

})
