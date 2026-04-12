# Game Compatibility

How to check and improve game compatibility.

## Before Buying

1. Search your game on **[ProtonDB](https://www.protondb.com)**
2. Check **Steam** store page compatibility sections
3. Search Reddit r/LinuxGaming

## Wine/Proton Versions

Try in order:
1. Proton Experimental
2. Proton 8.x Stable
3. Proton-GE

## Launch Options

Common fixes via launch options:

```
PROTON_USE_WINED3D=1       # OpenGL instead of Vulkan
DXVK_ASYNC=1              # Async DXVK
PROTON_NO_ESYNC=1         # Disable Esync
PROTON_NO_FSYNC=1        # Disable Fsync
WINEDEBUG=warn+all       # Debug logging
```

## Performance

- Enable GameMode
- Use MangoHud to monitor
- Disable shader pre-caching if stuttering