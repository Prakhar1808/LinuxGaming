# Common Issues

## Games Won't Launch

1. Verify Proton enabled in Steam settings
2. Check ProtonDB for fixes
3. Try Proton-GE
4. Check launch options

## Poor Performance

1. Enable GameMode
2. Check GPU drivers updated
3. Disable shader pre-caching
4. Try different Proton version

## Black Screen

1. Try `PROTON_USE_WINED3D=1`
2. Verify Vulkan working (`vulkaninfo`)
3. Check display output settings

## Controller Not Working

1. Enable Steam Input in game properties
2. Check controller works in Big Picture Mode
3. Try different SDL mappings

## Audio Issues

1. Check `padsp` or PipeWire settings
2. Verify audio device in Wine config
3. Try different audio backend

## Anti-Cheat Not Working

1. Check ProtonDB for your game
2. Try Proton-GE
3. Many kernel AC games don't work

## Shader Stutter

1. Disable shader pre-caching
2. Use async shaders (DXVK_ASYNC=1)
3. Verify shader cache writing