# Proton & Steam Play

Proton is Valve's compatibility layer based on Wine, allowing Windows games to run natively on Linux.

## Quick Setup

1. Open **Steam** → **Settings** → **Compatibility**
2. Check **"Enable Steam Play for all other titles"**
3. Select **Proton Experimental** (or latest stable)
4. Restart Steam

Your library now shows all Windows games with automatic compatibility handling.

## Proton Versions

| Version | Best For |
| :--- | :--- |
| **Proton Experimental** | Latest games, best compatibility |
| **Proton 8.x (Stable)** | Stable, tested games |
| **Proton-GE** | Games needing extra fixes |

## Checking Compatibility

Before buying a game, check **[ProtonDB](https://www.protondb.com)** for user reports and tweaks.

## Force Proton for a Game

```
Right-click game → Properties → Compatibility → Force specific Proton version
```

## Launch Options

Common useful options:

```
gamemoderun %command%          # Enable GameMode
MANGOHUD=1 %command%           # Show FPS overlay
DXVK_ASYNC=1 %command%        # Async Vulkan
```