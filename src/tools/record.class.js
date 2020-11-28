// import {remote} from 'electron';
// import fs from 'fs';

import path from 'path';
import fs from 'fs';
import recordScreen from './FFmpeg.js';
// const recordScreen = require('record-screen');

// const showMessageBox = remote.dialog.showMessageBox;
// const {remote} = require('electron');
// const {screen} = remote;

export class ScreenRecord {

    constructor() {
        this.frames_ps = 20;
        this.resolution = null;
        this.dir = path.join(require('os').homedir(), 'Documents', 'Myrec-videos');
    }

    checkFolderExisting() {
        if (!fs.existsSync(this.dir))
            fs.mkdirSync(this.dir);
    }

    setResolution(resolution) {
        this.resolution = resolution;
    }

    startRecording() {

        let fpath = this.generateFilename();
        // let resol = this.resolution == null ? `${width}x${height}` : this.resolution;

        this.recording = recordScreen(fpath, {
            // resolution: resol, // Display resolution,t
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
        datetime_now = datetime_now.replace('T', '-');
        datetime_now = datetime_now.replace('Z', '');

        let filename = `vid-${datetime_now}.mp4`;
        return this.dir + '/' + filename;
    }

    stopRecording() {
        this.recording.stop();
    }

    showNotification(title, body, type) {
        const notification = {
            type: 'info',
            title: title,
            body: body
        };

        // showMessageBox(notification);
    }

}

// module.exports = ScreenRecord;
