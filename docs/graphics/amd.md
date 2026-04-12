# AMD & Intel Graphics

AMD and Intel use open-source Mesa drivers, which work excellently out of the box.

## AMD (Mesa)

Already included in most distros. For latest drivers:

### Ubuntu/Debian (PPA)

```bash
sudo add-apt-repository ppa:kisak/tkg
sudo apt update
```

### Fedora

```bash
sudo dnf install mesa-vulkan-drivers
```

### Arch

```bash
sudo pacman -Syyu  # Full system upgrade for latest
```

## Intel

Integrated graphics work well with Mesa. Check [Intel Graphics](https://wiki.archlinux.org/title/Intel_graphics) for specifics.

## Testing

```bash
glxinfo | grep "OpenGL"
vulkaninfo | grep "GPU"
```

## Tips

- AMDVLK can be used instead of RADV for some games
- Enable `RADV_PERFTEST=aco` for better performance