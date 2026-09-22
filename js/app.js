import { currentUsername, linesEl, typedEl, cursorEl, input, terminalEl, titlebarEl, notifClose, USERNAME_COOKIE } from "./_exports.js";
import { setCookie, escapeHtml, promptMarkup, hideNotification, showNotification, parseNotifyArgs, scrollToBottom, addLine, pauseBlink, announceFacebookGroup } from "./util.js";
import { applyUsername, neofetchOutput, unameOutput } from "./commands.js";
// Developer's name, appended to `neofetch` output.

let cmdHistory = [];
let histIndex = -1;
let currentusername = currentUsername
function main() {
  function runCommand(raw) {
    const cmd = raw.trim();
    addLine(promptMarkup() + '&nbsp;<span class="c-input">' + escapeHtml(raw) + '</span>');

    if (cmd.length === 0) { scrollToBottom(); return; }

    cmdHistory.push(cmd);
    histIndex = cmdHistory.length;

    const parts = cmd.split(/\s+/);
    const name = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    switch (name) {
      case 'help':
        addLine('Available commands: help, whoami, pwd, ls, date, echo, uname, su, notify-send, neofetch, history, clear');
        break;
      case 'whoami':
        addLine(currentusername);
        break;
      case 'su': {
        const newName = parts[1];
        if (!newName) {
          addLine('<span class="c-dim">Usage: su &lt;username&gt;</span>');
        } else if (!/^[A-Za-z_][A-Za-z0-9_-]{0,20}$/.test(newName)) {
          addLine('su: invalid user name &#39;' + escapeHtml(newName) + '&#39;');
        } else {
          currentusername = newName;
          setCookie(USERNAME_COOKIE, currentusername, 365);
          applyUsername();
        }
        break;
      }
      case 'pwd':
        addLine('/home/user');
        break;
      case 'ls':
        addLine('Desktop  Documents  Downloads  Music  Pictures  Videos  projects');
        break;
      case 'date':
        addLine(new Date().toString());
        break;
      case 'echo':
        addLine(escapeHtml(arg));
        break;
      case 'clear':
        linesEl.innerHTML = '';
        break;
      case 'history':
        addLine(cmdHistory.map((h, i) => (i + 1) + '  ' + escapeHtml(h)).join('<br>'));
        break;
      case 'neofetch':
        addLine(neofetchOutput());
        break;
      case 'uname':
        addLine(unameOutput(arg.trim()));
        break;
      case 'notify-send': {
        const notifArgs = parseNotifyArgs(cmd.slice(name.length).trim());
        if (notifArgs.length === 0) {
          addLine('<span class="c-dim">Usage: notify-send "Title" ["Body"]</span>');
        } else {
          showNotification(notifArgs[0], notifArgs[1] || '');
        }
        break;
      }
      case 'sudo':
        addLine('<span class="c-dim">user is not in the sudoers file. This incident will be reported.</span>');
        break;
      case 'exit':
        addLine('logout');
        break;
      default:
        addLine('bash: ' + escapeHtml(name) + ': command not found');
    }
    scrollToBottom();
  }

  // Pauses the terminal's blinking cursor.

  notifClose.addEventListener('click', (e) => {
    e.stopPropagation();
    hideNotification();
  });

  input.addEventListener('input', () => {
    typedEl.textContent = input.value;
    pauseBlink();
    scrollToBottom();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(input.value);
      input.value = '';
      typedEl.textContent = '';
      pauseBlink();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length && histIndex > 0) {
        histIndex--;
        input.value = cmdHistory[histIndex];
        typedEl.textContent = input.value;
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex < cmdHistory.length - 1) {
        histIndex++;
        input.value = cmdHistory[histIndex];
      } else {
        histIndex = cmdHistory.length;
        input.value = '';
      }
      typedEl.textContent = input.value;
    }
  });

  // Facebook group URL.

  // Initiates the native-style desktop notification.


  terminalEl.addEventListener('click', () => input.focus());
  // Clicking the terminal's title bar reveals the native-style desktop notification again.
  titlebarEl.addEventListener('click', announceFacebookGroup);
}
// On page load, the terminal's input field is focused and the native-style desktop notification is displayed the first time.
window.addEventListener('load', () => {
  applyUsername();
  input.focus();
  main()
  setTimeout(announceFacebookGroup, 1200);
});

