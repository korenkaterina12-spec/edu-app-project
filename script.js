const levels = [
    { answer: 'lego', poster: 'cube.mp4' },
    { answer: 'cube', poster: 'planet.mp4' },
    { answer: 'planet', poster: '' } 
];


function check(event) {
    event.preventDefault();
    let score = document.getElementById('score');
    let level = document.getElementById('level'); 
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer');
    const currentLevel = Number(level.value) - 1;

    if (currentLevel < levels.length && inputValue == levels[currentLevel].answer) {
        alert("Good job");
        score.value = Number(score.value) + 1;
        level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].video) {
            video.children[0].src = levels[currentLevel].video;
            video.load();
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("Try again");
    }

    return false;
}
