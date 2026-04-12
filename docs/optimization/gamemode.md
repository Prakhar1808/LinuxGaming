# GameMode

GameMode is a daemon that optimizes Linux system performance for games.

## Installation

```bash
# Ubuntu/Debian
sudo apt install gamemode

# Fedora
sudo dnf install gamemode

# Arch
sudo pacman -S gamemode
```

## Usage

### Steam

Right-click game → Properties → Launch Options:

```
gamemoderun %command%
```

### Heroic

Settings → Other → Treat as Game → Enable GameMode

## What It Does

- CPU governor to performance
- Updates ск (if inotify exhausted)
- GPU boosting (NVIDIA)
- Realtime kernel priority
- I/O priority

## Verify

Run in terminal to see active optimizations:

```
gamemoded -l
```