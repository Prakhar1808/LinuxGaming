# Steam Deck

The Steam Deck runs a customized Arch Linux (SteamOS) with Proton built-in.

## Getting Started

1. Update your Deck via System Settings
2. Ensure GPU drivers are current
3. Games just work in most cases!

## Performance Tips

- **Use Game Mode**: More direct GPU access
- **TDP Limit**: Limit to 15W for better battery
- **Refresh Rate**: Lower from 60Hz to save power

## Desktop Mode

Access via Power → Switch to Desktop.

### Installing Apps

```bash
# Add Flathub
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Install Heroic
flatpak install flathub com.heroicgameslauncher.hgl
```

## EmuDeck

Essential for emulation on Deck:
<https://www.emudeck.com>