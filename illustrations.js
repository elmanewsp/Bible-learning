// Pixar-style SVG illustrations for each verse
const illustrations = {
    0: `
        <!-- Your word is a lamp to my feet -->
        <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyGrad)"/>
        <circle cx="350" cy="50" r="40" fill="#FFD700" opacity="0.3"/>
        
        <!-- Stars -->
        <circle cx="50" cy="40" r="2" fill="#FFD700"/>
        <circle cx="100" cy="60" r="2" fill="#FFD700"/>
        <circle cx="150" cy="30" r="2" fill="#FFD700"/>
        <circle cx="200" cy="50" r="2" fill="#FFD700"/>
        <circle cx="280" cy="70" r="2" fill="#FFD700"/>
        
        <!-- Ground -->
        <ellipse cx="200" cy="280" rx="200" ry="40" fill="#8B7355"/>
        <rect x="0" y="250" width="400" height="50" fill="#90EE90"/>
        
        <!-- Cute character holding lamp -->
        <circle cx="100" cy="200" r="20" fill="#F4A460"/>
        
        <!-- Lamp -->
        <rect x="220" y="120" width="40" height="60" fill="#FFD700" rx="5"/>
        <ellipse cx="240" cy="120" rx="25" ry="10" fill="#FFA500"/>
        <circle cx="240" cy="100" r="8" fill="#FFD700"/>
        
        <!-- Light rays -->
        <line x1="240" y1="85" x2="240" y2="50" stroke="#FFD700" stroke-width="3" opacity="0.8"/>
        <line x1="220" y1="90" x2="180" y2="60" stroke="#FFD700" stroke-width="2" opacity="0.6"/>
        <line x1="260" y1="90" x2="300" y2="60" stroke="#FFD700" stroke-width="2" opacity="0.6"/>
    `,
    1: `
        <!-- Jesus loves you -->
        <defs>
            <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
            </radialGradient>
        </defs>
        <rect width="400" height="300" fill="#87CEEB"/>
        
        <!-- Sun -->
        <circle cx="350" cy="50" r="35" fill="url(#sunGrad)"/>
        
        <!-- Clouds -->
        <ellipse cx="50" cy="60" rx="40" ry="20" fill="white"/>
        <ellipse cx="30" cy="70" rx="25" ry="15" fill="white"/>
        <ellipse cx="70" cy="70" rx="20" ry="15" fill="white"/>
        
        <!-- Ground -->
        <rect x="0" y="200" width="400" height="100" fill="#90EE90"/>
        
        <!-- Cute heart shape -->
        <path d="M 200 180 L 220 160 Q 240 140 240 120 Q 240 100 220 100 Q 200 100 200 120 Q 200 100 180 100 Q 160 100 160 120 Q 160 140 180 160 Z" fill="#FF69B4" stroke="#FF1493" stroke-width="2"/>
        
        <!-- Happy character -->
        <circle cx="200" cy="250" r="15" fill="#F4A460"/>
        <circle cx="195" cy="245" r="2" fill="black"/>
        <circle cx="205" cy="245" r="2" fill="black"/>
        <path d="M 195 250 Q 200 253 205 250" stroke="black" stroke-width="2" fill="none"/>
        
        <!-- Arms up -->
        <line x1="185" y1="260" x2="150" y2="240" stroke="#F4A460" stroke-width="4"/>
        <line x1="215" y1="260" x2="250" y2="240" stroke="#F4A460" stroke-width="4"/>
    `,
    2: `
        <!-- God is love -->
        <rect width="400" height="300" fill="#FFB6C1"/>
        
        <!-- Rainbow -->
        <path d="M 50 250 Q 50 100 200 80 Q 350 100 350 250" stroke="#FF0000" stroke-width="8" fill="none"/>
        <path d="M 70 250 Q 70 115 200 95 Q 330 115 330 250" stroke="#FF7F00" stroke-width="8" fill="none"/>
        <path d="M 90 250 Q 90 130 200 110 Q 310 130 310 250" stroke="#FFFF00" stroke-width="8" fill="none"/>
        <path d="M 110 250 Q 110 145 200 125 Q 290 145 290 250" stroke="#00FF00" stroke-width="8" fill="none"/>
        <path d="M 130 250 Q 130 160 200 140 Q 270 160 270 250" stroke="#0000FF" stroke-width="8" fill="none"/>
        
        <!-- Flowers -->
        <circle cx="80" cy="260" r="8" fill="#FF69B4"/>
        <circle cx="72" cy="250" r="6" fill="#FFD700"/>
        <circle cx="88" cy="250" r="6" fill="#FFD700"/>
        <circle cx="72" cy="270" r="6" fill="#FFD700"/>
        <circle cx="88" cy="270" r="6" fill="#FFD700"/>
        
        <circle cx="320" cy="260" r="8" fill="#FF69B4"/>
        <circle cx="312" cy="250" r="6" fill="#FFD700"/>
        <circle cx="328" cy="250" r="6" fill="#FFD700"/>
        <circle cx="312" cy="270" r="6" fill="#FFD700"/>
        <circle cx="328" cy="270" r="6" fill="#FFD700"/>
        
        <!-- Happy character in center -->
        <circle cx="200" cy="200" r="25" fill="#F4A460"/>
        <circle cx="190" cy="195" r="3" fill="black"/>
        <circle cx="210" cy="195" r="3" fill="black"/>
        <path d="M 190 205 Q 200 210 210 205" stroke="black" stroke-width="2" fill="none"/>
    `,
    3: `
        <!-- Trust in the Lord -->
        <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#87CEEB"/>
        
        <!-- Mountains -->
        <polygon points="0,200 100,80 200,200" fill="url(#mountainGrad)"/>
        <polygon points="150,200 250,60 350,200" fill="#A0522D"/>
        
        <!-- Snow caps -->
        <polygon points="100,80 90,95 110,95" fill="white"/>
        <polygon points="250,60 240,75 260,75" fill="white"/>
        
        <!-- Character climbing -->
        <circle cx="150" cy="130" r="12" fill="#F4A460"/>
        <rect x="140" y="145" width="20" height="30" fill="#FF6B9D"/>
        <line x1="140" y1="145" x2="120" y2="130" stroke="#F4A460" stroke-width="3"/>
        <line x1="160" y1="145" x2="180" y2="130" stroke="#F4A460" stroke-width="3"/>
        
        <!-- Cross at top -->
        <rect x="95" y="65" width="10" height="30" fill="#8B4513"/>
        <rect x="80" y="75" width="40" height="8" fill="#8B4513"/>
        
        <!-- Clouds -->
        <ellipse cx="350" cy="40" rx="35" ry="20" fill="white" opacity="0.8"/>
    `,
    4: `
        <!-- I can do all things through Christ -->
        <rect width="400" height="300" fill="#E0F6FF"/>
        
        <!-- Sun -->
        <circle cx="340" cy="40" r="30" fill="#FFD700"/>
        
        <!-- Grass -->
        <rect x="0" y="220" width="400" height="80" fill="#90EE90"/>
        
        <!-- Strong character with muscles -->
        <circle cx="200" cy="120" r="20" fill="#F4A460"/>
        <rect x="165" y="145" width="70" height="35" fill="#FF6B9D"/>
        
        <!-- Arms showing strength -->
        <circle cx="150" cy="130" r="8" fill="#F4A460"/>
        <circle cx="250" cy="130" r="8" fill="#F4A460"/>
        <circle cx="145" cy="125" r="6" fill="#FFD700"/>
        <circle cx="255" cy="125" r="6" fill="#FFD700"/>
        
        <!-- Legs -->
        <rect x="180" y="180" width="8" height="40" fill="#333"/>
        <rect x="212" y="180" width="8" height="40" fill="#333"/>
        
        <!-- Smile -->
        <path d="M 190 130 Q 200 138 210 130" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="195" cy="125" r="2" fill="black"/>
        <circle cx="205" cy="125" r="2" fill="black"/>
        
        <!-- Stars around showing power -->
        <circle cx="100" cy="80" r="3" fill="#FFD700"/>
        <circle cx="300" cy="80" r="3" fill="#FFD700"/>
        <circle cx="80" cy="150" r="3" fill="#FFD700"/>
        <circle cx="320" cy="150" r="3" fill="#FFD700"/>
    `,
    5: `
        <!-- The Lord is my shepherd -->
        <rect width="400" height="300" fill="#87CEEB"/>
        
        <!-- Pastoral landscape -->
        <ellipse cx="200" cy="250" rx="200" ry="50" fill="#90EE90"/>
        <path d="M 0 220 Q 100 180 200 200 T 400 220" stroke="#90EE90" stroke-width="20" fill="none"/>
        
        <!-- Shepherd -->
        <circle cx="80" cy="160" r="15" fill="#F4A460"/>
        <rect x="65" y="180" width="30" height="40" fill="#8B4513"/>
        <line x1="50" y1="200" x2="30" y2="240" stroke="#333" stroke-width="4"/>
        <line x1="95" y1="200" x2="115" y2="240" stroke="#333" stroke-width="4"/>
        
        <!-- Staff -->
        <line x1="30" y1="160" x2="20" y2="100" stroke="#8B4513" stroke-width="3"/>
        <path d="M 20 100 Q 10 95 15 85" stroke="#8B4513" stroke-width="3" fill="none"/>
        
        <!-- Sheep -->
        <circle cx="200" cy="210" r="12" fill="white" stroke="#333" stroke-width="1"/>
        <circle cx="210" cy="205" r="3" fill="black"/>
        <circle cx="195" cy="225" r="4" fill="#333"/>
        <circle cx="190" cy="225" r="4" fill="#333"/>
        <circle cx="210" cy="225" r="4" fill="#333"/>
        
        <circle cx="280" cy="220" r="12" fill="white" stroke="#333" stroke-width="1"/>
        <circle cx="290" cy="215" r="3" fill="black"/>
        
        <!-- Clouds -->
        <ellipse cx="150" cy="50" rx="40" ry="20" fill="white" opacity="0.7"/>
        <ellipse cx="300" cy="70" rx="35" ry="18" fill="white" opacity="0.7"/>
    `,
    6: `
        <!-- Peace of Christ -->
        <defs>
            <linearGradient id="peaceSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#E0FFFF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#B0E0E6;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#peaceSky)"/>
        
        <!-- Lake -->
        <ellipse cx="200" cy="200" rx="180" ry="80" fill="#4A90E2" opacity="0.3"/>
        
        <!-- Peaceful character meditating -->
        <circle cx="200" cy="140" r="18" fill="#F4A460"/>
        <path d="M 180 160 Q 200 170 220 160" stroke="#333" stroke-width="2" fill="none"/>
        
        <!-- Meditation pose -->
        <g opacity="0.6">
            <line x1="200" y1="160" x2="190" y2="190" stroke="#333" stroke-width="3"/>
            <line x1="200" y1="160" x2="210" y2="190" stroke="#333" stroke-width="3"/>
            <line x1="190" y1="190" x2="180" y2="210" stroke="#333" stroke-width="3"/>
            <line x1="210" y1="190" x2="220" y2="210" stroke="#333" stroke-width="3"/>
        </g>
        
        <!-- Peaceful doves -->
        <path d="M 100 100 Q 110 90 120 100" stroke="#8B4513" stroke-width="2" fill="none"/>
        <circle cx="115" cy="95" r="3" fill="black"/>
        
        <path d="M 280 110 Q 290 100 300 110" stroke="#8B4513" stroke-width="2" fill="none"/>
        <circle cx="295" cy="105" r="3" fill="black"/>
        
        <!-- Flowers -->
        <circle cx="150" cy="240" r="4" fill="#FF69B4"/>
        <circle cx="145" cy="235" r="3" fill="#FFD700"/>
        <circle cx="155" cy="235" r="3" fill="#FFD700"/>
        <circle cx="145" cy="245" r="3" fill="#FFD700"/>
        <circle cx="155" cy="245" r="3" fill="#FFD700"/>
        
        <circle cx="280" cy="250" r="4" fill="#FF69B4"/>
        <circle cx="275" cy="245" r="3" fill="#FFD700"/>
        <circle cx="285" cy="245" r="3" fill="#FFD700"/>
    `,
    7: `
        <!-- I am strong -->
        <rect width="400" height="300" fill="#FFE4B5"/>
        
        <!-- Sun -->
        <circle cx="350" cy="50" r="35" fill="#FFD700"/>
        
        <!-- Grass -->
        <rect x="0" y="200" width="400" height="100" fill="#90EE90"/>
        
        <!-- Strong confident character -->
        <circle cx="200" cy="100" r="22" fill="#F4A460"/>
        
        <!-- Confident stance -->
        <rect x="170" y="130" width="60" height="40" fill="#FF6B9D"/>
        
        <!-- Flexed arms -->
        <circle cx="160" cy="110" r="10" fill="#F4A460"/>
        <circle cx="240" cy="110" r="10" fill="#F4A460"/>
        <circle cx="155" cy="103" r="7" fill="#FFD700"/>
        <circle cx="245" cy="103" r="7" fill="#FFD700"/>
        
        <!-- Standing tall legs -->
        <rect x="180" y="175" width="8" height="35" fill="#333"/>
        <rect x="212" y="175" width="8" height="35" fill="#333"/>
        <circle cx="184" cy="213" r="5" fill="#333"/>
        <circle cx="216" cy="213" r="5" fill="#333"/>
        
        <!-- Happy face -->
        <circle cx="195" cy="95" r="2" fill="black"/>
        <circle cx="205" cy="95" r="2" fill="black"/>
        <path d="M 195 105 Q 200 110 205 105" stroke="black" stroke-width="2" fill="none"/>
        
        <!-- Victory lines -->
        <line x1="150" y1="90" x2="120" y2="60" stroke="#FFD700" stroke-width="3" opacity="0.8"/>
        <line x1="250" y1="90" x2="280" y2="60" stroke="#FFD700" stroke-width="3" opacity="0.8"/>
    `,
    8: `
        <!-- Love one another -->
        <rect width="400" height="300" fill="#FFB6D9"/>
        
        <!-- Background hearts -->
        <path d="M 80 60 L 95 45 Q 110 30 110 20 Q 110 10 95 10 Q 80 10 80 20 Q 80 10 65 10 Q 50 10 50 20 Q 50 30 65 45 Z" fill="#FF69B4" opacity="0.3"/>
        <path d="M 320 80 L 335 65 Q 350 50 350 40 Q 350 30 335 30 Q 320 30 320 40 Q 320 30 305 30 Q 290 30 290 40 Q 290 50 305 65 Z" fill="#FF69B4" opacity="0.3"/>
        
        <!-- Two happy characters -->
        <!-- Character 1 -->
        <circle cx="140" cy="160" r="20" fill="#F4A460"/>
        <circle cx="135" cy="155" r="2" fill="black"/>
        <circle cx="145" cy="155" r="2" fill="black"/>
        <path d="M 135 165 Q 140 170 145 165" stroke="black" stroke-width="2" fill="none"/>
        <rect x="125" y="185" width="30" height="35" fill="#FF6B9D"/>
        
        <!-- Character 2 -->
        <circle cx="260" cy="160" r="20" fill="#FFD700"/>
        <circle cx="255" cy="155" r="2" fill="black"/>
        <circle cx="265" cy="155" r="2" fill="black"/>
        <path d="M 255 165 Q 260 170 265 165" stroke="black" stroke-width="2" fill="none"/>
        <rect x="250" y="185" width="30" height="35" fill="#90EE90"/>
        
        <!-- Holding hands -->
        <line x1="155" y1="195" x2="250" y2="195" stroke="#FF69B4" stroke-width="4"/>
        
        <!-- Heart between them -->
        <path d="M 200 130 L 215 115 Q 230 100 230 85 Q 230 70 215 70 Q 200 70 200 85 Q 200 70 185 70 Q 170 70 170 85 Q 170 100 185 115 Z" fill="#FF1493"/>
    `,
    9: `
        <!-- Ask and it will be given -->
        <defs>
            <radialGradient id="giftGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.3" />
            </radialGradient>
        </defs>
        <rect width="400" height="300" fill="#E0F6FF"/>
        
        <!-- Sun -->
        <circle cx="350" cy="40" r="30" fill="#FFD700"/>
        
        <!-- Grass -->
        <rect x="0" y="220" width="400" height="80" fill="#90EE90"/>
        
        <!-- Character asking/praying -->
        <circle cx="150" cy="140" r="18" fill="#F4A460"/>
        <rect x="135" y="165" width="30" height="40" fill="#FF6B9D"/>
        
        <!-- Hands together praying -->
        <polygon points="150,155 145,160 150,165 155,160" fill="#F4A460"/>
        
        <!-- Gift box floating down -->
        <rect x="250" y="100" width="60" height="60" fill="#FF6B9D"/>
        <rect x="270" y="95" width="20" height="70" fill="#FFD700" opacity="0.7"/>
        <polygon points="280,95 270,85 290,85" fill="#FFD700"/>
        
        <!-- Gift glow -->
        <circle cx="280" cy="130" r="40" fill="url(#giftGlow)" opacity="0.4"/>
        
        <!-- Light rays from heaven -->
        <line x1="280" y1="30" x2="280" y2="60" stroke="#FFD700" stroke-width="2" opacity="0.6"/>
        <line x1="250" y1="50" x2="270" y2="70" stroke="#FFD700" stroke-width="2" opacity="0.6"/>
        <line x1="310" y1="50" x2="290" y2="70" stroke="#FFD700" stroke-width="2" opacity="0.6"/>
        
        <!-- Clouds -->
        <ellipse cx="80" cy="60" rx="35" ry="18" fill="white" opacity="0.7"/>
    `
};

// Function to draw illustration
function drawIllustration(verseIndex) {
    const svgElement = document.getElementById('verseSvg');
    if (svgElement && illustrations[verseIndex]) {
        svgElement.innerHTML = illustrations[verseIndex];
    }
}
