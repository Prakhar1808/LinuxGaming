# NVIDIA Drivers

NVIDIA requires proprietary drivers for gaming. The open-source Nouveau driver won't work well.

## Check Current Driver

```bash
nvidia-smi
```

## Installation by Distro

### Ubuntu/Debian

```bash
sudo apt install nvidia-driver-545
```

### Fedora

```bash
sudo dnf install akmod-nvidia
```

### Arch

```bash
sudo pacman -S nvidia nvidia-utils nvidia-settings
```

## Driver Version by GPU

Check [Arch Wiki NVIDIA](https://wiki.archlinux.org/title/NVIDIA) for your GPU generation:

| GPU Series | Recommended Driver |
| :--- | :--- |
| **RTX 4000** | 535+ |
| **RTX 3000** | 535+ |
| **RTX 2000** | 535+ |
| **GTX 1000-1600** | 535+ |
| **Older** | 470xx |

## Reboot

Always reboot after installing drivers!

## Common Issues

- **Black screen**: Add `nvidia-drm.modeset=1` to kernel params
- **Screen tearing**: Enable Force Composition Pipeline in nvidia-settings