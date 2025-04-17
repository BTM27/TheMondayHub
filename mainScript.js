
const roasts = [
  "You're not overwhelmed. You're just undisciplined.",
  "You say you're tired, but all you've done is scroll.",
  "This isn't your grind. It's your avoidance with better branding.",
  "Another task? You haven’t finished yesterday’s lies.",
  "At this point, even your procrastination is disappointed in you.",
  "You're not behind. You're just waiting for reality to hit first.",
  "You're not planning. You're stalling with good intentions.",
  "Every time you refresh, a better version of you sighs.",
  "You don’t need motivation. You need consequences.",
  "You keep building systems to manage your laziness. Impressive.",
  "That ‘creative block’ is just fear wearing a beret.",
  "You’ve renamed this task three times and still haven’t done it.",
  "You’re not ‘working on it.’ You’re watching it age.",
  "Yes, add it to the list. That’ll make you feel productive for five seconds.",
  "Even your browser history is embarrassed for you.",
  "You wanted a fresh start? You haven't earned the stale one yet.",
  "Imagine being haunted by to-do items. Oh wait, you are.",
  "You're not failing. You're *committing* to failure, daily.",
  "You didn't forget. You just chose not to care again.",
  "You’ve achieved peak effort in avoiding effort.",
  "You're not building a brand. You're rebranding laziness.",
  "If your business plan fits in a YouTube comment, it's not a business.",
  "That 5-year-old dropshipper you idolize? He’s fake. You’re just broke.",
  "You're not an entrepreneur. You're unemployed with Wi-Fi.",
  "You don’t need passive income. You need active discipline.",
  "Waking up at 3AM is easy. Doing something at 3AM? That’s where you fail.",
  "You followed 3 grind pages and called it strategy.",
  "You’re not in your ‘grind era.’ You’re in denial with a checklist.",
  "You bought a notebook to look productive. Now it’s a paperweight for your guilt.",
  "You don’t need cold showers. You need accountability.",
  "Stop microwaving noodles and calling it a ‘meal prep era.’",
  "You made a task list, not a personality.",
  "Hustle culture isn’t a personality. It’s a coping mechanism.",
  "You’re not escaping the matrix. You’re failing basic routines.",
  "One cold shower won’t fix years of internalized procrastination.",
  "If your productivity tips came from TikTok, I have news for you.",
  "You bought the course. You didn’t watch the course. Classic you.",
  "You can’t ‘boss up’ if you’re still asking ChatGPT for break-up texts.",
  "You scheduled your goals. Now try showing up for one.",
  "You keep optimizing your day. When will you live it?",
];

const roast = roasts[Math.floor(Math.random() * roasts.length)];
document.getElementById("dailyRoast").innerHTML = `"${roast}"`;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
