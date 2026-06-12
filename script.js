let currentVerseIndex = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayVerse();
    updateButtons();
});

// Display the current verse
function displayVerse() {
    const verse = verses[currentVerseIndex];
    document.getElementById('verseText').textContent = verse.text;
    document.getElementById('verseReference').textContent = verse.reference;
    document.getElementById('encouragement').textContent = verse.encouragement;
    
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

// Text-to-speech functionality
function speakVerse() {
    const verse = verses[currentVerseIndex];
    const textToSpeak = `${verse.text}. ${verse.reference}`;
    
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Configure speech
    utterance.rate = 0.8; // Slower speech for better comprehension
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Speak
    speechSynthesis.speak(utterance);
}

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
