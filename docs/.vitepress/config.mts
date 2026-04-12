import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LinuxGamingWiki",
  description: "Your One-Stop Solution for Gaming on Linux",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/distros/choosing' },
      { text: 'Steam', link: '/steam/proton' },
      { text: 'Troubleshooting', link: '/troubleshooting/common-issues' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Choosing a Distro', link: '/distros/choosing' },
          { text: 'Ubuntu', link: '/distros/ubuntu' },
          { text: 'Fedora', link: '/distros/fedora' },
          { text: 'Arch', link: '/distros/arch' },
        ]
      },
      {
        text: 'Graphics',
        items: [
          { text: 'AMD & Intel', link: '/graphics/amd' },
          { text: 'NVIDIA', link: '/graphics/nvidia' },
          { text: 'Vulkan', link: '/graphics/vulkan' },
          { text: 'Optimus', link: '/graphics/optimus' },
        ]
      },
      {
        text: 'Steam',
        items: [
          { text: 'Proton', link: '/steam/proton' },
          { text: 'Proton-GE', link: '/steam/proton-ge' },
          { text: 'Steam Deck', link: '/steam/deck' },
        ]
      },
      {
        text: 'Launchers',
        items: [
          { text: 'Lutris', link: '/launchers/lutris' },
          { text: 'Heroic', link: '/launchers/heroic' },
          { text: 'Flatpak', link: '/launchers/flatpak' },
        ]
      },
      {
        text: 'Gaming',
        items: [
          { text: 'Native Games', link: '/gaming/native' },
          { text: 'Anti-Cheat', link: '/gaming/anti-cheat' },
          { text: 'Compatibility', link: '/gaming/compatibility' },
        ]
      },
      {
        text: 'Emulation',
        items: [
          { text: 'RPCS3', link: '/emulation/rpcs3' },
          { text: 'Switch', link: '/emulation/switch' },
          { text: 'Retro', link: '/emulation/retro' },
        ]
      },
      {
        text: 'Optimization',
        items: [
          { text: 'MangoHud', link: '/optimization/mangohud' },
          { text: 'GameMode', link: '/optimization/gamemode' },
          { text: 'FSync', link: '/optimization/fsync' },
        ]
      },
      {
        text: 'Streaming',
        items: [
          { text: 'Moonlight', link: '/streaming/moonlight' },
          { text: 'Sunshine', link: '/streaming/sunshine' },
        ]
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'Common Issues', link: '/troubleshooting/common-issues' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YourUsername/LinuxGaming' }
    ],

    search: {
      provider: 'local'
    },

    outline: 'deep',
  }
})
