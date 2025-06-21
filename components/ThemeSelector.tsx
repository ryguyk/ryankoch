import React, { useState } from 'react';

export default function ThemeSelector() {
  const [theme, setTheme] = useState('light-blue');
  
  const themes = [
    { name: 'light-blue', gradientStart: 'white', gradientEnd: 'blue' },
    { name: 'light-purple', gradientStart: 'white', gradientEnd: 'purple' },
    { name: 'light-red', gradientStart: 'white', gradientEnd: 'red' },
    { name: 'dark-blue', gradientStart: 'black', gradientEnd: 'blue' },
    { name: 'dark-purple', gradientStart: 'black', gradientEnd: 'purple' },
    { name: 'dark-red', gradientStart: 'black', gradientEnd: 'red' },
  ];

  const setNewTheme = (themeName: string) => {
    setTheme(themeName);
    document.documentElement.className = themeName.replace('-', ' ');
  }

  return (
    <div className="flex gap-3">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setNewTheme(t.name)}
          style={{
            backgroundImage: `linear-gradient(to right, var(--${t.gradientStart}) 30%, var(--${t.gradientEnd}-primary) 90%)`,
          }}
          className={`w-6 h-6 rounded-full ring-2 ring-offset-2 ring-offset-background transition cursor-pointer hover:scale-105 hover:ring-yellow-400
            ${theme === t.name ? 'ring-yellow-400' : 'ring-background'}
          `}
          aria-label={`Switch to ${t.name.replace('theme-', '')} theme`}
        />
      ))}
    </div>
  );
}
