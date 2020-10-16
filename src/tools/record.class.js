const path = require('path');
var fs = require('fs');
const recordScreen = require('record-screen');

const {remote} = require('electron');
const {screen} = remote;
// const recordScreen = require('record-screen');

const {width, height} = screen.getPrimaryDisplay().size;
const dir = path.join(require('os').homedir(), 'Documents','vid_rec_videos');

if (!fs.existsSync(dir))
    fs.mkdirSync(dir);
    // shell.mkdir('-p', dir);


class ScreenRecord {

    constructor(frames_ps=20) {
        this.frames_ps = frames_ps;
        this.resolution = null;
    }

    setResolution(resolution){
        this.resolution = resolution;
    }

    startRecording() {

        let fpath = this.generateFilename();
        let resol = this.resolution == null ? `${width}x${height}`: this.resolution;

        this.recording = recordScreen(fpath,{
                resolution: resol, // Display resolution,t
                fps: this.frames_ps,

                // fps: 60,
            });
        this.recording.promise
            .then(result => {
                // Screen recording is done
                this.showNotification('Success', 'Recording is saved !');
            }).catch(error => {
            // Screen recording has failed
            this.showNotification('Failure', 'An error occurred !!');
        });
        this.showNotification('Success', 'Recording has started !');
    }

    generateFilename() {
        let datetime_now = new Date().toISOString();
        datetime_now = datetime_now.replace('T','-');
        datetime_now = datetime_now.replace('Z','');

        let filename = `vid-${datetime_now}.mp4`;
        return  dir + '/' + filename;
    }

    stopRecording() {
        this.recording.stop();
    }

    showNotification(title,body ){
        const notification = {
            title: title,
            body: body
        };

        const myNotification = new window.Notification(notification.title, notification);
    }

}

module.exports = ScreenRecord;