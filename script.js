const levels = [
    { answer: 'france', poster: 'OIP-1469815071.jpg' },
    { answer: 'georgia', poster: 'OIP-3380599782.jpg' },
    { answer: 'germany', poster: 'OIP-875988607.jpg' },
     { answer: 'spain'}
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
            video.poster = levels[currentLevel].poster;
            video.load();
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("Try again");
    }

    return false;
}
