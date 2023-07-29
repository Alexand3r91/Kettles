function handleButtonClick() {
  const target = event.target;

  const section = target.closest('section');

  if (target.classList.contains('kettlesRed')) {
    hideAllSections();
    const kettlesSectionRed = document.getElementById('kettlesSectionRed');
    kettlesSectionRed.style.display = 'flex';
  } else if (target.classList.contains('kettlesBlue')) {
    hideAllSections();
    const kettlesSectionBlue = document.getElementById('kettlesSectionBlue');
    kettlesSectionBlue.style.display = 'flex';
  } else if (target.classList.contains('kettlesPink')) {
    hideAllSections();
    const kettlesSectionPink = document.getElementById('kettlesSectionPink');
    kettlesSectionPink.style.display = 'flex';
  } else if (target.classList.contains('kettlesBeige')) {
    hideAllSections();
    const kettlesSectionBeige = document.getElementById('kettlesSectionBeige');
    kettlesSectionBeige.style.display = 'flex';
  }
}

const kettlesBlue = document.querySelectorAll('.kettlesBlue');
const kettlesRed = document.querySelectorAll('.kettlesRed');
const kettlesPink = document.querySelectorAll('.kettlesPink');
const kettlesBeige = document.querySelectorAll('.kettlesBeige');

kettlesBlue.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
kettlesRed.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
kettlesPink.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
kettlesBeige.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function hideAllSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
}
