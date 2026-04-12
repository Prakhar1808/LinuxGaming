# Fsync & Esync

Performance optimizations for Wine/Proton.

## What They Do

- **Esync**: Reduce Wine overhead for system calls
- **Fsync**: Faster Wine synchronization (requires newer kernels)

## Enabling

### In Steam

Proton versions 5.x+ have both enabled by default.

### Manually

In Launch Options:

```
PROTON_NO_ESYNC=0          # Ensure Esync on
PROTON_NO_FSYNC=0        # Ensure Fsync on
```

## Requirements

- **Esync**: `ulimit -Hn` >= 65536
- **Fsync**: Kernel 5.0+ (most modern distros)

## Verify

```bash
# Check ulimit
ulimit -Hn

# Should be >= 65536
```

## When to Disable

If games crash, try disabling:

```
PROTON_NO_ESYNC=1
PROTON_NO_FSYNC=1
```