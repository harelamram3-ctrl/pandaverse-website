const ip = 'pandaverse.playminecraft.online';
const discord = 'https://discord.gg/xJU6AtDW';

function copyIP() {
  navigator.clipboard.writeText(ip);
  alert('ה-IP הועתק!\n' + ip);
}

function openDiscord() {
  window.open(discord, '_blank');
}

async function loadServerStatus() {
  const status = document.getElementById('status');
  const players = document.getElementById('players');

  try {
    const res = await fetch('https://api.mcstatus.io/v2/status/java/' + ip);
    const data = await res.json();

    if (data.online) {
      status.innerText = 'Online';
      players.innerText = data.players.online + '/' + data.players.max;
    } else {
      status.innerText = 'Offline';
      players.innerText = '0';
    }
  } catch {
    status.innerText = 'לא זמין';
    players.innerText = '0';
  }
}

loadServerStatus();
setInterval(loadServerStatus, 15000);
