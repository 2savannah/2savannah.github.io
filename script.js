document.addEventListener("DOMContentLoaded", function () {
  const lyrics = [
      "How do I make you like me",
      "How do I make you have the same feeling I do",
      "Like I want to know everything about you",
      "and be around you all the time",
      "How do I tell you I want that",
      "and not scare you away already",
      "Because I know we are nearly strangers",
      "I don't know you",
      "but GOD, I want to",
      "How do I make you like me",
      "like I know I could to you."
  ];

  const delay =38;
  const audio = new Audio('sound.mp3'); // replace with the path to your audio file

  function displayLyrics() {
    return new Promise(async (resolve) => {
        audio.play();
        for (const line of lyrics) {
            document.body.textContent += line + '\n';
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        resolve();
    });
}

    displayLyrics();
});