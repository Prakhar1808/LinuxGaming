# Fedora

Cutting-edge Linux distro with excellent hardware support.

## Installation

```bash
sudo dnf install steam
```

## Gaming Packages

```bash
# Essential
sudo dnf install steam gamemode mangohud

# NVIDIA
sudo dnf install akmod-nvidia

# AMD Mesa
sudo dnf install mesa-vulkan-drivers
```

## Nobara

Fedora-based distro optimized for gaming:
<https://nobaraproject.jp />

## RPM Fusion

Enable for extra codecs:

```bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
```