let selected = '全部';
const search = document.querySelector<HTMLInputElement>('#search');
function update() {
  const query = (search?.value || '').trim().toLowerCase();
  let count = 0;
  document.querySelectorAll<HTMLElement>('.result').forEach(el => {
    el.hidden = !(selected === '全部' || el.dataset.category === selected) || !el.dataset.search?.includes(query);
    if (!el.hidden) count++;
  });
  document.querySelectorAll<HTMLElement>('.tool-group').forEach(group => {
    group.hidden = !Array.from(group.querySelectorAll<HTMLElement>('.result')).some(el => !el.hidden);
  });
  const empty = document.querySelector<HTMLElement>('#empty');
  if (empty) empty.hidden = count !== 0;
}
search?.addEventListener('input', update);
document.querySelectorAll<HTMLButtonElement>('.filter').forEach(btn => btn.addEventListener('click', () => {
  selected = btn.dataset.category || '全部';
  document.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  update();
}));
