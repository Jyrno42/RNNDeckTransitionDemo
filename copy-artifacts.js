const { exec } = require('child-process-async');

const android = process.argv.includes('--android');
const ios = process.argv.includes('--ios');

// Nice: https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/
async function run() {
    try {
        if (ios) {
            console.log('Generating example gifs from IOS artifacts');

            await exec('cp -R ./artifacts/ios*/**/test.mp4 ./examples/example-ios.mp4');
            await exec('yes | ffmpeg -i ./examples/example-ios.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" example-ios.gif');
        } else if (android) {
            console.log('Generating example gifs from Android artifacts');

            await exec('cp -R ./artifacts/android*/**/test.mp4 ./examples/example-android.mp4');
            await exec('yes | ffmpeg -ss 2.0 -i ./examples/example-android.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" example-android.gif');
        } else {
            console.log('Please provide either --android or --ios');
            process.exit(1);
        }
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

run();