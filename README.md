# Zambian Programmers — Coming Soon Page

A single-file, interactive "under construction" landing page built to look and feel like a real Linux terminal, while the full Zambian Programmers site is being developed.

## Preview

A desktop-style terminal window sits centered on a well recognizable background (inspired by the classic Ubuntu desktop). Visitors can actually type into it, run a handful of real-feeling shell commands, and get pointed to our Facebook community through a native-style desktop notification.

## Features

- **Responsive gradient background** — fills the full viewport width and dynamic height on any device.
- **Adaptive terminal window** — capped to a realistic max size on desktop, reshapes to a taller, more square window on mobile.
- **Functional mini-shell** — visitors can click into the terminal and type. Supported commands:

  | Command | What it does |
  |---|---|
  | `help` | Lists available commands |
  | `whoami` | Prints the current user |
  | `pwd` | Prints the working directory |
  | `ls` | Lists fake home-folder contents |
  | `date` | Prints the current date/time |
  | `echo <text>` | Echoes text back |
  | `uname -a` | Prints kernel/system info |
  | `neofetch` | Prints system specs + project credit |
  | `notify-send "Title" "Body"` | Fires a native-style desktop toast |
  | `history` | Lists previously run commands |
  | `clear` | Clears the terminal |

- **Realistic blinking cursor** — blinks like a real terminal caret, and goes solid while actively typing.
- **Native-style desktop notification (toast)** — mimics a GNOME/libnotify banner. Fires automatically shortly after the page loads, inviting visitors to follow our Facebook community, and can be re-triggered any time by clicking the terminal's title bar. Clicking the toast itself (outside the close button) opens the Facebook group in a new tab.

## Tech Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies. Everything lives in a single `.html` file.
oops now it doesnt.
## Getting Started

Just open the file in a browser:

```bash
open index.html
```

Or serve it locally (recommended for testing on mobile via your local network):
```bash
npm i -g live-server
```
then,
```bash
    live-server
```

Then visit `http://localhost:8000`.

## Customization

A couple of values are worth knowing about are in `js/_exports.js` block:

- `DEVELOPER_NAME` — credited in the `neofetch` command output.
- `FACEBOOK_URL` — the link opened when the notification toast is clicked. Currently points to our Facebook group: https://www.facebook.com/groups/1421088291504611/

## Community

We're a code/tech community based in Zambia. Come say hello and follow along:

- Facebook: https://www.facebook.com/groups/1421088291504611/

## License

This project is licensed under the MIT License — see [LICENSE](./LICENSE) for details.

In short: anyone is free to use, modify, and redistribute this code, including commercially, as long as the original copyright notice and license text stay attached. That notice is what credits Zambian Programmers as the origin of the project, so please keep it intact in any copy or fork.

## Contributing

Contributions, issues, and suggestions are welcome. If you use or adapt this project, we'd appreciate a mention or link back to Zambian Programmers. 🙂
