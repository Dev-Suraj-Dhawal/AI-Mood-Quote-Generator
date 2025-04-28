// Unlimited Quotes Database (expanded)
const quotesDB = {
    happy: [
      { text: "Happiness looks good on you. 🌟", emoji: "😊" },
      { text: "Let your smile change the world. 🌎", emoji: "😁" },
      { text: "Collect moments, not things. 🎉", emoji: "🎈" },
      { text: "The purpose of our lives is to be happy. 🌞", emoji: "😃" }
    ],
    sad: [
      { text: "Tough times never last, but tough people do. 💪", emoji: "🌧️" },
      { text: "Your story isn't over yet. 📖", emoji: "🌈" },
      { text: "Sadness flies away on the wings of time. 🕊️", emoji: "⏳" }
    ],
    stressed: [
      { text: "Give yourself a break. 🌿", emoji: "🧘" },
      { text: "Stress less, smile more. 😌", emoji: "☀️" },
      { text: "Breathe. Everything is working out. 🌬️", emoji: "🌊" }
    ],
    angry: [
      { text: "The best fighter is never angry. 🥋", emoji: "😤" },
      { text: "Keep calm and carry on. 🎯", emoji: "😌" },
      { text: "Peace begins with understanding. 🌍", emoji: "🕊️" }
    ],
    confused: [
      { text: "Confusion is the root of learning. 📚", emoji: "🧠" },
      { text: "Not all those who wander are lost. 🧭", emoji: "🌌" },
      { text: "Embrace uncertainty, it's magical. ✨", emoji: "🪄" }
    ],
    excited: [
      { text: "Adventure awaits you! 🚀", emoji: "🚀" },
      { text: "Turn your excitement into momentum. 🔥", emoji: "🔥" },
      { text: "Life’s short. Stay excited. 🎊", emoji: "🎊" }
    ],
    anxious: [
      { text: "This too shall pass. 🌈", emoji: "🍃" },
      { text: "Be gentle with yourself. 💙", emoji: "🫶" },
      { text: "You are stronger than your fears. 🛡️", emoji: "🧡" }
    ],
    bored: [
      { text: "Creativity is born from boredom. 🎨", emoji: "🎨" },
      { text: "Boredom is just a call for adventure. 🛤️", emoji: "✈️" },
      { text: "Explore something new today! 🌍", emoji: "🗺️" }
    ],
    motivated: [
      { text: "Push yourself, no one else will. 💥", emoji: "🏋️" },
      { text: "Dream it. Wish it. Do it. 🚀", emoji: "🏆" },
      { text: "Success is a journey, not a destination. 🎯", emoji: "🏁" }
    ]
  };
  
  function generateQuote() {
    const input = document.getElementById('moodInput').value.trim().toLowerCase();
    const quoteBox = document.getElementById('quoteBox');
    let mood = null;
  
    // Enhanced mood detection
    const moodKeywords = {
      happy: ['happy', 'joy', 'content', 'smile', 'delighted'],
      sad: ['sad', 'down', 'depressed', 'cry'],
      stressed: ['stressed', 'overwhelmed', 'pressure', 'burnout'],
      angry: ['angry', 'furious', 'mad', 'rage'],
      confused: ['confused', 'lost', 'uncertain', 'doubt'],
      excited: ['excited', 'thrilled', 'ecstatic', 'pumped'],
      anxious: ['anxious', 'nervous', 'scared', 'worried'],
      bored: ['bored', 'dull', 'uninterested', 'lazy'],
      motivated: ['motivated', 'inspired', 'energized', 'driven']
    };
  
    for (const [key, keywords] of Object.entries(moodKeywords)) {
      if (keywords.some(word => input.includes(word))) {
        mood = key;
        break;
      }
    }
  
    // Fallback
    if (!mood) mood = 'happy';
  
    const quotes = quotesDB[mood];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    quoteBox.innerHTML = `<div class="emoji">${randomQuote.emoji}</div><div>${randomQuote.text}</div>`;
    quoteBox.classList.remove('show'); // Reset animation
    setTimeout(() => quoteBox.classList.add('show'), 100);
  }
  
  // Create particles for background
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = `${Math.random() * 8 + 2}px`;
    particle.style.height = particle.style.width;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(particle);
  }
  