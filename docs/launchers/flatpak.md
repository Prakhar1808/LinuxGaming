# Flatpak for Gaming

Flatpak is the recommended way to install game launchers for system-wide availability and easy updates.

## Installation

```bash
# Install Flatpak
sudo apt install flatpak

# Add Flathub
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

## Gaming Flatpaks

| App | Command |
| :--- | :--- |
| **Heroic** | `flatpak install flathub com.heroicgameslauncher.hgl` |
| **MangoHud** | `flatpak install flathub com.zedtho.mangohud` |
| **Goverlay** | `flatpak install flathub com.leinardi.goverlay` |

## Permissions

Flatpaks are sandboxed. Run in terminal to allow access:

```bash
flatpak run --command=sh --device=all com.heroicgameslauncher.hgl
```

Or configure in Flatseal: