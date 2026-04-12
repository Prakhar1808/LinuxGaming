# Vulkan

Vulkan is the modern graphics API Proton uses for near-native performance.

## Check Vulkan

```bash
vulkaninfo | grep "GPU"
```

## Installation

### Ubuntu/Debian

```bash
sudo apt install mesa-vulkan-drivers vulkan-tools
```

### Fedora

```bash
sudo dnf install vulkan vulkan-tools
```

### Arch

```bash
sudo pacman -S vulkan-icd-loader mesa
```

## GPU-Specific

| GPU | Package |
| :--- | :--- |
| **NVIDIA** | `vulkan-tools`, `libvulkan` |
| **AMD** | `mesa-vulkan-radeon` |
| **Intel** | `intel-media-driver` |

## Troubleshooting

- Missing Vulkan: Install GPU-specific package
- Layer errors: Check `vulkaninfo` output