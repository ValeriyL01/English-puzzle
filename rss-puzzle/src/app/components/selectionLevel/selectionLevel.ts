import './selectionLevel.css';
import createElement from '../createElement';

const selectionLevelForm = createElement('form', 'form');
const labelLevel = createElement('label', 'label', 'Level', {
  for: 'level',
});
const selectLevel = createElement('select', 'select', '', {
  id: 'level',
  name: 'level',
}) as HTMLSelectElement;
for (let i = 1; i <= 6; i += 1) {
  selectLevel.append(
    createElement('option', 'option', `${i}`, {
      value: `${i}`,
    }),
  );
}
const labelPage = createElement('label', 'label', 'Round', {
  for: 'round',
});
const selectPage = createElement('select', 'select', '', {
  id: 'round',
  name: 'round',
}) as HTMLSelectElement;
for (let i = 1; i <= 45; i += 1) {
  selectPage.append(
    createElement('option', 'option', `${i}`, {
      value: `${i}`,
    }),
  );
}
selectLevel.addEventListener('change', () => {
  const levelValue = Number(selectLevel.value);
  let totalPages = 0;
  if (levelValue === 1) {
    totalPages = 45;
  } else if (levelValue === 2) {
    totalPages = 41;
  } else if (levelValue === 3) {
    totalPages = 40;
  } else if (levelValue === 4 || levelValue === 5) {
    totalPages = 29;
  } else if (levelValue === 6) {
    totalPages = 25;
  }
  selectPage.innerHTML = '';

  for (let i = 1; i <= totalPages; i += 1) {
    selectPage.append(
      createElement('option', 'option', `${i}`, {
        value: `${i}`,
      }),
    );
  }
});

selectionLevelForm.append(labelLevel, selectLevel, labelPage, selectPage);
export { selectionLevelForm, selectPage, selectLevel };
