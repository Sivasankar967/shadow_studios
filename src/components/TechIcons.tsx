import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'React':
      return (
        <svg viewBox="0 0 115.3 100" className={className} fill="none">
          <ellipse cx="57.6" cy="50" rx="16.5" ry="45.5" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 57.6 50)" />
          <ellipse cx="57.6" cy="50" rx="16.5" ry="45.5" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 57.6 50)" />
          <ellipse cx="57.6" cy="50" rx="16.5" ry="45.5" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 57.6 50)" />
          <circle cx="57.6" cy="50" r="9" fill="#61DAFB" />
        </svg>
      );

    case 'Next.js':
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none">
          <circle cx="90" cy="90" r="88" fill="#000" stroke="#FFF" strokeWidth="4" />
          <path d="M149.5 158.5L78.6 66.8V126.8H65.8V53.2H78.8L140.2 132.8C143.6 128.4 146.5 123.6 148.9 118.5L88 40.5" fill="#FFF" />
          <path d="M114.2 53.2H127V101.4L114.2 84.8V53.2Z" fill="#FFF" />
        </svg>
      );

    case 'TypeScript':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path d="M68.5 73.5H53.5V108H41.5V73.5H26.5V63H68.5V73.5ZM103.8 77.2C101.5 74.8 98.4 73.1 94.4 72C90.4 70.8 87.6 69.9 86 69.2C84.4 68.4 83.2 67.5 82.5 66.6C81.8 65.6 81.4 64.3 81.4 62.7C81.4 61.1 82 59.7 83.2 58.7C84.4 57.6 86.4 57 89 57C91.5 57 93.6 57.6 95.2 58.9C96.9 60.1 97.9 62 98.4 64.5L108.8 60.5C107.8 56.6 105.5 53.4 102 50.9C98.4 48.4 94.1 47.1 89 47.1C84.6 47.1 80.8 47.9 77.4 49.6C74.1 51.2 71.5 53.5 69.7 56.5C67.9 59.4 67 62.7 67 66.5C67 70.2 67.8 73.3 69.5 75.9C71.2 78.4 73.6 80.4 76.6 81.8C79.6 83.2 83.2 84.5 87.3 85.8C90.5 86.8 92.8 87.8 94.2 88.8C95.6 89.8 96.3 91.2 96.3 93C96.3 94.8 95.4 96.3 93.8 97.4C92.1 98.5 89.7 99 86.6 99C83.3 99 80.6 98.2 78.3 96.7C76 95.1 74.5 92.7 73.7 89.4L63 93.8C64.1 98.4 66.8 102.2 71 105.1C75.2 108 80.5 109.5 86.8 109.5C92.1 109.5 96.6 108.5 100.4 106.6C104.2 104.7 107 102.1 108.9 98.8C110.8 95.5 111.8 91.8 111.8 87.7C111.7 83.2 109 79.7 103.8 77.2Z" fill="#FFF" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M32 48C36.4 30.4 47.4 23.8 65 28.2C54 39.2 51.8 48 58.4 54.6C67.2 63.4 78.2 56.8 96 61.2C85 72.2 82.8 81 89.4 87.6C96 94.2 107 87.6 112 80C107.6 97.6 96.6 104.2 79 99.8C90 88.8 92.2 80 85.6 73.4C76.8 64.6 65.8 71.2 48 66.8C59 55.8 61.2 47 54.6 40.4C48 33.8 37 40.4 32 48Z" fill="#38BDF8" />
        </svg>
      );

    case 'JavaScript (ESNext)':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path d="M38 100C39.5 104 43 106.5 48 106.5C54 106.5 58 102.5 58 94V48H44V91C44 94 42.5 95.5 40 95.5C38.5 95.5 37 94.5 36.5 93.5L38 100ZM72 100C75 105 81.5 107.5 89.5 107.5C98.5 107.5 106 102.5 106 93.5C106 85 100 81 92 78L88 76C82 73.5 79.5 71 79.5 66.5C79.5 62 83.5 59 89 59C94 59 97.5 61.5 100 66L108 61C104.5 54.5 98 50.5 89 50.5C80 50.5 72 55.5 72 65.5C72 73.5 77 78 86 81.5L90 83.5C97 86.5 99.5 89 99.5 94.5C99.5 100 95 103 89.5 103C83.5 103 79 99.5 76 94L72 100Z" fill="#000" />
        </svg>
      );

    case 'HTML5 & Semantic Web':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M19 113.8L8.6 3H119.4L109 113.7L64 125L19 113.8Z" fill="#E44D26" />
          <path d="M64 116.5L101.4 107.2L110.1 12.2H64V116.5Z" fill="#F16529" />
          <path d="M64 54.8H45.7L44.4 40.5H64V27.5H30.5L34.3 67.8H64V54.8ZM64 88.5L48.8 84.4L47.8 73.2H34.8L36.8 95.3L64 102.8V88.5Z" fill="#EBEBEB" />
          <path d="M64 54.8H82.3L80.6 73.2L64 77.8V91.2L89.8 84.1L93.5 40.5H64V27.5H97.5L95.5 54.8H64V54.8Z" fill="#FFF" />
        </svg>
      );

    case 'Modern CSS & Animations':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M19 113.8L8.6 3H119.4L109 113.7L64 125L19 113.8Z" fill="#1572B6" />
          <path d="M64 116.5L101.4 107.2L110.1 12.2H64V116.5Z" fill="#33A9DC" />
          <path d="M64 54.8H45.7L44.4 40.5H64V27.5H30.5L34.3 67.8H64V54.8ZM64 88.5L48.8 84.4L47.8 73.2H34.8L36.8 95.3L64 102.8V88.5Z" fill="#EBEBEB" />
          <path d="M64 54.8H82.3L80.6 73.2L64 77.8V91.2L89.8 84.1L93.5 40.5H64V27.5H97.5L95.5 54.8H64V54.8Z" fill="#FFF" />
        </svg>
      );

    case 'Node.js':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M64 12L112 39.7V95.3L64 123L16 95.3V39.7L64 12Z" fill="#333" stroke="#5FA04E" strokeWidth="6" />
          <path d="M64 25L98 44.6V83.4L64 103L30 83.4V44.6L64 25Z" fill="#5FA04E" />
          <path d="M64 45L80 54V74L64 83L48 74V54L64 45Z" fill="#FFF" />
        </svg>
      );

    case 'Express.js':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#111" stroke="#444" strokeWidth="4" />
          <text x="64" y="78" fill="#FFF" fontSize="36" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">ex</text>
        </svg>
      );

    case 'Python':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M63.5 12C41.8 12 43.1 21.4 43.1 21.4L43.2 31.2H64V34.1H22.4C12.3 34.1 6.8 45.4 6.8 54.9C6.8 64.3 12.8 67.6 19.3 67.6H26.7V57.3C26.7 45.4 36.3 45.1 36.3 45.1H57V38.2C57 26.3 71.9 26.6 71.9 26.6H80.5C80.5 18.7 73.4 12 63.5 12ZM51.3 20.3C53.7 20.3 55.6 22.2 55.6 24.6C55.6 27 53.7 28.9 51.3 28.9C48.9 28.9 47 27 47 24.6C47 22.2 48.9 20.3 51.3 20.3Z" fill="#387EB8" />
          <path d="M64.5 116C86.2 116 84.9 106.6 84.9 106.6L84.8 96.8H64V93.9H105.6C115.7 93.9 121.2 82.6 121.2 73.1C121.2 63.7 115.2 60.4 108.7 60.4H101.3V70.7C101.3 82.6 91.7 82.9 91.7 82.9H71V89.8C71 101.7 56.1 101.4 56.1 101.4H47.5C47.5 109.3 54.6 116 64.5 116ZM76.7 107.7C74.3 107.7 72.4 105.8 72.4 103.4C72.4 101 74.3 99.1 76.7 99.1C79.1 99.1 81 101 81 103.4C81 105.8 79.1 107.7 76.7 107.7Z" fill="#FFE052" />
        </svg>
      );

    case 'FastAPI':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="60" fill="#059669" />
          <path d="M68 24L38 72H62L58 104L88 56H64L68 24Z" fill="#FFF" />
        </svg>
      );

    case 'React Native':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <rect x="36" y="20" width="56" height="88" rx="10" stroke="#61DAFB" strokeWidth="6" />
          <circle cx="64" cy="96" r="4" fill="#61DAFB" />
          <ellipse cx="64" cy="56" rx="10" ry="24" stroke="#61DAFB" strokeWidth="3" transform="rotate(30 64 56)" />
          <ellipse cx="64" cy="56" rx="10" ry="24" stroke="#61DAFB" strokeWidth="3" transform="rotate(90 64 56)" />
          <ellipse cx="64" cy="56" rx="10" ry="24" stroke="#61DAFB" strokeWidth="3" transform="rotate(150 64 56)" />
          <circle cx="64" cy="56" r="4" fill="#61DAFB" />
        </svg>
      );

    case 'Expo Ecosystem':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <rect width="128" height="128" rx="20" fill="#000" stroke="#333" strokeWidth="4" />
          <path d="M32 96L64 32L96 96H78L64 68L50 96H32Z" fill="#FFF" />
        </svg>
      );

    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#336791" />
          <path d="M64 28C48 28 36 40 36 56C36 74 52 92 64 100C76 92 92 74 92 56C92 40 80 28 64 28ZM52 56C52 50 56 46 62 46C68 46 72 50 72 56C72 62 68 66 62 66C56 66 52 62 52 56Z" fill="#FFF" />
          <circle cx="56" cy="52" r="3" fill="#336791" />
          <circle cx="68" cy="52" r="3" fill="#336791" />
        </svg>
      );

    case 'MongoDB':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M64 16C64 16 38 48 38 78C38 98 52 112 64 116C76 112 90 98 90 78C90 48 64 16 64 16Z" fill="#13AA52" />
          <path d="M64 16V116C74 112 88 98 88 78C88 48 64 16 64 16Z" fill="#116149" />
          <path d="M64 40C62 55 60 75 64 106C68 75 66 55 64 40Z" fill="#FFF" opacity="0.3" />
        </svg>
      );

    case 'MySQL':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#00758F" />
          <text x="64" y="74" fill="#F29111" fontSize="30" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">My</text>
          <text x="64" y="102" fill="#FFF" fontSize="26" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">SQL</text>
        </svg>
      );

    case 'Firebase':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M28 88L46 22L62 52L28 88Z" fill="#FFA000" />
          <path d="M78 40L62 52L86 28L78 40Z" fill="#F57C00" />
          <path d="M28 88L64 112L100 88L86 28L28 88Z" fill="#FFCA28" />
          <path d="M64 112L100 88L78 40L64 112Z" fill="#FFA000" />
        </svg>
      );

    case 'Gemini API':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <defs>
            <linearGradient id="geminiGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1BA1E2" />
              <stop offset="50%" stopColor="#9D4EDD" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>
          <circle cx="64" cy="64" r="58" fill="#10141E" stroke="url(#geminiGrad2)" strokeWidth="4" />
          <path d="M64 22C64 46 46 64 22 64C46 64 64 82 64 106C64 82 82 64 106 64C82 64 64 46 64 22Z" fill="url(#geminiGrad2)" />
        </svg>
      );

    case 'OpenAI API':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#10A37F" />
          <path d="M64 34C54 34 46 40 43 49L52 54C54 48 58 44 64 44C71 44 76 49 76 56V60H82C89 60 94 65 94 72C94 79 89 84 82 84H74V94H82C94 94 104 84 104 72C104 62 97 54 88 51C87 41 77 34 64 34Z" fill="#FFF" />
          <circle cx="56" cy="72" r="14" stroke="#FFF" strokeWidth="6" />
        </svg>
      );

    case 'Custom LLMs & Fine-Tuning':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#1A1829" stroke="#D4FF00" strokeWidth="4" />
          <circle cx="64" cy="36" r="8" fill="#D4FF00" />
          <circle cx="36" cy="64" r="8" fill="#D4FF00" />
          <circle cx="92" cy="64" r="8" fill="#D4FF00" />
          <circle cx="48" cy="92" r="8" fill="#D4FF00" />
          <circle cx="80" cy="92" r="8" fill="#D4FF00" />
          <line x1="64" y1="36" x2="36" y2="64" stroke="#D4FF00" strokeWidth="3" />
          <line x1="64" y1="36" x2="92" y2="64" stroke="#D4FF00" strokeWidth="3" />
          <line x1="36" y1="64" x2="48" y2="92" stroke="#D4FF00" strokeWidth="3" />
          <line x1="92" y1="64" x2="80" y2="92" stroke="#D4FF00" strokeWidth="3" />
          <line x1="48" y1="92" x2="80" y2="92" stroke="#D4FF00" strokeWidth="3" />
        </svg>
      );

    case 'RAG Architecture':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#0B1C24" stroke="#00F0FF" strokeWidth="4" />
          <rect x="34" y="34" width="24" height="24" rx="4" stroke="#00F0FF" strokeWidth="3" fill="#00F0FF" fillOpacity="0.2" />
          <rect x="70" y="34" width="24" height="24" rx="4" stroke="#00F0FF" strokeWidth="3" fill="#00F0FF" fillOpacity="0.2" />
          <rect x="34" y="70" width="24" height="24" rx="4" stroke="#00F0FF" strokeWidth="3" fill="#00F0FF" fillOpacity="0.2" />
          <circle cx="82" cy="82" r="14" stroke="#D4FF00" strokeWidth="4" />
          <line x1="92" y1="92" x2="102" y2="102" stroke="#D4FF00" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'Autonomous AI Agents':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#0A2218" stroke="#10F38B" strokeWidth="4" />
          <rect x="38" y="44" width="52" height="42" rx="10" stroke="#10F38B" strokeWidth="4" fill="#10F38B" fillOpacity="0.1" />
          <circle cx="52" cy="60" r="5" fill="#10F38B" />
          <circle cx="76" cy="60" r="5" fill="#10F38B" />
          <path d="M54 74H74" stroke="#10F38B" strokeWidth="3" strokeLinecap="round" />
          <line x1="64" y1="44" x2="64" y2="30" stroke="#10F38B" strokeWidth="4" />
          <circle cx="64" cy="26" r="4" fill="#D4FF00" />
        </svg>
      );

    case 'Figma':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M44 24H64V52H44C36.3 52 30 45.7 30 38C30 30.3 36.3 24 44 24Z" fill="#F24E1E" />
          <path d="M64 24H84C91.7 24 98 30.3 98 38C98 45.7 91.7 52 84 52H64V24Z" fill="#FF7262" />
          <path d="M64 52H84C91.7 52 98 58.3 98 66C98 73.7 91.7 80 84 80H64V52Z" fill="#1ABCFE" />
          <path d="M44 80H64V108C64 115.7 57.7 122 50 122C42.3 122 36 115.7 36 108C36 100.3 42.3 94 50 94H64V80H44C36.3 80 30 73.7 30 66C30 58.3 36.3 52 44 52V80Z" fill="#0ACF83" />
          <circle cx="50" cy="66" r="14" fill="#A259FF" />
        </svg>
      );

    case 'Adobe Photoshop':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="24" fill="#001E36" stroke="#31A8FF" strokeWidth="4" />
          <text x="64" y="80" fill="#31A8FF" fontSize="48" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">Ps</text>
        </svg>
      );

    case 'Adobe Illustrator':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="24" fill="#330000" stroke="#FF9A00" strokeWidth="4" />
          <text x="64" y="80" fill="#FF9A00" fontSize="48" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">Ai</text>
        </svg>
      );

    case 'Git & GitHub':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#181717" stroke="#F05032" strokeWidth="4" />
          <path d="M96 56L68 28C66 26 62 26 60 28L54 34L64 44C66 43 69 44 71 46C73 48 74 51 73 53L83 63C85 62 88 63 90 65C93 68 93 72 90 75C87 78 83 78 80 75C78 73 77 70 78 68L69 59V83C70 84 70 85 70 86C70 89 67 92 64 92C61 92 58 89 58 86C58 83 61 80 64 80V56C63 56 62 55 61 54L51 64C52 66 52 68 51 70C49 73 45 74 42 72C39 70 38 66 40 63C42 60 46 59 49 61L58 52V50L32 76C30 78 30 82 32 84L60 112C62 114 66 114 68 112L96 84C98 82 98 78 96 76L96 56Z" fill="#F05032" />
        </svg>
      );

    case 'Vercel & Edge Network':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#000" stroke="#FFF" strokeWidth="4" />
          <path d="M64 32L96 88H32L64 32Z" fill="#FFF" />
        </svg>
      );

    case 'Docker':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#001830" stroke="#2496ED" strokeWidth="4" />
          <rect x="42" y="52" width="10" height="8" rx="1" fill="#2496ED" />
          <rect x="54" y="52" width="10" height="8" rx="1" fill="#2496ED" />
          <rect x="66" y="52" width="10" height="8" rx="1" fill="#2496ED" />
          <rect x="54" y="42" width="10" height="8" rx="1" fill="#2496ED" />
          <rect x="66" y="42" width="10" height="8" rx="1" fill="#2496ED" />
          <rect x="78" y="52" width="10" height="8" rx="1" fill="#2496ED" />
          <path d="M30 68C30 68 36 68 44 72C50 76 60 76 68 72C76 68 84 68 94 72C102 76 106 72 106 72C106 84 96 94 80 94C58 94 40 86 30 68Z" fill="#2496ED" />
        </svg>
      );

    case 'CI/CD Pipelines':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="58" fill="#1C102C" stroke="#9D4EDD" strokeWidth="4" />
          <circle cx="44" cy="64" r="12" stroke="#9D4EDD" strokeWidth="4" />
          <circle cx="84" cy="64" r="12" stroke="#9D4EDD" strokeWidth="4" />
          <path d="M44 52C54 44 74 44 84 52" stroke="#D4FF00" strokeWidth="4" strokeLinecap="round" />
          <path d="M84 76C74 84 54 84 44 76" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#D4FF00" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
};
