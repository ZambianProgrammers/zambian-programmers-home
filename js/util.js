//pure function
import { notifEl, currentUsername, linesEl, cursorEl, FACEBOOK_URL } from "./_exports.js"
let blinkTimeout = null;
export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}
export const setCookie = (name, value, days) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
}
export const escapeHtml = (s) => {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
export const promptMarkup = () => {
  return '<span class="c-user">' + escapeHtml(currentUsername) + '@zambians.dev</span><span class="c-white">:</span><span class="c-path">~</span><span class="c-white">$</span>';
}
//non pure functions
let notifHideTimeout = null;
export function showNotification(title, body, appLabel, url) {
  notifApp.textContent = appLabel || 'zambians.dev';
  notifTitle.textContent = title || '';
  notifText.textContent = body || '';
  notifText.style.display = body ? 'block' : 'none';
  notifEl.classList.add('show');

  if (url) {
    notifEl.style.cursor = 'pointer';
    notifEl.onclick = () => window.open(url, '_blank', 'noopener');
  } else {
    notifEl.style.cursor = 'default';
    notifEl.onclick = null;
  }

  clearTimeout(notifHideTimeout);
  notifHideTimeout = setTimeout(hideNotification, 5000);
}

export function hideNotification() {
  notifEl.classList.remove('show');
  clearTimeout(notifHideTimeout);
}

export function scrollToBottom() {
  termBody.scrollTop = termBody.scrollHeight;
}

export function addLine(html) {
  const div = document.createElement('div');
  div.className = 'line';
  div.innerHTML = html;
  linesEl.appendChild(div);
}
// Parses: notify-send "Title" "Optional body"  (also allows unquoted single-word args)
export function parseNotifyArgs(str) {
  const re = /"([^"]*)"|'([^']*)'|(\S+)/g;
  const out = [];
  let m;
  while ((m = re.exec(str)) !== null) {
    out.push(m[1] !== undefined ? m[1] : (m[2] !== undefined ? m[2] : m[3]));
  }
  return out;
}


export function pauseBlink() {
  cursorEl.classList.add('typing');
  clearTimeout(blinkTimeout);
  blinkTimeout = setTimeout(() => cursorEl.classList.remove('typing'), 450);
}
export function announceFacebookGroup() {
  showNotification(
    'Website in development',
    'Follow Zambian Programmers on Facebook',
    'zambians.dev',
    FACEBOOK_URL
  );
}
