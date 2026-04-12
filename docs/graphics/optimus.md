# NVIDIA Optimus (Hybrid Graphics)

Laptops with both Intel integrated + NVIDIA dedicated GPUs need special handling.

## Solution 1: PRIME Render Offload

In Steam Launch Options:

```
__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia %command%
```

## Solution 2: NVIDIA On-Demand

Install `nvidia-settings`, set to "On-Demand" in PRIME settings.

## Solution 3: DGPU Always On

Via BIOS if available. Increases power use but seamless.

## Troubleshooting

- `nvidia-smi` not working: Kernel module may need loading
- TLP conflicting: Add `--exclude-gpus` in TLP config