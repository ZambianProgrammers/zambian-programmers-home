
import { DEVELOPER_NAME, tbUserEl, promptUserEl, currentUsername } from "./_exports.js";
import { escapeHtml } from "./util.js";

export function applyUsername() {
  tbUserEl.textContent = currentUsername;
  promptUserEl.textContent = currentUsername;
}

export function neofetchOutput() {
  const header = currentUsername + '@zambians.dev';
  return [
    header,
    '-'.repeat(header.length),
    'OS: Ubuntu 24.04 LTS x86_64',
    'Kernel: 6.8.0-generic',
    'Shell: bash 5.2',
    'Terminal: zambians.dev',
    'CPU: Virtual Core (4)',
    'Memory: 2048MiB / 7860MiB',
    'Developer: ' + escapeHtml(DEVELOPER_NAME)
  ].join('<br>');
}

export function unameOutput(flag) {
  if (flag === '-a') {
    return 'Linux zambians-dev 6.8.0-51-generic #52-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux';
  }
  return 'Linux';
}


