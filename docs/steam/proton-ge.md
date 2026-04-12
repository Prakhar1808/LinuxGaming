# Proton-GE

Proton-GE is a community-enhanced version of Proton with additional fixes for games that don't work with the standard Proton.

## Installation

### Via ProtonUp-Qt

```bash
# Install ProtonUp-Qt
flatpak install flathub net.davidotek.phep

# In ProtonUp-Qt:
# 1. Click "Install" 
# 2. Select "ProtonGE_Proton"
# 3. Choose version
# 4. Click "Install"
```

### Via Heroic Launcher

1. Open **Heroic** → **Settings** → **Wine/Proton**
2. Click **Manage Wine/Proton Versions**
3. Install **GE-Proton**

## When to Use Proton-GE

- Games that crash with standard Proton
- Games with anti-cheat issues
- Specific games known to need GE fixes
- Older Windows games

## Common Fixes

::: tip
Check ProtonDB for game-specific fixes before manually configuring.
:::

## Launch Options for Proton-GE

```
PROTON_USE_WINED3D=1 %command%  # Use OpenGL instead of Vulkan
WINEDEBUG=warn+all %command%    # Enable debug logging
```