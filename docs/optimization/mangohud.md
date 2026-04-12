# MangoHud

Performance overlay showing FPS, temps, CPU/GPU usage.

## Installation

```bash
# Ubuntu/Debian
sudo apt install mangohud

# Fedora
sudo dnf install mangohud

# Arch
sudo pacman -S mangohud

# Flatpak
flatpak install flathub com.zedtho.mangohud
```

## Usage

### Steam

Right-click game → Properties → Launch Options:

```
MANGOHUD=1 %command%
```

With GameMode:

```
gamemoderun mangohud %command%
```

## Configuration

Edit `~/.config/MangoHud/config.json` or use **Goverlay** (GUI):

```bash
flatpak install flathub com.leinardi.goverlay
```

## Display Options

- FPS
- FPS graph
- GPU temp
- CPU temp
- VRAM usage
-frametime