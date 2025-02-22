# Feyw - Modern Broker Integration UI

A beautiful, modern UI component for integrating multiple financial brokers into your application. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Feyw UI](public/preview.png)

## Features

- 🎨 Modern glass-morphism design
- 🔄 Smooth hover and click animations
- 📱 Fully responsive
- 🖼️ High-quality broker logo integration
- 🌟 Beautiful backdrop blur effects
- 🎭 Custom gradient borders
- 💫 Sophisticated shadow layering

## Connect

- Follow me on [Twitter/X](https://x.com/zephyrlogs) for updates and web dev content

## Supported Brokers

- Robinhood
- Charles Schwab
- Fidelity
- WealthSimple
- Vanguard
- WE
- Coinbase
- JPMorgan Chase

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next/image](https://nextjs.org/docs/api-reference/next/image) - Image optimization

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/devzeph24/feyconnect.git
cd feyconnect
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Add broker logos to the `public` directory:
- robinhood.png
- charleschwab.png
- fidelity.png
- wealthsimple.png
- vanguard.png
- we.png
- coinbase.png
- chase.png

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding New Brokers

Add new brokers to the `brokers` array in `app/page.tsx`:

```typescript
const brokers = [
  { name: "New Broker", icon: "/newbroker.png" },
  // ... existing brokers
];
```

### Styling

The component uses a combination of Tailwind CSS classes and custom styles:

- Background opacity: Modify `bg-[rgba(105,105,105,0.03)]`
- Blur effect: Adjust `backdrop-blur`
- Shadow effects: Customize the `boxShadow` style object
- Border gradient: Modify the gradient values in the border div
- Logo spacing: Adjust `-space-x-4` class
- Button padding: Modify `p-4` class

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from [Dennis Brotzky's tweet](https://x.com/brotzky_/status/1892984381771337866)
- Built with love for the open-source community

## Support

If you like this project, please give it a ⭐️!

For issues and feature requests, please create an [issue](https://github.com/devzeph24/feyconnect/issues).
