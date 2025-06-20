# ChromaText Magic

Welcome to **ChromaText Magic**, a sleek Chrome extension that lets you transform the color of any selected text with a magical touch! Triggered by a simple right arrow key press, this tool opens an interactive color picker, allowing you to apply stunning colors while preserving original styles like font, position, and effects. Perfect for designers, writers, or anyone who loves to add a splash of personality to their web experience.

## Features
- **Universal Text Support**: Works on all text types—plain, styled, hover text, or nested elements (e.g., `<p>`, `<h1>`, `<span>`).
- **Interactive Color Picker**: Select any color with a user-friendly picker, no manual hex input needed.
- **Style Preservation**: Changes only the text color, keeping fonts, sizes, backgrounds, and positions intact.
- **Clipboard Magic**: Automatically copies the last used hex code (e.g., `#ff0000`) to your clipboard.
- **Persistent Until Refresh**: Color changes last until you refresh the page.

## Installation
1. Clone or download this repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/ChromaTextMagic.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the `ChromaTextMagic` folder.
5. The extension is now active!

## Usage
1. Visit any webpage.
2. Select the text you want to colorize.
3. Press the **right arrow key** to open the color picker.
4. Click the color input to choose your desired color, then click "Apply".
5. Watch the text transform! The hex code is copied to your clipboard for reuse.

## Project Structure
- `manifest.json`: Defines the extension's metadata and permissions.
- `content.js`: Handles the logic for text selection, color application, and clipboard functionality.
- `styles.css`: Styles the color picker interface.

## Contributing
We welcome contributions to make ChromaText Magic even better! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request with a clear description of your changes.

## Issues & Support
Encounter a bug or have a suggestion? Please open an issue on the [Issues tab](https://github.com/yourusername/ChromaTextMagic/issues). We’re here to help!

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as you see fit.

## Acknowledgements
- Inspired by the need for a simple, universal text color tool.
- Built with love using Chrome Extension APIs and vanilla JavaScript.

## Changelog
- **v1.9 (June 20, 2025)**: Revamped logic to ensure compatibility with all text types, preserving styles, and copying hex codes.
- **v1.0**: Initial release with basic color picker functionality.

## Contact
Have questions or ideas? Reach out at [your-email@example.com](mailto:your-email@example.com) or connect with me on [GitHub](https://github.com/yourusername).

Happy coloring with **ChromaText Magic**! ✨