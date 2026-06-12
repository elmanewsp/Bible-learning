let currentVerseIndex = 0;
let isSpeaking = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayVerse();
    updateButtons();
});

// Display the current verse
function displayVerse() {
    const verse = verses[currentVerseIndex];
    
    // Display verse text with word wrapping for highlighting
    const verseTextSpans = verse.text.split(' ').map((word, index) => 
        `<span class="word" data-word="${index}">${word}</span>`
    ).join(' ');
    
    document.getElementById('verseText').innerHTML = verseTextSpans;
    document.getElementById('verseReference').textContent = verse.reference;
    document.getElementById('encouragement').textContent = verse.encouragement;
    
    // Draw illustration
    drawIllustration(currentVerseIndex);
    
    // Update progress
    updateProgress();
    
    // Update button states
    updateButtons();
}

// Navigate to next verse
function nextVerse() {
    if (currentVerseIndex < verses.length - 1) {
        currentVerseIndex++;
        displayVerse();
    }
}

// Navigate to previous verse
function previousVerse() {
    if (currentVerseIndex > 0) {
        currentVerseIndex--;
        displayVerse();
    }
}

// Update button states
function updateButtons() {
    document.getElementById('prevBtn').disabled = currentVerseIndex === 0;
    document.getElementById('nextBtn').disabled = currentVerseIndex === verses.length - 1;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentVerseIndex + 1) / verses.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `Verse ${currentVerseIndex + 1} of ${verses.length}`;
}

// Text-to-speech with 8-year-old boy voice and word highlighting
function speakVerse() {
    if (isSpeaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
        clearHighlighting();
        return;
    }

    const verse = verses[currentVerseIndex];
    const words = verse.text.split(' ');
    const textToSpeak = verse.text + ". " + verse.reference;
    
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Configure speech for 8-year-old boy
    utterance.rate = 0.6; // Very slow for easy comprehension
    utterance.pitch = 1.3; // Higher pitch for child voice
    utterance.volume = 1;
    
    // Try to get available voices and select a child-friendly one
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
        const childVoice = voices.find(voice => 
            voice.name.includes('child') || 
            voice.name.includes('young') ||
            voice.name.includes('English')
        ) || voices[0];
        
        utterance.voice = childVoice;
    }
    
    // Word highlighting on boundary
    let currentWordIndex = 0;
    const boundaryHandler = (event) => {
        if (event.type === 'boundary' && event.name === 'word') {
            highlightWord(currentWordIndex);
            currentWordIndex++;
        }
    };
    
    utterance.addEventListener('boundary', boundaryHandler);
    
    // Handle speech end
    utterance.onend = () => {
        isSpeaking = false;
        clearHighlighting();
    };
    
    utterance.onerror = () => {
        isSpeaking = false;
        clearHighlighting();
    };
    
    isSpeaking = true;
    speechSynthesis.speak(utterance);
    
    // Fallback word highlighting if boundary events don't work
    highlightWordsWithTiming(words);
}

// Highlight current word
function highlightWord(wordIndex) {
    clearHighlighting();
    const wordElement = document.querySelector(`span.word[data-word="${wordIndex}"]`);
    if (wordElement) {
        wordElement.classList.add('highlight-word');
    }
}

// Highlight words with timing fallback
function highlightWordsWithTiming(words) {
    const timePerWord = 600; // Adjust based on speech rate (0.6 = slower)
    
    words.forEach((word, index) => {
        setTimeout(() => {
            if (isSpeaking) {
                highlightWord(index);
            }
        }, index * timePerWord);
    });
}

// Clear word highlighting
function clearHighlighting() {
    const highlightedWords = document.querySelectorAll('.highlight-word');
    highlightedWords.forEach(word => {
        word.classList.remove('highlight-word');
    });
}

// Ensure voices are loaded
speechSynthesis.onvoiceschanged = function() {
    // Voices are now available
};

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        previousVerse();
    } else if (event.key === 'ArrowRight') {
        nextVerse();
    } else if (event.key === ' ') {
        event.preventDefault();
        speakVerse();
    }
});
