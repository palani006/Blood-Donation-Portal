function showForm(type) {
  document.getElementById('donor-form').classList.add('hidden');
  document.getElementById('request-form').classList.add('hidden');

  if (type === 'donor') {
    document.getElementById('donor-form').classList.remove('hidden');
  } else if (type === 'request') {
    document.getElementById('request-form').classList.remove('hidden');
  }
}