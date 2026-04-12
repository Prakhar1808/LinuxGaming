# Switch Emulation

Nintendo Switch emulation on Linux.

## Yuzu / Ryujinx

### Yuzu (Discontinued)

Earlier emulator, now discontinued but still usable.

### Ryujinx (Active)

Active Switch emulator:

```bash
# Flatpak
flatpak install flathub org.ryujinx.Ryujinx
```

## Setup

1. Get keys (product_key.txt, title.keys) - requires own dump
2. Load games via File → Open Ryujinx Folder
3. Configure graphics backend

## Performance

- Use Vulkan
- Enable async shader compilation
- Set to 1280x720 for better performance