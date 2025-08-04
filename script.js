const terminal = document.getElementById('terminal');
const startBtn = document.getElementById('startBtn');
const usernameInput = document.getElementById('username');
const paymentSection = document.getElementById('paymentSection');

const fakeSteps = [
  '[+] Connecting to Instagram Secure Server...',
  '[+] Fetching user data...',
  () => `[+] Target: ${usernameInput.value || '@unknown'} (Active)`,
  '[+] Breaching security layers...',
  '[+] Decrypting password hash...',
  '[✓] Decryption Complete ✅',
];

startBtn.addEventListener('click', async () => {
  terminal.textContent = '';
  paymentSection.style.display = 'none';

  for (let i = 0; i < fakeSteps.length; i++) {
    const step = typeof fakeSteps[i] === 'function' ? fakeSteps[i]() : fakeSteps[i];
    terminal.textContent += step + '\n';
    await delay(1000 + Math.random() * 500);
  }

  paymentSection.style.display = 'block';
});

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
